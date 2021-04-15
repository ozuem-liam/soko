import React, { Component } from 'react'
import Product from './Product';
import Title from '../variables/Title';
import {ProductConsumer} from '../context';
import { storeOwner } from '../data';
import styled from 'styled-components';
// import SearchBar from './SearchBar';

function searchingFor(term) {
    return function(x) {
        return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

export default class Store extends Component {
constructor(props){
    super(props);

      this.state = {
            user: storeOwner,
            term: ''
        }
    this.searchHandler = this.searchHandler.bind(this);
}

searchHandler(event) {
    this.setState({ term: event.target.value })
}

    render() {
        const { storeName, image } = this.state.user;
        return (
            <React.Fragment>
            <StoreWrapper>
                <div>
                    <img src={image} alt="background-store" className="back-img" />
                    <Title name={storeName} title="Store" />
                </div>
                <div className="container">
                     {/* <SearchBar /> */}
                    <form>
                        <input type="text"
                        placeholder="Search for a product..."
                        onChange={this.searchHandler} 
                        value={this.state.term}
                        />
                    </form>
                    <div className="row m-view">
                        <ProductConsumer> 
                            {value => {
                                return value.products.filter(searchingFor(this.state.term)).map(product =>{
                                    return <Product key={product.id} product={product} />
                                })
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </StoreWrapper>
        </React.Fragment>
        )
    }
}

const StoreWrapper = styled.div`
margin-bottom:4rem;
input {
    width: 100%;
    border: 2px solid var(--mainBlue);
    border-radius: 0.5rem;
    height: 2.5rem;
    font-size: 2rem;
    @media (max-width: 768px) {
        width: 100%;
        border: 2px solid var(--mainBlue);
        border-radius: 0.5rem;
        height: 2.5rem;
        font-size: 1.5rem;
    }
}
.back-img {
    position: relative;
    width:100%;
    margin:0;
    border:none;
    padding:0;
    height: 20em;
      @media (max-width: 768px) {
        position: relative;
        width:100%;
        margin:0;
        border:none;
        padding:0;
        height: 10em
    }  
}
.m-view {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-around;
    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
`
