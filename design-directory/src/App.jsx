import color from "./assets/colors-stroke-rounded.svg"
import font from "./assets/text-font-stroke-rounded.svg"
import icon from "./assets/home-01-stroke-rounded.svg"
import mockup from "./assets/hold-phone-stroke-rounded.svg"
import design_inspo from "./assets/canvas-stroke-rounded.svg"
import illustration from "./assets/ai-beautify-stroke-rounded.svg"
import send from "./assets/sent-stroke-rounded.svg"
import sidebar_illustration from "./assets/sidebar illustration.png"

import SearchBar from "./components/search bar.jsx";
import Searchresults from "./components/search results.jsx";
import Searchimage from "./components/searchimage.jsx";

import Colours from "./components/colours.jsx"
import Mockups from "./components/mockups.jsx"
import Font from "./components/font.jsx"
import Design_inspo from "./components/desin-inspo.jsx"
import Icons from "./components/icons.jsx"
import Illustration from "./components/illustrations.jsx";
import Side_nav_arrow from "./components/side_nav_arrow.jsx";
import logo from "./assets/logo.png";
import PrivacyPolicy from "./components/privacy policy.jsx";
import About from "./components/about.jsx";
import Terms_and_Conditions from "./components/terms and conditions.jsx"
import {Routes, Route, useNavigate,useLocation} from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      {/* parent layout container */}
      <div className="flex w-full h-screen p-[10px] overflow-hidden bg-white"> 

        {/* Left sidebar for navigation*/}
        <div className="flex-col items-center justify-center w-1/5 bg-white min-h-screen max-h-screen position-fixed top-0 left-0">
          
        {/* logo and title */}
          <div className="flex flex-row items-center justify-start h-auto leading-none mt-[7px] py-[5px] px-[2px] w-full">
            <img style={{
                      filter:'drop-shadow(0px 22px 6px rgba(84, 84, 84, 0.00)),drop-shadow(0px 14px 6px rgba(84, 84, 84, 0.01)),drop-shadow(0px 8px 5px rgba(84, 84, 84, 0.05)),drop-shadow(0px 4px 4px rgba(84, 84, 84, 0.09)),drop-shadow(0px 1px 2px rgba(84, 84, 84, 0.10))'
                        }} 
                alt="Collection of the best design tools on the itnernet" src={logo} className="w-[25px] h-[25px] ml-[10px]"/>
            <span style={{
              textShadow: '-17px 126px 35px rgba(161, 161, 161, 0.00), -11px 80px 32px rgba(161, 161, 161, 0.03), -6px 45px 27px rgba(161, 161, 161, 0.10), -3px 20px 20px rgba(161, 161, 161, 0.17), -1px 5px 11px rgba(161, 161, 161, 0.20)'
            }}
            className="text-[22px] pl-2 font-Fustat font-semibold">design index.</span>                    
          </div>

          {/* Navigation bar */}
          <div className="flex flex-col items-start justify-start w-auto h-[230px] mt-[17px] mr-[5px] mb-[5px] ml-[5px] overflow-y-auto hide-scrollbar">
              
              <div className="flex flex-row items-center justify-start w-full h-[40px] cursor-pointer hover:bg-[#F6F6F6] rounded-[10px]" onClick={() => navigate("/colours")}>
                <img src={color} alt="color icon" className="ml-[5px] w-[25px] h-[25px] p-[4px] border-[1.5px] border-[#EBEBEB] rounded-[8px]" />
                <span className="ml-[10px] items-start justify-center font-Poppins font-semibold text-[18px]">colours</span>
                {location.pathname === "/colours" && <Side_nav_arrow style={{"--left-margin":'75px'}} />}
              </div>

              <div className="flex flex-row items-center justify-start w-full h-[40px] cursor-pointer hover:bg-[#F6F6F6] rounded-[10px]" onClick={() => navigate("/mockups")}>
                <img src={mockup} alt="color icon" className="ml-[5px] w-[25px] h-[25px] p-[4px] border-[1.5px] border-[#EBEBEB] rounded-[8px]" />
                <span className="ml-[10px] items-start justify-center font-Poppins font-semibold text-[18px]">mockups</span>
                {location.pathname=== "/mockups" && <Side_nav_arrow style={{"--left-margin":'58px'}} />}
              </div>

              <div className="flex flex-row items-center justify-start w-full h-[40px] cursor-pointer hover:bg-[#F6F6F6] rounded-[10px]" onClick={() => navigate("/fonts")}>
                <img src={font} alt="color icon" className="ml-[5px] w-[25px] h-[25px] p-[4px] border-[1.5px] border-[#EBEBEB] rounded-[8px]" />
                <span className="ml-[10px] items-start justify-center font-Poppins font-semibold text-[18px]">font</span>
                {location.pathname === "/fonts" && <Side_nav_arrow style={{"--left-margin":'105px'}} />}
              </div>

              <div className="flex flex-row items-center justify-start w-full h-[40px] cursor-pointer hover:bg-[#F6F6F6] rounded-[10px]" onClick={() => navigate("/design-inspirations")}>
                <img src={design_inspo} alt="color icon" className="ml-[5px] w-[25px] h-[25px] p-[4px] border-[1.5px] border-[#EBEBEB] rounded-[8px]" />
                <span className="ml-[10px] items-start justify-center font-Poppins font-semibold text-[18px]">inspirations</span>
                {location.pathname === "/design-inspirations" && <Side_nav_arrow style={{"--left-margin":'35px'}} />}
              </div>

              <div className="flex flex-row items-center justify-start w-full h-[40px] cursor-pointer hover:bg-[#F6F6F6] rounded-[10px]" onClick={() => navigate("/icons")}>
                <img src={icon} alt="color icon" className="ml-[5px] w-[25px] h-[25px] p-[4px] border-[1.5px] border-[#EBEBEB] rounded-[8px]" />
                <span className="ml-[10px] items-start justify-center font-Poppins font-semibold text-[18px]">icons</span>
                {location.pathname === "/icons" && <Side_nav_arrow style={{"--left-margin":'92px'}} />}
              </div>

              <div className="flex flex-row items-center justify-start w-full h-[40px] cursor-pointer hover:bg-[#F6F6F6] rounded-[10px]" onClick={() => navigate("/illustrations")}>
                <img src={illustration} alt="color icon" className="ml-[5px] w-[25px] h-[25px] p-[4px] border-[1.5px] border-[#EBEBEB] rounded-[8px]" />
                <span className="ml-[10px] items-start justify-center font-Poppins font-semibold text-[18px]">illustrations</span>
                {location.pathname === "/illustrations" && <Side_nav_arrow style={{"--left-margin":'35px'}}/>}
              </div>

          </div> 

          <div className="items-center justify-center absolute bottom-[20px] left-[10px] w-auto flex flex-col px-[10px]">
            {/* cute illustration */}
            <img src={sidebar_illustration} alt="an illustration of people looking at computer screen" className="w-[150px] h-[150px] my-[5px]" />

            {/* warning text */}
            <div className="flex flex-col items-start justify-center w-[200px] p-[10px] bg-white border-[1px] border-[#d8d8d8] rounded-[15px] mb-[10px]">
              <span className="text-[15px] font-Outfit text-black font-semibold leading-none">warning!</span>
              <span className="text-[13px] mt-[3px] font-Outfit text-[#6f6f6f] font-medium leading-4">
                no emails, no bullshi* we only offer the best design resources
              </span>
            </div>

            {/* submit a tool button */}
            <button className="w-[200px] h-auto bg-white border-[1.5px] border-[#e3e3e3] rounded-[20px] p-[2px] flex flex-row items-center justify-center opacity-70 hover:opacity-100 hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out">
              <img src={send} alt="submit icon" className="w-[30px] h-[30px] p-[5px] mr-[2px]" />
              <span className="text-[20px] font-Afacad font-bold">submit a tool</span>
            </button>
          </div>

        </div>


        {/* right content area*/}
        <div className="flex-col items-center justify-center w-4/5 p-[5px] mb-[10px] bg-white overflow-y-scroll hide-scrollbar">
        
          <SearchBar />
          {/* Conditional rendering based on selected page */}
          <Routes>
            <Route path="/colours" element={<Colours />} />
            <Route path="/" element={<Colours />} />
            <Route path="/mockups" element={<Mockups />} />
            <Route path="/fonts" element={<Font />} />
            <Route path="/design-inspirations" element={<Design_inspo />} />
            <Route path="/icons" element={<Icons />} />
            <Route path="/illustrations" element={<Illustration />} />
            <Route path="*" element={<div>404 Page Not Found</div>} />
            <Route path='/Privacy-Policy' element={<PrivacyPolicy />} />
            <Route path='/About' element={<About />} />
            <Route path='/Terms-and-Conditions' element={<Terms_and_Conditions />} />
            <Route path='/Search-Results' element={<Searchresults />} />
            <Route path='/Search' element={<Searchimage />} />
          </Routes>
        </div>
        
      </div>
    </>
  );
}
