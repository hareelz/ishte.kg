import React from "react";

import MainRoutes from "./routes/MainRoutes";
import SideBar from "./components/SideBar/SideBar";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
