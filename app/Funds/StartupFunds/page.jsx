import Clients from '@/components/Clients'
import CoreFeature from '@/components/CoreFeature'
import CtaV2 from '@/components/CtaV2'
import FinancialBlog from '@/components/FinancialBlog'
import MembersCounter from '@/components/MembersCounter'
import PaymentFeatures from '@/components/PaymentFeatures'
import PaymentHero from '@/components/heros/PaymentHero'
import PaymentRating from '@/components/PaymentRating'
import Financial from '../../../public/images/hero/Startup-Funding.jpg'
import whytrust from '../../../public/images/hero/finacialplainers.jpg'
import Pricing from '@/components/Pricing'
import WhyUs from '@/components/WhyUs'
import { PaymentFeaturesData } from '@/data/data'
const StartupFunds = () => {
  const margintop = {
    overflow: 'hidden',
  }
  return (
    <>
      <PaymentHero
        addPadding={true}
        style={margintop}
        heading={'Startup Fund'}
        pargraph={
          'Startup funds are vital financial resources that provide the capital needed for new businesses to launch, grow, and thrive. These funds can come from various sources, including venture capital firms, angel investors, crowdfunding platforms, and government grants. Investing in startup funds not only offers significant growth  prospects but also comes with a range of benefits for both the startups and the investors. Startup funds are essential for fostering innovation, driving economic growth, and creating opportunities for both entrepreneurs and investors. With the potential for high growth and significant returns, investing in startup funds can be a rewarding   venture. By choosing these funds will provide the capital, expertise, and resources needed to transform ideas into successful businesses. By supporting startup funds,you can play a pivotal role in shaping the future of industries and driving the next wave of technological and business advancements.'
        }
        src={Financial}
      />

      {/* <PaymentHero  addPadding={true} style={margintop} heading={''} pargraph={'' }  src={whytrust} />  */}
    </>
  )
}

export default StartupFunds
