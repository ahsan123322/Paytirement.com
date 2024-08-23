import Clients from '@/components/Clients'
import CoreFeature from '@/components/CoreFeature'
import CtaV2 from '@/components/CtaV2'
import FinancialBlog from '@/components/FinancialBlog'
import MembersCounter from '@/components/MembersCounter'
import PaymentFeatures from '@/components/PaymentFeatures'
import PaymentHero from '@/components/heros/PaymentHero'
import PaymentRating from '@/components/PaymentRating'
import Financial from '../../../public/images/hero/propertieinvestment.jpg'

import whytrust from '../../../public/images/hero/finacialplainers.jpg'
import Pricing from '@/components/Pricing'
import WhyUs from '@/components/WhyUs'
import { PaymentFeaturesData } from '@/data/data'
const RetirementPlanning = () => {
  const margintop = {
    overflow: 'hidden',
  }
  return (
    <>
      <div className="flex justify-center">
        <PaymentHero
          addPadding={true}
          style={margintop}
          heading={'Property Funds'}
          font={'0.9rem'}
          pargraph={
            'Property funds, also known as real estate funds, are pooled investment vehicles that invest in real estate properties or real estate-related securities. These funds allow individual investors to gain exposure to the property market without directly purchasing and managing properties. Property funds provide a convenient and efficient way for investors to gain exposure to the real estate market. With benefits like diversification, professional management, and accessibility, property funds make it easier for individuals to invest in high-quality real estate assets without the need for significant capital or direct property management responsibilities. By choosing property fund you can start investing in Australian property market to enhance your portfolio and achieve financial goals.'
          }
          src={Financial}
        />
      </div>

      {/* <PaymentHero  addPadding={true} style={margintop} heading={''} pargraph={'' }  src={whytrust} />  */}
    </>
  )
}

export default RetirementPlanning
