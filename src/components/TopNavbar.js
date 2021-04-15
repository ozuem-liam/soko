import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


export default class TopNavbar extends Component {
    render() {
        return (
        <NavWrapper>
                <div className="nav-bar">
                    <div className="topnav1">
                        <Link to="/" className="nav-link">
                        <h3>Soko</h3>    
                        </Link>
                    </div>
                    <div className="topnav2">
                        <Link to="/bag" className="ml-auto">  
                            <img src="images/icon/bag.png" alt="bag" />
                        </Link> 
                        <Link to='/'>
                            <img src="images/icon/home.png" alt="home"/>
                        </Link>
                    </div>
                </div>
        </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
.nav-bar {
    background:var(--mainWhite);
    display:flex;
    justify-content:space-between;
    padding: 0;
    margin:0;
    align-items: center;
    @media (max-width: 768px) {
        display:flex;
        justify-content:center;
        align-items:center;
        height:4rem;
    }
}
h3 {
  font-size: 2rem;
}
.topnav1 {
    display: flex;
    padding: 1rem;
    margin: 0;
    @media (max-width: 768px) {
        display: flex;
    }
}
.topnav2 {
    display: flex;
    padding: 0.5rem;
    margin: 0;
    @media (max-width: 768px) {
        display:none;
    }
}
img {
    width: 30px;
    height: 30px;
    margin:0.3rem;
    color:var(--mainBlue)!important;
}
`