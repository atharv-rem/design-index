import color from "./assets/color-card.svg"
import font from "./assets/text-font-stroke-rounded.svg"
import icon from "./assets/home-01-stroke-rounded.svg"
import mockup from "./assets/hold-phone-stroke-rounded.svg"
import design_inspo from "./assets/canvas-stroke-rounded.svg"
import illustration from "./assets/ai-beautify-stroke-rounded.svg"
import send from "./assets/submit.svg"
import sidebar_icon from "./assets/sidebar icon.png"
import sidebar_close_icon from "./assets/sidebar close.png"
import india from './assets/Indian flag.png';
import heart from './assets/love.png';
import twitter from './assets/XLogo.png'
import insta from './assets/InstagramLogo.png';
import linkedin from "./assets/LinkedinLogo.avif"
import warning from "./assets/octagon-warning.svg"
import logo from "./assets/logo.avif"
import { lazy, Suspense } from "react";
const Colours = lazy(() => import("./components/colours.jsx"));
const Mockups = lazy(() => import("./components/mockups.jsx"));
const Font = lazy(() => import("./components/font.jsx"));
const SearchBar = lazy(() => import("./components/search bar.jsx"));
const Searchresults = lazy(() => import("./components/search results.jsx"));
const Searchimage = lazy(() => import("./components/search_suggestions.jsx"));
const Design_inspo = lazy(() => import("./components/desin-inspo.jsx"));
const Icons = lazy(() => import("./components/icons.jsx"));
const Illustration = lazy(() => import("./components/illustrations.jsx"));
const PrivacyPolicy = lazy(() => import("./components/privacy policy.jsx"));
const About = lazy(() => import("./components/about.jsx"));
const Terms_and_Conditions = lazy(() => import("./components/terms and conditions.jsx"));
const Feedback = lazy(() => import("./components/feedback.jsx"));
import Homepage from "./components/homepage.jsx"
const SubmitATool = lazy(() => import("./components/submit_a_tool.jsx"));

import {Routes, Route, useNavigate,useLocation} from "react-router-dom";
import Zustand_global_storage from "./zustand-global-storage.js"

