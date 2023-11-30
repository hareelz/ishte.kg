import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import AuthPage from "../components/AuthPage";
import AddPosts from "../components/AddPosts";
import Chat from "../components/Chat";
import Posts from "../components/Posts";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/add" element={<AddPosts />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
