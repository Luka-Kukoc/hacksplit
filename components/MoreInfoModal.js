import React from "react";
import { Disclosure } from "@headlessui/react";
import { BsFillPlusCircleFill } from "react-icons/bs";
const MoreInfoModal = () => {
  const info = [
    {
      title:
        "Koje vrste biorazgradivih proizvoda mogu zamijeniti ne-biorazgradive proizvode koje trenutno koristimo?",
      des: "Papirnate slamke, drveni pribor za jelo, papirnate vrećice, posude za hranu od škroba, samo su neki od primjera.",
    },
    {
      title:
        "Kakve su prednosti korištenja biorazgradivih proizvoda za okoliš?",
      des: "Biorazgradivi proizvodi smanjuju količinu otpada koji se odlaže na odlagalištima te se lakše i brže razgrađuju u prirodi, čime se smanjuje količina plastike i drugih materijala koji onečišćuju okoliš.",
    },
    {
      title:
        "Koje su prednosti certifikacije o korištenju biorazgradivih proizvoda?",
      des: "Certifikacija dokazuje da se restoran pridržava standarda za korištenje biorazgradivih proizvoda i time se ističe kao odgovoran poslovni subjekt koji brine o okolišu. Certifikacija također može privući ekološki osviještene klijente koji žele podržati poslovne subjekte koji se brinu o očuvanju okoliša.",
    },
    {
      title:
        "Kako mogu istaknuti svoje korištenje biorazgradivih proizvoda i certifikaciju koju sam stekao?",
      des: "Korištenje biorazgradivih proizvoda i certifikacija se mogu istaknuti na web stranici restorana, društvenim mrežama, jelovnicima i drugim promotivnim materijalima kako bi se privukla pažnja i informirali klijenti o ekološki osviještenom pristupu restorana.",
    },
    {
      title:
        "Kako se pravilno odlažu biorazgradivi proizvodi nakon upotrebe u restoranu?",
      des: "Biorazgradivi proizvodi se mogu odlagati na kompost, ili se mogu odvojiti od ostalog otpada i odlagati na odlagališta za biorazgradivi otpad.",
    },
    {
      title:
        "    Kako se mogu osigurati da korišteni biorazgradivi proizvodi stvarno zadovoljavaju potrebne standarde?",
      des: "Proizvodi se mogu provjeravati i testirati od strane neovisnih organizacija za certifikaciju ili se mogu kupovati od pouzdanih dobavljača koji već imaju relevantne certifikate.",
    },
  ];
  return (
    <div className="container mx-auto py-20">
      <p className="text-gray-500 text-2xl font-medium uppercase my-3">
        MORE INFO
      </p>
      <p className="text-gray-800 text-4xl font-medium capitalize mb-10">
        Common questions
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
        {info.map((inf, i) => {
          return (
            <Disclosure key={i}>
              {({ open }) => (
                <div className="group">
                  <Disclosure.Button className="flex flex-col group-hover:bg-[#01b636] group-focus:bg-[#01b636] w-full justify-between rounded-lg lg:rounded-full border border-gray-200 px-8 py-10 text-left text-sm font-medium  focus:outline-none ">
                    <div className="flex justify-between items-center w-full">
                      <span className="group-hover:text-white  group-focus:text-white">
                        {inf.title}
                      </span>
                      <BsFillPlusCircleFill
                        className={`${
                          open ? "rotate-180 transform" : ""
                        }  text-[#01b636] text-2xl group-hover:text-white  group-focus:text-white `}
                      />
                    </div>

                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 group-focus:text-white group-hover:text-white">
                      {inf.des}
                    </Disclosure.Panel>
                  </Disclosure.Button>
                </div>
              )}
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
};

export default MoreInfoModal;
