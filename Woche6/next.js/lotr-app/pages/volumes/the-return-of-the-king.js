import Link from "next/link";
import { volumes } from "../../data.js";

export default function VolumesThree() {
  const volumeThree = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );
  return (
    <>
      <Link href="../volumes">
        <span>◀️ </span>All Volumes
      </Link>
      <h1>{volumeThree.title}</h1>
      <p>{volumeThree.description}</p>
      <ul>
        <li>
          {volumeThree.books[0].ordinal}:{volumeThree.books[0].title}
        </li>
        <li>
          {volumeThree.books[1].ordinal}:{volumeThree.books[1].title}
        </li>
      </ul>
    </>
  );
}
