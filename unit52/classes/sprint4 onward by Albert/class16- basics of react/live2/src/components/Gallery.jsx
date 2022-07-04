import React from "react";
import Avatar from "./Avatar";
import Button from "./Button";

const person1 = {
  image: "https://avatars.githubusercontent.com/u/97316457?v=4",
  name: "Albert",
  id: 1
};
const person2 = {
  image:
    "https://media-exp1.licdn.com/dms/image/D4D35AQEEe_8Jm0CF4Q/profile-framedphoto-shrink_200_200/0/1654096220059?e=1655470800&v=beta&t=dC5ls1NqIfmrHYeDGyp4sSDOKJI4g8OShUYuRwDW0vc",
  name: "Virat ",
  id: 2

};

const Gallery = () => {
  const personsArray = [person1, person2];

  let out = personsArray.map((person) => {
    return (
      <div key={person.id} >
        {/* //   <div> */}
        <Avatar person={person} size={100} />
        <Button text={person.name} />
      </div>
    );
  });

  console.log("out---", out);

  return (
    <div>

        {out}

      {/* <Avatar person={person1} size={300} />
      <Button text={person1.name} />

      <Avatar person={person2} size={100} />
      <Button text={person2.name} /> */}
    </div>
  );
};

export default Gallery;
