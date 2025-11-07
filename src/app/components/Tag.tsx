import { ITag } from '@/types'
import React from 'react'


const Tag = ({ name }: ITag ) => {
  return (
    <div className="flex flex-wrap gap-2">
      <span className='px-1 mt-1 rounded-full bg-neutral shadow-xl
      text-sm border border-bleu
      hover:bg-sky-500'>
        {name}
      </span>

    </div>
  )
}

export default Tag;