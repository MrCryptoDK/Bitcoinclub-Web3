import React from "react";

import logo from "../../images/logo.png";

const Footer = () => (
  <div className="flex flex-col items-center justify-between w-full p-4 md:justify-center gradient-bg-footer">
    <div className="flex flex-col items-center justify-between w-full my-4 sm:flex-row">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-48" />
      </div>
      <div className="flex flex-wrap items-center flex-1 w-full mt-5 justify-evenly sm:mt-0">
        <p className="mx-2 text-base text-center text-white cursor-pointer">Enviar</p>
        <p className="mx-2 text-base text-center text-white cursor-pointer">Exchange</p>
        <p className="mx-2 text-base text-center text-white cursor-pointer">Loteria</p>
        <p className="mx-2 text-base text-center text-white cursor-pointer">Donaciones</p>
        <p className="mx-2 text-base text-center text-white cursor-pointer">Tutoriales</p>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center mt-5">
      <p className="text-sm text-center text-white">C O N T A C T O</p>
      <p className="mt-2 text-sm font-medium text-center text-white">@BitcoinClubMx</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.5px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-xs text-left text-white">SIGUENOS EN REDES SOCIALES</p>
      <p className="text-xs text-right text-white">@BitcoinClubMx</p>
    </div>
  </div>
);

export default Footer;