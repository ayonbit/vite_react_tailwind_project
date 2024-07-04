import React from "react";
import Calling from "../assets/meeting.png";
export default function Video() {
  return (
    <>
      <section>
        <div className="container mx-auto text-center p-2">
          <h1 className="font-bold text-2xl capitalize pb-6">
            Introducing video calling support
          </h1>
          <p className="pb-8">
            Every email, web page, and social media post makes an impression on
            your <br />
            customers. With our software you can be confident it's impression.
          </p>
          <p className="text-primary font-bold text-sm">
            Explore Details <span> &gt;</span>
          </p>
          <div className="relative">
            <img src={Calling} alt="calling" className="mx-auto" />
            <div className="callingBtn_top callingBtn_top_md">
              <p className="text-white md:font-bold">
                Hi, I’m Andry. Let me know what can I do for you
              </p>
            </div>
            <div className="callingBtn_bottom callingBtn_bottom_md">
              <p className="text-[#FABF62] md:font-bold font-thin">
                Your personal support assistance
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
