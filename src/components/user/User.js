const User = ({user,getPosts}) => {

    const {id,name,username,age}=user

    return (
        <div>
            <div>{id} - {name}   {username}</div>
            <div>age: {age}</div>
            <button onClick={()=>getPosts(id)}>Get post</button>
        </div>
    );
};

export {User};


