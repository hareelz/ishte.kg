import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import NavScrollExample from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div className="app">
      <NavScrollExample />
      <MainRoutes />
    </div>
  );
};

export default App;
