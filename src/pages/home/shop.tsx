import { imageLink } from "../../assets/asset";
import { Button } from "../../components/shared";

const Shop = () => {
  return (
    <div className="w-full space-y-5">
      <div className="grid lg:grid-cols-2 px-5 grid-cols-1 items-center justify-center">
        <img src={imageLink.diffuser} />
        <div className="max-w-md items-center flex flex-col space-y-5">
          <p className="lg:text-3xl text-xl font-bold">Shop Now</p>
          <p className="lg:text-base text-[#21384299] text-sm">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
          <Button label="Vist Shop" />
        </div>
      </div>
      <div className="grid  lg:grid-cols-2 grid-cols-1 gap-4  items-center justify-center">
      <div className=" flex items-center flex-col space-y-5">
          <p className="lg:text-3xl text-xl  font-bold">Our Mission</p>
          <p className="lg:text-base w-[330px] text-[#21384299] text-sm">
            We started Sleepstiq with 1 simple goal: to be your best friend at
            bedtime. We, just like you, deal with stress, unease, and trouble
            sleeping from a number of silly things like school, work, screens,
            numbers, and people. That's why we created products that aim to -
          </p>
          
            <p className="text-xs">✓ Promote Calm</p>
            <p className="text-xs">✓ Support Sleep</p>
            <p className="text-xs">✓ Reduce Stress</p>
            <p className="text-xs">✓ Aid Relaxation</p>
          
        </div>
        <img src={imageLink.sleep} className="w-fit" />
      </div>
      <div className="space-y-5 items-center py-10 px-5 justify-center flex flex-col">
        <div className="max-w-xl text-center flex flex-col">
          <p>Visit Our Shop</p>
          <p>
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
        </div>
        <Button label="Visit Shop" />
      </div>

      <div>
   
      </div>
    </div>
  );
};

export default Shop;
