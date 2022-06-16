import React, { useContext } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const { currentAccount, connectWallet, handleChange, } = useContext(TransactionContext);

  return (
    <nav className="flex items-center justify-between w-full md:justify-center">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="cursor-pointer w-44" />
      </div>
      <ul className="flex-row items-center justify-between flex-initial hidden text-white list-none md:flex">
        {["Enviar", "Exchange", "Loteria", "Donaciones", "Tutoriales"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        {!currentAccount && (
        <button
          type="button"
          onClick={connectWallet}
          className="border-[2px] p-2 border-[#ee8a27] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#ee8a27]"
          >
          <p className="text-base font-semibold text-white">
            Conectar Billetera
          </p>
        </button>
        )}
        {currentAccount && (
        <button
          type="button"
          className="border-[2px] p-2 border-[#ee8a27] py-2 px-7 mx-4 rounded-full cursor-pointer bg-[#ee8a27]"
          >
          <p className="text-base font-semibold text-white">
            {shortenAddress(currentAccount)}
          </p>
        </button>
        )}
      </ul>

      <div className="relative flex">
        {!toggleMenu && (
          <HiMenu fontSize={35} className="text-white cursor-pointer top-3 md:hidden" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={35} className="text-white cursor-pointer md:hidden" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md white-glassmorphism text-white animate-slide-in  "
          >
            <li className="w-full my-2 text-xl">
              <AiOutlineClose fontSize={35} onClick={() => setToggleMenu(false)} />
            </li>
            {["Enviar", "Exchange", "Loteria", "Donaciones", "Tutoriales"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;