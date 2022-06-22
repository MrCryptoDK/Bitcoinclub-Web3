import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { Loader } from ".";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.01"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="w-full p-2 my-2 text-sm text-white bg-transparent border-none rounded-sm outline-none white-glassmorphism"
  />
);

const Swap2 = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { amount } = formData;

    e.preventDefault();

    if (!amount) return;

    sendTransaction();
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col items-start justify-between py-10 px-7 mf:flex-row md:p-20">
        <div className="flex flex-col justify-start flex-1 mf:mr-10">
          <h1 className="py-1 text-3xl text-left text-white sm:text-5xl text-gradient">
            Recibimos donaciones para<br />las actividades de caridad
          </h1>
          <p className="w-11/12 mt-5 text-base font-light text-left text-white md:w-9/12">
            El 80% de las donaciones sera para las actividades de caridad. <br />
            El 20% restante sera para aumentar el valor del token BCLUB. <br />
            <br />
            Tambien puedes enviar cualquier cripto a esta direccion: <br />
            0x71652091BFA1eE1113ca8F653f102e03a73Df298
          </p>

          {/* Swap Box Exchange
        */}
        <div className="flex flex-col items-center justify-start flex-1 w-full p-5 mt-10 mf:mt-0">
          <div className="flex flex-col items-center justify-start w-full p-5 sm:w-96 white-glassmorphism2">
            <div className="flex flex-col items-start justify-start w-full p-5 sm:w-96 ">
            <h4 className="text-left text-white" > Muchas gracias por tu donación </h4>
            <Input placeholder="Ingresa una cantidad" name="amount" type="number"  handleChange={handleChange} />
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
                  Donar
                </button>
              )}
        </div>

              {/* Boton de donar
            */}

          <button
              type="button"
              className="border-[2px] border-[#ee8a27] flex flex-row justify-center items-center my-5 p-2 rounded-full cursor-pointer hover:bg-[#ee8a27]"
              onClick={connectWallet}
            >
                <p className="text-base font-semibold text-white">
                    Donar 0.1 BNB
                </p>
          </button>



            </div>
            </div>
        </div>
      </div>
  );
};

export default Swap2;