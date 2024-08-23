import Clients from '@/components/Clients'
import CoreFeature from '@/components/CoreFeature'
import CtaV2 from '@/components/CtaV2'
import FinancialBlog from '@/components/FinancialBlog'
import MembersCounter from '@/components/MembersCounter'
import PaymentFeatures from '@/components/PaymentFeatures'
import PaymentHero from '@/components/heros/PaymentHero'
import PaymentRating from '@/components/PaymentRating'
import Pricing from '@/components/Pricing'
import WhyUs from '@/components/WhyUs'
import activedeels from '../../../public/images/hero/activedeals.jpg'

import { PaymentFeaturesData } from '@/data/data'
const savings = () => {
  const margintop = {}
  return (
    <>
      <div className="mx-12">
        <PaymentHero
          linheight={'2.8rem'}
          addPadding={true}
          style={margintop}
          heading={'Active Deals'}
          pargraph={
            "Inclusive of your daily spendings, paytirement scans thousands of deals across various retailers and service providers.The platform aggregates these deals in one place, so you don't have to spend time searching multiple platforms. This ensures you never miss out on the best saving offers available. "
          }
          src={activedeels}
        />
      </div>

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

export default savings
