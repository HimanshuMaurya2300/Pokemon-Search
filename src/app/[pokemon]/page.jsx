"use client"

import React, { useEffect, useState } from 'react'
import Pokedex from 'pokedex-promise-v2'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { searchState } from '@/atoms/SearchAtom'
import Search from '@/components/Search'



const Pokemon = () => {

    const params = useParams()

    const pokedex = new Pokedex()
    const [pokemon, setPokemon] = useState([]);

    const [isPopupOpen, setIsPopupOpen] = useRecoilState(searchState)


    useEffect(() => {

        const name = params.pokemon
        console.log(name)


        pokedex.getPokemonByName(name)
            .then((res) => {
                setPokemon(res)
                console.log(res)
            })
            .catch((err) => console.log(err))

    }, [setPokemon])




    const totalMoves = 3;

    return (
        <div className='container min-h-screen grid place-items-center py-6 my-4'>

            <div className='w-[600px] mx-auto p-10  bg-slate-400 shadow-2xl cursor-pointer rounded-lg'>

                {console.log(pokemon.name)}
                <Image
                    className='bg-slate-700 mx-auto'
                    src={pokemon.sprites?.front_default}
                    width={500}
                    height={500}
                    alt={pokemon.name}
                />

                <h1 className='text-center capitalize text-3xl pt-2 pb-4 font-extrabold'>
                    {pokemon.name}
                </h1>

                <div className='flex flex-col gap-6 mt-8'>

                    <div className='flex items-center gap-4'>

                        <h2 className='text-lg font-extrabold'>Type:</h2>

                        {pokemon.types?.map((t) => (

                            <span key={t.type.name} className='type' >
                                {t.type.name}
                            </span>
                        ))}

                    </div>

                    <div className='flex items-center gap-4'>

                        <h2 className='text-lg font-extrabold'>Abilities:</h2>

                        {pokemon.abilities?.map((t) => (

                            <span key={t.ability.name} className='ability'>
                                {t.ability.name}
                            </span>
                        ))}

                    </div>



                    <div className='flex items-center gap-4'>
                        <h2 className='text-lg font-extrabold'>Weight:</h2>
                        <div className='bg-yellow-200 py-[3px] px-2 rounded-lg'>
                            {pokemon.weight} pounds
                        </div>
                    </div>


                    <div className='flex items-center gap-4'>
                        <h2 className='text-lg font-extrabold'>Height: </h2>
                        <div className='bg-purple-300  py-[3px] px-2 rounded-lg'>
                            {pokemon.height} feets
                        </div>
                    </div>


                    <div className='flex items-center gap-4'>
                        <h2 className='text-lg font-extrabold'>Level: </h2>
                        <div className='bg-green-500  py-[3px] px-2 rounded-lg'>
                            {pokemon.base_experience}
                        </div>
                    </div>



                    <div className='flex items-center gap-4'>

                        <h2 className='text-lg font-extrabold'>Moves:</h2>

                        {
                            pokemon.moves?.map((m, index) => {

                                if (index < totalMoves) {

                                    return (
                                        <div className='flex items' key={m.move.name}>
                                            <div>
                                                {m.move.name}
                                            </div>
                                        </div>
                                    )
                                }

                            })
                        }

                    </div>

                </div>
            </div>


            {isPopupOpen && <Search />}

        </div>
    )
}

export default Pokemon