import React from 'react'

function RightSection() {
    return (
        <div className='flex gap-10 flex-wrap w-1/3'>
            <a href="" className='py-3 px-8 h-15 font-medium text-sm border border-blue-400 rounded-full flex justify-center items-center'>HTML5</a>
            <a href="" className='py-3 px-8 font-medium text-sm border border-blue-400 rounded-2xl h-15 flex justify-center items-center'>JAVASCRIPT</a>
            <a href="" className='p-3  font-medium text-sm border border-blue-400 rounded-full h-18 w-19 flex items-center justify-center'>CSS3</a>
            <a href="" className='py-3 px-8 font-medium text-sm border border-blue-400 rounded-2xl'>TAILWIND</a>

            <a href="" className='py-3  px-6 font-medium text-sm border border-blue-400 rounded-2xl flex items-center justify-center'>REACT</a>
            <a href="" className='  px-4 font-medium text-sm border border-blue-400 rounded flex items-center justify-center'>UI DESIGN</a>
            <a href="" className='p-3  font-medium text-sm border border-blue-400 rounded-full h-18 w-19 flex items-center justify-center'>GIT</a>
            <a href="" className='py-3  px-8  h-15 font-medium text-sm border border-blue-400 rounded-2xl flex items-center justify-center'>GITHUB</a>
            <a href="" className='p-3  px-3 font-medium text-sm border border-blue-400 rounded-full h-18 w-19 flex items-center justify-center'>MYSQL</a>
        </div>
    )
}

export default RightSection