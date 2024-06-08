import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { initialItems } from "../lib/constants";

function App() {
  const [items, setItems] = useState(initialItems);
  const handleAddItem = (itemText) => {
    const newItem = {
      id: new Date().getTime(),
      text: itemText,
      checked: false,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, checked: true }))
    );
  };

  const handleMarkAllAsInComplete = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, checked: false }))
    );
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsInComplete={handleMarkAllAsInComplete}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
