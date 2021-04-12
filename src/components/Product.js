import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';
import styled from 'styled-components';


export default class Product extends Component {

    render() {
        const {id, title, img, price, inBag} = this.props.product;
        return (
            <ProductWrapper>
                <div className="card cardp"> 
                   <ProductConsumer>
                       {(value) => (
                           <div className="img-container" 
                           onClick={() => 
                                value.handleDetail(id)
                           }>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top prod-img" />
                        </Link>
                        <button className="cart-btn" disabled={inBag ? true : false} 
                          onClick={() => {
                            value.addToBag(id);
                            value.openModal(id);
                        }}>
                        {inBag?(<p className="text-capitalize mb-0" disabled>
                                {" "}
                                added to bag</p>):(<p><i className="fas fa-cart-plus" />add to bag</p>
                            )}
                        </button>
                    </div> 
                       )}
                    
                    </ProductConsumer>    
                        {/* card footer */}
                    <div className="card-footer product-details">
                        <div className="name-like">
                        <p className="mb-0">
                                {title}
                        </p>
                        <img className="like" src="images/icon/like.png" alt="like" />
                        </div>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>   
                </div>       

            </ProductWrapper>
        );
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inBag: PropTypes.bool
    }).isRequired
};

const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;
}
.name-like {
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-right:0.2rem;
}
.like {
    width:1rem;
    height:1rem;
    color: var(--mainWhite);
}
p {
    text-align: left;
}
.cardp {
    padding:5px;
    margin:2rem; 
    width: 25em;
    @media (max-width: 768px) {
        padding:0.2rem;
        margin: 0.5rem auto;
        width: 180px;
    }
}
.product-details {
    display:flex;
    flex-direction: column;
    align-items: start;
    padding:0;
      @media (max-width: 768px) {
        display:flex;
        flex-direction: column;
        align-items: start;
        padding:0;
   }
}
.product-details p, .product-details h5 {
    margin:0;
    padding:0.2rem;
          @media (max-width: 768px) {
        margin:0;
        padding:0.2rem;
   }
}

.card-footer {
    background: var(--mainWhite);
    border-top: transparent;
    border: 2px solid var(--mainWhite);
    transition: all 1s linear;
}
&:hover{
    .card{
        border:0.04rem sold rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
        background: rgba(247, 247, 247);
    }
}
.img-container {
    position: relative;
    overflow: hidden;
    border: 4px solid var(--mainWhite);
}
.card-img-top {
    transition: all 1s linear;  
}
.img-container:hover .card-img-top {
    transform: scale(1.2);
}
.cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    margin:0.2rem;
    background: var(--mainWhite);
    border:1px solid var(--lightBlue);
    color: var(--lightBlue);
    font-size: 1rem;
    border-radius: 0.5rem 0 0 0;
}
.cart-btn p {
    margin:0;
}
.cart-btn:hover {
    background: var(--mainBlue);
    color: var(--mainWhite);
    cursor: pointer;
}
`;




{/* <div>
{value => (
    <div className="img-container p-5" 
    onClick={() => 
    value.handleDetail(id) 
    }>
    <Link to="/details">
        <img src={img} alt="product" className="card-img-top" width="250" height="300" />
    </Link>
    <button className="cart-btn" disabled={inBag ? true : false} 
    onClick={() => {
        value.addToCart(id);
        value.openModal(id); 
    }}>
    {inBag?(<p className="text-capitalize mb-0" disabled>
        {" "}
        in inBag</p>):(<i className="fas fa-cart-plus" />
    )}
    </button>
</div> */}