const express = require('express')
const app = express()
const port = 3000
const db = require("../backend/db/connect")

db()


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
