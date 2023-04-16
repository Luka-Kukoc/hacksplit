import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
        <img
          src="/logo.png"
          alt="logo"
          style={{ width: "150px", height: "100px" }}
        />
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
          <p>Početna</p>
          <p>Certifikacija</p>
          <p>O nama</p>
          <p>Training</p>
          <p>Kontakt</p>
          <p>Blog</p>
        </div>
        <button className="btn bg-white text-[#E0AA3E] border-none hover:bg-[#E0AA3E] hover:text-white capitalize rounded-full">
          Započni certifikaciju
        </button>
      </div>
    </div>
  );
};

export default Navbar;
