import Button from "./Button";

export default function AddItemForm() {
  return (
    <form>
      <h2>Add Item</h2>
      <input type="text" placeholder="Name" />
      <Button>Add to list</Button>
    </form>
  );
}
