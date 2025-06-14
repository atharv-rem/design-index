import search from "../assets/search-icon.svg";
function SearchBar() {
  return (
    <div className="flex flex-row items-center justify-center w-full h-[40px] bg-white border-[2px] border-[#F6F6F6] rounded-[10px] z-3">
      <img src={search} alt="search icon" className="w-[22px] h-[22px] ml-2" />  
      <input type="text" placeholder="Search from 200+ tools" className="p-[2px] font-Afacad text-bold font-black text-[20px] placeholder:font-Afacad placeholder:text-black placeholder:font-bold placeholder:text-[20px] w-full ml-2 mr-2 outline-none" />
    </div>
  );
}

export default SearchBar;