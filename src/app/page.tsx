import { EllipseBlock } from "@/components/home/ellipse-block/ellipse-block";
import { InfiniteTextMove } from "@/components/home/infinite-text-move";

const texts = [
  "My entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  "Lviv Ukraine",
  "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  "916 0338 9238 9194 4/2024 212,",
  "Scott M. Hodge",
];

const Home = () => {
  return (
    <div className={"wrapper "}>
      <div className={"w-full "}>
        <div className={"w-full px-8 pt-20"}>
          {texts.map((item, blockIndex) => (
            <InfiniteTextMove key={blockIndex} text={item} index={blockIndex} />
          ))}
        </div>
        <EllipseBlock />
        <div className={"h-screen"}></div>
      </div>
    </div>
  );
};

export default Home;
