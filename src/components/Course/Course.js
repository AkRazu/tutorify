import React from "react";

const Course = ({ course ,setCourseJoin}) => {
  const { _id, image, topic, name, details, rating } = course;
  
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-primary badge-outline">{topic}</div>
        </h2>
        <div className="rating rating-sm">
          <input
            type="radio"
            name="rating-5"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-5"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-5"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-5"
            className="mask mask-star-2 bg-orange-400"
          />
          <p className="text-orange-400 font-semibold pl-2">{rating}</p>
        </div>

        <p>{details.slice(0, 90)}</p>
        <div className="card-actions justify-between">
          <h1 className="text-3xl font-semibold">Free</h1>
          

          <label onClick={()=>setCourseJoin(course)} htmlFor="my-modal-3" className="btn btn-primary">
            Join
          </label>
        </div>
      </div>
    </div>
  );
};

export default Course;
