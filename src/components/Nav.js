import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {   
    return (
    <div class="topnav">
        <Link id="home-link" to="/">Home</Link>
        <Link id="team-link" to="/teamqoq">TeamQoQ</Link>
        <Link id="hackathon-link" to="/hackathon2020">Hackathon 2020</Link>
    </div>      
    );
}

export default Nav;