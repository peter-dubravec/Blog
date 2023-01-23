#! /usr/bin/env node

console.log('This script populate database with dummy data');


var async = require('async')
var Post = require('./models/post')
var Comment = require('./models/comment')

var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://peter:peter@cluster0.ah0mtmc.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));


const posts = [];

function commentCreate(author, text, dateAdded, commentedPost, cb) {
    commentdetail = { author, text, dateAdded, commentedPost }

    var comment = new Comment(commentdetail);

    comment.save(function (err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log('comment: ' + comment);
        cb(null, comment)
    });
}

function postCreate(title, text, isPublished, dateAdded, cb) {
    const postdetail = { title, text, isPublished, dateAdded }
    const post = new Post(postdetail)

    post.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }
        posts.push(post)
        console.log('New Post: ' + post);
        cb(null, post);
    });
}

function createPost(cb) {
    async.series([

        function (callback) {
            postCreate('What I learned', 'In nisi felis, ultrices nec erat eu, aliquet malesuada nulla. Ut sed nibh non sem vulputate rhoncus non eget enim. Duis nec turpis augue. Mauris mauris augue, pretium et risus vitae, facilisis ullamcorper turpis. Mauris felis ex, blandit in ante eu, tristique sagittis tellus. Maecenas vitae massa at nibh tincidunt ullamcorper sed ut nisl. Nam scelerisque nisi vitae velit eleifend, vel molestie lacus sagittis. Suspendisse id nisi aliquam, auctor neque at, viverra nunc.', true, undefined, callback)
        },

        function (callback) {
            postCreate('What is next', 'Pellentesque vel vehicula nisl, cursus sagittis enim. Suspendisse egestas in justo id maximus. Curabitur in purus ac erat blandit malesuada eget ornare quam. Sed quis efficitur justo. Mauris at fermentum erat. Nunc a iaculis sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean in enim non lectus imperdiet lobortis. Aenean cursus sem mi, quis ullamcorper dui molestie eget.', false, undefined, callback)
        },
        function (callback) {
            postCreate('What I was up to last year', 'Suspendisse potenti. Pellentesque lobortis rutrum rhoncus. Fusce fermentum in dolor nec pulvinar. Proin dapibus risus id elit commodo, non vestibulum tellus sollicitudin. Nulla condimentum mattis tortor non venenatis. Maecenas ultricies metus condimentum, mollis dui sit amet, finibus metus.', true, undefined, callback)
        },


    ],
        // Optional callback
        cb);
}



function createComment(cb) {
    async.parallel([
        function (callback) {
            commentCreate('Good review', 'In nisi felis, ultrices nec erat eu, aliquet malesuada nulla. Ut sed nibh non sem vulputate rhoncus non eget enim. Duis nec turpis augue. Mauris mauris augue, pretium et risus vitae, facilisis ullamcorper turpis. Mauris felis ex, blandit in ante eu, tristique sagittis tellus. Maecenas vitae massa at nibh tincidunt ullamcorper sed ut nisl.', undefined, posts[0], callback);
        },
        function (callback) {
            commentCreate('Troll', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a urna sit amet orci interdum feugiat in et diam. Etiam vel consectetur sem. Maecenas at sapien tellus. Nullam consequat lacus a ligula dapibus elementum. Sed turpis ex, luctus non ultrices quis, ultrices eu nibh. Nunc in velit finibus, tempor nulla at, semper nunc.', undefined, posts[0], callback);
        },
        function (callback) {
            commentCreate('Bad Comment', 'Vivamus faucibus tristique dolor. Aenean et volutpat sapien. Ut consectetur, risus ac finibus fringilla, massa dolor sodales lectus, vel venenatis nulla augue vitae velit. Curabitur sed magna a mi porttitor elementum in non erat. Curabitur aliquet ullamcorper mauris id convallis.', undefined, posts[2], callback);
        },

    ],
        // optional callback
        cb);
}





async.series([
    createPost,
    createComment,
],
    // Optional callback
    function (err, results) {
        if (err) {
            console.log("there was error")
            console.log('FINAL ERR: ' + err);
        }

        // All done, disconnect from database
        mongoose.connection.close();
    });