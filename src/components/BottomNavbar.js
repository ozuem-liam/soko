import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


export default class BottomNavbar extends Component {
    render() {
        return (
            <NavWrapper>
                <div className="nav-bar">
                    <Link to='/' className="menu">
                    <img src="images/icon/account.png" alt="home"/><span>Account</span>
                    </Link>
                    <Link to="/" className="menu">  
                        <img src="images/icon/mall.png" alt="mall" /><span>Mall</span>
                    </Link>  
                    <Link to='/' className="menu">
                    <img src="images/icon/home.png" alt="home"/><span>Home</span>
                    </Link>
                    <Link to="/bag" className="menu">  
                        <img src="images/icon/bag.png" alt="bag" /><span>Bag</span>
                    </Link> 
                </div> 
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
.nav-bar {
    display:none;
    @media (max-width: 768px) {
        overflow: hidden;
        display:grid;
        background: var(--White);
        bottom: 0;
        width: 100%;
        position: fixed;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: 0.5rem;
        justify-content: center;
        align-items: center;
    }
    
}
.menu {
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        border: none;
    }
}
img {
    @media (max-width: 768px) {
        width: 25px;
        height: 25px;
        align-self: center;
    }
}
span {
    @media (max-width: 768px) {
        color: var(--mainDark);
        border: none;
        font-size:0.8rem;
    }
}

`