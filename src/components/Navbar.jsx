"use client";

import { Navlink } from "@/lib/constant";
import Link from "next/link";
import Dmtoggle from "./DarkModeToggle";

function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-50 flex flex-col w-full items-center select-none notranslate bg-lprimary dark:bg-primary dark:text-white py-5">
        <div className="flex px-8 md:px-0 md:justify-center items-center">
          <nav className="flex justify-center gap-10 dark:text-white uppercase font-Quisand font-semibold">
            {Navlink.map((data) => (
              <div key={data.name}>
                <Link href={data.link} className="hoverText">
                  {data.name}
                </Link>
              </div>
            ))}
          </nav>
          <Dmtoggle />
        </div>
      </header>
    </>
  );
}

export default Navbar;
