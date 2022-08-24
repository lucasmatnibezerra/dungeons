import React from "react";
import Image from "next/image";
import header from "/public/HeaderDivider.png";

function Bio(props) {
  return (
    <div className=" bg-[#0A0A0C]">
      <div className="bg-top bg-cover relative min-h-[88vh]">
        <div className="min-h-[500px]">
          <div className="absolute right-0 left-0 bottom-0 bg-local bg-no-repeat bg-[#0a0a0c] bg-cover w-full bg-baldur ">
            <div className="h-full w-full relative ">
              <div className=" absolute right-[0] left-0 bottom-0 pb-[35px] pt-[80%] text-center w-full bg-gg">
                <span
                  className="font-breath font-medium text-[100px] pt-5 tracking-[.2em]"
                  style={{ display: "inline-block", color: "rgb(103,71,31)" }}
                >
                  {props.name}
                </span>
                <Image src={header} width={1942} height={50} alt="header" />
                <h3 className="text-center  font-bold text-[12px] text-[#c4b998] tracking-[4px] padding uppercase">
                  {props.description}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
