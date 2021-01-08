import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../Context";
import styles from "./Todo.module.css";

function ItemTodo({ todo, onChange }) {
  const classes = [];
  const { removeTodo } = useContext(Context);

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li style={styles.li}>
      <div className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={todo.completed}
          style={styles.input}
          onChange={() => onChange(todo.id)}
        ></input>
        {todo.title}
      </div>
      <button className={styles.button} onClick={() => removeTodo(todo.id)}>
        &times;
      </button>
    </li>
  );
}

ItemTodo.propTypes = {
  todo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ItemTodo;
