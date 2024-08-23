import Clients from '@/components/Clients'
import CoreFeature from '@/components/CoreFeature'
import CtaV2 from '@/components/CtaV2'
import FinancialBlog from '@/components/FinancialBlog'
import MembersCounter from '@/components/MembersCounter'
import PaymentFeatures from '@/components/PaymentFeatures'
import PaymentHero from '@/components/heros/PaymentHero'
import PaymentRating from '@/components/PaymentRating'
import Financial from '../../../public/images/hero/financialplaining.jpg'
import whytrust from '../../../public/images/hero/finacialplainers.jpg'
import Pricing from '@/components/Pricing'
import WhyUs from '@/components/WhyUs'
import { PaymentFeaturesData } from '@/data/data'
const FinancialPlaining = () => {
  const margintop = {
    overflow: 'hidden',
  }
  return (
    <>
      <PaymentHero
        addPadding={true}
        style={margintop}
        linheight={'2.6rem'}
        heading={'Financial Planning'}
        pargraph={
          'Financial planning is the process of managing your finances to achieve your life goals. It involves analyzing your current financial situation, setting objectives, and developing strategies to reach those goals. Financial planning is essential for everyone, regardless of age or income level, as it provides a roadmap to financial security and stability.'
        }
        src={Financial}
      />

      <PaymentHero
        addPadding={false}
        style={margintop}
        linheight={'1.6rem'}
        heading={'Our Financial Planners'}
        pargraph={
          'Our financial planners can assist you in this crucial aspect of managing your finances and achieving your life goals. By setting clear objectives, creating a budget, saving and investing wisely, and preparing for emergencies, you can secure your financial future and enjoy peace of mind. Whether you are just starting your financial journey or looking to improve your current financial situation, a well-structured financial plan is the key to financial stability and success. Join paytirement today and start planning to build a secure and prosperous future for yourself and your loved ones.'
        }
        src={whytrust}
      />
    </>
  )
}

export default FinancialPlaining
