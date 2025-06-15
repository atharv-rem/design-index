import { Title, Meta } from "react-head";

function Design_inspo(){
    return (
        <>
            <Title>Design inpirations | Design Directory</Title>
            
            <Meta name="description" content="A curated gallery of visual inspiration spanning web, mobile, print, and branding design." />
            <Meta property="og:title" content="Design Inspirations | Design Directory" />
            <Meta property="og:description" content="A curated gallery of visual inspiration spanning web, mobile, print, and branding design." />
            {/*<Meta property="og:image" content="https://yourdomain.com/og-image.jpg" />*/}
            <Meta property="og:type" content="website" />
            {/*<Meta property="og:url" content="https://yourdomain.com/design-inspirations" />*/}
            
            <Meta name="twitter:card" content="summary_large_image" />
            <Meta name="twitter:title" content="Design Inspirations | Design Directory" />
            <Meta name="twitter:description" content="A curated gallery of visual inspiration spanning web, mobile, print, and branding design." />
            {/*<Meta name="twitter:image" content="https://yourdomain.com/og-image.jpg" />*/}

            <div className="flex flex-col items-start justify-center h-auto mt-[5px] p-[5px]">
                <span className="font-bold text-[30px] font- ml-[12px]">design inspiration</span>
                <p className="text-[16px] font-Afacad font-medium ml-[12px] mr-[12px] text-wrap leading-4 text-justify">
                    A thoughtfully assembled gallery of visual inspiration across web, mobile, print, and branding. 
                    Discover cutting-edge layouts, creative UI patterns, and standout visuals to spark 
                    ideas, refine your style, and fuel your creative momentum.
                </p>
            </div>
        </>
    );

}

export default Design_inspo;