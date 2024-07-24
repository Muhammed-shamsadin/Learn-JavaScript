
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        
        {/* the first component */}
        <Navbar />   

        {/* the second component */}
        <div className="content">  
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/create">
                  <Create /> 
              </Route>
              <Route path="/blogs/:id">
                  <BlogDetails /> 
              </Route>
              {/* Not-Found should be at the botteom of the other Routes */}
              <Route path="*">
                  <NotFound /> 
              </Route>
          </Switch>
        </div>

      </div>

    </Router>
  );
}

export default App;



{/* 
  import logo from './logo.svg';
  
  
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </header> 
*/}