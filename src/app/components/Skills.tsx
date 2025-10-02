import React from 'react'
import Section from './Section'
import Tag from './Tag'
import { Card } from '@/components/ui/card';

const skills = [
    "JavaScript (ES6+)",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "HTML & CSS",
    "Git & GitHub",
    "RESTful APIs",
    "Test-Driven Development (TDD)",
    "Agile/Scrum",
  ];
  
const Skills = () => {
  return (
    <Section className='mt-24 mr-1 ml-1 bg-white text-left rounded-xl p-2 max-md:p-5 shadow-md'>
        <section className='bg-white text-left rounded-2xl p-1 shadow-md mt-3'>
            <h2 className='text-lg md:text-2xl mb-2 font-semibold'>Compétences</h2>
            <ul className='flex flex-wrap leading-10'>
                {skills.map((skill, index) => (
                    <li key={index} className='mr-2'><Tag name={skill} /></li>
                ))}
            </ul>
        </section>
    </Section>
    
  )
}

export default Skills