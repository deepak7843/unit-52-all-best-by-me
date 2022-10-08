let mywish = document.createElement("button");
mywish.innerText = "Wishlist";
mywish.addEventListener("click", async function () {
  try {
    var wish_data_list = {
      brand: e.brand,
      type: e.type,
      year: e.year,
      kms: e.kms,
      Description: e.Description,
      price: e.price,
    };
    wish_data_list = JSON.stringify(wish_data_list);
  } catch (error) {
    console.log("error", error);
  }

  let reg_api = ` /wishlisted_cars`;
  let response = await fetch(reg_api, {
    method: "POST",
    body: wish_data_list,
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await response.json();

  alert(" added in wish_list");

});
