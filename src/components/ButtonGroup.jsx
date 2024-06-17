import Button from "./Button";
import { useItemsStore } from "../stores/itemsStore";

export default function ButtonGroup() {
  const removeAllItems = useItemsStore((state) => state.removeAllItems);
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsInComplete = useItemsStore(
    (state) => state.markAllAsInComplete
  );

  const buttons = [
    {
      text: "Mark all as complete",
      onClick: markAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: markAllAsInComplete,
    },
    {
      text: "Reset to initial",
      onClick: resetToInitial,
    },
    {
      text: "Remove all items",
      onClick: removeAllItems,
    },
  ];

  return (
    <section className="button-group">
      {buttons.map((button, index) => (
        <Button key={index} handleOnClick={button.onClick}>
          {button.text}
        </Button>
      ))}
    </section>
  );
}
