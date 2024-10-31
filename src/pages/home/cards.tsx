import { FaStar } from "react-icons/fa6";

const data = [
  {
    message:
      "Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.",
    author: "John Matthews",
  },
  {
    message:
      "I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq.",
    author: "Eunice Oliver",
  },
  {
    message: "It’s a really good product and helps me sleep better at night!",
    author: "Laura Davies",
  },
  {
    message: "Helps me relax and remember to breathe. Stress level definitely goes down.",
    author: "Jane Bocks",
  },
];

export const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-center justify-items-center py-10 px-5">
      {data.map((item, index) => (
        <div
          key={index}
          className="rounded-md flex flex-col justify-between w-full max-w-[300px] bg-[#FBF9F2] p-5 shadow-md"
        >
          <p className="text-sm tracking-wide text-gray-800">{item.message}</p>
          <div className="mt-4">
            <p className="text-base font-bold text-gray-900">{item.author}</p>
            <div className="flex space-x-1 mt-1">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <FaStar key={i} color="#27AE60" size={14} />
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
