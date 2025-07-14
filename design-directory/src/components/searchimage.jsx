import searchimage from '../assets/a man on a computer.avif';
export default function Searchimage() {
    return(
        <div className="flex flex-col items-center justify-center w-auto h-auto bg-white">
            <img src={searchimage} alt="search illustration" className="w-[250px] h-[250px] mt-[200px] mr-[50px] grayscale" />
        </div>
    )
}