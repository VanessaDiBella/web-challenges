import Link from "next/link";
import { volumes } from "../../data.js";

export default function VolumesTwo() {
  const volumeTwo = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <>
      <Link href="../volumes">
        <span>◀️ </span>All Volumes
      </Link>
      <h1>{volumeTwo.title}</h1>
      <p>{volumeTwo.description}</p>
      <ul>
        <li>
          {volumeTwo.books[0].ordinal}:{volumeTwo.books[0].title}
        </li>
        <li>
          {volumeTwo.books[1].ordinal}:{volumeTwo.books[1].title}
        </li>
      </ul>
    </>
  );
}
