import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFireBase } from "../../Context/Firebase";

const Register = () => {
  const fireBase = useFireBase();
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setRegister({
      ...register,
      [name]: value,
    });
  };
  // useEffect(() => {
  //   fireBase.isLoggedIn ? navigate("/") : "";
  // }, [fireBase, navigate]);

  const regsiter = async (e) => {
    e.preventDefault();
    console.log("Signing up user ");
    await fireBase.signupWithUserPassword(register.email, register.password);
    navigate("/login");
    console.log("Successfully done! ");
  };

  return (
    <div className="flex justify-center items-center w-100 h-[calc(100vh-180px)]">
      <div className="w-full max-w-sm mx-auto">
        <div className="d-block mb-5 text-center">
          <h2 className="text-2xl font-bold inline-flex items-center mb-3">
            Register
          </h2>
          <p>Regsiter here to get some amazing offers</p>
        </div>
        <form className="w-full" onSubmit={regsiter} noValidate>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-slate-200 rounded-md text-md px-3 py-2 w-full"
              value={register.name}
              onChange={inputHandler}
              name="name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email"
              className="border border-slate-200 rounded-md text-md px-3 py-2 w-full"
              value={register.email}
              onChange={inputHandler}
              name="email"
            />
          </div>
          <div className="mb-3">
            <input
              type="Password"
              placeholder="Password"
              className="border border-slate-200 rounded-md text-md px-3 py-2 w-full"
              value={register.password}
              onChange={inputHandler}
              name="password"
            />
          </div>
          <div className="mb-3">
            <input
              type="Password"
              placeholder="Confirm Password"
              className="border border-slate-200 rounded-md text-md px-3 py-2 w-full"
              value={register.confirmPassword}
              onChange={inputHandler}
              name="confirmPassword"
            />
          </div>
          <div className="mb-3">
            <button
              type="submit"
              className=" px-3 py-2 bg-[#FC3A7A] hover:bg-black inline-block text-white rounded-md  transition-all ease-in-out duration-500 w-full"
            >
              Submit
            </button>
          </div>
          <div className="mb-3">
            <Link
              className=" px-3 py-2 bg-black inline-block text-white rounded-md  transition-all ease-in-out duration-500 w-full text-center"
              to="/login"
            >
              Back to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
