import { signOut } from "@/auth";
import Link from "next/link";
import { siteConfig } from "@/sysconfig";
import HeaderLogo from "./HeaderLogo";
import HeaderLinks from "./HeaderLinks";
import { Theme } from "@/types/siteConfig";

// https://landingcube.com/amazon-landing-pages/

function Page() {
  const {authors:[{company}],headerLinks,theme} = siteConfig

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <HeaderLogo theme={theme}/>
        <HeaderLinks theme={theme}/>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end mr-4">
          <Link
            href="/login"
            className={`${theme == Theme.dark ? "text-white" : "text-gray-900"} text-sm font-semibold leading-6 `}
          >
            Sign in
          </Link>
          <Link
            className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-indigo-600 text-white -my-2.5 ml-8"
            href="/pricing"
          >
            <span>
              Get all-access <span aria-hidden="true">→</span>
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Page;
