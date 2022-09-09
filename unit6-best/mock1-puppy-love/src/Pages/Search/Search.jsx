import React, { useEffect, useState } from "react";
import SearchCard from "../../components/SearchCard"

const Puppy = () => {

  const [img, setImg] = useState([]);
  const [name, setName] = useState("")
  console.log(name);

  const HandleSearch = () => {
    getSearch()
  }

  let n= [Math.floor(Math.random()*img.length)]


  async function getSearch() {
    const data = await fetch(
      `https://dog.ceo/api/breed/${name}/images`
    ).then((d) => d.json());
    console.log(data.message);
    setImg(data.message);

  }

  return (

    <div>
       <input  
       placeholder="enter breed"
       onChange={(e)=> setName(e.target.value)}
       />

       {
        img.length>0 && <SearchCard  URL={img[n]} />
       }

       <button onClick={HandleSearch} > search </button>
    </div>
  );
};

export default Puppy;
