import React, {useEffect, useState} from 'react';
import {allService} from "../../services/all.service";
import {Comment} from "./Comment";

const Comments = () => {
    const [comments,setComments]=useState([])
    useEffect(()=>{
        allService.getCommentsAll().then(({data})=>setComments(data))
    },[])
    return (
        <div>
            {comments.map(comment=>(<Comment key={comment.id} comment={comment}/>))}
        </div>
    );
};

export {Comments};