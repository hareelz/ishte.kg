import React from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "../components/Posts/Posts";
import Chat from "../components/Chat/Chat";
import AuthPage from "../components/Auth/AuthPage";
import HomePage from "../components/HomePage";
import AddPosts from "../components/AddPosts/AddPosts";
import { Filter } from "@mui/icons-material";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/add-posts" element={<AddPosts />} />
        <Route path="/filter" element={<Filter />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
