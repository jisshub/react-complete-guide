import BlogList  from './BlogList.js';
import useFetch from "./useFetch";
const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="content">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}            
            {blogs && <BlogList blogs={blogs}/>}
        </div>
     );
}
 
export default Home;