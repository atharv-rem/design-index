import {Title,Meta} from "react-head";
function Icons(){
    return (
        <>
            <Title>Icons | Design Index</Title>
            <Meta name="description" content="A diverse collection of icon libraries to help you convey ideas clearly and improve user experience with visual precision."/>
            <Meta property="og:title" content="Icons | Design Directory" />
            <Meta property="og:description" content="A diverse collection of icon libraries to help you convey ideas clearly and improve user experience with visual precision." />
            {/*<Meta property="og:image" content="https://yourdomain.com/og-image.jpg" />*/}
            <Meta property="og:type" content="website" />
            {/*<Meta property="og:url" content="https://yourdomain.com/design-inspirations" />*/}

            <Meta name="twitter:card" content="summary_large_image" />
            <Meta name="twitter:title" content="Icons | Design Directory" />
            <Meta name="twitter:description" content="A diverse collection of icon libraries to help you convey ideas clearly and improve user experience with visual precision." />
            {/*<Meta name="twitter:image" content="https://yourdomain.com/og-image.jpg" />*/}

            <div className="flex flex-col items-start justify-center h-auto mt-[5px] p-[5px]">
                <span className="font-semibold text-[30px] font-Poppins ml-[12px]">icons</span>
                <p className="text-[13px] font-Poppins font-medium ml-[12px] mr-[12px] text-wrap leading-4 text-justify">
                    A versatile collection of icon libraries covering diverse styles, categories, and use cases. 
                    Whether you need minimal line icons, bold glyphs, playful or animated icons, 
                    this section helps you communicate ideas clearly and enhance user interaction with visual clarity.
                </p>
            </div>
        </>
    );

}

export default Icons;