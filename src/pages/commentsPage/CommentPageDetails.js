import React from 'react';
import {useLocation} from "react-router-dom";

const CommentPageDetails = () => {

    const {state: comment} = useLocation()

    return (
        <div>
            {comment && <div> {JSON.stringify(comment)} </div>}
        </div>
    );
};

export {CommentPageDetails};