import React from 'react'
import Web3Modal from "web3modal";
import { ethers } from "ethers";

const providerOptions = {
}

const Form2 = () => {

  async function connectWallet() {
    try {
      const web3Modal = new Web3Modal( {
        cacheprovider: false,
        providerOptions,
      });
      const web3ModalInstance = await web3Modal.connect();
      const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalInstance);
      console.log(web3ModalProvider);
    }
    catch(error) {
      console.error(error);
    }
  }

  return (
    <>
    <div>
      <div className="flex items-center justify-center w-full p-5 text-3xl text-white bg-black"> Web3 Sorteos</div>
        
        <div className=" gradient-bg-services">
          <div className="items-center justify-center">
            
          <section className="p-5 text-white">
          <p> Precio de Entrada: <br />    0.01 BNB</p>
          <button className="mt-5 p-3 text-white  border-[#ee8a27]  border-[2px] hover:bg-[#ee8a27] rounded-full" > 
            Entrar ahora
          </button>
          </section>

          <h1 className="p-5 text-white">Web3Modal connection!</h1>
          <button onClick={connectWallet} className="mt-5 p-3 text-white  border-[#ee8a27]  border-[2px] hover:bg-[#ee8a27] rounded-full">
            Connect Wallet
          </button>

          <section className="p-5 text-white">
          <p> Admin: 
          Seleccionar ganador</p>
          <button className="p-3 mt-5  text-white  border-[#ee8a27]  border-[2px] hover:bg-[#ee8a27] rounded-full" >
            Generar ganador
          </button>
          </section>

          <section className="p-5 text-white">
            <div className="w-1/4 p-5 white-glassmorphism2">
              <div className="card-content">
                <div className="content ">
                  <h2> Loteria Historial</h2>
                  <div className="history-entry ">
                    <div> Ganador del Sorteo #1: </div>
                    <a className="text-orange-400" href="https://etherscan.io/address/0x1a084BefCA97BBF70F6B5116130563577a4b7F61" target="_blank">
                      0x1a084BefCA97BBF70F6B5116130563577a4b7F61</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="p-5 mt-5 text-white">
            <div className="w-1/4 p-5 white-glassmorphism2">
              <div className="card-content">
                <div className="content ">
                  <h2> Jugadores Actuales (14) </h2>
                    <a className="text-orange-400" href="https://etherscan.io/address/0x1a084BefCA97BBF70F6B5116130563577a4b7F61" target="_blank">
                      0x1a084BefCA97BBF70F6B5116130563577a4b7F61</a>
                </div>
              </div>
            </div>
          </section>

          <section className="p-5 text-white">
            <div className="w-1/4 p-5 white-glassmorphism2">
              <div className="card-content">
                <div className="content ">
                  <h2> Premio actual</h2>
                  <p className="text-orange-400" >10 BNB</p>
                </div>
              </div>
            </div>
          </section>
          
          </div>
        </div>
      


    </div>
    </>
  )
}

export default Form2



//min 50:50  https://www.youtube.com/watch?v=8ElPDw0laIo