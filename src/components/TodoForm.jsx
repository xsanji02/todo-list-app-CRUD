import React from "react";

export const TodoForm = ({
  handleSubmit,
  inputTodo,
  inputEdit,
  setInputTodo,
}) => {
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
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
