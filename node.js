const express = require('express')
const app = express()
const port = 5000
const db = require("../backend/db/connect")
const useRoutes = require("../backend/routes/user")
const cors = require("cors");

require("dotenv").config();


db()
app.use(cors());

// login and signup"???
app.use("/api/auth", useRoutes);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
