// sfc -> Stateless Functional Component

import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';




const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

 
    // use Effect Dependency 
    // const [name, setName] = useState('mario');
     
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    // useEffect for fetching data
    // useEffect(() => {
    //     console.log('use Effect run');  
    //     console.log(name);
    // }, [name]);                 //  useEffect Dependency where the use Effect is dependt on the name state





    return ( 
        <div className="home">
            { error && <div> {error} </div>}
            { isPending && <div> Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
            
            {/* <button onClick={() => setName('luigi')}> Change name </button>
            <p> { name } </p> */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'moa')} title="Mario's Blogs!"/> */}

        </div>
     );
}
 
export default Home;






// const handleClickAgain = (name, e) => {
//     console.log('wassup' + name. e.target)
// }


// const [name, setName] = useState('argoba');
    // const [age, setAge] = useState(25);


    // const handleClick = (e) => {
    //     setName('Julian');
    //     setAge('45');
    // }

{/* <p> { name } is {age} years old </p>
            <button onClick={handleClick}> Click here </button> */}
{/* <button onClick={(e) => handleClickAgain('bro', e)}> Click me again!</button> */}
