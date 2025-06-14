import color from "./assets/colors-stroke-rounded.svg"
import font from "./assets/text-font-stroke-rounded.svg"
import icon from "./assets/home-01-stroke-rounded.svg"
import mockup from "./assets/hold-phone-stroke-rounded.svg"
import design_inspo from "./assets/canvas-stroke-rounded.svg"
import illustration from "./assets/ai-beautify-stroke-rounded.svg"
import send from "./assets/sent-stroke-rounded.svg"
import linkedin from "./assets/linkedin-02-stroke-rounded.svg"
import twitter from "./assets/new-twitter-stroke-rounded.svg"

import SearchBar from "./components/search bar.jsx";

import Colours from "./components/colours.jsx"
import Mockups from "./components/mockups.jsx"
import Font from "./components/font.jsx"
import Design_inspo from "./components/desin-inspo.jsx"
import Icons from "./components/icons.jsx"
import Illustration from "./components/illustrations.jsx";
import { useState } from "react"

export default function App() {
  const [selectpage,setselectpage] = useState("colours");

  return (
    <>
      {/* parent layout container */}
      <div className="flex w-full h-screen p-[10px] overflow-hidden"> 

        {/* Left sidebar for navigation*/}
        <div className="flex-col items-center justify-center w-1/5 bg-white h-screen position-fixed top-0 left-0">
          
          <div className="flex flex-col items-start justify-center h-auto gap-0 leading-none pt-2 font-medium font-SG w-full">
            <span className="text-[22px] pl-2 ">design</span>
            <span className="text-[22px] pl-2 ">directory.</span>                    
          </div>

          {/* Navigation bar */}
          <div className="flex flex-col items-start justify-start w-full h-[230px] mt-2 mr-2 overflow-y-auto hide-scrollbar">
              
              <div className="flex flex-row items-center justify-start w-full h-auto cursor-pointer hover:bg-[#F6F6F6]" onClick={() => setselectpage("colours")}>
                <img src={color} alt="color icon" className="ml-[10px] w-[30px] h-[30px] p-[5px] border-[1.5px] border-[#EBEBEB] rounded-[10px]" />
                <span className="ml-[10px] items-start justify-center font-Afacad font-medium text-[30px]">colours</span>
              </div>

              <div className="flex flex-row items-center justify-start w-full h-auto cursor-pointer hover:bg-[#F6F6F6]" onClick={() => setselectpage("mockups")}>
                <img src={mockup} alt="color icon" className="ml-[10px] w-[30px] h-[30px] p-[5px] border-[1.5px] border-[#EBEBEB] rounded-[10px]" />
                <span className="ml-[10px] items-start justify-center font-Afacad font-medium text-[30px]">mockups</span>
              </div>

              <div className="flex flex-row items-center justify-start w-full h-auto cursor-pointer hover:bg-[#F6F6F6]" onClick={() => setselectpage("font")}>
                <img src={font} alt="color icon" className="ml-[10px] w-[30px] h-[30px] p-[5px] border-[1.5px] border-[#EBEBEB] rounded-[10px]" />
                <span className="ml-[10px] items-start justify-center font-Afacad font-medium text-[30px]">font</span>
              </div>

              <div className="flex flex-row items-center justify-start w-full h-auto cursor-pointer hover:bg-[#F6F6F6]" onClick={() => setselectpage("design-inspo")}>
                <img src={design_inspo} alt="color icon" className="ml-[10px] w-[30px] h-[30px] p-[5px] border-[1.5px] border-[#EBEBEB] rounded-[10px]" />
                <span className="ml-[10px] items-start justify-center font-Afacad font-medium text-[30px]">design-inspo</span>
              </div>

              <div className="flex flex-row items-center justify-start w-full h-auto cursor-pointer hover:bg-[#F6F6F6]" onClick={() => setselectpage("icons")}>
                <img src={icon} alt="color icon" className="ml-[10px] w-[30px] h-[30px] p-[5px] border-[1.5px] border-[#EBEBEB] rounded-[10px]" />
                <span className="ml-[10px] items-start justify-center font-Afacad font-medium text-[30px]">icons</span>
              </div>

              <div className="flex flex-row items-center justify-start w-full h-auto cursor-pointer hover:bg-[#F6F6F6]" onClick={() => setselectpage("illustrations")}>
                <img src={illustration} alt="color icon" className="ml-[10px] w-[30px] h-[30px] p-[5px] border-[1.5px] border-[#EBEBEB] rounded-[10px]" />
                <span className="ml-[10px] items-start justify-center font-Afacad font-medium text-[30px]">illustrations</span>
              </div>

          </div> 

          {/*advertisement area*/}
          <div className="border-[2px] border-[#F6F6F6] rounded-[10px] w-[200px] h-[190px] ml-2 mr-4 flex items-center justify-center">
          </div>

          {/* submit a tool button */}
          <button className="w-[200px] h-auto hover:border-[#e4e4e4] bg-white border-[2px] border-[#F6F6F6] rounded-[20px] p-[2px] ml-2 mr-4 mt-2 flex flex-row items-center justify-center opacity-70 hover:opacity-100 hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out">
            <img src={send} alt="submit icon" className="w-[30px] h-[30px] p-[5px] mr-[2px]" />
            <span className="text-[20px] font-Afacad font-bold">submit a tool</span>
          </button>

          {/* footer with social media links */}
          <div className=" flex flex-row items-center justify-center w-[200px] ml-2 mr-4 h-[20px] mt-3 bg-white ">
            <div className="text-[12px] font-Afacad font-bold text-black ">made by Atharv Remeshan</div>
            <img src={linkedin} alt="linkedin icon" className="w-[12px] h-[12px] mx-[5px] hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out" />
            <img src={twitter} alt="twitter icon" className="w-[12px] h-[12px] mx-[5px] hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out" />          
          </div>
          
        </div>


        {/* right content area*/}
        <div className="flex-row items-center justify-center w-4/5 p-[5px] bg-white overflow-y-scroll hide-scrollbar border-[2px] border-[#F6F6F6] rounded-[15px]">
          <SearchBar />
          {/* Conditional rendering based on selected page */}
          {selectpage === "colours" && <Colours />}
          {selectpage === "mockups" && <Mockups />}
          {selectpage === "font" && <Font />}
          {selectpage === "design-inspo" && <Design_inspo />}
          {selectpage === "icons" && <Icons />}
          {selectpage === "illustrations" && <Illustration />}
        </div>
        
        
      </div>  
    </>
  );
}
