import React from 'react';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';

export default function About() {


    return (
        <div id="about" className="h-screen-2xl lg:h-screen pt-20 md:pt-40 pb-10 -mb-0 3xl:-mb-40 bg-white dark:bg-black text-black dark:text-white">
            <div id="aboutSection" className="page-section px-4 md:px-20">
                <div className="flex flex-col lg:flex-row justify-center">
                    <Tilt>
                        <div className="to-animate scale-up flex flex-row lg:hidden mb-16 justify-center">
                            <Image src="/manStanding.png" alt="Man standing with swirling galaxy illustration behind him" width={500} height={400} className="" />
                        </div>
                    </Tilt>

                    <Tilt>
                        <div className="to-animate scale-up hidden lg:flex justify-center">
                            <Image src="/manStanding.png" alt="Man standing with swirling galaxy illustration behind him" width={500} height={400}  className="" />
                        </div>
                    </Tilt>


                    <div className="to-animate from-right flex flex-col w-full max-w-xl -mt-20">
                        <h1 className="mb-10 ml-0 md:ml-10 text-black dark:text-white font-semibold text-3xl md:text-4xl lg:text-5xl">Creative, Excited, Hardworking</h1>
                        <p className="ml-0 md:ml-10 text-gray-700 dark:text-gray-300 text-lg md:text-2xl">
                        Hi there! I&apos;m Keith, a passionate <b> frontend developer </b>with a knack for problem-solving and a burning desire to innovate in the digital space.  
                        I thrive on tackling challenges, and using my knowledge of <b>Javascript, Python, HTML and CSS,</b>  as well as libraries and frameworks such as <b> React.js, Nextjs, and Tailwindcss,</b>  I love leaving a lasting impact wherever I go. 
                        My leadership and management skills allow me to drive innovation in collaborative environments, and  
                        I&apos;m actively seeking opportunities to create <b> beautiful and fully responsive web applications. </b>  Currently, I&apos;m rapidly expanding my skillset including completing a Full-Stack Engineering bootcamp at Springboard, 
                        while simultaneously contributing to talented teams as a frontend contractor. 
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}