import { TbBrandNextjs } from "react-icons/tb";
import { SiJavascript, SiTypescript, SiHtml5, SiReact, SiNodedotjs, SiExpress, SiVite, SiCss3, SiFigma, SiTailwindcss, SiPython, SiPostgresql, SiFlask } from 'react-icons/si'

export default function Skills({ skillsArray }: { skillsArray: Array<string> }) {

    return (
        <div className="mb-8">
            <p className="mb-4 text-black dark:text-white text-sm font-bold tracking-widest uppercase">
                Skills used here
            </p>
            <div className="grid space-y-3 sm:gap-2 grid-cols-2 lg:grid-cols-3 sm:space-y-0 text-gray-700 dark:text-gray-400">
                <ul className="space-y-3">
                    {
                        skillsArray.includes("JavaScript") ? (
                            <>
                                <li className="flex">
                                    <span className="mr-2">
                                        <SiJavascript title="JavaScript logo" className="text-yellow-400" />
                                    </span>
                                    JavaScript
                                </li>
                            </>
                        ) : (null)
                    }
                    {
                        skillsArray.includes("HTML") ? (
                            <>
                                <li className="flex">
                                    <span className="mr-2">
                                        <SiHtml5 title="HTML logo" className="text-orange-400" />
                                    </span>
                                    HTML
                                </li>
                            </>
                        ) : (null)
                    }
                    {
                        skillsArray.includes("CSS") ? (
                            <>
                                <li className="flex">
                                    <span className="mr-2">
                                        <SiCss3 title="CSS logo" className="text-blue-500" />
                                    </span>
                                    CSS
                                </li>
                            </>
                        ) : (null)
                    }
                    {
                        skillsArray.includes("Python") ? (
                            <>
                                <li className="flex">
                                    <span className="mr-2">
                                        <SiPython title="Python logo" className="text-black dark:text-white" />
                                    </span>
                                    Python
                                </li>
                            </>
                        ) : (null)
                    }
                    {
                        skillsArray.includes("Figma") ? (
                            <>
                                <li className="flex">
                                    <span className="mr-2">
                                        <SiFigma title="Figma logo" className="text-black dark:text-white" />
                                    </span>
                                    Figma
                                </li>
                            </>
                        ) : (null)
                    }
                </ul>
                <ul className="space-y-3">
                    {
                        skillsArray.includes("React") ? (
                            <>
                                <li className="flex -mt-3 md:-mt-0">
                                    <span className="mr-2">
                                        <SiReact title="React logo" className="text-blue-300" />
                                    </span>
                                    React
                                </li>
                            </>
                        ) : (null)
                    }
                    {
                        skillsArray.includes("Nodejs") ? (
                            <>
                                <li className="flex -mt-3 md:-mt-0">
                                    <span className="mr-2">
                                        <SiNodedotjs title="node logo" className="text-blue-300" />
                                    </span>
                                    Nodejs
                                </li>
                            </>
                        ) : (null)
                    }
                    {
                        skillsArray.includes("Express") ? (
                            <>
                                <li className="flex -mt-3 md:-mt-0">
                                    <span className="mr-2">
                                        <SiExpress title="express logo" className="text-blue-300" />
                                    </span>
                                    Express
                                </li>
                            </>
                        ) : (null)
                    }
                    {
                        skillsArray.includes("Vite") ? (
                            <>
                                <li className="flex -mt-3 md:-mt-0">
                                    <span className="mr-2">
                                        <SiVite title="vite logo" className="text-blue-300" />
                                    </span>
                                    React Vite
                                </li>
                            </>
                        ) : (null)
                    }
                    {
                        skillsArray.includes("Tailwind") ? (
                            <>
                                <li className="flex">
                                    <span className="mr-2">
                                        <SiTailwindcss title="Tailwind logo" className="text-cyan-400" />
                                    </span>
                                    Tailwind
                                </li>
                            </>
                        ) : (null)
                    }
                    {
                        skillsArray.includes("Nextjs") ? (
                            <>
                                <li className="flex">
                                    <span className="mr-2">
                                        <TbBrandNextjs title="Next.js logo" className="text-black dark:text-white" />
                                    </span>
                                    Nextjs
                                </li>
                            </>
                        ) : (null)
                    }
                    {
                        skillsArray.includes("TypeScript") ? (
                            <>
                                <li className="flex">
                                    <span className="mr-2">
                                        <SiTypescript title="TypeScript logo" className="text-blue-400" />
                                    </span>
                                    TypeScript
                                </li>
                            </>
                        ) : (null)
                    }
                    {
                        skillsArray.includes("Postgresql") ? (
                            <>
                                <li className="flex">
                                    <span className="mr-2">
                                        <SiPostgresql title="Postgres logo" className="text-blue-400" />
                                    </span>
                                    Postgresql
                                </li>
                            </>
                        ) : (null)
                    }
                    {
                        skillsArray.includes("Flask") ? (
                            <>
                                <li className="flex">
                                    <span className="mr-2">
                                        <SiFlask title="Flask logo" className="text-blue-400" />
                                    </span>
                                    Flask
                                </li>
                            </>
                        ) : (null)
                    }
                </ul>
            </div>
        </div>
    )
}