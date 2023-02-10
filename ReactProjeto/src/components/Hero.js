import React from "react";

import { CartContext } from "../contexts/CartContext";
// import link
import { useContext } from "react";
import enviosGif from "../img/entrega-e-envio-atique-store_2048x2048.gif";
import banner from "../img/banner.webp";
import masVendidos from "../img/maisvendidos.png";
import { BsSearch } from "react-icons/bs";

const Hero = () => {
  const {
    pesquisaName,
    setPesquisaName,
    pricePesquisa,
    setPricePesquisa,
    setPesquisaOrdem,
    pesquisaOrdem,
  } = useContext(CartContext);

  return (
    <div>
      <div className="flex justify-center items-center w-full h[400px]">
        <img className="w-full h-80" src={banner} alt="" />
      </div>
      <div className="flex justify-center items-center">
        <img className="object-fit h-60 w-fit" src={enviosGif} alt="Envios" />
      </div>
      <div className=" flex justify-center items-center ">
        <img className="h-64" src={masVendidos} alt="" />
      </div>

      <div className="flex justify-center text-center my-10">
        <input
          className="border-b-2 rounded-none border-indigo-600 outline-none bg-transparent"
          type="text"
          placeholder="Pesquisa por nome"
          value={pesquisaName}
          onChange={(e) => setPesquisaName(e.target.value)}
        />
        <button className="">
          <BsSearch />
        </button>
      </div>
      <div className="absolute xl:left-40 lg:left-28 md:left-28 sm:left-24 flex top-100 ">
        <label className="flex flex-col my-20 text-center left-24 relative font-bold">
          Filtre por Valor Maximo e Minimo
          <input
            type="range"
            value={pricePesquisa}
            onChange={(e) => setPricePesquisa(e.target.value)}
            min={0}
            max={1000}
            step={10}
            className="w-48 h-2 my-4 relative bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 "
          />
          <span className="border-solid border-2 border-indigo-600 mb-12 w-16">
            R${pricePesquisa}
          </span>
        </label>
      </div>
      <div className="flex justify-center text-center my-10">
        <select
          id="underline_select"
          className="block py-2.5 px-0  text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer text-center"
          onChange={(e) => setPesquisaOrdem(e.target.value)}
          value={pesquisaOrdem}>
          <option value="">Ordem</option>
          <option value="descrecente">Descrescente</option>
          <option value="crescente">Crescente</option>
          <option value="A-Z">A-Z</option>
        </select>
      </div>
    </div>
  );
};

export default Hero;
