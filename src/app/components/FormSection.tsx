import React from 'react'
import Section from './Section'

const FormSection = () => {
  return (
    <div className='mt-3'>
        <Section className=''>
            <h2 className='text-2xl font-bold mb-3'>Contactez-moi</h2>
                <p className='mb-6 text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <form className='flex flex-wrap gap-3'>
                  <input className='w-full md:w-[48%]
                    px-5 py-4 pl-16
                    text-gray-900 text-sm
                    rounded-full border border-gray-300
                    bg-transparent
                    bg-no-repeat bg-[length:40px] bg-[10px]
                    placeholder-gray-500' type="text" name="name" placeholder="Votre prénom" 
                  />

                  <input className='w-full md:w-[48%]
                    px-5 py-4 pl-16
                    text-gray-900 text-sm
                    rounded-full border border-gray-300
                    bg-transparent
                    bg-no-repeat bg-[length:40px] bg-[10px]
                  placeholder-gray-500' type="text" name="mail" placeholder="Votre mail"
                  />
                    <textarea className='w-full mb-3
                      px-5 py-4 pl-20
                      resize-none
                      text-gray-900 text-sm
                      rounded-3xl border border-gray-300
                      bg-transparent
                      bg-no-repeat bg-[length:50px] bg-[15px]
                      placeholder-gray-500' name="message" placeholder="Votre message">
                    </textarea>
                </form>
        </Section>
    </div>
  )
}

export default FormSection
