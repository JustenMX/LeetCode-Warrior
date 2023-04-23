import React from "react";
import { Link } from "react-router-dom";
import JsIndex from "./JsIndex";

function LandingPage() {
  return (
    <>
      <div className="flex flex-col h-screen w-full bg-yellow-400 justify-center items-center">
        <h1 className="font-mono text-4xl font-bold text-center">
          LeetCode Warrior
        </h1>
        <h3 className="text-sm font-light text-center">developed by</h3>
        <img src="/JustenLogo.png" className="" />
        {/* Buttons */}
        <div className="flex flex-row">
          <button className="btn btn-primary m-2">
            <Link to={`/JsIndex`}>JavaScript</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
