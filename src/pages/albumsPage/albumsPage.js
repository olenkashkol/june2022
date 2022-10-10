import React from 'react';
import {Outlet} from "react-router-dom";

import {Albums} from "../../components";

const AlbumsPage = () => {
    return (
        <div>
            <Outlet/>
            <div>
                <Albums/>
            </div>
        </div>
    );
};

export {AlbumsPage};