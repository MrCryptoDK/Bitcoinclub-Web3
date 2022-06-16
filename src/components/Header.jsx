import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Header = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const { currentAccount, connectWallet, handleChange, } = useContext(TransactionContext);

  return (
    <nav className="flex items-center justify-between w-full md:justify-center">
      <ul>
      </ul>
    </nav>
  );
};

export default Header;

//<li><Link to="/"> HOME </Link></li>