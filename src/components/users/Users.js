import React, {useEffect, useState} from 'react';

import User from "../user/User";

const Users = () => {

    let [pokemons, setPokemons] = useState([])


    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/ability/?limit=20&offset=20')
            .then((response) => response.json())
            .then(value => {
                setPokemons(value.results)
                let pokemonsList = value.results
                let pokemonUrl = pokemonsList.map(pokemonItem => pokemonItem.url)
                console.log(pokemonUrl);

            })
    }, [])
    return (
        <div>
            {pokemons.map((pokemon, index) => (<User user={pokemon} key={index}/>))}
        </div>
    );
};

export default Users;