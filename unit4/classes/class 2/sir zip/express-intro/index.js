const express = require("express");

const app = express();

// REST APIs => Representational State Transfer
/*
    get => getting data from server
    post => add some data to server
    put / patch => update some data on the server
    delete => remove some data from server
*/

app.get("/users", function (req, res) {
  res.send({ name: "Dhaval" });
});

app.get("/students", function (req, res) {
   console.log("method", req.method);

  res.send({ student: "Abcdfef" });
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});
