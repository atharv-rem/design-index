import {Title, Meta} from "react-head";
function Illustration(){
    return (
        <>
            <Title>Illustrations | Design Index</Title>
            <Meta name="description" content="A curated collection of illustrations—from clean flats to intricate artworks—designed to add depth, emotion, and storytelling to your projects."/>
            <Meta property="og:title" content="Illustrations | Design Directory" />
            <Meta property="og:description" content="A curated collection of illustrations—from clean flats to intricate artworks—designed to add depth, emotion, and storytelling to your projects." />
            {/*<Meta property="og:image" content="https://yourdomain.com/og-image.jpg" />*/}
            <Meta property="og:type" content="website" />
            {/*<Meta property="og:url" content="https://yourdomain.com/design-inspirations" />*/}

            <Meta name="twitter:card" content="summary_large_image" />
            <Meta name="twitter:title" content="Illustrations | Design Directory" />
            <Meta name="twitter:description" content="A curated collection of illustrations—from clean flats to intricate artworks—designed to add depth, emotion, and storytelling to your projects." />
            {/*<Meta name="twitter:image" content="https://yourdomain.com/og-image.jpg" />*/}

            <div className="flex flex-col items-start justify-center h-auto mt-[5px] p-[5px]">
                <span className="font-semibold text-[30px] font-Poppins ml-[12px]">illustrations</span>
                <p className="text-[13px] font-Poppins font-medium ml-[12px] mr-[12px] text-wrap leading-4 text-justify">
                    A rich archive of illustrations ranging from minimal flat styles to detailed artworks. 
                    Use these visual assets to add depth, storytelling, and emotional warmth to your projects,
                    making them more engaging, memorable, and human-centered.
                </p>
            </div>
    </>
    );

}

export default Illustration;