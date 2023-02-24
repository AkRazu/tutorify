import React from "react";
import Rectangle from "../../../../assets/Hero/Rectangle 1.png";
import Man from "../../../../assets/Hero/Mask Group.png";
import Flag1 from "../../../../assets/Hero/flag-1.png";
import Flag2 from "../../../../assets/Hero/flag-2.png";
import Flag3 from "../../../../assets/Hero/flag-3.png";
const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div className="relative">
            <img
              src={Rectangle}
              alt="man"
              className="lg:w-auto  rounded-lg absolute -z-40"
            />
            <img
              className="w-1/4 md:block sm:hidden  absolute lg:-left-10 -left-3 top-32"
              src={Flag3}
              alt="flag"
            />
            <img className="w-1/4  absolute right-2" src={Flag2} alt="flag" />
            <img
              className="w-1/4  absolute xl:block hidden lg:-right-16 -right-2 lg:top-56 top-40"
              src={Flag1}
              alt="flag"
            />
            <img src={Man} alt="man" className="max-w-sm   rounded-lg z-40" />
          </div>
          <div>
            <span className="flex items-center">
              <p className="text-[#FB9C46] font-semibold">We are The Best</p>
              <hr className="w-1/4 ml-2 border-1 border-[#FB9C46]" />
            </span>
            <h1 className="lg:text-5xl text-3xl font-bold leading-normal">
              Learn Frome Home <br /> With{" "}
              <span className="text-[#FB9C46] font-bold text-5xl">
                The Best
              </span>{" "}
              <br /> Online Languange Tutors
            </h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Id
              interdum dui mollis . Suspendisse nulla :
            </p>
            <button className="btn btn-primary text-white border-0 bg-[#058E6E]">Try Free Lessons</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
