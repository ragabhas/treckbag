import EmptyList from "./EmptyList";

export default function ItemList({
  items,
  handleRemoveItem,
  handleToggleItem,
}) {
  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyList />}
      {items.map((item) => (
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
