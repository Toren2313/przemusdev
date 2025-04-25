import IProjectCardProps from "../interfaces/IProjectCardProps";
import { FiExternalLink } from "react-icons/fi";
import { FaUnlock, FaLock } from "react-icons/fa";

function Card(props: IProjectCardProps) {
  const openInNewTab = (url: string | URL): void => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="max-h-[32rem] h-[32rem] max-w-[34rem] w-[34rem] flex justify-center px-8">
      <div className="max-w-[34rem] w-full h-auto max-h-80 bg-gradient-to-tr from-neon_violet via-pink-600 to-main_pink p-1 rounded-lg container">
        <article className="w-full h-full">
          <div className="w-full h-full bg-secondary_bg">
            <img className="max-w-full w-full h-full max-h-full rounded-lg" src={props.imgSrc} />
          </div>
        </article>
        <div className="w-full flex flex-col items-start mt-4">
          <h1 className="text-2xl text-wrap font-dm_sans font-bold p-1 self-start">{props.title}</h1>
          <p className="text-wrap w-full h-16 text-clip font-dm_sans p-1">{props.description}</p>
          <nav className="max-w-72 max-h-10 w-72 h-10 flex flex-row items-center justify-start rounded-lg gap-5">
            {props.externaLink && props.openSrc === true ? (
              <button
                onClick={() => openInNewTab(props.externaLink!)}
                className="w-1/2 h-full bg-secondary_bg rounded-lg flex flex-row justify-center items-center"
              >
                <p className="text-base font-bold text-center w-3/4 h-full font-dm_sans p-1">repository</p>
                //FIXME:naprawic ten tekst zeby byl na srodky frajer
                <FiExternalLink className="m-2" />
              </button>
            ) : null}
            <div
              style={{
                backgroundColor: `${props.openSrc ? "#4ade80" : "#dc2626"}`,
              }}
              className="w-1/2 h-full flex flex-row justify-center items-center gap-1 rounded-lg"
            >
              <p className="flex justify-center items-center w-full h-full text-clip text-center text-base font-bold font-dm_sans p-1">
                {props.openSrc ? `open source` : "closed source"}
                {props.openSrc ? <FaUnlock className="m-1" /> : <FaLock className="m-1" />}
              </p>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Card;
