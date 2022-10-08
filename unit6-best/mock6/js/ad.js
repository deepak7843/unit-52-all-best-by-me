document
  .getElementById("registerForm")
  .addEventListener("submit", async function Register(event) {
    // console.log(123434);
    try {
      event.preventDefault();
      var register_data = {
        brand: document.getElementById("selectBrand").value,
        type: document.getElementById("select_Type").value,
        year: document.getElementById("select_year").value,
        kms: document.getElementById("driven").value,
        Description: document.getElementById("Description").value,
        Price: document.getElementById("Price").value,
      };
      register_data = JSON.stringify(register_data);
      console.log("register_data", register_data);
    } catch (error) {
      console.log("error", error);
    }


    
var otp = document.querySelector(".my_otp1");
otp.style.display = "block";
var otp = "1234";

document.querySelector("#my_otp").addEventListener("click", handle_otp);

function handle_otp() {
  let inp_otp = "";

  let inp1 = document.querySelector("#inp1").value;
  let inp2 = document.querySelector("#inp2").value;
  let inp3 = document.querySelector("#inp3").value;
  let inp4 = document.querySelector("#inp4").value;

  inp_otp = inp1 + inp2 + inp3 + inp4;

  console.log(otp, inp_otp);
  console.log(typeof inp_otp);

  if (otp == inp_otp) {
    //  fetch(`https://mock6-dsd.herokuapp.com/cars` ,{

    //  method: 'POST',
    //  body:

    //  })

    let reg_api = ` https://mock6-dsd.herokuapp.com/cars`;
    // let response = await
    fetch(reg_api, {
      method: "POST",
      body: register_data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        response = response.json();
        console.log(response);

        alert("successfully ad is posted");
        var otp = document.querySelector(".my_otp1");
        otp.style.display = "none";
      })

      .catch((error) => {
        console.log(error.message);
      });

  } else{
    alert("wrong otp")
  }
}


  });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







/////////

    //   let reg_api = ` https://mock6-dsd.herokuapp.com/cars`;
    //   let response = await fetch(reg_api, {
    //     method: "POST",
    //     body: register_data,
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   let data = await response.json();
    //   console.log("data", data);

    //   alert("successfully registered")