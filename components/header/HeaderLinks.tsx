"use client"
import { siteConfig } from "@/sysconfig";
import Link from "next/link";
import { useTheme } from 'next-themes'

export default function () {
  const {
    authors: [{ company }],
    headerLinks,
  } = siteConfig;
  const { resolvedTheme } = useTheme()
  return (
    <>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {headerLinks.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`${
              resolvedTheme == "dark" ? "text-white" : "text-gray-900"
            } text-sm font-semibold leading-6 `}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
}
