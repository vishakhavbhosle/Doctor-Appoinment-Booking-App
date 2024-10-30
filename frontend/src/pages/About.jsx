import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, et. Tenetur qui provident dolor adipisci odio nisi, dolores quam et neque fuga perferendis veniam facere delectus, fugiat voluptates reprehenderit velit? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptatum veniam nostrum sapiente laboriosam impedit vero necessitatibus dolorem. Eos, odit!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed magni, consequuntur neque excepturi voluptatem quisquam perferendis? Cupiditate a explicabo labore deleniti quisquam, suscipit numquam quos. Ipsum, cupiditate provident quasi possimus sit, odio earum, iste ab est ratione dolores minus enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dolor voluptatibus? Vel aliquid perspiciatis maxime.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In alias, amet at deleniti nulla obcaecati quibusdam tenetur iure totam maiores inventore sit doloremque porro rerum dolorum quos architecto unde tempore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, atque!</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY<span className='text-gray-700 font-semibold'> CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamined appointment scheduling that fits into your lifestyle.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About