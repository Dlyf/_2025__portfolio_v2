import React from 'react'
import Section from './Section'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='top-0 py-4 px-4'>
      <Section className='flex items-baseline'>
        <h1 className='text-lg font-bold text-primary'>DomTechLYF</h1>
        <div className='flex-1'>
          <ul className='flex items-center gap-2'>
            <Navbar />
          </ul>
          
        </div>
      </Section>
    </header>
  )
}

export default Header

