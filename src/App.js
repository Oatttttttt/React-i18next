import Attraction from "./components/Attraction";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Attraction />} />
        <Route path="/:lang" element={<Attraction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
