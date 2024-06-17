import { useMemo, useState } from "react";
import EmptyList from "./EmptyList";
import Select from "react-select";
import { useItemsStore } from "../stores/itemsStore";

const sortingOptions = [
  { value: "default", label: "Sort by default" },
  { value: "packed", label: "Sort by packed" },
  { value: "unpacked", label: "Sort by unpacked" },
];

export default function ItemList() {
  const [sortBy, setSortBy] = useState("default");
  const items = useItemsStore((state) => state.items);
  const removeItem = useItemsStore((state) => state.removeItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.checked - a.checked;
        } else if (sortBy === "unpacked") {
          return a.checked - b.checked;
        } else {
          return 0;
        }
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyList />}
      {items.length > 0 && (
        <section className="sorting">
          <Select
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      )}
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onRemoveItem={removeItem}
          onToggleItem={toggleItem}
        />
      ))}
    </ul>
  );
}

function Item({ item, onRemoveItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => onToggleItem(item.id)}
        />
        {item.text}
      </label>
      <button aria-label="Remove item" onClick={() => onRemoveItem(item.id)}>
        ❌
      </button>
    </li>
  );
}
