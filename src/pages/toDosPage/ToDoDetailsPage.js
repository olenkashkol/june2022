import React from 'react';

import {useLocation} from "react-router-dom";

const ToDoDetailsPage = () => {
    const {state: todo} = useLocation()
    return (
        <div>
            {todo && <div> {JSON.stringify(todo)} </div>}
        </div>
    );
};

export {ToDoDetailsPage};