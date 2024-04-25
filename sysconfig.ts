import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX, BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee } from "react-icons/si";

const baseSiteConfig = {
  name: "Pure Next.js Starter",
  description:
    "Pure Next.js Starter is a meticulously designed Next.js starter template aimed at providing developers with a pure, efficient, and scalable foundation for quickly launching.",
  url: "https://lp.lliiv.com",
  ogImage: "https://lp.lliiv.com/og.png",
  metadataBase: "/",
  keywords: [
    "next.js starter",
    "next.js template",
    "awesome starter",
    "study next.js",
  ],
  authors: [
    {
      name: "Livermorest",
      company: "lliiv",
      url: "https://lliiv.com",
      twitter: "https://twitter.com/Livermorest",
    },
  ],
  creator: "@Livermorest",
  showThemeButton: true,
  defaultNextTheme: "system", // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png", // apple-touch-icon.png
  },
  headerLinks: [
    { name: "Features", href: "/features" },
    { name: "Demo", href: "/demo" },
    { name: "Pricing", href: "/pricing" },
    { name: "Studio", href: "/studio" },
  ],
  footerLinks: [
    { name: "email", href: "mailto:shist2023@gmail.com", icon: MdEmail },
    {
      name: "twitter",
      href: "https://twitter.com/Livermorest",
      icon: BsTwitterX,
    },
    { name: "github", href: "https://github.com/Livermorest/", icon: BsGithub },
    {
      name: "buyMeCoffee",
      href: "https://www.buymeacoffee.com/Livermorest",
      icon: SiBuymeacoffee,
    },
  ],
  footerPages: [
    { url: "/about", name: "About" },
    { url: "#", name: "Blog" },
    { url: "#", name: "Jobs" },
    { url: "#", name: "Press" },
    { url: "#", name: "Accessibility" },
    { url: "#", name: "Partners" },
  ],
};

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
};
