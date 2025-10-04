import React from "react"; 
import BannerImg from "../../assets/Banner/hero-services-img.webp"; // apni image ka path daalo
 import ChakkiImg from "../../assets/Banner/chakki.jpeg"; // naya image add karo
 import { CheckCircle2, Wheat, Sun, Gem } from "lucide-react";
const WhyChoose = () => {
  const features = [
    "Premium quality products.",
    "Convenient doorstep delivery.",
    "Fresh and organic options.",
    "FRESH ATTA : Does not contain maida",
    "QUALITY : aid in maintaining overall and viltality",
    "MADE FROM : which means it includes all parts of the grain",
    "CHAKKI :est voluptatem labore deleniti quis a delectus et."

  ];

  return (

    <>
    
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8   py-12 px-4">
      {/* Left Side Image */}
      <div className="flex justify-center">
        <img
          src={BannerImg}
          alt="MobileChakki Banner"
          className="rounded-2xl shadow-lg max-h-[420px] object-contain"
        />
      </div>

      {/* Right Side Features */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">
          Why Choose <span className="text-red-600">MobileChakki?</span>
        </h2>

        <ul className="space-y-4">
          {features.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckCircle2 className="text-[#A98C43] w-6 h-6" />
              <span className="text-gray-600 text-lg">{item}</span>
            </li>
          ))}
        </ul>


         
      </div>



      
    </section>
 
    </>
  );
};

export default WhyChoose;

// import React from "react";
// import { CheckCircle2, Wheat, Sun, Gem } from "lucide-react";
//  import BannerImg from "../../assets/Banner/hero-services-img.webp"; // apni image ka path daalo
// // import ChakkiImg from "../../assets/Banner/chakki-banner.webp"; // naya image add karo

// const WhyChoose = () => {
//   const features = [
//     "Premium quality products.",
//     "Convenient doorstep delivery.",
//     "Fresh and organic options.",
//   ];

//   return (
//     <section className="container mx-auto py-12 px-4 space-y-16">
//       {/* Why Choose Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         {/* Left Side Image */}
//         <div className="flex justify-center">
//           <img
//             src={BannerImg}
//             alt="MobileChakki Banner"
//             className="rounded-2xl shadow-lg max-h-[420px] object-contain"
//           />
//         </div>

//         {/* Right Side Features */}
//         <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
//           <h2 className="text-2xl font-bold text-gray-700 mb-6">
//             Why Choose <span className="text-red-600">MobileChakki?</span>
//           </h2>

//           <ul className="space-y-4">
//             {features.map((item, index) => (
//               <li key={index} className="flex items-center gap-3">
//                 <CheckCircle2 className="text-[#A98C43] w-6 h-6" />
//                 <span className="text-gray-600 text-lg">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Shudh Chakki Atta Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Left Content */}
//         <div>
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             SHUDH CHAKKI ATTA
//           </h2>
//           <p className="text-gray-600 mb-8">
//             THIS IS WHOLE WHEAT ATTA PREPARED USING THE CHOICEST GRAINS
//           </p>

//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <Wheat className="w-6 h-6 text-blue-500" />
//                 <h4 className="font-semibold">FRESH ATTA</h4>
//               </div>
//               <p className="text-gray-600 text-sm">DOES NOT CONTAIN MAIDA</p>
//             </div>

//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <Gem className="w-6 h-6 text-blue-500" />
//                 <h4 className="font-semibold">QUALITY</h4>
//               </div>
//               <p className="text-gray-600 text-sm">
//                 AID IN MAINTAINING OVERALL HEALTH AND VITALITY
//               </p>
//             </div>

//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <Sun className="w-6 h-6 text-blue-500" />
//                 <h4 className="font-semibold">MADE FROM</h4>
//               </div>
//               <p className="text-gray-600 text-sm">
//                 WHICH MEANS IT INCLUDES ALL PARTS OF THE GRAIN
//               </p>
//             </div>

//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <Sun className="w-6 h-6 text-blue-500" />
//                 <h4 className="font-semibold">CHAKKI</h4>
//               </div>
//               <p className="text-gray-600 text-sm">
//                 EST VOLUPTATEM LABORE DELENITI QUIS A DELECTUS ET.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Side Image */}
//         <div className="flex justify-center">
//           {/* <img
//             src={ChakkiImg}
//             alt="Shudh Chakki Atta"
//             className="rounded-lg shadow-lg"
//           /> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChoose;

