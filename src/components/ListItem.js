import React from "react";
import TrashIcon from "~/assets/icons/trash.svg";

const ListItem = ({ item, onChecked = () => {}, onDelete = () => {} }) => {
  const { text, done } = item;

  return (
    <>
      <div className="my-3 flex items-center">
        <input
          type="checkbox"
          className="mr-3 form-checkbox"
          checked={done}
          onChange={handleCheck}
        />
        {text}
        <div
          className="ml-auto text-red-700 cursor-pointer"
          onClick={handleDelete}
        >
          <TrashIcon className="icon" />
        </div>
      </div>
      <hr className="separator" />
    </>
  );

  function handleCheck() {
    onChecked(!done);
  }

  function handleDelete() {
    onDelete(item);
  }
};

export default ListItem;
