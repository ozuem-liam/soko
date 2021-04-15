import React from 'react';
import styled from 'styled-components';

export default function EmptyBag() {
    return (
        <EmptyWrapper>
            <div className="container">
                <img src="images/icon/empty.jpg" alt="empty bag" />
                <div className="col-10 mx-auto text-center text-title">
                    <h1>Your bag is currently empty</h1>
                </div>
            </div>
        </EmptyWrapper>
    )
}

const EmptyWrapper = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
img {
    width: 8rem;
    height: 8rem;
}
`