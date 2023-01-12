import React, { useEffect, useState } from "react";
import MediaCard from "./CountryCard";
import { Grid } from "@mui/material";

const Countries = () => {
  const [country, setCountry] = useState([]);
  const [sortBy, setSortBy] = useState();
  // const [search, setSearch] = useState();

  // console.log(country);

  useEffect(() => {
    console.log("sortBy--", sortBy);
    if (sortBy === "asc") {
      const sortedData = country.sort((a, b) => a.population - b.population);
      setCountry(sortedData);
    }
    if (sortBy === "desc") {
      const sortedData = country.sort((a, b) => b.population - a.population);
      setCountry(sortedData);
    }
  }, [sortBy]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    let res = await fetch(`https://restcountries.com/v3.1/all`);
    res = await res.json();
    // console.log("res--", res[1]);
    setCountry(res);
  }

  const handleFilter = (e) => {
    console.log("sortBy--", sortBy);

    console.log(e.target.value);
    if (e.target.value === "") {
      getCountries();
    } else {
      fetch(`https://restcountries.com/v3.1/region/${e.target.value}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setCountry(data));
    }
  };

  //   useEffect(() => {
  //     async function getCountries() {
  //       let res = await fetch(`https://restcountries.com/v3.1/all?region=${search}`);
  //       res = await res.json();
  //       console.log("res--", res[1]);
  //       setCountry(res);
  //     }

  //     getCountries();
  //   }, [search]);

  // async function getCountries() {
  //   let res = await fetch(
  //     `https://restcountries.com/v3.1/all?region=${search}`
  //   );
  //   res = await res.json();
  //   console.log("res--", res[1]);
  //   setCountry(res);
  // }

  //   getCountries();

  return (
    // <div  className="countrylist" >

    <div>
      {/* <input  type="text"  onChange={handleFilter} placeholder="filter country by region" /> */}
      {/* <input  type="text"  onChange={(e)=> setSearch(e.target.value)} placeholder="filter country by region" /> */}

      <div className="filt" >

      <div>
        {" "}
        Filter According to region
        <br />
        <select onChange={handleFilter}>
          <option>  Filter According to region </option>
          <option value="Americas"> Americas </option>
          <option value="Africa"> Africa </option>
          <option value="Europe"> Europe </option>
          <option value="Asia"> Asia </option>
          <option value="Oceania"> Oceania </option>
        </select>
      </div>

      <div>
        Sort By Population:
        <br />
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option  > sort by population </option>
          <option value="asc"> Ascending </option>
          <option value="desc"> Descending </option>
        </select>
      </div>

      </div>
      <br />
      <br />
      <br />
      <br />
      {/* <br/> */}
      {/* <br/> */}
      {/* <Br/> */}
      <Grid container spacing={3} className="grid" >
        {country?.map((el, i) => (
          <Grid item xs={12} lg={3} key={i} sm={6}>
            <MediaCard data={el} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Countries;
