import React from 'react';
import TypeIt from 'typeit-react';

export default function Discover() {

    const startAnimation = () => {
        const elementsToAnimate = document.querySelectorAll(".discover")
        elementsToAnimate.forEach((element) => element.classList.add("animated"));
        console.log(elementsToAnimate)
    }

    return (
        <div id="discover" className="bg-tertiary dark:bg-gray-800 ">
            <svg className="block dark:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="black" fillOpacity="1" d="M0,64L120,58.7C240,53,480,43,720,80C960,117,1200,203,1320,245.3L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
            <svg className="hidden dark:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="black" fillOpacity="1" d="M0,64L120,58.7C240,53,480,43,720,80C960,117,1200,203,1320,245.3L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
            <div id="discoverSection" className="page-section px-4 pb-16 mx-auto -mt-28 lg:-mt-42 sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:pb-20">
                <div className="flex flex-col mb-0 justify-left lg:justify-center lg:flex-row md:mb-8">
                    <h2 className="to-animate from-bottom mb-5 font-semibold text-3xl md:text-4xl lg:text-5xl text-black dark:text-white sm:leading-none md:mb-6 group">
                        <span className="inline-block text-center mx-20 md:mx-10">
                            Talk is cheap, let's see some results
                        </span>
                    </h2>
                </div>
                <div className="hidden lg:flex flex-col mb-10">
                    <TypeIt options={{ speed: 12, waitUntilVisible: true, lifeLike: true, afterComplete: () => startAnimation()}}
                    >
                        <p className="strikethrough text-gray-600 dark:text-gray-400 text-md md:text-xl" >&#47;&#47; TODO:</p>
                        <br/>
                        <p className="strikethrough text-gray-600 dark:text-gray-400 text-md md:text-xl">&#47;&#47; Code a cool grid with some recent projects here &#8595;&#8595;&#8595;</p>
                    </TypeIt>
                </div>
                <div className="flex flex-col lg:hidden mb-10">
                    <TypeIt options={{ speed: 12, waitUntilVisible: true, lifeLike: true, afterComplete: () => startAnimation()}}>
                        <p className="strikethrough text-gray-600 dark:text-gray-400 text-md md:text-xl">&#47;&#47; TODO:</p>
                        <br/>
                        <p className="strikethrough text-gray-600 dark:text-gray-400 text-md md:text-xl">&#47;&#47; Code a cool grid with</p>
                        <br/>
                        <p className="strikethrough text-gray-600 dark:text-gray-400 text-md md:text-xl">&#47;&#47; some recent projects here &#8595;&#8595;&#8595;</p>
                    </TypeIt>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    <a target="_blank" href="" aria-label="View Item" className="discover from-bottom first h-auto">
                        <div className="relative overflow-hidden transition duration-200 transform hover:-translate-y-2 group rounded shadow-md hover:shadow-lg dark:shadow-gray-900">
                            <img
                                className="object-contain w-full transform duration-300 ease-in-out group-hover:scale-125"
                                src="/voyagr.png"
                                alt=""
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-95 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-3xl font-bold text-gray-100">EXAMPLE 1</p>
                                <p className="text-xl tracking-wide text-gray-300">
                                    EXAMPLE <i>2</i> !
                                </p>
                            </div>
                        </div>
                    </a>
                    <a target="_blank" href="https://cfacapcentre-steeplechase.netlify.app/" aria-label="View Item" className="discover from-bottom second h-auto">
                        <div className="relative overflow-hidden transition duration-200 transform hover:-translate-y-2 group rounded shadow-md hover:shadow-lg dark:shadow-gray-900">
                            <img
                                className="object-contain w-full transform duration-300 ease-in-out group-hover:scale-125"
                                src="/cfa0.png"
                                alt="chick-fil-a site page"
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-95 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-3xl font-bold text-gray-100">Chick-fil-A</p>
                                <p className="text-xl tracking-wide text-gray-300">
                                    Individual Chick-fil-A frontend built for two stores in the same area.
                                </p>
                            </div>
                        </div>
                    </a>
                    <a target="_blank" href="https://voyagr.onrender.com/voyagr" aria-label="View Item" className="discover from-bottom third h-auto">
                        <div className="relative overflow-hidden transition duration-200 transform hover:-translate-y-2 group rounded shadow-md hover:shadow-lg dark:shadow-gray-900">
                            <img
                                className="object-contain w-full transform duration-300 ease-in-out group-hover:scale-125"
                                src="/voyagr1.png"
                                alt="Travel website homepage"
                            />
                            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-95 opacity-0 hover:opacity-100">
                                <p className="mb-4 text-3xl font-bold text-gray-100">Voyagr</p>
                                <p className="text-xl tracking-wide text-gray-300">
                                    My own spin on a Full fledged travel agency backend and frontend.
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="text-center mt-8">
                    <a
                        href="/discover"
                        aria-label=""
                        className="discover from-bottom third inline-flex items-center font-semibold transition-colors duration-200 text-xl text-primary hover:text-secondary"
                    >
                        See more
                        <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                        >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div >
    )
}