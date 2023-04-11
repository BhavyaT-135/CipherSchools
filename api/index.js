const express = require('express');
const app = express();
const connectDB = require('./db/connect')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config({path: "./vars/.env"})

app.use(cors())

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

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