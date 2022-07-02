import React, { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { Loader } from ".";
import { Botones } from ".";
import Tenzies from "./Tenzies";

const Input = ({ input }) => (
  <div
    className="w-full input-loteria white-glassmorphism2">
    {input}
  </div>
);

const BotonLimpiar = (props) => (
  <div  className="boton-extra" onClick={props.manejarLimpiar}>
        {props.children}
  </div>
);

const BotonNumerosAle = (props) => (
  <div  className="boton-extra" onClick={props.manejarNumAle}>
        {props.children}
  </div>
);




const Loteria = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);
  const [input, setInput] = useState("");


  const generarNumAle = (min, max) => {
    const numero = Math.floor(Math.random() * (max - min + 1) + min);
    return numero;
  }

  //guarda numeros que no se repiten en un array
  const mostrarNumeros = () => {
    const numeros = [];
  while (numeros.length < 6) {
  const numero = generarNumAle( 1, 49 );
  if (!numeros.includes(numero)) numeros.push(numero)
  }
  return numeros;
}

  const agregarInput = numero => {
    setInput(input + numero);
  };

  const handleSubmit = (e) => {
    const { amount } = formData;
    e.preventDefault();
    if (!amount) return;
    sendTransaction();
  };

  return (
    <div className="flex items-center justify-center w-full gradient-bg-transactions">
      <div className="flex flex-col items-start justify-between py-10 px-7 mf:flex-row md:p-20">
        <div className="flex flex-col justify-start flex-1 mf:mr-10">
          <h1 className="py-1 text-3xl text-center text-white sm:text-5xl text-gradient">
            Loteria totalmente Descentralizada<br />segura, confiable y transparente
          </h1>
          <p className="w-11/12 mt-5 text-base font-light text-left text-white md:w-9/12">
            El 80% de los fondos seran distribuidos a los distintos premios <br />
            El 20% restante sera para las actividades de caridad y el token BCLUB. <br />
          </p>



          {/* Swap Box Exchange
        */}
        <div className="flex flex-col items-center justify-start flex-1 w-full p-5 mt-10 mf:mt-0">
          <div className="flex flex-col items-center justify-start w-full p-5 sm:w-96 white-glassmorphism2">
            <div className="flex flex-col items-start justify-start w-full p-5 sm:w-96 ">
            <h1 className="text-white " > Elige tus 6 numeros favoritos </h1>
            <p className="text-white " > Numeros recomendados: <br /> 
            {generarNumAle(1, 49)} {generarNumAle(1, 49)} {generarNumAle(1, 49)} {generarNumAle(1, 49)} {generarNumAle(1, 49)} {generarNumAle(1, 49)}
            </p>
            </div>

            <Input input={input}/>
            {/* Linea de division
            */}
            <div className="h-[1px] w-full bg-gray-400 my-2" />

            <div className="w-full fila">
            <Botones manejarClic={agregarInput}> 01 </Botones>
            <Botones manejarClic={agregarInput}> 02 </Botones>
            <Botones manejarClic={agregarInput}> 03 </Botones>
            <Botones manejarClic={agregarInput}> 04 </Botones>
            <Botones manejarClic={agregarInput}> 05 </Botones>
            <Botones manejarClic={agregarInput}> 06 </Botones>
            <Botones manejarClic={agregarInput}> 07 </Botones>
            </div>
            <div className="w-full fila">
            <Botones manejarClic={agregarInput}> 08 </Botones>
            <Botones manejarClic={agregarInput}> 09 </Botones>
            <Botones manejarClic={agregarInput}> 10 </Botones>
            <Botones manejarClic={agregarInput}> 11 </Botones>
            <Botones manejarClic={agregarInput}> 12 </Botones>
            <Botones manejarClic={agregarInput}> 13 </Botones>
            <Botones manejarClic={agregarInput}> 14 </Botones>
            </div>
            <div className="w-full fila">
            <Botones manejarClic={agregarInput}> 15 </Botones>
            <Botones manejarClic={agregarInput}> 16 </Botones>
            <Botones manejarClic={agregarInput}> 17 </Botones>
            <Botones manejarClic={agregarInput}> 18 </Botones>
            <Botones manejarClic={agregarInput}> 19 </Botones>
            <Botones manejarClic={agregarInput}> 20 </Botones>
            <Botones manejarClic={agregarInput}> 21 </Botones>
            </div>
            <div className="w-full fila">
            <Botones manejarClic={agregarInput}> 22 </Botones>
            <Botones manejarClic={agregarInput}> 23 </Botones>
            <Botones manejarClic={agregarInput}> 24 </Botones>
            <Botones manejarClic={agregarInput}> 25 </Botones>
            <Botones manejarClic={agregarInput}> 26 </Botones>
            <Botones manejarClic={agregarInput}> 27 </Botones>
            <Botones manejarClic={agregarInput}> 28 </Botones>
            </div>
            <div className="w-full fila">
            <Botones manejarClic={agregarInput}> 29 </Botones>
            <Botones manejarClic={agregarInput}> 30 </Botones>
            <Botones manejarClic={agregarInput}> 31 </Botones>
            <Botones manejarClic={agregarInput}> 32 </Botones>
            <Botones manejarClic={agregarInput}> 33 </Botones>
            <Botones manejarClic={agregarInput}> 34 </Botones>
            <Botones manejarClic={agregarInput}> 35 </Botones>
            </div>
            <div className="w-full fila">
            <Botones manejarClic={agregarInput}> 36 </Botones>
            <Botones manejarClic={agregarInput}> 37 </Botones>
            <Botones manejarClic={agregarInput}> 38 </Botones>
            <Botones manejarClic={agregarInput}> 39 </Botones>
            <Botones manejarClic={agregarInput}> 40 </Botones>
            <Botones manejarClic={agregarInput}> 41 </Botones>
            <Botones manejarClic={agregarInput}> 42 </Botones>
            </div>
            <div className="w-full fila">
            <Botones manejarClic={agregarInput}> 43 </Botones>
            <Botones manejarClic={agregarInput}> 44 </Botones>
            <Botones manejarClic={agregarInput}> 45 </Botones>
            <Botones manejarClic={agregarInput}> 46 </Botones>
            <Botones manejarClic={agregarInput}> 47 </Botones>
            <Botones manejarClic={agregarInput}> 48 </Botones>
            <Botones manejarClic={agregarInput}> 49 </Botones>
            </div>


            <div className="w-full fila">
            <BotonLimpiar manejarLimpiar={() => setInput("")}>
            Limpiar
            </BotonLimpiar>

            <BotonNumerosAle manejarNumAle={() => setInput( mostrarNumeros )}>
            Aleatorio
            </BotonNumerosAle>
            </div>


            {/* Boton de conectar
            */}
            {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="text-white w-full mt-2 border-[2px] p-2 border-[#ee8a27] hover:bg-[#ee8a27] rounded-full cursor-pointer"
              >
                <p className="text-base font-semibold text-white">
                    Conecta tu cuenta para participar
                </p>
            </button>
            )}


            {/* Linea de division
            */}
            <div className="h-[1px] w-full bg-gray-400 my-2" />


             {/* Circulo de cargando
            */}

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[2px] p-2 border-[#ee8a27] hover:bg-[#ee8a27] rounded-full cursor-pointer"
                >
                  Comprar Boleto
                </button>
              )}
        </div>




            </div>
            </div>
        </div>
      </div>
  );
};

export default Loteria;