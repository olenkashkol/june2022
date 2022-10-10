import React from 'react';
import {Link} from "react-router-dom";

const ToDo = ({todo}) => {
    const {id,title}=todo
    return (
        <div>
            {id}--<Link to={`${id}`} state={{...todo}}>{title}</Link>
            <hr/>
        </div>
    );
};

export {ToDo};