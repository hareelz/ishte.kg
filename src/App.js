import React from "react";

import MainRoutes from "./routes/MainRoutes";
import SideBar from "./components/SideBar/SideBar";
import Navbar from "./components/Navbar/Navbar";
import NavbarUser from "./components/Navbar/NavbarUser";

const App = () => {
  return (
    <div className="app">
      <NavbarUser />
      {/* <Navbar /> */}
      <MainRoutes />
    </div>
  );
};

export default App;
