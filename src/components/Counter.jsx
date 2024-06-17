import { useItemsStore } from "../stores/itemsStore";

export default function Counter() {
  const items = useItemsStore((state) => state.items);
  const itemsPacked = items.filter((item) => item.checked).length;
  const totalItems = items.length;
  return (
    <p>
      <b>{itemsPacked}</b> / {totalItems} items packed.
    </p>
  );
}
