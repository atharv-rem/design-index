import { Title, Meta } from 'react-head';
import data from '../database.json';
import Footer from './footer.jsx';
import { useRef,useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useSearchParams } from 'react-router-dom';
import left_arrow from '../assets/ArrowLeft.png'
import share_icon from "../assets/share icon.png"
import link_arrow from "../assets/ArrowCircleUpRight.png"
import notion_face from "../assets/notion face.png"



function addRefParam(url, ref = "designindex") { //this adds "?ref=designindex" so that analytics can track the click from this website
  try {
    const u = new URL(url);
    u.searchParams.set("ref", ref);
    return u.toString();
  } catch (e) {
    return url; 
  }
}

function Colours() {
  const parentRef = useRef(null); // This ref will be used to get the scroll element for the virtualizer
  const [items,setItems] = useState(data.filter(item => item.category === 'colour')); // State to manage the selected pricing type
  const filter_data_according_to_pricing = (pricing_type) => {
    if(pricing_type === 'free')
      return setItems(data.filter(item => item.pricing === 'free' && item.category === 'colour'))
    else if(pricing_type === 'paid')
      return setItems(data.filter(item => item.pricing === 'paid' && item.category === 'colour'))
    else
      return setItems(data.filter(item => item.pricing === 'free,paid' && item.category === 'colour'))
  }
  const rowCount = Math.ceil(items.length / 2);// Calculate the number of rows needed, each row containing 2 items

  const rowVirtualizer = useVirtualizer({ // Initialize the virtualizer
    count: rowCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 150,
    overscan: 1,
  });

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
      <Title>Colours | Design Index</Title>
      <Meta name="description" content="Curated colour palettes, gradients and backgrounds to inspire consistent, visually appealing design." />
      <Meta property="og:title" content="Colours | Design Directory" />
      <Meta property="og:description" content="Curated colour palettes, gradients and backgrounds to inspire consistent, visually appealing design." />
      <Meta property="og:type" content="website" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Colours | Design Directory" />
      <Meta name="twitter:description" content="Curated colour palettes, gradients and backgrounds to inspire consistent, visually appealing design." />

      {!selectedItem ? // it checks if the url has tool parameter, since it is false here it displays the title along with the virtual list
      (
        <>
          {/* title section */}
          <div className="flex flex-col items-start justify-center h-auto mt-[40px] p-[5px]">
            <span className="font-semibold text-[32px] font-Outfit">colours</span>
            <p className="text-[15px] font-Outfit font-medium mr-[12px] leading-4 text-justify">
              A curated collection of colour palettes, hues, gradients and backgrounds to inspire and streamline your design process.
              From bold primaries to subtle pastels, this section offers a versatile range of colour resources to help you build consistent,
              visually appealing, and emotionally resonant design systems.
            </p>
          </div>

          {/*filters */}
          <div className='flex flex-row items-start justify-start h-auto w-auto mt-[10px] ml-[5px]'>
            <span className='font-Outfit text-[15px] text-[#575757] font-semibold'>Filter:</span>
            <span onClick={() => {filter_data_according_to_pricing('free')}} className='cursor-pointer flex h-auto py-[2px] px-0 w-[40px] items-center justify-center font-Poppins font-semibold text-[11px] text-[#20851c] bg-[#d9ffd7] ml-[10px] rounded-[8px]'>free</span>
            <span onClick={() => {filter_data_according_to_pricing('paid')}} className='cursor-pointer flex w-[40px] h-auto py-[2px] items-center justify-center font-Poppins font-semibold text-[11px] text-[#ab2a2a] bg-[#ffe5e5] ml-[10px] rounded-[8px]'>paid</span>
            <span onClick={() => {filter_data_according_to_pricing('freepaid')}} className='cursor-pointer flex w-[70px] h-auto py-[2px] items-center justify-center font-Poppins font-semibold text-[11px] bg-[#f7d9ff] text-[#D22BEC] ml-[10px] rounded-[8px]'>free, paid</span>
          </div>

        {items.length === 0 ? // this is the virtual grid that displays the items, if there are no items based on the filter it shows a message
          (
            <div className="flex flex-col items-center justify-center h-screen">
              <span className="text-[20px] font-Outfit font-semibold text-black">No tools match this filter</span>
              <span className="text-[16px] font-Outfit font-medium text-gray-600 mt-2">Try using the other filters</span>
            </div>
          )
          :
          (
            <div ref={parentRef} className="h-[80vh] overflow-auto mt-[10px] mr-[12px] relative hide-scrollbar">
              <div
                style={{
                  height: `${rowVirtualizer.getTotalSize()}px`,
                  position: 'relative',
                }}
              >
                {rowVirtualizer.getVirtualItems().map(virtualRow => {
                  const firstItem = items[virtualRow.index * 2];
                  const secondItem = items[virtualRow.index * 2 + 1];

                  if (!firstItem && !secondItem) return null;

                  return (
                    <div
                      key={virtualRow.key}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        transform: `translateY(${virtualRow.start}px)`,
                        height: '140px'
                      }}
                    >
                      <div className="grid grid-cols-2 gap-[20px] w-full px-2 pt-[5px]">
                        {[firstItem, secondItem].map((item, i) =>
                          item ? (
                              <div
                                className="bg-white p-[6px] rounded-[15px] border-[1px] border-[#e1e1e1] flex flex-row items-start hover:shadow-sm hover:translate-y-[-2px] transition-all duration-200 ease-in-out"
                                onClick={(e) => {
                                  e.preventDefault();
                                  open_new_tool_window(item.tool_name);
                                }}
                              >
                                <img
                                  alt={item.description.toLowerCase()}
                                  src={item.og_image_link}
                                  loading="lazy"
                                  className="h-[120px] w-[220px] rounded-[9px] flex-shrink-0 overflow-hidden"
                                />
                                <div className='flex flex-col justify-center ml-[15px] w-auto mt-[10px]'>
                                  <div className="text-[14px] text-black font-Outfit font-bold p-0 leading-4">{item.tool_name}</div>

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

                                  <p className="text-[12px] font-Outfit font-semibold text-[#595959] leading-tight justify-evenly mr-[5px]">
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
            </div>
          )
        }
          <Footer />
        </>
      ) 
      : // If an item is selected, tool parameter gets embedded in the url and shows the details of that item
      (
        <>
        {/*this is the extended description that opens on a new section*/}
          <div className='flex flex-col items-start justify-center h-auto mt-[57px] p-[5px] w-auto'>
            <div onClick={() => open_new_tool_window(null)} className='flex flex-row items-center justify-start cursor-pointer opacity-70 hover:opacity-100 hover:translate-x-[-2px] transition-all duration-200 ease-in-out'>
              <img src={left_arrow} alt='back arrow' className='w-[20px] h-[20px]' />
              <span className='font-Outfit text-[18px] font-medium text-[black] ml-[5px]'>back</span>
            </div>

            <div className='flex flex-row items-start justify-start mt-[10px]'>
              <img src={selectedItem.og_image_link} alt="og image" className='h-[180px] w-[320px] rounded-[10px]'/>
              <div className='flex flex-col items-start justify-start ml-[20px]'>
                <div className='flex flex-row items-center justify-start'>
                  <div onClick={handleCopyLink} 
                    className='items-center justify-center w-[140px] h-auto p-[2px] border-[1.5px] border-[#e3e3e3] rounded-[20px] flex flex-row opacity-70 hover:opacity-100 hover:cursor-pointer hover:translate-y-[-2px] transition-all duration-200 ease-in-out'>
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
                  {selectedItem.extended_description.toLowerCase()}
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )
      }
      
    </>
  );
}

export default Colours;
