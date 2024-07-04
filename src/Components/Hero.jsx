import React from "react";
import play from "../assets/play.png";
import profile from "../assets/ShahjalalRafi.png";
export default function Hero() {
  return (
    <section className="container flex flex-col md:flex-row mx-auto justify-between items-center px-16 py-20 gap-6">
      <div>
        <h1 className="text-7xl font-bold pb-6 capitalize">
          <span className="text-primary">Tawilwind CSS</span> Course Instructor
        </h1>
        <h2 className="text-7xl text-bold text-secondary pb-6">Ayon Bit</h2>
        <p className="font-bold capitalize">Founder,Incognito Solution</p>
        <div className="flex gap-6 items-center pt-8">
          <button className="btn_secondary">Get Token</button>
          <div className="flex gap-2 items-center">
            <span className="uppercase font-bold">White Paper</span>
          </div>
          <img src={play} alt="play" />
        </div>
      </div>
      <div>
        <img src={profile} alt="profile" />
      </div>
    </section>
  );
}
