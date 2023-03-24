const Router = ReactRouterDOM.BrowserRouter;
        const Route = ReactRouterDOM.Route;
        const Routes = ReactRouterDOM.Routes;
        const Link = ReactRouterDOM.Link;
      
        ReactDOM.render(
            <Router>
            <div>
            <nav>
                <button><Link to="/index">index</Link></button>
                <button><Link to="/genres">genres</Link></button>
            </nav>
            <Routes>
       
                <Route path="/rock" element={<Rock />} />
                <Route path="/pop" element ={<Pop />} />
                <Route path="/metal" element ={<Metal />} />
    
                <Route path="/index" element={<Index/>} />
                <Route id="getButton" path="/genres" element={<Genres />} />
            </Routes>
            </div>
            </Router>,
            document.getElementById("nav")
           )

