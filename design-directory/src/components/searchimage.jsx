import searchimage from '../assets/search illustration.avif';
import Zustand_global_storage from '../zustand-global-storage';

export default function Searchimage() {
  const loading = Zustand_global_storage(state => state.loading);

  return (
    <>
      {!loading && (
        <div className="flex flex-col items-center justify-center w-full md:w-[75vw] h-screen bg-white">
          <img
            src={searchimage}
            alt="search illustration"
            className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] xl:w-[400px] xl:h-[400px] 2xl:w-[450px] 2xl:h-[450px] mt-[200px] grayscale"
          />
        </div>
      )}
    </>
  );
}
