import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { SlMenu } from 'react-icons/sl'
import { TfiClose } from 'react-icons/tfi'
import { FiMoon, FiSun } from 'react-icons/fi'
import TypeIt from 'typeit-react'

export default function SectionNavbar() {

    const [darkMode, setDarkMode] = useState(false)

    const setSystemTheme = () => {
        if (
            localStorage.getItem('color-theme') === 'dark' ||
            (!('color-theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setDarkMode(false);
        }
    }

    const switchTheme = () => {
        if (darkMode === true) {
            localStorage.setItem('color-theme', 'light');
            document.documentElement.classList.remove('dark');
        } else {
            localStorage.setItem('color-theme', 'dark');
            document.documentElement.classList.add('dark');
        }
        setDarkMode(!darkMode);
    }

    const observePage = () => {
        const pageSectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // Home active
                if (entry.isIntersecting) {
                    const link = document.getElementById(`${entry.target.id}Nav`)
                    link != null ? (link.classList.add('active')) : null
                    const mobileLink = document.getElementById(`${entry.target.id}MobileNav`)
                    mobileLink != null ? (mobileLink.classList.add('active')) : null
                } else {
                    const link = document.getElementById(`${entry.target.id}Nav`)
                    link != null ? (link.classList.remove('active')) : null
                    const mobileLink = document.getElementById(`${entry.target.id}MobileNav`)
                    mobileLink != null ? (mobileLink.classList.remove('active')) : null
                }
            })
        })

        const activePageSections = document.querySelectorAll('.page-section')
        console.log(activePageSections)
        activePageSections.forEach((element) => pageSectionObserver.observe(element))
    }

    const closeMobileNav = async () => {
        const button: any = document.getElementById("closeButton")
        button != null ? (
            button.click()
        ) : (null)
    }

    const scrollPageTo = async (id: string) => {
        await closeMobileNav()
        const element: any = document.getElementById(id)
        element.scrollIntoView()
    }

    useEffect(() => {
        observePage();
        setSystemTheme();
    }, []);


    return (
        <div className="fixed w-screen z-40">
            <Popover as="header" className="inset-x-1 z-100">
                <div className="h-14 pt-4 mt-4 mx-2 rounded-full bg-white/40 dark:bg-black/80 shadow-xl backdrop-filter backdrop-blur-xl backdrop-brightness-125 lg:h-full lg:mt-0 lg:mx-0 lg:bg-transparent dark:lg:bg-transparent lg:shadow-none lg:backdrop-filter-none">
                    {/* <TypeIt> */}
                    <h1 className="absolute top-3 left-6 lg:top-10 lg:left-10 text-primary text-3xl lg:text-4xl">
                        KS
                        {/* KeithSingletary<span className="text-white">.</span><span className="text-green-500">portfolio</span><span className="text-white">.</span><span className="text-secondary">_</span> */}
                    </h1>
                    {/* </TypeIt> */}
                    <nav
                        className="relative ml-10 mx-auto flex items-center justify-around px-6 lg:px-2"
                        aria-label="Global"
                    >
                        <div className="flex flex-row items-center">
                            <div className="flex items-center w-screen lg:w-auto">
                                <div className=" justify-self-end hidden lg:flex flex-row gap-16 px-20 py-3 bg-white/40 dark:bg-black/80 backdrop-filter backdrop-blur-xl backdrop-brightness-125 text-black dark:text-white text-lg font-bold rounded-full shadow-xl dark:shadow-gray-900">
                                    <button onClick={() => { scrollPageTo("home") }} id="homeSectionNav" tabIndex={0} className="active:text-primary hover:text-primary hover:-translate-y-1 ease-in-out duration-300 cursor-pointer">Home</button>
                                    <button onClick={() => { scrollPageTo("about") }} id="aboutSectionNav" tabIndex={0} className="active:text-primary hover:text-primary hover:-translate-y-1 ease-in-out duration-300 cursor-pointer">About</button>
                                    <button onClick={() => { scrollPageTo("discover") }} id="discoverSectionNav" tabIndex={0} className="active:text-primary hover:text-primary hover:-translate-y-1 ease-in-out duration-300 cursor-pointer">Discover</button>
                                    <button onClick={() => { scrollPageTo("testimonials") }} id="testimonialsSectionNav" tabIndex={0} className="active:text-primary hover:text-primary hover:-translate-y-1 ease-in-out duration-300 cursor-pointer">Testimonials</button>
                                    <button onClick={() => { scrollPageTo("contact") }} id="contactSectionNav" tabIndex={0} className="active:text-primary hover:text-primary hover:-translate-y-1 ease-in-out duration-300 cursor-pointer">Contact</button>
                                </div>
                                <div className="absolute -top-2 right-6 lg:top-1 lg:right-10 -mr-2 flex items-center lg:hidden">
                                    <Popover.Button onClick={() => { observePage() }} className="z-100 bg-transparent rounded-md p-2 inline-flex items-center justify-center text-primary hover:text-secondary transform duration-300 rotate-0 hover:rotate-180">
                                        <span className="sr-only">Open main menu</span>
                                        <SlMenu className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <button onClick={() => { switchTheme() }} title="light/dark theme toggle" className="absolute top-6 right-10 hidden lg:block text-black dark:text-white text-2xl lg:text-3xl hover:text-primary dark:hover:text-primary hover:-translate-y-1 ease-in-out duration-300">
                        {
                            darkMode === true ? (
                                <FiMoon />
                            ) : (
                                <FiSun />
                            )
                        }
                    </button>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus className="absolute z-20 top-0 inset-x-0 w-screen p-2 transition transform origin-top lg:hidden">
                        <div className="rounded-lg shadow-md bg-white/40 dark:bg-black/80 backdrop-filter backdrop-blur-xl backdrop-brightness-125 overflow-hidden">
                            <div className="px-5 pt-4 flex items-center justify-between">
                                <button onClick={() => { switchTheme() }} title="light/dark theme toggle" className="absolute top-8 left-10 block lg:hidden text-black dark:text-white text-3xl hover:text-primary hover:-translate-y-1 ease-in-out duration-300">
                                    {
                                        darkMode === true ? (
                                            <FiMoon />
                                        ) : (
                                            <FiSun />
                                        )
                                    }
                                </button>
                                <div className="absolute top-6 right-8 -mr-2 outline-none">
                                    <Popover.Button id="closeButton" className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-primary hover:text-secondary transform duration-300 rotate-0 hover:-rotate-180 outline-none">
                                        <span className="sr-only">Close menu</span>
                                        <TfiClose className="h-6 w-6 bg-transparent" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                                <div className="flex lg:hidden flex-col gap-16 mx-auto py-10 pl-2 text-center text-black dark:text-white text-lg font-bold">
                                    <button onClick={() => { scrollPageTo("home") }} id="homeSectionMobileNav" className="active:text-primary hover:text-primary hover:-translate-y-1 ease-in-out duration-300 cursor-pointer">Home</button>
                                    <button onClick={() => { scrollPageTo("about") }} id="aboutSectionMobileNav" className="active:text-primary hover:text-primary hover:-translate-y-1 ease-in-out duration-300 cursor-pointer">About</button>
                                    <button onClick={() => { scrollPageTo("discover") }} id="discoverSectionMobileNav" className="active:text-primary hover:text-primary hover:-translate-y-1 ease-in-out duration-300 cursor-pointer">Discover</button>
                                    <button onClick={() => { scrollPageTo("testimonials") }} id="testimonialsSectionMobileNav" className="active:text-primary hover:text-primary hover:-translate-y-1 ease-in-out duration-300 cursor-pointer">Testimonials</button>
                                    <button onClick={() => { scrollPageTo("contact") }} id="contactSectionMobileNav" className="active:text-primary hover:text-primary hover:-translate-y-1 ease-in-out duration-300 cursor-pointer">Contact</button>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    )
}