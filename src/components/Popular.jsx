"use client"

import React, { useEffect, useState } from 'react'
import Card from './Card'
import Pokedex from 'pokedex-promise-v2'

export const Popular = () => {

    const [popularPokemon, setPopularPokemon] = useState([])

    const pokedex = new Pokedex()

    useEffect(() => {

        pokedex.getPokemonByName(['gengar', 'charmander', 'squirtle', 'pikachu']) // with Promise
            .then((response) => {
                setPopularPokemon(response)
                console.log(response);
            })
            .catch((error) => {
                console.log('There was an ERROR: ', error);
            });

    }, [setPopularPokemon])


    return (
        <div className='py-8 pb-16 px-4'>
            <div className="container">
                <h1 className="py-4 text-4xl font-extrabold underline">
                    Popular Pokemons
                </h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-[400px]  md:w-[100%] mx-auto'>

                    {popularPokemon.map((p) => <Card key={p.name} img={p.sprites.front_default} name={p.name} types={p.types} />)}

                </div>
            </div>
        </div>
    )
}
