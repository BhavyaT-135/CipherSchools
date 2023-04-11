const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

app.use(cors())

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`)
})