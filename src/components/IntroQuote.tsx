import React from "react";
import { Globe } from "@/components/ui/Globe";

const IntroQuote = () => {
  return (
    <section className="relative w-full min-h-screen py-20 bg-gradient-to-br from-pulse-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="max-w-4xl mx-auto text-center">
          {/* Chip */}
          {/* <div className="pulse-chip mb-6 inline-flex mt-[-70px]">
  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
    03
  </span>
  <span>Introduction</span>
</div> */}


          {/* Floating Quote */}
          <blockquote
  className="fixed top-0 left-1/2 -translate-x-1/2 z-[9999] 
  text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
  font-semibold text-gray-900 dark:text-white leading-snug
  px-3 sm:px-4 lg:px-6 text-center "
>
  <span className="text-pulse-500">"</span>
  There is a vast amount of AI tools hidden in the
  <span className="text-pulse-500"> OCEAN </span>
  of the internet which is one search
  
  (<span className="text-pulse-500"> DIVE </span>) ahead.
  <span className="text-pulse-500">"</span>
</blockquote>





          {/* <div className="mt-8 w-20 h-1 bg-pulse-500 mx-auto rounded-full"></div> */}
        </div>

        {/* Globe */}
        <Globe className="mt-16" />
      </div>
    </section>
  );
};

export default IntroQuote;
