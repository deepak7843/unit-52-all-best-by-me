const express = require("express");

const app = express()


app.get("", function (req, res) {

    console.log("hello");
       res.send("hello");
     });

// app.get("/h", (req, res) => {

//     console.log("hello");

//     return res.send("hello");
// });

const books = {
    "2 states" : "chetan bhagat",
    "ethical hacker" : "jack ryan",
}

app.get("/books", (req, res) => {
    return res.send(books);
});




app.listen(9000, () => {
    console.log("listening on port 8080");
});


































// var books = [{
//     name: "Physics",
// },
// {
//     name:"English",
// },
// {
//     name:"Hindi",
// },
// {
//     name:"Chemistry",
// }
// ]
    
// app.get("/books", (req, res) => {
//   return res.send(JSON.stringify(books));
// });