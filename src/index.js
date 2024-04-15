import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyRoutes from "./routes/MyRoutes";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import VideoPlayer from "./components/VideoPLayer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <MyRoutes />
    {/* <VideoPlayer/> */}
  </BrowserRouter>
);
