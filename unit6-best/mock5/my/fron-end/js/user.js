document
.getElementById("registerForm")
.addEventListener("submit", async function Register(event) {
  try {
    event.preventDefault();
    var register_data = {
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      place: document.getElementById("place").value,
      batch_name: document.getElementById("selectBatch").value,
      profession : document.getElementById("select_your_profession").value,
    };
    ////
    register_data = JSON.stringify(register_data);
    console.log("register_data", register_data);
  } catch (error) {
    console.log("error", error);
  }

  let reg_api = ` https://dsd-new-server.herokuapp.com/users`;
  let response = await fetch(reg_api, {
    method: "POST",
    body: register_data,
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await response.json();
  console.log("data", data);

  alert("successfully registered")
}   );