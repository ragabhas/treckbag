import { useRef, useState } from "react";
import Button from "./Button";
import { useItemsStore } from "../stores/itemsStore";

export default function AddItemForm() {
  const [text, setText] = useState("");
  const inputRef = useRef();
  const addItem = useItemsStore((state) => state.addItem);

  const handleSubmit = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    if (!text.trim()) return;

    addItem(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Item</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Toothpaste"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        autoFocus={true}
      />
      <Button>Add to list</Button>
    </form>
  );
}
