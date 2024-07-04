import React from "react";
import States from "../assets/states.png";
export default function Map() {
  return (
    <>
      <section>
        <div className="container max-w-5xl mx-auto text-center py-20">
          <h1 className="pb-6 text-2xl font-normal text-black">
            Those states we provide donation
          </h1>
          <p>
            We are organizing a program on January 20, 2019 to help the homeless
            people.
          </p>
          <p className="pb-10">
            Our aim is to provide them a specific place to live.
          </p>
          <img src={States} alt="map" className="max-w-screen" />
        </div>
      </section>
    </>
  );
}
