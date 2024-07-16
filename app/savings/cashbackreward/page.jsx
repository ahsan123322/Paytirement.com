import Clients from '@/components/Clients'
import CoreFeature from '@/components/CoreFeature'
import CtaV2 from '@/components/CtaV2'
import FinancialBlog from '@/components/FinancialBlog'
import MembersCounter from '@/components/MembersCounter'
import PaymentFeatures from '@/components/PaymentFeatures'
import PaymentHero from '@/components/heros/PaymentHero'
import PaymentRating from '@/components/PaymentRating'
import Personalized from '../../../public/images/hero/personalized.png'
import Cashback from '../../../public/images/hero/cashbackreward.jpg'

import Pricing from '@/components/Pricing'
import WhyUs from '@/components/WhyUs'
import { PaymentFeaturesData } from '@/data/data'
const cashbackreward = () => {
  const margintop = {
    marginTop:"12rem",
    overflow:'hidden',
  }
  return (
    <>
    <div className='mx-6'>
      <PaymentHero style={margintop} heading={'Cashback Rewards'} pargraph={'With every purchase made through paytirement, you earn cashback rewards. These rewards can be accumulated and redeemed for future purchases or invested on your chosen portfolio.'} src={Cashback} />

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

export default cashbackreward
