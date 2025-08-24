import Zustand_global_storage from '../zustand-global-storage';

export default function Searchimage() {
  const loading = Zustand_global_storage(state => state.loading);

  return (
    <>
      {!loading && (
        <div className="flex flex-col items-center justify-center w-auto md:w-[75vw] h-screen bg-white">
          <div className='items-start'>
            <p className="text-2xl text-black font-Outfit font-semibold">
              Suggestions
            </p>
            <ul className="list-disc pl-6 mt-2 flex flex-col items-start justify-center w-auto">
                <li className="text-lg text-black font-Outfit font-medium">
                  "dark mode portfolio"
                </li>
                <li className="text-lg text-black font-Outfit font-medium">
                  "minimalist website design"
                </li>
                <li className="text-lg text-black font-Outfit font-medium">
                  "an icon library of 3d icons"
                </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
