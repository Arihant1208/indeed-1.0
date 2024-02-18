import React from "react";

const SignUp = () => {
  return (
    <div className="text-black flex  bg-slate-500 w-full">
      <div className="flex justify-center">
        <form>
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
        </form>
      </div>
    </div>
  );
};

export default SignUp;
