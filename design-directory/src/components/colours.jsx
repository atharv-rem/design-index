import { Title, Meta } from 'react-head';
function Colours(){

    return (
        <>
            <Title>Colours | Design Directory</Title>
            
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

            <div className="flex flex-col items-start justify-center h-auto mt-[5px] p-[5px]">
                <span className="font-bold text-[30px] font- ml-[12px]">colours</span>
                <p className="text-[16px] font-Afacad font-medium ml-[12px] mr-[12px] text-wrap leading-4 text-justify">
                    A curated collection of colour palettes, hues, gradients and backgrounds to inspire and streamline your design process. 
                    From bold primaries to subtle pastels, this section offers a versatile range of colour resources to help you build consistent, 
                    visually appealing, and emotionally resonant design systems.
                </p>
            </div>
        </>
    );

}

export default Colours;