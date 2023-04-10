import React from 'react'

export const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto grid md:grid-cols-3 gap-6 px-4'>
        {/*Cards*/}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full rounded-xl bg-black/50 text-white '>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black bottom-4 absolute'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
                {/*Cards*/}
                <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full rounded-xl bg-black/50 text-white '>
            <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
            <p className='px-2'>Added Daily</p>
            <button className='border-white bg-white text-black bottom-4 absolute '>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>       
         {/*Cards*/}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full rounded-xl bg-black/50 text-white '>
            <p className='font-bold text-2xl px-2 pt-4'>We deliver Deserts Too</p>
            <p className='px-2'>Tasty Treats</p>
            <button className='border-white bg-white text-black bottom-4 absolute'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.pexels.com/photos/14705141/pexels-photo-14705141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
    </div>
  )
}
 