import React from 'react';
import styled from 'styled-components';


export default function BagItem({item,value}) {
    const{id,title,img,price,total,count} = item;
    const {increment,decrement,removeItem} = value;
    return (
        <BagWrapper className="row my-2 text-capitalize m-view">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} className="bag-img img-fluid" alt="product" />
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product : </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price : </span>
                {price}
            </div>

            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => decrement(id)}>-</span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={() => increment(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong> item total : $ {total}</strong>
            </div>

             
        </BagWrapper>
    )
}

const BagWrapper = styled.div`
.m-view {
    @media (max-width: 768px) {
        display:flex;
        align-content: flex-start;
    }
}

.bag-img {
    width:5rem;
    height:5rem;
    @media (max-width: 768px) {
        width:100%;
        height:15rem;
        margin:0;
    }
}
`
