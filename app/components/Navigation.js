import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link Link href="/">
          Home
        </Link>
      </li>

      <li>
        <Link Link href="/cabins">
          Cabins
        </Link>
      </li>

      <li>
        <Link Link href="/about">
          About
        </Link>
      </li>

      <li>
        <Link Link href="/account">
          Your Account
        </Link>
      </li>
    </ul>
  );
}
