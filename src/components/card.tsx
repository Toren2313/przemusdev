import IProjectCardProps from "../interfaces/IProjectCardProps";

function Card(props: IProjectCardProps) {
  return (
    <div className="max-h-96 h-96 max-w-[34rem] w-[34rem] flex justify-center px-8">
      <div className="max-w-[34rem] w-full h-auto max-h-80 bg-gradient-to-tr from-neon_violet via-pink-600 to-main_pink p-1 rounded-lg container">
        <article className="w-full h-full">
          <div className="w-full h-full bg-secondary_bg">
            <img className="max-w-full w-full h-full max-h-full rounded-lg" src={props.imgSrc} />
          </div>
        </article>
        <h1 className="text-2xl text-wrap font-dm_sans font-bold p-1 self-start">{props.title}</h1>
        <p className="text-wrap w-full h-16 text-clip font-dm_sans p-1">{props.description}</p>
        <nav className="flex flex-col w-full h-1/4"></nav>
      </div>
    </div>
  );
}

export default Card;
