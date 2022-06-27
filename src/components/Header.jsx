import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

const Header = () => {
  const { currentAccount, connectWallet } = useContext(TransactionContext);
  const [open, setOpen] = useState(false);

  const verMenu = () => {
    setOpen(!open)
  }

  return (
    <div className="header">

       <div className="header-logo">
           <img src={logo} alt="bclublogo" />
       </div>

       <div className="menu-icon">
         <HiMenu className="icon" onClick={verMenu} />
       </div>

       <nav>
         <ul className={open ? "menu-items white-menu-glass active" : "menu-items white-menu-glass"}>

           <div className="menu-close">
           <AiOutlineClose className="icon" onClick={verMenu}/>
           </div>

           <li><Link to="/Enviar">Enviar</Link></li>
           <li><Link to="/Swap">Exchange</Link></li>
           <li><Link to="/Loteria">Loteria</Link></li>
           <li><Link to="/Donaciones">Donaciones</Link></li>
           <li><Link to="/Tutoriales">Tutoriales</Link></li>

         </ul>
       </nav>

      {!currentAccount && (
        <button
          type="button-web3"
          onClick={connectWallet}
          className="button-web3 border-[2px] p-2 border-[#ee8a27] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#ee8a27]"
          >
          <p className="text-base font-semibold text-white">
          Conectar Billetera
          </p>
          </button>
      )}

      {currentAccount && (
        <button
        type="button-web3"
        className="button-web3 border-[2px] p-2 border-[#ee8a27] py-2 px-7 mx-4 rounded-full cursor-pointer bg-[#ee8a27]"
        >
        <p className="text-base font-semibold text-white">
          {shortenAddress(currentAccount)}
        </p>
        </button>
      )}


    </div>
  )
};

export default Header;