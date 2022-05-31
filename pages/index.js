import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../components/footer";

export default function Home() {
  const router = useRouter();
  return (
    <div className=" lg:bg-cover bg-no-repeat md:bg-cover sm:bg-cover bg-center h-screen overflow-auto bg-fix lg:bg-[url('/bg.png')] sm:bg-[url('/bg2.png')] md:bg-[url('/bgsm.png')] bg-[url('/bg2.png')] bg-cover">
      <div className="flex justify-start lg:mx-20 sm:ml-6 ">
        <img className="h-10 sm:h-10 lg:h-20 sm:mt-1 mt-4 ml-4 object-contain" src="logo.png" />
      </div>
      <div className="flex flex-col justify-center place-items-center gap-8 lg:gap-8 md:gap-8 sm:gap-2 lg:mt-9 md:mt-9 sm:mt-0 mt-9">
        <div className="">
          <h1 className="h1-1 lg:text-8xl sm:text-3xl text-white font-bold text-3xl ">
            Hello World!
          </h1>
        </div>
        <div className="lg:w-2/4 w-80 lg:text-xl text-sm text-purple-100 ">
          <h2 className="text-justify ">
            {" "}
            Im Asia,{" "}
            <span className="text-purple-400 text-lg font-bold">Biologist</span>
            ,
            <span className="text-purple-600 text-lg font-bold">
              {" "}
              Web Developer
            </span>
            , and{" "}
            <span className="text-purple-700 text-lg font-bold">
              Artist
            </span>{" "}
            based in Pirmam/Erbil. Here down you can see some of my latest experiences.
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-baseline sm:gap-28 md:gap-20 xl:gap-40 gap-10 lg:mx-18 md:mx-18 sm:mx-2 mx-1 mt-24 lg:mt-10 md:mt-10 sm:mt-10 px-5">
        <div className="blur-box flex flex-col font-semibold text-purple-100 rounded-full lg:w-64 lg:h-64 md:h-52 md:w-52 sm:h-16 sm:w-16 transition ease-in-out delay-250 place-items-center ">
          <img
            src="ar.png"
            className="h-fit lg:w-36 sm:w-14 w-[64px]"
            onClick={() => router.push("/artist")}
          />
          <div className="pb-5 lg:text-xl text-center text-sm">
            <Link className="" href="/artist">
              Artist
            </Link>
          </div>
        </div>
        {/* ----------------------------------------  */}
        <div className="blur-box grid font-semibold text-purple-100  rounded-full lg:w-64 lg:h-64 md:h-52 md:w-52 sm:h-16 sm:w-16 transition ease-in-out delay-250 place-items-center ">
          <img
            src="wd.png"
            className="h-fit lg:w-36  sm:w-14 w-16 "
            onClick={() => router.push("/web-dev")}
          />
          <div className="pb-3 lg:text-2xl text-center mb-5 sm:text-xs text-sm">
            <Link href="/web-dev">Web Developer</Link>
          </div>
        </div>
        {/* ------------------------------------------------  */}
        <div className="blur-box grid font-semibold text-purple-100 rounded-full lg:w-64 lg:h-64 md:h-52 md:w-52 sm:h-16 sm:w-16 transition ease-in-out delay-250 place-items-center">
          <img
            src="bl.png"
            className="h-fit lg:w-36 sm:w-14 w-[60px] "
            onClick={() => router.push("/biologist")}
          />
          <div className="pb-5 pt-1 lg:text-2xl text-center text-sm">
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
