import { svgLink } from '../../assets/asset';

const Testmonial = () => {
  return (
    <div className="p-5 md:p-10 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">
        {/* Left Section */}
        <div className="space-y-3 md:space-y-5 flex flex-col items-start justify-center  text-center lg:text-left">
          <p className="text-sm md:text-base text-gray-600">Our Amazing Story</p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold">10k+ Happy Customers</p>
          <p className="text-sm md:text-base text-gray-700">
            There’s no secret sauce, no wizard behind the curtain. What makes
            Aerolab tick is an interdisciplinary team with a framework that
            fosters candid collaboration.
          </p>
          <button className="text-primary font-semibold hover:underline">
            More know About us
          </button>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <div className="bg-[#FBF9F2] max-w-[300px] md:max-w-[350px] h-[280px] md:h-[300px] drop-shadow-lg py-5 shadow-lg flex flex-col space-y-6 px-5 rounded-lg">
            <p className="text-secondary leading-relaxed tracking-wide text-sm md:text-base">
              I’m a very anxious person but use this and feel so relaxed and
              sleep way better now with the aid of sleepstiq.
            </p>
            <div className="flex items-center gap-3">
              <img src={svgLink.james} alt="James Miller" className="rounded-full w-12 h-12 md:w-14 md:h-14" />
              <div className="flex flex-col">
                <p className="text-sm md:text-base font-bold text-secondary">James Miller</p>
                <p className="text-xs md:text-sm text-gray-600">CEO, Techbias</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testmonial;
