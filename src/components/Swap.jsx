import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { Loader, Tenzies } from ".";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="w-full p-2 my-2 text-sm text-white bg-transparent border-none rounded-sm outline-none white-glassmorphism"
  />
);

const Swap = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex items-center justify-center w-full gradient-bg-welcome">
      <div className="flex flex-col items-start justify-between py-10 px-7 mf:flex-row md:p-20">
        <div className="flex flex-col justify-start flex-1 mf:mr-10">
          <h1 className="py-1 text-3xl text-left text-white sm:text-5xl text-gradient">
            Intercambia Crypto en todo<br />el mundo en segundos
          </h1>

          {/* Swap Box Exchange
        */}
        <div className="flex flex-col items-center justify-start flex-1 w-full p-5 mt-10 mf:mt-0">
          <div className="flex flex-col items-center justify-start w-full p-5 sm:w-96 white-glassmorphism2">
            <div className="flex flex-col items-start justify-start w-full p-5 sm:w-96 ">
            <h4 className="text-left text-white" > Swap </h4>
            <Input placeholder="Token select" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Cantidad 0.000" name="amount" type="number"  handleChange={handleChange} />
            </div>
            <div className="flex flex-col items-center justify-start w-full p-5 sm:w-96 ">
            <Input placeholder="Token select" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Cantidad 0.000" name="amount" type="number" handleChange={handleChange} />
            </div>

            {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="text-white w-full mt-2 border-[1px] p-2 border-[#ee8a27] hover:bg-[#ee8a27] rounded-full cursor-pointer"
              >
                <p className="text-base font-semibold text-white">
                    Conectar Billetera
                </p>
            </button>
            )}

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
                  Swap
                </button>
              )}
        </div>
        

            </div>
            </div>
        </div>
      </div>
  );
};

export default Swap;