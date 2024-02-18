"use client";
import React from "react";
import axios from "axios";

const SignUp = async () => {
  const handelsubmit = (event: any) => {
    event.preventDefault(); // Prevent the default form submission behavior

    console.log(event);
    const URL = "/api/auth";
    axios
      .post(URL, {
        username: event.target[0].value,
        email: event.target[1].value,
        password: event.target[2].value,
      })
      .then((res) => {
        console.log(res.data);
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
            <label>Username</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>email</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
