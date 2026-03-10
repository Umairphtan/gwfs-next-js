const mongoose = require("mongoose")

const mongodb = "mongodb://localhost:27017/quen"
function Db() {
    mongoose.connect(mongodb).then(() => console.log("data has been connected")).catch((error) => console.log("not connected"))
}
module.exports = Db

