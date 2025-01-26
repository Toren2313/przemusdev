import React from "react";

function MainPage() {
  return (
    <div className="h-screen w-screen">
      <div className="absolute h-96 w-80 border-[1px] border-white rounded-lg flex flex-col items-center justify-center">
        <h1 className="text-3xl p-4">Przemyslaw</h1>
        <p className="text-sm text-center text-secondary_text p-4">
          Web Developer specializing in React.js and TailwindCSS with a strong command of JavaScript/TypeScript.
          Proficient in building REST APIs using Express and Nest.js. Skilled in deploying code to production and
          managing databases like MongoDB, MySQL, and PostgreSQL. Also I can create simple desktop applications with C#
          and console applications in C++.
        </p>
      </div>
    </div>
  );
}

export default MainPage;
