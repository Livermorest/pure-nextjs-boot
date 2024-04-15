import { siteConfig } from "@/sysconfig";
import React from "react";

export default function () {
  return ( 
    <div className="mt-10 flex justify-center space-x-10">
          {
            siteConfig.footerLinks.map(x=>(
              <a key={x.name} href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{x.name}</span>
                {x.icon && React.createElement(x.icon,{className:"text-xl"})}
              </a>
            ))
          }
        </div>
  )
}