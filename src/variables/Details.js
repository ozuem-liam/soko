import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import styled from 'styled-components';

export default class Details extends Component {
    render() {
        return (
            <DetailWrapper>
            <ProductConsumer>
                {value => {
                  const {id,img,info,price,title,inBag} = 
                  value.detailProduct;
                  return (
                      <div className="container py-5">
                          {/* title */}
                                <div className="row">
                                     <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                         <h1>{title}</h1>
                                     </div>
                                </div>
                          {/* end title */}
                          {/* Product Info */}
                          <div className="row">
                              <div className="col-10 col-md-6 my-3">
                                  <img src={img} className="img-fluid" alt="product" />
                              </div>

                            {/* Product text */}
                              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize m-view">
                                    <h2>{title}</h2>
                                    <h4 className="text-blue">
                                        <strong>
                                            <span>$</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className="text-muted lead">{info}</p>
                              </div>
                              <div>
                                  {/* buttons */}
                                        <Link to="/menu">
                                            <ButtonContainer>
                                                back to menu
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart disabled={inBag?true:false}
                                        onClick={() => {
                                            value.addToBag(id);
                                            value.openModal(id);
                                        }}>
                                            {inBag ? "inBag" : "add to bag"}
                                        </ButtonContainer>
                                    </div>
                          </div>
                          {/* end product info */}

                      </div>
                  )
                }}
            </ProductConsumer>
            </DetailWrapper>
        )
    }
}

const DetailWrapper = styled.div`
img {
    width:25rem;
    height:25rem;
}
.m-view {
    margin:auto;
    text-align: left;
    @media (max-width: 768px) {
        text-align: left;
        border: var(--White);
        background: var(--White);
        margin:0;
        width:100vw;
        margin: 0;
        box-shadow: 1px 1px 1px 1px var(--White);
    }
}
`