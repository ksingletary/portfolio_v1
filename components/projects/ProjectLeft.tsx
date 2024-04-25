import Skills from "./Skills";
import { BiCodeAlt } from "react-icons/bi"
import { MdDevices, MdOutlinePalette } from "react-icons/md"
import { BsDot } from "react-icons/bs";

export default function ProjectLeft(
    { title, shortDescription, siteLink, sourceCodeLink, designLink, img1, img2, img3, header, longDescription, skillsArray }:
        { title: string, shortDescription: string, siteLink: string, sourceCodeLink: string, designLink: any, img1: string, img2: string, img3: string, header: string, longDescription: string, skillsArray: Array<string> }
) {


    return (
        <div className="px-4 mx-auto mb-16 lg:mb-20 sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
            <div className="max-w-2xl mb-10 ml-0 lg:ml-16 text-left md:mb-12">
                <div className="to-animate from-left flex flex-row max-w-lg mb-6 font-sans text-3xl transition ease-in-out duration-300 font-bold leading-none tracking-tight text-black dark:text-white sm:text-4xl">
                    <h1>
                        {title}
                    </h1>
                    <span className="mx-8" />
                    <a target="_blank" aria-label="website link" href={siteLink} >
                        <div className="flex flex-row max-w-lg mb-6 font-sans text-3xl transition ease-in-out duration-300 hover:-translate-y-2 font-bold leading-none tracking-tight text-black dark:text-white hover:text-primary dark:hover:text-primary sm:text-4xl cursor-pointer">
                            <MdDevices className="ml-4" />
                        </div>
                    </a>
                    <a target="_blank" aria-label="source code link" href={sourceCodeLink} >
                        <div className="flex flex-row max-w-lg mb-6 font-sans text-3xl transition ease-in-out duration-300 hover:-translate-y-2 font-bold leading-none tracking-tight text-black dark:text-white hover:text-primary dark:hover:text-primary sm:text-4xl cursor-pointer">
                            <BiCodeAlt className="ml-4" />
                        </div>
                    </a>
                    {designLink ? (
                        <>
                            <a target="_blank" aria-label="design link" href={designLink} >
                                <div className="flex flex-row max-w-lg mb-6 font-sans text-3xl transition ease-in-out duration-300 hover:-translate-y-2 font-bold leading-none tracking-tight text-black dark:text-white hover:text-primary dark:hover:text-primary sm:text-4xl cursor-pointer">
                                    <MdOutlinePalette className="ml-4" />
                                </div>
                            </a>
                        </>
                    ) : (null)
                    }
                </div>
                <p className="to-animate from-left text-lg text-gray-700 dark:text-gray-400 md:text-xl">
                    {shortDescription}
                </p>
            </div>
            <div className="grid max-w-screen-xl gap-8 lg:grid-cols-2 sm:mx-auto">
                <div className="to-animate from-left flex flex-col">
                    <div className="pb-4 mb-4">
                        <h6 className="mb-2 font-semibold text-3xl text-black dark:text-white border-b">
                            {header}
                        </h6>
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400">
                            {longDescription}
                        </p>
                    </div>
                    <Skills skillsArray={skillsArray} />
                </div>
                <div className="to-animate from-right grid grid-cols-2 gap-5">
                    {img1 !== "" ? (
                        <img
                            className="object-cover w-full col-span-2 rounded shadow-lg"
                            src={img1}
                            alt="Project image"
                        />
                    ) : (null)}
                    {img2 !== "" ? (
                        <img
                            className="object-cover w-full rounded shadow-lg"
                            src={img2}
                            alt="Project image"
                        />
                    ) : (null)}
                    {img3 !== "" ? (
                        <img
                            className="object-cover w-full rounded shadow-lg"
                            src={img3}
                            alt="Project image"
                        />
                    ) : (null)}
                </div>
            </div>
        </div>
    );
};