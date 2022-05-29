import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/solid'
import { useRouter } from "next/router";


const WebDeveloper = () => {
    const router = useRouter()

    return (
        <div>
            <div className=" lg:bg-cover bg-no-repeat md:bg-cover sm:bg-cover bg-center h-screen lg:bg-[url('/web/web.png')] sm:bg-[url('/web/webs.png')] md:bg-[url('/web/webm.png')] bg-[url('/web/webs.png')] bg-cover">
                <div className="p-3 pl-8">
                    <ArrowLeftIcon className='icon2 h-12 w-12 p-1 rounded-full border-r-2 transition ease-in-out delay-96 cursor-pointer' onClick={() => router.push("/")}
                    />
                </div>
                <div className="pt-10 font-bold lg:text-xl md:text-lg sm:text-md text-md  text-green-400 h-44 w-40 ">
                    <h1 className="pb-1 lg:my-24 my-16 ml-3 -rotate-90 border-b-4 w-20 border-sky-600">Web_Developer</h1>
                </div>
                <div className="lg:flex md:flex sm:flex grid justify-center items-center p-3  lg:mt-10 md:mt-10 sm:mt-24 mt-6 lg:gap-28 md:gap-16 sm:gap-10 gap-10 text-blue-50">
                    <div className="lg:w-2/6 md:w-2/5 sm:w-80 w-2/3 lg:mx-0 md:mx-0 sm:mx-0 mx-auto">
                        <h1 className="lg:text-2xl md:text-xl sm:text-lg text-lg font-semibold "><span className="span ">My story as Designer and</span> Developer</h1>
                        <p className="lg:text-lg md:text-base sm:text-sm text-sm pt-4 text-justify">After graduation in biology science, I loved to try new skills so, I steped into learn programing,
                            and started as UI/UX. Participated in we-code UI/UX bootcamp. It was a very good start for me.Then i tried to learn front and back-end developer,
                            it was really interesting. And I developed my portfolio as first project.</p>
                    </div>
                    <div className="">
                        <img src="web/chart.png" className="lg:h-96 lg:w-96 md:h-80 md:w-80 sm:w-52 sm:h-52 h-48 lg:mx-0 md:mx-0 sm:mx-0 mx-auto" />
                    </div>
                </div>
            </div>
            {/* ==========================================p2  */}
            <div className="bg-[url('/web/p2.png')] h-screen bg-cover">
                {/* <div className="flex justify-start items-start">
                    <div className="absolute lg:visible md:visible sm:visible invisible " ><img src="web/design.png" className="mandala lg:w-64 lg:h-64 md:w-44 md:h-44 sm:w-40 sm:h-40 h-20  animate-spin" /></div>
                </div> */}
                <div className="flex justify-center place-items-center text-white mx-4">
                    <div className="lg:flex md:flex sm:flex grid justify-center place-items-center lg:gap-36 md:gap-10 sm:gap-5 gap-5 mt-0 sm:mx-3">
                        <section className="text-blue-50 lg:w-1/4 md:w-2/5 sm:w-80 w-3/4  ">
                            <div className="ux lg:mb-20 md:mb-20 sm:mb-20 mb-7">
                                <h1 className="font-semibold text-2xl">
                                    UI/UX Designer
                                </h1>
                            </div>
                            <h2 className="span border-b-3 w-11 text-xl font-semibold ">Furnilax</h2>
                            <p className="text-justify lg:text-lg  md:text-lg  sm:text-sm text-sm pt-4 lg:mb-20 md:mb-20 sm:mb-20 ">Furnilax is my first case study for Furniture app and website, are selling online and make big brand identity.
                                My role was ux researcher, ui designer, prototyping, wireframing, and user testing and more projects in progress.</p>
                        </section>
                        <section className="">
                            <div className="span border-4 ">
                                <img className="lg:h-80 md:h-64 sm:h-52 h-56 object-contain p-1" src="web/furnilax.jpg" />
                            </div>
                            <div className="flex justify-end items-center text-center mt-5 gap-6 ">
                                <a className="transform motion-safe:hover:scale-125 transition ease-in-out delay-250" href="https://www.behance.net/elysiumelys"><img className="lg:h-8 lg:w-8 md:h-8 md:w-8 sm:h-6 sm:w-6 h-6 w-6" src="web/behance.png" /></a>
                                <button className="span lg:text-lg md:text-base sm:text-sm text-sm font-semibold lg:h-12 lg:w-40 md:h-11 md:w-36 sm:h-10 sm:w-36 h-10 w-36 border-4 rounded shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300 "><a href="https://www.behance.net/gallery/134480207/Furniture-shop">View Case Study</a></button>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="flex justify-center">
                    <section className="lg:w-2/3 md:w-full sm:w-full w-full mt-10 lg:mb-14 md:mb-14 sm:mb-14 mb-7">
                        <h1 className="lg:mx-12 md:mx-10 sm:mx-4 mx-10 text-blue-50 border-b-3 text-xl font-semibold "><span className="span">Design</span> Skills</h1>
                    </section>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-rows lg:gap-20 md:gap-4 sm:gap-0 gap-0 w-4/6 place-content-center ">
                        <section className="flex flex-col lg:gap-6 md:gap-6 sm:gap-6 gap-4">
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-0 ml-0">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-base text-sm">Figma</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-64 w-40 h-4  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-11/12 md:w-64 sm:w-60 w-36 h-4 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-0 ml-0">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-base text-sm">Adobe XD</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-64 w-40 h-4  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-72 md:w-60 sm:w-52 w-32 h-4 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-0 ml-0">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-base text-sm">Krita</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-64 w-40 h-4  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-80 md:w-64 sm:w-56 w-36 h-4 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                        </section>
                        <section className="flex flex-col lg:gap-6 md:gap-6 sm:gap-6 gap-4">
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-10 ml-10">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-base text-xs">Wireframing & prototyping</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-64 w-40 h-4  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-11/12 md:w-64 sm:w-60 w-36 h-4 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-10 ml-10">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-base text-sm">Visual communication</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-64 w-40 h-4  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-80 md:w-64 sm:w-60 w-36 h-4 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-10 ml-10">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-base text-sm">Analytical</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-64 w-40 h-4  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-72 md:w-60 sm:w-52 w-32 h-4 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>

                        </section>
                    </div>
                </div>
            </div>
            {/* ====================================================p3  */}
            <div className="h-screen bg-cover bg-no-repeat bg-center lg:bg-[url('/web/p3.png')] sm:bg-[url('/web/p3-3.png')] md:bg-[url('/web/p3-2.png')] bg-[url('/web/p3-3.png')] ">
                <div className="flex justify-center">
                    <section className="lg:w-2/3 md:w-full sm:w-full w-full mt-20 lg:mb-14 md:mb-14 sm:mb-14 mb-7">
                        <h1 className="wd lg:mx-12 md:mx-10 sm:mx-4 mx-10 text-blue-50 border-b-3 font-semibold text-2xl">Web Developer</h1>
                        <h2 className="lg:mx-12 md:mx-10 sm:mx-4 mx-10 text-blue-50 border-b-3 text-xl font-semibold mt-16"><span className="span">Program</span> Skills</h2>
                    </section>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-rows lg:gap-20 md:gap-4 sm:gap-0 gap-0 w-4/6 place-content-center ">
                        <section className="flex flex-col lg:gap-6 md:gap-6 sm:gap-6 gap-4">
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-0 ml-0">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-base text-sm">Next Js</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-64 w-40 h-4  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-80 md:w-64 sm:w-60 w-36 h-4 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-0 ml-0">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-base text-sm">React</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-64 w-40 h-4  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-72 md:w-60 sm:w-52 w-32 h-4 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-0 ml-0">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-base text-sm">HTML</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-64 w-40 h-4  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-80 md:w-64 sm:w-56 w-36 h-4 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-0 ml-0">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-base text-sm">CSS</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-64 w-40 h-4  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-72 md:w-60 sm:w-52 w-32 h-4 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-0 ml-0">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-base text-sm">Tailwind Css</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-64 w-40 h-4  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-80 md:w-64 sm:w-56 w-36 h-4 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                        </section>
                        <section className="flex flex-col lg:gap-6 md:gap-6 sm:gap-6 gap-4">
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-10 ml-10">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-base text-xs">JavaScript</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-64 w-40 h-4  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-72 md:w-60 sm:w-52 w-36 h-4 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-10 ml-10">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-base text-sm">Nodejs / Express</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-64 w-40 h-4  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-68 md:w-56 sm:w-48 w-28 h-4 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-10 ml-10">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-base text-sm">MySQL / Mongodb</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-64 w-40 h-4  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-56 md:w-54 sm:w-48 w-28 h-4 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-10 ml-10">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-base text-sm">Github</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-64 w-40 h-4  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-80 md:w-64 sm:w-60 w-36 h-4 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-10 ml-10">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-base text-sm">Terminal</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-64 w-40 h-4  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-80 md:w-64 sm:w-60 w-36 h-4 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="flex justify-center items-center text-center lg:mt-28 md:mt-28  sm:mt-20 mt-28  md:mr-12 gap-6 text-blue-50 ">
                    <a className="transform motion-safe:hover:scale-125 transition ease-in-out delay-250" href="https://github.com/Asia-Dhahr"><img className="lg:h-8 lg:w-8 md:h-8 md:w-8 sm:h-7 sm:w-7 h-7 w-7" src="web/github.png" /></a>
                    <button className="span pb-1 lg:text-lg md:text-base sm:text-sm text-sm font-semibold lg:h-10 lg:w-26 md:h-10 md:w-32 sm:h-10 sm:w-32 h-10 w-36 border-4 rounded shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300 "><a href="/web/asia dhaher.pdf">My Resume</a></button>
                </div>

            </div>
        </div>
    )
}

export default WebDeveloper;