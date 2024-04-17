
import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import ChatbotPage from "./pages/ChatbotPage";
import Homepage from "./pages/Homepage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/chatbotpage" element={<ChatbotPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
