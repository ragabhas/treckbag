import { buttons } from "../lib/constants";
import Button from "./Button";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {buttons.map((button) => (
        <Button key={button} type="secondary">
          {button}
        </Button>
      ))}
    </section>
  );
}
