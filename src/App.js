import {useState} from "react";

import {Users} from "./components/users/Users";
import {Posts} from "./components/posts/Posts";
import {postService} from "./services/post.service";
import {UserForm} from "./components/userForm/UserForm";

function App() {

    const [posts,setPosts]=useState([])

    const getPosts = (userId) => {
        postService.getById(userId).then(({data})=>setPosts(data))
    }

    return (
        <div>
            <Users getPosts={getPosts}/>
            <Posts posts={posts}/>


        </div>
    );
}

export default App;
