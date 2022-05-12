import React from "react";

const Artist = () => {
  return (
    <div>
      <div className="w-20 ml-40 sm:ml-10  mt-40 bg-slate-500 bg">
        <h1 className="font-semibold font-mono text-9xl mx-8">
          My Hand Drawings
        </h1>
      </div>
      <div className="mt-20 ml-80 sm:ml-10 text-2xl font-base ">
        <h2 className="text-center">Hover to see them! </h2>
      </div>
      <div className="cont flex items-center p-1 grid-flow-col grid-rows-2 grid-cols-3 gap-2 rounded-lg  justify-center">
        <img
          src="2.jpg"
          className="im  rounded-full shadow-xl ease-in-out duration-500"
        />
        <img
          src="3.jpg"
          className="im rounded-full shadow-xl ease-in-out duration-500 "
        />
        <img
          src="7.jpg"
          className="im  rounded-full shadow-xl ease-in-out duration-500  hover:drop-shadow-2xl  hover:shadow-gray-500/40   "
        />
        <img
          src="4.jpg"
          className="im  rounded-full shadow-xl ease-in-out duration-500"
        />
        <img
          src="5.jpg"
          className="im  rounded-full shadow-xl ease-in-out duration-500"
        />
        <img
          src="6.jpg"
          className="im  rounded-full shadow-xl ease-in-out duration-500  hover:drop-shadow-2xl  hover:shadow-gray-500/40   "
        />
      </div>
      <div className="flex justify-center items-center pb-10 mt-20 grid-cols-3 gap-2 bg-black">
        <img
          src="1a.jpg"
          className=" mb-10 h:64 w-80 rounded border-l-4 border-orange-400 cursor-pointer   "
        />
        <img
          src="2a.jpg"
          className=" mt-40 h:80 w-80 rounded border-t-4 border-b-4 border-t-lime-600 border-b-orange-400  cursor-pointer"
        />
        <img
          src="3a.jpg"
          className="mt-60 h:80 w-80 rounded border-r-4 border-green-600 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Artist;
