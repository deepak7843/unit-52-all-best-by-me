import React from "react";

const ar = [
  { name: "samsung", style: "Square" },
  { name: "htc", style: "Square" },
  { name: "micromax", style: "disc" },
  { name: "apple ", style: "circle" },
];

const Manuf = () => {
  return (
    <div className="App">
      <h1> Mobile Manufacturers </h1>

      <ul>
        {ar.map((el) => (
          <li className={el.style}> {el.name} </li>
        ))}
      </ul>
    </div>
  );
};

export default Manuf;
