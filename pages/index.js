import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../components/footer";

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-no-repeat bg-center h-screen overflow-auto bg-fixed lg:bg-[url('/bg.png')] sm:bg-[url('/bg.png')] md:bg-[url('/bgsm.png')] bg-[url('/bg2.png')] bg-cover">
      <div className="flex justify-between items-center my-4 text-purple-100  lg:ml-10 sm:ml-6">
        <img className="h-10 sm:h-9 md:h-12 lg:h-20 sm:mt-1 mt-4 lg:mt-6 md:mt-0 md:ml-0 ml-4 object-contain" src="logo.png" />
        <Link href="https://portfolio-asia-dhahr.vercel.app" >
          <div className="version sm:h-10 sm:w-24 h-8 w-16 text-center sm:text-xl text-base mx-8 font-medium flex justify-center items-center cursor-pointer ">V.02</div>
        </Link>
      </div>
      <div className="flex flex-col justify-center place-items-center gap-4 lg:gap-8 md:gap-4 sm:gap-2 lg:mt-0 md:mt-0 sm:mt-0 mt-12">
        <div className="">
          <h1 className="h1-1 lg:text-[5rem] sm:text-3xl md:text-5xl font-extrabold text-3xl ">
            Hello World!
          </h1>
        </div>
        <div className="lg:w-2/6 md:w-96 w-80 lg:text-lg md:text-base text-sm text-purple-100 ">
          <p className="text-justify">
            {" "}
            I am Asia,{" "}
            <span className="text-purple-300 text-lg md:text-lg lg:text-2xl  font-bold">Biologist</span>
            ,
            <span className="text-purple-500 text-lg md:text-lg lg:text-2xl  font-bold">
              {" "}
              Web Developer
            </span>
            , and{" "}
            <span className="text-purple-700 text-lg md:text-lg lg:text-2xl  font-bold">
              Artist
            </span>{" "}
            based in Pirmam/Erbil. Here down you can see some of my latest experiences.
          </p>
        </div>
      </div>
      <div className="flex justify-center sm:gap-20 md:gap-20 xl:gap-40  gap-5 lg:mx-18 md:mx-10 mt-20 lg:mt-20 md:mt-4 sm:mt-8 px-2 place-items-center ">
        <div className="blur-box flex flex-col justify-center font-semibold  text-purple-100 rounded-full lg:w-64 lg:h-64 md:h-44 md:w-44 sm:h-28 sm:w-28 h-28 w-28 transition ease-in-out delay-250 place-items-center">
          <img
            src="ar.png"
            className="h-fit lg:w-36 md:w-20 sm:w-14 w-16"
            onClick={() => router.push("/artist")}
          />
          <div className="lg:text-xl md:text-sm sm:text-xs text-center text-sm pb-4">
            <Link className="" href="/artist">
              Artist
            </Link>
          </div>
        </div>
        {/* ----------------------------------------  */}
        <div className="blur-box flex flex-col justify-center font-semibold text-purple-100 rounded-full lg:w-64 lg:h-64 md:h-44 md:w-44 sm:h-28 sm:w-28 h-28 w-28 transition ease-in-out delay-250 place-items-center">
          <img
            src="wd.png"
            className="h-fit lg:w-36 lg:h-40 md:w-20 md:h-24 sm:w-14 w-16"
            onClick={() => router.push("/web-dev")}
          />
          <div className="lg:text-xl md:text-sm text-center sm:text-xs text-sm pt-2  whitespace-nowrap">
            <Link href="/web-dev">Web Developer</Link>
          </div>
        </div>
        {/* ------------------------------------------------  */}
        <div className="blur-box flex flex-col justify-center font-semibold text-purple-100 rounded-full lg:w-64 lg:h-64 md:h-44 md:w-44 sm:h-28 sm:w-28 h-28 w-28 transition ease-in-out delay-250 place-items-center">
          <img
            src="bl.png"
            className="h-fit lg:w-36 md:w-20 sm:w-14 w-[60px]"
            onClick={() => router.push("/biologist")}
          />
          <div className="lg:text-xl md:text-sm sm:text-xs text-center text-sm pt-2">
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
