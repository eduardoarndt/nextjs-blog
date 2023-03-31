import Link from "next/link";
import { useState } from "react";

export default function SearchBar() {
  const [input, setInput] = useState("");

  return (
    <div>
      <p>Search the website for countries</p>
      <input
        type={"search"}
        id={"search"}
        onChange={(e) => setInput(e.target.value)}
      />
      <Link href={"/search/" + input}>
        <button>GO</button>
      </Link>
    </div>
  );
}
