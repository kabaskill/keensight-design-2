import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Keensight Logo">
      <Image
        src="/images/keensight-logo.svg"
        width={250}
        height={250}
        alt="Keensight Logo"
        className="filter invert"
        priority
      />
    </Link>
  );
}
