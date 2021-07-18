const BlogList = ({blogs, handleDelete}) => {
    console.log(blogs);
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.body}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
            ))} 
        </div>
     );
}
 
export default BlogList;