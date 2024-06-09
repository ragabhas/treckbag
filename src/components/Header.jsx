import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ itemsPacked, totalItems }) {
  return (
    <header>
      <Logo />
      <Counter itemsPacked={itemsPacked} totalItems={totalItems} />
    </header>
  );
}
