import React from 'react';

const Flight = ({flight: {mission_name, launch_year, links: {mission_patch_small}}}) => {

    return (
        <div>
            {<div>{mission_name}--{launch_year}</div>}
            <img src={mission_patch_small} alt={mission_name}/>
            <hr/>

        </div>
    );
};

export {Flight};