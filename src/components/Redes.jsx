import React from "react";
import logo from "../../images/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

const IconoRedSocial = ({ icon }) => (
  <div className="flex items-center justify-center ">
      {icon}
  </div>
);

const Redes = () => (

    <div className="flex items-center justify-end w-full sm:flex-row ">

      <div className="redes-sociales" >
        <li> <a href="https://www.facebook.com/BitcoinClubApp" target="_blank" className="shadow-md shadow-orange-500/50">
          <IconoRedSocial icon={<FaFacebookF fontSize={35}/>} />
        </a></li>
        <li> <a href="https://www.instagram.com/bitcoinclubapp" target="_blank" className="shadow-md shadow-orange-500/50">
          <IconoRedSocial icon={<FaInstagram fontSize={35} />} />
        </a></li>
        <li> <a href="https://twitter.com/BitcoinClubApp" target="_blank" className="shadow-md shadow-orange-500/50">
          <IconoRedSocial icon={<FaTwitter fontSize={35} />} />
        </a></li>
        <li><a href="https://www.youtube.com/channel/UCOgBr5lHzu5IpNtFeBgdPgA" target="_blank" className="shadow-md shadow-orange-500/50">
          <IconoRedSocial icon={<FaYoutube fontSize={35} />} />
        </a></li>
        <li><a href="https://coinmarketcap.com/currencies/diamond-dnd/" target="_blank" className="shadow-md shadow-orange-500/50">
        <IconoRedSocial icon={<IoDiamondOutline fontSize={35}/>} />
        </a></li>
      </div>

    </div>
);

export default Redes;


// <li><a href="https://discord.gg/GRvPdwYvYe" target="_blank" className="shadow-md shadow-orange-500/50">
// <IconoRedSocial icon={<FaDiscord fontSize={33}/>} />
// </a></li>