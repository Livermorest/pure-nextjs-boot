import { siteConfig } from "@/sysconfig";
import React from "react";
import FooterPages from "./FooterPages";
import FooterLinks from "./FooterLinks";

function Page() {
  const d = new Date();
  const currentYear = d.getFullYear();
  const {authors:[{company}]} = siteConfig

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <FooterPages/>
        <FooterLinks/>
        
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          © {currentYear} {company} Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Page;
