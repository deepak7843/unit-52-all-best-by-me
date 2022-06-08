import React from "react";
import "../App.css";

const Both = () => {
  const ar = [
    {
      head: "Mobile Operating System",
      sub: [
        { name: "Android", style: "disc" },
        { name: "blackberry", style: "disc" },
        { name: "iPhone", style: "disc" },
        { name: "Windows Phone", style: "disc" },
      ],
    },

    {
      head: "Mobile Manufacturers ",
      sub: [
        { name: "samsung", style: "Square" },
        { name: "htc", style: "Square" },
        { name: "micromax", style: "disc" },
        { name: "apple ", style: "circle" },
      ],
    },
  ];

  return (
    <div className="App">
      {ar.map((a) => (
        <div>
          <h1>{a.head}</h1>

          {a.sub.map((el) => (
            <li className={el.style}> {el.name} </li>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Both;
