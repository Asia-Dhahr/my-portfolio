import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../components/footer";

export default function Home() {
  const router = useRouter();
  return (
    <div className=" lg:bg-cover bg-no-repeat md:bg-cover sm:bg-cover bg-center h-screen lg:bg-[url('/bg.png')] sm:bg-[url('/bg2.png')] md:bg-[url('/bgsm.png')] bg-[url('/bg2.png')] bg-cover">
      <div className="flex justify-start lg:mx-20  sm:ml-6 ">
        <img className="h-14  lg:h-20 mt-8 ml-4 object-contain" src="logo.png" />
      </div>
      <div className="grid grid-rows-2 justify-center justify-items-center gap-8 mt-5">
        <h1 className="h1-1 lg:text-8xl sm:text-6xl text-white font-bold text-5xl ">
          Hello World!
        </h1>
        <div className="lg:w-2/4 w-80 lg:text-xl text-md text-purple-100 ">
          <h2 className="text-justify ">
            {" "}
            I'm Asia,{" "}
            <span className="text-purple-400 text-xl font-bold">Biologist</span>
            ,
            <span className="text-purple-600 text-xl font-bold">
              {" "}
              Web Developer
            </span>
            , and{" "}
            <span className="text-purple-700 text-xl font-bold">
              Artist
            </span>{" "}
            based in Pirmam/Erbil. Here down you can see some of my latest experiences.
          </h2>
        </div>
      </div>

      <div className="flex justify-center items-baseline lg:mt-10 sm:gap-16 md:gap-20 xl:gap-40 gap-10  lg:mx-18 md:mx-18 sm:mx-8 mx-1 my-24 px-5">
        <div className="blur-box grid font-bold text-2xl text-purple-100  rounded-full lg:w-64 lg:h-64 md:h-52 md:w-52 sm:h-52 sm:w-52 transition ease-in-out delay-250 place-items-center ">
          <img
            src="ar.png"
            className="lg:w-36 sm:w-28 w-24"
            onClick={() => router.push("/artist")}
          />
          <div className="pb-5 lg:text-2xl text-center text-base">
            <Link className="" href="/artist">
              Artist
            </Link>
          </div>
        </div>
        {/* ----------------------------------------  */}
        <div className="blur-box grid font-bold text-2xl text-purple-100  rounded-full lg:w-64 lg:h-64 md:h-52 md:w-52 sm:h-48 sm:w-48 transition ease-in-out delay-250 place-items-center ">
          <img
            src="wd.png"
            className="lg:w-36  sm:w-28 w-[92px] "
            onClick={() => router.push("/web-dev")}
          />
          <div className="pb-3 lg:text-2xl px-2 text-center mb-5 text-base">
            <Link href="/web-dev">Web Developer</Link>
          </div>
        </div>
        {/* ------------------------------------------------  */}
        <div className="blur-box grid font-bold text-2xl text-purple-100 rounded-full lg:w-64 lg:h-64 md:h-52 md:w-52 sm:h-48 sm:w-48 transition ease-in-out delay-250 place-items-center">
          <img
            src="bl.png"
            className="lg:w-36 sm:w-28 w-24 "
            onClick={() => router.push("/biologist")}
          />
          <div className="pb-5 pt-1 lg:text-2xl text-center text-base">
            <Link className="" href="/biologist">
              Biologist
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
