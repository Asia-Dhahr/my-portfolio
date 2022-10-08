import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/solid'
import { useRouter } from "next/router";


const WebDeveloper = () => {
    const router = useRouter()

    return (
        <div className="">
            <div className="bg-no-repeat bg-center h-fit lg:h-screen lg:bg-[url('/web/web.png')] sm:bg-[url('/web/web.png')] md:bg-[url('/web/webs.png')] bg-[url('/web/webs.png')] bg-cover">
                <div className="sm:pt-3 md:pt-3 lg:pt-2 pt-2 lg:pl-8 md:pl-4 pl-2">
                    <ArrowLeftIcon className='icon2 h-12 w-12 p-1 rounded-full border-r-2 transition ease-in-out delay-96 cursor-pointer' onClick={() => router.push("/")} />
                </div>
                <div className="pt-10 sm:pt-0 md:pl-5 sm:ml-3 ml-2 md:pt-6 lg:mt-14 font-bold lg:text-xl md:text-sm sm:text-base text-base  text-[#45C916] lg:h-fit md:h-fit sm:h-6 h-24 w-40 md:w-fit mt-8 md:mt-0">
                    <h1 className="pb-1 lg:my-20 lg:ml-0 ml-2 md:ml-0 lg:-rotate-90 border-b-4 w-20 border-[#328FFC]">Web_Developer</h1>
                </div>
                <div className="lg:flex md:flex sm:flex grid justify-center items-center p-3 md:p-0 md:pb-8 sm:pb-6 lg:mt-0 md:mt-8 sm:mt-5 mt-0 lg:gap-28 md:gap-14 sm:gap-10 gap-10 text-blue-50">
                    <div className="lg:w-2/6 md:w-2/4 sm:w-80 w-[80%] lg:mx-0 md:mx-0 sm:mx-0 mx-auto">
                        <h1 className="lg:text-2xl md:text-xl sm:text-lg text-lg font-semibold"><span className="span ">My story as Designer and</span> Developer</h1>
                        <p className="lg:text-lg md:text-base sm:text-sm text-sm pt-4 text-justify">After graduation, I decided that I wanted to learn new skills and explore new areas, so I decided to learn programming. I started with UI/UX design because it was something that interested me. I participated in a we-code UI/UX bootcamp, which was a great introduction to the world of user interface design. I then decided to learn front-end and back-end development, which was really interesting. My first personal project was to develop my portfolio.</p>
                    </div>
                    <div className="">
                        <img src="web/chart.png" className="lg:h-96 lg:w-96 md:h-56 md:w-56 sm:w-52 sm:h-52 h-48 lg:mx-0 md:mx-0 sm:mx-0 mx-auto" />
                    </div>
                </div>
            </div>
            {/* ==========================================p2 */}
            <div className="  bg-[url('/web/p2.png')] h-fit lg:bg-screen bg-cover bg-scroll">
                <div className="flex justify-center place-items-center text-white mx-4 md:pt-28 sm:pt-20 pt-20">
                    <div className="lg:flex md:flex sm:flex grid justify-center place-items-center lg:gap-10 md:gap-10 sm:gap-5 gap-5 mt-0 sm:mx-3">
                        <section className="text-blue-50 lg:w-1/3 md:w-2/5 sm:w-80 w-[80%]  ">
                            <div className="ux lg:mb-20 md:mb-10 sm:mb-10 mb-7">
                                <h1 className="font-semibold lg:text-2xl md:text-2xl sm:text-2xl text-xl">
                                    UI/UX Designer
                                </h1>
                            </div>
                            <h2 className="span border-b-3 w-11 lg:text-xl md:text-xl sm:text-xl text-lg font-semibold ">Furnilax</h2>
                            <p className="text-justify lg:text-lg  md:text-lg  sm:text-sm text-sm pt-4 lg:mb-20 md:mb-20 sm:mb-20 ">Furnilax is my first case study for Furniture app and website, are selling online and make big brand identity.
                                My role was ux researcher, ui designer, prototyping, wireframing, and user testing and more projects in progress.</p>
                        </section>
                        <section className="">
                            <div className="span border-4 ">
                                <a href="https://www.behance.net/gallery/134480207/Furniture-shop"><img className="lg:h-80 md:h-56 sm:h-40 h-44 object-contain p-1" src="web/furnilax.jpg" /></a>
                            </div>
                            <div className="flex justify-end items-center text-center mt-5 gap-6 ">
                                <a className="transform motion-safe:hover:scale-125 transition ease-in-out delay-250" href="https://www.behance.net/elysiumelys"><img className="lg:h-8 lg:w-8 md:h-8 md:w-8 sm:h-6 sm:w-6 h-6 w-6" src="web/behance.png" /></a>
                                <button className="span lg:text-base md:text-sm sm:text-sm text-sm font-semibold lg:h-12 lg:w-40 md:h-11 md:w-36 sm:h-10 sm:w-36 h-10 w-36 border-4 rounded shadow-lg hover:shadow-[#50bd29]/50 hover:text-[#4cea12] transition duration-300 "><a href="https://www.behance.net/gallery/134480207/Furniture-shop">View Case Study</a></button>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="flex justify-center">
                    <section className="lg:w-2/3 md:w-full sm:w-full w-full lg:mt-10 md:mt-10 sm:mt-10 mt-20 lg:mb-14 md:mb-14 sm:mb-7 mb-7">
                        <h1 className="lg:mx-12 md:mx-10 sm:mx-6 mx-6 text-blue-50 border-b-3 lg:text-xl md:text-xl sm:text-base text-base font-semibold "><span className="span">Design</span> Skills</h1>
                    </section>
                </div>
                <div className="flex justify-center mx-2 ">
                    <div className="flex flex-rows lg:gap-20 md:gap-4 sm:gap-0 gap-6 w-fit place-content-center ">
                        <section className="flex flex-col lg:gap-6 md:gap-6 sm:gap-6 gap-4">
                            <div className=" display-block text-blue-50">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-sm text-sm">Figma</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-60 w-[150px] lg:h-4 md:h-4 sm:h-3 h-3  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-11/12 md:w-64 sm:w-[220px] w-[135px] lg:h-4 md:h-4 sm:h-3 h-3 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                            <div className=" display-block text-blue-50">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-sm text-sm">Adobe XD</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-60 w-[150px] lg:h-4 md:h-4 sm:h-3 h-3  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-72 md:w-56 sm:w-44 w-[118px] lg:h-4 md:h-4 sm:h-3 h-3 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                            <div className=" display-block text-blue-50">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-sm text-sm">Krita</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-60 w-[150px]lg:h-4 md:h-4 sm:h-3 h-3 rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-72 md:w-60 sm:w-48 w-[118px] lg:h-4 md:h-4 sm:h-3 h-3 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                        </section>
                        <section className="flex flex-col lg:gap-6 md:gap-6 sm:gap-6 gap-4 ">
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-10 whitespace-nowrap">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-sm text-sm whitespace-nowrap">wireframe & prototype</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-60 w-[150px] lg:h-4 md:h-4 sm:h-3 h-3  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-11/12 md:w-64 sm:w-[220px] w-[135px] lg:h-4 md:h-4 sm:h-3 h-3 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-10 ml-">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-sm text-sm">Visual communication</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-60 w-[150px] lg:h-4 md:h-4 sm:h-3 h-3  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-80 md:w-64 sm:w-56 w-[135px] lg:h-4 md:h-4 sm:h-3 h-3 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-10 ml-">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-sm text-sm">Analytical</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-60 w-[150px] lg:h-4 md:h-4 sm:h-3 h-3  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-72 md:w-52 sm:w-52 w-[135px] lg:h-4 md:h-4 sm:h-3 h-3 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>

                        </section>
                    </div>
                </div>
            </div>
            {/* ====================================================p3  */}
            <div className="h-full md:h-[66em] lg:h-[76em] sm:h-[55em] bg-cover bg-scroll bg-no-repeat bg-center lg:bg-[url('/web/p3.png')] sm:bg-[url('/web/p3-3.png')] md:bg-[url('/web/p3-2.png')] bg-[url('/web/p3.png')]  ">
                <div className="flex justify-center">
                    <section className="lg:w-2/3 md:w-full sm:w-full w-full lg:pt-10 md:mt-20 sm:mt-14 mt-20 lg:mb-12 md:mb-8 sm:mb-7 mb-7">
                        <h1 className="wd lg:mx-12 md:mx-10 sm:mx-6 mx-6 text-blue-50 border-b-3 font-semibold lg:text-2xl md:text-2xl sm:text-xl text-xl">Web Developer</h1>
                        <div className="text-blue-50 lg:w-1/2 md:w-2/3 sm:w-[30rem] w-80 pt-8 lg:mx-12 md:mx-10 sm:mx-6 mx-6">
                            <h2 className="span border-b-3 w-14 lg:text-xl md:text-xl sm:text-xl text-lg font-semibold ">Front_End</h2>
                            <p className="text-justify lg:text-lg  md:text-lg  sm:text-sm text-sm pt-6 lg:mb-20 md:mb-20 sm:mb-10 ">I worked at Ovanya company as a front-end developer and participated in three closed-source software projects. My primary responsibility on their team was to design user-friendly UI/UX and then bring those designs to life with code.</p>
                        </div>
                        <h2 className="lg:mx-12 md:mx-10 sm:mx-6 mx-6 text-blue-50 border-b-3 lg:text-xl md:text-xl sm:text-base text-lg  font-semibold lg:mt-8 md:mt-8 sm:mt-8 mt-10"><span className="span">Program</span> Skills</h2>
                    </section>
                </div>
                <div className="flex justify-center mt-2">
                    <div className="flex flex-rows lg:gap-20 md:gap-4 sm:gap-0 gap-6 w-fit place-content-center ">
                        <section className="flex flex-col lg:gap-6 md:gap-6 sm:gap-6 gap-4">
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-0 ">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-sm text-sm">Next Js</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-60 w-[150px] lg:h-4 md:h-4 sm:h-3 h-3 rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-80 md:w-64 sm:w-52 w-32 lg:h-4 md:h-4 sm:h-3 h-3 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-0 ">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-sm text-sm">React</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-60 w-[150px] lg:h-4 md:h-4 sm:h-3 h-3  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-[280px] md:w-52 sm:w-44 w-28 lg:h-4 md:h-4 sm:h-3 h-3 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-0 ">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-sm text-sm">HTML</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-60 w-[150px] lg:h-4 md:h-4 sm:h-3 h-3  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-[350px] md:w-64 sm:w-56 w-[138px] lg:h-4 md:h-4 sm:h-3 h-3 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-0 ">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-sm text-sm">CSS</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-60 w-[150px] lg:h-4 md:h-4 sm:h-3 h-3 rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-[280px] md:w-56 sm:w-44 w-32 lg:h-4 md:h-4 sm:h-3 h-3 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-0">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-sm text-sm">Tailwind CSS</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-60 w-[150px] lg:h-4 md:h-4 sm:h-3 h-3  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-80 md:w-64 sm:w-56 w-[138px] lg:h-4 md:h-4 sm:h-3 h-3 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                        </section>
                        <section className="flex flex-col lg:gap-6 md:gap-6 sm:gap-6 gap-4">
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-10">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-sm text-xs">JavaScript</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-60 w-[150px] lg:h-4 md:h-4 sm:h-3 h-3  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-[280px] md:w-52 sm:w-52 w-[6rem] lg:h-4 md:h-4 sm:h-3 h-3 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-10">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-sm text-sm">Nodejs / Express</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-60 w-[150px] lg:h-4 md:h-4 sm:h-3 h-3 rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-52 md:w-52 sm:w-44 w-28 lg:h-4 md:h-4 sm:h-3 h-3 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-10">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-sm text-sm">MySQL / Mongodb</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-60 w-[150px] lg:h-4 md:h-4 sm:h-3 h-3  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-52 md:w-52 sm:w-44 w-28 lg:h-4 md:h-4 sm:h-3 h-3 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-10">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-sm text-sm">Github</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-60 w-[150px] lg:h-4 md:h-4 sm:h-3 h-3  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-72 md:w-60 sm:w-[210px] w-32 lg:h-4 md:h-4 sm:h-3 h-3 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                            <div className=" display-block text-blue-50 lg:ml-0 md:ml-10 sm:ml-10">
                                <h1 className="mb-3 font-base lg:text-lg md:text-base sm:text-sm text-sm">Terminal</h1>
                                <div className="bg-[url('/web/opacity.png')] bg-no-repeat bg-cover lg:w-96 md:w-72 sm:w-60 w-[150px] lg:h-4 md:h-4 sm:h-3 h-3  rounded-r-xl rounded-l-2xl ">
                                    <div className="rate lg:w-80 md:w-60 sm:w-[210px] w-32 lg:h-4 md:h-4 sm:h-3 h-3 bg-green-400 rounded-r-full rounded-l-full shadow-lg hover:shadow-green-400/50 hover:text-green-300 transition duration-300"></div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="flex justify-center items-center text-center lg:mt-28 md:mt-[118px]  sm:mt-16 mt-16 sm:mb-8 md:mr-12 gap-6 text-blue-50 pb-12">
                    <a className="transform motion-safe:hover:scale-125 transition ease-in-out delay-250" href="https://github.com/Asia-Dhahr"><img className="lg:h-8 lg:w-8 md:h-8 md:w-8 sm:h-7 sm:w-7 h-7 w-7" src="web/github.png" /></a>
                    <button className="span lg:text-base md:text-sm sm:text-sm text-sm font-semibold lg:h-10 lg:w-26 md:h-10 md:w-32 sm:h-10 sm:w-32 h-10 w-36 border-4 rounded shadow-lg hover:shadow-[#50bd29]/50 hover:text-[#67f334] transition duration-300 "><a href="/web/asia dhaher.pdf">My Resume</a></button>
                </div>
            </div>
        </div>
    )
}

export default WebDeveloper;