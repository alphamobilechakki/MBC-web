/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider1 from "../../assets/banner/hero-services-img.webp";
import Slider2 from "../../assets/banner/hero-services-img1.webp";
import Slider3 from "../../assets/banner/hero-services-img2.webp";
import Slider4 from "../../assets/banner/hero-services-img3.webp";
import Bg from "../../assets/banner/S1.png";


const slides = [
  {
    title: "शुद्ध और ताज़ा आटा",
    subtitle: "मिलावट की चिंता छोड़िए—आपके सामने ताज़ा पिसाई, शुद्धता की गारंटी, हर रोटी में असली स्वाद और खुशबू।",
    btnText: "अभी आर्डर करें",
    img: Slider1,
  },
  {
    title: " सम्पूर्ण आहार",
    subtitle: "बिना गेहूं का 12 अनाजों से बना लो GI आटा—हल्का, संतुलित और पेट-भर पोषण, रोज़ के सम्पूर्ण आहार के लिए बेहतर विकल्प।",
     btnText: "अभी आर्डर करें",
    img: Slider2,
  },
  {
    title: "एक सम्पूर्ण आहार",
    subtitle: "जौ, चना, ज्वार, काला गेहूं, रागी, अजवायन, अलसी, मेथी, मूंग, मोठ, अरहर, राजमा\n12 अनाज का बिना गेहूं का LOW GI AATA—फाइबर से भरपूर, लंबे समय तक ऊर्जा और बढ़िया स्वाद के साथ।",
    btnText: "अभी ऑर्डर करें",
    img: Slider3,
  },
  {
    title: "अपनाएं ठंडी पिसाई वाला आटा",
    subtitle: "कोल्ड-मिल्ड (ठंडी पिसाई) आटा—नैचुरल पोषक तत्व और स्वाद बरकरार। लो GI, शुगर-मैनेजमेंट के लिए अनुकूल; विशेषज्ञ भी संतुलित आहार में सुझाते हैं।",
    btnText: "अभी आर्डर करें",
    img: Slider4,
  },
]
const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Animation Variants
  const textVariant = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: { y: -50, opacity: 0, transition: { duration: 0.6, ease: "easeIn" } },
  };

  const imageVariant = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
    exit: { y: 80, opacity: 0, transition: { duration: 0.6, ease: "easeIn" } },
  };

  return (
    <div
      className="relative  w-full overflow-hidden bg-gray-100 font-sans"
      style={{ backgroundImage: `url(${Bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[activeSlide].title}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="container mx-auto grid grid-cols-1 md:grid-cols-12  py-10 items-center gap-6 px-1 sm:px-2 lg:px-1"
        >
          {/* Left Text Section */}
          <motion.div
            variants={textVariant}
            className="col-span-12  md:col-span-6 flex-col  py-6 md:py-0 z-10   px-4"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold leading-snug text-gray-900 mb-4 drop-shadow-sm">
              <span className="bg-gradient-to-r from-[#DA352D] via-gray-700 to-gray-500 bg-clip-text text-transparent">
                {slides[activeSlide].title}
              </span>
            </h2>

            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed max-w-lg drop-shadow-sm">
              {slides[activeSlide].subtitle}
            </p>

            <button className="px-5 py-2 rounded-full bg-[#DA352D] via-gray-800 to-gray-900 text-white font-medium shadow-md text-sm  hover:scale-105 hover:shadow-xl hover:from-gray-700 hover:to-black transition-all duration-300">
              {slides[activeSlide].btnText}
            </button> 
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            variants={imageVariant}
            className="col-span-12  md:col-span-6 relative w-full h-[200px] sm:h-[300px] md:h-[260px] lg:h-[340px] xl:h-[400px] rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={slides[activeSlide].img}
              alt={slides[activeSlide].title}
              className="absolute inset-0 w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

       

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            // onClick={() => setActiveSlide(index)}
            className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
              index === activeSlide ? "bg-gray-900 w-6" : "bg-gray-400 w-2"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
