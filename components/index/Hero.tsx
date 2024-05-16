import React from 'react';
import Tilt from 'react-parallax-tilt';
import TypeIt from "typeit-react";
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {

    return (
        <div id="home" className="h-full pt-10 md:pt-40 bg-tertiary dark:bg-raisin text-black dark:text-white">
            <div id="homeSection" className="page-section px-2 md:px-20">
                <div className="flex flex-col lg:flex-row justify-center">
                    <Tilt>
                        <div className="to-animate scale-up flex flex-row lg:hidden mt-14 mb-16 justify-center">
                            <Image src="/me.jpg" alt="pic of me" className="w-2/3" />
                        </div>
                    </Tilt>

                    <div className="flex flex-col h-60 w-full max-w-xl">
                        <TypeIt options={{ speed: 10, waitUntilVisible: true }}>
                            <p className="text-gray-600 dark:text-gray-400 text-md md:text-xl">&#60;h1&#62;</p>
                            <h1 className="ml-6 md:ml-10 text-black dark:text-white font-semibold text-4xl md:text-5xl lg:text-6xl">Hello, World! I&apos;m Keith</h1>
                            <p className="text-gray-600 dark:text-gray-400 text-md md:text-xl">&#60;/h1&#62;</p>
                            <p className="mt-2 text-gray-600 dark:text-gray-400 text-md md:text-xl">&#60;p&#62;</p>
                            <div className="flex flex-row">
                                <div className="ml-6 md:ml-10 text-black dark:text-white text-lg md:text-2xl">
                                    Frontend 
                                    <Link href="https://github.com/ksingletary" target="_blank" className="text-xl mx-2 text-orange-500 hover:text-orange-400 transition duration-300 ease-in-out md:text-3xl"><b>&#60;Developer /&#62;</b></Link>                                 
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-md md:text-xl">&#60;/p&#62;</p>
                        </TypeIt>
                    </div>
                    <Tilt>
                        <div className="to-animate scale-up hidden lg:flex justify-center">
                            <Image src="/me.jpg" alt="pic of me" className="w-2/3 rounded-full" />
                        </div>
                    </Tilt>

                </div>
            </div>
            <svg className="-mt-0 lg:-mt-10 lg:-mt20 block dark:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#FCFCFC" fillOpacity="1" d="M0,224L360,64L720,288L1080,160L1440,256L1440,320L1080,320L720,320L360,320L0,320Z"></path>
            </svg>
            <svg className="-mt-0 lg:-mt-10 lg:-mt20 hidden dark:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#000000" fillOpacity="1" d="M0,224L360,64L720,288L1080,160L1440,256L1440,320L1080,320L720,320L360,320L0,320Z"></path>
            </svg>
        </div>
    )
}