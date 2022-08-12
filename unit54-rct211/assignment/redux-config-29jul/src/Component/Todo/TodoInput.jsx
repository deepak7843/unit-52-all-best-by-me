import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const TodoInput = ({ onClick }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    const payload = { id: uuid(), title: text, status: false };
    onClick(payload);
    setText("");
  };

  return (
    <div>
      <input
        placeholder="add some task"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <button onClick={handleAdd}> add </button>
    </div>
  );
};

export  {TodoInput};
