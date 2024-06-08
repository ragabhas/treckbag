import Button from "./Button";

export default function ButtonGroup({
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsInComplete,
}) {
  const buttons = [
    {
      text: "Mark all as complete",
      onClick: handleMarkAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: handleMarkAllAsInComplete,
    },
    {
      text: "Reset to initial",
      onClick: handleResetToInitial,
    },
    {
      text: "Remove all items",
      onClick: handleRemoveAllItems,
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
