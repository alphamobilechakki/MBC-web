
// Categories.jsx
import React, { useEffect } from "react";
import CategoryCard from "../../Components/user/CategoryCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { usercategory } from "../../redux/slices/CategorySlice";

const Categories = () => {
  const dispatch = useDispatch();
  const { data: categories, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(usercategory());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      <section className="py-12 px-6 lg:px-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Shop by Categories
          </h2>
          <p className="text-gray-500 mt-2">
            "Chuno Apni Pasand– Sab Kuch Ek Jagah"
          </p>
        </div>

        {loading && <p className="text-center">Loading categories......</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {!loading && !error && (
          <Slider {...settings}>
            {categories?.map((category, index) => (
              <div key={index} className="px-6 h-full">
                <CategoryCard
                  title={category.name}
                  subtitle={category.title}
                  icon={category.image}
                  className="w-full h-full"
                />
              </div>
            ))}
          </Slider>
        )}
      </section>
    </>
  );
};

export default Categories;
