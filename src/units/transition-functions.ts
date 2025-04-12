import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

interface ITransitionOut {
  e: React.MouseEvent<HTMLAnchorElement>;
  router: AppRouterInstance;
  path: string;
  href: string;
}

export const transitionOutFunction = ({
  e,
  router,
  path,
  href,
}: ITransitionOut) => {
  e.preventDefault();
  if (path !== href) {
    const bannerOne = document.getElementById("banner-1");
    const bannerTwo = document.getElementById("banner-2");
    const bannerThree = document.getElementById("banner-3");
    const bannerFour = document.getElementById("banner-4");
    const bannerFive = document.getElementById("banner-5");
    const bannerSix = document.getElementById("banner-6");
    const bannerSeven = document.getElementById("banner-7");
    const bannerEight = document.getElementById("banner-8");

    if (
      bannerOne &&
      bannerTwo &&
      bannerThree &&
      bannerFour &&
      bannerFive &&
      bannerSix &&
      bannerSeven &&
      bannerEight
    ) {
      const timeline = gsap.timeline();

      timeline
        .set([bannerTwo, bannerFour, bannerSix, bannerEight], {
          xPercent: -100,
        })
        .set([bannerOne, bannerThree, bannerFive, bannerSeven], {
          xPercent: 100,
        })
        .to([bannerOne, bannerThree, bannerFive, bannerSeven], {
          xPercent: 0,
          stagger: 0.1,
        })
        .to(
          [bannerTwo, bannerFour, bannerSix, bannerEight],
          {
            xPercent: 0,
            stagger: 0.1,
            onComplete: () => router.push(href),
          },
          "0",
        );
    }
  }
};

interface ITransitionIn {
  firstLoadTarget: React.RefObject<HTMLElement>;
}

export const useTransitionIn = ({ firstLoadTarget }: ITransitionIn) => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const pathname = usePathname();

  useGSAP(() => {
    const bannerOne = document.getElementById("banner-1");
    const bannerTwo = document.getElementById("banner-2");
    const bannerThree = document.getElementById("banner-3");
    const bannerFour = document.getElementById("banner-4");
    const bannerFive = document.getElementById("banner-5");
    const bannerSix = document.getElementById("banner-6");
    const bannerSeven = document.getElementById("banner-7");
    const bannerEight = document.getElementById("banner-8");

    if (
      !bannerOne &&
      !bannerTwo &&
      !bannerThree &&
      !bannerFour &&
      !bannerFive &&
      !bannerSix &&
      !bannerSeven &&
      !bannerEight
    )
      return;

    const timeline = gsap.timeline();
    if (isFirstLoad) {
      timeline.pause();
      const titleTl = gsap.timeline();
      titleTl.set(firstLoadTarget.current, { yPercent: -100 });
      titleTl.to(firstLoadTarget.current, {
        yPercent: 0,
        opacity: 1,
        delay: 1,
      });
      titleTl.to(firstLoadTarget.current, {
        yPercent: 100,
        opacity: 0,
        delay: 0.6,
        onComplete: () => timeline.play(),
      });
      setIsFirstLoad(false);
    }
    timeline
      .set(
        [
          bannerOne,
          bannerThree,
          bannerFive,
          bannerSeven,
          bannerTwo,
          bannerFour,
          bannerSix,
          bannerEight,
        ],
        {
          xPercent: 0,
        },
      )
      .to(
        [bannerOne, bannerThree, bannerFive, bannerSeven],
        {
          xPercent: 100,
          stagger: 0.1,
          delay: isFirstLoad ? 0 : 0.6,
        },
        "0",
      )
      .to(
        [bannerTwo, bannerFour, bannerSix, bannerEight],
        {
          xPercent: -100,
          stagger: 0.1,
          delay: isFirstLoad ? 0 : 0.6,
        },
        "0",
      );
  }, [pathname]);
};
