const express = require('express')
const app = express()
const port = 3002
const bookingRouter = require('./routes/bookingRoutes')

app.use(express.json());
app.use('/api',bookingRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
