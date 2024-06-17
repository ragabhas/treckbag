import { useMemo, useState } from "react";
import EmptyList from "./EmptyList";
import Select from "react-select";

const sortingOptions = [
  { value: "default", label: "Sort by default" },
  { value: "packed", label: "Sort by packed" },
  { value: "unpacked", label: "Sort by unpacked" },
];

export default function ItemList({
  items,
  handleRemoveItem,
  handleToggleItem,
}) {
  const [sortBy, setSortBy] = useState("default");
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
          onRemoveItem={handleRemoveItem}
          onToggleItem={handleToggleItem}
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
