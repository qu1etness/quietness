import { EllipseBlock } from "@/components/home/ellipse-block/ellipse-block";
import { InfiniteTextContainer } from "@/components/home/infinite-text-container";
import MademoiselleContainer from "@/components/home/mademoiselle-container";
import { ServiceContainer } from "@/components/home/service-container";

const Home = () => {
  return (
    <div className={"wrapper"}>
      <div className={"w-full"}>
        <InfiniteTextContainer />
        <EllipseBlock />
        <MademoiselleContainer />
        <ServiceContainer />
      </div>
    </div>
  );
};

export default Home;
