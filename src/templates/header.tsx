"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { NavigationContainer } from "@/components/header/navigation-container";
import { transitionOutFunction } from "@/units/transition-functions";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const path = usePathname();

  return (
    <header>
      <div className={"w-full fixed z-50 flex justify-center items-center"}>
        <div className={"px-12 w-full pt-7 font-italiana flex justify-between"}>
          <Link
            href={"/"}
            className={"text-white "}
            onClick={(e) =>
              transitionOutFunction({ e, href: "/", path, router })
            }
          >
            QUIETNESS
          </Link>
          <button
            className={"flex gap-2"}
            onClick={() => setIsOpen((prevState) => !prevState)}
          >
            <span>MENU</span>
            <div className={"flex flex-col flex-wrap justify-center gap-1.5"}>
              <motion.span
                className={"w-10 h-0.5 rounded-2xl bg-white origin-center"}
                animate={isOpen ? { rotate: 15, y: 4 } : { rotate: 0 }}
              ></motion.span>
              <motion.span
                animate={isOpen ? { rotate: -15, y: -4 } : { rotate: 0 }}
                className={"w-10 h-0.5 rounded-2xl bg-white origin-center"}
              ></motion.span>
            </div>
          </button>
        </div>
      </div>
      <AnimatePresence>{isOpen && <NavigationContainer />}</AnimatePresence>
    </header>
  );
};

export default Header;
