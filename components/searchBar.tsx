import Link from "next/link";
import { useState } from "react";

type SearchBarProps = {
  linkTo: string;
};

export default function SearchBar({ linkTo }: SearchBarProps) {
  const [input, setInput] = useState("");

  return (
    <div>
      <p>Search the website for countries</p>
      <input
        type={"search"}
        id={"search"}
        onChange={(e) => setInput(e.target.value)}
      />
      <Link href={linkTo + input}>
        <button>GO</button>
      </Link>
    </div>
  );
}
