import React from "react";
import boy from "../../../assets/Purchase/Purchase.png";
const Purchase = () => {
  return (
    <div>
      <div>
        <p className="text-[#FB9C46] font-semibold text-center">
          What do you want to learn ?
        </p>
        <h2 className="text-5xl my-5 text-center font-semibold">What We Offer</h2>
        <span className="flex items-center justify-center">
          <hr className="w-1/6 mr-2 border-1 border-[#FB9C46]" />
          <p className="text-[#FB9C46] font-semibold text-center">
            I want to learn{" "}
          </p>
          <hr className="w-1/6 ml-2 border-1 border-[#FB9C46]" />
        </span>
      </div>
      <div className="hero bg-base-100 mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={boy} className="max-w-sm rounded-lg" alt="Man" />
          <div>
            <h1 className="text-4xl font-semibold">
              Purchase your awesome <br /> lessons and find your tutors{" "}
            </h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem{" "}
              <br />
              habitant a tincidunt cras accumsan integer suscipit. Libero
              accumsan eget aliquet.
            </p>
            <button className="btn btn-primary border-0 text-white bg-[#FB9C46]">Book Your Lessons</button>
            <button className="btn ml-2 text-[#FB9C46] btn-outline border-[#FB9C46]">Book Your Lessons</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
