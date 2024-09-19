"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import Link from "next/link";


function Hero() {
  return (
    <>
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Share your coding journey, collaborate with others, and gain insights {" "}
          <Highlight className="text-black dark:text-white">
            from fellow developers.
          </Highlight> <br />
          {/* <button className="bg-transparent mt-4 text-2xl hover:bg-[#B0B4FD] text-black font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            start sharing
          </button> */}
          <Link href={"/share"}>
            <button className="bg-transparent border text-2xl hover:bg-[#BFB4FD] text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <svg className="w-8 h-8 mr-2" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#f0eaea" viewBox="0 0 24.00 24.00"><path d="M9.61109 12.4L10.8183 18.5355C11.0462 19.6939 12.6026 19.9244 13.1565 18.8818L19.0211 7.84263C19.248 7.41555 19.2006 6.94354 18.9737 6.58417M9.61109 12.4L5.22642 8.15534C4.41653 7.37131 4.97155 6 6.09877 6H17.9135C18.3758 6 18.7568 6.24061 18.9737 6.58417M9.61109 12.4L18.9737 6.58417M19.0555 6.53333L18.9737 6.58417" stroke="#000000" stroke-width="0.24000000000000005" /></svg>
              <span>Start Sharing</span>
            </button>
          </Link>
        </motion.h1>
      </HeroHighlight>
    </>
  );
}

export default Hero