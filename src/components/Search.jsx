"use client"

import React, { useEffect, useRef, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { useRecoilState } from 'recoil'
import { searchState } from '@/atoms/SearchAtom'
import Pokedex from 'pokedex-promise-v2'
import Card from './Card'

const Search = () => {

    const searchInput = useRef(null)
    const pokedex = new Pokedex();

    const [isPopupOpen, setIsPopupOpen] = useRecoilState(searchState)
    const [allpokemonList, setallPokemonList] = useState([])
    const [searchedPokemons, setSearchedPokemons] = useState([])


    let pokemonList = []


    const togglePopup = () => {
        console.log('search close')
        document.body.style.overflowY = "visible"
        setIsPopupOpen(false)
    }


    useEffect(() => {

        pokedex.getPokemonsList()
            .then((res) => {

                if (pokemonList.length === 0) {
                    console.log(res)
                    res.results.forEach((p) => pokemonList.push(p.name))

                    console.log('all: ', pokemonList)
                    setallPokemonList(pokemonList)
                }
            })
            .catch((err) => console.log(err))
    }, [setSearchedPokemons])



    const searchPokemon = (target) => {

        if (target.trim().length === 0) {

            setSearchedPokemons([])
            return;
        }

        const matchedPokemons = allpokemonList.filter((p) => p.toLowerCase().includes(target))

        console.log('matched: ', matchedPokemons)

        if (matchedPokemons.length > 0) {

            pokedex.getPokemonByName(matchedPokemons)
                .then((res) => {

                    if (matchedPokemons.length < 30) {

                        setSearchedPokemons(res)
                    }

                    console.log('loading: ', res)
                })
                .catch((err) => console.log(err))
        }
    }



    let timeOutId = null;

    const onChange = (e) => {

        if (timeOutId) {
            clearTimeout(timeOutId)
            timeOutId = null
            return;
        }

        const target = e.target.value.toLowerCase()
        console.log(target)

        timeOutId = setTimeout(() => {

            searchPokemon(target)
            timeOutId = null
        }, 500)
    }




    return (
        <div className='bg-[#ececec] w-screen h-screen fixed top-0 left-0 z-10 overflow-auto p-4'>

            <div className="container">
                <div className="flex justify-between items-center py-8 border-b-[2px] border-black">

                    <h2 className='text-gray-800 text-4xl px-4 font-bold'>Pokemon</h2>

                    <input
                        type="text"
                        className='bg-white py-2 px-4 md:w-[400px] w-[180px] rounded-full outline-none border-none'
                        onChange={(e) => onChange(e)}
                        ref={searchInput}
                        placeholder='Search a pokemon'
                    />

                    <IoMdClose className='text-[36px]' onClick={togglePopup} />

                </div>


                <h2 className='py-8 text-2xl'>Search Results</h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>


                    {

                        searchedPokemons.length ? (

                            searchedPokemons.map((pokemonData) => (

                                < Card
                                    key={pokemonData?.name}
                                    img={pokemonData?.sprites?.front_default}
                                    name={pokemonData?.name} types={pokemonData?.types}
                                    onClick={togglePopup}
                                />
                            ))

                        ) : (
                            <p>Not found</p>
                        )
                    }




                    {/* {searchedPokemons?.map((p) => (

                        <Card
                            key={p?.name}
                            img={p?.sprites?.front_default}
                            name={p?.name}
                            types={p?.types}
                            onClick={togglePopup}
                        />

                    ))} */}

                </div>

            </div>
        </div>
    )
}

export default Search