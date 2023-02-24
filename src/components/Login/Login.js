import React, { useEffect } from "react";
import { Link,useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import girlBg from "../../assets/Girl/bg-login.png";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase";
import { getAuth } from "firebase/auth";
import app from "../../Firebase/firebase";
const Login = () => {
  const auth = getAuth(app);
  let location = useLocation();
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
    toast.success("Login successful");
    navigate(from, { replace: true });
  };

  if (user) {
    navigate("/");
    console.log(user);
  }
  
  if (user2) {
    navigate("/");
  }
  return (
    <div>
      <ToastContainer />

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
                  {error?.message ? (
                    <p className="mt-2 text-red-600">{error.message}</p>
                  ) : (
                    ""
                  )}
                  {error2?.message ? (
                    <p className="mt-2 text-red-600">{error2.message}</p>
                  ) : (
                    ""
                  )}
                  <label className="label">
                    <Link to="/" className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                  {loading ? (
                    <progress className="progress w-56 mx-auto"></progress>
                  ) : (
                    ""
                  )}
                  {loading2 ? (
                    <progress className="progress w-56 mx-auto"></progress>
                  ) : (
                    ""
                  )}
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
              <button onClick={() => signInWithGoogle()} className="btn">
                <FaGoogle className="mr-5" />
                Login with Google{" "}
              </button>

              <p className="text-center my-2">
                Don't have and account?{" "}
                <Link className="text-primary" to="/signup">
                  Sign up
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
