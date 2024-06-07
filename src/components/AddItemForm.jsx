import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ setItems }) {
  const [text, setText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    if (!text.trim()) return;
    const newItem = {
      id: new Date().getTime(),
      text: text,
      checked: false,
    };
    setItems((prevItems) => [...prevItems, newItem]);
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
