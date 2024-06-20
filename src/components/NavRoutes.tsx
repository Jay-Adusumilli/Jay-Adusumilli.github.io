import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import About from "./About";
import Projects from "./Projects";
import Links from "./Links";
import Home from "./Home";

function NavRoutes() {
  return (
    <>
      <NavBar title="Jay Adusumilli " />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/links" element={<Links />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default NavRoutes;
