import Link from "next/link";
import { siteConfig } from "@/sysconfig";
import Image from "next/image";
import logolight from "@/public/static/logo/logolight.svg";
import logodark from "@/public/static/logo/logodark.svg";
import { Theme } from "@/types/siteConfig";

export default function ({ theme }: { theme: Theme }) {
  const {
    authors: [{ company }],
  } = siteConfig;

  return (
    <div className="flex lg:flex-1">
      <Link href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">{company}</span>
        <Image
          src={theme == Theme.dark ? logodark : logolight}
          alt={company}
          width={120}
          height={100}
        />
      </Link>
    </div>
  );
}
