const express = require('express')
const app = express()
const port = 3001
const {checkConnection} = require('./config/db')
const seatLayoutRouter = require('./routes/seatLayoutRoutes')
const theatreRouter = require('./routes/theatreRoutes')

checkConnection();

app.use(express.json());

app.use('/api',seatLayoutRouter)
app.use('/api',theatreRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
