import React, { useRef, useState } from "react";
import Header from "./Header";
import validate from "../utils/validate";

const Login = () => {
    const [errorMessage ,seterrorMessage] = useState(null);
  const [isSignIn, setSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const ToggleSignIN = () => {
    setSignIn(!isSignIn);
  };

  const handleCLickButton = () => {
  const msg = validate(email.current.value,password.current.value)
  seterrorMessage(msg)
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute my-44 w-3/12 p-10 mx-auto right-0 left-0 bg-opacity-70 bg-black text-white"
      >
        <h1 className="font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="name"
            placeholder="Enter Your Full Name"
            className=" my-3 p-4 w-full"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Mobile Number"
          className=" my-3 p-4 w-full text-black"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" p-4 w-full my-3 text-black"
        />

        <p className="text-red-500">{errorMessage}</p>
        <button
          className="bg-red-800 px-6 py-3 w-full my-2 rounded-md font-bold text-xl"
          onClick={handleCLickButton}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <h1 className="my-6 font-bold" onClick={ToggleSignIN}>
          {isSignIn
            ? "New to Netflix?Sign up now."
            : " Already registered? Sign In now."}
        </h1>
      </form>
    </div>
  );
};

export default Login;
