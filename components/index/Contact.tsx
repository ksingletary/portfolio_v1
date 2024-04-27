import React from 'react'

export default function Contact() {

    return (
        <>
            <div id="contact" className="bg-white dark:bg-black pb-24">
                <div id="contactSection" className="page-section relative py-16">
                    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="to-animate from-left bg-slate-700 relative -mt-40 rounded-2xl px-6 pt-10 lg:pt-20 pb-10 bg-snow dark:bg-onyx overflow-hidden shadow-xl  sm:px-12">
                            <div className=" flex flex-col lg:flex-row sm:text-center">
                                <h2 className="text-3xl font-extrabold text-black dark:text-white tracking-tight text-center sm:text-4xl">
                                    Let's work together
                                </h2>
                                <p className="mt-4 mb-10 lg:mt-0 w-full lg:w-1/3 mx-auto max-w-2xl text-center text-xl text-gray-700 dark:text-gray-300">
                                    I am excited to learn about your next project! Reach out and we can build it together.
                                </p>
                                <a href="/contact" className="h-11 w-60 mx-auto lg:ml-0 px-8 pt-2 bg-primary hover:bg-secondary bg-pink-700 transform ease-in-out duration-300 hover:-translate-y-1 font-semibold text-center text-white text-xl rounded-full shadow-xl">
                                    Contact me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}