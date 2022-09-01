

async function searchMovie() {
  //get movie name

try{
  let movie= document.getElementById("query").value

  let res = await fetch (`https://www.omdbapi.com/?apikey=d806bd70&s=${movie}`);
  
  let data= await res.json()
  console.log("data:", data);

 return data.Search;

} catch (err){
    console.log("err:",err);
}
}

async function main(){
    let data = await searchMovie()
    // console.log();

    if(data===undefined){
        return false
    }
    console.log("data:", data);

    appendData(data)

}

let movies_div=document.getElementById("movies")

function appendData(movies){
    movies_div.innerHTML=null
    movies.forEach(function (el){
     let p=document.createElement("p")
     p.innerText=el.Title
     movies_div.append(p)
    });
}

//debounce?

//func value-main

let timerId;
function debounce(func, delay){
if(timerId){
    clearTimeout(timerId)
}

 timerId= setTimeout(function (){
    func()
}, delay)
// func();


}
