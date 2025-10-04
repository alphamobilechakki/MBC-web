import React from "react";
import { Star } from "lucide-react";

const Product = ({ imgUrl, description, quantity, rating, sellingPrice, actualPrice }) => {
  return (
    <div className="  border rounded-2xl shadow-md overflow-hidden bg-white relative">
      {/* Sale Tag */}
      <span className="absolute top-2 left-2 bg-[#A98C43] text-white text-xs font-bold px-2 py-1 rounded">
        ON SALE
      </span>

      {/* Product Image */}
      <div className="p-4 flex justify-center">
        <img src={imgUrl} alt={description} className="  object-contain" />
      </div>

       

      {/* Content */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex text-yellow-500 mb-1">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "fill-yellow-500" : "text-gray-300"}
            />
          ))}
        </div>

        {/* Description */}
        <h3 className="font-semibold text-gray-800 mb-1">{description}</h3>

        {/* Quantity */}
        <p className="text-sm text-gray-500 mb-2">{quantity}</p>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-red-600 font-bold text-lg">₹{sellingPrice}</span>
          <span className="text-gray-400 text-sm line-through">₹{actualPrice}</span>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-[#A98C43] cursor-pointer text-white py-2 rounded-lg hover:bg-[#b59955] transition">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;