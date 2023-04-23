import React from "react";
import { Link } from "react-router-dom";

function BackToJsButton() {
  return (
    <div>
      <button className="btn btn-primary m-2 mt-10">
        <Link to={`/JsIndex`}>Back</Link>
      </button>
    </div>
  );
}

export default BackToJsButton;
