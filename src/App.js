import React from "react";
import ListTodo from "./Todoapp/ListTodo";
import Context from "./Context";
import AddTodo from "./Todoapp/AddTodo";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, title: "Go to the shop", comleted: false },
    { id: 2, title: "Buy cake", comleted: false },
    { id: 3, title: "learn React", comleted: false },
    { id: 4, title: "Eat cake", comleted: false },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          id: Date.now(),
          title,
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <span className="header">Todo App</span>
        <AddTodo onCreate={addTodo}></AddTodo>
        {todos.length ? (
          <ListTodo todo={todos} onToggle={toggleTodo}></ListTodo>
        ) : (
          <span className="no-todos">No Todos</span>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
