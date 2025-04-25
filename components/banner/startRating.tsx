"use client";
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <FaStar
            key={index}
            className={`cursor-pointer ${ratingValue <= rating ? 'text-yellow-500' : 'text-yellow-500'} text-xl`}
            onClick={() => setRating(ratingValue)}
            onMouseOver={() => setRating(ratingValue)}
            onMouseLeave={() => setRating(rating)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
