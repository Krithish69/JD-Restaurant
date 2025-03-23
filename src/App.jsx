import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./frontend/loginPage.jsx";
import Menu from "./frontend/Menu.jsx";
import ThankYouPage from "./frontend/ThankYou.jsx";
import Amenu from "./Admin/Amenu.jsx";
import Admin from "./Admin/AdminPage.jsx";
import QRCodeHandler from "./frontend/QRCodeHandler";
import Kitchen from "./kitchen/kitchen.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/JD-Restaurant/" element={<Login />} />
          <Route path="/JD-Restaurant/menu" element={<Menu />} />
          <Route path="/JD-Restaurant/thank-you" element={<ThankYouPage />} />
          <Route path="/JD-Restaurant/admin" element={<Admin />} />
          <Route path="/JD-Restaurant/amenu" element={<Amenu />} />
          <Route path="/JD-Restaurant/qr-handler" element={<QRCodeHandler />} />
          <Route path="/JD-Restaurant/kitchen" element={<Kitchen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
