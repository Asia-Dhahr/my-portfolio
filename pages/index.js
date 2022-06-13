import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../components/footer";

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-no-repeat bg-center h-screen overflow-auto bg-fixed lg:bg-[url('/bg.png')] sm:bg-[url('/bg.png')] md:bg-[url('/bgsm.png')] bg-[url('/bg2.png')] bg-cover">
      <div className="flex justify-start lg:ml-10 sm:ml-6 h-fit w-fit sm:pt-3">
        <img className="h-10 sm:h-9 md:h-16 lg:h-20 sm:mt-1 mt-4 lg:mt-6 md:mt-4 md:ml-2 ml-4 object-contain" src="logo.png" />
      </div>
      <div className="flex flex-col justify-center place-items-center gap-4 lg:gap-8 md:gap-8 sm:gap-2 lg:mt-9 md:mt-10 sm:mt-0 mt-12">
        <div className="">
          <h1 className="h1-1 lg:text-8xl sm:text-3xl md:text-6xl font-bold text-3xl ">
            Hello World!
          </h1>
        </div>
        <div className="lg:w-2/6 md:w-96 w-80 lg:text-lg md:text-lg text-sm text-purple-100 ">
          <p className="text-justify">
            {" "}
            I am Asia,{" "}
            <span className="text-purple-300 text-lg md:text-xl lg:text-2xl  font-bold">Biologist</span>
            ,
            <span className="text-purple-500 text-lg md:text-xl lg:text-2xl  font-bold">
              {" "}
              Web Developer
            </span>
            , and{" "}
            <span className="text-purple-700 text-lg md:text-xl lg:text-2xl  font-bold">
              Artist
            </span>{" "}
            based in Pirmam/Erbil. Here down you can see some of my latest experiences.
          </p>
        </div>
      </div>
      <div className="flex justify-center sm:gap-20 md:gap-20 xl:gap-40  gap-5 lg:mx-18 md:mx-10 mt-20 lg:mt-20 md:mt-28 sm:mt-8 px-2 place-items-center ">
        <div className="blur-box flex flex-col justify-center font-semibold  text-purple-100 rounded-full lg:w-64 lg:h-64 md:h-48 md:w-48 sm:h-28 sm:w-28 h-28 w-28 transition ease-in-out delay-250 place-items-center">
          <img
            src="ar.png"
            className="h-fit lg:w-36 md:w-28 sm:w-14 w-16"
            onClick={() => router.push("/artist")}
          />
          <div className="lg:text-xl md:text-lg sm:text-xs text-center text-sm pb-4">
            <Link className="" href="/artist">
              Artist
            </Link>
          </div>
        </div>
        {/* ----------------------------------------  */}
        <div className="blur-box flex flex-col justify-center font-semibold text-purple-100 rounded-full lg:w-64 lg:h-64 md:h-48 md:w-48 sm:h-28 sm:w-28 h-28 w-28 transition ease-in-out delay-250 place-items-center">
          <img
            src="wd.png"
            className="h-fit lg:w-36 lg:h-40 md:w-28 md:h-32 sm:w-14 w-16"
            onClick={() => router.push("/web-dev")}
          />
          <div className="lg:text-xl md:text-lg text-center sm:text-xs text-sm pt-2  whitespace-nowrap">
            <Link href="/web-dev">Web Developer</Link>
          </div>
        </div>
        {/* ------------------------------------------------  */}
        <div className="blur-box flex flex-col justify-center font-semibold text-purple-100 rounded-full lg:w-64 lg:h-64 md:h-48 md:w-48 sm:h-28 sm:w-28 h-28 w-28 transition ease-in-out delay-250 place-items-center">
          <img
            src="bl.png"
            className="h-fit lg:w-36 md:w-28 sm:w-14 w-[60px]"
            onClick={() => router.push("/biologist")}
          />
          <div className="lg:text-xl md:text-lg sm:text-xs text-center text-sm pt-2">
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
