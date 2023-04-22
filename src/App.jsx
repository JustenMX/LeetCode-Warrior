// import React from "react";
import "./main.css";
import PageOne from "./pages/PageOne";

function App() {
  return (
    <>
      <div className="flex h-screen w-full bg-yellow-400 justify-center items-center">
        <h1 className="text-4xl font-bold text-center">LeetCode Warrior</h1>
        <img src="/JustenLogo.png" />
      </div>
      <PageOne />
    </>
  );
}

export default App;
