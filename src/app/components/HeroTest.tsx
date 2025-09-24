import React from 'react'
import Section from './Section'

const HeroTest = () => {
  return (
    <Section className='flex max-sm:flex-col items-start'>
        <div className='flex-[2]'>
            <h2>Lorem ipsum dolor</h2>
            <h3>Développeur Full Stack</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptates optio reiciendis possimus recusandae eos, eius incidunt, nulla fugiat quae nemo consequatur necessitatibus aut adipisci architecto qui pariatur minima dolore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus, molestias veniam vel explicabo sit assumenda. Vitae obcaecati, quia tempore, cum animi ullam accusamus quae totam placeat eligendi et minus.</p>
        </div>
        <div className='flex-[1]'>
            <img src="https://media.licdn.com/dms/image/v2/D4E03AQFGITVlx-_-AQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723117015218?e=1758758400&v=beta&t=cF3Y9JQ_x5aCKKVY8QOioiai74q71tcbNX6yqKa2fEo"
            className='w-full h-auto max-w-xs' alt="Image de Dominique" />
        </div>
    </Section>
  )
}

export default HeroTest