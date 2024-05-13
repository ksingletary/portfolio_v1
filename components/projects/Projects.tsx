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
                        title="TalentHouse LLC"
                        shortDescription="Talenthouse is a platform connecting creators with brands for collaborations in art, design, and content creation, fostering creative opportunities globally."
                        siteLink="https://talenthouse.llc/"
                        sourceCodeLink=""
                        designLink={null}
                        img1="talenthouse1.png"
                        img2="talenthouse.png"
                        img3=""
                        header="Breaking into the tech world"
                        longDescription="Since mid-2023, I've been a contracted Frontend Developer at Talenthouse, a startup that uses AI 
                        to revolutionize talent acquisition.  I've wielded React to help craft a dynamic web app, but my skills extended beyond the frontlines - 
                        I've dipped my toes in backend development as well. While I wouldn't call myself a full-stack engineer just yet, I'm always eager to learn and grow across the tech stack.
                        "
                        skillsArray={["JavaScript", "HTML", "CSS", "React", "Nextjs", "Tailwind"]}
                    />
                </div>
                <div>
                    <ProjectLeft
                        title="Voyagr"
                        shortDescription="My own spin on a Fullstack travel agency. Completed as a Springboard project."
                        siteLink="https://voyagr.onrender.com/voyagr"
                        sourceCodeLink="https://github.com/ksingletary/voyagr"
                        designLink={null}
                        img1="voyagr.png"
                        img2="voyagr1.png"
                        img3="voyagr2.png"
                        header="Looking professional"
                        longDescription="Voyagr is a fullstack travel website comprised of 11 pages, loads of animations and effects, 
                        beautiful design elements and color scheming, and lots of work to make this 'practice' project as close to industry standard as you can get.
                        This project forced me to expand my abilities as a designer and developer and push for excellence."
                        skillsArray={["Python", "HTML", "CSS", "Flask", "Tailwind", "Postgresql"]}
                    />
                </div>
                <div>
                    <ProjectRight
                        title="Chick-fil-A"
                        shortDescription="Built a user-friendly website for two Chick-fil-A franchises, ensuring seamless user experience and adherence to all Chick-fil-A branding guidelines."
                        siteLink="https://cfacapcentre-steeplechase.netlify.app/"
                        sourceCodeLink="https://github.com/ksingletary/chick-fil-a-contract-site-"
                        designLink={null}
                        img1="cfa1.png"
                        img2="cfa3.png"
                        img3="cfa2.png"
                        header="Bringing a Chick-fil-A Online"
                        longDescription="I leveraged my Frontend development skills through freelance contracts, developing for two Chick-fil-A free-standing stores. I built a responsive Chick-fil-A website using React Vite & Tailwind CSS for the stores in Largo & Capitol Heights, MD. 
                        Collaboration was key - working with a corporate liaison, General Managers, and corporate engineers ensured brand adherence, local details, and a user-friendly design that reflects the Chick-fil-A experience online."
                        skillsArray={["JavaScript", "HTML", "CSS", "Vite", "Tailwind"]}
                    />
                </div>
                <div>
                    <ProjectLeft
                        title="Summify"
                        shortDescription="An application that uses OpenAI's technology to provide users with summarized versions of articles. Completed as a Springboard project."
                        siteLink="https://summify-aoe7.onrender.com/"
                        sourceCodeLink="https://github.com/ksingletary/summify_frontend"
                        designLink={null}
                        img1="summify1.png"
                        img2="summify2.png"
                        img3="summify3.png"
                        header="Know More in Less Time"
                        longDescription="Struggling to keep up with the news? Summify utilizes OpenAI's technology to deliver clear, concise summaries of lengthy articles. 
                        Stay informed on a wide range of topics without getting bogged down in details.  Summify streamlines your reading experience, empowering you to learn more in less time."
                        skillsArray={["JavaScript", "HTML", "CSS", "Redux", "Vite", "Tailwind", "Nodejs", "Express", "Postgresql"]}
                    />
                </div>
                <div>
                    <ProjectRight
                        title="Jobly"
                        shortDescription="A Springboard project created to showcase my skills as a Fullstack developer. Developed a comprehensive job application platform using various technologies."
                        siteLink="https://reactjobly-frontend-mf2g.onrender.com/"
                        sourceCodeLink="https://github.com/ksingletary/reactjobly-frontend"
                        designLink={null}
                        img1="jobly1.png"
                        img2="jobly2.png"
                        img3=""
                        header="Streamlined job search. Apply directly, effortlessly."
                        longDescription="This project demonstrates my full-stack development capabilities by building a comprehensive job application platform.  
                        The front-end utilizes React for a user-friendly interface, while the back-end uses Express and PostgreSQL for robust data management.  
                        To ensure code maintainability, prevent security vulnerabilities like SQL injection, and reduce redundancy, I implemented a custom object-relational mapping (ORM) layer that streamlines database interactions."
                        skillsArray={["JavaScript", "HTML", "CSS", "Vite", "Express", "Nodejs", "Postgresql"]}
                    />
                </div>
                <div>
                    <ProjectLeft
                        title="Web Projects"
                        shortDescription="A few web projects/games completed at Springboard."
                        siteLink="https://ksingletary.github.io/Jeopardy/"
                        siteLink2="https://ksingletary.github.io/Memory_Game/"
                        sourceCodeLink="https://github.com/ksingletary"
                        designLink={null}
                        img1="jeopardy.png"
                        img2="drumory.png"
                        img3=""
                        header="Here are a few small web projects!"
                        longDescription="Web projects completed during my time at Springboard. You can find other projects of mine during my time at Springboard by viewing my github."
                        skillsArray={["JavaScript", "HTML", "CSS"]}
                    />
                </div>             
            </div>
        </div >
    )
}

