const express = require('express')
const app = express()
const port = 5000
const db = require("../backend/db/connect")
const useRoutes = require("../backend/routes/user")
const productRoutes = require("../backend/routes/product")
const cors = require("cors");

require("dotenv").config();


db()
app.use(cors());
app.use(express.json()); 

// login and signup"???
app.use("/api/auth/user", useRoutes);

// dynamic routes 
app.use("/uploads", express.static("uploads"));
app.use("/api/auth/product" , productRoutes)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
