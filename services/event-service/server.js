const express = require('express')
const app = express()
const port = 3000
const eventRoutes = require('./routes/eventRoutes')

app.use(express.json());

app.use('/api',eventRoutes);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
