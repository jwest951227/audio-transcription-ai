"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuButton from "../button/menubutton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props: any) => {

  const pathName = usePathname();

  return (
    <div className="flex justify-between items-center mx-auto px-2 md:px-10 xl:px-20 py-2 md:py-4 2xl:max-w-screen-2xl xl:max-w-screen-xl">
      <nav className="flex items-center gap-1 lg:gap-6 xl:gap-[38px]">
        <Link href={"/"}>
          {pathName === "/" ? (
            <div className="font-semibold text-3xl text-white">JivusScribe</div>
          ) : (
            <div className="font-semibold text-[#3730A3] text-3xl">JivusScribe</div>
          )}
        </Link>
      </nav>

      <div className="flex flex-row items-center gap">
        <MenuButton>
          <FontAwesomeIcon icon={faUser} />
          <span className="sm:flex pl-1 hidden">jwest951227@gmail.com</span>  
        </MenuButton>
      </div>
    </div>
  );
};

export default Navbar;
