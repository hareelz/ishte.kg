import React from "react";
import MiniDrawer from "./components/SideBar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div className="app">
      {/* <img src="https://media.istockphoto.com/id/495755752/vector/kyrgyzstan-black-and-white-version-flag-rectangular-shape-icon.jpg?s=170667a&w=0&k=20&c=Do0ECtw28GUHipy-q5fwg6Yk9_drk-g3E3x2g_gvCTk=" /> */}
      <MiniDrawer />
      <div className="wrapper_block">
        <MainRoutes />
      </div>
    </div>
  );
};

export default App;
