import React from "react";
import TypeIt from "typeit-react";

export default function MyPic() {
    return (
        <div className="bg-tertiary dark:bg-raisin h-screen flex flex-col group text-center pb-0 lg:pb-20 relative">
            {/* Image element with Tailwind CSS */}
            <img src="me.jpg" alt="Profile" className="w-32 h-32 rounded-full object-cover absolute left-1/2 mt-80 transform -translate-x-1/2 z-10 top-5"/>

            {/* Existing SVGs */}
            <svg className="block dark:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FCFCFC" fillOpacity="1" d="M0,192L40,176C80,160,160,128,240,117.3C320,107,400,117,480,154.7C560,192,640,256,720,234.7C800,213,880,107,960,58.7C1040,11,1120,21,1200,32C1280,43,1360,53,1400,58.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
            <svg className="hidden dark:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="black" fillOpacity="1" d="M0,192L40,176C80,160,160,128,240,117.3C320,107,400,117,480,154.7C560,192,640,256,720,234.7C800,213,880,107,960,58.7C1040,11,1120,21,1200,32C1280,43,1360,53,1400,58.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>

            {/* Rest of your component */}
            <svg id="esQrNVuGSvx1" className="to-animate scale-up h-2/3 -mt-10 md:-mt-20 lg:-mt-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" shapeRendering="geometricPrecision" textRendering="geometricPrecision"></svg>
            
            <div className="text-gray-600 dark:text-gray-400 text-md md:text-xl -mt-10">
                <TypeIt options={{ speed: 12, waitUntilVisible: true, lifeLike: true }}
                    getBeforeInit={(instance) => {
                        instance.type("&#47;&#47; Try moving the mouse over the 'Contact me' button ;)");
                        return instance;
                    }}
                ></TypeIt>
            </div>
        </div>
    );
};
