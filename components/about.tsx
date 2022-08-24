import React from "react";
import Link from "next/link";

// import { Container } from './styles';

const About: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-10 `}>
      <div className=" container relative flex max-w-[1100px] mx-auto pt-[100px] px-10 justify-between items-start">
        <div className=" sticky top-[100px] bottom-0 mr-[300px] mb-[100px]">
          <h1 className="pb-5">
            <strong className="text-[30px]">Bem-vindo, Forasteiro.</strong>
          </h1>
          <p className="pb-5">
            Este site é feito como uma espécie de WIKI para o mundo do RPG. Aqui
            você, meu caro leitor, encontrará informações de personagens, locais
            e eventos que aconteceram no mundo. As informações são públicas para
            os jogadores mas, seus personagens podem ficar privados de alguns
            dizeres aqui presentes, ajam com senso e sabedoria.
          </p>

          <h2>
            {" "}
            <i>
              <strong>
                {" "}
                - Atenciosamento, seu narrador preferido, Hérick.
              </strong>
            </i>{" "}
          </h2>
        </div>
        <div className="">
          <h1 className=" text-center pb-10 text-5xl font-breath">
            {" "}
            Protagonistas Recentes{" "}
          </h1>
          <div className="w-[500px] mb-[100px] bg-black right-card">
            <div className="style-square-tyvaar"></div>
            <h1 className="text-white pb-2">
              <Link href="/baldur" title="baldur">
                Baldur
              </Link>
            </h1>
            <p className="opacity-50 text-white">Descrição</p>
          </div>
          <div className="w-[500px] mb-[100px] bg-black right-card">
            <div className="style-square-ryuuji"></div>
            <h1 className="text-white pb-2">
              <Link href="/ryuuji" title="ryuuji">
                Raijin Ryuuji
              </Link>
            </h1>
            <p className="opacity-50 text-white">
              Ryuuji foi um espadachim, ronin, ex-samurai que ficou conhecido
              por ser um dos poucos sobreviventes do Massacre de Takiguhou, que
              derrubou um dos mais fortes e influentes clãs de Wa. Sendo um dos
              protagonistas da terceira parte do Último Príncipe: Fora do
              Abismo.
            </p>
          </div>
          <div className="w-[500px] mb-[100px] bg-black right-card">
            <div className="style-square"></div>
            <h1 className="text-white pb-2">Connor Westbrook</h1>
            <p className="opacity-50 text-white">Descrição</p>
          </div>
          <div className="w-[500px] mb-[100px] bg-black right-card">
            <div className="style-square"></div>
            <h1 className="text-white pb-2">Serpente de Algodão</h1>
            <p className="opacity-50 text-white">Descrição</p>
          </div>
          <div className="w-[500px] mb-[100px] bg-black right-card">
            <div className="style-square"></div>
            <h1 className="text-white pb-2">Kyu e Bill</h1>
            <p className="opacity-50 text-white">Descrição</p>
          </div>
          <div className="w-[500px] mb-[100px] bg-black right-card">
            <div className="style-square"></div>
            <h1 className="text-white pb-2">Kyu e Bill</h1>
            <p className="opacity-50 text-white">Descrição</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
