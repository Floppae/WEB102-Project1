import React from "react";

//props: Name of site, photo, link
const Card = (props) => {
  return (
    <div className="w-56 h-80 shadow-lg border-solid border-4 border-slate-400 rounded-lg text-black">
      <div className="w-full h-4/6">
        <img className="w-full h-full" src={props.img} />
      </div>
      <div className="w-full h-2/6 flex flex-col items-center p-2">
        <h1 className="w-full h-1/2 text-center">{props.name}</h1>
        <button
          className="bg-slate-400 rounded-full w-full h-1/2"
          onClick={() => (window.location.href = props.link)}
        >
          Link
        </button>
      </div>
    </div>
  );
};

export default Card;
