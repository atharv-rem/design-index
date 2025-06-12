import color from "./assets/colors-stroke-rounded.svg"
import font from "./assets/text-font-stroke-rounded.svg"
import icon from "./assets/home-01-stroke-rounded.svg"
import mockup from "./assets/hold-phone-stroke-rounded.svg"
import design_inspo from "./assets/canvas-stroke-rounded.svg"
import illustration from "./assets/ai-beautify-stroke-rounded.svg"

export default function App() {
  return (
    <>
      {/* parent layout container */}
      <div className="flex w-full h-screen p-[10px] overflow-hidden"> 

        {/* Left sidebar for navigation*/}
        <div className="flex-row items-center justify-center w-1/5 bg-white h-screen position-fixed top-0 left-0">
          
          <div className="flex flex-col items-start justify-center h-auto gap-0 leading-none pt-2 font-medium font-SG w-full">
            <span className="text-[22px] pl-2 ">design</span>
            <span className="text-[22px] pl-2 ">directory.</span>                    
          </div>

          {/* Navigation bar */}
          <div className="flex flex-col items-start justify-start w-full h-[230px] mt-4 mr-2 overflow-y-auto hide-scrollbar">
              <div className="flex flex-row items-center justify-start w-full h-auto">
              <img src={color} alt="color icon" className="ml-[10px] w-[30px] h-[30px] p-[5px] border-[1.5px] border-[#EBEBEB] rounded-[10px]" />
              <span className="ml-[10px] items-start justify-center font-Afacad font-medium text-[30px]">colours</span>
              </div>

              <div className="flex flex-row items-center justify-start w-full h-auto">
              <img src={mockup} alt="color icon" className="ml-[10px] w-[30px] h-[30px] p-[5px] border-[1.5px] border-[#EBEBEB] rounded-[10px]" />
              <span className="ml-[10px] items-start justify-center font-Afacad font-medium text-[30px]">mockups</span>
              </div>

              <div className="flex flex-row items-center justify-start w-full h-auto">
              <img src={font} alt="color icon" className="ml-[10px] w-[30px] h-[30px] p-[5px] border-[1.5px] border-[#EBEBEB] rounded-[10px]" />
              <span className="ml-[10px] items-start justify-center font-Afacad font-medium text-[30px]">font</span>
              </div>

              <div className="flex flex-row items-center justify-start w-full h-auto">
              <img src={design_inspo} alt="color icon" className="ml-[10px] w-[30px] h-[30px] p-[5px] border-[1.5px] border-[#EBEBEB] rounded-[10px]" />
              <span className="ml-[10px] items-start justify-center font-Afacad font-medium text-[30px]">design-inspo</span>
              </div>

              <div className="flex flex-row items-center justify-start w-full h-auto">
              <img src={icon} alt="color icon" className="ml-[10px] w-[30px] h-[30px] p-[5px] border-[1.5px] border-[#EBEBEB] rounded-[10px]" />
              <span className="ml-[10px] items-start justify-center font-Afacad font-medium text-[30px]">icons</span>
              </div>

              <div className="flex flex-row items-center justify-start w-full h-auto">
              <img src={illustration} alt="color icon" className="ml-[10px] w-[30px] h-[30px] p-[5px] border-[1.5px] border-[#EBEBEB] rounded-[10px]" />
              <span className="ml-[10px] items-start justify-center font-Afacad font-medium text-[30px]">illustrations</span>
              </div>

          </div> 
        </div>

        {/* left content area*/}
        <div className="flex-row items-center justify-center w-4/5 p-4 bg-white overflow-y-scroll hide-scrollbar border-[2px] border-[#F6F6F6] rounded-[10px]">
        </div>
        
      </div>  
    </>
  );
}
