"use client"
import { siteConfig } from "@/sysconfig";
import Link from "next/link";

export default function () {
  return ( 
    <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {siteConfig.footerPages.map((x) => (
            <div className="pb-6" key={x.name}>
              <Link 
                href={x.url}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {x.name}
              </Link>
            </div>
          ))}
        </nav>
  )
}