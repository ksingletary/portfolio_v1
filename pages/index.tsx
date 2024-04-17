import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Hero from '../components/index/Hero'
import Navbar from '../components/Navbar'

export default function Home() {

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
  }, []);

  return (
    <div onLoadStart={() => { observePage() }}>
      <Head>
        <title>Keith Singletary | Frontend Engineer</title>
        <meta name="description" content="Frontend developer, Designer, and Tech enthusiast." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
        <Hero />
        
      </div>
    </div>
  )
}