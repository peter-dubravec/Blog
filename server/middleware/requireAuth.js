const jwt = require('jsonwebtoken')
const Admin = require("../models/admin")

exports.isAuth = async (req, res, next) => {

    // verify authentification
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({ error: "Authorization token required." })
    }

    const token = authorization.split(" ")[1]
    try {
        const { _id } = jwt.verify(token, process.env.SECRET_JWT)

        req.user = await Admin.findOne({ _id }).select('_id')
        next()
    } catch (error) {
        res.status(401).json({ error: 'Request is not authorized.' })
    }
}