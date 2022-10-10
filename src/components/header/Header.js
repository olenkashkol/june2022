import React from 'react';
import {Link} from "react-router-dom";

import css from "./header.module.css"

const Header = () => {
    return (
        <div className={css.header}>
            <Link to={'/todos'}>All todos page</Link>
            <Link to={'/albums'}>All albums page</Link>
            <Link to={'/comments'}>All comments page</Link>
        </div>
    );
};

export {Header};