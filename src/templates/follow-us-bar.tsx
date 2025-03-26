import Image from "next/image";

const FollowUsBar = () => {
  return (
    <div
      className={"fixed top-1/2 flex flex-col -translate-y-1/2 items-center"}
    >
      <span
        className={"font-inter font-bold pb-4 pl-1 [writing-mode:vertical-rl]"}
      >
        Follow Me
      </span>
      <a href={"/"} className={"pl-1"}>
        <Image
          src={"/svgs/instagram-logo.svg"}
          alt={"instagram logo"}
          width={20}
          height={20}
        />
      </a>
    </div>
  );
};

export { FollowUsBar };
