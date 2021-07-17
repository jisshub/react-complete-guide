import { useState } from "react";
import BlogList  from './BlogList.js';
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum..', author: 'jiss', id: 1},
        {title: 'welcome party', body: 'lorem ipsum..', author: 'rehman', id: 2},
        {title: 'react dev tools', body: 'lorem ipsum..', author: 'ajith', id: 3}
    ])
    return ( 
        <BlogList blogs={blogs}/>
     );
}
 
export default Home;