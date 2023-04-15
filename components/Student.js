import React from "react";

const Student = () => {
  return (
    <div className="container mx-auto ">
      <p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
        Clients
      </p>
      <p className="text-gray-800 text-3xl lg:text-5xl font-medium capitalize">
        Our clients say
      </p>
      <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
        <img src="/assets/planb.jpg" alt="" className="rounded-2xl" />
        <div className="flex flex-col gap-5 items-start">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Plan B Bar
          </p>
          <div className="flex items-center gap-2">
            <img src="/assets/cro.svg" className="w-10 h-10" alt="itersfgjds" />
            <p className="text-gray-500">Pub</p>
          </div>
          <p className=" text-base sm:text-lg md:text-2xl lg:text-3xl">
            Dobivanje certifikacije za korištenje biorazgradivih proizvoda u
            našem restoranu bilo je jedna od najboljih odluka koje smo donijeli.
            Ne samo da smo smanjili naš utjecaj na okoliš, već smo privukli i
            nove mušterije koje cijene održivost. Certifikacija nam je također
            pomogla da se istaknemo na tržištu i postanemo prepoznatljiviji po
            našem angažmanu u zaštiti okoliša.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Student;
