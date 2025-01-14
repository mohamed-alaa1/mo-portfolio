import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { style } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      <div
        className={`${style.paddingX} absolute inset-0 top-[120px] mx-auto flex max-w-7xl items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-identity" />
          <div className="blue-gradient h-40 w-1 sm:h-80" />
        </div>

        <div className="flex flex-col items-start">
          <h1 className={`${style.heroHeadText}`}>
            Hi, I&apos;m <span className="text-identity">Mohamed</span>{" "}
          </h1>
          <p className={`${style.heroSubText} mt-2 text-white-100`}>
            I&apos;m{" "}
            <span className="font-bold text-identity">
              <Typewriter
                words={[
                  "Java Developer",
                  " Database Expert",
                  "Backend Developer",
                ]}
                loop
                cursor
                cursorBlinking
                cursorColor="#f04e5e"
              />
            </span>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute bottom-32 flex w-full items-center justify-center xs:bottom-10">
        <a href="#about">
          <div className="flex h-[64px] w-[35px] justify-center rounded-3xl border-4 border-white/[.6]">
            <motion.div
              animate={{ y: [0, 35, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mt-1 h-[14px] w-[14px] rounded-full bg-white/[.7]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
