import Link from "next/link";
import { volumes } from "../../data.js";

export default function VolumesOne() {
  const volumeOne = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <>
      <Link href="../volumes">
        <span>◀️ </span>All Volumes
      </Link>
      <h1>{volumeOne.title}</h1>
      <p>{volumeOne.description}</p>
      <ul>
        <li>
          {volumeOne.books[0].ordinal}:{volumeOne.books[0].title}
        </li>
        <li>
          {volumeOne.books[1].ordinal}:{volumeOne.books[1].title}
        </li>
      </ul>
    </>
  );
}
