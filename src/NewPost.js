const NewPost = ({
    handleSubmit,
    postTitle,
    setPostTitle,
    postBody,
    setPostBody
}) => {
    return (
        <main className="NewPost">
            <h1>New Post</h1>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title:</label>
                <input type="text" name="postTitle" id="postTitle" required value={postTitle} onChange={(e) => setPostTitle(e.target.value)} />
                <label htmlFor="postBody">Body:</label>
                <textarea name="postBody" id="postBody" required value={postBody} onChange={(e) => setPostBody(e.target.value)} />
            </form>
        </main>
    )
}

export default NewPost
