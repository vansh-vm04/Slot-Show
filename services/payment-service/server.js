const express = require('express')
const app = express()
const port = 3003
const paymentRouter = require('./routes/paymentRoutes')
require('dotenv').config();

app.use(express.json());
app.use('/api',paymentRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
