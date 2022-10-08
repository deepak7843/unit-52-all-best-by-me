let guests = 0,
  stud = 0,
  prof = 0;

function get_report() {
  fetch(`https://dsd-new-server.herokuapp.com/users`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      guests = data.length;
        document.querySelector("#guests").innerHTML = guests;
    })
    .catch((err) => console.log(err));

  fetch(`https://dsd-new-server.herokuapp.com/users?profession=Student `, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data2) => {
      console.log(data2);
      stud = data2.length;
    //   document.querySelector("#stud").innerHTML = stud;
      document.querySelector("#stud").innerText = stud;
      prof = guests - stud;
      document.querySelector("#prof").innerHTML = prof;
    })

    .catch((err) => console.log(err));
}


get_report()