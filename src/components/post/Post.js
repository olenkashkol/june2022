const Post = ({post:{title,id}}) => {
    return (
        <div>
            {id}--{title}
        </div>
    );
};

export {Post};