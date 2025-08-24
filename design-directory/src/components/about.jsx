import Footer from './footer.jsx';
export default function About() {

    return (
        <>
            <div className="flex flex-col items-start justify-center w-auto h-auto bg-white ml-[12px] mr-[20px] pt-[20px] md:pt-0">
                <p className="text-[32px] md:text-[32px] lg:text-[34px] xl:text-[45px] 2xl:text-[50px] font-Outfit font-bold mb-[5px]">About Us</p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    Hi, I’m Atharv Remeshan, a designer and developer based in Mumbai, India. I created this website to help fellow designers find the best design resources available on the internet.
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    I started this directory because I know what it’s like to be an average designer with big ideas and limited resources. I spent hours searching for high-quality mockups, fonts, illustrations, icons, and color tools — most of them scattered, overpriced, or hard to find.
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    But over time, I discovered a world of free and underrated resources that helped me improve my work dramatically.
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    This site is my way of giving back — a curated collection of design tools, inspiration, and assets that are:
                </p>
                <ul className="list-disc ml-[30px] mb-2">
                    <li className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-[#525252]">Handpicked for Quality</li>
                    <li className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-[#525252]">Mostly free or freemium</li>
                    <li className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-[#525252]">Built to help you grow as a designer</li>
                </ul>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    Whether you're just starting out or already working on client projects, I hope these resources help you save time, learn faster, and create better work.
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    Thanks for being here,
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    ~ Atharv Remeshan
                </p>
            </div>
            <div className='ml-[12px]'>
                <Footer />
            </div>
        </>
    );
}