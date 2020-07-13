import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import ClipboardIcon from "./assets/icons/clipboard.svg";
import useLocalStorage from "./hooks/useLocalStorage";
import ListItem from "./components/ListItem";
import AddForm from "./components/AddForm";
import LoginButton from "~/components/LoginButton";
import LoginScreen from "~/components/LoginScreen";
import { removeItem, updateItem } from "~/helpers/itemsHelper";
import "./styles/main.css";

const App = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [items, setItems] = useLocalStorage("todo-items", []);

  if (authOpen) {
    return <LoginScreen onClose={() => setAuthOpen(false)} />;
  }

  return (
    <main className="w-full h-full flex justify-center">
      <div className="flex flex-col items-center w-full container">
        <LoginButton onOpen={() => setAuthOpen(true)} />
        <div className="flex items-center mt-8">
          <ClipboardIcon className="mr-3 icon-big" />
          <h1 className="text-4xl font-bold">TO-DO App</h1>
        </div>
        <div className="tasks">
          <AddForm onAdd={addNewItem} />
          {!!items.length && (
            <div className="mt-5">
              {items.map(item => (
                <ListItem
                  key={item.id}
                  item={item}
                  onChecked={changeItemStatus(item)}
                  onDelete={deleteItem}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );

  function addNewItem(item) {
    setItems(currentItems => [item, ...currentItems]);
  }

  function changeItemStatus({ id, text }) {
    return state => {
      const undoneItems = items.filter(item => !item.done && item.id !== id);
      const doneItems = items.filter(item => item.done && item.id !== id);
      const thisItem = { id, text, done: state };
      if (state) {
        // done
        setItems([...undoneItems, ...doneItems, thisItem]);
      } else {
        // undone
        setItems([...undoneItems, thisItem, ...doneItems]);
      }
      updateItem({ id, text, done: state });
    };
  }

  function deleteItem(savedItem) {
    setItems(items => items.filter(item => item.id !== savedItem.id));
    removeItem(savedItem);
  }
};

export default hot(App);
