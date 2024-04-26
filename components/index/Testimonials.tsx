import React from "react";
import TypeIt from "typeit-react";

export default function Testimonials() {

    const startAnimation = () => {
        const elementsToAnimate = document.querySelectorAll(".testimonial")
        elementsToAnimate.forEach((element) => element.classList.add("animated"));
        console.log(elementsToAnimate)
    }

    return (
        <div id="testimonials" className="bg-white dark:bg-black">
            <div id="testimonialsSection" className="page-section px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div className="flex flex-col mt-0 mb-0 justify-center text-center lg:flex-row md:mt-8 md:mb-8">
                        <h2 className="to-animate from-bottom mb-5 font-semibold text-3xl md:text-4xl lg:text-5xl text-black dark:text-white sm:leading-none md:mb-6 group">
                            <span className="inline-block text-center mx-20 md:mx-10">
                                Testimonials
                            </span>
                        </h2>
                    </div>

                    <div className="hidden lg:flex flex-col mb-10 text-gray-600 dark:text-gray-400 text-md md:text-xl">
                        <TypeIt options={{ speed: 12, waitUntilVisible: true, lifeLike: true }}
                            getAfterInit={(instance) => {
                                instance.type("&#47;&#47; Maybe some people I've worked with have some nice things to say...").exec(() => startAnimation()).pause(2000).delete().pause(500).type("&#47;&#47; People I've worked with have some nice things to say!");
                                return instance;
                            }}
                        />
                    </div>
                    <div className="flex flex-col lg:hidden mb-10 text-gray-600 dark:text-gray-400 text-md md:text-xl">
                        <TypeIt options={{ speed: 12, waitUntilVisible: true, lifeLike: true }}
                            getAfterInit={(instance) => {
                                instance.type("&#47;&#47; Maybe some people I've worked with <br/>&#47;&#47; have some nice things to say...").exec(() => startAnimation()).pause(2000).delete().delete(1).pause(500).type("&#47;&#47; People I've worked with <br/>&#47;&#47; have some nice things to say!");
                                return instance;
                            }}
                        />
                    </div>
                </div>
                <div className="grid gap-8 space-y-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <div className="testimonial from-bottom first flex">
                        <div>
                            <div className="mt-0 md:mt-10 mb-2">
                                <h1 className="inline-block text-4xl font-bold leading-5 text-black dark:text-white">
                                    Creative and Clever
                                </h1>
                            </div>
                            <p className="mb-5 text-xl text-gray-700 dark:text-gray-300">
                                Keith is a bullet bike of a frontend designer and developer. He's a great team player, incredible collaborator,
                                very creative and clever, and does excellent work. We're really grateful to have him working with us.
                            </p>
                            <div className="flex items-center">
                                <img
                                    src="/blankHead.jpeg"
                                    alt="blank pic"
                                    className="object-cover mr-3 w-16 h-16 rounded-full shadow-sm"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-200 hover:text-primary">
                                        Darius Hannah
                                    </p>
                                    <p className="text-sm font-medium leading-4 text-gray-700 dark:text-gray-300">
                                        CoFounder, Talenhouse LLC.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial from-bottom second flex">
                        <div>
                            <div className="mb-2">
                                <h1 className="inline-block text-4xl font-bold text-black dark:text-white">
                                    Fantastic Communicator
                                </h1>
                            </div>
                            <p className="mb-5 text-xl text-gray-700 dark:text-gray-300">
                                He is a fantastic communicator, and has the ability to connect well with people of all ages. He has the ability to break down complex tasks into simple and understandable steps.
                                He is patient, and kind. One of qualities that I appreciate the most is that he has a strong sense of ownership and responsibility over everything he does and I can trust that if I give him a task,
                                I know it will get done and that he will do it well.
                            </p>
                            <div className="flex items-center">
                                <img
                                    src="/blankHead.jpeg"
                                    alt="picture of blank head"
                                    className="object-cover mr-3 w-16 h-16 rounded-full shadow-sm"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-200 hover:text-primary">
                                        Insert Name
                                    </p>
                                    <p className="text-sm font-medium leading-4 text-gray-700 dark:text-gray-300">
                                        Owner, Fake Company LLC.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial from-bottom third flex">
                        <div>
                            <div className="mb-2">
                                <h1 className="inline-block text-4xl font-bold leading-5 text-black dark:text-white">
                                    Hardworking
                                </h1>
                            </div>
                            <p className="mb-5 text-xl text-gray-700 dark:text-gray-300">
                                Keith is a confident, hardworking team player who is logical enough to complete complex tasks while also creative enough to problem solve and think outside the box.
                                During his time at my company, Ben achieved every KPI and was a crucial part of development.
                            </p>
                            <div className="flex items-center">
                                <img
                                    src="/blankHead.jpeg"
                                    alt="picture of blank head"
                                    className="object-cover mr-3 w-16 h-16 rounded-full shadow-sm"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-200 hover:text-primary">
                                        Insert Name
                                    </p>
                                    <p className="text-sm font-medium leading-4 text-gray-700 dark:text-gray-300">
                                        CoFounder and CEO, Insert Company.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};