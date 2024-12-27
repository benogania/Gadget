import React from "react";

const Signup = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center place-items-center">
      <div className="w-[400px] h-[500px] border shadow-lg flex flex-col justify-center place-items-center gap-5 rounded-xl">
        <div className="w-[75%]">
          <input placeholder="Username" className="h-10 w-full border outline-none px-3" />
        </div>
        <div className="w-[75%]">
          <input placeholder="email" className="h-10 w-full border outline-none px-3"/>
        </div>
        <div className="w-[75%]">
          <input placeholder="password" className="h-10 w-full border outline-none  px-3"/>
        </div>
      </div>
    </div>
  );
};

export default Signup;
