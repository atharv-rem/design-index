import { Title, Meta } from 'react-head';
import data from '../database.json';
import Footer from './footer.jsx';
import { useRef,useState,useEffect,useMemo } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useSearchParams } from 'react-router-dom';
import left_arrow from '../assets/ArrowLeft.png'
import share_icon from "../assets/share.svg"
import link_arrow from "../assets/link.svg"

function addRefParam(url, ref = "designindex") { //this adds "?ref=designindex" so that analytics can track the click from this website
  try {
    const u = new URL(url);
    u.searchParams.set("ref", ref);
    return u.toString();
  } catch (e) {
    return url; 
  }
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

function Design_inspo() {
  const parentRef = useRef(null); // This ref will be used to get the scroll element for the virtualizer

  const [items,setItems] = useState(data.filter(item => item.category === 'design_inspiration')); // State to manage the selected pricing type
  const filter_data_according_to_pricing = (pricing_type) => {
    if(pricing_type === 'free')
      return setItems(data.filter(item => item.pricing === 'free' && item.category === 'design_inspiration'))
    else if(pricing_type === 'paid')
      return setItems(data.filter(item => item.pricing === 'paid' && item.category === 'design_inspiration'))
    else
      return setItems(data.filter(item => item.pricing === 'free,paid' && item.category === 'design_inspiration'))
  }

  // Calculate the number of columns based on the window width
  const width = useWindowWidth();
  let columnsPerRow = 2;
  if (width > 1920) {
    columnsPerRow = 2; // 2xl and up
  } else if (width > 1536) {
    columnsPerRow = 2; // xl and up
  } else if (width > 800) {
    columnsPerRow = 2; // sm and up
  } else {
    columnsPerRow = 1; // mobile
  }
  const rowCount = Math.ceil(items.length / columnsPerRow);

  // Calculate the row height based on the window width
  const rowHeight = useMemo(() => {
  if (width >= 1920) return 220+15; // 2xl and up
  if (width >= 1536) return 180+15;// xl and up
  if (width >= 1280) return 160+15;// lg and up
  if (width >= 1024) return 145+15;// md and up
  if (width >= 800)  return 140;// sm and up
  if (width >= 0)  return 140;// mobile
  }, [width]);
  

  const rowVirtualizer = useVirtualizer({ // Initialize the virtualizer
    count: rowCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => rowHeight,
    overscan: 1,
  });

  useEffect(() => {
    rowVirtualizer.measure();
  }, [rowHeight]);



  const [searchParams, setSearchParams] = useSearchParams();// Get the current search parameters from the URL
  const selectedToolName = searchParams.get("tool");// Get the selected tool name from the search parameters
  const selectedItem = items.find(item => item.tool_name === selectedToolName);// Find the item that matches the selected tool name

  const open_new_tool_window = (toolname) => {
    if (toolname === null) {
      setSearchParams({});
    } else {
      setSearchParams({ tool: toolname });
    }
  };

  const [copied, setCopied] = useState(false);
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Title>Design Inspiration | Design Index</Title>
      <Meta name="description" content="gallery of visual inspiration spanning web, mobile, print, and branding design" />
      <Meta property="og:title" content="Design Inspiration | Design Directory" />
      <Meta property="og:description" content="gallery of visual inspiration spanning web, mobile, print, and branding design" />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" content="https://designindex.xyz/preview.avif" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Design Inspiration | Design Directory" />
      <Meta name="twitter:description" content="gallery of visual inspiration spanning web, mobile, print, and branding design" />
      <Meta name="twitter:image" content="https://designindex.xyz/twitter_preview.avif" />

      {!selectedItem ? // it checks if the url has tool parameter, since it is false here it displays the title along with the virtual list
      (
        <>
          {/* title section */}
          <div className="flex flex-col items-start justify-center h-auto w-full sm:w-auto p-[5px]">
            <span className="font-semibold text-[32px] md:text-[32px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] font-Outfit">Design Inspiration</span>
            <p className=" hidden sm:block text-[15px] md:text-[15px] lg:text-[17px] xl:text-[20px] 2xl:text-[25px] font-Outfit font-medium mr-[12px] leading-4 md:leading-4 lg:leading-5 xl:leading-6 2xl:leading-7 text-justify">
              Thoughtfully assembled gallery of visual inspiration across web, mobile, print, and branding. 
              Discover cutting-edge layouts, creative UI patterns, and standout visuals to spark 
              ideas, refine your style, and fuel your creative momentum.
            </p>
            <p className="text-[15px] font-Outfit font-medium mr-[12px] leading-4 block sm:hidden">
              A curated gallery of visual inspiration across web, mobile, print, and branding.
              Explore standout layouts, creative UI patterns, and bold visuals to spark ideas and fuel your creativity.
            </p>
          </div>

          {/*filters */}
          <div className='flex flex-row items-start justify-start h-auto w-auto mt-[10px] ml-[5px]'>
            <span className='font-Outfit text-[20px] md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[23px] text-[#575757] font-semibold'>Filter:</span>
            <span onClick={() => {filter_data_according_to_pricing('free')}} className='cursor-pointer flex h-auto w-auto py-[3px] px-[8px] lg:px-[10px] items-center justify-center font-Poppins font-bold text-[15px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] text-[#20851c] bg-[#d9ffd7] ml-[10px] rounded-[10px]'>free</span>
            <span onClick={() => {filter_data_according_to_pricing('paid')}} className='cursor-pointer flex w-auto px-[8px] lg:px-[10px] h-auto py-[3px] items-center justify-center font-Poppins font-bold text-[15px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] text-[#ab2a2a] bg-[#ffe5e5] ml-[10px] rounded-[10px]'>paid</span>
            <span onClick={() => {filter_data_according_to_pricing('freepaid')}} className='cursor-pointer flex w-auto px-[8px]  lg:px-[10px] h-auto py-[3px] items-center justify-center font-Poppins font-bold text-[15px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] bg-[#f7d9ff] text-[#D22BEC] ml-[10px] rounded-[10px]'>free, paid</span>
          </div>

          {items.length === 0 ? // this is the virtual grid that displays the items, if there are no items based on the filter it shows a message
            (
              <div className="flex flex-col items-center justify-center h-1/2 w-full">
                <span className=" text-[20px] xs:text-[22px] sm:text-[23px] md:text-[24px] xl:text-[28px] 2xl:text-[32px] font-Outfit font-semibold text-black">No tools match this filter</span>
                <span className=" text-[15px] xs:text-[16px]sm:text-[19px] md:text-[20px] xl:text-[24px] 2xl:text-[28px] font-Outfit font-medium text-gray-600 mt-2">Try using the other filters</span>
              </div>
            )
            :
            (
              <div ref={parentRef} className="h-[80vh] overflow-auto mt-[10px] pb-[100px] xl:pb-[150px] md:mr-[12px] relative hide-scrollbar">
                <div style={{height: `${rowVirtualizer.getTotalSize()}px`,position: 'relative'}}>
                  {rowVirtualizer.getVirtualItems().map(virtualRow => {
                    const rowItems = Array.from({ length: columnsPerRow }, (_, i) => items[virtualRow.index * columnsPerRow + i]);

                    if (rowItems.every(item => !item)) return null;
                    const gridColsClass = {1: 'grid-cols-1', 2: 'grid-cols-2', 3: 'grid-cols-3'}[columnsPerRow];

                    return (
                      <div key={virtualRow.key} style={{position: 'absolute',top: 0, left: 0, width: '100%', transform: `translateY(${virtualRow.start}px)`, height: `${rowHeight}px`}}>
                      <div className={`grid ${gridColsClass} gap-[15px] mt-[2px] w-full `}>
                          {rowItems.map((item)=>
                            item ? (
                                <div
                                  className="bg-white rounded-[15px] lg:rounded-[20px] xl:rounded-[24px] justify-start items-center border-[1px] border-[#e1e1e1] flex flex-row hover:shadow-sm hover:translate-y-[-2px] transition-all duration-200 ease-in-out cursor-pointer"
                                  style={{ height: `${rowHeight-15}px`, width: '100%' }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    open_new_tool_window(item.tool_name);
                                  }}
                                >
                                  <img
                                    alt={item.description.toLowerCase()}
                                    src={item.og_image_link}
                                    className="h-[110px] w-[190px] sm:h-[110px] sm:w-[200px] md:h-[130px] md:w-[240px] lg:h-[140px] lg:w-[240px] xl:w-[300px] xl:h-[160px] 2xl:w-[350px] 2xl:h-[195px] rounded-[10px] sm:rounded-[10px] md:rounded-[14px] lg:rounded-[14px] xl:rounded-[18px] flex-shrink-0 overflow-hidden ml-[7px] md:ml-[7px] lg:ml-[8px] xl:ml-[8px] 2xl:ml-[12px] mt-[5px] mb-[5px]"
                                  />
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
                            ) 
                            :
                            null
                          )}
                        </div>
                        
                      </div>
                    );
                  })}
                </div>
                <Footer />
              </div>
            )
          }

        </>
      ) 
      : // If an item is selected, tool parameter gets embedded in the url and shows the details of that item
      (
        <>
        {/*this is the extended description that opens on a new section*/}
          <div className='flex flex-col items-start justify-center h-auto mt-[100px] md:mt-[57px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[80px] p-[5px] w-auto'>

            <div onClick={() => open_new_tool_window(null)} className='flex flex-row items-center justify-start cursor-pointer opacity-70 hover:opacity-100 hover:translate-x-[-2px] transition-all duration-200 ease-in-out'>
              <img src={left_arrow} alt='back arrow' className='w-[20px] h-[20px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px] xl:w-[30px] xl:h-[30px] 2xl:w-[35px] 2xl:h-[35px]' />
              <span className='font-Outfit text-[18px] md:text-[18px] lg:text-[20px] xl:text-[25px] 2xl:text-[30px] font-medium text-[black] ml-[5px]'>back</span>
            </div>

            <div className='flex flex-col sm:flex-row items-start justify-start mt-[10px]'>
              <img src={selectedItem.og_image_link} alt="og image" className=' h-auto w-full sm:h-[180px] sm:w-[320px] md:h-[180px] md:w-[340px] lg:h-[200px] lg:w-[360px] xl:h-[240px] xl:w-[440px] 2xl:h-[280px] 2xl:w-[520px] rounded-[20px] md:rounded-[20px] lg:rounded-[25px] xl:rounded-[30px] 2xl:rounded-[40px]'/>
              <div className='flex flex-col items-start justify-start ml-0 sm:ml-[20px]'>
                <span className='font-semibold text-[25px] md:text-[25px] lg:text-[30px] xl:text-[35px] 2xl:text-[40px] font-Outfit mt-[5px] '>{selectedItem.tool_name}</span>
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
                <p className=' text-[20px] sm:text-[15px] md:text-[15px] lg:text-[18px] xl:text-[23px] 2xl:text-[26px] font-Outfit font-medium sm:mr-[12px] mt-[5px] xl:mt-[10px] leading-[23px] sm:leading-[15px] lg:leading-5 xl:leading-6 2xl:leading-7 text-justify'>
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
      
    </>
  );
}

export default Design_inspo;
