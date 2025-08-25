import image1 from "../assets/IMG-20250723-WA0006_1.avif"
import image2 from "../assets/IMG-20250723-WA0007_1.avif"
import image3 from "../assets/IMG-20250723-WA0008_1.avif"
import image4 from "../assets/IMG-20250723-WA0009_1.avif"
import smiley from "../assets/smiley-in-love-solid.svg"
import sidebar from "../assets/sidebar-left.svg"
import scrollh from "../assets/arrows-scroll-h.svg"
import Footer from "./footer";
import { Title, Meta } from 'react-head';
import Zustand_global_storage from "../zustand-global-storage";

export default function Homepage() {
  const setSidebar = Zustand_global_storage((state) => state.setSidebar);

  return (
    <>
    <Title>Design Index</Title>
    <Meta name="description" content="Collection of the best design resources on the internet" />
    <Meta property="og:title" content="Design Index" />
    <Meta property="og:description" content="Collection of the best design resources on the internet" />
    <Meta property="og:type" content="website" />
    <Meta property="og:image" content="https://designindex.xyz/preview.avif" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:title" content="Design Index" />
    <Meta name="twitter:description" content="Collection of the best design resources on the internet" />
    <Meta name="twitter:image" content="https://designindex.xyz/twitter_preview.avif" />

    <div className="flex flex-col items-center justify-center w-full h-auto bg-white">
      {/* Hero Section */}
      <div className="flex flex-col items-start sm:items-center justify-center w-full h-[100dvh] bg-white sticky top-0">
        {/* Desktop Version */}
        <a href="https://peerlist.io/atharv_rem/project/design-index" target="_blank" rel="noopener noreferrer">
          <div className="w-auto px-[10px] py-[5px] border-[1px] border-[#e2e2e2] shadow-sm rounded-[13px]  sm:rounded-[16px] cursor-pointer hover:translate-y-[-5px] transition-transform duration-300">
            <p className="text-center text-[15px] sm:text-[18px] font-Outfit font-medium text-black">#18 on <strong className="text-[#00aa45]">Peerlist</strong></p>
          </div>
        </a>
        <div className="hidden w-full sm:flex flex-col items-start sm:items-center sm:text-center">
          <p className="text-[35px] xs:text-[40px] sm:text-[65px] md:text-[65px] lg:text-[70px] xl:text-[80px] 2xl:text-[100px] font-CalSans mb-[5px]">
            Collection of the best
          </p>
          <p className="text-[35px] xs:text-[40px] sm:text-[65px] md:text-[65px] lg:text-[70px] xl:text-[80px] 2xl:text-[100px] font-CalSans mb-[10px] mt-0 leading-[10px] md:leading-[20px] 2xl:leading-[35px]">
            design resources
          </p>
        </div>
        
        {/* Mobile Version */}
        <div className="w-full flex-col items-start sm:items-center sm:text-center block sm:hidden mt-[15px]">
          <p style={{ fontFamily: "Cal sans, sans-serif"}} className="text-[40px] xs:text-[40px] sm:text-[70px] mb-[5px] leading-[35px]">
            best design
          </p>
          <p style={{ fontFamily: "Cal sans, sans-serif"}} className="text-[40px] xs:text-[40px] sm:text-[70px] mb-[5px] leading-[35px]">
            resources on
          </p>
          <p style={{ fontFamily: "Cal sans, sans-serif"}} className="text-[40px] xs:text-[40px] sm:text-[70px] mb-[5px] leading-[35px]">
            the internet
          </p>
        </div>


        <div 
          className="w-full flex flex-col items-center justify-center text-left mt-[10px] sm:mt-[30px] sm:hidden"
        >
          <p 
            style={{
              fontFamily: "'Outfit', sans-serif", 
              fontWeight: 500,
              fontSize: '20px', 
              lineHeight: '1', 
              color: '#4a4a4a',
              maxWidth: '900px', 
              marginRight: '10px', 
            }}
          >
            internet's handpicked design resources, we don’t compromise on quality
          </p>
        </div>


        <div className="hidden w-full sm:flex items-start sm:items-center flex-col justify-center sm:text-center mt-[10px] sm:mt-[30px] md:mt-[30px] xl:mt-[40px] 2xl:mt-[50px] sm:leading-7 xl:leading-8 sm:px-[100px] lg:px-[200px] xl:px-[250px] 2xl:px-[300px]">
          <p className="sm:text-[25px] md:text-[25px] lg:text-[25px] xl:text-[30px] 2xl:text-[35px] font-medium font-Outfit text-[#4a4a4a]">
            internet's handpicked design resources, we don’t compromise on quality
          </p>
        </div>
        
        {/* Product Hunt Button */}
        <a 
          href="https://www.producthunt.com/products/don-t-be-an-average-designer/reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-[200px] h-[45px] xl:w-[280px] xl:h-[60px] 2xl:w-[300px] 2xl:h-[70px] mt-[15px] sm:mt-[12px] xl:mt-[15px] 2xl:mt-[20px] hover:scale-105 transition-transform duration-300"
        >
        <svg 
          width="auto" 
          height="auto" 
          viewBox="0 0 250 54" 
          xmlns="http://www.w3.org/2000/svg" 
          aria-label="Leave a review on Product Hunt"
          className="rounded-[18px] xl:rounded-[22px] 2xl:rounded-[28px] border-[1px] border-[#ededed] shadow-sm"
        >
          <g fill="none" fillRule="evenodd">
            <rect 
              x="0.5" 
              y="0.5" 
              width="249" 
              height="53" 
              rx="10" 
              className="fill-white" 
            />
            
            <text 
              x="53" 
              y="20" 
              fontFamily="Outfit" 
              fontSize="9" 
              fontWeight="bold" 
              className="fill-black"
            >
              LEAVE A REVIEW ON
            </text>

            <text 
              x="52" 
              y="40" 
              fontFamily="Outfit" 
              fontSize="16" 
              fontWeight="bold" 
              className="fill-black"
            >
              Product Hunt
            </text>

            {/* Star icon */}
            <g transform="translate(205, 11) scale(1.4)" className="fill-black">
              <path d="M23.04,9.021L14.77,8.796L12,1L9.23,8.796L0.96,9.021l6.559,5.043L5.177,22L12,17.321L18.823,22l-2.342-7.935L23.04,9.021z M12,14.896l-3.312,2.271l1.137-3.851l-3.183-2.448l4.014-0.109L12,6.974l1.344,3.784l4.014,0.109l-3.183,2.448l1.137,3.851 L12,14.896z"/>
            </g>

            {/* PH logo */}
            <g transform="translate(11, 12)">
              <circle r="15.5" cx="15.5" cy="15.5" className="fill-white stroke-1 stroke-[#dddddd]"/>
              <path 
                d="M17.4329412,15.9558824 L17.4329412,15.9560115 L13.0929412,15.9560115 L13.0929412,11.3060115 L17.4329412,11.3060115 L17.4329412,11.3058824 C18.7018806,11.3058824 19.7305882,12.3468365 19.7305882,13.6308824 C19.7305882,14.9149282 18.7018806,15.9558824 17.4329412,15.9558824 M17.4329412,8.20588235 L17.4329412,8.20601152 L10.0294118,8.20588235 L10.0294118,23.7058824 L13.0929412,23.7058824 L13.0929412,19.0560115 L17.4329412,19.0560115 L17.4329412,19.0558824 C20.3938424,19.0558824 22.7941176,16.6270324 22.7941176,13.6308824 C22.7941176,10.6347324 20.3938424,8.20588235 17.4329412,8.20588235" 
                className="fill-black"
              />
            </g>
          </g>
        </svg>
      </a>

      </div>


      {/* 200+ tools Section */}
      <div className="w-full flex flex-col items-center justify-center text-center bg-white z-4 overflow-hidden">
        <div className="w-auto flex flex-col items-center justify-center text-center pt-[40px] xs:pt-[50px] bg-white flex-grow">
          <p className="border-[1px] rounded-2xl shadow-md border-[#efefef] px-[20px] text-[25px] xs:text-[30px] sm:text-[35px] md:text-[35px] lg:text-[45px] xl:text-[50px] 2xl:text-[60px]  font-CalSans text-black">
            200+ tools
          </p>
          <p className="mt-[10px] text-[25px] xs:text-[30px] sm:text-[35px] md:text-[35px] lg:text-[45px] xl:text-[50px] 2xl:text-[60px]  font-CalSans text-black text-wrap">
            across 6 categories
          </p>
          <p className="hidden md:flex-row md:flex mb-[10px] mt-[5px] ">
            <img src={sidebar} alt="sidebar icon" className="inline-block mr-[8px] h-[18px] w-[18px] xs:w-[22px] xs:h-[22px] sm:w-[25px] sm:h-[25px] " />
            <span className="font-semibold font-Outfit">take a peek at the sidebar on the left for all categories</span>
          </p>
          <p className="text-[20px] xs:text-[25px] sm:text-[30px] md:text-[20px] lg:text-[25px] xl:text-[28px] 2xl:text-[35px] font-medium text-justify font-Outfit text-[#4a4a4a] leading-[20px] xs:leading-[25px] sm:leading-[30px] md:leading-[20px] lg:leading-[25px] xl:leading-[28px] 2xl:leading-[32px] mt-[10px] sm:mt-[15px] xl:mt-[20px] 2xl:mt-[30px] sm:ml-[50px] sm:mr-[50px] xl:ml-[100px] 2xl:ml-[200px] 2xl:mr-[200px] xl:mr-[100px] px-[40px] xs:px-[40px] sm:px-[10px] md:px-[40px] lg:px-[50px] xl:px-[60px] 2xl:px-[70px]">
            At Design Index, every tool is handpicked to ensure it adds real value to designers and creators. Rather than listing countless options, the focus is on curating only the most reliable and effective tools. This quality-over-quantity approach makes us a trusted resource for discovering the best in design and creativity.
          </p>
          <button onClick={() => setSidebar(true)} className="mt-[30px] mb-[40px] items-center justify-center flex flex-row md:hidden rounded-[13px] xs:rounded-[15px] sm:rounded-[20px] shadow-md  px-[12px] xs:px-[15px] py-[5px] text-[20px] xs:text-[25px] sm:text-[30px] md:text-[25px] lg:text-[30px] xl:text-[35px] 2xl:text-[40px] font-semibold font-Outfit text-white bg-black">
            <img src={smiley} alt="smiley face" className="inline-block mr-[8px] h-[18px] w-[18px] xs:w-[22px] xs:h-[22px] sm:w-[25px] sm:h-[25px]" />
            <p>explore tools</p>
          </button>
        </div>

      
        <div className="w-auto flex flex-col items-center justify-center text-center z-4 mt-[50px] lg:mt-[80px] ml-[40px] mr-[40px]">
          <p className="text-[25px] xs:text-[30px] sm:text-[35px] md:text-[35px] lg:text-[45px] xl:text-[50px] 2xl:text-[60px] font-CalSans leading-7 xs:leading-8 text-black">
            search any way you want, we have it all
          </p>
          <p className="text-[20px] xs:text-[25px] sm:text-[30px] md:text-[20px] lg:text-[25px] xl:text-[28px] 2xl:text-[35px] font-medium font-Outfit text-[#4a4a4a] text-center leading-[20px] xs:leading-[25px] sm:leading-[30px] md:leading-[20px] lg:leading-[25px] xl:leading-[28px] 2xl:leading-[32px] mt-[5px] sm:mt-[15px] xl:mt-[20px] 2xl:mt-[30px] sm:ml-[25px] sm:mr-[25px] md:ml-[70px] md:mr-[70px] lg:ml-[80px] lg:mr-[80px] xl:ml-[110px] 2xl:ml-[200px] 2xl:mr-[200px] xl:mr-[110px] mb-[40px] md:px-[40px] lg:px-[60px] xl:px-[60px] 2xl:px-[70px]">
            We use NLP to process search queries and return the best results. We only support english.
          </p>
          <div className="flex flex-row justify-center items-center">
            <span className="font-Outfit font-semibold text-black">scroll horizontally</span>
            <img src={scrollh} alt="" className="w-[30px] h-[30px]" />
          </div>
          <div className="flex flex-row overflow-x-auto snap-x hide-scrollbar px-[10px] pb-[10px] w-[250px] xs:w-[300px] sm:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] h-auto justify-start items-start gap-x-[50px] scroll-smooth ">
            <img 
              src={image2} 
              alt="design example" 
              loading="lazy"
              className="w-auto h-auto object-contain snap-center border-[1px] border-[#f0f0f0] drop-shadow-md drop-shadow-neutral-100 rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] xl:rounded-[45px] 2xl:rounded-[50px]" 
            />
            <img 
              src={image1} 
              alt="design example" 
              loading="lazy"
              className="w-auto h-auto object-contain snap-center border-[1px] border-[#f0f0f0] drop-shadow-md drop-shadow-neutral-100 rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] xl:rounded-[45px] 2xl:rounded-[50px]" 
            />
            <img 
              src={image3} 
              alt="design example" 
              loading="lazy"
              className="w-auto h-auto object-contain snap-center border-[1px] border-[#f0f0f0] drop-shadow-md drop-shadow-neutral-100 rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] xl:rounded-[45px] 2xl:rounded-[50px]" 
            />
            <img 
              src={image4} 
              alt="design example" 
              loading="lazy"
              className="w-auto h-auto object-contain snap-center border-[1px] border-[#f0f0f0] drop-shadow-md drop-shadow-neutral-100 rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] xl:rounded-[45px] 2xl:rounded-[50px]" 
            />

          </div>
        </div>

        <div className="w-auto flex flex-col items-center justify-center text-center z-4 mt-[50px] lg:mt-[80px] ml-[40px] mr-[40px]">
          <p className="text-[25px] xs:text-[30px] sm:text-[35px] md:text-[35px] lg:text-[45px] xl:text-[50px] 2xl:text-[60px] font-CalSans leading-7 xs:leading-8 text-black">
            we are open source
          </p>
        </div>
        <p className="text-[20px] xs:text-[25px] sm:text-[30px] md:text-[20px] lg:text-[25px] xl:text-[28px] 2xl:text-[35px] font-medium font-Outfit text-[#4a4a4a] leading-[20px] xs:leading-[25px] sm:leading-[30px] text-center md:leading-[20px] lg:leading-[25px] xl:leading-[28px] 2xl:leading-[32px] mt-[5px] sm:mt-[15px] xl:mt-[20px] 2xl:mt-[30px] sm:ml-[100px] sm:mr-[100px] md:ml-[140px] md:mr-[140px] lg:ml-[160px] lg:mr-[160px] xl:ml-[180px] 2xl:ml-[240px] 2xl:mr-[240px] xl:mr-[180px] px-[40px] xs:px-[50px] sm:px-[70px] md:px-[90px] lg:px-[100px] xl:px-[140px] 2xl:px-[160px]">
            Explore the code, contribute ideas, or just see how it all works
        </p>
        <a href="https://github.com/atharv-rem/design-index">
          <div className="px-[15px] mb-[20px] shadow-sm w-auto flex flex-row items-center justify-center text-center z-4 mt-[15px] text-[20px] sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-[21px] 2xl:text-[23px] font-semibold font-Outfit text-black hover:underline lg:px-[15px] py-[5px] rounded-[18px] md:rounded-[15px] lg:rounded-[17px] xl:rounded-[19px] border-1 border-[#e2e2e2] hover:translate-y-[-4px] mduration-300 cursor-pointer transition-transform-ease-in-out">
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