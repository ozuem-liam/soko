import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from '../variables/Button';
import styled from 'styled-components';


export default class BottomNavbar extends Component {
    render() {
        return (
<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/store'>
                  <img src="images/icon/home.png" alt="home"/>
                </Link>
                <ul className="navbar">
                    <li className="nav-item ml-5">
                        <Link to="/store" className="nav-link">
                            <ButtonContainer>
                               Store
                            </ButtonContainer>
                        </Link>
                    </li>              
                    <li className="nav-item ml-5">
                        <Link to="/account" className="nav-link">
                           <ButtonContainer>
                              My Account
                            </ButtonContainer>
                        </Link>
                    </li>              
                </ul>

                <Link to="/bag" className="ml-auto">  
                    <img src="images/icon/bag.png" alt="bag" />
                </Link>  
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background:var(--mainWhite);
display:flex;
justify-content:space-around;
padding: 1.5rem;
align-items: center;
.nav-link{
    color:var(--mainBlue)!important;
    font-size:1.3rem;
    text-transform:capitalize;
}
.navbar {
    display:flex;
    list-style:none;
    justify-content:space-around;
    width:40%;
}
img {
    width: 30px;
    height: 30px;
    color:var(--mainBlue)!important;
}

`