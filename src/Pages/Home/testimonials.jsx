import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Mohan Singh",
    location: "Noida",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "MobileChakki ka atta hamesha fresh aur quality mein best hota hai. Delivery bhi time par hoti hai.",
  },
  {
    name: "Narender Kumar Gupta",
    location: "Pitampura",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
    review:
      "Main hamesha yahin se order karta hoon. Sahi price aur asli organic products milte hain.",
  },
  {
    name: "Pooja Sharma",
    location: "Jaipur",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    review:
      "Bahut hi achha experience tha. Aata bilkul ghar jaisa pissa hua aur packaging bhi safe thi.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-1">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          What Our <span className="text-red-600">Customers Say</span>
        </h2>
        <p className="text-gray-500 text-center mb-10">
          "Hamare customers ki khushi hi hamari asli pehchaan hai"
        </p>

        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-red-100"
                />
                {/* <video class=" video-slide d-block w-100" muted="" loop="">
                    <source src="video/video2.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                  </video> */}
                <p className="text-gray-600 italic mb-4">"{item.review}"</p>
                <h4 className="font-semibold text-gray-800">{item.name}</h4>
                <span className="text-sm text-gray-500">{item.location}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
