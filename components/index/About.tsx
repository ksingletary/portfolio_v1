import React from 'react';
import Tilt from 'react-parallax-tilt';

export default function About() {


    return (
        <div id="about" className="h-screen-2xl lg:h-screen pt-20 md:pt-40 pb-10 -mb-0 3xl:-mb-40 bg-white dark:bg-black text-black dark:text-white">
            <div id="aboutSection" className="page-section px-4 md:px-20">
                <div className="flex flex-col lg:flex-row justify-center">
                    <Tilt>
                        <div className="to-animate scale-up flex flex-row lg:hidden mb-16 justify-center">
                            <img src="/manStanding.png" alt="Man standing with swirling galaxy illustration behind him" className="w-2/3" />
                        </div>
                    </Tilt>

                    <Tilt>
                        <div className="to-animate scale-up hidden lg:flex justify-center">
                            <img src="/manStanding.png" alt="Man standing with swirling galaxy illustration behind him" className="w-2/3" />
                        </div>
                    </Tilt>


                    <div className="to-animate from-right flex flex-col w-full max-w-xl">
                        <h1 className="mb-10 ml-0 md:ml-10 text-black dark:text-white font-semibold text-3xl md:text-4xl lg:text-5xl">Creative, Excited, Hardworking</h1>
                        <p className="ml-0 md:ml-10 text-gray-700 dark:text-gray-300 text-lg md:text-2xl">
                            I am a <b>fun-loving Frontend developer, Designer,</b> and <b>Tech enthusiast</b> rapidly growing in web development skills.
                            I am obsessed with creating <b>beautiful and fully responsive web applications</b>.
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}