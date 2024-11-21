"use client";
import LandingFooter from "@/components/layout/landingfooter";
import {
  Image,
} from "@nextui-org/react";
import Button from "@/components/button/default";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import Typewriter from "react-text-writer";
import { useEffect, useState } from "react";

export default function () {

  const { scrollYProgress } = useScroll();
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <div className="flex flex-col bg-[#1E1B4B] min-h-screen">
          <motion.div
            className="z-20 h-1 progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
          <div className="flex flex-col bg-gradient-to-bl from-[#1E1B4B] from-20% via-[#2a2b69] via-30% to-[#1E1B4B] to-50%">
            <div className="relative flex justify-center items-center mx-auto px-4 md:px-10 pt-8 md:pt-20 container">
              <motion.div
                className="relative z-10 flex justify-between items-center bg-[#4338CA] px-4 py-2 rounded-2xl text-white"
                initial={{ width: 350 }}
                animate={{ width: "100%" }}
              >
                <h3 className="font-semibold text-2xl sm:text-3xl">JivusScribe</h3>
                <Link href="/transcription" className="">
                  <Button>Transcribe now</Button>
                </Link>
              </motion.div>
            </div>
            <div className="z-10 flex flex-col flex-1 justify-center items-center py-20 xl:py-36 2xl:py-48">
              <div className="flex flex-col mx-auto">
                <h1 className="text-4xl text-center text-white md:text-5xl lg:text-7xl 2xl:text-8xl">
                  {" "}
                  <b>Audio Transcription.</b><br/>Powered by AI.{" "}
                </h1>
                <Typewriter
                  text={[
                    "Transcribe audio & video to text with 99% accuracy. ‍Available in 100+ languages and free of charge.",
                    "Transcribe audio & video to text with 99% accuracy. ‍Available in 100+ languages and free of charge.",
                  ]}
                  speed={20}
                  loopDelay={10000}
                  textClassName="text-white text-center mt-8 text-xl"
                />
              </div>

              <div className="flex justify-center items-center bg-gradient-to-b from-[#210CFF] from-50% to-50% to-white shadow-[#210CFF] shadow-lg mx-auto mt-12 lg:mt-20 p-px rounded-xl">
                <Link href="/transcription" className="">
                  <Button className="flex gap-2 scale-99">
                    Transcribe now
                    <Image src="/assets/ico/ico_arrow.svg" alt="arrow" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <LandingFooter />
        </div>
      )}
    </>
  );
}
