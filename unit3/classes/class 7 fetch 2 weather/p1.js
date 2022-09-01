let key= "1796edde52b662a47b12c2481dc08802"

let container= document.getElementById("container")

let iframe= document.getElementById("gmap_canvas")


 //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


 async function getweatherData (){

 try {
    let city= document.getElementById("city").value; //accepting data
   let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
   
   let data= await res.json();
           console.log("data:" , data);                                                         
   showWeather(data)
//    console.log("data:" , data);
}


 
catch (err){
    console.log("err:", err);
}
 }

//for any city, I should be able to get its weather 

function showWeather(d) {
  console.log("d:", d);

  container.innerHTML= null

  let name= document.createElement('p')
  name.innerText= d.name

  let temp=document.createElement('p')
  temp.innerText=`Temp- ${d.main.temp}`

  let humidity  =document.createElement('p')
  humidity.innerText=d.main.humidity

  let pressure= document.createElement('p')
  pressure.innerText=d.main.pressure;

  iframe.src=  src= `https://maps.google.com/maps?q=${d.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  container.append(name,temp,pressure,humidity);
}
