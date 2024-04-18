import Image from "next/image";
import Link from "next/link";
//import { useRouter } from "next/navigation";

import Container from "./container";

export default function Header() {
  /*  const router = useRouter();
  console.log(router); */
  return (
    <header>
      <Container>
        <figure className="max-w-md mx-auto aspect-[2.726/1] mb-4">
          <Link href="/" className="relative w-full h-full inline-block">
            <Image src="/logo.svg" alt="Pokémon Logo" fill priority />
          </Link>
        </figure>
        <p className="text-center italic">Explore the world of Pokémon!</p>
      </Container>
    </header>
  );
}
