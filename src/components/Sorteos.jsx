import React, { useContext, useState, useEffect } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { sorteosAddress, sorteosAbi } from "../utils/constants";
import { shortenAddress } from "../utils/shortenAddress";
import { ethers } from "ethers";
import { Loader } from ".";

const Sorteos = () => {
  const { currentAccount, connectWallet } = useContext(TransactionContext)
  const [isLoading, setIsLoading] = useState(false)
  const [sorteos, setSorteos] = useState(undefined)
  const [sorteosId, setSorteosId] = useState("-")
  const [jugadoresActuales, setJugadoresActuales] = useState("-")
  const [premioActual, setPremioActual] = useState("-")
  const [ultimoGanador, setUltimoGanador] = useState("-")
  const [totalBoletos, setTotalBoletos] = useState("-")
  const [totalPremios, setTotalPremios] = useState("-")
  const [totalDonado, setTotalDonado] = useState("-")
  const [totalToken, setTotalToken] = useState("-")

  useEffect(() => {
    const verDatos = async () => {
      const sorteosContrato = await crearContrato();
      const sorteosId = await sorteosContrato.verSorteoId();
      const jugadoresActuales = await sorteosContrato.numeroJugadores();
      const premioActual = await  sorteosContrato.verPremioActual();
      const ultimoGanador = await  sorteosContrato.verUltimoGanador();
      const totalBoletos = await sorteosContrato.totalBoletos();
      const totalPremios = await sorteosContrato.totalRepartido();
      const totalDonado = await sorteosContrato.totalDonado();
      const totalToken = await sorteosContrato.totalToken();
      setSorteos(sorteosContrato);
      setSorteosId(sorteosId.toString());
      setJugadoresActuales(jugadoresActuales.toString());
      setPremioActual(parseInt(premioActual._hex)/ (10 ** 18));
      setUltimoGanador(ultimoGanador);
      setTotalBoletos(totalBoletos.toString());
      setTotalPremios(parseInt(totalPremios._hex)/ (10 ** 18));
      setTotalDonado(parseInt(totalDonado._hex)/ (10 ** 18));
      setTotalToken(parseInt(totalToken._hex)/ (10 ** 18));
    }
    verDatos();
  }, []);

  const crearContrato = () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const sorteosContrato = new ethers.Contract(sorteosAddress, sorteosAbi, signer)
    return sorteosContrato
  };

  const entrarSorteo = async (e) => {
    e.preventDefault();
    const boleto = e.target.elements[0].value;
    if (!boleto) return;
    if (typeof window.ethereum !== "undefined") {
      const sorteosContrato = crearContrato();
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      try {
        const transaccion = await sorteosContrato.entrarSorteo({
          value: ethers.utils.parseEther(boleto),
        })
        await listenForTransactionMine(transaccion, provider)
      } catch (error) {
        console.log(error)
      }
    } else {
      sorteoButton.innerHTML = "Por favor instala MetaMask"
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
      <div className="p-5 gradient-bg-welcome">

        <h1 className="text-3xl text-center text-white sm:text-5xl text-gradient">
          Sorteos Descentralizados<br />Los más seguros, confiables y transparentes
        </h1>
        <p className="mt-5 mb-5 font-light text-center text-white">
          5% del total acumulado será enviado automáticamente a la liquidez del Token BCLUB. <br />
          20% del total restante será donado automáticamente para las actividades sociales y de caridad. <br />
          80% del total restante será enviado automáticamente a un solo Ganador.
        </p>

      <div className="items-center justify-center">

        {/* Seccion Entrar Loteria */}
        <div className="flex flex-col items-center justify-start flex-1 w-full p-5 mt-5 mf:mt-0">
          <div className="flex flex-col items-center justify-center w-full p-5 md:w-96 white-glassmorphism2">

            <p className="text-white" > Costo de Boleto: 0.01 BNB </p>
            <p className="text-center text-white" > Mientras más envies y más veces participes </p>
            <p className="text-center text-white" > tienes más oportunidades de Ganar!! </p>
            <form className="w-full" onSubmit={e => entrarSorteo(e)}>
            <input id="sorteoButton" min="0.01" type="number" name="amount" step="0.01" className="w-full p-2 mt-2 text-sm text-white bg-transparent border-none rounded-sm white-glassmorphism" placeholder="Cantidad min 0.01" />
            <div className="h-[1px] mt-3 w-full bg-[#ee8a27] my-2" />

            {!currentAccount && (
            <button type="button" onClick={connectWallet}
              className="text-white w-full mt-2 border-[2px] p-2 border-[#ee8a27] hover:bg-[#ee8a27] rounded-full">
                <p className="text-base font-semibold text-white">
                    Conectar Billetera</p> </button>
            )}

             {/* Circulo de cargando */}
            {isLoading
              ? <Loader />
              : (
                <button type="submit" className="text-white w-full mt-2 border-[2px] p-2 border-[#ee8a27] hover:bg-[#ee8a27] rounded-full">
                  Entrar al sorteo </button>
              )}
              </form>
          </div>
        </div>

        {!currentAccount && (
        <h3 className="my-2 text-3xl text-center text-white">
          Conecta tu cuenta para ver los datos desde la Blockchain!!
        </h3> )}

        {/* Datos del Sorteo */}
      <div className="flex flex-col items-center justify-center flex-1 w-full gap-5 mf:flex-row">
        <div className="w-full p-5 mt-5 text-xl text-white white-glassmorphism2">
          <p> Sorteo Id: </p>
          <a className="text-[#ee8a27]" href={`https://testnet.bscscan.com/address/${sorteosAddress}`} target="_blank">
            {sorteosId} </a>
        </div>
        <div className="w-full p-5 mt-5 text-xl text-white white-glassmorphism2">
          <p> Jugadores Actuales: </p>
          <a className="text-[#ee8a27]" href={`https://testnet.bscscan.com/address/${sorteosAddress}`} target="_blank">
            {jugadoresActuales} Participantes </a>
        </div>
        <div className="w-full p-5 mt-5 text-xl text-white white-glassmorphism2">
          <p> Premio Actual: </p>
          <a className="text-[#ee8a27]" href={`https://testnet.bscscan.com/address/${sorteosAddress}`} target="_blank">
            {premioActual} BNB </a>
        </div>
        <div className="w-full p-5 mt-5 text-xl text-white white-glassmorphism2">
          <p> Último Ganador: </p>
          <a className="text-[#ee8a27]" href={`https://testnet.bscscan.com/address/${ultimoGanador}`} target="_blank">
          {shortenAddress(ultimoGanador)}</a>
        </div>
      </div>
      {/* Datos del Sorteo */}

        {/* Datos del Sorteo */}
      <div className="flex flex-col items-center justify-start flex-1 gap-5 mf:flex-row">
        <div className="w-full p-5 mt-5 text-xl text-white white-glassmorphism2">
          <p> Total Boletos: </p>
          <a className="text-[#ee8a27]" href={`https://testnet.bscscan.com/address/${sorteosAddress}`} target="_blank">
          {totalBoletos} Boletos</a>
        </div>
        <div className="w-full p-5 mt-5 text-xl text-white white-glassmorphism2">
          <p> Total Repartido: </p>
          <a className="text-[#ee8a27]" href={`https://testnet.bscscan.com/address/${sorteosAddress}`} target="_blank">
          {totalPremios} BNB</a>
        </div>
        <div className="w-full p-5 mt-5 text-xl text-white white-glassmorphism2">
          <p className="text-white" > Total Donado: </p>
          <a className="text-[#ee8a27]" href={`https://testnet.bscscan.com/address/${sorteosAddress}`} target="_blank">
          {totalDonado} BNB </a>
        </div>
        <div className="w-full p-5 mt-5 text-xl text-white white-glassmorphism2">
          <p className="text-white" > Total Token: </p>
          <a className="text-[#ee8a27]" href={`https://testnet.bscscan.com/address/${sorteosAddress}`} target="_blank">
          {totalToken} BNB </a>
        </div>
      </div>
        {/* Datos del Sorteo */}

          </div>
        </div>
  )
}

export default Sorteos



//min 50:50  https://www.youtube.com/watch?v=8ElPDw0laIo