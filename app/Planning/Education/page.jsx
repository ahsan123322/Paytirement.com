import Clients from '@/components/Clients'
import CoreFeature from '@/components/CoreFeature'
import CtaV2 from '@/components/CtaV2'
import FinancialBlog from '@/components/FinancialBlog'
import MembersCounter from '@/components/MembersCounter'
import PaymentFeatures from '@/components/PaymentFeatures'
import PaymentHero from '@/components/heros/PaymentHero'
import PaymentRating from '@/components/PaymentRating'
import Educationplaining from '../../../public/images/hero/educationplaining.jpg'
import whytrust from '../../../public/images/hero/finacialplainers.jpg'
import Pricing from '@/components/Pricing'
import WhyUs from '@/components/WhyUs'
import { PaymentFeaturesData } from '@/data/data'
const RetirementPlanning = () => {
  const margintop = {
   overflow:'hidden',
  }
  return (
    <>
      <PaymentHero   addPadding={true} style={margintop} heading={'Education plannig'}   pargraph={'Education funds are specialized savings or investment accounts designed to help families save and invest money for their children&#39;s education expenses. These funds provide a financial cushion that enables young teens to pursue their educational goals without falling into the trap of debt. By joining our education fund, you can ensure that our young teens can pursue their educational dreams without the burden of debt. By taking advantage of the various  types of education funds and starting to save early, families can provide a solid  financial foundation for their children’s education. With benefits like tax advantages, compounding growth, and financial flexibility, education funds offer a smart and  effective way to support higher education and build a brighter future for the next generation.' } src={Educationplaining} />
 

       {/* <PaymentHero  addPadding={true} style={margintop} heading={''} pargraph={'' }  src={whytrust} />  */}
      
    
    </>
  )
}

export default RetirementPlanning
