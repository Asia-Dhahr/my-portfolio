import React from 'react';


const Footer = () => {
    return (
        <footer className="flex lg:absolute fixed justify-center place-items-center inset-x-0 lg:bottom-9 md:bottom-3 bottom-2 sm:bottom-2 ">
            <div className="grid grid-flow-col justify-center place-items-center gap-4 ">
                <h1 className="lg:text-sm sm:text-xs md:text-sm text-xs font-base pr-3 text-purple-100">Contact Me Via</h1>
                <p className="transform motion-safe:hover:scale-125 transition ease-in-out delay-250 "><a className="" href="https://www.linkedin.com/in/asia-zahir-173074216/">  <img
                    src="linkd.png"
                    className="w-6 h-6 lg:h-8 lg:w-8 md:h-6 md:w-6 sm:h-5 sm:w-5" /></a></p>
                <p className="transform motion-safe:hover:scale-125 transition ease-in-out delay-250"><a className="" href="mailto:asia.zahir2000@gmail.com"><img src="email.png" className="w-6 h-6 lg:h-8 lg:w-8 md:h-6 md:w-6 sm:h-5 sm:w-5" /></a></p>
                <p className="transform motion-safe:hover:scale-125 transition ease-in-out delay-250"><a className="" href="https://www.instagram.com/7.19pm___asia/?hl=en"><img src="insta.png" className="w-6 h-6 lg:h-8 lg:w-8 md:h-6 md:w-6 sm:h-5 sm:w-5" /></a></p>
            </div>
        </footer>
    )
}

export default Footer;