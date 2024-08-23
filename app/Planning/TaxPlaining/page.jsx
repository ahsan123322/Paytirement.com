import Clients from '@/components/Clients'
import CoreFeature from '@/components/CoreFeature'
import CtaV2 from '@/components/CtaV2'
import FinancialBlog from '@/components/FinancialBlog'
import MembersCounter from '@/components/MembersCounter'
import PaymentFeatures from '@/components/PaymentFeatures'
import PaymentHero from '@/components/heros/PaymentHero'
import PaymentRating from '@/components/PaymentRating'
import TextPlaining from '../../../public/images/hero/Taxtplaining.jpg'
import whytrust from '../../../public/images/hero/whyturstus.jpg'

import Pricing from '@/components/Pricing'
import WhyUs from '@/components/WhyUs'
import { PaymentFeaturesData } from '@/data/data'
const TaxPlaining = () => {
  const margintop = {
    overflow: 'hidden',
  }
  return (
    <>
      <PaymentHero
        addPadding={true}
        style={margintop}
        font={'0.9rem'}
        linheight={'1.5rem'}
        heading={'Tax Planning'}
        pargraph={
          'Tax planning is a strategic approach to managing finances with the objective of minimizing tax liabilities while ensuring compliance with the law. Effective tax planning leverages various tax breaks, deductions, exemptions, and incentives to reduce taxable income and ultimately the amount of tax owed. Our tax planners can help you with this essential aspect of financial management that offers numerous benefits, from tax savings and improved cash flow to enhanced investment returns and compliance. By implementing effective tax planning strategies, individuals and businesses can achieve greater financial stability and security while fulfilling your tax obligations responsibly.'
        }
        src={TextPlaining}
      />
      {/* <PaymentHero addPadding={true} style={margintop} heading={'Why Trust Our Payment System?'} pargraph={'Our payment mechanism utilizes the most advanced technology available today. This  includes robust encryption methods, secure payment gateways, and continuous system updates to protect your financial information.We use end-to-end encryption to safeguard your data from the moment you enter it until the transaction is complete. This ensures that your sensitive information remains confidential and protected from unauthorized access.' }  src={whytrust} /> */}

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

export default TaxPlaining
