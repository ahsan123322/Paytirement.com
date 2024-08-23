import Clients from '@/components/Clients'
import CoreFeature from '@/components/CoreFeature'
import CtaV2 from '@/components/CtaV2'
import FinancialBlog from '@/components/FinancialBlog'
import MembersCounter from '@/components/MembersCounter'
import PaymentFeatures from '@/components/PaymentFeatures'
import PaymentHero from '@/components/heros/PaymentHero'
import PaymentRating from '@/components/PaymentRating'
import Financial from '../../../public/images/hero/assetsfonds.jpg'

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
      <PaymentHero
        font={'0.9rem'}
        addPadding={true}
        style={margintop}
        heading={'Asset Funds'}
        pargraph={
          'Asset funds is an investment vehicle designed to invest in physical assets that gives rent to its holder. By investing in physical assets, the fund holders can ensure a  stable rental income as per their investment proportion. These funds are managed by professional fund managers who make investment decisions based on the fund’s objectives.Asset funds offer a practical and efficient way for investors to achieve diversification, professional management, and accessibility to a broad range of assets. With their numerous benefits, including cost efficiency, liquidity, and regulatory oversight, asset  funds are an attractive option for both novice and experienced investors looking to  increase their passive income effectively.'
        }
        src={Financial}
      />

      {/* <PaymentHero  addPadding={true} style={margintop} heading={''} pargraph={'' }  src={whytrust} />  */}
    </>
  )
}

export default RetirementPlanning
