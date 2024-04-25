import React from 'react';
import TypeIt from 'typeit-react';
import ProjectLeft from './ProjectLeft';
import ProjectRight from './ProjectRight';


export default function Projects() {

    const startAnimation = () => {
        const elementsToAnimate = document.querySelectorAll(".discover")
        elementsToAnimate.forEach((element) => element.classList.add("animated"));
        console.log(elementsToAnimate)
    }

    return (
        <div id="home" className="bg-tertiary dark:bg-raisin ">
            <div className="px-4 pt-10 pb-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-32">
                <div className="hidden lg:flex flex-col h-20 mb-10">
                    <TypeIt options={{ speed: 12, waitUntilVisible: true, lifeLike: true }}
                    >
                        <p className="text-gray-600 dark:text-gray-400 text-md md:text-xl">&#47;&#47; Check out my recent work experience and design prototypes.</p>
                        <p className="text-gray-600 dark:text-gray-400 text-md md:text-xl">&#47;&#47; To view some source code click <a href="https://github.com/ksingletary" target="_blank" className="underline font-medium hover:text-primary transition duration-300 ease-in-out">here.</a></p>
                    </TypeIt>
                </div>
                <div className="flex flex-col lg:hidden h-20 mb-20 lg:mb-10">
                    <TypeIt options={{ speed: 12, waitUntilVisible: true, lifeLike: true }}>
                        <p className="text-gray-600 dark:text-gray-400 text-md md:text-xl">&#47;&#47; Check out my recent work experience</p>
                        <p className="text-gray-600 dark:text-gray-400 text-md md:text-xl">&#47;&#47; and design prototypes.</p>
                        <br/>
                        <p className="text-gray-600 dark:text-gray-400 text-md md:text-xl">&#47;&#47; To view some source code click
                            <a href="https://github.com/bdgcypher" target="_blank" className="ml-2 underline font-medium hover:text-primary transition duration-300 ease-in-out">here.</a>
                        </p>
                    </TypeIt>
                </div>
                <div>
                    <ProjectRight
                        title="Voyagr"
                        shortDescription="My own spin on a Fullstack travel agency."
                        siteLink="https://voyagr.onrender.com/voyagr"
                        sourceCodeLink="https://github.com/ksingletary/voyagr"
                        designLink=""
                        img1="voyagr.png"
                        img2="voyagr1.png"
                        img3="voyagr2.png"
                        header="Looking professional"
                        longDescription="Voyagr is an impressive fullstack travel website comprised of 11 pages, loads of animations and effects, 
                        beautiful design elements and color scheming, and lots of work to make this 'practice' project as close to industry standard as you can get.
                        This project forced me to expand my abilities as a designer and developer and push for excellence."
                        skillsArray={["Python", "HTML", "CSS", "Flask", "Tailwind", "Postgresql"]}
                    />
                </div>
                <div>
                    <ProjectLeft
                        title="Talent House"
                        shortDescription="Talenthouse is a platform connecting creators with brands for collaborations in art, design, and content creation, fostering creative opportunities globally."
                        siteLink="https://talenthouse.llc/"
                        sourceCodeLink=""
                        designLink=""
                        img1="talenthouse1.png"
                        img2="talenthouse.png"
                        img3=""
                        header="Breaking into the tech world"
                        longDescription="Since mid-2023, I've been a contracted Frontend Developer at Talenthouse, a platform that uses AI 
                        to revolutionize talent acquisition.  I've wielded React to craft a dynamic web app, but my skills extended beyond the frontlines - 
                        I've dipped my toes in backend development as well. While I wouldn't call myself a full-stack engineer just yet, I'm always eager to learn and grow across the tech stack.
                        "
                        skillsArray={["JavaScript", "HTML", "CSS", "React", "Tailwind"]}
                    />
                </div>
                {/* <div>
                    <ProjectRight
                        title="Summify"
                        shortDescription="Summarizing Articles"
                        siteLink=""
                        sourceCodeLink=""
                        designLink=""
                        img1=""
                        img2=""
                        img3=""
                        header="Looking professional"
                        longDescription="Xplore is an impressive travel website frontend comprised of 11 pages, loads of animations and effects, 
                        beautiful design elements and color scheming, and lots of work to make this 'practice' project as close to industry standard as you can get.
                        This project forced me to expand my abilities as a designer and developer and push for excellence."
                        skillsArray={["JavaScript", "HTML", "CSS", "Figma", "React", "Tailwind"]}
                    />
                </div> */}
                {/* <div>
                    <ProjectLeft
                        title="Axis"
                        shortDescription="A Discord-esque chat platform for me and my friends."
                        siteLink="https://axis-chat.netlify.app"
                        sourceCodeLink="https://github.com/bdgcypher/Axis"
                        designLink={null}
                        img1="axis.png"
                        img2="axis2.png"
                        img3="axis3.png"
                        header="Login with username and password: 'guest'"
                        longDescription="A personal project I have been working on to improve my  knowledge of React Hooks and connect with my friends! 
                        A full fledged web application including authentication, channels, direct messages and threads. Fully capable of sending images, videos, gifs and emojis.
                        This is admittedly not the most beautiful design scheme, but the focus was on functionality not front-facing design. Built using the getstream api, react useContext, localStorage, and much more."
                        skillsArray={["JavaScript", "HTML", "CSS", "React", "Tailwind"]}
                    />
                </div>
                <div>
                    <ProjectRight
                        title="indigo"
                        shortDescription="An ecommerce style website to practice Tailwindcss and page layout design."
                        siteLink="https://shop-indigo.netlify.app/"
                        sourceCodeLink="https://github.com/bdgcypher/indigo"
                        designLink="https://www.figma.com/file/2UlObTHpRVSisoQklbAzqJ/indigo?node-id=0%3A1&t=INodRxz8gwBB8LMo-0"
                        img1="indigo.jpg"
                        img2="indigo2.png"
                        img3=""
                        header="Would you buy this design on Amazon?"
                        longDescription="Indigo is an ecommerce based frontend web application created to familiarize myself with and 
                        demonstrate use of TailwindUI template elements and is built on the React.js framework. 
                        I was introduced to tailwind by a friend and wanted to check it out. 
                        I spent a few hours making this site and I loved it! For anyone who doesn't use tailwind in their projects, you should!"
                        skillsArray={["JavaScript", "HTML", "CSS", "Figma", "React", "Tailwind"]}
                    />
                </div>
                <div>
                    <ProjectLeft
                        title="Portfolio v1"
                        shortDescription="My first iteration at a personal website before the current redesign."
                        siteLink="https://ben-portfolio-v1.netlify.app/"
                        sourceCodeLink="https://github.com/bdgcypher/portfolio-v1"
                        designLink={null}
                        img1="bg.jpg"
                        img2="bg3.png"
                        img3="bg2.png"
                        header="Let me introduce myself"
                        longDescription="This webpage was my initial portfolio. It domonstrates knowledge in React.js, 
                        web-hooks, HTML, CSS, Scroll Effects, multiple page integration, and decent Web-Design. 
                        Obviously the look and feel of this site didn't feel quite right because I redesigned it to what you see now! 
                        Do you think I improved on anything?"
                        skillsArray={["JavaScript", "HTML", "CSS", "React"]}
                    />
                </div>
                <div>
                    <ProjectRight
                        title="TRAVRSE"
                        shortDescription="My first website design!"
                        siteLink="https://traverse-web.netlify.app/"
                        sourceCodeLink="https://github.com/bdgcypher/traverse-web"
                        designLink={null}
                        img1="traverse.jpg"
                        img2="traverse2.png"
                        img3=""
                        header="Get the ball rolling"
                        longDescription="Traverse is a travel-guide type website frontend with clean-cut cards, 
                        fantastic footers, and creative content. Built with React.js, Traverse is a simple, yet elegant beginner javascript Web Project.
                        This was my first ever React project. Watching youtube tutorials, scrolling stack overflow, and learning how everything worked. 
                        This was my start to a promising career as a frontend developer."
                        skillsArray={["JavaScript", "HTML", "CSS", "React"]}
                    />
                </div> */}
            </div>
        </div >
    )
}

