import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { Loader } from ".";

const Form = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  return (
    <div className="flex items-center justify-center w-full h-screen gradient-bg-services">

        {/* Swap Box Exchange
        */}
          <div className="flex flex-col items-center justify-start w-full p-5 sm:w-96 white-glassmorphism2">
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
                <button type="button"
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#ee8a27] hover:bg-[#ee8a27] rounded-full cursor-pointer"
                >
                  Donar
                </button>
              )}
            </div>

    </div>
  );
};

export default Form;