import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { Loader } from ".";
import { Transactions } from ".";

const Input = ({ placeholder, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    min="0.01"
    step="0.01"
    value={value}
    onChange={(e) => handleChange(e, value)}
    className="w-full p-2 my-2 text-sm text-white bg-transparent border-none rounded-sm outline-none white-glassmorphism"
  />
);

const Donaciones = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);
  const handleSubmit = (e) => {
    const { amount } = formData;
    e.preventDefault();
    if (!amount) return;
    sendTransaction();
  };

  return (
        <div className="p-8 overflow-auto gradient-bg-transactions ">

          <h1 className="text-3xl text-center text-white sm:text-5xl text-gradient">
          Recibimos donaciones para las<br />actividades sociales y de caridad
          </h1>
          <p className="mt-5 font-light text-center text-white">
            El 80% de las donaciones sera para las actividades sociales y de caridad. <br />
            El 20% restante sera para aumentar y crecer el valor del token BCLUB. <br />
          </p>

        <div className="flex flex-col items-center justify-start flex-1 w-full p-5 mt-5 mf:mt-0">
          <div className="flex flex-col items-center justify-center w-full p-5 md:w-96 white-glassmorphism2">
            <div className="flex flex-col items-start justify-center w-full p-5 md:w-96 ">
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
        </div>

        <p className="mt-3 mb-5 font-light text-center text-white">
            Tambien puedes enviar cualquier otra criptomoneda 
            a nuestra Dirección oficial: <br />
            0x71652091BFA1eE1113ca8F653f102e03a73Df298
          </p>

        <div className= "inline-grid w-full grid-cols-2 gap-4 p-2">
          <img className="w-full shadow-lg aspect-video rounded-2xl shadow-orange-400/50" src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
          <img className="w-full shadow-lg aspect-video rounded-2xl shadow-orange-400/50" src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
          <img className="w-full shadow-lg aspect-video rounded-2xl shadow-orange-400/50" src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
          <img className="w-full shadow-lg aspect-video rounded-2xl shadow-orange-400/50" src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
          <img className="w-full shadow-lg aspect-video rounded-2xl shadow-orange-400/50" src="https://images.unsplash.com/photo-1490481920145-fc78891bbb99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
          <img className="w-full shadow-lg aspect-video rounded-2xl shadow-orange-400/50" src="https://images.unsplash.com/photo-1588666070825-14c79d5eb0c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
        </div>

        <Transactions />

        </div>
  )
}

export default Donaciones