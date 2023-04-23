import React from "react";
import { Link } from "react-router-dom";

function JsIndex() {
  return (
    <div className="flex flex-col h-screen w-full bg-yellow-400 justify-center items-center">
      <h1 className="text-lg font-bold">JavaScript Index</h1>
      <ul className="font-medium text-blue-700 list-inside list-disc">
        <li>
          <Link to={`Js1`}>Two Sum</Link>
        </li>
        <li>
          <Link to={`Js58`}>Length of Last Word</Link>
        </li>
        <li>
          <Link to={`Js1480`}>Running Sum of 1d Array</Link>
        </li>
        <li>
          <Link to={`Js1523`}>Count Odd Numbers in an Interval Range</Link>
        </li>
        <li>
          <Link to={`Js2235`}>Add Two Integers</Link>
        </li>
      </ul>
      <button className="btn btn-primary m-2 mt-10">
        <Link to={`/`}>Home</Link>
      </button>
    </div>
  );
}

export default JsIndex;
