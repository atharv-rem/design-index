import searchimage from '../assets/a man on a computer.avif';
export default function Searchimage() {
    return(
        <div className="flex flex-col items-center justify-center w-full md:w-[80vw] h-screen bg-white">
            <img src={searchimage} alt="search illustration" className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] xl:w-[400px] xl:h-[400px] 2xl:w-[450px] 2xl:h-[450px] mt-[200px] grayscale" />
        </div>
    )
}