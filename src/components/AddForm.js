import React, { useState } from "react";
import AddIcon from "~/assets/icons/plus.svg";

const AddForm = ({ onAdd = () => {} }) => {
  const [value, setValue] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-full relative shadow border rounded">
        <input
          name="newTask"
          type="text"
          value={value}
          onChange={handleChange}
          autoComplete="off"
          aria-label="Add a new task"
          placeholder="Add a new task..."
          className="rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {value && (
          <button
            className="absolute flex items-center top-0 h-full right-0 px-3 rounded bg-green-200 text-green-900"
            tabIndex="0"
          >
            Add
            <AddIcon className="w-5 ml-2" />
          </button>
        )}
      </div>
    </form>
  );

  function handleChange(e) {
    const value = e.target.value;
    setValue(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(value);
    setValue("");
  }
};

export default AddForm;
