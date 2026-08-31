import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-[#f5f7fa] py-4 px-8 flex-wrap lg:py-12 lg:px-40 flex justify-between lg:flex-row'>
       <div className='flex flex-col pb-12 gap-2'>
        <h4 className='text-lg text-[#2530a0]'>Class Categories</h4>
        <ul className='text-[#50557d] text-sm'>
          <li className='mt-2'>Language</li>
          <li>Cooking</li>
          <li>Music</li>
          <li>Art & Craft</li>
          <li>Yoga</li>
          <li>Academics</li>
          <li>Back to roots</li>
          <li>Funteresting</li>
        </ul>
      </div>
      <div className='flex flex-col pb-12 gap-2'>
        <h4 className='text-lg text-[#2530a0]'>Company</h4>
        <ul className='text-[#50557d] text-sm'>
          <li className='mt-2'>About</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Privacy</li>
          <li>Terms & Conditions</li>
          <li>Refund Policy</li>
        </ul>
      </div>
      <div className='flex flex-col pb-12 gap-2'>
        <h4 className='text-lg text-[#2530a0]'>Learn</h4>
        <ul className='text-[#50557d] text-sm'>
          <li>All Classes</li>
        </ul>
      </div>
      <div className='flex flex-col pb-12 gap-2'>
        <h4 className='text-lg text-[#2530a0]'>Teach</h4>
        <ul className='text-[#50557d] text-sm'>
          <li>Become A Teacher</li>
        </ul>
      </div>
      <div className='flex flex-col pb-12'>
        {/* <img src='../src/assets/images/footer.jpg' className='w-80 lg:w-60 h-40 rounded-t-md' alt='footer_image' /> */}
        <img src='https://i.ibb.co/khDVtN5/footer.jpg' className='w-80 lg:w-60 h-40 rounded-t-md' alt='footer_image' />
        <div className='text-center bg-white px-3 w-80 lg:w-full rounded-b-md shadow-lg py-1'>
          <h4 className='uppercase text-xs text-[#2530a0] font-medium'>Sell your product with us</h4>
        </div>
      </div>
    </div>
  )
}

export default Footer