"use client";
import { FooterButton } from "../button/fotterbutton";
import { usePathname } from "next/navigation";

typeof window !== "undefined";

const Footer = (props: any) => {

  const menu = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Blog",
      path: "/",
    },
    {
      title: "Pricing",
      path: "/",
    },
    {
      title: "FAQs",
      path: "/",
    },
    {
      title: "Support",
      path: "/",
    },
    {
      title: "Account",
      path: "/",
    },
    {
      title: "Settings",
      path: "/",
    },
  ];

  const pathName = usePathname();

  return (
    <footer className="flex mt-4">
      <div className="flex flex-col justify-around items-center mx-auto mt-5 mb-5 container">
        ©2024 JivusScribe
        <div className="flex">
          {menu.map((item, idx) => (
            <FooterButton
              href={item.path}
              key={idx}
              active={pathName === item.path}
              className="lg:flex hidden"
            >
              {item.title}
            </FooterButton>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
