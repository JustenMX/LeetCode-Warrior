// import React from "react";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import JsIndex from "./pages/JsIndex";
import Js1 from "./pages/javascript/Js1";
import Js58 from "./pages/javascript/Js58";
import Js1480 from "./pages/javascript/Js1480";
import Js1523 from "./pages/javascript/Js1523";
import Js2235 from "./pages/javascript/Js2235";
import Js2619 from "./pages/javascript/Js2619";
import Js2620 from "./pages/javascript/Js2620";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/JsIndex" element={<JsIndex />} />
          <Route path="/JsIndex/Js1" element={<Js1 />} />
          <Route path="/JsIndex/Js58" element={<Js58 />} />
          <Route path="/JsIndex/Js1480" element={<Js1480 />} />
          <Route path="/JsIndex/Js1523" element={<Js1523 />} />
          <Route path="/JsIndex/Js2235" element={<Js2235 />} />
          <Route path="/JsIndex/Js2619" element={<Js2619 />} />
          <Route path="/JsIndex/Js2620" element={<Js2620 />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
