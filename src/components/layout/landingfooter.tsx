"use client";

import Link from "next/link";
import { FooterButton } from "../button/fotterbutton";
import { usePathname } from "next/navigation";
import { Image } from "@nextui-org/react";

typeof window !== "undefined";

const LandingFooter = (props: any) => {
  const { children } = props;

  const menu = [
    {
      icon: 'btn_x.svg',
      title: "X (formerly Twitter)",
      path: "https://x.com/jwest951227",
    },
    {
      icon: 'btn_telegram.svg',
      title: "Telegram",
      path: "https://t.me/jwest951227",
    },
  ];

  const pathName = usePathname();

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r bg-[#1C1B1F] text-white py-8 px-4 sm:px-0">
      <div className="flex justify-around gap-7 mx-auto container flex-row" >
        <h3 className="text-2xl sm:text-3xl font-semibold ">JivusScribe</h3>
        <div className="flex flex-wrap gap-8 flex-1 justify-end w-full">
          <div className="flex flex-row gap-4">
            {menu.map((item, idx) => (
              <Link key={idx} href={item.path} className="flex gap-1 items-center">
                <Image src={`/assets/ico/${item.icon}`} className="hover:scale-105 active:scale-99"/>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
