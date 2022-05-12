import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Artist from "../components/artist"

export default function Home() {
  return (
    <div className="" >
      {/* <div className="pl-20">logo</div> */}
      <div className="mt-20">
        <div className="mt-10 flex justify-center">
          <img
            src="mandala.jpg"
            className="mandala rounded-full animate-spin object-cover object-center "
          />
          <h1 className="h1-1 flex justify-center font-extrabold text-9xl md:text-8xl sm:text-7xl ">
            Hello World!

          </h1>
        </div>
        <div className=" lg:mx-80 mt-80 ">
          <h2 className="h2-2 text-3xl text-justify font-semibold lg:mx-80 md:mx-40">I'm Asia, <span className="text-green-600">Biologist</span>, <span className="text-sky-600"> Web Developer</span>, and <span className="text-purple-400">Artist</span> based in Erbil.
            Here down you can see some of my latest drawings.</h2>
        </div>
      </div>
      <section>
        <Artist />
      </section>

    </div >
  )
}
