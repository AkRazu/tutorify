import React, { useState } from "react";
import { format } from "date-fns";
const Join = ({ setCourseJoin, selected }) => {
  const { name } = setCourseJoin;

  const handelSubmit = event=>{
    event.preventDefault()
    const form = event.target;
    const date = form.date.value;
    const name = form.name.value;
    const email = form.email.value;
    const textArea = form.textArea.value;
    console.log(date,name,email,textArea);
    form.reset();

  }
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-2">{name}</h3>

          <form onSubmit={handelSubmit}>
            <input
              type="text"
              disabled
              name="date"
              value={`${format(selected, "PP")}`}
              className="input input-bordered w-full mb-2"
            />
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full mb-2"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full mb-2"
            />
            <textarea
              required
              name="textArea"
              className="textarea textarea-bordered w-full mb-2"
              placeholder="Why you want to join this course ?"
            ></textarea>
            <input className="btn btn-secondary" type="submit" value="Done" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Join;
