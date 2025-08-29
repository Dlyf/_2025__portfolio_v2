import React from 'react'
import Section from './Section'
import { Button } from '@/src/components/ui/button'
import { Separator } from '@/components/ui/separator'


const HeroSection = () => {
  return (
    // flex md:flex-col px-7 text-6xl font-extrabold
    <Section className='flex md:flex-col'>
        <div className="flex-[2] flex flex-col gap-2 text-amber-50">
          <h2 className='px-4 mt-12 text-2xl'>Dominique Lung Yut Fong</h2>
          <div className='mt-12 mb-12'>
            <img className='max-md:m-auto md:m-auto max-[36rem]:m-auto ml-auto' src="https://media.licdn.com/dms/image/v2/D4E03AQFGITVlx-_-AQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723117015218?e=1758758400&v=beta&t=cF3Y9JQ_x5aCKKVY8QOioiai74q71tcbNX6yqKa2fEo" alt="image photo" />

          </div>
          <div className='container text-amber-6 px-4 text-7xl font-extrabold'>
            <span>Développeur Full stack</span>
          </div>
          <Separator className="my-3 bg-white" />
          <div className='px-4  mb-5'>
            <h3 className='font-bold uppercase'>à propos</h3>
            <p className='text-base px-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia animi, esse quaerat unde inventore sequi temporibus nulla veniam repellat soluta ipsam quae maiores quisquam laborum nisi culpa fugit. Laborum, quia?
            </p>
          </div>
          {/* <div className='px-4'>
            <Button className='px-6' variant="outline">test</Button>
            <Button className='px-6 m-4' variant="outline">test</Button>

          </div> */}
        </div>
    </Section>
  )
}

export default HeroSection