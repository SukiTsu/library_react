import React from "react";
import "../assets/css/home.css";
import Navbar from "./components/presentation/Navbar";
import Sidebar from "./components/presentation/Sidebar";


export default function Home() {
  return (
    <div className="homepage">
      <Navbar />
      <Sidebar />
    </div>
  );
}
