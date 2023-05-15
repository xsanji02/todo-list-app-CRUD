import React from "react";
import {Switch} from "react-switch";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export const TodoForm = ({
  handleSubmit,
  inputTodo,
  inputEdit,
  setInputTodo,
  toggleTheme,
  theme,
}) => {
  return (
    <div>
      <div className="switch">
        <span>
          {theme === "light" ? (
            <MdDarkMode className="darkmode" />
          ) : (
            <MdLightMode className="lightmode" />
          )}
        </span>
        <Switch
          onChange={toggleTheme}
          checked={theme === "dark"}
        />
      </div>
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
    </div>
  );
};
