const express = require('express')
const cors = require('cors')
const app = express()
const port = 4999
const router = require('./routers/mainrouter')
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})