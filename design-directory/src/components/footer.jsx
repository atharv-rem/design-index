import logo from '../assets/logo.avif';
import heart from '../assets/love.png';
import india from '../assets/Indian flag.png';
import arrow from '../assets/arrrow.png';
import twitter from '../assets/XLogo.png'
import insta from '../assets/InstagramLogo.png';
import linkedin from "../assets/LinkedinLogo.avif"
import {useNavigate} from "react-router-dom"

export default function Footer() {
    const navigate = useNavigate();
    const connect = [
        { 
            name: "share", 
            path: `https://twitter.com/intent/tweet?text=${encodeURIComponent("Check out design index, a collection of the best design resources on the internet! https://designindex.xyz")}` 
        },
        { name: "feedback", path: "/feedback" },
        { name: "submit a tool", path: "/Submit-a-Tool" },
    ]


    const info = [
        { name: "about", path: "/About" },
        { name: "privacy", path: "/Privacy-Policy" },
        { name: "terms", path: "/Terms-and-Conditions" },
    ]

    return (
        <>
            <div className="flex flex-row items-start justify-between w-full h-auto px-[5px] md:px-[10px] pt-[10px] mb-[5px] lg:mb-[10px] xl:mb-[20px] mt-[15px] bg-white">

                {/* left side */}
                <div className="hidden sm:flex sm:flex-col items-start justify-start w-auto h-auto ">
                    <div className="flex flex-row items-center justify-start w-full h-auto mb-[5px]">
                        <img src={logo} alt="design index logo" className="w-[22px] h-[22px]  sm:w-[25px] sm:h-[25px] lg:w-[30px] lg:h-[30px] xl:w-[35px] xl:h-[35px] 2xl:h-[40px] 2xl:w-[40px] rotate-[5deg]" />
                        <span className="text-[19px] sm:text-[19px] md:text-[20px] lg:text-[25px] xl:text-[30px] 2xl:text-[35px] text-black font-Fustat font-semibold ml-[5px]">design index.</span>
                    </div>
                    <p className="justify-start items-start text-left md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[24px] text-[#575757] font-Outfit leading-4 font-medium">collection of the best design resources on the internet</p>
                    <div className='flex flex-row items-center'>
                        <p className="md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[24px] text-[#575757] font-Outfit font-medium text-nowrap">made with</p>
                        <img src={heart} alt="Made with Love" className=" w-[15px] h-[15px] md:w-[15px] md:h-[15px] lg:w-[17px] lg:h-[17px] xl:w-[20px] xl:h-[20px] 2xl:w-[22px] 2xl:h-[22px] mx-[2px]" />
                        <p className="md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[24px] text-[#575757] font-Outfit font-medium text-nowrap">by Atharv Remeshan</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <p className="md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[24px] text-[#575757] font-Outfit font-medium">location - Mumbai,India</p>
                        <img src={india} alt="indian flag" className="w-[15px] h-[10px]md:w-[17px] md:h-[12px] lg:w-[19px] lg:h-[14px] xl:w-[22px] xl:h-[16px] 2xl:w-[24px] 2xl:h-[18px] ml-[5px]" />
                    </div>
                    <div className='flex flex-row items-start justify-center mt-[5px]'>
                        <img src={twitter} alt="X logo" className="w-[30px] h-[30px] md:w-[30px] md:h-[30px] lg:w-[32px] lg:h-[32px] xl:w-[35px] xl:h-[35px] 2xl:w-[40px] 2xl:h-[40px] mr-[5px] p-[5px] border-[1px] border-[#e2e2e2] rounded-[8px] opacity-90 hover:opacity-100 hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out" onClick={() => window.open("https://x.com/atharv_rem", "_blank")} />
                        <img src={insta} alt="Instagram logo" className="w-[30px] h-[30px] md:w-[30px] md:h-[30px] lg:w-[32px] lg:h-[32px] xl:w-[35px] xl:h-[35px] 2xl:w-[40px] 2xl:h-[40px] mr-[5px] p-[5px] border-[1px] border-[#e2e2e2] rounded-[8px] opacity-80 hover:opacity-100 hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out" onClick={() => window.open("https://instagram.com/atharv_remeshan", "_blank")} />
                        <img src={linkedin} alt="LinkedIn logo" className="w-[30px] h-[30px] md:w-[30px] md:h-[30px] lg:w-[32px] lg:h-[32px] xl:w-[35px] xl:h-[35px] 2xl:w-[40px] 2xl:h-[40px] p-[5px] border-[1px] border-[#e2e2e2] rounded-[8px] opacity-80 hover:opacity-100 hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out" onClick={() => window.open("https://www.linkedin.com/in/atharv-rem", "_blank")} />
                    </div>
                </div>

                {/*right side*/}
                <div className="flex flex-row items-start justify-start w-full sm:w-auto h-auto gap-x-[20px] md:gap-x-[30px] lg:gap-x-[60px] mt-[20px] sm:mt-0">

                    <div className='flex flex-col w-full'>
                        <div className='flex flex-row  gap-x-[20px] sm:gap-x-[10px] md:gap-x-[30px] lg:gap-x-[60px]'>
                            {/* connect section */}
                            <div className="flex flex-col items-start justify-start w-auto h-auto sm:ml-[20px] mt-[5px]">
                                <span className="text-[17px] md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[24px] text-black font-Outfit font-medium mb-[2px]">Connect</span>
                                <div className="flex flex-col items-start">
                                    {connect.map((item) => {
                                        const handleClick = item.path.length > 100
                                            ? () => window.open(item.path, "_blank")
                                            : () => navigate(item.path);

                                        return (
                                            <div className='flex flex-row items-center justify-start w-auto h-auto' key={item.name}>
                                                <span
                                                    className="text-[17px] md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[24px] font-Outfit font-medium text-[#898989] text-nowrap hover:text-black hover:cursor-pointer hover:underline-offset-2 hover:underline"
                                                    onClick={handleClick}
                                                >
                                                    {item.name}
                                                </span>
                                                <img src={arrow} alt="arrow icon" className="w-[12px] h-[12px] md:w-[13px] md:h-[13px] lg:w-[15px] lg:h-[15px] xl:w-[17px] xl:h-[17px] 2xl:w-[20px] 2xl:h-[20px] ml-[5px]" />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* info section */}
                            <div className="flex flex-col items-start justify-start w-auto h-auto ml-[20px] mt-[5px]">
                                <span className="text-[17px] md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[24px] text-black font-Outfit font-medium mb-[2px]">Info</span>
                                <div className="flex flex-col items-start">
                                    {info.map((infoItem) => (
                                        <div className='flex flex-row items-center justify-start w-auto h-auto' key={infoItem.name}>
                                            <span
                                                className="text-[17px] md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[24px] font-Outfit font-medium text-[#898989] hover:text-black hover:cursor-pointer hover:underline-offset-2 hover:underline"
                                                onClick={() => navigate(infoItem.path)}
                                            >
                                                {infoItem.name}
                                            </span>
                                            <img src={arrow} alt="arrow icon" className=" w-[12px] h-[12px]md:w-[13px] md:h-[13px] lg:w-[15px] lg:h-[15px] xl:w-[17px] xl:h-[17px] 2xl:w-[20px] 2xl:h-[20px] ml-[5px]" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <span className="w-full items-start justify-start text-left text-[17px] sm:hidden text-[#898989] font-Outfit font-medium mt-[10px] mb-[10px] ">© 2025 design index. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </>
    );
}