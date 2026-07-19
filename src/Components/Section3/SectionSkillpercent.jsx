import React from 'react'
import { Percent, Plus } from 'lucide-react';
function SectionSkillpercent() {
    return (

        <div className='flex flex-col gap-8'>
            <div className='flex flex-row w-70 gap-6 border-dotted border-b-3 border-b-blue-400 pb-2'>
                <div className='flex gap-2 '>
                    <h1 className='text-3xl text-white font-semibold font-display'>140</h1>
                    <Plus className='size-8 text-blue-400 strokeWidth={3}' />
                </div>
                <div className='flex justify-center items-center'>
                    <p>Project Acheves</p>
                </div>
            </div>


            <div className='flex flex-row w-70 gap-6 border-dotted border-b-3 border-b-blue-400 pb-2'>
                <div className='flex gap-2 '>
                    <h1 className='text-3xl text-white font-semibold font-display'>98</h1>
                    <Percent className='size-8 text-blue-400 strokeWidth={3}' />
                </div>
                <div className='flex pl-5 items-center gap-20'>
                    <p>Positive</p>
                </div>
            </div>



            <div className='flex flex-row w-70 gap-6 border-dotted border-b-3 border-b-blue-400  pb-2'>
                <div className='flex gap-2 '>
                    <h1 className='text-3xl text-white font-semibold font-display'>3</h1>
                    <Plus className='size-8 text-blue-400 strokeWidth={3}' />
                </div>
                <div className='flex pl-8 items-center'>
                    <p>Expirence</p>
                </div>
            </div>
        </div>
    )
}

export default SectionSkillpercent