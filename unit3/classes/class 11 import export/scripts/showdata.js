// getData
// appendData

async function getData(url){

    try{
        let res= await fetch(url)

        let data=await res.json()
        return data;
    }
  
    catch (error){
        console.log("error:", error);
    }
}

function appendData(data, parent){

  data.forEach((el) => {
      let div= document.createElement('div')

      let p= document.createElement('p') 

      p.innerText=el.title

  let img= document.createElement('img')

  img.src=el.image

  div.append(img,p);

  parent.append(div);
  });
}

export {getData, appendData};

