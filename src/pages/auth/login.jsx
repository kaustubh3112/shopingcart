import {
  LinkIcon,
  LockClosedIcon,
  LockOpenIcon,
} from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFireBase } from "../../Context/Firebase";
import { getAuth } from "firebase/auth";
import { app } from "../../Auth/fireBase";

const Login = () => {
  const fireBase = useFireBase();
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const [ErrorMessage, setErrorMessage] = useState({});
  const [user, setUser] = useState(null);
  useEffect(() => {
    fireBase.isLoggedIn ? navigate("/products") : "";
  }, [fireBase, navigate]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
    setErrorMessage({
      ...ErrorMessage,
      [name]: "",
    });
  };

  const loginForm = async (e) => {
    e.preventDefault();
    console.log("Login user ");
    try {
      await fireBase.signInWithUserPassword(
        loginFormData.email,
        loginFormData.password
      );
      console.log("Login successful!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center w-100 h-[calc(100vh-180px)]">
        <div className="w-full max-w-sm mx-auto">
          {user === null ? (
            <>
              <div className="d-block mb-5 text-center">
                <h2 className="text-2xl font-bold inline-flex items-center mb-3">
                  <LockClosedIcon className="w-5 h-5 me-2 text-slate-500" />{" "}
                  Login
                </h2>
              </div>
              <form className="w-full" onSubmit={loginForm}>
                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="border border-slate-200 rounded-md text-md px-3 py-2 w-full"
                    value={loginFormData.email}
                    onChange={inputHandler}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="Password"
                    placeholder="Password"
                    name="password"
                    className="border border-slate-200 rounded-md text-md px-3 py-2 w-full"
                    value={loginFormData.password}
                    onChange={inputHandler}
                  />
                </div>
                <div className="mb-1">
                  <button
                    type="submit"
                    className=" px-3 py-2 bg-[#FC3A7A] hover:bg-black inline-block text-white rounded-md  transition-all ease-in-out duration-500 w-full"
                  >
                    Submit
                  </button>
                </div>
                <p className="text-sm mb-1 text-center ">OR</p>
                <div className="mb-3">
                  <button
                    onClick={fireBase.signInWithGoogle}
                    className=" px-3 py-2 bg-black hover:bg-[#FC3A7A] inline-block text-white rounded-md  transition-all ease-in-out duration-500 w-full"
                  >
                    Login with google
                  </button>
                </div>
                <div className="mb-3 text-center  mt-14">
                  <p className="text-sm">Don’t have an account?</p>
                  {/* <Link to="/forget" className="text-sm text-slate-500">
                    Forget Password
                  </Link> */}
                </div>
                <div className="mb-3">
                  <Link
                    className=" px-3 py-2 bg-slate-800 hover:bg-black inline-block text-white rounded-md  transition-all ease-in-out duration-500 w-full text-center"
                    to="/register"
                  >
                    {" "}
                    Register now
                  </Link>
                </div>
              </form>
            </>
          ) : (
            <>
              <p>Hello {user} Great to have you back!</p>
              <button
                onClick={() => signOut(auth)}
                className=" px-3 py-2 bg-[#FC3A7A] hover:bg-black inline-block text-white rounded-md  transition-all ease-in-out duration-500 w-full"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
