import React from 'react'
import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
    title: 'Property Pulse | Find the Perfect rental',
    description: 'Find your dream rental property',
    keywords: 'rental, property, real estate, apartments, houses, rent'
}

const MainLayout = ({ children }) => {
  return (
    <html lang='en'> 
    <body>
      <Navbar />
        <main>{children}</main>
    </body>
    </html>
  )
}

export default MainLayout;