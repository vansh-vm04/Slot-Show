const express = require('express')
const app = express()
const port = 3000
const movieRoutes = require('./routes/movieRoutes')

app.use(express.json());

app.use('/api',movieRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
