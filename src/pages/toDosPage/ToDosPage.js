import React from 'react';
import {Outlet} from "react-router-dom";
import {ToDos} from "../../components";

const ToDosPage = () => {
    return (
        <div>
                <Outlet/>
            <div>
               <ToDos/>
            </div>

        </div>
    );
};

export  {ToDosPage};