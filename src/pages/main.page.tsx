import React from "react";

export default function MainPage() {
  return (
    <div className="min-h-screen w-screen pt-20">
      <div className="absolute h-[calc(100vh-5rem)] w-screen flex flex-col text-center items-center translate-y-20">
        <div className=" h-80 w-[64rem] rounded-lg flex flex-col items-center justify-start">
          <h1 className="text-3xl text-neon_violet p-5 pt-16">Hello, I'm Przemyslaw</h1>
          <p className="text-7xl font-dm_sans font-bold text-center text-white p-2">14yo freelance developer</p>
          {/* <p className="text-2xl font-poppins">5+</p> */}
        </div>
      </div>
    </div>
  );
}
