import Clients from '@/components/Clients'
import CoreFeature from '@/components/CoreFeature'
import CtaV2 from '@/components/CtaV2'
import FinancialBlog from '@/components/FinancialBlog'
import MembersCounter from '@/components/MembersCounter'
import PaymentFeatures from '@/components/PaymentFeatures'
import PaymentHero from '@/components/heros/PaymentHero'
import PaymentRating from '@/components/PaymentRating'
import Secure from '../../../public/images/hero/secuteandtrus.png'
import portfolio from '../../../public/images/hero/portfolioinvest.jpg'

import Pricing from '@/components/Pricing'
import WhyUs from '@/components/WhyUs'
import { PaymentFeaturesData } from '@/data/data'
const portfolioinvestment = () => {
  
    const margintop = {
    marginTop:"12rem",
    overflow:'hidden',
  }
  return (
    <>
      <PaymentHero style={margintop} heading={'Portfolio Investing'} pargraph={"Portfolio investing is a way of investing in a diversified collection of assets to achieve specific financial goals while managing risk. Choose from a variety of expertly curated investment portfolios that align with your financial goals and risk tolerance. Whether you're saving for a vacation or education, securing for emergency, or planning for retirement, paytirement has a portfolio for you."} src={portfolio} />

      
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

export default portfolioinvestment
