import { useState, useEffect } from "react";
import BlogList  from './BlogList.js';
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum..', author: 'jiss', id: 1},
        {title: 'welcome party', body: 'lorem ipsum..', author: 'rehman', id: 2},
        {title: 'react dev tools', body: 'lorem ipsum..', author: 'ajith', id: 3}
    ])
    const [name, setName] = useState('mario');
    const handleDelete = (blogId) => {
        const newBlogs = blogs.filter(blog => blog.id !== blogId);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect executed');
        console.log(name);
    }, [name]);

    return ( 
        <div className="content">            
            <BlogList blogs={blogs} handleDelete = {handleDelete} />
            <button onClick={()=>{setName('shawn')}}>Change Name</button>
        </div>
     );
}
 
export default Home;