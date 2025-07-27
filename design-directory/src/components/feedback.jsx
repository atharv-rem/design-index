import { useState } from "react";

export default function SubmitATool() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative flex items-center justify-center h-[calc(100vh-70px)] w-full mt-[70px] md:mt-[40px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px] p-[5px]">
      
      {/* Loader inside the iframe area */}
      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white z-4">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      )}

      <iframe
        className="w-full h-full relative z-0"
        src="https://formshare.ai/s/sp6p8Ln0u2"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  );
}
