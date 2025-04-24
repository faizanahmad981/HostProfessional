// components/TestimonialCard.jsx
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ name, image, text, rating }) => {
  return (
    <div className="border border-yellow-300 rounded-xl p-6 shadow-sm hover:shadow-md transitio bg-gradient-to-r from-[#FAF7EB] to-[#FAEFEB]">
      <p className="text-gray-700 mb-4">"{text}"</p>
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-sm">{name}</h4>
          <div className="flex text-yellow-400">
            {Array.from({ length: rating }).map((_, idx) => (
              <FaStar key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
