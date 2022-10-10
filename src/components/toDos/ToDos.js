import React from 'react';
import {useState, useEffect} from "react";

import {ToDo} from "./ToDo";
import {allService} from "../../services/all.service";

const ToDos = () => {
   const [todos,setTodos]=useState([])

    useEffect(()=>{
        allService.getToDosAll().then(({data})=>setTodos(data))
    },[])

    return (
        <div>
            {todos.map(todo=><ToDo key={todo.id} todo={todo}/>)}

        </div>
    );
};

export {ToDos};