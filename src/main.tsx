import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import Particles from "./components/Core/Particles";
import Frame from "./components/Core/Frame";
import "./index.css";
import Login from "./pages/Login";
import Sidebar from "./components/Core/Sidebar";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => {
  const location = useLocation();
  return (
    <>
      <Frame />
      <Particles quantity={70} />
      {location.pathname !== "/" && <Sidebar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

document.addEventListener("contextmenu", (e) => e.preventDefault());

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
