import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/solid'
import { useRouter } from "next/router";

const Biologist = () => {
    const router = useRouter()
    return (
        <div className="lg:bg-cover bg-no-repeat md:bg-cover sm:bg-cover bg-center  lg:bg-[url('/p1/p1.png')] sm:bg-[url('/p1/p1-2.png')] md:bg-[url('/p1/p1-3.png')] bg-[url('/p1/p1-2.png')] bg-cover bg-fixed h-full">
            <div className="p-3">
                <ArrowLeftIcon className='icon h-20 w-20 p-3 rounded-full border-r-4 transition ease-in-out delay-96 cursor-pointer' onClick={() => router.push("/")}
                />
            </div>
            <div className="bio lg:text-8xl sm:text-7xl text-5xl  text-green-800 font-bold pt-7 lg:pl-40 pl-20">
                <h1>Biologist</h1>
            </div>
            <div className="flex justify-center items-center gap-4 mt-24 ">
                <div className="opacity-80 ">
                    <img src="p1/vector.png" className="lg:h-80 md:h-80  sm:h-80  h-72 pl-2" alt='' />
                </div>
                <div className="bio w-2/5 ">
                    <h2 className="lg:text-2xl text-xl font-semibold">Education</h2>
                    <p className="lg:text-xl text-sm font-base pt-1 pr-2">Bachelorses Degree, Salahaddin University - College of Science -  Biology department, Erbil<br />
                        <span className="lg:text-sm text-xs"> AUGUST 2018 — JUNE 2021</span><br /><br />
                        Im Dedicated biological study with more than 4 years of experience in general biology, practices with many modern biology techniques.</p>
                    <h3 className="lg:text-2xl text-xl font-semibold pt-3">Employment History</h3>
                    <p className="lg:text-xl text-sm font-base pt-2">
                        Biologist, Full-Time, Pirmam Health Center, Pirmam<br />
                        <span className="lg:text-sm text-xs"> APRIL 2021 — JUNE 2021</span>
                    </p>
                </div>
            </div>
            {/* ======================================p2  */}
            <div className="lg:mt-36 md:mt-44 sm:mt-44 mt-40 lg:bg-cover bg-no-repeat md:bg-cover sm:bg-cover bg-center h-screen lg:bg-[url('/p3/p3.png')] sm:bg-[url('/p3/p3-3.png')] md:bg-[url('/p3/p3-2.png')] bg-[url('/p3/p3-3.png')] bg-cover bg-fixed">
                <div className="p-10 font-medium text-xl text-red-900">
                    <h1 className="">Some of my activities</h1></div>
                <h1 className="h2 lh:ml-40 ml-10 pt-2 text-4xl font-bold">Insect Classification</h1>
                <div className="grid justify-start content-center lg:mt-20 mt-28 lg:ml-36 px-5 ">
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
                </div>
            </div>
            {/* =============================================p3  */}
            <div className="lg:bg-cover bg-no-repeat md:bg-cover sm:bg-cover bg-center h-screen lg:bg-[url('/p2/p2.png')] sm:bg-[url('/p2/p2-3.png')] md:bg-[url('/p2/p2-2.png')] bg-[url('/p2/p2-3.png')] bg-cover bg-fixed ">
                <div className="h2 lg:ml-40 mx-8 pt-20 text-4xl font-bold"><h2>Plant Classification</h2></div>
                <div className="flex justify-center items-center px-2 lg:my-1 my-16 lg:gap-2 ">
                    <div className="p-2 lg:ml-40 border-4 border-solid rounded-xl  shadow">
                        <img src="p2/gur2.jpg" className="lg:h-72 md:h-56 h-40 md:w-52 lg:w-72 sm:w-48 w-72 rounded-lg hover:scale-110 transition duration-300 ease-in-out" />
                    </div>
                    <div className="p-2 lg:mt-28 md:mt-32 mt-20 border-4 border-solid rounded-xl shadow "><img src="p2/gur3.jpg" className="lg:h-72 md:h-56 h-40 lg:w-64 md:w-52  sm:w-48 w-72 rounded-lg  hover:scale-110 transition duration-300 ease-in-out" /></div>
                    <div className="p-2 lg:mt-48 md:mt-48 mt-40 border-4 border-solid rounded-xl shadow"><img src="p2/gur1.jpg" className="lg:h-72 md:h-56 h-40 lg:w-64 md:w-52 sm:w-48 w-72 rounded-lg  hover:scale-110 transition duration-300 ease-in-out " /></div>
                </div>
            </div>
        </div>
    )
}

export default Biologist;