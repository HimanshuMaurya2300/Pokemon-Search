import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Card = ({ img, name, types, onClick }) => {
    return (
        <Link href={`/${name}`} className='bg-slate-400 shadow-2xl cursor-pointer rounded-lg' onClick={onClick}>

            <div className='flex justify-center py-6 px-6'>
                <Image
                    src={img}
                    width={400}
                    height={400}
                    quality={100}
                    alt={name}
                    className='bg-slate-700'
                />
            </div>

            <div className='p-8'>
                <h2 className='capitalize text-3xl font-extrabold'>{name}</h2>

                <div className='flex items-center gap-4 mt-8'>
                    <h2 className='text-lg font-extrabold'>Type:</h2>

                    {
                        types.map((t) => (
                            <span key={t.type.name} className='type capitalize'>
                                {t.type.name}
                            </span>
                        ))
                    }
                </div>
            </div>

        </Link>
    )
}

export default Card