import Clients from '@/components/Clients'
import CoreFeature from '@/components/CoreFeature'
import CtaV2 from '@/components/CtaV2'
import FinancialBlog from '@/components/FinancialBlog'
import MembersCounter from '@/components/MembersCounter'
import PaymentFeatures from '@/components/PaymentFeatures'
import PaymentHero from '@/components/heros/PaymentHero'
import PaymentRating from '@/components/PaymentRating'
import Financial from '../../../public/images/hero/Emergencyfund.jpg'
import whytrust from '../../../public/images/hero/finacialplainers.jpg' 
import Pricing from '@/components/Pricing'
import WhyUs from '@/components/WhyUs'

import { PaymentFeaturesData } from '@/data/data'
const Emergency = () => {
  const margintop = {
   overflow:'hidden',
  }
  return (
    <>
      <PaymentHero   addPadding={true} style={margintop} heading={'Emergency Fund'}   pargraph={'An emergency fund is a crucial component of financial planning that provides a buffer for unexpected expenses or financial emergencies. This dedicated savings account ensures that you have the resources to handle sudden financial challenges without resorting to high-interest debt or compromising your long-term financial goals.  An emergency fund is an essential financial tool that provides a safety net for unexpected expenses and financial emergencies. By choosing this fund, you can avoid debt, protect your investments, and navigate life&#39;s uncertainties with greater confidence and peace of mind. Start building your emergency fund today with  paytirement to secure your financial future and ensure that you are prepared for whatever challenges may come your way.'  } src={Financial} />
 

       {/* <PaymentHero  addPadding={true} style={margintop} heading={''} pargraph={'' }  src={whytrust} />  */}
      
    
    </>
  )
}

export default Emergency
