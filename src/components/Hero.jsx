import React from 'react'

const Hero = () => {
    return (
        <div className='bg-[url(/pokemon_banners.jpg)] h-[calc(100vh-64px)]  md:h-[calc(100vh-64px)] bg-cover bg-no-repeat  grid place-items-center md:pt-[-10px] '>
            <div className="text-white text-2xl text-center bg-black opacity-60  rounded-xl p-10">

                <h1 className='font-medium text-[30px] md:text-[50px] mb-4'>Welcome to Pokemon App</h1>

                <p className='text-[20px] md:text-[24px]'>
                    Here you can search your favourite pokemons
                </p>
            </div>
        </div>
    )
}

export default Hero