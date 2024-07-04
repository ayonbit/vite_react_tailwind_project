import React from "react";
import logo from "../assets/codeabc_circle.png";
import Dribble from "../assets/dribble.png";
import Facebook from "../assets/facebook.png";
import Github from "../assets/github.png";
import Twitter from "../assets/twitter.png";
export default function Footer() {
  return (
    <>
      <footer className="bg-[#EEF5FF] p-16 md:mt-20">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
          <div>
            <div className="flex gap-2 items-center">
              <img
                src={logo}
                alt="logo"
                className="w-10 h-10 md:w-20 md:h-20"
              />
              <h1 className="">Incognito Solution</h1>
            </div>
            <div className="flex flex-col gap-2">
              <p>Terms of use | Privacy</p>
              <p className="text-gray-400">Copyright by 2024 @Ayon Bit</p>
            </div>
          </div>
          <div>
            <div>
              <h1>About Us</h1>
            </div>
            <div className="flex flex-col gap-2">
              <p>Support Center</p>
              <p>Customer Support</p>
              <p>About Us</p>
              <p>Copyright</p>
            </div>
          </div>
          <div>
            <div>
              <h1>Our Information</h1>
            </div>
            <div className="flex flex-col gap-2">
              <p>Return Policy</p>
              <p>Refund Policy</p>
              <p>Terms & Conditions</p>
              <p>Terms of Service</p>
            </div>
          </div>
          <div>
            <div>
              <h1>My Account</h1>
            </div>
            <div className="flex flex-col gap-2">
              <p>Press inquiries</p>
              <p>Social Media</p>
              <p>Directories</p>
              <p>Site Map</p>
            </div>
          </div>
          <div>
            <div>
              <h1>Connect</h1>
            </div>
            <div>
              <div className="flex items-center gap-4 py-1">
                <img src={Facebook} alt="facebook" />
                <p>Facebook</p>
              </div>
              <div className="flex items-center gap-4 py-1">
                <img src={Twitter} alt="twitter" />
                <p>Twitter</p>
              </div>
              <div className="flex items-center gap-4 py-1">
                <img src={Github} alt="github" />
                <p>Github</p>
              </div>
              <div className="flex items-center gap-4 py-1">
                <img src={Dribble} alt="dribble" />
                <p>Dribble</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
