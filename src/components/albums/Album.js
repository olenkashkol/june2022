import React from 'react';
import {Link} from "react-router-dom";

const Album = ({album}) => {
    const {id,title}=album
    return (
        <div>
            {id}- <Link to={`${id}`} state={{...album}}>{title}</Link>

        </div>
    );
};

export {Album};