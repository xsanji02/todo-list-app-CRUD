import React from "react";

export const TodoForm = ({
  handleSubmit,
  inputTodo,
  inputEdit,
  setInputTodo,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Todo-List App</h1>
        <input
          type="text"
          value={inputTodo}
          placeholder="what do you need to accomplish today?"
          onChange={(e) => {
            setInputTodo(e.target.value);
          }}
        />
        <button type="submit">{inputEdit ? "Edit" : "Add"}</button>
      </form>
    </div>
  );
};
