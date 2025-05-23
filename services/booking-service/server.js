const express = require('express')
const app = express()
const port = 3002
const {pool} = require('./config/db')

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
