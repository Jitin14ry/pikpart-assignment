import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import StarIcon from "@mui/icons-material/Star";

const ProductCard = ({
  image,
  title,
  subtitle,
  price,
  rating,
  compatibility = [],
}) => {
  const [selectedCompatibility, setSelectedCompatibility] = useState("");
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isDropdownOpen , setIsDropdownOpen] = useState(false);

  const handleAddToCart = () => {
    if (!isAddedToCart) {
      setIsAddedToCart(true);
    }
  };

  return (
    <div className="bg-gray-100 rounded-2xl shadow-md overflow-hidden">
      <div className="w-full flex justify-end gap-2 p-2">
        <button className="p-1.5  rounded-full ">
          <FavoriteBorderIcon />
        </button>
        <button className="p-1.5 rounded-full ">
          <ShareIcon />
        </button>
      </div>
      <img
        className="w-full h-48 object-contain mix-blend-multiply"
        src={
          image ||
          "https://imgs.search.brave.com/GFzvJEHlEmhh0dOD-EEif8iriabOqvIePJVmhg-73H8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjEw/MTQyNjcyL3ZlY3Rv/ci9iaWtlLWljb24u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXFYN1VXUjBrVkFi/Q2N1elpaSUxkWFo1/RG1VV1RTUWFCcExO/X0pubXM5bFE9"
        }
      />

      <div className="px-4">
        <div className="flex items-center gap-1 mb-2">
          <div className="bg-orange-500  text-white px-2 py-0.5 rounded-sm text-sm flex items-center">
            <StarIcon className="mr-1" fontSize={"small"} /> {rating}
          </div>
        </div>
        <div className="flex justify-between">
          <h3 className="text-lg font-bold mb-1 text-left">{title}</h3>
          <img
            className="w-[70px] h-5"
            src="src\assets\Screenshot 2025-01-03 004516.png"
            alt=""
          />
        </div>

        <div className="flex justify-between">
          <p className="text-gray-600 text-sm">{subtitle}</p>
          <div className="relative">
            <select
              value={selectedCompatibility}
              onChange={(e) => setSelectedCompatibility(e.target.value)}
              onFocus={()=> setIsDropdownOpen(true)}
              onBlur={()=> setIsDropdownOpen(false)}
              className="bg-gray-200 rounded-md py-1 px-2 text-sm appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <option value="" disabled>Compatibility</option>
              {compatibility.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <svg className={`h-4 w-4 text-gray-500 transform transition-transform duration 200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="text-xl font-semibold text-left">₹ {price}/-</div>
      </div>

      <div className="p-4">
        <div className="flex gap-4 w-full h-7">
          <button
            className="flex-1 bg-gray-400 text-white rounded-full font-medium "
          >
            Bulk
          </button>
          <button
            onClick={handleAddToCart}
            className={`flex-1 rounded-full font-medium  ${
              isAddedToCart ? "bg-gray-400" : "bg-green-500"
            } text-white`}
          >
            {isAddedToCart ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;