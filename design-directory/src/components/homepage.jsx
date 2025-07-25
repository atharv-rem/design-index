import Zustand_global_storage from "../zustand-global-storage";
import font from "../assets/font.avif";
import mockup from "../assets/mockup.avif";
import illustration from "../assets/illustration.avif";
import icon from "../assets/icon.avif";
import design from "../assets/design.avif";
import colour from "../assets/colour.avif";
import image1 from "../assets/IMG-20250723-WA0006_1.avif"
import image2 from "../assets/IMG-20250723-WA0007_1.avif"
import image3 from "../assets/IMG-20250723-WA0008_1.avif"
import image4 from "../assets/IMG-20250723-WA0009_1.avif"
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import { Title, Meta } from 'react-head';

export default function Homepage() {

  const setHasOpenedHomepage = Zustand_global_storage(state => state.setHasOpenedHomepage);
  setHasOpenedHomepage(true);

  const navigate = useNavigate();

  const images = [
    { src: font, alt: "font illustration",path:"/colours" },
    { src: mockup, alt: "mockup illustration",path:"/mockups" },
    { src: illustration, alt: "illustration",path:"/illustrations" },
    { src: icon, alt: "icon illustration",path:"/icons" },
    { src: design, alt: "design illustration",path:"/design-inspirations" },
    { src: colour, alt: "colour illustration",path:"/colours" }
  ];

  return (
    <>
    <Title>Colours | Design Index</Title>
    <Meta name="description" content="Collection of the best design resources on the internet" />
    <Meta property="og:title" content="Design Index" />
    <Meta property="og:description" content="Collection of the best design resources on the internet" />
    <Meta property="og:type" content="website" />
    <Meta property="og:image" content="https://pub-c51f3dea40b34c5f8f4cd14637f22cdc.r2.dev/og_image.avif" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:title" content="Design Index" />
    <Meta name="twitter:description" content="Collection of the best design resources on the internet" />
    <Meta name="twitter:image" content="https://pub-c51f3dea40b34c5f8f4cd14637f22cdc.r2.dev/og_image.avif" />

    <div className="flex flex-col items-center justify-center w-full h-auto bg-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center w-full h-screen bg-white sticky top-0">
        <div className="w-full flex flex-col items-center justify-center text-center">
          <p className="text-[35px] xs:text-[40px] sm:text-[65px] md:text-[65px] lg:text-[70px] xl:text-[80px] 2xl:text-[100px] font-bold font-Geist mb-[5px]">
            Collection of the best
          </p>
          <p className="text-[35px] xs:text-[40px] sm:text-[65px] md:text-[65px] lg:text-[70px] xl:text-[80px] 2xl:text-[100px] font-bold font-Geist mb-[10px] mt-0 leading-[10px] md:leading-[20px] 2xl:leading-[35px]">
            design resources
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center text-center mt-[10px] xs:mt-[20px] sm:mt-[30px] md:mt-[30px] xl:mt-[40px] 2xl:mt-[50px] leading-4 xs:leading-5 sm:leading-7 xl:leading-8  px-[30px] xs:px-[20px] sm:px-[100px] lg:px-[200px] 2xl:px-[300px]">
          <p className="text-[15px] xs:text-[20px] sm:text-[25px] md:text-[25px] lg:text-[25px] xl:text-[30px] 2xl:text-[35px] font-regular font-Geist text-[#939393]">
            internet's handpicked design resources, we don’t compromise on quality
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="w-auto flex flex-col items-center justify-center text-center bg-white rounded-t-[70px] sm:rounded-t-[100px] md:rounded-t-[100px] z-4 sm:ml-[30px] sm:mr-[30px] md:ml-[40px] md:mr-[40px] lg:ml-[60px] lg:mr-[60px] overflow-hidden">
        <div className="w-auto flex flex-row items-center justify-center text-center pt-[40px] xs:pt-[50px] bg-white flex-grow">
          <p className="text-[20px] xs:text-[27px] sm:text-[40px] md:text-[40px] lg:text-[45px] xl:text-[50px] 2xl:text-[60px] font-semibold font-Outfit text-black text-wrap">
            200+ tools across 6 categories
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[15px] sm:gap-[40px] items-center justify-center w-auto h-auto bg-white px-[5px] sm:px-[50px] md:px-[80px] lg:px-[130px] xl:px-[180px] 2xl:px-[220px] pt-[20px]">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className="w-auto h-auto object-cover border-1 border-[#c5c5c5] rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] 2xl:rounded-[50px] hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => navigate(img.path)}
            />
          ))}

        </div>
        <div className="w-auto flex flex-col items-center justify-center text-center z-4 mt-[50px] lg:mt-[80px] ml-[40px] mr-[40px]">
          <p className="text-[25px] xs:text-[30px] sm:text-[35px] md:text-[35px] lg:text-[45px] xl:text-[50px] 2xl:text-[60px] font-bold font-Geist leading-7 xs:leading-8 text-black">
            search any way you want, we have it all
          </p>
          <p className="text-[15px] xs:text-[20px] sm:text-[20px] md:text-[20px] lg:text-[25px] xl:text-[28px] 2xl:text-[35px] font-medium font-Outfit text-[#aaaaaa] leading-[15px] xs:leading-[20px] sm:leading-[20px] md:leading-[20px] lg:leading-[25px] xl:leading-[28px] 2xl:leading-[32px] mt-[5px] sm:mt-[15px] xl:mt-[20px] 2xl:mt-[30px] sm:ml-[50px] sm:mr-[50px] xl:ml-[100px] 2xl:ml-[200px] 2xl:mr-[200px] xl:mr-[100px] mb-[40px] md:px-[40px] lg:px-[50px] xl:px-[60px] 2xl:px-[70px]">
            We use NLP to process search queries and return the best results. We only support english.
          </p>
          <div className="flex overflow-x-auto snap-x hide-scrollbar p-[10px] w-[250px] xs:w-[300px] sm:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] h-auto justify-start items-start gap-x-[50px] scroll-smooth ">
            <img src={image2} alt="" className="w-auto h-auto object-contain snap-center border-[1px] border-[#f0f0f0] drop-shadow-md drop-shadow-neutral-100 rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] xl:rounded-[45px] 2xl:rounded-[50px]" />
            <img src={image1} alt="" className="w-auto h-auto object-contain snap-center border-[1px] border-[#f0f0f0] drop-shadow-md drop-shadow-neutral-100 rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] xl:rounded-[45px] 2xl:rounded-[50px]" />
            <img src={image3} alt="" className="w-auto h-auto object-contain snap-center border-[1px] border-[#f0f0f0] drop-shadow-md drop-shadow-neutral-100 rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] xl:rounded-[45px] 2xl:rounded-[50px]" />
            <img src={image4} alt="" className="w-auto h-auto object-contain snap-center border-[1px] border-[#f0f0f0] drop-shadow-md drop-shadow-neutral-100 rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] xl:rounded-[45px] 2xl:rounded-[50px]" />
          </div>
        </div>

        <div className="w-auto flex flex-col items-center justify-center text-center z-4 mt-[50px] lg:mt-[80px] ml-[40px] mr-[40px]">
          <p className="text-[25px] xs:text-[30px] sm:text-[35px] md:text-[35px] lg:text-[45px] xl:text-[50px] 2xl:text-[60px] font-bold font-Geist leading-7 xs:leading-8 text-black">
            we are open source
          </p>
        </div>
        <p className="text-[15px] xs:text-[20px] sm:text-[20px] md:text-[20px] lg:text-[25px] xl:text-[28px] 2xl:text-[35px] font-medium font-Outfit text-[#aaaaaa] leading-[15px] xs:leading-[20px] sm:leading-[20px] md:leading-[20px] lg:leading-[25px] xl:leading-[28px] 2xl:leading-[32px] mt-[5px] sm:mt-[15px] xl:mt-[20px] 2xl:mt-[30px] sm:ml-[50px] sm:mr-[50px] xl:ml-[100px] 2xl:ml-[200px] 2xl:mr-[200px] xl:mr-[100px] md:px-[40px] lg:px-[50px] xl:px-[60px] 2xl:px-[70px]">
            Explore the code, contribute ideas, or just see how it all works
        </p>
        <a href="https://github.com/atharv-rem/design-index">
          <div className="mb-[20px] shadow-sm w-auto flex flex-row items-center justify-center text-center z-4 mt-[15px] text-[15px] xs:text-[15px] sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-[21px] 2xl:text-[23px] font-semibold font-Outfit text-black hover:underline px-[10px] lg:px-[15px] py-[5px]  rounded-[12px] md:rounded-[15px] lg:rounded-[17px] xl:rounded-[19px] border-1 border-[#e2e2e2] hover:translate-y-[-4px] mduration-300 cursor-pointer transition-transform-ease-in-out">
            /design-index
          </div>
        </a>

      <div className='w-full md:w-[78vw] flex flex-row z-4'>
        <Footer />
      </div>
    </div>
  </div>
</>
  );
}
