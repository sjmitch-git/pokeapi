import Link from "next/link";

import { Title, List } from "@/components";

export default function Home() {
  return (
    <div>
      <Title title="List of Pokemons" />
      <List />
      <Link href="/1">First</Link>
    </div>
  );
}
