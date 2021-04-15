import React, { Component } from 'react'
import Title from '../variables/Title';
import BagColumns from './BagColumns';
import EmptyBag from './EmptyBag';
import {ProductConsumer} from '../context';
import BagList from './BagList';
import BagTotals from './BagTotals';
import styled from 'styled-components';

export default class Bag extends Component {
    render() {
        return (
            <BagWrapper>
                <div className="bag">
                <ProductConsumer>
                    {value =>{
                        const {bag} = value;
                        if(bag.length>0){
                            return (
                                <React.Fragment>
                                    <Title name="your" title="bag" />
                                    <BagColumns />
                                    <BagList value={value}/>
                                    <BagTotals value={value} history={this.props.history} />
                                </React.Fragment>    
                            );
                        } else {
                            return <EmptyBag />
                        }
                    }}
                </ProductConsumer>
                </div>
            </BagWrapper>
        )
    }
}


const BagWrapper = styled.div`
.bag {
    margin-bottom: 10rem;
}

`