import React from 'react';

const User = (props) => {
     // let {user: {id, name, status, species, gender, image}} = props

    // let {user: {name, authors,numberOfPages}} = props

     let{user:{first_name,last_name,id,email,avatar}}=props

    return (
        <div>
            {/*<h2>{id}--{name}</h2>*/}
            {/*<p>{status}--{species}--{gender}</p>*/}
            {/*<img src={image} alt="rickymorty"/>*/}
            {/*/!*<hr/>*!/*/}

            {/*<h2>{name}</h2>*/}
            {/*<p>{authors}--{numberOfPages}</p>*/}

            <h2>{id}--{first_name}--{last_name}</h2>
            <p>{email}</p>
            <img src={avatar} alt={last_name}/>

        </div>
    );
};

export default User;