'use client'
import { fadeFromLeftAnimation, fadeFromRightAnimation, fadeUpAnimation } from '@/data/animation'
import useWhileInView from '@/hooks/useWhileInView'
import solutionImageDark from '@/public/images/solution/solution-dark.png'
import solutionImage1Dark from '@/public/images/solution/solution-shape1-dark.png'
import solutionImage1 from '@/public/images/solution/solution-shape1.png'
import solutionImage2Dark from '@/public/images/solution/solution-shape2-dark.png'
import solutionImage2 from '@/public/images/solution/solution-shape2.png'
import solutionImage3Dark from '@/public/images/solution/solution-shape3-dark.png'
import solution3Image from '@/public/images/solution/solution-shape3.png'
import solutionImage from '@/public/images/solution/solution.png'
import mockup from '../public/images/vision/mocups.png'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import Image from 'next/image'
import mockup2 from '../public/images/vision/2mocukps.png'
import earth from '../public/images/hero/Test-Automation.jpg'
import Link from 'next/link'
import { useRef } from 'react'
import { GlobeDemo } from '@/utils/ui/globe'
const Solution = () => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const controlAnimation1 = useWhileInView(ref1)
  const controlAnimation2 = useWhileInView(ref2)
  const controlAnimation3 = useWhileInView(ref3)
  return (
    <section className=" relative  bg-white pb-150 pt-[160px] dark:bg-dark-300 max-lg:pb-150 max-lg:pt-20 lg:pb-15">
      <div className=" container ">
        <div className="  grid grid-cols-2 items-center gap-10 max-md:grid-cols-1 1xl:gap-x-24">
          <div className="  max-md:order-1 ">
            {/* <p className=" text-white  section-tagline">Unlock Your Financial Future with Paytirement</p> */}

            {/* <h2 className=" mb-8 text-white max-lg:mb-4"> Automated Solution Designed</h2> */}
            <p className=" mb-11 text-white max-lg:mb-6">
              Paytirement understands these challenges and offers a streamlined, automated solution designed to help you
              manage your financial life with ease. It is a platform that helps you save and invest effortlessly, giving
              you the support you need to make financial progress with minimal time commitment—so you can focus more on
              living your life while your money grows.
            </p>
            {/* <ul className="mb-14 flex max-lg:mb-6 max-md:flex-col max-md:gap-y-5 lg:items-center lg:[&>*:not(:last-child)]:mr-10">
              <li className="relative flex items-center gap-x-2 ">
                <FontAwesomeIcon icon={faCheck} className="text-paragraph dark:text-primary" />
                <span className="font-jakarta_sans font-medium dark:text-white">Fast payment send</span>
              </li>
              <li className="relative flex items-center gap-x-2 ">
                <FontAwesomeIcon icon={faCheck} className="text-paragraph dark:text-primary" />
                <span className="font-jakarta_sans font-medium dark:text-white">Secure 100%</span>
              </li>
              <li className="relative flex items-center gap-x-2 ">
                <FontAwesomeIcon icon={faCheck} className="text-paragraph dark:text-primary" />
                <span className="font-jakarta_sans font-medium dark:text-white">Cloud save data </span>
              </li>
            </ul> */}
            <Link style={{ color: 'white' }} href="/contact" className="btn-outline">
              Start Your Journey
            </Link>
          </div>

          <div className="max-md:order-2">
            <div className="relative   ">
              <div className="relative mx-auto aspect-video flex-col  justify-center " style={{ width: '100%' }}>
                <Image style={{ borderRadius: '1rem' }} width={600} src={earth} />
                {/* <Image src={earth} alt="vision image" className="" /> */}
                {/* <Image src={solutionImageDark} alt="vision image" className="hidden dark:inline-block" /> */}
                {/* <motion.div
                  ref={ref1}
                  initial="initial"
                  animate={controlAnimation1}
                  variants={fadeFromLeftAnimation}
                  className=" -top-[130px] bottom-auto  right-auto h-[150px] w-[250px] lg:-top-[185px]  lg:h-[180px] lg:w-[280px] xl:h-[230px] xl:w-[320px]">
                </motion.div> */}
                {/* <Image src={mockup2} alt="vision image" className="w-full  " /> */}
                {/* <Image src={solutionImage1Dark} alt="vision image" className="hidden w-full dark:inline-block" /> */}
                {/* <motion.div
                  ref={ref2}
                  initial="initial"
                  animate={controlAnimation2}
                  variants={fadeFromRightAnimation}
                  className="absolute bottom-auto left-auto right-12 top-12 h-[190px] w-[280px] lg:right-20 lg:h-[230px] lg:w-[320px] xl:h-[280px] xl:w-[368px]">
                  <Image src={solutionImage2} alt="vision image" className="w-full  dark:hidden" />
                  <Image src={solutionImage2Dark} alt="vision image" className="hidden w-full dark:inline-block" />
                </motion.div>
                <motion.div
                  ref={ref3}
                  initial="initial"
                  animate={controlAnimation3}
                  variants={fadeUpAnimation}
                  className="absolute -bottom-[70px] left-[175px] right-auto top-auto aspect-video w-[150px] lg:-bottom-[86px] lg:left-[200px] lg:w-[170px]">
                  <Image src={solution3Image} alt="vision image" className="w-full dark:hidden" />
                  <Image src={solutionImage3Dark} alt="vision image" className="hidden w-full dark:inline-block" />
                </motion.div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
