import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import girlBg from "../../assets/Girl/bg-login.png";
import { FaGoogle } from "react-icons/fa";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import app from "../../Firebase/firebase";
const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const auth = getAuth(app);
  const [signInWithGoogle,user2, loading2, error2] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const onSubmit = (data) => {
    console.log(data.email);
    createUserWithEmailAndPassword(data.email, data.password);
    toast.success("Sign up successful");
  };
  if (user) {
    navigate("/");
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
                  <h1 className="text-3xl text-center font-semibold">
                    Sign up
                  </h1>
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", {
                      required: true,
                    })}
                    type="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <span className="label-text">Email *</span>
                  </label>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Email is not correct",
                      },
                    })}
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <p className="mt-2 text-red-600">{errors.email.message}</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password *</span>
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
                </div>
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
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign up</button>
                </div>
              </div>
            </form>
            <span className=" flex items-center justify-center">
              <hr className="w-1/3 border-1 border-gray-300 mx-2" />
              <p className="mx-2">OR</p>
              <hr className="w-1/3 border-1 border-gray-300 mx-2" />
            </span>
            <div className="card-body">
              <button onClick={()=>signInWithGoogle()} className="btn">
                <FaGoogle className="mr-5" />
                Sign up with Google{" "}
              </button>

              <p className="text-center my-2">
                Already have an account?{" "}
                <Link className="text-primary" to="/login">
                  Login
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
