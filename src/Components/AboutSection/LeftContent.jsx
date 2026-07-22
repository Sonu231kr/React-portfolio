import React from 'react'

function LeftContent() {
    return (
        <div className='w-1/2 text-white  pt-10  relative'>



            <div className='w-100 h-100 rounded-full  p-8 border border-blue-400 flex justify-center items-center'>


                <div className='h-full w-full rounded-full border border-blue-400 flex justify-center items-center '>
                    <img src="https://scontent.cdninstagram.com/v/t51.82787-19/752509117_18089608478639451_5993870484513379451_n.jpg?_nc_cat=102&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=NK9xx7jeLSsQ7kNvwEjhqVX&_nc_oc=AdpJjv6sCU-jlrrltm_WbSjQIsHeeuJU-AO290bvqEf_B_wG5iKK6QOhz0TMnFHsBXy8JpvHVtDxSjAYRvtUxWLs&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=JcTMkz8WWYp4R5Q6nJEJFg&_nc_ss=7b6a8&oh=00_AQAzEj1oEkojkh3AHUBoJFM3WLabjzhB5hezZPlD_WaQIQ&oe=6A663C47" alt="" className='overflow-hidden rounded-full object-fill' />
                </div>
            </div>

            <div className='w-100 h-full absolute top-0 left-0   '>


                <div className=' h-full w-full flex flex-col justify-between'>
                    <div className='flex justify-between items-center m-5 '>

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThyWkOfZRTqhMOC0bLfAWBPssOUBjGid0yf40J94dEOQ&s=10" alt="" className='mt-23 h-11 w-11 rounded-full  ' />

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjmqbtIpnsRVdEm5gezOMQ7tIxs3-yHKXiAWiGUzm-dw&s=10" alt="javascript" className='h-11 w-11  rounded-full mr-12 mb-10 object-fit ' />

                    </div>

                    <div className='flex  justify-between gap-20  p-10'>

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2HLul2UYYM3GKNfsPVYXIJPuybVb4Uw6O3vnlzcUpHA&s=10" alt="img1" className='h-11 w-11 ml-2 rounded-full' />

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRowpM5eeZApik2P9_fVAW5mYuDiuRX-7MBKq0DvjeQ&s=10" alt="img2" className='h-11 w-11 mr-2 mb-1  rounded-full ' />
                    </div>

                </div>
            </div>


        </div>
    )
}

export default LeftContent