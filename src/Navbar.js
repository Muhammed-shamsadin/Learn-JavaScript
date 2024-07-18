const Navbar = () => {

    // Template got returned
    return ( 
        <nav className="navbar">

            <h1> The Blog </h1>

            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: 'white',
                    backgroundColor: 'rgb(250, 40, 75)',
                    borderRadius: '8px'
                }}>New Blog</a>
            </div>

        </nav>
     );
}
 
export default Navbar;