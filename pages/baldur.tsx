import React, { useEffect, useRef, useContext, useState } from "react";
import Image from "next/image";
import header from "/public/HeaderDivider.png";
import graves from "/public/Graves.jpg";
import BaldurHistory from "../components/characters/baldurHistory";
import { ScrollContext } from "../utils/scroll-observer";
import Bio from "../components/bio";

const Baldur: React.FC = () => {
  return (
    <div className=" bg-[#0A0A0C] ">
      <Bio name="Baldur" description="O Urso Branco" />
      <BaldurHistory />
    </div>
  );
};

export default Baldur;
