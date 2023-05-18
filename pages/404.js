import Link from "next/link";

export default function PageNotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link href="/">Back</Link>
    </div>
  );
}
