import { cn } from '@/lib/utils'
import React from 'react'


type InterviewCardPropType = { 
    type : string
}

function InterviewCard({ type} : InterviewCardPropType) {
  return (
    <div className='card-border w-[360px] max-sm:w-full min-h-96' >
         <div className='card-interview'>
            <div>
                <div className={ 
                    cn( "absolute top-0 right-0 px-4 py-2 rounded-bl-lg",
                    "bg-light-400"    
                    
                    )
                }>
                    <p className='badge-text'> {type || "Mixed "} </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InterviewCard