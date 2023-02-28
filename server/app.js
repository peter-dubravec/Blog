const express = require("express");
const app = express();
const userRouter = require("./routes/user")
const logger = require("morgan")
const adminRouter = require("./routes/admin")

const fs = require("fs")
const path = require("path")
const https = require("https")

const cors = require('cors')

console.log("is heere")
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204
}));

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
    console.log("App is listening on port " + process.env.PORT)
})

