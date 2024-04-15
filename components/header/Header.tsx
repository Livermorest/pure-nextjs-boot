import Link from "next/link";
import { siteConfig } from "@/sysconfig";
import HeaderLogo from "./HeaderLogo";
import HeaderLinks from "./HeaderLinks";
import HeaderTheme from "./HeaderTheme";

// https://landingcube.com/amazon-landing-pages/

function Page() {
  const {
    authors: [{ company }],
    headerLinks,
    showThemeButton,
  } = siteConfig;

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <HeaderLogo />
        <HeaderLinks />
        <div className="hidden lg:flex lg:flex-1 lg:justify-end mr-4">
          <Link
            href="/login"
            className="text-gray-900 dark:text-white text-sm font-semibold leading-6"
          >
            Sign in
          </Link>
        </div>
        {showThemeButton ? <HeaderTheme /> : <></>}
      </nav>
    </header>
  );
}

export default Page;
