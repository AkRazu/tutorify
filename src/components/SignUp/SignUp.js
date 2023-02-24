import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import girlBg from "../../assets/Girl/bg-login.png";
import { FaGoogle } from "react-icons/fa";
const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);
    return (
        <div>
             <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img className="lg:w-1/2 w-auto m-auto" src={girlBg} alt="girl" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-control">
                  <h1 className="text-3xl text-center font-semibold">Login</h1>
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", {
                      required: true,
                    })}
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <p className="mt-2 text-red-600">Email is required</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password && (
                    <p className="mt-2 text-red-600">Password is required</p>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
            <span className=" flex items-center justify-center">
              <hr className="w-1/3 border-1 border-gray-300 mx-2" />
              <p className="mx-2">OR</p>
              <hr className="w-1/3 border-1 border-gray-300 mx-2" />
            </span>
            <div className="card-body">
              <button className="btn">
                <FaGoogle className="mr-5" />Login with Google{" "}
              </button>

              <p className="text-center my-2">Don't have and account? <Link className="text-primary" to='/signup'>Sign up</Link> </p>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SignUp;