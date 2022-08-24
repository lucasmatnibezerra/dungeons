import React from "react";
import Image from "next/image";
import Shield from "/public/shield.png";
import Line from "/public/line.png";
import Card from "../utils/card";
import { url } from "inspector";
import Link from "next/link";

const Campaigns: React.FC = () => {
  return (
    <section
      className={`flex-col  bg-[rgb(238,238,238)] py-20 text-3xl md:text-4xl`}
    >
      <div className="font-[400] relative text-center top-[25px]">
        <Image
          src="/shield1.png"
          objectFit="cover"
          width={29}
          height={32}
          alt="shield"
          className="absolute top-[-40] max-w-[32px] max-h-[32px] left-[calc(50%-16px)]"
        />
        <h1>
          <span>
            <span>
              <span>
                <Image
                  src="/line.png"
                  width={320}
                  height={1}
                  alt="line-left"
                  style={{
                    paddingLeft: "70px",
                    verticalAlign: "middle",
                    width: "30%",
                    transform: "rotate(180deg)",
                  }}
                />
              </span>
              <span className="diamondLeft"></span>
              <span className=" text-black font-breath text-[24px] tracking-[7px] relative indent-2 uppercase top-1 px-10">
                <span>Personagens Principais</span>
              </span>
              <span>
                <span className="diamondRight"></span>
                <Image
                  src="/line.png"
                  width={320}
                  height={1}
                  alt="line-left"
                  style={{
                    paddingLeft: "70px",
                    verticalAlign: "middle",
                    width: "30%",
                  }}
                />
              </span>
            </span>
          </span>
        </h1>
        <h2 className="transition-[.6s] pt-16 tracking-[.04em] text-[13px]"></h2>
      </div>
      <div className="max-w-[1600px] p-[30px_50px] m-[0_auto]">
        <div className=" faction-list">
          <a
            href="/baldur"
            className=" fanction-wrapper transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-[.3s,.3s,.3s] transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-[.3s,.3s,.3s]"
          >
            <div className="Qcard">
              <div className="Qcard-hex Qcard-hextech faction-card ">
                <div
                  className=" bg-hex bg-hextech bg-test "
                  style={{
                    backgroundPosition: "top",
                    backgroundImage: "url('/baldur2.png')",
                    height: "300px",
                  }}
                ></div>
                <h3 className="hex-root faction-name font-breath">
                  Baldur Bjorn
                </h3>
              </div>
            </div>
          </a>
          <a
            href="/ryuuji"
            className=" fanction-wrapper transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-[.3s,.3s,.3s]"
          >
            <div className="Qcard">
              <div className="Qcard-hex Qcard-hextech faction-card ">
                <div
                  className=" bg-hex bg-hextech bg-test "
                  style={{
                    backgroundPosition: "top",
                    backgroundImage: "url('/ryuuji.png')",
                    height: "300px",
                  }}
                ></div>
                <h3 className="hex-root faction-name font-breath">
                  Raijin Ryuuji
                </h3>
              </div>
            </div>
          </a>
          <a
            href="/baldur"
            className=" fanction-wrapper transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-[.3s,.3s,.3s]"
          >
            <div className="Qcard">
              <div className="Qcard-hex Qcard-hextech faction-card ">
                <div
                  className=" bg-hex bg-hextech bg-test "
                  style={{
                    backgroundPosition: "top",
                    backgroundImage: "url('/connorW.png')",
                    height: "300px",
                  }}
                ></div>
                <h3 className="hex-root faction-name font-breath">
                  Connor Westbrook
                </h3>
              </div>
            </div>
          </a>
          <a
            href="/baldur"
            className=" fanction-wrapper transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-[.3s,.3s,.3s]"
          >
            <div className="Qcard">
              <div className="Qcard-hex Qcard-hextech faction-card ">
                <div
                  className=" bg-hex bg-hextech bg-test "
                  style={{
                    backgroundPosition: "top",
                    backgroundImage: "url('/kyu.png')",
                    height: "300px",
                  }}
                ></div>
                <h3 className="hex-root faction-name font-breath">
                  Kyu e Bill
                </h3>
              </div>
            </div>
          </a>
          <a
            href="/baldur"
            className=" fanction-wrapper transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-[.3s,.3s,.3s]"
          >
            <div className="Qcard">
              <div className="Qcard-hex Qcard-hextech faction-card ">
                <div
                  className=" bg-hex bg-hextech bg-test "
                  style={{
                    backgroundPosition: "top",
                    backgroundImage: "url('/nico.png')",
                    height: "300px",
                  }}
                ></div>
                <h3 className="hex-root faction-name font-breath">
                  Nico Medor
                </h3>
              </div>
            </div>
          </a>
          <a
            href="/baldur"
            className=" fanction-wrapper transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-[.3s,.3s,.3s]"
          >
            <div className="Qcard">
              <div className="Qcard-hex Qcard-hextech faction-card ">
                <div
                  className=" bg-hex bg-hextech bg-test "
                  style={{
                    backgroundPosition: "top",
                    backgroundImage: "url('/serpente.png')",
                    height: "300px",
                  }}
                ></div>
                <h3 className="hex-root faction-name font-breath">
                  Serpente de Algodão
                </h3>
              </div>
            </div>
          </a>
          <a
            href="/baldur"
            className=" fanction-wrapper transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-[.3s,.3s,.3s]"
          >
            <div className="Qcard">
              <div className="Qcard-hex Qcard-hextech faction-card ">
                <div
                  className=" bg-hex bg-hextech bg-test "
                  style={{
                    backgroundPosition: "top",
                    backgroundImage: "url('/tyvaar.png')",
                    height: "300px",
                  }}
                ></div>
                <h3 className="hex-root faction-name font-breath">Tyvaar</h3>
              </div>
            </div>
          </a>
          <a
            href="/baldur"
            className=" fanction-wrapper transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-[.3s,.3s,.3s]"
          >
            <div className="Qcard">
              <div className="Qcard-hex Qcard-hextech faction-card ">
                <div
                  className=" bg-hex bg-hextech bg-test "
                  style={{
                    backgroundPosition: "top",
                    backgroundImage: "url('/fenrir.png')",
                    height: "300px",
                  }}
                ></div>
                <h3 className="hex-root faction-name font-breath">Fenrir</h3>
              </div>
            </div>
          </a>
          <a
            href="/baldur"
            className=" fanction-wrapper transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-[.3s,.3s,.3s]"
          >
            <div className="Qcard">
              <div className="Qcard-hex Qcard-hextech faction-card ">
                <div
                  className=" bg-hex bg-hextech bg-test "
                  style={{
                    backgroundPosition: "top",
                    backgroundImage: "url('/amnom.png')",
                    height: "300px",
                  }}
                ></div>
                <h3 className="hex-root faction-name font-breath">Amnom</h3>
              </div>
            </div>
          </a>
          <a
            href="/baldur"
            className=" fanction-wrapper transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-[.3s,.3s,.3s]"
          >
            <div className="Qcard">
              <div className="Qcard-hex Qcard-hextech faction-card ">
                <div
                  className=" bg-hex bg-hextech bg-test "
                  style={{
                    backgroundPosition: "top",
                    backgroundImage: "url('/amnom.png')",
                    height: "300px",
                  }}
                ></div>
                <h3 className="hex-root faction-name font-breath">Amnom</h3>
              </div>
            </div>
          </a>
          <a
            href="/baldur"
            className=" fanction-wrapper transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-[.3s,.3s,.3s]"
          >
            <div className="Qcard">
              <div className="Qcard-hex Qcard-hextech faction-card ">
                <div
                  className=" bg-hex bg-hextech bg-test "
                  style={{
                    backgroundPosition: "top",
                    backgroundImage: "url('/amnom.png')",
                    height: "300px",
                  }}
                ></div>
                <h3 className="hex-root faction-name font-breath">Amnom</h3>
              </div>
            </div>
          </a>
          <a
            href="/baldur"
            className=" fanction-wrapper transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-[.3s,.3s,.3s]"
          >
            <div className="Qcard">
              <div className="Qcard-hex Qcard-hextech faction-card ">
                <div
                  className=" bg-hex bg-hextech bg-test "
                  style={{
                    backgroundPosition: "top",
                    backgroundImage: "url('/amnom.png')",
                    height: "300px",
                  }}
                ></div>
                <h3 className="hex-root faction-name font-breath">Amnom</h3>
              </div>
            </div>
          </a>
          <a
            href="/baldur"
            className=" fanction-wrapper transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-[.3s,.3s,.3s]"
          >
            <div className="Qcard">
              <div className="Qcard-hex Qcard-hextech faction-card ">
                <div
                  className=" bg-hex bg-hextech bg-test "
                  style={{
                    backgroundPosition: "top",
                    backgroundImage: "url('/amnom.png')",
                    height: "300px",
                  }}
                ></div>
                <h3 className="hex-root faction-name font-breath">Amnom</h3>
              </div>
            </div>
          </a>
          <a
            href="/baldur"
            className=" fanction-wrapper transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-[.3s,.3s,.3s]"
          >
            <div className="Qcard">
              <div className="Qcard-hex Qcard-hextech faction-card ">
                <div
                  className=" bg-hex bg-hextech bg-test "
                  style={{
                    backgroundPosition: "top",
                    backgroundImage: "url('/amnom.png')",
                    height: "300px",
                  }}
                ></div>
                <h3 className="hex-root faction-name font-breath">Amnom</h3>
              </div>
            </div>
          </a>
          <a
            href="/baldur"
            className=" fanction-wrapper transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-[.3s,.3s,.3s]"
          >
            <div className="Qcard">
              <div className="Qcard-hex Qcard-hextech faction-card ">
                <div
                  className=" bg-hex bg-hextech bg-test "
                  style={{
                    backgroundPosition: "top",
                    backgroundImage: "url('/amnom.png')",
                    height: "300px",
                  }}
                ></div>
                <h3 className="hex-root faction-name font-breath">Amnom</h3>
              </div>
            </div>
          </a>
          <a
            href="/baldur"
            className=" fanction-wrapper transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-[.3s,.3s,.3s]"
          >
            <div className="Qcard">
              <div className="Qcard-hex Qcard-hextech faction-card ">
                <div
                  className=" bg-hex bg-hextech bg-test "
                  style={{
                    backgroundPosition: "top",
                    backgroundImage: "url('/amnom.png')",
                    height: "300px",
                  }}
                ></div>
                <h3 className="hex-root faction-name font-breath">Amnom</h3>
              </div>
            </div>
          </a>
          <a
            href="/baldur"
            className=" fanction-wrapper transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-[.3s,.3s,.3s]"
          >
            <div className="Qcard">
              <div className="Qcard-hex Qcard-hextech faction-card ">
                <div
                  className=" bg-hex bg-hextech bg-test "
                  style={{
                    backgroundPosition: "top",
                    backgroundImage: "url('/amnom.png')",
                    height: "300px",
                  }}
                ></div>
                <h3 className="hex-root faction-name font-breath">Amnom</h3>
              </div>
            </div>
          </a>
          <a
            href="/baldur"
            className=" fanction-wrapper transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-[.3s,.3s,.3s]"
          >
            <div className="Qcard">
              <div className="Qcard-hex Qcard-hextech faction-card ">
                <div
                  className=" bg-hex bg-hextech bg-test "
                  style={{
                    backgroundPosition: "top",
                    backgroundImage: "url('/amnom.png')",
                    height: "300px",
                  }}
                ></div>
                <h3 className="hex-root faction-name font-breath">Amnom</h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
