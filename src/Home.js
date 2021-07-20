import { useState, useEffect } from "react";
import BlogList  from './BlogList.js';
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    useEffect(() => {
        fetch('http://localhost:8000/blogssss')
            .then(res => {
                console.log(res);
                if (!res.ok){
                    throw Error(`Couldn't fetch data`);
                }
                return res.json()
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
            })
            .catch((err) => {{
                console.log(err.message);
            }})
    }, []);

    return ( 
        <div className="content">
            {isPending && <div>Loading...</div>}            
            {blogs && <BlogList blogs={blogs}/>}
        </div>
     );
}
 
export default Home;