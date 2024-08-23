'use client'
import React from 'react'
import PaymentImage from '../../public/images/payment/payment-hero.png'
import PaymentImageDark from '../../public/images/payment/payment-hero-dark.png'
import PaymentImageDevice from '../../public/images/payment/payment-hero-device.png'
import PaymentImageDeviceDark from '../../public/images/payment/payment-hero-device-dark.png'
import Image from 'next/image'
import hero from '../../public/images/hero/mocukp13.png'
import Link from 'next/link'
import { fadeUpAnimation } from '@/data/animation'
import { motion } from 'framer-motion'

const PaymentHero = ({ heading, linheight, pargraph, src, style, bottommar, addPadding, height, width, font }) => {
  return (
    <section className={`hero relative overflow-hidden  ${addPadding ? 'max-lg:pt-[160px] lg:pt-[160px]' : ''} `}>
      <div className="container">
        <div
          // variants={fadeUpAnimation}
          // initial="initial"
          // animate="animate"
          className="relative z-10 grid grid-cols-12 items-start max-lg:gap-y-10">
          <div className="col-span-12 md:col-span-7">
            {/* <p className="mb-8 font-medium uppercase max-lg:mb-4 text-Purple" style={{color:"", fontWeight:'bold', fontSize:'x-large'}}  >Paytirement</p> */}
            <h2
              className="mb-12 max-md:mb-8  "
              style={{ marginBottom: `${bottommar} `, color: '', fontSize: '3rem', fontWeight: 'bold' }}>
              {heading}
            </h2>
            <p className="mb-12 max-w-[590px] max-md:mb-8 " style={{ lineHeight: `${linheight}`, fontSize: `${font}` }}>
              {pargraph}
            </p>
            {/* <form>
              <div className="border-borderColour grid w-full max-w-[520px] grid-cols-12 items-center rounded-[60px] border bg-white pb-1 pe-1 pl-4 pt-1 dark:border-[#31332F] dark:bg-dark-200 sm:pl-5">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className=" placeholder:text-light text-light col-span-8 bg-transparent leading-[1.75] text-[#A1A49D] outline-none transition-all duration-300  focus:border-primary focus:outline-none dark:placeholder:text-[#A1A49D] xs:col-span-8 "
                />
                <button className="btn col-span-4 max-lg:!px-3 max-lg:!text-sm xs:col-span-4 ">Get Started</button>
              </div>
            </form> */}
          </div>
          <div className="mtset col-span-12  md:col-span-5" style={style}>
            <div
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}
              className="relative min-h-[530px]  max-md:min-h-[400px] ">
              <Image
                style={{ borderRadius: '1rem', width: '40rem', height: '20rem' }}
                width={width}
                height={height}
                src={src}
                alt="hero Image"
                className="inline-block  dark:hidden"
              />
              {/* <div style={{marginTop:'2rem'}}  className="absolute !left-1/2 !top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image style={{Width:'150%'}} src={mocukp1} alt="hero Image" className="inline-block h-100 w-100 dark:hidden" />
              <Image style={{Width:'150%'}} src={mocukp1} alt="hero Image" className=" hidden h-100 w-100 dark:inline-block" />
              </div>  */}
              <div className="absolute !-left-[40px] !top-15 max-lg:!left-0 max-lg:aspect-video max-lg:w-[220px] max-md:!top-5 lg:!-top-[20px]">
                <Image src={hero} alt="hero Image" className="hidden h-auto w-auto dark:inline-block" />
              </div>
              <div className="absolute !bottom-[150px] !left-[50px] max-lg:aspect-square max-lg:w-28 max-md:!bottom-[70px]  max-md:!left-[50px] lg:!bottom-0 lg:!left-[45px] xl:!left-[85px]">
                {/* <Image src={heroRatingLight} alt="hero Image" className="inline-block h-auto w-auto  " /> */}
                {/* <Image src={heroRatingDark} alt="hero Image" className="hidden h-auto w-auto  dark:inline-block" />  */}
              </div>
              {/* <div className="lg:!not-sr-only-bottom-[45px] absolute !-bottom-0 !-right-5 max-lg:w-[196px] max-md:!-bottom-5 max-md:!-right-5 lg:right-0 xl:right-[30px]"> 
               <Image src={hero} alt="hero Image" className="inline-block dark:hidden" />
                <Image src={hero} alt="hero Image" className="hidden dark:inline-block" />  */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaymentHero
