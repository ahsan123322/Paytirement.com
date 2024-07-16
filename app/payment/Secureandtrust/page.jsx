import Clients from '@/components/Clients'
import CoreFeature from '@/components/CoreFeature'
import CtaV2 from '@/components/CtaV2'
import FinancialBlog from '@/components/FinancialBlog'
import MembersCounter from '@/components/MembersCounter'
import PaymentFeatures from '@/components/PaymentFeatures'
import PaymentHero from '@/components/heros/PaymentHero'
import PaymentRating from '@/components/PaymentRating'
import Secure from '../../../public/images/hero/secureandtrust.jpg'
import whytrust from '../../../public/images/hero/whyturstus.jpg'


import Pricing from '@/components/Pricing'
import WhyUs from '@/components/WhyUs'
import { PaymentFeaturesData } from '@/data/data'
const personalized = () => {
  const margintop = {
    marginTop:"10rem",
    overflow:'hidden',
  }
  return (
    <>
      <PaymentHero style={margintop} heading={'Secure and Trusted'} pargraph={'At Paytirement, we prioritize your data security and peace of mind. Our payment system is designed with the latest, state-of-the-art technology to ensure that every transaction you make is safe, secure, and trusted.'} src={Secure} />
      <PaymentHero style={margintop} heading={'Why Trust Our Payment System?'} pargraph={'Our payment mechanism utilizes the most advanced technology available today. This  includes robust encryption methods, secure payment gateways, and continuous system updates to protect your financial information.We use end-to-end encryption to safeguard your data from the moment you enter it until the transaction is complete. This ensures that your sensitive information remains confidential and protected from unauthorized access.' }  src={whytrust} />
      
      {/* <PaymentRating />
      <CoreFeature />
      <WhyUs />
      <PaymentFeatures
        features={PaymentFeaturesData}
        sectionTag={'MORE FEATURES'}
        sectionTitle={'Managing your money has never been easier'}
        spacing={'bg-white dark:bg-dark-300 pb-150 pt-150 max-md:py-25 relative max-md:overflow-hidden'}
      />
      <MembersCounter />
      <Pricing />
      <Clients sectionTitle={false} spacing={'pt-0 pt-0'} />
      <FinancialBlog />
      <CtaV2 /> */}
    </>
  )
}

export default personalized
