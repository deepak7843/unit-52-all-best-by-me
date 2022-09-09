import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from "./Home.module.css";

const Home = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
    // async function getData() {
    //   // let data = await fetch("https://dog.ceo/api/breeds/list/all");
    //   // data = await data.json();
    //   // console.log(data);

    //   // const k = Object.keys(data.message);
    //   // setName(k);

    //   const data = await fetch(`https://dog.ceo/api/breeds/list/all`).then(
    //     (d) => d.json()
    //   );
    //   console.log(data);
    //   const k = Object.keys(data.message);
    //   setName(k);
    // }

    getData();
  }, []);

  async function getData() {
    
    const data = await fetch(`https://dog.ceo/api/breeds/list/all`).then(
      (d) => d.json()
    );
    console.log(data);
    const k = Object.keys(data.message);
    setName(k);
  }

  // console.log(name);

  return (
    <div className={styles.cards}>
      {name.map((el) => {
        return (
          <div className={styles.cardshj}>
            <Card breedName={el} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
