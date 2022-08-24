import React from "react";

const NewAbout: React.FC = () => {
  return (
    <section
      className={`flex flex-col bg-[rgb(238,238,238)] py-20 text-3xl md:text-4xl`}
    >
      <div className="container mx-auto px-11 text-center">
        <p className="pb-5">
          <strong>Bem-vindo, Forasteiro.</strong>
        </p>
        <p className="pb-5">
          Este site é feito como uma espécie de WIKI para o mundo do RPG. Aqui
          você, meu caro leitor, encontrará informações de personagens, locais e
          eventos que aconteceram no mundo. As informações são públicas para os
          jogadores mas, seus personagens podem ficar privados de alguns dizeres
          aqui presentes, ajam com senso e sabedoria.
        </p>
        <p>
          <strong>
            <i>- Atenciosamento, seu narrador preferido, Hérick.</i>
          </strong>
        </p>
      </div>
    </section>
  );
};

export default NewAbout;
