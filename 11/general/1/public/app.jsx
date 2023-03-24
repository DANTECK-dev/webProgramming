
        const Router = ReactRouterDOM.BrowserRouter;
        const Route = ReactRouterDOM.Route;
        const Routes = ReactRouterDOM.Routes;
        const Link = ReactRouterDOM.Link;
        
        const headerStyle={
        backgroundColor: "red",
        textAlign: "center",
        color: "yellow",
        padding: "10px"
        }
        const buttonStyle={
        backgroundColor: "yellow",
        margin: "10px"
        }
        const navStyle={
        textAlign: "center",
        backgroundColor: "orange",
        padding: "10px"
        }
        const bodyStyle={
        textAlign: "center",
        backgroundColor: "yellow",
        padding: "30px"
        }
        
        function Main(){
            return <h2>Main</h2>;
        }
        function About(){
            return <h2 style={headerStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minima, mollitia at eligendi sequi pariatur nostrum doloremque dolores tempore necessitatibus modi dolorem non, a numquam quod praesentium ipsa deserunt exercitationem!</h2>;
        }
        function NotFound(){
            return <h2>Ресурсы не найдены</h2>;
        }
        
        class Phone extends React.Component{
            render(){ return <h3>Смартфоны</h3>; }
           }
           class Tablet extends React.Component{
            render(){ return <h3>Планшеты</h3>; }
           }
           class Products extends React.Component{
            render(){
            return <div>
            <h2>Products</h2>
            <Routes>
                <Route path="/phones" element={<Phone />} />
                <Route path="/tablets" element ={<Tablet />} />
            </Routes>
            </div>;
            }
           }
           
           class Nav extends React.Component{
            render(){
             return <nav style={navStyle}>
                <button style={buttonStyle}>
                    <Link to="/index">main</Link>
                </button>
                <button style={buttonStyle}>
                    <Link to="/about">about</Link>
                </button>
                <button style={buttonStyle}>
                    <Link to="/products">products</Link>
                </button>
                <button style={buttonStyle}>
                    <Link to="/products/phones">phones</Link>
                </button>
                <button style={buttonStyle}>
                    <Link to="/products/tablets">tablets</Link>
                </button>
             </nav>;
            }
            }
        
        ReactDOM.render(
            <div>
                 <header style={headerStyle}>
                    <h1>Лабораторная работа</h1>
                </header>
               <Router>
                    <div>
                    <Nav />
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/index" element={<Main />} />
                            <Route path="/about" element={ <About />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/products/*" element={<Products />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </Router> 
            </div>
            ,
            document.getElementById("app")
           )
        
    
            