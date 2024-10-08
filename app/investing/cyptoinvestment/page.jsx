import Clients from '@/components/Clients'
import CoreFeature from '@/components/CoreFeature'
import CtaV2 from '@/components/CtaV2'
import FinancialBlog from '@/components/FinancialBlog'
import MembersCounter from '@/components/MembersCounter'
import PaymentFeatures from '@/components/PaymentFeatures'
import PaymentHero from '@/components/heros/PaymentHero'
import PaymentRating from '@/components/PaymentRating'
import Secure from '../../../public/images/hero/secuteandtrus.png'
import crypto from '../../../public/images/hero/cryptoinvesting.jpg'

import Pricing from '@/components/Pricing'
import WhyUs from '@/components/WhyUs'
import { PaymentFeaturesData } from '@/data/data'
const cryptoin = () => {
  const margintop = {
    overflow: 'hidden',
  }
  return (
    <>
      <div className="">
        <PaymentHero
          addPadding={true}
          style={margintop}
          heading={'Crypto Investing'}
          pargraph={
            'Crypto Investing involves buying and holding digital currencies or tokens with the aim of benefiting from their potential price appreciation. Having digital assets in your investment portfolio can potentially enhance returns by including high-growth assets alongside more stable investments.'
          }
          src={crypto}
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

export default cryptoin
