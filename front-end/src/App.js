import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Show from "./pages/Show";
import Index from "./pages/Index";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import FourOFour from "./pages/FourOFour";

import AlbumIndex from "./pages/AlbumIndex";

function App() {
  return (
    <div className="">
        <main>
        <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/songs" element={<Index />} />
          <Route path="/songs/:id" element={<Show />} />
          <Route path="/songs/new" element={<New />} />
          <Route path="/songs/:id/edit" element={<Edit/>} />
          <Route path="*" element={<FourOFour />} />
      </Routes>

      <Routes>
        <Route path="/albums" element={<AlbumIndex/>}/>
      </Routes>
        </main>
    </div>
  );
}

export default App;
