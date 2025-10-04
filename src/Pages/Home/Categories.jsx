
// Categories.jsx
import React, { useEffect } from "react";
import CategoryCard from "../../Components/user/CategoryCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AttaImg from "../../assets/category/03.png";
import MasaleImg from "../../assets/category/msale.jpg";
import DalImg from "../../assets/category/dal.webp";
import OilImg from "../../assets/category/oil.jpeg";
import { useDispatch, useSelector } from "react-redux"; 
import { userCategory } from "../../redux/slices/CategorySlice";
 


const categories = [
  {
    title: "Atta",
    subtitle: "Shudh & Fresh Chakki Atta",
    icon: AttaImg,
    colorFrom: "from-yellow-400",
    colorTo: "to-orange-500",
  },
  {
    title: "Masale",
    subtitle: "Pure & Aromatic Spices",
    icon: MasaleImg,
    colorFrom: "from-red-400",
    colorTo: "to-pink-500",
  },
  {
    title: "Dals & Pulses",
    subtitle: "Protein Rich & Natural",
    icon: DalImg,
    colorFrom: "from-green-400",
    colorTo: "to-emerald-500",
  },
  {
    title: "Oils & Ghee",
    subtitle: "Healthy & Pure Cooking Oils",
    icon: OilImg,
    colorFrom: "from-blue-400",
    colorTo: "to-cyan-500",
  },

];


const Categories = () => {
  const dispatch = useDispatch()
  // const { userItems, loading, error } = useSelector((state) => state.categories)
 


  useEffect(() => {
    dispatch(userCategory())
  }, [dispatch])


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
          <p className="text-gray-500 mt-2">"Chuno Apni Pasand– Sab Kuch Ek Jagah"</p>
        </div>


        {/* {loading && <p className="text center"> loading categories......</p>};
        {error && <p className="text-red-500 text-center">{error}</p>};

        {!loading && !error && (
          <Slider {...settings}>

            {userItems?.map((category, index) => (
              <div key={index} className="px-6 h-full">
                <CategoryCard
                  title={category.name}
                  subtitle={category.title}
                  icon={category.img}
                  className="w-full h-full"
                />
              </div>
            ))}
          </Slider>
        )} */}



        {/* ✅ Slider without grid */}
        * <Slider {...settings}>
          {categories.map((category, idx) => (
            <div key={idx} className="px-6 h-full"> 
              <CategoryCard {...category} className="w-full h-full" />
            </div>
          ))}
        </Slider>  


      </section>




    </>


  );
};

export default Categories;
