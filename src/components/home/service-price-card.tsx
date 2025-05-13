import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ServicePriceCard = () => {
  const priceRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: priceRef,
    offset: ["center end", "center start"],
  });

  const priceImagePositionX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "45%"],
  );
  const priceImagePositionY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "70%"],
  );

  return (
    <div
      className={cn(
        "w-screen absolute top-1/5 sm:top-0 right-0 h-full",
        "sm:relative sm:w-full sm:h-1/3",
      )}
    >
      <div className={"w-full"}>
        <div
          className={cn(
            "border-10 absolute bg-[#D9D9D9] left-1/2 -translate-x-1/2  top-full",
            "sm:top-2/3 sm:border-8",
            "md:border-10",
            "lg:border-16",
            "",
          )}
          ref={priceRef}
        >
          <div>
            <motion.img
              src={"/images/service-price.png"}
              className={cn("w-full h-full absolute")}
              style={{ y: priceImagePositionY, x: priceImagePositionX }}
            />
            <div
              className={cn(
                "grid gap-2 p-4",
                "md:gap-4 md:p-7",
                "lg:p-9 lg:gap-6",
                "xl:gap-10",
                "2xl:gap-12",
              )}
            >
              <span
                className={cn(
                  "text-[24px] pr-26 text-background w-min font-medium uppercase font-antonio leading-tight tracking-wider",
                  "2xl:text-[64px] 2xl:pr-60 2xl:leading-20",
                  "xl:text-[56px] xl:pr-52",
                  "lg:text-[44px] lg:pr-40",
                  "md:text-[32px] md:pr-30",
                  "sm:text-[22px] sm:pr-24",
                )}
              >
                A <br />
                WONDER <br />
                FUL <br />
                SERENITY
                <br /> HAS
              </span>
              <div className={"text-black flex flex-col md:gap-2 gap-[2px] "}>
                <span
                  className={
                    "font-antonio 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-lg text-sm"
                  }
                >
                  $43,557.37 ▴
                </span>
                <span
                  className={
                    "lowercase font-italiana font-semibold lg:text-xl md:text-sm text-xs"
                  }
                >
                  price
                </span>
              </div>
              <div className={"text-black flex flex-col md:gap-2 gap-[2px]"}>
                <span className={"font-antonio lg:text-3xl md:text-lg text-sm"}>
                  14.20 ETH ▾
                </span>
                <span
                  className={
                    "lowercase font-italiana font-semibold lg:text-xl md:text-sm text-xs"
                  }
                >
                  Ethereum
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ServicePriceCard };
