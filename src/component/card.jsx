import React from "react";
import { Link } from "react-router-dom";

function Card({ ...props }) {
  return (
    <Link
      to={props.href}
      className="w-full relative rounded-md duration-500 bg-white group"
    >
      {props.img && (
        <div className="w-full flex items-center justify-center p-5 h-[300px] bg-slate-100 rounded-sm overflow-hidden  group-hover:opacity-75 transition-all ease-in-out duration-300">
          <img
            src={props.img}
            alt="img"
            className="w-full object-contain max-h-[200px] mix-blend-multiply"
          />
        </div>
      )}
      <div className="py-4 ">
        {props.title && (
          <h4 className="text-xl font-bold text-gray-700 mb-2 leading-7">
            {props.title}
          </h4>
        )}
        {props.price && <h3 className="mb-4 text-lg">Rs.{props.price}</h3>}
        {props.content && <h6 className="text-lg mb-4">{props.content}</h6>}
        {props.button && (
          <Link
            to={props.href}
            className="text-lg text-white bg-black px-5 py-2 inline-block rounded-md font-semibold"
          >
            {props.button}
          </Link>
        )}
      </div>
    </Link>
  );
}

export default Card;
