import React from "react";
import Logo from "../navbar/logo";
import { footerData, socialMediaIcons } from "@/app/data/data";

function Footer() {
  return (
    <div className="flex lg:flex-row flex-col gap-10  font-['poppins'] justify-between items-center p-5 py-10 w-full h-[30vh]">
      <div className="flex gap-5">
        <div className="hidden lg:block">
          <Logo />
        </div>
        <div className="flex gap-5 lg:gap-16">
          {footerData.map((section, i) => (
            <div key={i}>
              <h1 className="text-sm text-[#393939] font-semibold">
                {section.title}
              </h1>
              <ul className="mt-2 space-y-1">
                {section.links.map((link, index) => (
                  <li
                    key={index}
                    className="text-sm text-[#555] hover:text-black"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2 p-10 lg:p-0">
        <p className="text-[#393939] text-center lg:text-end lg:mr-3 text-sm">
          NOUS SUIVRE
        </p>
        <div className="flex  lg:items-end">
          {socialMediaIcons.map((icon, i) => (
            <a
              href={icon.link}
              key={i}
              aria-label={icon.name || "social media link"}
            >
              <img
                src={icon.src}
                alt={icon.name || "social media icon"}
                className="w-[30px] h-[30px] mr-3"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
