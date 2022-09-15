 import React, {useState} from 'react';
 import User from "../user/User";


const Users = () => {
    // let [users, setUsers] = useState([])
    // let [books, setBooks] = useState([])
    // let [responses,setResponse]=useState([])
let [pokemons,setPokemons]=useState([])

    // fetch('https://rickandmortyapi.com/api/character')
    //     .then((response) => response.json())
    //     .then(value => {
    //         let character = value.results
    //         setUsers(character)
    //     });

    // fetch("https://www.anapioficeandfire.com/api/books?page=1&pageSize=10")
    //     .then((response) => response.json())
    //     .then(value => setBooks(value))

    // fetch('https://reqres.in/api/users?page=2')
    //     .then((response) => response.json())
    //     .then(value => setResponse(value.data))

    fetch('https://pokeapi.co/api/v2/pokemon')
        .then((response) => response.json())
        .then(value => {
            let pokemonsList=value.results
            setPokemons(pokemonsList)
        })

    return (
        <div>
            {/*{users.map(user => (<User user={user} key={user.id}/>))}*/}
            {/*{books.map(book => (<User user={book} key={book.isbn}/>))}*/}
            {/*{responses.map(response=>(<User user={response} key={response.id}/>))}*/}
            {pokemons.map((pokemon,index)=>(<User user={pokemon} key={index}/>))}
        </div>
    );
};

export default Users;