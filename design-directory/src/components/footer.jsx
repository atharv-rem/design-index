import logo from '../assets/logo.png';
import heart from '../assets/love.png';
import india from '../assets/Indian flag.png';
import arrow from '../assets/arrrow.png';
import twitter from '../assets/XLogo.png'
import insta from '../assets/InstagramLogo.png';
import linkedin from "../assets/LinkedinLogo.png"
import {useNavigate} from "react-router-dom"

export default function Footer() {
    const navigate = useNavigate();
    const categories = [
        { name: "colours", path: "/colours" },
        { name: "mockups", path: "/mockups" },
        { name: "fonts", path: "/fonts" },
        { name: "inspirations", path: "/design-inspirations" },
        { name: "icons", path: "/icons" },
        { name: "illustrations", path: "/illustrations" },
    ];
    const connect = [
        { 
            name: "share", 
            path: `https://twitter.com/intent/tweet?text=${encodeURIComponent("Check out design index, a collection of the best design resources on the internet! https://atharvrem.vercel.app")}` 
        },
        { name: "feedback", path: ""},
        { name: "submit a tool", path: ""},
    ]


        const info = [
        { name: "about", path: "/About" },
        { name: "privacy policy", path: "/Privacy-Policy" },
        { name: "terms", path: "/Terms-and-Conditions" },
    ]

    return (
        <>
            <div className="flex flex-row items-start justify-left w-full h-auto p-[10px] mt-[20px] bg-white ">
                
                {/* left side */}
                <div className="flex flex-col items-start justify-start w-auto h-auto ">
                    <div className="flex flex-row items-center justify-start w-full h-auto mb-[5px]">
                        <img src={logo} alt="design index logo" className="w-[25px] h-[25px]" />
                        <span className="text-[20px] text-black font-Fustat font-semibold ml-[5px]">design index.</span>
                    </div>
                    <p className="text-[15px] text-[#575757] font-Outfit font-medium">collection of the best design resources on the internet</p>
                    <div className='flex flex-row items-center'>
                        <p className="text-[15px] text-[#575757] font-Outfit font-medium">made with</p>
                        <img src={heart} alt="Made with Love" className="w-[15px] h-[15px] mx-[2px]" />
                        <p className="text-[15px] text-[#575757] font-Outfit font-medium ">by Atharv Remeshan</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <p className="text-[15px] text-[#575757] font-Outfit font-medium">location - Mumbai,India</p>
                        <img src={india} alt="indian flag" className="w-[17px] h-[12px] ml-[5px]" />
                    </div>
                    <div className='flex flex-row items-start justify-center mt-[5px]'>
                        <img src={twitter} alt="X logo" className="w-[30px] h-[30px] mr-[5px] p-[5px] border-[1px] border-[#e2e2e2] rounded-[8px] opacity-90 hover:opacity-100 hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out" onClick={() => window.open("https://x.com/atharv_rem", "_blank")} />
                        <img src={insta} alt="Instagram logo" className="w-[30px] h-[30px] mr-[5px] p-[5px] border-[1px] border-[#e2e2e2] rounded-[8px] opacity-80 hover:opacity-100 hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out" onClick={() => window.open("https://instagram.com/atharv_remeshan", "_blank")} />
                        <img src={linkedin} alt="LinkedIn logo" className="w-[30px] h-[30px] p-[5px] border-[1px] border-[#e2e2e2] rounded-[8px] opacity-80 hover:opacity-100 hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out" onClick={() => window.open("https://www.linkedin.com/in/atharv-rem", "_blank")} />
                    </div>
                </div>

                {/*right side*/}
                <div className="flex flex-row items-start justify-start w-auto h-auto">

                    {/* category section */}
                    <div className="flex flex-col items-start justify-start w-auto h-auto mt-[5px]">
                        <span className="text-[15px] text-black font-Outfit font-medium mb-[2px] ml-[160px]">Categories</span>
                        <div className="flex flex-col items-start ml-[160px]">
                            {categories.map((category) => (
                                <div className='flex flex-row items-center justify-start w-auto h-auto' key={category.name}>
                                    <span
                                        className="text-[15px] font-Outfit font-medium text-[#898989] hover:text-black hover:cursor-pointer hover:underline-offset-2 hover:underline"
                                        onClick={() => navigate(category.path)}
                                    >
                                        {category.name}
                                    </span>
                                    <img src={arrow} alt="arrow icon" className="w-[13px] h-[13px] ml-[5px]" /> 
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* connect section */}
                    <div className="flex flex-col items-start justify-start w-auto h-auto ml-[20px] mt-[5px]">
                        <span className="text-[15px] text-black font-Outfit font-medium mb-[2px]">Connect</span>
                        <div className="flex flex-col items-start">
                            {connect.map((item) => {
                                const handleClick = item.path.length > 100
                                    ? () => window.open(item.path, "_blank")
                                    : () => navigate(item.path);

                                return (
                                    <div className='flex flex-row items-center justify-start w-auto h-auto' key={item.name}>
                                        <span
                                            className="text-[15px] font-Outfit font-medium text-[#898989] text-nowrap hover:text-black hover:cursor-pointer hover:underline-offset-2 hover:underline"
                                            onClick={handleClick}
                                        >
                                            {item.name}
                                        </span>
                                        <img src={arrow} alt="arrow icon" className="w-[13px] h-[13px] ml-[5px]" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* info section */}
                    <div className="flex flex-col items-start justify-start w-auto h-auto ml-[20px] mt-[5px]">
                        <span className="text-[15px] text-black font-Outfit font-medium mb-[2px]">Info</span>
                        <div className="flex flex-col items-start">
                            {info.map((infoItem) => (
                                <div className='flex flex-row items-center justify-start w-auto h-auto' key={infoItem.name}>
                                    <span
                                        className="text-[15px] font-Outfit font-medium text-[#898989] hover:text-black hover:cursor-pointer hover:underline-offset-2 hover:underline"
                                        onClick={() => navigate(infoItem.path)}
                                    >
                                        {infoItem.name}
                                    </span>
                                    <img src={arrow} alt="arrow icon" className="w-[13px] h-[13px] ml-[5px]" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* copyright */}
            <div className="w-full justify-center items-center flex flex-row mt-[10px]">
                <span className='text-[15px] text-[#898989] font-Outfit font-medium mr-[100px]'>© 2025 design index. All rights reserved.</span>
            </div>
        </>
    );
}