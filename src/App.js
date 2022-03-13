import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Jadwal from "./pages/jadwal";
import Pelaksanaan from "./pages/pelaksanaan";

function App() {
  return (
    <>
      <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="jadwal" element={<Jadwal/>} />
        <Route path="pelaksanaan" element={<Pelaksanaan/>} />
      </Routes>
    </>
  );
}

export default App;
