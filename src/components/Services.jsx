import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiTransfer, } from "react-icons/bi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row items-start justify-start p-3 m-2 cursor-pointer white-glassmorphism2 hover:shadow-2xl ">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="flex flex-col flex-1 ml-5">
      <h3 className="mt-2 text-lg text-white">{title}</h3>
      <p className="mt-1 text-sm text-white md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex items-center justify-center w-full gradient-bg-services">
    <div className="flex flex-col items-center justify-between px-4 py-12 mf:flex-row md:p-20">
      <div className="flex flex-col items-start justify-start flex-1">
        <h1 className="py-2 text-3xl text-white sm:text-5xl text-gradient ">
          Los mejores servicios
          <br />
            en una sola plataforma
        </h1>
        <p className="w-11/12 my-2 text-base font-light text-left text-white md:w-9/12">
          BitcoinClub es una plataforma descentralizada sencilla y facil de usar ademas somos
          una comunidad que apoya todas las actividades sociales y de caridad
        </p>
      </div>

      <div className="flex flex-col items-center justify-start flex-1">
        <ServiceCard
          color="bg-[#2952E3]"
          title="El exchange de más bajas comisiones"
          icon={<BiTransfer fontSize={25} className="text-white" />}
          subtitle="Transacciones rápidas y seguras.
          Mantenemos las más bajas comisiones del Exchange en el 0.1%"
        />
        <ServiceCard
          color="bg-[#FFFFFF]"
          title="Transacciones más rapidas"
          icon={<GrMoney fontSize={25} className="text-white" />}
          subtitle="La velocidad es muy importante.
          Utilizamos la red de Binance Smart Chain para mayor velocidad"
        />
        <ServiceCard
          color="bg-[#000000]"
          title="Loteria Descentralizada"
          icon={<GiPerspectiveDiceSixFacesRandom fontSize={36} className="text-white" />}
          subtitle="Loteria Descentralizada y autónoma.
          La primer loteria confiable transparente y descentralizada"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Donaciones sociales y de caridad"
          icon={<FaHandHoldingHeart fontSize={25} className="text-white" />}
          subtitle="Socialmente responsable.
          Por cada transacción que realizes apoyas a las actividades de caridad."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Seguridad garantizada"
          icon={<BsShieldFillCheck fontSize={25} className="text-white" />}
          subtitle="Transparencia en las transacciones.
          Todas las transacciones estan almacenadas en la Blockchain"
        />
      </div>
    </div>
  </div>
);

export default Services;