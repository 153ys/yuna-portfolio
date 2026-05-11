import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Section/Navbar";
import CustomCursor from "./components/CutstomCursor";
import ProjectPage from "./pages/ProjectPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="projects/:id" element={<ProjectPage />} />
      </Routes>
    </>
  );
}