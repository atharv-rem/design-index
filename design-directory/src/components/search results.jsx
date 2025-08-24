import data from "../database.json";
import Zustand_global_storage from "../zustand-global-storage.js";
import arrow_down from "../assets/ArrowElbowRightDown.png"
import left_arrow from '../assets/ArrowLeft.png'
import share_icon from "../assets/share.svg"
import link_arrow from "../assets/link.svg"
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

// This function takes a URL and returns the same URL with the ref parameter set to "designindex"
// This is used to track referrals when users click on links to external websites.
const addRefParam = (url) => {
  const u = new URL(url);
  u.searchParams.set("ref", "designindex");
  return u.toString();
};

export default function Searchresults() {
    const results = Zustand_global_storage((state) => state.results);
    const keywords = Zustand_global_storage((state) => state.keywords);
    const hasSearched = Zustand_global_storage((state) => state.hasSearched);
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
            className="bg-white rounded-[15px] lg:rounded-[20px] xl:rounded-[24px] justify-start items-start border-[1px] border-[#e1e1e1] flex flex-row hover:shadow-sm hover:translate-y-[-2px] transition-all duration-200 ease-in-out cursor-pointer"
        >
            <img alt={item.description.toLowerCase()} src={item.og_image_link} className="h-[110px] w-[200px] sm:h-[110px] sm:w-[220px] md:h-[130px] md:w-[240px] lg:h-[140px] lg:w-[240px] xl:w-[300px] xl:h-[160px] 2xl:w-[340px] 2xl:h-[185px] rounded-[10px] sm:rounded-[10px] md:rounded-[14px] lg:rounded-[14px] xl:rounded-[18px] flex-shrink-0 overflow-hidden ml-[5px] xs:ml-[5px] sm:ml-[6px] md:ml-[7px] lg:ml-[7px] xl:ml-[5px] 2xl:ml-[7px] mt-[5px] mb-[5px]" />
            <div className='flex flex-col justify-start items-start ml-[15px] mr-[12px] w-auto h-full mt-[10px]'>
                <div className="text-[14px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] text-black font-Outfit font-bold p-0 leading-4 xl:leading-5 mt-[5px] lg:mt-[8px] 2xl:mt-[15px]">{item.tool_name}</div>
                {item.pricing.length > 5 ? (
                    <div className='flex flex-row items-center justify-start'>
                        <div className="font-Poppins font-semibold flex text-[11px] lg:text-[15px] xl:text-[17px] 2xl:text-[21px] py-[5px] px-[5px] text-[#20851c] bg-[#d9ffd7] w-[40px] h-[20px] lg:w-[45px] lg:h-[25px] xl:w-[50px] xl:h-[30px] 2xl:w-[60px] 2xl:h-[30px] justify-center items-center rounded-[8px] mt-[5px] lg:mt-[7px] 2xl:mt-[15px]">free</div>
                        <div className="flex font-Poppins font-semibold text-[11px] lg:text-[15px] xl:text-[17px] 2xl:text-[21px] pt-[5px] pb-[5px] text-[#ab2a2a] bg-[#ffe5e5] w-[40px] h-[20px] lg:w-[45px] lg:h-[25px] xl:w-[50px] xl:h-[30px] 2xl:w-[60px] 2xl:h-[30px] justify-center items-center rounded-[8px] mt-[5px] lg:mt-[7px] ml-[5px] 2xl:mt-[15px]">paid</div>
                    </div>
                ) : item.pricing === 'free' ? (
                    <div className="font-Poppins font-semibold flex text-[11px] lg:text-[15px] xl:text-[17px] 2xl:text-[21px] py-[5px] px-[5px] text-[#20851c] bg-[#d9ffd7] w-[40px] h-[20px] lg:w-[45px] lg:h-[25px] xl:w-[50px] xl:h-[30px] 2xl:w-[60px] 2xl:h-[30px] justify-center items-center rounded-[8px] mt-[5px] lg:mt-[7px] 2xl:mt-[15px]">free</div>
                ) : item.pricing === 'paid' ? (
                    <div className="flex font-Poppins font-semibold text-[11px] lg:text-[15px] xl:text-[17px] 2xl:text-[21px] pt-[5px] pb-[5px] text-[#ab2a2a] bg-[#ffe5e5] w-[40px] h-[20px] lg:w-[45px] lg:h-[25px] xl:w-[50px] xl:h-[30px] 2xl:w-[60px] 2xl:h-[30px] justify-center items-center rounded-[8px] mt-[5px] lg:mt-[7px] 2xl:mt-[15px]">paid</div>
                ) : null}
                <p className="text-[12px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] font-Outfit font-semibold text-[#595959]  leading-[12px] xs:leading-[15px] sm:leading-3 md:leading-4 lg:leading-5 justify-evenly mr-[5px] mt-[5px] lg:mt-[7px] 2xl:mt-[10px]">
                   {item.description.toLowerCase()}
                </p>
            </div>
        </div>
    ));

    const [copied, setCopied] = useState(false);
    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    
    //if no results are found or no keywords are entered, this will show a message to the user
    if (hasSearched && (results.length === 0 || keywords.length === 0)) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
            <span className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] font-Outfit font-semibold text-black">No results found</span>
            <span className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] font-Outfit font-medium text-gray-600 mt-2">Try adjusting your search query and try again.</span>
            </div>
        );
    }
    else {
        if (selectedItem) { // clicking a tool from the search results, selectedItem will be defined as the tool param is put in place rendering this part
        return (
                <>
                <div className='flex flex-col items-start justify-center h-auto mt-[100px] md:mt-[57px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[80px] p-[5px] w-auto'>

                    {/*back button removes the tool param from the link which lets is take it back to the orginal grid*/}
                    <div onClick={() =>setSearchParams({})} className='flex flex-row items-center justify-start cursor-pointer opacity-70 hover:opacity-100 hover:translate-x-[-2px] transition-all duration-200 ease-in-out'>
                        <img src={left_arrow} alt='back arrow' className='w-[20px] h-[20px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px] xl:w-[30px] xl:h-[30px] 2xl:w-[35px] 2xl:h-[35px]' />
                        <span className='font-Outfit text-[18px] md:text-[18px] lg:text-[20px] xl:text-[25px] 2xl:text-[30px] font-medium text-[black] ml-[5px]'>back</span>
                    </div>

                    {/*this is the extended description page of each tool when clicked*/}
                    <div className='flex flex-col sm:flex-row items-start justify-start mt-[10px]'>
                        <img src={selectedItem.og_image_link} alt="og image" className=' h-auto w-full sm:h-[180px] sm:w-[320px] md:h-[180px] md:w-[340px] lg:h-[200px] lg:w-[360px] xl:h-[240px] xl:w-[440px] 2xl:h-[280px] 2xl:w-[520px] rounded-[20px] md:rounded-[20px] lg:rounded-[25px] xl:rounded-[30px] 2xl:rounded-[40px]'/>
                        <div className='flex flex-col items-start justify-start ml-0 sm:ml-[20px]'>
                            <span className='font-semibold text-[25px] font-Outfit mt-[5px] '>{selectedItem.tool_name}</span>
                            {selectedItem.pricing.length > 5 ? (
                            <div className='flex flex-row items-center justify-start'>
                                <div className="font-Outfit font-semibold flex text-[15px] sm:text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-[21px] py-[5px] px-[5px] text-[#20851c] bg-[#d9ffd7] w-[45px] h-[25px] lg:w-[45px] lg:h-[25px] xl:w-[50px] xl:h-[30px] 2xl:w-[60px] 2xl:h-[30px] justify-center items-center rounded-[8px] mt-[5px] lg:mt-[3px] 2xl:mt-[8px]">free</div>
                                <div className="flex font-Outfit font-semibold text-[15px] sm:text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-[21px] pt-[5px] pb-[5px] text-[#ab2a2a] bg-[#ffe5e5] w-[45px] h-[25px] lg:w-[45px] lg:h-[25px] xl:w-[50px] xl:h-[30px] 2xl:w-[60px] 2xl:h-[30px] justify-center items-center rounded-[8px] mt-[5px] lg:mt-[3px] ml-[5px] 2xl:mt-[8px]">paid</div>
                            </div>
                            )
                            : selectedItem.pricing === 'free' ? (
                                <div className="font-Outfit font-semibold flex text-[15px] sm:text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-[21px] py-[5px] px-[5px] text-[#20851c] bg-[#d9ffd7] w-[45px] h-[25px] lg:w-[45px] lg:h-[25px] xl:w-[50px] xl:h-[30px] 2xl:w-[60px] 2xl:h-[30px] justify-center items-center rounded-[8px] mt-[5px] lg:mt-[3px] 2xl:mt-[8px]">free</div>
                            ) : selectedItem.pricing === 'paid' ? (
                                <div className="flex font-Outfit font-semibold text-[15px] sm:text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-[21px] pt-[5px] pb-[5px] text-[#ab2a2a] bg-[#ffe5e5] w-[45px] h-[25px] lg:w-[45px] lg:h-[25px] xl:w-[50px] xl:h-[30px] 2xl:w-[60px] 2xl:h-[30px] justify-center items-center rounded-[8px] mt-[5px] lg:mt-[3px] 2xl:mt-[8px]">paid</div>
                            )
                            : null}
                            <p className=' text-[20px] sm:text-[15px] md:text-[15px] lg:text-[18px] xl:text-[23px] 2xl:text-[26px] font-Outfit font-medium sm:mr-[12px] mt-[5px] xl:mt-[10px] leading-[20px] sm:leading-[15px] lg:leading-5 xl:leading-6 2xl:leading-7 text-justify'>
                            {selectedItem.extended_description.toLowerCase()}
                            </p>
                            <div className='flex w-full flex-col gap-y-[20px] gap-x-[10px] xl:gap-x-[20px] sm:flex-row items-center justify-center sm:justify-start mt-[15px]'>
                              <div onClick={handleCopyLink} 
                                className='items-center justify-center w-[190px] xs:w-[260px] sm:w-auto h-auto px-[10px] py-[3px] bg-white shadow-sm border-[1.5px] border-[#e7e7e7] xs:rounded-[22px] rounded-[20px] sm:rounded-[13px] xl:rounded-[17px] flex flex-row hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out'>
                                <img src={share_icon} alt='share icon' className='w-[25px] h-[25px] sm:w-[20px] sm:h-[20px] md:w-[16px] md:h-[16px] lg:w-[19px] lg:h-[19px] xl:w-[22px] xl:h-[22px] 2xl:w-[26px] 2xl:h-[26px]' />
                                <span className='text-[20px] xs:text-[25px] sm:text-[15px] md:text-[16px] lg:text-[19px] xl:text-[24px] 2xl:text-[28px] text-black font-Outfit font-semibold ml-[5px]'>{copied ? "link copied!" : "share this tool"}</span>
                              </div>
                              <a href={addRefParam(selectedItem.website)} target="_blank" rel="noopener noreferrer">
                                <div className='flex flex-row items-center justify-center w-[190px] xs:w-[260px] sm:w-auto px-[10px] py-[3px] h-auto bg-white shadow-sm border-[1.5px] border-[#e7e7e7] rounded-[20px] xs:rounded-[22px] sm:rounded-[13px] xl:rounded-[17px] hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out'>
                                   <img src={link_arrow} alt='link arrow' className='w-[23px] h-[23px] sm:w-[20px] sm:h-[20px] md:w-[16px] md:h-[16px] lg:w-[19px] lg:h-[19px] xl:w-[22px] xl:h-[22px] 2xl:w-[26px] 2xl:h-[26px]' />
                                   <span className='text-[20px] xs:text-[25px] sm:text-[15px] md:text-[16px] lg:text-[19px] xl:text-[24px] 2xl:text-[28px] font-Outfit text-black font-semibold ml-[5px]'>visit website</span>
                                 </div>
                              </a>
                            </div>
                        </div>
                    </div>
                </div>
                </>
        )
        }
        else
            {
            //this lets me show only relevant results when match count is only 1 in the results array
            if (results.every(r => r.matchedKeywords <= 1)) {
                return(
                    <>
                        <div className="flex flex-col items-start justify-center h-auto mt-[105px] md:mt-[40px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[65px] font-Outfit text-black font-semibold text-[15px] sm:text-[17px] md:text-[15px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] ml-[5px]">relevant results</div>
                        <div className="flex flex-col items-start justify-center h-auto ml-[5px] font-Outfit text-[#898989] font-semibold text-[15px] sm:text-[17px] md:text-[15px] lg:text-[17px] xl:text-[20px] 2xl:text-[24px] mb-[10px]">{similar_results_count} tools</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start justify-center w-auto mt-[10px] mr-[12px]">
                            {renderCards(data.filter(item => results.find(r => r.id === item.primary_key && r.matchedKeywords === 1)))}
                        </div>
                    </>
                )
                
            }

            //this lets me show relevant results and similar results when match count is greater than 1 in the results array
            else if (results.some(r=> r.matchedKeywords > 1)) {
                return (() => {
                    //this allows me to show only the keywords with highest match count
                    const max_match_count = Math.max(...results.map(r => r.matchedKeywords));
                    const highest_match_results = results.filter(r => r.matchedKeywords === max_match_count);
                    const relevant_results = data.filter(item => highest_match_results.some(r => r.id === item.primary_key));
                    
                    let similar_results;
                    if (max_match_count === 2) {
                        // If max match count is 2, show similar_results with exactly 1 match
                        similar_results = data.filter(item =>
                            results.some(r =>
                                r.id === item.primary_key && r.matchedKeywords === 1
                            )
                        );
                    } else {
                        // otherwise, show similar_results with more than 1 match_count and less than max match_count
                        similar_results = data.filter(item =>
                            results.some(r =>
                                r.id === item.primary_key && r.matchedKeywords < max_match_count && r.matchedKeywords > 1
                            )
                        );
                    }

                    const similar_results_count = similar_results.length;
                return (
                <>
                    <div className="flex flex-col items-start justify-center h-auto mt-[105px] md:mt-[40px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[65px] font-Outfit text-black font-semibold text-[15px] sm:text-[17px] md:text-[15px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] ml-[5px]">relevant results</div>
                    <div className="flex flex-col items-start justify-center h-auto ml-[5px] font-Outfit text-[#898989] font-semibold text-[15px] sm:text-[17px] md:text-[15px] lg:text-[17px] xl:text-[20px] 2xl:text-[24px] mb-[10px]">{relevant_results.length} tools</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start justify-center w-auto mt-[10px] mr-[12px]">
                        {renderCards(relevant_results)}
                    </div>

                    <div className="flex flex-row items-center justify-start h-auto mt-[20px] ml-[5px] cursor-pointer" onClick={handle_similar_results_click}>
                        <span className="font-Outfit text-black font-semibold text-[15px]text-[15px] sm:text-[17px] md:text-[15px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px]">similar results</span>
                        <img src={arrow_down} alt="arrow down" className="w-[15px] h-[15px] sm:w-[17px] sm:h-[17px] md:w-[19px] md:h-[19px] xl:w-[22px] xl:h-[22px] 2xl:w-[28px] 2xl:h-[28px] ml-[2px]" />
                    </div>
                    <div className="flex flex-col items-start justify-center h-auto ml-[5px] font-Outfit text-[#898989] font-semibold text-[15px]text-[15px] sm:text-[17px] md:text-[15px] lg:text-[17px] xl:text-[20px] 2xl:text-[24px] mb-[10px]">{similar_results_count} tools</div>
                    {click && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start justify-center w-auto mt-[10px] mr-[12px]">
                            {renderCards(data.filter(item => results.find(r => r.id === item.primary_key && r.matchedKeywords < max_match_count )))}
                        </div>
                    )}
                </>
                );
                })();
            }
        }
    }
}
