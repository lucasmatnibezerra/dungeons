import React, { useState, useEffect, useRef, useContext } from "react";
import Image from "next/image";
import Arrow from "../assets/White_arrow_down.svg.png";
import { ScrollContext } from "../utils/scroll-observer";

const Masthead: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      ref={refContainer}
      className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10"
      style={{ transform: `translateY(-${progress * 20}vh)` }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover  "
      >
        {" "}
        <source src="./background.m4v" type="video/mp4; codecs=hvc1" />
        <source src="./background.webm" type="video/webm; codecs=vp9" />
      </video>
      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.5)] text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-6 text-4xl xl:text-5xl font-breath ">
          O Último Príncipe
        </h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight ">
          <span className="italic">
            ❝Com o fim proclamado, o último dos príncipes, irá sobrescrever
            <br></br> as frágeis palavras escritas ao destino.❞
          </span>{" "}
          - Memórias de Ryuuji
        </h2>
      </div>
      <div className="flex-grow-0 pb-20 md:pb-10 transition-all duration-1000">
        <Image src={Arrow} width={36} height={20} alt="scroll down" />
      </div>
    </div>
  );
};

export default Masthead;
