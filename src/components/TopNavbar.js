import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


export default class TopNavbar extends Component {
    render() {
        return (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 nav-bar">
                <div className="topnav1">
                    <Link to="/bag" className="ml-auto">  
                        <img src="images/icon/bag.png" alt="bag" />
                    </Link> 
                    <Link to='/account'>
                        <img src="images/icon/home.png" alt="home"/>
                    </Link>
                </div>
                <div className="topnav2">
                    <Link to="/store" className="nav-link">
                        Store    
                    </Link>
                    <Link to="/" className="nav-link">
                        Bar
                    </Link>
                </div>
        </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background:var(--mainWhite);
display:flex;
justify-content:space-between;
padding: 0;
margin:0;
align-items: center;
.nav-link{
    color:var(--mainBlue)!important;
    font-size:1.3rem;
    text-transform:capitalize;
}
img {
    width: 30px;
    height: 30px;
    margin:0.3rem;
    color:var(--mainBlue)!important;
}

.topnav1 {
    display: flex;
    padding: 1rem;
    margin: 0;
}
.topnav2 {
    display: flex;
    padding: 0.5rem;
    margin: 0;
}
`