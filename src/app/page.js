"use client"

import { searchState } from '@/atoms/SearchAtom'
import Hero from '@/components/Hero'
import { Popular } from '@/components/Popular'
import Search from '@/components/Search'
import { useRecoilState } from 'recoil'

export default function Home() {

  const [isPopupOpen, setIsPopupOpen] = useRecoilState(searchState)


  return (
    <main>
      <Hero />
      <Popular />
      {isPopupOpen && <Search />}
    </main>
  )
}
