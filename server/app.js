const express = require("express");
const app = express();
const path = require("path")
const userRouter = require("./routes/user")
const logger = require("morgan")
const adminRouter = require("./routes/admin")


// Config
require("dotenv").config()
require("./config/mongodb")

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
// Routes
app.use("/api/user/", userRouter)

app.use("/api/admin/", adminRouter)

app.listen(process.env.PORT, () => {
    console.log("App is listening...")
})
