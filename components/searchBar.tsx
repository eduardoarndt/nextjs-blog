import Link from "next/link";
import { useState } from "react";

type SearchBarProps = {
  linkTo: string;
  initialInputValue?: string;
};

export default function SearchBar({
  linkTo,
  initialInputValue,
}: SearchBarProps) {
  const [input, setInput] = useState(initialInputValue);

  return (
    <>
      <p>Search the website for countries</p>
      <input
        type={"search"}
        id={"search"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Link href={linkTo + input}>
        <button>GO</button>
      </Link>
    </>
  );
}
