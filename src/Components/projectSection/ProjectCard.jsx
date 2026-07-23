import React from 'react'

function ProjectCard() {
    return (
        <div className='h-120 w-120  flex flex-col gap-4 '>
            <div className='w-120 h-70 ' ><img src="https://cdn.dribbble.com/userupload/6509948/file/original-71a9be363777ce8dbf78b305b10b698e.png?resize=1504x1128&vertical=center" alt="" className='overflow-hidden object-fit w-120 h-70 rounded-4xl z-10 ' /></div>
            <div className='flex gap-2 text-xs font-semibold '>
                <a className='border-2 py-1 px-3 rounded-full  ' href="">Javascript</a>
                <a className='border-2 py-1 px-3 rounded-full' href="">React js </a>
                <a className='border-2 py-1 px-3 rounded-full' href="">HTML</a>
                <a className='border-2 py-1 px-3 rounded-full' href="">Css</a>
            </div>

            <div className='flex flex-col gap-2' >
                <p>Portfolio  ui  news</p>
                <h1 className=' text-blue-400 text-2xl font-semibold '>Project-Title</h1>
            </div>

        </div>
    )
}

export default ProjectCard