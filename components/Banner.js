import React from 'react'
import Image from 'next/legacy/image'
import forest from '/images/forest.jpg'
function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:[500px] xl:[600px] 2xl:[700px]'>
        <Image
          src={forest}
          layout="fill"
          objectFit="cover"
          priority="false"
          alt=""
        ></Image>
        <div className='absolute top-1/2 w-full text-center'>
          <p className='text-sm sm:text-lg text-white'><b>Not sure where to go? Perfect.</b></p>
          <button className='text-purple-500 bg-white px-10 py-3 rounded-full shadow-white font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>Flexible</button>
        </div>
    </div>
  )
}

export default Banner