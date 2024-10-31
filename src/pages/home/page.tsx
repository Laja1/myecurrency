import { imageLink } from "../../assets/asset";
import { Navbar, Button } from "../../components/shared";
import Shop from "./shop";
import { Cards } from "./cards";
import Products from "./products";
import Footer from "../../components/shared/footer";
import Testmonial from "./testmonial";

const Home = () => {
  return (
    <div className=" text-primary">
      <Navbar />
      <div className="w-full  h-full">
  <div className="h-[80vh]"><img
    src={imageLink.background}
    alt="Background"
    className="w-full h-full "
  /></div>
</div>
      <div className="absolute top-40 left-10 lg:left-20 space-y-3">
        <p className="text-base">We're here to help you</p>
        <p className="lg:text-4xl text-2xl font-bold">Relax & Rest</p>
        <p className="lg:text-base text-xs">
          With the aid of our Melatonin Sleepstiq, we can assure you that you
          can get quality sleep.
        </p>
        <Button label="Visit shop" />
      </div>
      <Testmonial />
      <div className="flex justify-center">
        <Cards />
      </div>
      <div className="py-5">
        <Shop />
      </div>
      <div className="py-10 items-center justify-center flex">
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
