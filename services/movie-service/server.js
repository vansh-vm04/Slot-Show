const express = require('express')
const app = express()
const port = 3000
const Movie = require('./models/MovieModel')
const {createMovie} = require('./controllers/movieController')

app.use(express.json());

app.post('/createMovie',createMovie);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
