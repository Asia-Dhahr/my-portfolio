import React from "react";
import { ArrowLeftIcon } from '@heroicons/react/solid'
import { useRouter } from "next/router";
import { ImageDetail } from "../components/image-detail";
import { Modal } from "../components/modal";
import Link from "next/link";


const Artist = () => {
  const router = useRouter()

  return (
    <div className="bg-[url('/art/art3.png')] lg:bg-[url('/art/art.png')] md:bg-[url('/art/art2.png')] sm:bg-[url('/art/art3.png')] bg-scroll bg-cover overflow-auto h-screen bg-no-repeat" >
      <div className="pt-1 pl-2 lg:pt-2 md:pt-4 lg:px-4 sm:p-3">
        <ArrowLeftIcon className='icon3 h-12 w-12 lg:h-16 lg:w-16 md:h-14 md:w-14 p-2 rounded-full border-r-4 transition ease-in-out delay-96 cursor-pointer' onClick={() => router.push("/")}
        />

      </div>
      <div className="flex flex-col justify-center place-items-center text-center text-white  ">
        <h1 className="h1 lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold pb-6 sm:pb-4">Artist</h1>
        <p className="lg:text-lg md:text-lg sm:text-sm text-sm pb-2 sm:pb-0 text-rose-100 lg:w-2/5 md:w-2/3 sm:w-2/3 w-[310px]">I am a self-taught artist who started drawing when I was 12 years old and has been continuing to draw till now.
          My artworks take inspiration from a life-long obsession with animals and the natural world.
          I am deeply interested in creating mandala art and tazhib art. My drawings are based on peoples orders and my desires.</p>
        {/* <div className="flex justify-start text-sm sm:invisible place-content-start lg:w-2/6 md:w-2/4 sm:w-2/3 w-80 text-cyan-50 pt-2">
          <h2 className="pb-1 ">Click...</h2>
        </div> */}
      </div>
      <div className="cont flex lg:flex-row md:flex-row sm:flex-row flex-col place-items-center gap-2 justify-center pt-6">
        <div className="flex gap-2">

          {router.query.image && (
            <Modal
              onClose={() => {
                router.push("/artist");
              }}
            >
              <ImageDetail image={router.query.image} />
            </Modal>
          )}
          <Link href="/artist/?image=2" as="/2">
            <a> <img src="art/2.jpg" className="im lg:h-[500px] lg:w-16 md:h-[470px] md:w-16 sm:h-[350px] sm:w-14 h-[300px] w-14 rounded-full shadow-2xl ease-in-out object-cover lg:hover:w-[430px] md:hover:w-[360px] sm:hover:w-[270px] hover:w-56 duration-500" />   </a>
          </Link>
          <Link href="/artist/?image=3" as="/3">
            <a> <img src="art/3.jpg" className="im lg:h-[500px] lg:w-16 md:h-[470px] md:w-16 sm:h-[350px] sm:w-14 h-[300px] w-14 rounded-full shadow-2xl ease-in-out duration-500 lg:hover:w-[430px] md:hover:w-[360px] sm:hover:w-[270px] hover:w-56  object-cover " /></a></Link>
          <Link href="/artist/?image=7" as="/7">
            <a><img src="art/7.jpg" className="im lg:h-[500px] lg:w-16 md:h-[470px] md:w-16 sm:h-[350px] sm:w-14 h-[300px] w-14 rounded-full shadow-2xl ease-in-out duration-500 lg:hover:w-[430px] md:hover:w-[360px] sm:hover:w-[270px] hover:w-56  object-cover " /></a></Link>
        </div>
        <div className="flex gap-2">
          <Link href="/artist/?image=4" as="/4">
            <a> <img src="art/4.jpg" className="im lg:h-[500px] lg:w-16 md:h-[470px] md:w-16 sm:h-[350px] sm:w-14 h-[300px] w-14 rounded-full shadow-2xl ease-in-out object-cover lg:hover:w-[430px] md:hover:w-[360px] sm:hover:w-[270px] hover:w-56  duration-500" /></a></Link >
          <Link href="/artist/?image=5" as="/5">
            <a><img src="art/5.jpg" className="im lg:h-[500px] lg:w-16 md:h-[470px] md:w-16 sm:h-[350px] sm:w-14 h-[300px] w-14 rounded-full shadow-2xl ease-in-out object-cover lg:hover:w-[430px] md:hover:w-[360px] sm:hover:w-[270px] hover:w-56  duration-500" /></a ></Link >
          <Link href="/artist/?image=6" as="/6">
            <a> <img src="art/6.jpg" className="im lg:h-[500px] lg:w-16 md:h-[470px] md:w-16 sm:h-[350px] sm:w-14 h-[300px] w-14 rounded-full shadow-2xl ease-in-out duration-500 lg:hover:w-[430px] md:hover:w-[360px] sm:hover:w-[270px] hover:w-56  object-cover" /></a ></Link >
        </div>
      </div>
      {/* ------------------------------------------------------  */}
      <div className="">
        <div className="flex justify-center lg:gap-10 md:gap-6 sm:gap-3 gap-2 lg:mt-44 md:mt-36 sm:mt-32 mt-28  ">
          <Link href="/artist/?image=1a" as="/1a"><a> <img src="art/1a.jpg" className="panther  lg:h-96 md:h-80 sm:h-60 h-40 w-auto  object-contain shadow-2xl rounded-sm" /></a></Link >
          <Link href="/artist/?image=2a" as="/2a"><a><img src="art/2a.jpg" className="         lg:h-96 md:h-80 sm:h-60 h-40 w-auto object-contain mt-20 hover:scale-125 transition duration-300 ease-in-out rounded-sm shadow-2xl" /></a></Link >
          <Link href="/artist/?image=3a" as="/3a"><a><img src="art/3a.png" className="panther2 lg:h-96 md:h-80 sm:h-60 h-40 w-auto object-contain mt-40 rounded-sm shadow-2xl" /></a></Link >
        </div>
      </div>
      {/* --------------------------------------------------  */}
      <div className="flex relative flex-col justify-center place-items-center lg:mt-36 md:mt-36 sm:mt-32 mt-28  lg:visible md:visible sm:invisible invisible">
        <div className="flex justify-center  lg:gap-5 md:gap-2 sm:gap-2 gap-2 place-items-center">
          <div className="heptagon lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-36 sm:h-36 w-28 h-28 "><Link href="/artist/?image=skull" as="/skull"><a><img src="art/skull.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-36 sm:h-36 w-32 h-32 object-cover object-center" /> </a></Link ></div>
          <div className="heptagon lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-36 sm:h-36 w-28 h-28"><Link href="/artist/?image=leaf" as="/leaf"><a><img src="art/leaf.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-36 sm:h-36 w-32 h-32 object-fill object-center" /></a></Link ></div>
        </div>
        <div className="flex justify-center lg:gap-5 md:gap-2 sm:gap-2 gap-2">
          <div className="heptagon shadow-2xl lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-36 sm:h-36 w-24 h-24"><Link href="/artist/?image=hand" as="/hand"><a><img src="art/hand.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-36 sm:h-36 w-28 h-28 object-fill object-center" /></a></Link ></div>
          <div className="heptagon shadow-2xl lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-36 sm:h-36 w-24 h-24"><Link href="/artist/?image=snake" as="/snake"><a><img src="art/snake.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-36 sm:h-36 w-28 h-28 object-fill object-center" /> </a></Link > </div>
          <div className="heptagon shadow-2xl lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-36 sm:h-36 w-24 h-24"><Link href="/artist/?image=rr" as="/rr"><a><img src="art/rr.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-36 sm:h-36 w-28 h-28 object-cover object-center rotate-[30deg] transition duration-300 ease-in-out" /></a></Link > </div>
        </div>
        <div className="flex justify-center  lg:gap-5 md:gap-2 sm:gap-2 gap-2 place-items-center">
          <div className="heptagon shadow-2xl lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-36 sm:h-36 w-28 h-28"><Link href="/artist/?image=ttt" as="/ttt"><a><img src="art/ttt.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-36 sm:h-36 w-32 h-32 object-cover object-center rotate-[-10deg] " /></a></Link ></div>
          <div className="heptagon shadow-2xl lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-36 sm:h-36 w-28 h-28"><Link href="/artist/?image=mohammad" as="/mohammad"><a><img src="art/mohammad.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-36 sm:h-36 w-32 h-32 object-fill object-center rotate-[-40deg] " /></a></Link ></div>
        </div>

        {/* ************  */}

        <div className="no-scroll absolute w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14 mt-10 sm:mt-0  scrollbar-hide lg:hidden md:hidden sm:visible visible">
          <div className="snap-center shrink-0">
            <div className="shrink-0 w-6 sm:w-20 "></div>
          </div>
          <div className="snap-center shrink-0 relative">
            <div className="heptagon shadow-2xl lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-60 sm:h-60 w-64 h-64"> <Link href="/artist/?image=mohammad" as="/mohammad">
              <a><img src="art/mohammad.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-60 sm:h-60 w-64 h-64 object-fill object-center rotate-[-40deg] " /></a></Link ></div>
          </div>
          <div className="snap-center shrink-0 relative">
            <div className="heptagon shadow-2xl lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-60 sm:h-60 w-64 h-64"><Link href="/artist/?image=rr" as="/rr"><a><img src="art/rr.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-60 sm:h-60 w-64 h-64 object-cover object-center rotate-[30deg] " /></a></Link ></div>
          </div>
          <div className="snap-center shrink-0 relative">
            <div className="heptagon shadow-2xl lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-60 sm:h-60 w-64 h-64"><Link href="/artist/?image=ttt" as="/ttt"><a><img src="art/ttt.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-60 sm:h-60 w-64 h-64 object-cover object-center rotate-[-10deg] " /></a></Link ></div>
          </div>
          <div className="snap-center shrink-0 relative">
            <div className="heptagon shadow-2xl lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-60 sm:h-60 w-64 h-64"><Link href="/artist/?image=snake" as="/snake"><a><img src="art/snake.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-60 sm:h-60 w-64 h-64 object-fill object-center" /></a></Link ></div>
          </div>
          <div className="snap-center shrink-0 relative">
            <div className="heptagon shadow-2xl lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-60 sm:h-60 w-64 h-64"><Link href="/artist/?image=hand" as="/hand"><a><img src="art/hand.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-60 sm:h-60 w-64 h-64 object-fill object-center" /></a></Link ></div>
          </div>
          <div className="snap-center shrink-0 relative">
            <div className="heptagon shadow-2xl lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-60 sm:h-60 w-64 h-64"><Link href="/artist/?image=leaf" as="/leaf"><a><img src="art/leaf.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-60 sm:h-60 w-64 h-64 object-fill object-center" /></a></Link ></div>
          </div>
          <div className="snap-center shrink-0 relative">
            <div className="heptagon shadow-2xl lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-60 sm:h-60 w-64 h-64"><Link href="/artist/?image=skull" as="/skull"><a><img src="art/skull.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-60 sm:h-60 w-64 h-64 object-cover object-center rotate-[-20deg]" /></a></Link ></div>
          </div>
          <div className="snap-center shrink-0">
            <div className="shrink-0 w-4 sm:w-48"></div>
          </div>
        </div>
      </div>



      {/* ------------------------------------------------------------------     */}
      <div className="  lg:mt-60 md:mt-36 sm:mt-2 mt-20 lg:mb-36 md:mb-20 sm:mb-20 mb-5 ">
        <div className="tazhib-img flex lg:flex-row md:flex-row sm:flex-row flex-col justify-center place-items-center lg:gap-5 md:gap-5 sm:gap-2 space-y-5">
          <Link href="/artist/?image=tazhib" as="/tazhib"><a> <img src="art/tazhib.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-44 sm:h-44 w-44 h-44 object-fill mt-5" /></a></Link >
          <Link href="/artist/?image=tazhib2" as="/tazhib2"><a> <img src="art/tazhib2.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-44 sm:h-44 w-44 h-44 object-cover" /></a></Link >
          <Link href="/artist/?image=tazhib3" as="/tazhib3"><a> <img src="art/tazhib3.jpg" className="lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-44 sm:h-44 w-44 h-44 object-cover  " /></a></Link >
        </div>
      </div>

      <div className="flex justify-center place-items-center gap-4 mt-12 mb-5 text-rose-100">
        <h1 className="text-sm lg:text-lg md:text-base">Follow Me</h1>
        <p className="transform motion-safe:hover:scale-125 transition ease-in-out delay-250"><a className="" href="https://www.instagram.com/7.19pm___asia/?hl=en"><img src="art/insta.png" className="lg:w-9 lg:h-9 md:h-8 md:w-8 w-6 h-6" /></a></p>
      </div>
    </div>

  );
};

export default Artist;
