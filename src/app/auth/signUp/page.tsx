import React from "react";
import axios from "axios";
import { error } from "console";

const SignUp = async () => {
  const handelsubmit = () => {
    const URL = "";
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
          <button>submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
