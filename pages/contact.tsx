import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Form from '../components/contact/Form'

export default function Contact() {

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

    const observePage = () => {
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                } else {
                    // entry.target.classList.remove('animated')
                    null
                }
            })
        })

        const elementsToAnimate = document.querySelectorAll('.to-animate')
        console.log(elementsToAnimate)
        elementsToAnimate.forEach((element) => animationObserver.observe(element))
    }

    useEffect(() => {
        observePage();
        setSystemTheme();
    }, []);

    return (
        <div onLoadStart={() => { observePage() }}>
            <Head>
                <title>Keith Singletary | Frontend Developer</title>
                <meta name="description" content="Frontend developer and Tech enthusiast." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <Form />
            </div>
        </div>
    )
}