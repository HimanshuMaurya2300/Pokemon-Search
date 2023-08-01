import { searchState } from '@/atoms/SearchAtom'
import Link from 'next/link'
import React from 'react'
import { useRecoilState } from 'recoil'

const Navbar = () => {

    const [isPopupOpen, setIsPopupOpen] = useRecoilState(searchState)


    // const togglePopup = () => {
    //     document.body.style.overflowY = 'hidden'
    //     setIsPopupOpen(true)
    //     console.log('search opened')
    // }

    const togglePopup = () => {

        isPopupOpen ? setIsPopupOpen(false) : setIsPopupOpen(true)
    }



    return (
        <div>
            <div className='bg-black text-white px-4 py-4 sticky top-0'>

                <div className="container">
                    <div className="flex justify-between items-center">
                        <Link href='/'>
                            <h2 className='text-white text-4xl'>Pokemon</h2>
                        </Link>

                        <div className='bg-white py-2 px-4 rounded-xl text-gray-500 md:w-[300px] cursor-pointer' onClick={togglePopup}>
                            Search for any pokemon
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar