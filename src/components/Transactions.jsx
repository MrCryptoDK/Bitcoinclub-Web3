import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import useFetch from "../hooks/useFetch";
import { shortenAddress } from "../utils/shortenAddress";

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  const gifUrl = useFetch({ keyword });

  return (
    <div className="white-glassmorphism2 m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="justify-start w-full p-5 mb-6 display-flex">
         <a href={`https://rinkeby.etherscan.io//address/${addressFrom}`} target="_blank" rel="noreferrer">
            <p className="text-base text-white">Desde:   {shortenAddress(addressFrom)}</p>
          </a>
          <a href={`https://rinkeby.etherscan.io//address/${addressTo}`} target="_blank" rel="noreferrer">
            <p className="text-base text-white">Para:   {shortenAddress(addressTo)}</p>
          </a>
          <br />
          <p className="text-base text-white">Cantidad: {amount} BNB</p>
          {message && (
            <>
              <p className="text-base text-white">Mensaje: {message}</p>
            </>
          )}
        </div>
        <img
          src={gifUrl || url}
          alt="Gif"
          className="object-cover w-full h-64 rounded-md shadow-lg 2xl:h-96"
        />
        <div className="blue-glassmorphism border-[2px] p-2 border-[#ee8a27] hover:bg-[#ee8a27] p-3 px-5 cursor-pointer w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="font-bold text-white">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div className="flex items-center justify-center w-full 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col px-4 py-12 md:p-12">
        {currentAccount ? (
          <h3 className="my-2 text-3xl text-center text-white">
            Transacciones Recientes
          </h3>
        ) : (
          <h3 className="my-2 text-3xl text-center text-white">
            Conecta tu cuenta para ver las ultimas transacciones!
          </h3>
        )}

        <div className="flex flex-wrap items-center justify-center mt-10">
          {transactions.reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};



export default Transactions;