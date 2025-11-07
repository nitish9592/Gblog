import React from 'react'

const Footer = () => {
    return (
        <div className='inline-flex items-center justify-center w-full text-sm text-center bg-gray-50 py-4 '>
            Designed & Developed with 💝 by :  
            <a
                href='https://github.com/nitish9592'
                className=' font-bold text-blue-600 mx-1 text-pretty underline'
            >
                Nitish Bhagat
            </a>
            <img
                src='https://avatars.githubusercontent.com/u/187281593?v=4'
                width='40'
                className='rounded-full '
                alt='Nitish Bhagat'
            />
        </div>

    )
}

export default Footer