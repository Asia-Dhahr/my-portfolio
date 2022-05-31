import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import { useRouter } from "next/router";

const Biologist = () => {
    const router = useRouter()
    return (
        <div className="lg:bg-cover bg-no-repeat md:bg-cover sm:bg-cover bg-center  lg:bg-[url('/p1/p1.png')] sm:bg-[url('/p1/p1-3.png')] md:bg-[url('/p1/p1-3.png')] bg-[url('/p1/p1-2.png')] bg-cover bg-fixed h-full ">
            <div className="p-3 sm:p-1">
                <ArrowLeftIcon className='icon lg:h-20 lg:w-20 md:h-12 md:w-12 sm:h-12 sm:w-12 h-16 w-16 p-3 rounded-full border-r-4 transition ease-in-out delay-96 cursor-pointer' onClick={() => router.push("/")}
                />
            </div>
            <div className="bio lg:text-8xl sm:text-3xl text-2xl  text-green-800 font-bold sm:pt-0 pt-7 lg:pl-40 pl-20">
                <h1>Biologist</h1>
            </div>
            <div className="flex justify-center sm:flex-row lg:items-center md:items-center sm:items-top gap-4 sm:gap-1 sm:mt-6 mt-24 ">
                <div className="">
                    <img src="p1/vector.png" className="lg:h-80 md:h-80 sm:h-48 h-44 pl-2 opacity-80" alt='' />
                    <div className="bio lg:invisible sm:invisible md:invisible visible pl-2 w-40">
                        <h3 className="lg:text-2xl text-xl font-semibold pt-3">Employment History</h3>
                        <p className="lg:text-xl text-sm font-base pt-2">
                            Biologist, Full-Time, Pirmam Health Center, Pirmam<br />
                            <span className="lg:text-sm text-xs"> APRIL 2021 — JUNE 2021</span>
                        </p>
                    </div>
                </div>
                <div className="bio sm:flex sm:flex-row sm:w-[390px] w-2/5 ">
                    <div>
                        <h2 className="lg:text-2xl text-xl font-semibold">Education</h2>
                        <p className="lg:text-xl text-sm font-base pt-1 pr-2">Bachelorses Degree, Salahaddin University - College of Science -  Biology department, Erbil<br />
                            <span className="lg:text-sm text-xs"> AUGUST 2018 — JUNE 2021</span><br /><br />
                            Im Dedicated biological study with more than 4 years of experience in general biology, practices with many modern biology techniques.</p>
                    </div>
                    <div className="lg:visible sm:visible md:visible invisible sm:w-full ">
                        <h3 className="lg:text-2xl text-xl font-semibold pt-3 sm:pt-0">Employment History</h3>
                        <p className="lg:text-xl text-sm font-base pt-2 ">
                            Biologist, Full-Time, Pirmam Health Center, Pirmam<br />
                            <span className="lg:text-sm text-xs"> APRIL 2021 — JUNE 2021</span>
                        </p>
                    </div>
                </div>
            </div>
            {/* ======================================p2  */}
            <div className="lg:mt-36 md:mt-44 sm:mt-0 mt-0 lg:bg-cover bg-no-repeat md:bg-cover sm:bg-cover bg-center sm:h-full h-[700px] lg:bg-[url('/p3/p3.png')] sm:bg-[url('/p3/p3.png')] md:bg-[url('/p3/p3-2.png')] bg-[url('/p3/p3-3.png')] bg-cover bg-fixed">
                <div className="px-10 py-6 font-medium lg:text-xl md:text-xl sm:text-sm text-sm text-[#787d61]">
                    <h1 className="">Some of my activities</h1></div>
                <h1 className="h2 lg:ml-40 ml-10 pt-2 text-2xl lg:text-4xl md:text-4xl sm:text-2xl font-bold">Insect Classification</h1>
                {/* <div className="grid justify-start content-center lg:mt-20 mt-28 lg:ml-36 px-5 snap-x lg:visible md:visible sm:visible hidden">
                    <div className="flex  justify-items-start lg:gap-x-7 gap-4">
                        <div className="relative h-fit shadow-2xl">
                            <img src="/p3/insect.jpg" alt='' className="lg:h-64 lg:w-full md:h-60 md:w-52 sm:h-48 sm:w-full h-40 w-full rounded-lg " />
                            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-yellow-400"></div>
                        </div>
                        <div className="relative h-fit shadow-2xl">
                            <img src="/p3/insect2.jpg" alt='' className="lg:h-56 lg:w-full md:h-48 md:w-60 sm:h-36 sm:w-full h-36 w-full rounded-lg" />
                            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-yellow-400"></div>
                        </div>
                        <div className="relative h-fit shadow-2xl ">
                            <img src="/p3/insect4.jpg" alt='' className="lg:h-64 lg:w-64 md:h-60 md:w-60 sm:h-48 sm:w-full h-40 w-full rounded-lg" />
                            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-yellow-400"></div>
                        </div>
                    </div>
                    <div className="flex justify-items-start mt-4 lg:gap-x-7 gap-4">
                        <div className="relative group h-fit shadow-2xl ">
                            <img src="/p3/insect3.jpg" alt='' className="lg:h-56 lg:w-72 md:h-52 md:w-64 sm:h-40 sm:w-full h-36 w-full rounded-lg" />
                            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-yellow-400"></div>
                        </div>
                        <div className="relative h-fit shadow-2xl">
                            <img src="/p3/insect6.jpg" alt='' className="lg:h-64 lg:w-64 md:h-52 md:w-52 sm:h-44 sm:w-full h-32 w-full rounded-lg" />
                            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-yellow-400"></div>
                        </div>
                        <div className="relative h-fit shadow-2xl">
                            <img src="/p3/insect5.jpg" alt='' className="lg:h-56 lg:w-96 md:h-48 md:w-62 sm:h-40 sm:w-full h-32 w-full rounded-lg" />
                            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-yellow-400"></div>
                        </div>
                    </div>
                </div> */}
                <div className="no-scroll  w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14 mt-28 sm:mt-10 scrollbar-hide">
                    <div className="snap-center shrink-0">
                        <div className="shrink-0 w-5 sm:w-40"></div>
                    </div>
                    <div className="snap-center shrink-0 relative">
                        <img className="shrink-0 w-52 h-62 sm:w-48 sm:h-48  rounded-lg shadow-xl bg-[#787d61]" src="/p3/insect.jpg" />
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-yellow-400"></div>
                    </div>
                    <div className="snap-center shrink-0 relative">
                        <img className="shrink-0 w-80 h-44 sm:w-48 sm:h-32 rounded-lg shadow-xl bg-[#787d61]" src="/p3/insect2.jpg" />
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-80 h-44 sm:w-48 sm:h-32 overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-yellow-400"></div>
                    </div>
                    <div className="snap-center shrink-0 relative">
                        <img className="shrink-0 w-64 h-56 sm:w-44 sm:h-[180px] rounded-lg shadow-xl bg-[#787d61]" src="/p3/insect4.jpg" />
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-64 h-56 sm:w-44 sm:h-[180px] overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-yellow-400"></div>
                    </div>
                    <div className="snap-center shrink-0 relative">
                        <img className="shrink-0 w-80 h-44 sm:w-56 sm:h-32 rounded-lg shadow-xl bg-[#787d61]" src="/p3/insect3.jpg" />
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-80 h-44 sm:w-56 sm:h-32 overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-yellow-400"></div>
                    </div>
                    <div className="snap-center shrink-0 relative">
                        <img className="shrink-0 w-80 h-44 sm:w-48 sm:h-36 rounded-lg shadow-xl bg-[#787d61]" src="/p3/insect6.jpg" />
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-80 h-44 sm:w-48 sm:h-36 overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-yellow-400"></div>
                    </div>
                    <div className="snap-center shrink-0 relative">
                        <img className="shrink-0 w-80 h-48 sm:w-52 sm:h-40 rounded-lg shadow-xl bg-[#787d61]" src="/p3/insect5.jpg" />
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-80 h-48 sm:w-52 sm:h-40 overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-yellow-400"></div>
                    </div>
                    <div className="snap-center shrink-0">
                        <div className="shrink-0 w-4 sm:w-48"></div>
                    </div>
                </div>
            </div>

            {/* =============================================p3  */}
            <div className="lg:bg-cover bg-no-repeat md:bg-cover sm:bg-cover bg-center h-screen lg:bg-[url('/p2/p2.png')] sm:bg-[url('/p2/p2-2.png')] md:bg-[url('/p2/p2-2.png')] bg-[url('/p2/p2-3.png')] bg-cover bg-fixed ">
                <div className="h2 lg:ml-40 mx-8 pt-10 sm:pt-5 lg:text-4xl md:text-4xl sm:text-2xl text-2xl font-bold"><h2>Plant Classification</h2></div>
                <div className=" flex lg:flex-row md:flexrow sm:flex-row flex-col justify-center items-center px-2 lg:my-1 mt-10 sm:mt-14 lg:gap-2 sm:gap-2 ">
                    <div className="gur p-2 lg:ml-40 border-4 border-solid rounded-xl  shadow"><img src="p2/gur2.jpg" className="lg:h-72 md:h-56 h-36 md:w-52 lg:w-72 sm:w-44 w-60 rounded-lg hover:scale-110 transition duration-300 ease-in-out " /></div>
                    <div className="gur p-2 lg:mt-28 md:mt-32 sm:mt-0 mt-3 border-4 border-solid rounded-xl shadow "><img src="p2/gur3.jpg" className="lg:h-72 md:h-56 h-36 lg:w-64 md:w-52  sm:w-44 w-44 rounded-lg  hover:scale-110 transition duration-300 ease-in-out " /></div>
                    <div className="gur p-2 lg:mt-48 md:mt-48 sm:mt-0 mt-3 border-4 border-solid rounded-xl shadow"><img src="p2/gur1.jpg" className="lg:h-72 md:h-56 h-36 lg:w-64 md:w-52 sm:w-44 w-40 rounded-lg  hover:scale-110 transition duration-300 ease-in-out " /></div>
                </div>
            </div>
        </div>
    )
}

export default Biologist;