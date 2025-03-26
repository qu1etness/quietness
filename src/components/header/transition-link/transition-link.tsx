"use client";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import React, { useRef } from "react";
import { motion } from "motion/react";
import { textAnimation } from "@/animation/anim";
import { transitionOutFunction } from "@/units/transition-functions";
import css from "./transition-link.module.css";
import gsap from "gsap";

interface IProps {
  href: string;
  label: string;
  index: number;
}

const TransitionLink = ({ href, label, index }: IProps) => {
  const router = useRouter();
  const path = usePathname();

  const outer = useRef(null);
  const inner = useRef(null);

  const manageMouseEnter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const target = e.target as HTMLDivElement;
    const bounds = target.getBoundingClientRect();
    if (e.clientY < bounds.top + bounds.height / 2) {
      gsap.set(outer.current, { top: "-100%" });
      gsap.set(inner.current, { top: "100%" });
    } else {
      gsap.set(outer.current, { top: "100%" });
      gsap.set(inner.current, { top: "-100%" });
    }
    gsap.to(outer.current, { top: "0%", duration: 0.3 });
    gsap.to(inner.current, { top: "0%", duration: 0.3 });
  };

  const manageMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const target = e.target as HTMLDivElement;
    const bounds = target.getBoundingClientRect();
    if (e.clientY < bounds.top + bounds.height / 2) {
      gsap.to(outer.current, { top: "-100%", duration: 0.3 });
      gsap.to(inner.current, { top: "100%", duration: 0.3 });
    } else {
      gsap.to(outer.current, { top: "100%", duration: 0.3 });
      gsap.to(inner.current, { top: "-100%", duration: 0.3 });
    }
  };

  return (
    <motion.div
      onMouseEnter={(e) => manageMouseEnter(e)}
      onMouseLeave={(e) => manageMouseLeave(e)}
      className={cn(
        "w-full relative items-center overflow-hidden border-b-1 origin-top first-of-type:border-t-1 border-white border-solid cursor-pointer",
        css.el,
      )}
      variants={textAnimation}
      initial="initial"
      animate="enter"
      exit="exit"
      custom={index}
    >
      <Link
        onClick={(e) => transitionOutFunction({ href, path, router, e })}
        href={href}
        className={cn(
          path == href ? "text-background" : "text-white",
          "z-30 font-bold text-8xl flex justify-center py-6 w-full h-full",
        )}
      >
        <motion.span className={"perspective-[80vh]"}>{label}</motion.span>
      </Link>
      <div
        ref={outer}
        className={
          "absolute h-full w-full z-10 overflow-hidden pointer-events-none will-change-auto"
        }
      >
        <div
          ref={inner}
          className={
            "w-full h-full flex top-full bg-white absolute whitespace-nowrap will-change-auto "
          }
        >
          {[...Array(2)].map((_, index) => (
            <motion.div
              className={cn(
                css.container,
                "border-main-text border-b-main-text border-b-2 border-solid",
              )}
              key={index}
            >
              <span
                className={
                  "text-main-text text-center text-[155px] pb-5 leading-52 inline-block whitespace-nowrap"
                }
              >
                &nbsp;&#8859;&nbsp;
              </span>
              <span className="text-main-text text-center text-[168px] leading-52 inline-block whitespace-nowrap">
                {label}
              </span>
              <span
                className={
                  "text-main-text text-[155px] leading-52 pb-5 inline-block whitespace-nowrap"
                }
              >
                &nbsp;&#8859;&nbsp;
              </span>
              <span
                className={
                  "text-main-text text-[168px] leading-52 inline-block whitespace-nowrap"
                }
              >
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export { TransitionLink };
