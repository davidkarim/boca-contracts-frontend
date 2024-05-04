'use client'

import { GoogleAnalytics } from "nextjs-google-analytics";
import ChatwootWidget from '@/components/ChatwootWidget';

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import PageIllustration from '@/components/page-illustration'
import Footer from '@/components/ui/footer'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <>
      <main className="grow">
        <GoogleAnalytics trackPageViews={true} />
        <ChatwootWidget />

        <PageIllustration />

        {children}

      </main>

      <Footer />
    </>
  )
}
