import React from "react";
import ArrowShape from "../assets/shape.png";
import TeamPeople from "../assets/team.png";
export default function Team() {
  return (
    <>
      <section className="container mx-auto p-6">
        <div>
          <img src={TeamPeople} alt="team" className="mx-auto" />
          <div className="relative bg-secondary mx-auto max-w-6xl p-10 flex flex-col md:flex-row justify-between items-center gap-6 rounded-lg overflow-hidden">
            <h1 className="text-white font-bold text-2xl text-center md:text-left">
              Do you have any question? Feel free to contact us
            </h1>

            <button className="bg-white text-secondary uppercase text-sm font-semibold px-10 py-3 rounded-sm z-10">
              Contact us now
            </button>
            <img
              src={ArrowShape}
              alt="shape"
              className="absolute md:left-1/2 left-10"
            />
          </div>
        </div>
      </section>
    </>
  );
}
