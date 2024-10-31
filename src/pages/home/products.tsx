import { FaStar } from "react-icons/fa6";
import { imageLink } from "../../assets/asset";

// Mock product review data
const data = [
  {
    message:
      "Works great! Just use it and then relax, I fall asleep with no problem every time I use it.",
    seller: "Rachel Dill",
  },
  {
    message:
      "It really helps me fall right to sleep compared to melatonin pills.",
    seller: "Rachel Dill",
  },
  {
    message: `I've tried a lot of things to sleep but none of those worked, so I tried Cloudy and wow! I sleep like a baby now.`,
    seller: "Rachel Dill",
  },
  {
    message:
      "Works great! Just use it and then relax, I fall asleep with no problem every time I use it.",
    seller: "Rachel Dill",
  },
];

// Reusable Review Card component
const ReviewCard = ({
  message,
  seller,
  rating = 5,
}: {
  message: string;
  seller: string;
  rating?: number;
}) => {
  return (
    <div className="shadow-lg max-w-[330px] mx-auto border border-white rounded-lg overflow-hidden">
      <img
        src={imageLink.product}
        alt="Product"
        className="w-full h-40 object-cover"
      />
      <div className="p-5 flex flex-col justify-between">
        <p className="text-sm text-gray-700">{message}</p>
        <div className="mt-4">
          <p className="font-semibold text-gray-800">{seller}</p>
          <div className="flex space-x-1 mt-1">
            {Array.from({ length: rating }).map((_, index) => (
              <FaStar key={index} color="#27AE60" size={12} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Products Component
const Products = () => {
  return (
    <div className="px-5 py-10 w-full text-center">
      <p className="lg:text-3xl font-bold text-xl mb-8">Product Reviews</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {data.map((item, index) => (
          <ReviewCard key={index} message={item.message} seller={item.seller} />
        ))}
      </div>
    </div>
  );
};

export default Products;
