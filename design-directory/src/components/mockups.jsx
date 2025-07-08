import {Title, Meta} from "react-head";
function Mockups(){
    return (
        <>
            <Title>Mockups | Design Index</Title>
            <Meta name="description" content="A curated library of high-quality mockups to showcase your designs in real-world contexts"/>
            <Meta property="og:title" content="Mockups | Design Directory" />
            <Meta property="og:description" content="A curated library of high-quality mockups to showcase your designs in real-world contexts" />
            {/*<Meta property="og:image" content="https://yourdomain.com/og-image.jpg" />*/}
            <Meta property="og:type" content="website" />
            {/*<Meta property="og:url" content="https://yourdomain.com/design-inspirations" />*/}

            <Meta name="twitter:card" content="summary_large_image" />
            <Meta name="twitter:title" content="Mockups | Design Directory" />
            <Meta name="twitter:description" content="A curated library of high-quality mockups to showcase your designs in real-world contexts" />
            {/*<Meta name="twitter:image" content="https://yourdomain.com/og-image.jpg" />*/}

            <div className="flex flex-col items-start justify-center h-auto mt-[5px] p-[5px]">
                <span className="font-semibold text-[30px] font-Poppins ml-[12px]">mockups</span>
                <p className="text-[13px] font-Poppins font-medium ml-[12px] mr-[12px] text-wrap leading-4 text-justify">
                    A curated library of high-quality device and product mockups to showcase your designs in real-world contexts. 
                    From phones and laptops to packaging and apparel, this section offers versatile templates to 
                    help you present your work with professionalism, clarity, and impact.
                </p>
            </div>
        </>
    );

}

export default Mockups;