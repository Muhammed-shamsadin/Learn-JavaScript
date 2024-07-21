// sfc -> Stateless Functional Component

import { useState } from 'react';
import BlogList from './BlogList';





const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'moa', id: 1},
        { title: 'Welcome Ceremony', body: 'lorem ipsum...', author: 'yoa', id: 2},
        { title: 'Web devion', body: 'lorem ipsum...', author: 'moa', id: 3},
    ]);
    

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'moa')} title="Mario's Blogs!"/>

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
