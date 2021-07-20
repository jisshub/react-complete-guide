import { useState, useEffect } from "react";
import BlogList  from './BlogList.js';
const Home = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setBlogs(data)
            })
    }, []);

    return ( 
        <div className="content">            
            {blogs && <BlogList blogs={blogs}/>}
        </div>
     );
}
 
export default Home;