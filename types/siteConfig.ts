import { IconType } from "react-icons";

export type AuthorsConfig = {
  name: string;
  company: string;
  url: string;
  twitter?: string;
};
export type PageLink = {
  url: string;
  name: string;
};
export type Link = {
  name: string;
  href: string;
  icon: IconType;
};
export type ThemeColor = {
  media: string;
  color: string;
};
export enum Theme  {
  light,
  dark
};
export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  keywords: string[];
  authors: AuthorsConfig[];
  creator: string;
  ogImage: string;
  headerLinks: Link[];
  footerLinks: Link[];
  footerPages: PageLink[];
  metadataBase: URL | string;
  themeColors?: string | ThemeColor[];
  theme:Theme;
  defaultNextTheme?: string;
  icons: {
    icon: string;
    shortcut?: string;
    apple?: string;
  };
  openGraph: {
    type: string;
    locale: string;
    url: string;
    title: string;
    description: string;
    siteName: string;
    images?: string[];
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images?: string[];
    creator: string;
  };
};
