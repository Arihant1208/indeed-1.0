"use client"
import React from "react";
import axios from "axios";

const SignUp = async () => {
  const handelsubmit = (event:any) => {
    event.preventDefault(); // Prevent the default form submission behavior

    console.log("hey")
    const URL = "http://localhost:3000/api/auth";
    return axios
      .get(URL)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="text-black flex w-full  bg-slate-500">
      <div className="flex justify-center m-auto">
        <form onSubmit={handelsubmit}>
          <div>
            <label htmlFor="">Username</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">email</label>
            <input type="email" />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
