"use client";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface IProps {
  text: string;
  index: number;
}

const InfiniteTextMove = ({ text, index }: IProps) => {
  const textBlocks = useRef<(HTMLDivElement | null)[]>([]);
  const mainBlock = useRef(null);
  const trigger = useRef(-1);
  const xPercent = useRef(0);
  const animationRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to([textBlocks.current[0], textBlocks.current[1]], {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight * 2,
        onUpdate: (e) => {
          if (trigger.current === e.direction) {
            trigger.current = e.direction * -1;
          }
        },
      },
      x: index % 2 === 0 ? "-300px" : "+300px",
    });
    if (!animationRef.current) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, []);

  const animate = () => {
    if (xPercent.current < -100) {
      xPercent.current = 0;
    } else if (xPercent.current > 0) {
      xPercent.current = -100;
    }
    gsap.set([textBlocks.current[0], textBlocks.current[1]], {
      xPercent: xPercent.current,
    });
    animationRef.current = requestAnimationFrame(animate);
    xPercent.current +=
      (trigger.current / (text.length * 3)) * (index % 2 === 0 ? 1 : -1);
  };

  return (
    <div
      key={index}
      className={"relative flex overflow-hidden whitespace-nowrap"}
    >
      {[...Array(2)].map((_, index) => (
        <div key={index} ref={mainBlock}>
          <div
            ref={(ref) => {
              textBlocks.current[index] = ref;
            }}
            className={cn(
              "border-main-text border-b-main-text border-b-4 border-solid cursor-default",
            )}
          >
            <span
              className={cn(
                "text-main-text text-[70px] leading-20  inline-block whitespace-nowrap",
                "2xl:text-[172px] 2xl:leading-56",
                "xl:text-[160px] xl:leading-[184px]",
                "lg:text-[135px] lg:leading-40",
                "md:text-[105px] md:leading-32",
              )}
            >
              {text}&nbsp;⊛&nbsp;{text}&nbsp;⊛&nbsp;
            </span>
          </div>
        </div>
      ))}
      <div className={"w-full bg-main-text h-1"}></div>
    </div>
  );
};

export { InfiniteTextMove };
