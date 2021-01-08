import React from "react";
import ItemTodo from "./ItemTodo";
import PropTypes from "prop-types";
import styles from "./Todo.module.css";

function ListTodo(props) {
  return (
    <ul style={styles.ul}>
      {props.todo.map((todo) => {
        return (
          <ItemTodo
            todo={todo}
            key={todo.id}
            onChange={props.onToggle}
          ></ItemTodo>
        );
      })}
    </ul>
  );
}

ListTodo.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
};

export default ListTodo;
