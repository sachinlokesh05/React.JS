import React from 'react';


//Stateless functional components
const Navbar = ({totalCounters}) => {
    console.log(" Navbar - Rendered ");
    return ( 
        <nav className="navbar   navbar-light bg-light">
                <a className="navbar-brand" href="/#"> 
                NavBar{" "}
                    <span className="badge badge-pill badge-secondary">
                        {totalCounters}
                    </span> 
                </a>
            </nav>
     );
};
 
export default Navbar;