export default function App() {
  const navigate = useNavigate();
  const navItems = [
    {
      path: "/colours",
      label: "colours",
      icon: color,
    },
    {
      path: "/mockups",
      label: "mockups",
      icon: mockup,
    },
    {
      path: "/fonts",
      label: "fonts",
      icon: font
    },
    {
      path: "/design-inspirations",
      label: "inspirations",
      icon: design_inspo
    },
    {
      path: "/icons",
      label: "icons",
      icon: icon
    },
    {
      path: "/illustrations",
      label: "illustrations",
      icon: illustration
    },
  ];
  const location = useLocation();
  const disable_scroll = [
  "/colours",
  "/mockups",
  "/fonts",
  "/design-inspirations",
  "/icons",
  "/illustrations",
  "/submit-a-tool",
  "/feedback",
];
const should_disable_scroll = disable_scroll.includes(location.pathname);

  // State to manage sidebar visibility
  const sidebar = Zustand_global_storage((state) => state.sidebar);
  const setSidebar = Zustand_global_storage((state) => state.setSidebar);
  const toggleSidebar = Zustand_global_storage((state) => state.toggleSidebar);

  const handleToggleSidebar = () => {
    toggleSidebar();
  };
  

  return (
    <>
      {/* parent layout container */}
      <div className="flex w-full h-screen p-[10px] overflow-hidden bg-white"> 

        {/* Left sidebar for navigation*/}
        <div className="sm:hidden xs:hidden hidden md:block flex-col items-center justify-center w-1/5 bg-white min-h-screen max-h-screen position-fixed top-0 left-0 relative">
          
          {/* logo and title */}
          <div className="flex flex-row items-center justify-start h-auto leading-none mt-[7px] py-[5px] px-[2px] 2xl:pl-4 2xl:pt-3 w-full cursor-pointer" onClick={() => navigate("/")}>
            <img alt="Collection of the best design tools on the itnernet" src={logo} className="w-[25px] h-[25px] md:w-[25px] md:h-[25px] lg:w-[35px] lg:h-[35px] xl:w-[40px] xl:h-[40px] 2xl:w-[45px] 2xl:h-[45px] ml-[10px] rotate-[5deg]"/>
            <span className="text-[22px] md:text-[22px] lg:text-[28px] xl:text-[33px] 2xl:text-[38px] pl-2 font-Fustat font-semibold">design index.</span>                    
          </div>

          {/* Navigation bar */}
          <div className="flex flex-col gap-1 items-start justify-start w-auto h-full mt-[17px] xl:mt-[20px] mr-[5px] mb-[10px] ml-[5px] xl:ml-[10px] 2xl:ml-5 overflow-y-auto hide-scrollbar">
              
              {navItems.map(({ path, label, icon }) => (
              <div
                key={path}
                className="flex flex-row items-center justify-start w-full h-auto cursor-pointer hover:bg-[#F6F6F6] rounded-[10px] p-[3px]"
                onClick={() => navigate(path)}
              >
                <img src={icon} alt={label} className="ml-[5px] w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[35px] xl:w-[40px] xl:h-[40px] 2xl:w-[45px] 2xl:h-[45px] p-[4px] xl:p-[6px] border-[1.5px] border-[#EBEBEB] rounded-[8px]"/>
                <span className="ml-[10px] items-start justify-center font-Outfit font-semibold text-[18px] md:text-[20px] lg:text-[25px] xl:text-[31px] 2xl:text-[38px]">{label}</span>
                {location.pathname === path}
              </div>
            ))}

          </div> 

          {/* Bottom section with illustration and submit button */}
          <div className="items-start justify-start absolute bottom-[20px] left-[20px] md:bottom-[30px] md:left-[0px] md-right-[0px] lg:bottom-[30px] xl:bottom-[40px] w-auto flex flex-col md:mx-[5px] lg:mx-[10px]">
            
            {/* warning text */}
            <div className="flex flex-col items-start justify-center h-auto w-full flex-grow p-[10px] lg:px-[15px] lg:py-[15px] 2xl:px-[20px] 2xl:py-[20px] bg-white border-[1px] border-[#eaeaea] md:rounded-[15px] lg:rounded-[20px] xl:rounded-[25px] 2xl:rounded-[30px] mb-[10px]">
              <div className="flex flex-row">
                <img src={warning} alt="warning icon" className="md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px] xl:w-[28px] xl:h-[28px] 2xl:w-[33px] 2xl:h-[33px]"/>
                <span className="md:text-[15px] lg:text-[20px] xl:text-[25px] 2xl:text-[30px] font-Outfit mb-[5px] ml-[5px] text-black font-semibold leading-none">warning!</span>
              </div>             
              <span className="md:text-[13px] lg:text-[18px] xl:text-[23px] 2xl:text-[25px] mt-[3px] font-Outfit text-[#6f6f6f] font-medium md:leading-[15px] lg:leading-5 xl:leading-6 2xl:leading-7">
                no emails, no bullshi* we only offer the best design resources
              </span>
            </div>

            {/* submit a tool button */}
            <button className="w-full flex-grow px-[20px] bg-white border-[1.5px] border-[#e3e3e3] md:rounded-[13px] lg:rounded-[15px] xl:rounded-[20px] 2xl:rounded-[23px] p-[2px] flex flex-row items-center justify-center opacity-70 hover:opacity-100 hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out" onClick={() => {navigate("/Submit-a-Tool")}}>
              <img src={send} alt="submit icon" className="w-[30px] h-[30px] xl:w-[35px] xl:h-[35px] 2xl:w-[40px] 2xl:h-[40px] p-[5px] mr-[2px]" />
              <span className="md:text-[20px] lg:text-[25px] xl:text-[30px] 2xl:text-[35px] font-Outfit font-semibold">submit a tool</span>
            </button>
          </div>

        </div>

        {/* Mobile sidebar for navigation */}
        {sidebar && (
          <div className="md:hidden fixed top-0 left-0 w-[80%] sm:w-[50%] h-screen bg-white z-50 shadow-lg justify-center items-end">

            <div className="flex flex-col w-full h-auto p-[10px]">
              <div className="flex flex-row items-center justify-between mb-4 w-auto h-auto">
                <div onClick={() => {navigate("/"); setSidebar(false);}} className="flex flex-row items-center justify-start w-auto h-auto mb-[5px] p-[10px]">
                  <img src={logo} alt="design index logo" className="w-[30px] h-[30px] rotate-[5deg]" />
                  <span className="text-[25px] text-black font-Fustat font-semibold ml-[5px] items-center justify-start">design index.</span>
                </div>
                <img onClick={() => setSidebar(false)} src={sidebar_close_icon} alt="close sidebar" className="w-[36px] h-[36px] p-[5px]"/>
              </div>

              <div className="flex flex-col items-start justify-start w-full h-auto overflow-y-auto hide-scrollbar">
                {navItems.map(({ path, label, icon }) => (
                  <div
                    key={path}
                    className="flex items-center gap-[10px] cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                    onClick={() => {
                      navigate(path);
                      setSidebar(false);
                    }}
                  >
                    <img src={icon} alt={label} className="w-[35px] h-[35px] border-[1.5px] border-[#EBEBEB] rounded-[8px] p-[5px]" />
                    <span className="text-[25px] font-Outfit font-semibold text-black ">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:hidden items-start justify-start w-[80vw] h-auto px-[19px] bg-white fixed bottom-[80px] left-0px">
                <div className="flex flex-row items-center justify-start w-full h-auto mb-[5px]">
                  <img src={logo} alt="design index logo" className="w-[22px] h-[22px]  sm:w-[25px] sm:h-[25px] lg:w-[30px] lg:h-[30px] xl:w-[35px] xl:h-[35px] 2xl:h-[40px] 2xl:w-[40px] rotate-[5deg]" />
                  <span className="text-[19px] sm:text-[19px] md:text-[20px] lg:text-[25px] xl:text-[30px] 2xl:text-[35px] text-black font-Fustat font-semibold ml-[5px]">design index.</span>
                </div>
                <p className="md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] text-[#575757] font-Outfit leading-4 font-medium">collection of the best design resources on the internet</p>
                <div className='flex flex-row items-center'>
                  <p className="md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[24px] text-[#575757] font-Outfit font-medium">made with</p>
                  <img src={heart} alt="Made with Love" className=" w-[15px] h-[15px] md:w-[15px] md:h-[15px] lg:w-[17px] lg:h-[17px] xl:w-[20px] xl:h-[20px] 2xl:w-[22px] 2xl:h-[22px] mx-[2px]" />
                  <p className="md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[24px] text-[#575757] font-Outfit font-medium">by Atharv Remeshan</p>
                </div>
                <div className='flex flex-row items-center'>
                  <p className="md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[24px] text-[#575757] font-Outfit font-medium">location - Mumbai,India</p>
                  <img src={india} alt="indian flag" className="w-[15px] h-[10px]md:w-[17px] md:h-[12px] lg:w-[19px] lg:h-[14px] xl:w-[22px] xl:h-[16px] 2xl:w-[24px] 2xl:h-[18px] ml-[5px]" />
                </div>
                <div className='flex flex-row items-start justify-center mt-[5px]'>
                  <img src={twitter} alt="X logo" className="w-[30px] h-[30px] md:w-[30px] md:h-[30px] lg:w-[32px] lg:h-[32px] xl:w-[35px] xl:h-[35px] 2xl:w-[40px] 2xl:h-[40px] mr-[5px] p-[5px] border-[1px] border-[#e2e2e2] rounded-[8px]" onClick={() => window.open("https://x.com/atharv_rem", "_blank")} />
                  <img src={insta} alt="Instagram logo" className="w-[30px] h-[30px] md:w-[30px] md:h-[30px] lg:w-[32px] lg:h-[32px] xl:w-[35px] xl:h-[35px] 2xl:w-[40px] 2xl:h-[40px] mr-[5px] p-[5px] border-[1px] border-[#e2e2e2] rounded-[8px]" onClick={() => window.open("https://instagram.com/atharv_remeshan", "_blank")} />
                  <img src={linkedin} alt="LinkedIn logo" className="w-[30px] h-[30px] md:w-[30px] md:h-[30px] lg:w-[32px] lg:h-[32px] xl:w-[35px] xl:h-[35px] 2xl:w-[40px] 2xl:h-[40px] p-[5px] border-[1px] border-[#e2e2e2] rounded-[8px]" onClick={() => window.open("https://www.linkedin.com/in/atharv-rem", "_blank")} />
                </div>
            </div>

            <button className="w-[70vw] sm:w-[45vw] h-auto px-[20px] bg-white border-[1.5px] border-[#e3e3e3] p-[2px] flex flex-row items-center justify-center fixed bottom-[20px] left-[20px] sm:left-[20px] rounded-[18px]" onClick={() => {navigate("/Submit-a-Tool"); setSidebar(false);}}>
                <img src={send} alt="submit icon" className="w-[25px] h-[25px]" />
                <span className="text-[25px] font-Outfit font-semibold ml-[10px]">submit a tool</span>
            </button>
        </div>
        )}

        {/* right content area*/}
        <div key={location.pathname} className={`flex-col items-center justify-center w-full md:w-4/5 p-[5px] md:p-[5px] bg-white z-4 
        ${should_disable_scroll ? "overflow-hidden": "overflow-y-auto hide-scrollbar"}`}>

          {/* Mobile header */}
          <div className="md:hidden flex flex-row items-start justify-start w-full h-[100px] mb-[5px] fixed top-0 pt-[20px] left-[5px] z-5 p-[10px] bg-white">
            <img src={logo} alt="design index logo" className="w-[30px] h-[30px rotate-[5deg]" />
            <span className="text-[25px] text-black font-Fustat font-semibold ml-[5px]">design index.</span>
          </div>

          {/* Sidebar icon for mobile */}
          <img onClick={handleToggleSidebar} src={sidebar_icon} alt="sidebar icon" className="drop-shadow-md drop-shadow-neutral-100 border-1 border-[#ececec] rounded-[10px] p-[5px] md:hidden w-[36px] h-[36px] fixed right-[10px] top-[70px] z-5 bg-white" />

          <SearchBar />
          
          {/* Conditional rendering based on selected page */}
            <Routes>
            <Route path="/colours" element={ <Suspense fallback={<div>Loading...</div>}><div className="mt-[90px] md:mt-[40px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px]"><Colours /></div></Suspense>} />
            <Route path="/" element={<Homepage />} />
            <Route path="/mockups" element={<Suspense fallback={<div>Loading...</div>}><div className="mt-[90px] md:mt-[40px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px]"><Mockups /></div></Suspense>} />
            <Route path="/fonts" element={<Suspense fallback={<div>Loading...</div>}><div className="mt-[90px] md:mt-[40px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px]"><Font /></div></Suspense>} />
            <Route path="/design-inspirations" element={<Suspense fallback={<div>Loading...</div>}><div className="mt-[90px] md:mt-[40px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px]"><Design_inspo /></div></Suspense>} />
            <Route path="/icons" element={<Suspense fallback={<div>Loading...</div>}><div className="mt-[90px] md:mt-[40px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px]"><Icons /></div></Suspense>} />
            <Route path="/illustrations" element={<Suspense fallback={<div>Loading...</div>}><div className="mt-[90px] md:mt-[40px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px]"><Illustration /></div></Suspense>} />
            <Route path="*" element={ <Suspense fallback={<div>Loading...</div>}>
              <div className="w-full h-[100dvh] flex flex-col justify-center items-center">
                <p className="text-2xl text-black font-Outfit font-semibold">
                  404 Page Not Found
                </p>
              </div></Suspense>} />
            <Route path='/Privacy-Policy' element={ <Suspense fallback={<div>Loading...</div>}><div className="mt-[90px] md:mt-[40px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px]"><PrivacyPolicy /></div></Suspense>} />
            <Route path='/About' element={ <Suspense fallback={<div>Loading...</div>}><div className="mt-[90px] md:mt-[40px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px]"><About /></div></Suspense>} />
            <Route path='/Terms-and-Conditions' element={<Suspense fallback={<div>Loading...</div>}><div className="mt-[90px] md:mt-[40px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px]"><Terms_and_Conditions /></div></Suspense>} />
            <Route path='/Search-Results' element={<Suspense fallback={<div>Loading...</div>}><div className="mt-[90px] md:mt-[40px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px]"><Searchresults /></div></Suspense>} />
            <Route path='/Search' element={<Suspense fallback={<div>Loading...</div>}><div className="mt-[90px] md:mt-[40px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px]"><Searchimage /></div></Suspense>} />
            <Route path='/Feedback' element={<Suspense fallback={<div>Loading...</div>}><div className="mt-[90px] md:mt-[40px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px]"><Feedback /></div></Suspense>} />
            <Route path='/Submit-a-Tool' element={<Suspense fallback={<div>Loading...</div>}><SubmitATool /></Suspense>} />
          </Routes>
        </div>
        
      </div>
    </>
  );
}
