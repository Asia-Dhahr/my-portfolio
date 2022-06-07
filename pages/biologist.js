import React from 'react';
import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { useRouter } from "next/router";
import { useState, useRef } from 'react';
const Biologist = () => {
    const router = useRouter()
    const picsRef = useRef(null)
    const [left, setLeft] = useState(false)
    const [right, setRight] = useState(true)
    const onScroll = () => {
        if (picsRef.current.scrollLeft > 0) {
            setLeft(true)
        } else {
            setLeft(false)
        }
        if (picsRef.current.scrollLeft == picsRef.current.scrollWidth - picsRef.current.clientWidth) {
            setRight(false)
        } else {
            setRight(true)

        }
    }
    return (
        <div>
            <div className="bg-no-repeat bg-center lg:bg-[url('/p1/p1.png')] sm:bg-[url('/p1/p1-3.png')] md:bg-[url('/p1/p1-3.png')] bg-[url('/p1/p1-2.png')] bg-cover bg-fixed h-full  ">
                <div className="p-2 lg:pt-4 lg:pl-4 sm:p-3 sm:pb-8">
                    <ArrowLeftIcon className='icon lg:h-16 lg:w-16 md:h-12 md:w-12 sm:h-12 sm:w-12 h-12 w-12 p-1 md:p-1 rounded-full border-r-4 transition ease-in-out delay-96 cursor-pointer' onClick={() => router.push("/")}
                    />
                </div>
                <div className="bio lg:text-6xl sm:text-3xl text-2xl text-green-800 font-bold sm:pt-0 pt-8 md:pt-4 lg:pl-40 pl-12">
                    <h1>Biologist</h1>
                </div>
                <div className="bio flex justify-center items-top lg:mt-32 md:mt-14 sm:mt-8 mt-10 mx-5 sm:mx-2 space-x-4 h-fit pb-20 lg:pb-32 ">
                    <div className="invisible lg:visible md:visible sm:visible">
                        <img src="p1/vector.png" className="lg:h-64 h-56 sm:h-48 md:h-52 w-0 lg:w-full md:w-full sm:w-32 opacity-80" alt='' />
                    </div>
                    <div className="flex flex-col lg:flex-row md:flex-row sm:flex-row lg:space-x-5 md:space-x-5 sm:space-x-5 lg:space-y-0 md:space-y-0 sm:space-y-0 space-y-4">
                        <div className="flex flex-col lg:w-96 md:w-60 sm:w-60 w-72 text-justify ">
                            <h2 className="lg:text-xl sm:text-lg text-lg font-semibold pb-2">Education</h2>
                            <p className="lg:text-lg md:text-sm text-sm ">Bachelorses Degree, Salahaddin University-College of Science -  Biology department, Erbil<br />
                                <span className=" text-xs font-thin"> AUGUST 2018 — JUNE 2021</span><br /><br />
                                I am Dedicated biological study with more than 4 years of experience in general biology, practices with many modern biology techniques.</p>
                        </div>
                        <div className="flex flex-col lg:w-96 md:w-56 sm:w-48 w-72 text-justify">
                            <h3 className="lg:text-xl sm:text-lg text-lg font-semibold pb-2">Employment History</h3>
                            <p className="lg:text-lg md:text-sm text-sm">
                                Biologist, Full-Time, Pirmam Health Center, Pirmam<br />
                                <span className="text-xs font-thin"> APRIL 2021 — JUNE 2021</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ======================================p2  */}
            <div className="bg-no-repeat bg-center lg:h-screen  h-full lg:bg-[url('/p3/p3.png')] sm:bg-[url('/p3/p3.png')] md:bg-[url('/p3/p3-2.png')] bg-[url('/p3/p3-3.png')] bg-cover bg-fixed">
                <div className="pt-8 lg:ml-40 ml-10 font-medium lg:text-xl md:text-base sm:text-sm text-sm text-[#787d61]">
                    <h1 className="">Some of my activities</h1>

                </div>
                <h1 className="h2 lg:ml-40 ml-10 pt-2 mt-2 sm:mt-0 text-2xl lg:text-4xl md:text-2xl sm:text-2xl font-bold">Insect Classification</h1>
                <div className="relative">
                    <div onScroll={onScroll} ref={picsRef} className="no-scroll relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto scroll-smooth pb-16 mt-20 lg:my-48 sm:mt-10 scrollbar-hide">
                        <div className=" relative  snap-center shrink-0">
                            <div className="shrink-0 w-5 lg:w-80 sm:w-40"></div>
                        </div>
                        <div className=" snap-center shrink-0 relative">
                            <img className="shrink-0 w-52 h-64 sm:w-44 sm:h-48 md:h-[250px] md:w-52 lg:w-72 lg:h-96  rounded-lg shadow-xl bg-[#787d61]" src="/p3/insect.jpg" />
                            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-yellow-400"></div>
                        </div>
                        <div className="snap-center shrink-0 relative">
                            <img className="shrink-0 w-80 h-44 sm:w-52 sm:h-32 md:h-48 md:w-64 lg:w-full lg:h-60  rounded-lg shadow-xl bg-[#787d61]" src="/p3/insect2.jpg" />
                            <div className="absolute top-0 right-0 bottom-0 left-0 w-80 h-44 lg:w-full lg:h-60 md:h-48 md:w-64  sm:w-48 sm:h-32 overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-yellow-400"></div>
                        </div>
                        <div className=" snap-center shrink-0 relative">
                            <img className="shrink-0 w-64 h-56 sm:w-44 sm:h-[180px] md:h-[250px] md:w-52 lg:w-full lg:h-72  rounded-lg shadow-xl bg-[#787d61]" src="/p3/insect4.jpg" />
                            <div className="absolute top-0 right-0 bottom-0 left-0 w-64 h-56 lg:w-full lg:h-72 md:h-[250px] md:w-52 sm:w-44 sm:h-[180px] overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-yellow-400"></div>
                        </div>
                        <div className=" snap-center shrink-0 relative">
                            <img className="shrink-0 w-80 h-44 sm:w-56 sm:h-32 md:h-[240px] md:w-72 lg:w-96 lg:h-72 rounded-lg shadow-xl bg-[#787d61]" src="/p3/insect3.jpg" />
                            <div className="absolute top-0 right-0 bottom-0 left-0 w-80 h-44 lg:w-full lg:h-72 md:h-[240px] md:w-72 sm:w-56 sm:h-32 overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-yellow-400"></div>
                        </div>
                        <div className="carousel-item active  snap-center shrink-0 relative">
                            <img className="shrink-0 w-80 h-44 sm:w-48 sm:h-36 md:h-[250px] md:w-72 lg:w-96 lg:h-72 rounded-lg shadow-xl bg-[#787d61]" src="/p3/insect6.jpg" />
                            <div className="absolute top-0 right-0 bottom-0 left-0 w-80 h-44 lg:w-full lg:h-72 md:h-[250px] md:w-72 sm:w-48 sm:h-36 overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-yellow-400"></div>
                        </div>
                        <div className="snap-center shrink-0 relative">
                            <img className="shrink-0 w-80 h-48 sm:w-52 sm:h-40 md:h-[250px] md:w-80 lg:w-full lg:h-72 rounded-lg shadow-xl bg-[#787d61]" src="/p3/insect5.jpg" />
                            <div className="absolute top-0 right-0 bottom-0 left-0 w-80 h-48 lg:w-full lg:h-72 md:h-[250px] md:w-80 sm:w-52 sm:h-40 overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-yellow-400"></div>
                        </div>
                        <div className=" relative snap-center shrink-0 ">
                            <div className="shrink-0 w-4 sm:w-48"></div>
                        </div>
                    </div>
                    <div className="absolute top-0 p-4 pb-28 w-full h-full flex justify-between place-items-center z-10 lg:visible md:visible sm:invisible invisible">
                        <button onClick={() => { picsRef.current.scrollLeft = picsRef.current.scrollLeft - 300 }}>
                            <ChevronLeftIcon className={`lg:text-[#848572] md:text-[#848572] lg:bg-[#E7E3C7] md:bg-[#E7E3C7] sm:text-transparent text-transparent rounded-full w-16 h-16 cursor-pointer lg:shadow md:shadow ${left ? 'visible' : 'invisible'}`} />
                        </button>
                        <button onClick={() => { picsRef.current.scrollLeft = picsRef.current.scrollLeft + 300 }}>
                            <ChevronRightIcon className={`lg:text-[#848572] md:text-[#848572]  lg:bg-[#E7E3C7] md:bg-[#E7E3C7] sm:text-transparent text-transparent rounded-full w-16 h-16 cursor-pointer lg:shadow md:shadow ${right ? 'visible' : 'invisible'}`} />
                        </button>
                    </div>

                </div>
            </div>


            {/* =============================================p3  */}
            <div className="bg-no-repeat bg-center h-full lg:bg-[url('/p2/p2.png')] sm:bg-[url('/p2/p2-2.png')] md:bg-[url('/p2/p2-2.png')] bg-[url('/p2/p2-3.png')] bg-cover bg-fixed ">
                <div className="h2 lg:ml-40 lg:pt-10 md:pt-8 mx-8 pt-8 sm:pt-1 lg:text-4xl md:text-2xl sm:text-2xl text-2xl font-bold"><h2>Plant Classification</h2></div>
                <div className="no-scroll w-full flex lg:justify-center gap-4 snap-x snap-mandatory overflow-x-auto mt-20 lg:mt-48 sm:mt-10 h-fit scrollbar-hide">
                    <div className="snap-center shrink-0">
                        <div className="shrink-0 w-2 lg:w-20 sm:w-8"></div>
                    </div>
                    <div className="snap-center shrink-0 relative gur p-2 border-4 border-solid rounded-xl h-fit w-fit">
                        <img className="shrink-0 lg:h-72 md:h-56 h-52 sm:h-48 md:w-64 lg:w-72 sm:w-52 w-64 rounded-lg hover:scale-110 transition duration-300 ease-in-out" src="p2/gur2.jpg" />
                    </div>
                    <div className="gur snap-center shrink-0 relative p-2 h-fit border-4 border-solid rounded-xl">
                        <img className="shrink-0 lg:h-72 md:h-56 sm:h-48 h-52 md:w-52 lg:w-72 sm:w-44 w-52 rounded-lg hover:scale-110 transition duration-300 ease-in-out" src="p2/gur3.jpg" />
                    </div>
                    <div className="snap-center shrink-0 relative gur p-2 h-fit border-4 border-solid rounded-xl">
                        <img className="shrink-0 lg:h-72 md:h-56 sm:h-48 h-52 md:w-52 lg:w-72 sm:w-44 w-52 rounded-lg hover:scale-110 transition duration-300 ease-in-out" src="p2/gur1.jpg" />
                    </div>
                    <div className="snap-center shrink-0">
                        <div className="shrink-0 w-4 lg:w-20 sm:w-30"></div>
                    </div>
                </div>
                <div className="flex justify-center place-items-center gap-2 lg:mt-36 sm:mt-7 md:mt-14 mt-16 pb-5">
                    <h1 className="h2 text-sm lg:text-lg mr-2">Get in Touch</h1>
                    <p className="transform motion-safe:hover:scale-125 transition ease-in-out delay-250"><a className="" href="mailto:asia.zahir2000@gmail.com"><img src="p2/email.png" className="lg:w-7 lg:h-7 w-6 h-6" /></a></p>
                    <p className="transform motion-safe:hover:scale-125 transition ease-in-out delay-250"><a className="" href="https://www.linkedin.com/in/asia-zahir-173074216/"><img src="p2/linkd.png" className="lg:w-7 lg:h-7 w-6 h-6" /></a></p>
                </div>
            </div>

        </div>

    )
}

export default Biologist;