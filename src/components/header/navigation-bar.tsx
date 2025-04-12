import { TransitionLink } from "@/components/header/transition-link/transition-link";

interface ILinks {
  href: string;
  label: string;
}

export const links: ILinks[] = [
  { href: "/about", label: "About" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/", label: "Home" },
];

const NavigationBar = () => {
  return (
    <nav className={"w-full flex justify-center flex-col items-center"}>
      {links.map((item, index) => (
        <TransitionLink
          key={index}
          href={item.href}
          label={item.label}
          index={index}
        />
      ))}
    </nav>
  );
};

export { NavigationBar };
