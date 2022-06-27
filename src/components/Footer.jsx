import React from "react";
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="flex flex-col items-center justify-between w-full p-4 md:justify-center gradient-bg-footer">

    <div className="flex flex-col items-center justify-center w-full sm:flex-row">

      <div className="header-logo">
        <img src={logo} alt="bclublogo" />
      </div>
      <ul className="menu-items" >
        <li><Link to="/Enviar"> Enviar </Link></li>
        <li><Link to="/Swap"> Exchange </Link></li>
        <li><Link to="/Loteria"> Loteria </Link></li>
        <li><Link to="/Donaciones"> Donaciones </Link></li>
        <li><Link to="/Tutoriales"> Tutoriales </Link></li>
      </ul>

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