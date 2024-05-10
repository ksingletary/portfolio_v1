import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Hero from '../components/index/Hero'
import Navbar from '../components/Navbar'
import About from '@/components/index/About'
import Discover from '@/components/index/Discover'
import GetInTouch from '@/components/index/GetInTouch'
import Testimonials from '@/components/index/Testimonials'
import MyPic from '@/components/index/MyPic'
import Contact from '@/components/index/Contact'
import Footer from '@/components/Footer'

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
        <About />
        <Discover />
        <GetInTouch />
        <Testimonials />
        <MyPic />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}