const express = require("express");
const app = express();
const userRouter = require("./routes/user")
const logger = require("morgan")
const adminRouter = require("./routes/admin")

const fs = require("fs")
const path = require("path")
const https = require("https")

const cors = require('cors')
// app.use(cors({
//     origin: ['http://localhost:3000/'],
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true,
//     preflightContinue: false,
//     optionsSuccessStatus: 204
// }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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

// app.listen(process.env.PORT, () => {
//     console.log("App is listening on port " + process.env.PORT)
// })

const sslServer = https.createServer(
    {
        key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
        cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
    },
    app
)

sslServer.listen(process.env.PORT, () => {
    console.log("App is listening on port " + process.env.PORT)
})