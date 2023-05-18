import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  const hello = () => {
    const action = confirm("ไปต่อไหม");
    if (action) {
      router.push("/login");
    } else router.back();
  };

  return (
    <div className="bg-purple-500 text-white p-4 flex flex-row gap-5 fixed left-0 right-0">
      <div>
        <Link href="/">Home</Link>
      </div>
      <Link href="/login">Login</Link>

      <div>
        <button className="bg-blue-400" onClick={hello}>
          อะไร
        </button>
      </div>
    </div>
  );
}
