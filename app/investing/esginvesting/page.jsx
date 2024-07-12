import Clients from '@/components/Clients'
import CoreFeature from '@/components/CoreFeature'
import CtaV2 from '@/components/CtaV2'
import FinancialBlog from '@/components/FinancialBlog'
import MembersCounter from '@/components/MembersCounter'
import PaymentFeatures from '@/components/PaymentFeatures'
import PaymentHero from '@/components/heros/PaymentHero'
import PaymentRating from '@/components/PaymentRating'
import Secure from '../../../public/images/hero/secuteandtrus.png'
import ESG from '../../../public/images/hero/What-is-ESG-investing-scaled.jpg'

import Pricing from '@/components/Pricing'
import WhyUs from '@/components/WhyUs'
import { PaymentFeaturesData } from '@/data/data'
const esginvesting = () => {
  return (
    <>
    <div style={{margin:'1rem'}}>
      <PaymentHero heading={'ESG Investing'} pargraph={'ESG Investing involves considering Environmental, Social, and Governance factors in investment decisions. This approach aims to generate long-term competitive financial returns alongside positive societal impact. Firms that prioritize ESG issues are often better prepared for future changes. Those who invest in ESG companies can align their portfolio with their personal values and ethical beliefs by promoting responsible corporate behaviour. By investing in ESG-focused companies you can contribute to environmental conversation,social equity, and ethical governance.'} src={ESG} />

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

export default esginvesting