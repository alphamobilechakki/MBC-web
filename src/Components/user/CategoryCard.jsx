// CategoryCard.jsx
import React from "react";

const CategoryCard = ({ title, subtitle, icon, colorFrom, colorTo }) => {
  return (
    <button
      className="group relative w-full flex  flex-col items-start gap-4 p-5 rounded-2xl overflow-hidden bg-white/60 backdrop-blur-sm border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-100"
      aria-label={`Open category ${title}`}
    >
      <span
        className={`absolute -right-6 -top-8 w-36 h-36 rounded-full blur-3xl opacity-80 bg-gradient-to-br ${colorFrom} ${colorTo} transform-gpu group-hover:scale-105 transition-transform`}
        aria-hidden
      />

      <div className="relative z-10 flex items-center justify-center w-20 h-20   rounded-lg bg-white/30 border border-white/20 shadow-sm">
        {/* <div className="text-indigo-700">{icon}</div> */}
        <img src={icon} alt=""  className="w-full h-full"/>
      </div>

      <div className="relative z-10 text-left">
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>

      {/* <div className="relative z-10 mt-3">
        <span className="inline-flex items-center gap-2 text-xs font-medium text-gray-600 bg-gray-50 px-2 py-1 rounded-full border border-gray-100">
          Browse
          <svg
            className="w-3 h-3 opacity-80"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
          </svg>
        </span>
      </div> */}

      <span className="absolute left-0 bottom-0 h-1 w-2/3 rounded-tr-xl rounded-bl-xl bg-gradient-to-r from-white/30 to-white/10 opacity-60" />
    </button>
  );
};

export default CategoryCard;
 