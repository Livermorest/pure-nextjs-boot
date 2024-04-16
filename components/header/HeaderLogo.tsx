"use client"

import Link from "next/link";
import { siteConfig } from "@/sysconfig";
import Image from "next/image";
import logolight from "@/public/static/logo/logolight.svg";
import logodark from "@/public/static/logo/logodark.svg";
import { useTheme } from 'next-themes'

export default function () {
  const {
    authors: [{ company }],
  } = siteConfig;
  const { resolvedTheme } = useTheme()

  return (
    <div className="flex lg:flex-1">
      <Link href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">{company}</span>
        <Image
          src={resolvedTheme == 'dark' ? logodark : logolight}
          alt={company}
          height={64}
        />
      </Link>
    </div>
  );
}
