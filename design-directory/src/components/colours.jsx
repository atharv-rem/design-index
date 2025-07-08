import { Title, Meta } from 'react-head';
import data from '../database.json'
import Footer from './footer.jsx';
function Colours(){
    return (
        <>
            <Title>Colours | Design Index</Title>
            
            <Meta name="description" content="Curated colour palettes, gradients and backgrounds to inspire consistent, visually appealing design."/>
            <Meta property="og:title" content="Colours | Design Directory" />
            <Meta property="og:description" content="Curated colour palettes, gradients and backgrounds to inspire consistent, visually appealing design." />
            {/*<Meta property="og:image" content="https://yourdomain.com/og-image.jpg" />*/}
            <Meta property="og:type" content="website" />
            {/*<Meta property="og:url" content="https://yourdomain.com/design-inspirations" />*/}

            <Meta name="twitter:card" content="summary_large_image" />
            <Meta name="twitter:title" content="Colours | Design Directory" />
            <Meta name="twitter:description" content="Curated colour palettes, gradients and backgrounds to inspire consistent, visually appealing design." />
            {/*<Meta name="twitter:image" content="https://yourdomain.com/og-image.jpg" />*/}

            {/*title block */}
            <div className="flex flex-col items-start justify-center h-auto mt-[40px] p-[5px]">
                <span className="font-semibold text-[32px] font-Outfit">colours</span>
                <p className="text-[15px] font-Outfit font-medium mr-[12px] text-wrap leading-4 text-justify">
                    A curated collection of colour palettes, hues, gradients and backgrounds to inspire and streamline your design process. 
                    From bold primaries to subtle pastels, this section offers a versatile range of colour resources to help you build consistent, 
                    visually appealing, and emotionally resonant design systems.
                </p>
            </div>
            
            {/*colours grid*/}
            <div className="grid grid-cols-2 gap-5 items-start justify-center w-auto mt-[10px] mr-[12px]">
                {data
                .filter(item => item.category === 'colour')
                .map((item, index) => (
                <a lang='en' href={item.website} target="_blank" rel="noopener noreferrer" className="no-underline" key={index}>    
                    <div key={index} className="bg-white p-[6px] rounded-[15px] border-[1px] border-[#e1e1e1] flex flex-row items-start justify-left hover:shadow-sm hover:translate-y-[-2px] transition-all duration-200 ease-in-out">
                        <img alt={item.description.toLowerCase()} src={item.og_image_link} className="h-[120px] w-[220px] rounded-[9px] flex-shrink-0 overflow-hidden"/>
                        <div className='flex flex-col justify-center ml-[15px] w-auto mt-[10px]'>
                            <div className="text-[14px] text-black font-Outfit font-bold p-0 leading-4 ">{item.tool_name}</div>
                            {item.pricing.length > 5 ? (
                                <div className='flex flex-row items-center justify-start'>
                                    <div className="font-Poppins font-semibold flex text-[11px] py-[2px] px-0 text-[#20851c] bg-[#d9ffd7] w-[40px] h-[20px] justify-center items-center rounded-[8px] mt-[3px] mb-[3px]">free</div>
                                    <div className="flex font-Poppins font-semibold text-[11px] pt-[5px] pb-[5px] text-[#ab2a2a] bg-[#ffe5e5] w-[40px] h-[20px] justify-center items-center rounded-[8px] mt-[3px] mb-[3px] ml-[5px]">paid</div>
                                </div>
                            ) : null}
                            {item.pricing === 'free' ? (
                                <div className="font-Poppins font-semibold flex text-[11px] py-[2px] px-0 text-[#20851c] bg-[#d9ffd7] w-[40px] h-[20px] justify-center items-center rounded-[8px] mt-[3px] mb-[3px]">free</div>
                            ) :null }
                            {item.pricing === 'paid' ? (
                                <div className="flex font-Poppins font-semibold text-[11px] pt-[5px] pb-[5px] text-[#ab2a2a] bg-[#ffe5e5] w-[40px] h-[20px] justify-center items-center rounded-[8px] mt-[3px] mb-[3px]">paid</div>
                            ) : null}
                            <p className="text-[12px] font-Outfit font-semibold text-[#595959] leading-tight justify-evenly mr-[5px]">{item.description.toLowerCase()}</p>
                        </div>
                    </div>
                </a>
                ))}
            </div>

            <Footer />

        </>
    );

}

export default Colours;