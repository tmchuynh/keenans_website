import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-gray-50 bg-red-900 text-center mt-4 pb-10">
      <div className="flex gap-10 justify-center items-center ">
        <div>
          <Link
            href="/"
            className="underline underline-offset-4 hover:no-underline"
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            href="/about"
            className="underline underline-offset-4 hover:no-underline"
          >
            About
          </Link>
        </div>
        <div>
          <Link
            href="/blog"
            className="underline underline-offset-4 hover:no-underline"
          >
            Read my blog
          </Link>
        </div>
        <div className="my-9">
          <Link
            href="/contact"
            className="underline underline-offset-4 hover:no-underline"
          >
            Contact me
          </Link>
        </div>
      </div>
      <p>&copy; 2025 Keenan. All rights reserved.</p>
    </footer>
  );
}
