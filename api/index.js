const express = require('express');
const app = express();
require('express-async-errors');
const connectDB = require('./db/connect')
const cors = require('cors')
const dotenv = require('dotenv')

// Routes
const authRouter = require('./routes/auth')
const followerRouter = require('./routes/followers')

// Middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

dotenv.config({path: "./vars/.env"})
app.use(cors())
app.use(express.json());

// Api routes
app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', followerRouter)

// Using the middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();