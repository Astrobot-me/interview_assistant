import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <React.Fragment>


            <section className='card-cta'>
                <div className='flex flex-col gap-6 max-w-lg'>
                    <h2>
                        Get Interview Ready with AI-Powered Practice & Feedback
                    </h2>

                    <p className='text-lg'>Practice real interview questions and get real feedback</p>


                    <Button className="btn-primary max-sm-w-full"> Start an Interview </Button>
                </div>

                <Image src="/robot.png" alt="robot banner" width={400} height={400} className='max-sm:hidden' />
            </section>

            <section className='flex flex-col mt-6'>
                <h2> Your Past Interviews</h2>


                <div className='interviews-section'>
                    {
                        dummyInterviews.map((data, index) => {
                            return <InterviewCard key={data.type}></InterviewCard>
                        })
                    }

                </div>
            </section>

            <section className='flex flex-col mt-6'>
                <h2> Take an Interview</h2>


                <div className='interviews-section'>
                    {
                        dummyInterviews.map((data, index) => {
                            return <InterviewCard key={data.type}></InterviewCard>
                        })
                    }

                </div>
            </section>


        </React.Fragment>


    )
}

export default page