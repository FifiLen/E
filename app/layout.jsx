import '@styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import Nav from '@components/Nav';
import Footer from '@components/Footer';
import WebinarButton from '@components/Webinar';


export const metadata = {
    title: 'Poradnia Psychologiczno Pedagogiczna Magnolia',
    description: 'Miejsce, w którym osiągniesz sukces i staniesz na szczycie swoich możliwości'
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <body className='bg-white overflow-x-hidden'>
            <div className='main'>

            </div>

            <main className='app'>
              <Nav />
              <WebinarButton />
            {children}
            <Analytics />
            
              <Footer />
            </main>
            
        </body>
        
    </html>
  )
}

export default Rootlayout