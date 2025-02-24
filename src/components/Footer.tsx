import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-gray-50 bg-red-900 text-center mt-4 pb-10 sticky bottom-0">
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
          <a
            href="/about"
            className="underline underline-offset-4 hover:no-underline"
          >
            About
          </a>
        </div>
        <div>
          <a
            href="/blog"
            className="underline underline-offset-4 hover:no-underline"
          >
            Read my blog
          </a>
        </div>
        <div className="my-9">
          <a
            href="/contact"
            className="underline underline-offset-4 hover:no-underline"
          >
            Contact me
          </a>
        </div>
      </div>
      <p>&copy; 2025 Keenan. All rights reserved.</p>
    </footer>
  );
}
