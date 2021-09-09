import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/InputTodo";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["aaa", "bbb"]);
  const [completeTodos, setCompleteTodos] = useState(["uuuuu", "eeeeee"]);
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
      />
      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <div className="complete-area">
        <p className="title">完了済みのTODO</p>
        <ul id="complete-list">
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻る</button>
              </div>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default App;
