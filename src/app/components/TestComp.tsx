import { Card } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'
import Section from './Section'
import { LucideIcon } from 'lucide-react'

export const status =() => {
    return (
        <Section className=' flex max-md:flex-col items-start gap-4'>
            <Card className='w-full flex-[3] p-4 flex flex-col gap-2' >
                <p className='text-muted-foreground text-lg'>Side fun project</p>
                <div className='flex flex-col gap-4'>
                    {SIDE_PROJECTS.map((project) => (
                        <SideProject 
                            key={project.title}
                            Logo={project.Logo!} 
                            title={project.title} 
                            description={project.description}
                            url={project.url} 
                        />
                    ))}
                </div>
            </Card>
            <div className='flex-[2] w-full flex flex-col h-full gap-4'>
                <Card className='p-4 flex-1'>
                    <p className='text-muted-foreground text-lg'>Work</p>
                    <div className='flex flex-col gap-4'>
                        {WORKS.map((work) => (
                            <Work 
                                key={work.title}
                                image={work.image!} 
                                title={work.title} 
                                role={work.role}
                                date={work.date}
                                url={work.url} 
                            />
                        ))}
                    </div>
                </Card>
                <Card className='p-4 flex-1'>Contact me</Card>
            </div>
        </Section>
    )
}

const TestComp = () => {
  return (
    <Link href={""}>
        <span className='bg-accent text-accent-foreground p-4 rounded-sm'>
            Logo
        </span>
        <div>
            <p className='text-lg font-semibold'>
                title
            </p>
            <p className='text-sm text-muted-foreground'>title</p>
        </div>
    </Link>
  )
}

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: "null" as unknown as LucideIcon,
        title: "Project One",
        description: "Description for project one.",
        url: "/"
    }, 
    {
        Logo: "null" as unknown as LucideIcon,
        title: "Project Two",
        description: "Description for project Two.", 
        url: "/"
    },
    {
        Logo: "null" as unknown as LucideIcon,
        title: "Project Three",
        description: "Description for project Three.",
        url: "/"
    }
]

type SideProjectProps = {
    Logo: LucideIcon, 
    title: string, 
    description:string,
    url: string
}

const SideProject = (props: SideProjectProps ) => {
    return (
        <Link href={props.url} className='inline-flex items-center gap-4 hover:bg-accent/50 transition-colors  p-1 rounded'>
            <span className='bg-accent text-accent-foreground p-3  rounded-sm'>
                 <props.Logo size={16}/>
            </span>
            <div>
                <p className='text-lg font-semibold'>{props.title }</p>
                <p className='text-muted-foreground text-sm'>S{props.description }</p>

            </div>
        </Link>
    )
}

const WORKS: WorkProps[] = [ 
    {
        image: "string",
        title: "Project One",
        role: "Description for project one.",
        date: "2022",
        url: "/"
    },
    {
        image: "string",
        title: "Project Two",
        role: "Description for project Two.", 
        date: "2023",
        url: "/"
    },

]

type WorkProps = {
    image: string, 
    title: string, 
    role: string,
    date: string,
    url: string
}

const Work = (props: WorkProps ) => {
    return (
        <Link href={props.url} className='inline-flex items-center gap-4 hover:bg-accent/50 transition-colors  p-1 rounded'>
            <img src={props.image} alt={props.title} className='w-10 h-10 object-contain rounded-md' />
            <div>
                <p className='text-lg font-semibold'>{props.title }</p>
                <p className='text-muted-foreground text-sm'>{props.role }</p>

            </div>
            <div className='ml-auto'>
                <p className='text-muted-foreground text-sm'>S{props.date }</p>

            </div>
        </Link>
    )
}