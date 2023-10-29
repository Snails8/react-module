import Link from "next/link";
import { BorderContent } from "../../../feature/tailwindcss/component/Border";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-white text-black flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full">

        <Link 
          href="/tailwindcss/typography"
          className="underline text-blue-800"
        >
          <p>typography</p>
        </Link>

        <Link 
          href="/tailwindcss/border"
          className="underline text-blue-800"
        >
          <p>border</p>
        </Link>



      </div>
      </main>
  )

}