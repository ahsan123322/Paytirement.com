import Clients from '@/components/Clients'
import CoreFeature from '@/components/CoreFeature'
import CtaV2 from '@/components/CtaV2'
import FinancialBlog from '@/components/FinancialBlog'
import MembersCounter from '@/components/MembersCounter'
import PaymentFeatures from '@/components/PaymentFeatures'
import PaymentHero from '@/components/heros/PaymentHero'
import PaymentRating from '@/components/PaymentRating'
import Personalized from '../../../public/images/hero/personalizedrecomedation.jpg'

import Pricing from '@/components/Pricing'
import WhyUs from '@/components/WhyUs'
import { PaymentFeaturesData } from '@/data/data'
const personalized = () => {
  const margintop = {
    overflow: 'hidden',
  }
  return (
    <>
      <PaymentHero
        addPadding={true}
        style={margintop}
        heading={'Personalized       Recommendation'}
        pargraph={
          "Utilizing advanced algorithms, paytirement analyses your shopping habits and preferences to provide personalized deal recommendations. Whether you're shopping for groceries, electronics, clothing, or dining out, paytirement.com will suggest deals tailored specifically for you."
        }
        src={Personalized}
      />

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
