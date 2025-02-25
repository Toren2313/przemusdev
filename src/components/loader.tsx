function Loader() {
  const customGradientText: string =
    "before:bg-gradient-to-tr before:from-neon_violet before:via-pink-600 before:to-main_pink before:text-transparent before:bg-clip-text";
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center bg-bg_color animate-disappearance">
      <h1
        data-fill-text="PrzemusDev"
        className={`relative text-9xl font-dm_sans capitalize text-transparent text-stroke before:absolute before:w-0 before:h-full before:left-0 ${customGradientText} before:overflow-hidden before:transition-cubic before:content-[attr(data-fill-text)] before:animate-expand`}
      >
        PrzemusDev
      </h1>
      <p className="font-dm_sans">{"By Przemus :3"}</p>
    </main>
  );
}

export default Loader;
