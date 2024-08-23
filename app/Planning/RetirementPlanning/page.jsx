import Clients from '@/components/Clients'
import CoreFeature from '@/components/CoreFeature'
import CtaV2 from '@/components/CtaV2'
import FinancialBlog from '@/components/FinancialBlog'
import MembersCounter from '@/components/MembersCounter'
import PaymentFeatures from '@/components/PaymentFeatures'
import PaymentHero from '@/components/heros/PaymentHero'
import PaymentRating from '@/components/PaymentRating'
import Financial from '../../../public/images/hero/Retitrementplaining.jpg'
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
        linheight={'1.3rem'}
        addPadding={true}
        font={'0.9rem'}
        style={margintop}
        heading={'Retirement Planning'}
        pargraph={
          'Retirement planning is the process of determining retirement income goals and the actions and decisions necessary to achieve those goals. This involves identifying sources of income, estimating expenses, implementing a savings program, and managing assets and risk. The ultimate aim is to ensure that you have sufficient funds to enjoy a comfortable and financially secure retirement. Our team of professionals can work with you to ensure a secure and comfortable future for you. By setting clear goals, saving and investing wisely, and regularly reviewing your plan, you can enjoy peace of mind and financial independence in your retirement years. Join us and start planning to build a secure and fulfilling retirement tomorrow. '
        }
        src={Financial}
      />

      {/* <PaymentHero  addPadding={true} style={margintop} heading={''} pargraph={'' }  src={whytrust} />  */}
    </>
  )
}

export default RetirementPlanning
