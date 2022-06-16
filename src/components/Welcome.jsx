import React, { useContext } from "react";
import { SiBinance } from "react-icons/si";
import { RiSettings3Fill } from "react-icons/ri";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="w-full p-2 my-2 text-sm text-white bg-transparent border-none rounded-sm outline-none blue-glassmorphism"
  />
);

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col items-start justify-between px-4 py-12 mf:flex-row md:p-20">
        <div className="flex flex-col justify-start flex-1 mf:mr-10">
          <h1 className="py-1 text-3xl text-white sm:text-5xl text-gradient">
            Envia Crypto <br /> a todo el mundo
          </h1>
          <p className="w-11/12 mt-5 text-base font-light text-left text-white md:w-9/12">
            Explora el crypto mundo. Compra y vende criptomonedas facil con BitcoinClub.
          </p>
          {!currentAccount && (
          <button
              type="button"
              onClick={connectWallet}
              className="border-[2px] border-[#ee8a27] flex flex-row justify-center items-center my-5 p-2 rounded-full cursor-pointer hover:bg-[#ee8a27]"
            >
                <p className="text-base font-semibold text-white">
                    Conectar Billetera
                </p>
          </button>
          )}

          {/* Grid info
        */}

          <div className="grid w-full grid-cols-2 mt-10 sm:grid-cols-3">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Confiabiliad
            </div>
            <div className={companyCommonStyles}>
                Seguridad</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Binance Smart Chain
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>
                Bajas Comisiones</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        {/* BNB tarjeta
        */}

        <div className="flex flex-col items-center justify-start flex-1 w-full mt-10 mf:mt-0">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex flex-col justify-between w-full h-full">
              <div className="flex items-start justify-between">
                <div className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-full">
                  <SiBinance fontSize={25} color="#fff" />
                </div>
                <RiSettings3Fill fontSize={25} color="#fff" />
              </div>
              <div>
              {currentAccount && (
              <p className="text-sm font-semibold text-white">
                  Bienvenido: {shortenAddress(currentAccount)}
                  </p>
              )}
              {!currentAccount && (
              <p className="text-sm font-semibold text-white">
                  Dirección: 0x{shortenAddress(currentAccount)}
                  </p>
              )}
                <p className="mt-1 text-lg font-semibold text-white">
                  Binance Smart Chain
                </p>
              </div>
            </div>
          </div>

          {/* Parte del Tranferir
        */}

          <div className="flex flex-col items-center justify-start w-full p-5 sm:w-96 blue-glassmorphism2">
            <Input placeholder="Direccion de Envio" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Cantidad 0.0 (BNB)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Palabra Clave (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Mensaje Personal" name="message" type="text"  handleChange={handleChange} />
            <div className="h-[1px] w-full bg-gray-400 my-2" />

             {/* Circulo de cargando
            */}

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#ee8a27] hover:bg-[#ee8a27] rounded-full cursor-pointer"
                >
                  Enviar
                </button>
              )}
            </div>
            </div>
        </div>
      </div>
  );
};

export default Welcome;