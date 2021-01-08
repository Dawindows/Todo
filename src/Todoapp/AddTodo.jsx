import React, { useState } from "react";
import PropTypes from "prop-types";

function AddTodo({ onCreate }) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (value !== "") { 
      onCreate(value);
      setValue("");
    } else {
      alert("Introduce todo!!");
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <input
        className="input-add"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <button type="submit">Add Todo</button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
