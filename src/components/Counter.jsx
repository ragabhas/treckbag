import { useItemsContext } from "../lib/hooks";

export default function Counter() {
  const { items } = useItemsContext();
  const itemsPacked = items.filter((item) => item.checked).length;
  const totalItems = items.length;
  return (
    <p>
      <b>{itemsPacked}</b> / {totalItems} items packed.
    </p>
  );
}
