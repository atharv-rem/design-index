import data from "../database.json";
import Zustand_global_storage from "../zustand-global-storage.js";
import arrow_down from "../assets/ArrowElbowRightDown.png"
import left_arrow from '../assets/ArrowLeft.png'
import share_icon from "../assets/share icon.png"
import link_arrow from "../assets/ArrowCircleUpRight.png"
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "./footer.jsx";

const addRefParam = (url) => {
  const u = new URL(url);
  u.searchParams.set("ref", "designindex");
  return u.toString();
};

export default function Searchresults() {
    const results = Zustand_global_storage((state) => state.results);
    const keywords = Zustand_global_storage((state) => state.keywords);
    const hasSearched = Zustand_global_storage((state) => state.hasSearched);
    const relevant_results_count = results.filter((result) => result.matchedKeywords > 1).length;
    const similar_results_count = results.filter((result) => result.matchedKeywords === 1).length;
    const [click, setClick] = useState(false);
    const handle_similar_results_click = () => setClick(!click);

    const [searchParams, setSearchParams] = useSearchParams();
    const selectedToolName = searchParams.get("tool");
    const selectedItem = data.find(item => item.tool_name === selectedToolName);

    const renderCards = (items) => items.map((item, index) => (//this is the structure of each individual card in the search results
        <div
            key={index}
            onClick={() => setSearchParams({ tool: item.tool_name })}
            className="cursor-pointer bg-white p-[6px] rounded-[15px] border border-[#e1e1e1] flex flex-row items-start justify-left hover:shadow-sm hover:translate-y-[-2px] transition-all duration-200 ease-in-out"
        >
            <img alt={item.description.toLowerCase()} src={item.og_image_link} className="h-[120px] w-[220px] rounded-[9px] flex-shrink-0 overflow-hidden" />
            <div className='flex flex-col justify-center ml-[15px] w-auto mt-[10px]'>
                <div className="text-[14px] text-black font-Outfit font-bold p-0 leading-4 ">{item.tool_name}</div>
                {item.pricing.length > 5 ? (
                    <div className='flex flex-row items-center justify-start'>
                        <div className="font-Poppins font-semibold flex text-[11px] py-[2px] px-0 text-[#20851c] bg-[#d9ffd7] w-[40px] h-[20px] justify-center items-center rounded-[8px] mt-[3px] mb-[3px]">free</div>
                        <div className="flex font-Poppins font-semibold text-[11px] pt-[5px] pb-[5px] text-[#ab2a2a] bg-[#ffe5e5] w-[40px] h-[20px] justify-center items-center rounded-[8px] mt-[3px] mb-[3px] ml-[5px]">paid</div>
                    </div>
                ) : item.pricing === 'free' ? (
                    <div className="font-Poppins font-semibold flex text-[11px] py-[2px] px-0 text-[#20851c] bg-[#d9ffd7] w-[40px] h-[20px] justify-center items-center rounded-[8px] mt-[3px] mb-[3px]">free</div>
                ) : item.pricing === 'paid' ? (
                    <div className="flex font-Poppins font-semibold text-[11px] pt-[5px] pb-[5px] text-[#ab2a2a] bg-[#ffe5e5] w-[40px] h-[20px] justify-center items-center rounded-[8px] mt-[3px] mb-[3px]">paid</div>
                ) : null}
                <p className="text-[12px] font-Outfit font-semibold text-[#595959] leading-tight justify-evenly mr-[5px]">{item.description.toLowerCase()}</p>
            </div>
        </div>
    ));

    const [copied, setCopied] = useState(false);
    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (hasSearched && (results.length === 0 || keywords.length === 0)) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
            <span className="text-[20px] font-Outfit font-semibold text-black">No results found</span>
            <span className="text-[16px] font-Outfit font-medium text-gray-600 mt-2">Try searching with different keywords.</span>
            </div>
        );
    }
    else {
        if (selectedItem) { // clicking a tool from the search results, selectedItem will be defined as the tool param is put in place rendering this part
        return (
                <>
                <div className='flex flex-col items-start justify-start p-[5px] mt-[57px]'>

                    {/*back button removes the tool param from the link which lets is take it back to the orginal grid*/}
                    <div onClick={() =>setSearchParams({})} className='flex flex-row items-center justify-start cursor-pointer opacity-70 hover:opacity-100 hover:translate-x-[-2px] transition-all duration-200 ease-in-out'>
                        <img src={left_arrow} alt='back arrow' className='w-[20px] h-[20px]' />
                        <span className='font-Outfit text-[18px] font-medium text-[black] ml-[5px]'>back</span>
                    </div>

                    {/*this is the extended description page of each tool when clicked*/}
                    <div className='flex flex-row items-start justify-start mt-[10px]'>
                    <img src={selectedItem.og_image_link} alt="og image" className='h-[180px] w-[340px] rounded-[10px]'/>
                    <div className='flex flex-col items-start justify-start ml-[20px]'>
                            <div className='flex flex-row items-center justify-start'>
                                <div onClick={handleCopyLink} className='items-center justify-center w-[140px] h-auto p-[2px] border-[1.5px] border-[#e3e3e3] rounded-[20px] flex flex-row opacity-70 hover:opacity-100 hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out'>
                                    <img src={share_icon} alt='share icon' className='w-[15px] h-[15px]' />
                                    <span className='text-[15px] font-Outfit font-medium ml-[5px]'>{copied ? "link copied!" : "share this tool"}</span>
                                </div>
                                <a href={addRefParam(selectedItem.website)} target="_blank" rel="noopener noreferrer">
                                    <div className='flex flex-row items-center justify-center ml-[5px] w-[120px] h-auto p-[2px] border-[1.5px] border-[#e3e3e3] rounded-[20px] opacity-70 hover:opacity-100 hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out '>
                                        <img src={link_arrow} alt='link arrow' className='w-[20x] h-[20px]' />
                                        <span className='text-[15px] font-Outfit font-medium ml-[5px]'>visit website</span>
                                    </div>
                                </a>
                            </div>
                            <span className='font-semibold text-[25px] font-Outfit mt-[5px] '>{selectedItem.tool_name}</span>
                            {selectedItem.pricing.length > 5 ? (
                                <div className='flex flex-row items-center justify-start'>
                                <div className="font-Poppins font-semibold flex text-[11px] py-[2px] px-0 text-[#20851c] bg-[#d9ffd7] w-[40px] h-[20px] justify-center items-center rounded-[8px] mt-[3px] mb-[3px]">free</div>
                                <div className="flex font-Poppins font-semibold text-[11px] pt-[5px] pb-[5px] text-[#ab2a2a] bg-[#ffe5e5] w-[40px] h-[20px] justify-center items-center rounded-[8px] mt-[3px] mb-[3px] ml-[5px]">paid</div>
                                </div>
                            )
                            : selectedItem.pricing === 'free' ? (
                                <div className="font-Poppins font-semibold flex text-[11px] py-[2px] px-0 text-[#20851c] bg-[#d9ffd7] w-[40px] h-[20px] justify-center items-center rounded-[8px] mt-[3px] mb-[3px]">free</div>
                            ) : selectedItem.pricing === 'paid' ? (
                                <div className="flex font-Poppins font-semibold text-[11px] pt-[5px] pb-[5px] text-[#ab2a2a] bg-[#ffe5e5] w-[40px] h-[20px] justify-center items-center rounded-[8px] mt-[3px] mb-[3px]">paid</div>
                            )
                            : null}
                            <p className='text-[15px] font-Outfit font-medium mr-[12px] mt-[5px] leading-4 text-justify'>
                                    {selectedItem.extended_description}
                            </p>
                        </div>
                    </div>
                </div>

                <Footer />
                </>
        )
        }
        else
            {
            if (results.every(r => r.matchedKeywords <= 1)) {
                return(
                    <>
                        <div className="flex flex-col items-start justify-center h-auto mt-[45px] font-Outfit text-black font-medium text-[15px] ml-[5px]">relevant results</div>
                            <div className="flex flex-col items-start justify-center h-auto ml-[5px] font-Outfit text-[#898989] font-semibold text-[15px] mb-[10px]">{similar_results_count} tools</div>
                            <div className="grid grid-cols-2 gap-5 items-start justify-center w-auto mt-[10px] mr-[12px]">
                                {renderCards(data.filter(item => results.find(r => r.id === item.primary_key && r.matchedKeywords === 1)))}
                        </div>
                        <Footer />
                    </>
                )
                
            }
            else if (results.some(r=> r.matchedKeywords > 1)) {
                return (
                <>
                    <div className="flex flex-col items-start justify-center h-auto mt-[45px] font-Outfit text-black font-medium text-[15px] ml-[5px]">relevant results</div>
                    <div className="flex flex-col items-start justify-center h-auto ml-[5px] font-Outfit text-[#898989] font-semibold text-[15px] mb-[10px]">{relevant_results_count} tools</div>
                    <div className="grid grid-cols-2 gap-5 items-start justify-center w-auto mt-[10px] mr-[12px]">
                        {renderCards(data.filter(item => results.find(r => r.id === item.primary_key && r.matchedKeywords > 1)))}
                    </div>

                    <div className="flex flex-row items-center justify-left h-auto w-auto mt-[10px] ml-[5px] cursor-pointer" onClick={handle_similar_results_click}>
                        <span className="font-Outfit text-black font-semibold text-[15px]">similar results</span>
                        <img src={arrow_down} alt="arrow down" className="w-[15px] h-[15px] ml-[2px]" />
                    </div>
                    <div className="flex flex-col items-start justify-center h-auto ml-[5px] font-Outfit text-[#898989] font-medium text-[15px] mb-[10px]">{similar_results_count} tools</div>
                    {click && (
                        <div className="grid grid-cols-2 gap-5 items-start justify-center w-auto mt-[10px] mr-[12px]">
                            {renderCards(data.filter(item => results.find(r => r.id === item.primary_key && r.matchedKeywords === 1)))}
                        </div>
                    )}
                    <Footer />
                </>
                );
            }
        }
    }
}
