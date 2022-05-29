import React from "react";
import { ArrowLeftIcon } from '@heroicons/react/solid'
import { useRouter } from "next/router";

const Artist = () => {
  const router = useRouter()

  return (
    <div className="bg-[url('/art/art3.png')] lg:bg-[url('/art/art.png')] md:bg-[url('/art/art2.png')] sm:bg-[url('/art/art3.png')] bg-scroll bg-cover overflow-auto h-screen bg-no-repeat" >
      <div className="pt-1 pl-2">
        <ArrowLeftIcon className='icon3 h-16 w-16 p-3 rounded-full border-r-4 transition ease-in-out delay-96 cursor-pointer' onClick={() => router.push("/")}
        />
      </div>
      <div className="flex flex-col justify-center place-items-center text-center text-white  ">
        <h1 className="h1 text-6xl font-bold  pb-6">Artist</h1>
        <p className="lg:text-lg md:text-lg sm:text-base text-base text-semibold pb-2 text-rose-100 lg:w-2/5 md:w-2/3 sm:w-2/3 w-96">im a self-informed artist, started drawing when I was 12 years old till now.
          my artworks take inspiration from a life-long obsession with animals and the natural world.
          im deeply interested in creating mandalas art and tazhib art. My drawings based on peoples order and my desires.</p>
        <div className="flex justify-start place-content-start lg:w-2/6 md:w-2/4 sm:w-2/3 w-96 text-cyan-50 pt-2">
          <h2 className="pb-1 ">Hover...</h2>
        </div>
      </div>
      <div className="cont flex lg:flex-row md:flex-row sm:flex-row flex-col place-items-center gap-2 justify-center ">
        <div className="flex gap-2">
          <img src="art/2.jpg" className="im lg:h-[500px] lg:w-16 md:h-[470px] md:w-16 sm:h-[400px] sm:w-14 h-[300px] w-16 rounded-full shadow-2xl ease-in-out object-cover lg:hover:w-[430px] md:hover:w-[360px] sm:hover:w-[270px] hover:w-56 duration-500" />
          <img src="art/3.jpg" className="im lg:h-[500px] lg:w-16 md:h-[470px] md:w-16 sm:h-[400px] sm:w-14 h-[300px] w-16 rounded-full shadow-2xl ease-in-out duration-500 lg:hover:w-[430px] md:hover:w-[360px] sm:hover:w-[270px] hover:w-56  object-cover " />
          <img src="art/7.jpg" className="im lg:h-[500px] lg:w-16 md:h-[470px] md:w-16 sm:h-[400px] sm:w-14 h-[300px] w-16 rounded-full shadow-2xl ease-in-out duration-500 lg:hover:w-[430px] md:hover:w-[360px] sm:hover:w-[270px] hover:w-56  object-cover " />
        </div>
        <div className="flex gap-2">
          <img src="art/4.jpg" className="im lg:h-[500px] lg:w-16 md:h-[470px] md:w-16 sm:h-[400px] sm:w-14 h-[300px] w-16 rounded-full shadow-2xl ease-in-out object-cover lg:hover:w-[430px] md:hover:w-[360px] sm:hover:w-[270px] hover:w-56  duration-500" />
          <img src="art/5.jpg" className="im lg:h-[500px] lg:w-16 md:h-[470px] md:w-16 sm:h-[400px] sm:w-14 h-[300px] w-16 rounded-full shadow-2xl ease-in-out object-cover lg:hover:w-[430px] md:hover:w-[360px] sm:hover:w-[270px] hover:w-56  duration-500" />
          <img src="art/6.jpg" className="im lg:h-[500px] lg:w-16 md:h-[470px] md:w-16 sm:h-[400px] sm:w-14 h-[300px] w-16 rounded-full shadow-2xl ease-in-out duration-500 lg:hover:w-[430px] md:hover:w-[360px] sm:hover:w-[270px] hover:w-56  object-cover" />
        </div>
      </div>
      {/* ------------------------------------------------------  */}
      <div className="">
        <div className="flex justify-center lg:gap-10 md:gap-6 sm:gap-3 gap-2 mt-44 ">
          <img src="art/1a.jpg" className="panther lg:h-96 md:h-80 sm:h-72 h-48 w-auto  object-contain shadow-2xl rounded-sm" />
          <img src="art/2a.jpg" className="lg:h-96 md:h-80 sm:h-72 h-48 w-auto object-contain mt-20 hover:scale-125 transition duration-300 ease-in-out rounded-sm shadow-2xl" />
          <img src="art/3a.png" className="panther2 lg:h-96 md:h-80 sm:h-72 h-48 w-auto object-contain mt-40 rounded-sm shadow-2xl" />
        </div>
      </div>
      {/* --------------------------------------------------  */}
      <div className="flex flex-col justify-center place-items-center mt-36">
        <div className="flex justify-center  lg:gap-5 md:gap-2 sm:gap-2 gap-2 place-items-center">
          <div className="heptagon lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-52 sm:h-52 w-32 h-32 shadow-2xl"><img src="art/skull.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-52 sm:h-52 w-32 h-32 object-cover object-center" />  </div>
          <div className="heptagon shadow-2xl lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-52 sm:h-52 w-32 h-32"><img src="art/leaf.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-52 sm:h-52 w-32 h-32 object-fill object-center" /></div>
        </div>
        <div className="flex justify-center lg:gap-5 md:gap-2 sm:gap-2 gap-2">
          <div className="heptagon shadow-2xl lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-52 sm:h-52 w-32 h-32"><img src="art/hand.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-52 sm:h-52 w-32 h-32 object-fill object-center" /></div>
          <div className="heptagon shadow-2xl lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-52 sm:h-52 w-32 h-32"><img src="art/snake.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-52 sm:h-52 w-32 h-32 object-fill object-center" />  </div>
          <div className="heptagon shadow-2xl lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-52 sm:h-52 w-32 h-32"><img src="art/rr.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-52 sm:h-52 w-32 h-32 object-cover object-center rotate-[30deg] transition duration-300 ease-in-out" /> </div>
        </div>
        <div className="flex justify-center  lg:gap-5 md:gap-2 sm:gap-2 gap-2 place-items-center">
          <div className="heptagon shadow-2xl lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-52 sm:h-52 w-32 h-32"><img src="art/ttt.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-52 sm:h-52 w-32 h-32 object-cover object-center rotate-[-10deg] " /></div>
          <div className="heptagon shadow-2xl lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-52 sm:h-52 w-32 h-32"><img src="art/mohammad.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-52 sm:h-52 w-32 h-32 object-fill object-center rotate-[-40deg] " /></div>
        </div>
      </div>
      {/* ------------------------------------------------------------------     */}
      <div className="  lg:mt-60 md:mt-52 sm:mt-40 mt-40 lg:mb-36 md:mb-36 sm:mb-36 mb-5 ">
        <div className="tazhib-img flex lg:flex-row md:flex-row sm:flex-row flex-col justify-center place-items-center lg:gap-5 md:gap-5 sm:gap-2 space-y-5">
          <img src="art/tazhib.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-48 sm:h-52 w-52 h-52 object-fill mt-5" />
          <img src="art/tazhib2.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-48 sm:h-52 w-52 h-52 object-cover" />
          <img src="art/tazhib3.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-48 sm:h-52 w-52 h-52 object-cover  " />
        </div>
      </div>

      <div className="flex justify-center place-items-center gap-4 mt-12 mb-5 text-white">
        <h1 className="">Follow Me</h1>
        <p className="transform motion-safe:hover:scale-125 transition ease-in-out delay-250"><a className="" href="https://www.instagram.com/7.19pm___asia/?hl=en"><img src="art/insta.png" className="w-9 h-9" /></a></p>
      </div>
    </div>

  );
};

export default Artist;
