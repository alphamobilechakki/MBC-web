import { CheckCircle } from "lucide-react";
import img1 from '../../assets/Banner/hero-services-img.webp'
import img2 from '../../assets/Banner/hero-services-img1.webp'
import img3 from '../../assets/Banner/hero-services-img2.webp'
import img4 from '../../assets/Banner/hero-services-img3.webp'



const AboutSection = () => {
  return (

    <>
    <section className="container mx-auto px-4 lg:px-1 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Left Content */}
      <div>
        <h4 className="text-sm font-semibold tracking-wide text-[#A98C43] uppercase mb-2">
          Who We Are
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
          MobileChakki – <span className="text-[#C6363E]">Freshness</span> at Your Doorstep
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          MobileChakki is your go-to app for ordering <strong>high-quality atta, grains, masalas</strong>, 
          and other essential food products – delivered with freshness and care, right at your doorstep.
        </p>

        <ul className="mt-6 space-y-4">
          {[
            "Freshly ground flour, organic spices, and premium-quality grains.",
            "Easy ordering and seamless shopping experience.",
            "Fast doorstep delivery, ensuring quality and freshness every time."
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="text-[#A98C43] w-6 h-6 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <button className="mt-8 px-6 py-3 cursor-pointer rounded-xl bg-[#C6363E] text-white font-medium shadow-md hover:bg-[#C6363E] transition">
          Learn More →
        </button>
      </div>

      {/* Right Side Images */}
      <div className="grid grid-cols-2 gap-5">
        {[img1, img2, img3, img4].map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <img src={img} alt={`banner-${i}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>


      
    </section>

    
    </>
  );
};

export default AboutSection;
