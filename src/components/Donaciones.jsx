import React, { useContext, useState, useEffect } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { donacionesAddress, donacionesAbi } from "../utils/constants";
import { shortenAddress } from "../utils/shortenAddress";
import { ethers } from "ethers";
import { Loader } from ".";
import { Transactions } from ".";
import caridad01 from "../../images/caridad01.jpg";
import caridad02 from "../../images/caridad02.jpg";
import caridad03 from "../../images/caridad03.jpg";
import caridad04 from "../../images/caridad04.jpg";

const Donaciones = () => {
  const { currentAccount, connectWallet } = useContext(TransactionContext);
  const [isLoading, setIsLoading] = useState(false)
  const [donaciones, setDonaciones] = useState(undefined)
  const [donacionesId, setDonacionesId] = useState("-")
  const [donadoresActuales, setDonadoresActuales] = useState("-")
  const [donadoActual, setDonadoActual] = useState("-")
  const [ganadorActual, setGanadorActual] = useState("-")
  const [totalDonaciones, setTotalDonaciones] = useState("-")
  const [totalDonado, setTotalDonado] = useState("-")
  const [totalPremios, setTotalPremios] = useState("-")
  const [totalToken, setTotalToken] = useState("-")

  useEffect(() => {
    const verDatos = async () => {
      const donacionesContrato = await crearContrato();
      const donacionesId = await donacionesContrato.verDonacionesId();
      const donadoresActuales = await donacionesContrato.donadoresActuales();
      const donadoActual = await  donacionesContrato.verDonadoActual();
      const ganadorActual = await  donacionesContrato.ultimoGanador();
      const totalDonaciones = await donacionesContrato.totalDonaciones();
      const totalDonado = await donacionesContrato.totalDonado();
      const totalPremios = await donacionesContrato.totalRepartido();
      const totalToken = await donacionesContrato.totalToken();
      setDonaciones(donacionesContrato);
      setDonacionesId(donacionesId.toString());
      setDonadoresActuales(donadoresActuales.toString());
      setDonadoActual(parseInt(donadoActual._hex)/ (10 ** 18));
      setGanadorActual(ganadorActual);
      setTotalDonaciones(totalDonaciones.toString());
      setTotalDonado(parseInt(totalDonado._hex)/ (10 ** 18));
      setTotalPremios(parseInt(totalPremios._hex)/ (10 ** 18));
      setTotalToken(parseInt(totalToken._hex)/ (10 ** 18));
    };
    verDatos();
  }, []);

  const crearContrato = () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const donacionesContrato = new ethers.Contract(donacionesAddress, donacionesAbi, signer)
    return donacionesContrato
  };

  const donacion = async (e) => {
    e.preventDefault();
    const donacion = e.target.elements[0].value;
    if (!donacion) return;
    if (typeof window.ethereum !== "undefined") {
      const donacionesContrato = crearContrato();
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      try {
        const transaccion = await donacionesContrato.donacion({
          value: ethers.utils.parseEther(donacion),
        })
        await listenForTransactionMine(transaccion, provider)
      } catch (error) {
        console.log(error)
      }
    } else {
      donarButton.innerHTML = "Por favor instala MetaMask"
    }
  }

  function listenForTransactionMine(transactionResponse, provider) {
    setIsLoading(true)
    console.log(`Minando... ${transactionResponse.hash}`)
    return new Promise((resolve, reject) => {
      provider.once(transactionResponse.hash, (transactionReceipt) => {
        console.log(
          `Listo... Completado con ${transactionReceipt.confirmations} confirmaciones. `
        )
        setIsLoading(false)
        window.location.reload()
        resolve()
      })
    })
  }

  return (
        <div className="p-5 gradient-bg-transactions ">

          <h1 className="text-3xl text-center text-white sm:text-5xl text-gradient">
          Recibimos donaciones para las<br />actividades sociales y de caridad
          </h1>
          <p className="mt-5 mb-5 font-light text-center text-white">
            5% del total acumulado será enviado automáticamente como Premio a un solo Donador. <br />
            10% del total restante será enviado automáticamente para aumentar y crecer el valor del Token BCLUB.  <br />
            90% del total restante será donado automáticamente para las actividades sociales y de caridad.
          </p>

        <div className="flex flex-col items-center justify-start flex-1 w-full p-3 mt-5 mf:mt-0">
          <div className="flex flex-col items-center justify-center w-full p-5 md:w-96 white-glassmorphism2">
            <p className="text-center text-white" > Muchas gracias por tu donación </p>
            <p className="text-center text-white" > Juntos lograremos más!! </p>
            <form className="w-full" onSubmit={e => donacion(e)}>
            <input id="donarButton" min="0.01" type="number" name="amount" step="0.01" className="w-full p-2 mt-2 text-sm text-white bg-transparent border-none rounded-sm white-glassmorphism" placeholder="Ingresa una cantidad" />
            <div className="h-[1px] mt-3 w-full bg-[#ee8a27] my-2" />

            {!currentAccount && (
            <button type="button" onClick={connectWallet}
              className="text-white w-full mt-2 border-[2px] p-2 border-[#ee8a27] hover:bg-[#ee8a27] rounded-full cursor-pointer">
              <p className="text-base font-semibold text-white">
                    Conectar Billetera </p>
            </button>
            )}

            {isLoading
              ? <Loader />
              : (
                <button type="submit" className="text-white w-full mt-2 border-[2px] p-2 border-[#ee8a27] hover:bg-[#ee8a27] rounded-full cursor-pointer">
                  Donar </button>
              )}
              </form>
          </div>
        </div>

        <p className="mt-5 mb-5 text-center text-white ">
          Tambien puedes Donar cualquier otra Criptomoneda a nuestra Dirección oficial: <br />
          <a className="text-[#ee8a27]" href="https://testnet.bscscan.com/address/0x71652091BFA1eE1113ca8F653f102e03a73Df298" target="_blank">
          0x71652091BFA1eE1113ca8F653f102e03a73Df298</a>
        </p>

        {!currentAccount && (
        <h3 className="my-2 text-3xl text-center text-white">
          Conecta tu cuenta para ver los datos desde la Blockchain!!
        </h3> )}

        {/* Datos del Sorteo */}
      <div className="flex flex-col items-center justify-center flex-1 w-full gap-5 mf:flex-row">
        <div className="w-full p-5 mt-5 text-xl text-white white-glassmorphism2">
          <p> Donaciones Id: </p>
          <a className="text-[#ee8a27]" href={`https://testnet.bscscan.com/address/${donacionesAddress}`} target="_blank">
          {donacionesId} </a>
        </div>
        <div className="w-full p-5 mt-5 text-xl text-white white-glassmorphism2">
          <p> Donadores Actuales: </p>
          <a className="text-[#ee8a27]" href={`https://testnet.bscscan.com/address/${donacionesAddress}`} target="_blank">
          {donadoresActuales} Donadores </a>
          <br />
        </div>
        <div className="w-full p-5 mt-5 text-xl text-white white-glassmorphism2">
          <p> Donado Actual: </p>
          <a className="text-[#ee8a27]" href={`https://testnet.bscscan.com/address/${donacionesAddress}`} target="_blank">
          {donadoActual} BNB </a>
        </div>
        <div className="w-full p-5 mt-5 text-xl text-white white-glassmorphism2">
          <p> Último Ganador: </p>
          <a className="text-[#ee8a27]" href={`https://testnet.bscscan.com/address/${ganadorActual}`} target="_blank">
          {shortenAddress(ganadorActual)}</a>
        </div>
      </div>
        {/* Datos del Sorteo */}

        {/* Datos del Sorteo */}
      <div className="flex flex-col items-center justify-start flex-1 gap-5 mf:flex-row">
        <div className="w-full p-5 mt-5 text-xl text-white white-glassmorphism2">
          <p> Total Donaciones: </p>
          <a className="text-[#ee8a27]" href={`https://testnet.bscscan.com/address/${donacionesAddress}`} target="_blank">
          {totalDonaciones} Donaciones</a>
        </div>
        <div className="w-full p-5 mt-5 text-xl text-white white-glassmorphism2">
          <p className="text-white" > Total Donado: </p>
          <a className="text-[#ee8a27]" href={`https://testnet.bscscan.com/address/${donacionesAddress}`} target="_blank">
          {totalDonado} BNB </a>
        </div>
        <div className="w-full p-5 mt-5 text-xl text-white white-glassmorphism2">
          <p> Total Premios: </p>
          <a className="text-[#ee8a27]" href={`https://testnet.bscscan.com/address/${donacionesAddress}`} target="_blank">
          {totalPremios} BNB</a>
        </div>
        <div className="w-full p-5 mt-5 text-xl text-white white-glassmorphism2">
          <p className="text-white" > Total Token: </p>
          <a className="text-[#ee8a27]" href={`https://testnet.bscscan.com/address/${donacionesAddress}`} target="_blank">
          {totalToken} BNB </a>
        </div>
      </div>
        {/* Datos del Sorteo */}

        {/* Diamante */}
        <div className= "flex items-center justify-center w-full mt-10 mb-1 container-g ">
          <div className="card"> <img src={caridad04} alt="caridad04"/> </div>
          <div className="card"> <img src={caridad01} alt="caridad01"/> </div>
          <div className="card"> <img src={caridad02} alt="caridad02"/> </div>
          <div className="card"> <img src={caridad03} alt="caridad03"/> </div>
          <div className="card"> <img src={caridad04} alt="caridad04"/> </div>
        </div>
        <div className= "flex items-center justify-center w-full mb-1 container-dk ">
          <div className="card"> <img src={caridad02} alt="caridad02"/> </div>
          <div className="card"> <img src={caridad01} alt="caridad01"/> </div>
          <div className="card"> <img src={caridad03} alt="caridad03"/> </div>
          <div className="card"> <img src={caridad04} alt="caridad04"/> </div>
          <div className="card"> <img src={caridad02} alt="caridad02"/> </div>
        </div>
        <div className= "flex items-center justify-center w-full mb-1 container-dk ">
          <div className="card"> <img src={caridad03} alt="caridad03"/> </div>
          <div className="card"> <img src={caridad01} alt="caridad01"/> </div>
          <div className="card"> <img src={caridad04} alt="caridad04"/> </div>
        </div>
        <div className= "flex items-center justify-center w-full mb-8 container-dk ">
          <div className="card"> <img src={caridad02} alt="caridad02"/> </div>
        </div>
        {/* Diamante */}

        </div>

        // <Transactions />
  )
}

export default Donaciones


      //  <div className= "inline-grid w-full grid-cols-2 gap-4 p-2">
      //    <img className="w-full shadow-lg aspect-video rounded-2xl shadow-orange-400/50" src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
      //    <img className="w-full shadow-lg aspect-video rounded-2xl shadow-orange-400/50" src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
      //    <img className="w-full shadow-lg aspect-video rounded-2xl shadow-orange-400/50" src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
      //    <img className="w-full shadow-lg aspect-video rounded-2xl shadow-orange-400/50" src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
      //    <img className="w-full shadow-lg aspect-video rounded-2xl shadow-orange-400/50" src="https://images.unsplash.com/photo-1490481920145-fc78891bbb99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
      //    <img className="w-full shadow-lg aspect-video rounded-2xl shadow-orange-400/50" src="https://images.unsplash.com/photo-1588666070825-14c79d5eb0c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
      //  </div>