import React from "react";

const Values = () => {
  return (
    <div className="container mx-auto py-20">
      <p className="text-base lg:text-xl font-medium text-gray-500 text-center">
        Zašto odabrati nas
      </p>
      <p className=" text-3xl lg:text-5xl font-semibold text-gray-500 text-center mt-3">
        Naše vrijednosti
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20">
        {/* <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v1.svg" alt="v1" />
          <p className="text-2xl font-semibold">Speaking clubs</p>
          <p className="text-gray-500 text-center">
            In our school you will practice <br /> your speaking skills and just
            get <br /> a lot of positive emotions!
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v2.svg" alt="v1" />
          <p className="text-2xl font-semibold">Quality control</p>
          <p className="text-gray-500 text-center">
            In our school you will practice <br /> your speaking skills and just
            get <br /> a lot of positive emotions!
          </p>
        </div>{" "}
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v3.svg" alt="v1" />
          <p className="text-2xl font-semibold">Progress analysis</p>
          <p className="text-gray-500 text-center">
            In our school you will practice <br /> your speaking skills and just
            get <br /> a lot of positive emotions!
          </p>
        </div> */}
        {[
          {
            title: "A lot of positive",
            text: "ačsodij aosoijdjačočsij asiodj ačoosi aisjd alsij dčaal ",
          },
          {
            title: "Teacher",
            text: "ašspodj špoasšp odjašpo jjpoasjd pojaspo jpšss pćosapć ",
          },
          {
            title: "REstoran",
            text: "alskdjalsdjalsijdč aaisojdoai ji ćajsdliaj lć ljmsaćdj ćj maćlsjd lćlj ",
          },
        ].map((item, key) => (
          <div key={key} className="flex flex-col gap-5 items-center">
            <img src="/certificate_2.svg" alt="v1" />
            <p className="text-2xl font-semibold">{item.title}</p>
            <p className="text-gray-500 text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
