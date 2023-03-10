const mongoose = require("mongoose");


const Schema = mongoose.Schema

const CommentSchema = new Schema({
    author: { type: String, required: true },
    text: { type: String, required: true },
    commentedPost: { type: Schema.Types.ObjectId, ref: "Post" }
}, { timestamps: true })




module.exports = mongoose.model("Comment", CommentSchema)