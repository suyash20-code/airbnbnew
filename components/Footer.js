import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-sm text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>New Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>AirBnb Luxe</p>
        </div>

        <div className='space-y-4 text-sm text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>Referrals accepted</p>
            <p>Airbnb Family</p>
            <p>AirBnb Luxe</p>
        </div>

        <div className='space-y-4 text-sm text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p>Suyash Padwa</p>
            <p>Clone site</p>
            <p>Full Stack</p>
            <p>Students</p>
            <p>Join now</p>
        </div>

        <div className='space-y-4 text-sm text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Centre</p>
            <p>Trust & Safety</p>
            <p>Say Hi YouTube</p>
            <p>Airbnb Plus</p>
            <p>For the win</p>
        </div>

    </div>
  )
} 

export default Footer