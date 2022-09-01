const express = require ("express")

// console.log(express);

const app= express()
// console.log(app);



app.get("/users", function (req, res) {

 console.log("hello");
    res.send({ name: "deepak dsd" });
  });



  app.get("/students", function (req, res) {

    console.log("method", req.method);                                              //req.method ?????

  
    res.send({ student: "deep" });
  });

  
  
  app.listen(5000, () => {
    console.log("listening on port 5000");
  });

  // app.listen(4000, () => {
  //   console.log("listening on port 4000");
  // });



                                                                  console.log("at 6000 not working *********************************************************  , while 4000, 5000 are working");
  // app.listen(6000, () => {  // at 6000 not working  , while 4000, 5000 are working
  //   console.log("listening on port 6000");
  // }); 