"use client"
import Script from 'next/script'
 
export default function Home() {
  return (
    <>
      <Script src="/static/script.js" strategy="worker" />
    </>
  )
}