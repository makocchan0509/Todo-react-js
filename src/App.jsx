import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const onChangeText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompTodos = [...incompleteTodos];
    const newCompTodos = [...completeTodos, newIncompTodos[index]];

    newIncompTodos.splice(index, 1);

    setIncompleteTodos(newIncompTodos);
    setCompleteTodos(newCompTodos);
  };

  const onClickBack = (index) => {
    const newCompTodos = [...completeTodos];
    const newIncompTodos = [...incompleteTodos, newCompTodos[index]];

    newCompTodos.splice(index, 1);

    setCompleteTodos(newCompTodos);
    setIncompleteTodos(newIncompTodos);
  };

  return (
    <React.Fragment>
      <InputTodo
        todoText={todoText}
        onChange={onChangeText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるTodoは５個までだ。</p>
      )}
      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo completeTodos={completeTodos} onClickBack={onClickBack} />
    </React.Fragment>
  );
};

export default App;
