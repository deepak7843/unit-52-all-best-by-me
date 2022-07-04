import React from "react";

const Avatar = ({ size = 50, person }) => {
  return (
      <div>
    <img src={person.image} width={size} height={size} alt={person.name} />
    </div>
  );
};

export default Avatar;
