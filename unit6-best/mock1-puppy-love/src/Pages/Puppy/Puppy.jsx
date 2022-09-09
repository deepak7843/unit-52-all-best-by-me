import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Puppy = () => {
  const location = useLocation();
  const [img, setImg] = useState([]);

  console.log(location.state.name);

  useEffect(() => {
    async function getBreeds() {
      const data = await fetch(
        `https://dog.ceo/api/breed/${location.state.name}/images`
      ).then((d) => d.json());
      console.log(data);
      setImg(data.message);
    }

    getBreeds();
  }, [location]);

  return (

    <div>
      {
        img.map((el) => {
          return (
            <div>
              <img  src={el}  alt="img" />
            </div>
          )
        })
      }
    </div>
  );
};

export default Puppy;
