import React from "react";
import Navbar from "./Navbar";
/* 

nac razlog za pitch zasto radimo koji je utjecaj 
na okolis koliko se smeca napravi
kolika je šteta 

prekrasni tanjur a nakon toga iducem s
smece 
posljedicce restorana
stavit brojeve statistiku koja je vezana za zagađivanje

cili turistici sektor

more turista dolazi radi mora u koje upada hrpa plastike 

svjesni smo problema al neznamo odakle krenut(misli se na restorane i hotele tj vlasnike)
mi bi bili oni koji im zelimo pomoci 

edukacija restorana i hotela
certifikat restoranima i hotela
osvještavanje zajednice


drukciji smo zbog toga sto 
 dajemo potporu i povjernje resoranima kroz brend da njihovi klijenti 
znaju da je restoran odgovoran

predlazemo proces, edukaciju, pristup

koji su certifikati? sto jednostavnije


statement na kraju

tjedno pojemo plastike kolicine jedne kreditne kartice
nadjena je u vodi, mlijeku, itd.

ne zelimo plastiku u 

*/
const Hero = () => {
  return (
    <div className="container mx-auto my-10 ">
      <div className="bg-[#fff5f1] px-6 lg:px-16 py-10 rounded-3xl">
        <Navbar />
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
              Jedinstven pristup <br className="lg:flex hidden" />{" "}
              certificiranju turističkih objekata{" "}
              <br className="lg:flex hidden" /> i očuvanju okoliša
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500">
              Proces, edukacija i pristup Certifikat
              <br className="lg:flex hidden" /> access on mobile and desktop
            </p>
            <button className="btn btn-sm lg:btn-lg bg-[#01b636] text-white rounded-full border-none w-36 lg:w-44 capitalize">
              O nama
            </button>
          </div>
          <img src="/recycle.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
