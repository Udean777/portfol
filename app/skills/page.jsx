import React from "react";
import NavPills from "../../components/NavPills";
import "animate.css";
import Navbar from "../../components/Navbar";
import tabs from "./skills";

export default function Skills() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="dark:text-white">
        <div className="animate__animated animate__fadeInDown">
          <NavPills tabs={tabs} />
        </div>
      </div>
    </main>
  );
}
