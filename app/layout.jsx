import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Providers from '@/utils/providers'
import '../app/app/layout.css'
import '../app/app/page.css'
import '../app/globals.css'
import '@/scss/theme.scss'
import { Montserrat } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from '../nexotast/Toast'
import ShowModal from '@/components/showModal'
import HomeCta from '@/components/HomeCTA'
const montserrat = Montserrat({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'Paytirement | Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`relative overflow-x-hidden bg-white text-base antialiased dark:bg-dark-300 ${montserrat.variable}`}>
        <Providers attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ThemeSwitcher />
          <ToastContainer />
          <Navbar />
          <main>{children}</main>
          <HomeCta />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
