import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import { useRouter } from "next/router";

const Biologist = () => {
    const router = useRouter()
    return (
        <div className="bg-no-repeat bg-center lg:bg-[url('/p1/p1.png')] sm:bg-[url('/p1/p1-3.png')] md:bg-[url('/p1/p1.png')] bg-[url('/p1/p1-2.png')] bg-cover bg-fixed h-screen  ">
            <div className="p-2 sm:p-1">
                <ArrowLeftIcon className='icon lg:h-20 lg:w-20 md:h-12 md:w-12 sm:h-12 sm:w-12 h-16 w-16 p-3 rounded-full border-r-4 transition ease-in-out delay-96 cursor-pointer' onClick={() => router.push("/")}
                />
            </div>
            <div className="bio lg:text-6xl sm:text-3xl text-2xl text-green-800 font-bold sm:pt-0 pt-5 lg:pl-40 pl-16">
                <h1>Biologist</h1>
            </div>
            <div className="bio flex justify-center items-top lg:mt-40 md:mt-14 sm:mt-8 mt-20 mx-5 space-x-4">
                <div className="invisible lg:visible md:visible sm:visible">
                    <img src="p1/vector.png" className="lg:h-64 h-56 sm:h-44 opacity-80" alt='' />
                </div>
                <div className="flex  space-x-5">
                    <div className="flex flex-col lg:w-96 md:w-60 sm:w-60 w-40 text-justify ">
                        <h2 className="lg:text-xl sm:text-lg text-xl font-semibold pb-2">Education</h2>
                        <p className="lg:text-lg md:text-sm text-sm ">Bachelorses Degree, Salahaddin University-College of Science -  Biology department, Erbil<br />
                            <span className=" text-sm font-thin"> AUGUST 2018 — JUNE 2021</span><br /><br />
                            I am Dedicated biological study with more than 4 years of experience in general biology, practices with many modern biology techniques.</p>
                    </div>
                    <div className="flex flex-col lg:w-96 md:w-56 sm:w-48 w-40 text-justify">
                        <h3 className="lg:text-xl sm:text-lg text-xl font-semibold pb-2">Employment History</h3>
                        <p className="lg:text-lg md:text-sm text-sm">
                            Biologist, Full-Time, Pirmam Health Center, Pirmam<br />
                            <span className="text-sm font-thin"> APRIL 2021 — JUNE 2021</span>
                        </p>
                    </div>
                </div>
            </div>
            {/* ======================================p2  */}
            <div className="lg:mt-60 md:mt-12 sm:mt-6 mt-[159px] bg-no-repeat bg-center sm:h-fit lg:h-screen md:h-screen h-[600px] lg:bg-[url('/p3/p3.png')] sm:bg-[url('/p3/p3.png')] md:bg-[url('/p3/p3-2.png')] bg-[url('/p3/p3-3.png')] bg-cover bg-fixed">
                <div className="pt-8 lg:ml-40 ml-10 font-medium lg:text-xl md:text-base sm:text-sm text-sm text-[#787d61]">
                    <h1 className="">Some of my activities</h1>
                </div>
                <h1 className="h2 lg:ml-40 ml-10 pt-4 mt-6 sm:mt-0 text-2xl lg:text-4xl md:text-2xl sm:text-2xl font-bold">Insect Classification</h1>
                <div className="no-scroll w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14 mt-32 lg:my-48 sm:mt-10 scrollbar-hide">
                    <div className="snap-center shrink-0">
                        <div className="shrink-0 w-5 lg:w-80 sm:w-40"></div>
                    </div>
                    <div className="snap-center shrink-0 relative">
                        <img className="shrink-0 w-52 h-64 sm:w-44 sm:h-48 md:h-[250px] md:w-52 lg:w-72 lg:h-96  rounded-lg shadow-xl bg-[#787d61]" src="/p3/insect.jpg" />
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-yellow-400"></div>
                    </div>
                    <div className="snap-center shrink-0 relative">
                        <img className="shrink-0 w-80 h-44 sm:w-52 sm:h-32 md:h-48 md:w-60 lg:w-full lg:h-60  rounded-lg shadow-xl bg-[#787d61]" src="/p3/insect2.jpg" />
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-80 h-44 lg:w-full lg:h-60 sm:w-48 sm:h-32 overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-yellow-400"></div>
                    </div>
                    <div className="snap-center shrink-0 relative">
                        <img className="shrink-0 w-64 h-56 sm:w-44 sm:h-[180px] md:h-[250px] md:w-52 lg:w-full lg:h-72  rounded-lg shadow-xl bg-[#787d61]" src="/p3/insect4.jpg" />
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-64 h-56 lg:w-full lg:h-72 sm:w-44 sm:h-[180px] overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-yellow-400"></div>
                    </div>
                    <div className="snap-center shrink-0 relative">
                        <img className="shrink-0 w-80 h-44 sm:w-56 sm:h-32 md:h-[250px] md:w-52 lg:w-96 lg:h-72 rounded-lg shadow-xl bg-[#787d61]" src="/p3/insect3.jpg" />
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-80 h-44 lg:w-full lg:h-72 sm:w-56 sm:h-32 overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-yellow-400"></div>
                    </div>
                    <div className="snap-center shrink-0 relative">
                        <img className="shrink-0 w-80 h-44 sm:w-48 sm:h-36 md:h-[250px] md:w-52 lg:w-96 lg:h-72 rounded-lg shadow-xl bg-[#787d61]" src="/p3/insect6.jpg" />
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-80 h-44 lg:w-full lg:h-72 sm:w-48 sm:h-36 overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-yellow-400"></div>
                    </div>
                    <div className="snap-center shrink-0 relative">
                        <img className="shrink-0 w-80 h-48 sm:w-52 sm:h-40 md:h-[250px] md:w-52 lg:w-full lg:h-72 rounded-lg shadow-xl bg-[#787d61]" src="/p3/insect5.jpg" />
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-80 h-48 lg:w-full lg:h-72 sm:w-52 sm:h-40 overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-yellow-400"></div>
                    </div>
                    <div className="snap-center shrink-0">
                        <div className="shrink-0 w-4 sm:w-48"></div>
                    </div>
                </div>
            </div>

            {/* =============================================p3  */}
            <div className="bg-no-repeat bg-center h-screen sm:h-fit md:h-screen lg:bg-[url('/p2/p2.png')] sm:bg-[url('/p2/p2-2.png')] md:bg-[url('/p2/p2-2.png')] bg-[url('/p2/p2-3.png')] bg-cover bg-fixed ">
                <div className="h2 lg:ml-40 mx-8 pt-8 sm:pt-5 lg:text-4xl md:text-2xl sm:text-2xl text-2xl font-bold"><h2>Plant Classification</h2></div>
                <div className=" flex lg:flex-row md:flex-row sm:flex-row flex-col justify-center items-center px-2 lg:my-10  mt-10 sm:mt-14 md:mt-0 lg:gap-2 sm:gap-2 sm:h-72">
                    <div className="gur p-2 lg:ml-40 border-4 border-solid rounded-xl  shadow"><img src="p2/gur2.jpg" className="lg:h-72 md:h-56 h-36 md:w-52 lg:w-72 sm:w-44 w-60 rounded-lg hover:scale-110 transition duration-300 ease-in-out " /></div>
                    <div className="gur p-2 lg:mt-28 md:mt-10 sm:mt-0 mt-3 border-4 border-solid rounded-xl shadow "><img src="p2/gur3.jpg" className="lg:h-72 md:h-56 h-36 lg:w-64 md:w-52  sm:w-44 w-44 rounded-lg  hover:scale-110 transition duration-300 ease-in-out " /></div>
                    <div className="gur p-2 lg:mt-48 md:mt-20 sm:mt-0 mt-3 border-4 border-solid rounded-xl shadow"><img src="p2/gur1.jpg" className="lg:h-72 md:h-56 h-36 lg:w-64 md:w-52 sm:w-44 w-40 rounded-lg  hover:scale-110 transition duration-300 ease-in-out " /></div>
                </div>
            </div>
        </div>
    )
}

export default Biologist;