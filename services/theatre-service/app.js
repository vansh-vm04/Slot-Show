const express = require('express')
const app = express()
const {checkConnection} = require('./config/db')
const seatLayoutRouter = require('./routes/seatLayoutRoutes')
const theatreRouter = require('./routes/theatreRoutes')
const seatRouter = require('./routes/seatRoutes')

checkConnection();

app.use(express.json());

app.use('/api',seatLayoutRouter)
app.use('/api',theatreRouter)
app.use('/api',seatRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = app;
