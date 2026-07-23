import React from 'react'

function LeftContent() {
    return (
        <div className='w-1/2 text-white  pt-10  relative'>



            <div className='w-100 h-100 rounded-full  p-8 border border-blue-400 flex justify-center items-center'>


                <div className='h-full w-full rounded-full border border-blue-400 flex justify-center items-center '>
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/746420621_1313955600728368_4873168480876193933_n.jpg?ccb=11-4&oh=01_Q5Aa5AHJhLwcPs_E7q2jdnAkXcyIfC3djJ4-CfwDN2VrBjithA&oe=6A6E13D6&_nc_sid=5e03e0&_nc_cat=100" alt="" className='overflow-hidden rounded-full object-fill' />
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