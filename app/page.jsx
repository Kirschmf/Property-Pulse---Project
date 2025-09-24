import React from 'react';
import Link from 'next/link';
import '@/assets/styles/globals.css'

const HomePage = () => {
  return (
    <div>
        <h1 className="text-3xl">
            Welcome to Property Pulse
        </h1>
        <Link href="/properties">Show Properties</Link>
    </div>
  )
}

export default HomePage