import { Title, Meta } from 'react-head';
function Font(){
    return (
        <>
            <Title>Fonts | Design Directory</Title>
            
            <Meta name="description" content="A curated selection of font libraries to enhance your typography with style, clarity, and brand identity."/>
            <Meta property="og:title" content="Fonts | Design Directory" />
            <Meta property="og:description" content="A curated selection of font libraries to enhance your typography with style, clarity, and brand identity." />
            {/*<Meta property="og:image" content="https://yourdomain.com/og-image.jpg" />*/}
            <Meta property="og:type" content="website" />
            {/*<Meta property="og:url" content="https://yourdomain.com/design-inspirations" />*/}

            <Meta name="twitter:card" content="summary_large_image" />
            <Meta name="twitter:title" content="Fonts | Design Directory" />
            <Meta name="twitter:description" content="A curated selection of fonts to enhance your typography with style, clarity, and brand identity." />
            {/*<Meta name="twitter:image" content="https://yourdomain.com/og-image.jpg" />*/}
            
            <div className="flex flex-col items-start justify-center h-auto mt-[5px] p-[5px]">
                <span className="font-bold text-[30px] font- ml-[12px]">font</span>
                <p className="text-[16px] font-Afacad font-medium ml-[12px] mr-[12px] text-wrap leading-4 text-justify">
                    A handpicked selection of font libraries to bring personality and clarity to your typography. 
                    Whether you're looking for elegant serifs, modern sans-serifs, or expressive display fonts, 
                    this section helps you find the perfect typeface to elevate your design language and reinforce brand identity.
                </p>
            </div>
        </>
    );

}

export default Font;