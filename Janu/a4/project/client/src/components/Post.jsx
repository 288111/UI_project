const Post = ({data}) => {
    return(
        <>
        <h5>{data.title}</h5>
        <p>{data.body}</p>
        </>
    );
}

export default Post;