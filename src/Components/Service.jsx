import React from "react";
import carrer1 from "../assets/career1.png";
import carrer2 from "../assets/career2.png";
import carrer3 from "../assets/career3.png";
import carrer4 from "../assets/career4.png";
import carrer5 from "../assets/career5.png";
import carrer6 from "../assets/career6.png";
import downico from "../assets/down.png";
export default function Service() {
  return (
    <>
      <section className="bg-[#eef5ff]">
        <div className="text-center items-center pt-16 md:pt-32">
          <p className="font-bold text-primary capitalize">
            service we work for
          </p>
          <h1 className="font bold text-2xl capitalize">
            What care we do for your career
          </h1>
          <img src={downico} alt="downico" className="mx-auto pt-6" />
        </div>

        <div className="container bg-white mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-20 gap-8">
          <div className="flex flex-col gap-2 text-center">
            <img src={carrer1} alt="career" className="mx-auto" />
            <h1 className="font-bold text-xl">Coding</h1>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text
            </p>
            <p className="text-primary font-bold text-sm">
              Learn more <span> &gt;</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <img src={carrer2} alt="career2" className="mx-auto" />
            <h1 className="font-bold text-xl">Cmmunication</h1>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text
            </p>
            <p className="text-primary font-bold text-sm">
              Learn more <span> &gt;</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <img src={carrer3} alt="career3" className="mx-auto" />
            <h1 className="font-bold text-xl">Growth</h1>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text
            </p>
            <p className="text-primary font-bold text-sm">
              Learn more <span> &gt;</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <img src={carrer4} alt="career4" className="mx-auto" />
            <h1 className="font-bold text-xl">Brain Storming</h1>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text
            </p>
            <p className="text-primary font-bold text-sm">
              Learn more <span> &gt;</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <img src={carrer5} alt="career5" className="mx-auto" />
            <h1 className="font-bold text-xl">Collaboration</h1>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text
            </p>
            <p className="text-primary font-bold text-sm">
              Learn more <span> &gt;</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <img src={carrer6} alt="career6" className="mx-auto" />
            <h1 className="font-bold text-xl">Help for Education</h1>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text
            </p>
            <p className="text-primary font-bold text-sm">
              Learn more <span> &gt;</span>
            </p>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 p-10 gap-6 md:gap-2">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-primary text-5xl font-light">254</h1>
            <p className="text-gray-500 text-sm">Successful Project</p>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-primary text-5xl font-light">3783</h1>
            <p className="text-gray-500 text-sm">People Impacted</p>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-primary text-5xl font-light">8M</h1>
            <p className="text-gray-500 text-sm">Money Donated</p>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-primary text-5xl font-light">60+</h1>
            <p className="text-gray-500 text-sm">Volunteer Involved</p>
          </div>
        </div>
      </section>
    </>
  );
}
