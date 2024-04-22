import React from "react";
import Tilt from "react-parallax-tilt";
import TypeIt from "typeit-react";

export default function GetInTouch() {

    return (
        <div className="h-full py-10 md:py-40 bg-tertiary dark:bg-raisin text-black dark:text-white">
            <div className="px-4 md:px-20">
                <div className="flex flex-col lg:flex-row justify-center">
                    <Tilt>
                        <div className="to-animate scale-up flex flex-row lg:hidden mb-16 justify-center">
                            <img src="/handshake.png" className="w-2/3" />
                        </div>
                    </Tilt>


                    <div className="to-animate from-left flex flex-col w-full max-w-xl">
                        <h1 className="mb-10 ml-0 md:ml-10 text-black dark:text-white font-semibold text-3xl md:text-4xl lg:text-5xl">Looking to start a project?</h1>
                        <p className="mb-8 ml-0 md:ml-10 text-black dark:text-white text-lg md:text-2xl">
                            Schedule a time to meet. I can't wait to hear your idea!
                        </p>
                        <a href="/contact" className="h-11 w-48 ml-0 md:ml-10 px-8 py-2 bg-primary hover:bg-secondary transform ease-in-out duration-300 hover:-translate-y-1 font-semibold text-center text-white text-xl rounded-full shadow-xl bg-pink-700 dark:shadow-gray-900">
                            Let's do this!
                        </a>
                    </div>

                    <Tilt>
                        <div className="to-animate scale-up hidden lg:flex justify-center">
                            <img src="/handshake.png" alt="People working together at a desk" className="w-2/3" />
                        </div>
                    </Tilt>

                </div>
            </div>
            <div className=" h-0 bg-white"></div>
        </div>
    )
}