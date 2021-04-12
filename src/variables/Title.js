import React from 'react'
import styled from 'styled-components';

export default function Title({name, title}) {
    return (
        <TitleWrapper className="row">
            <div className="col-10 mx-auto  text-center text-title">
                <h1 className="text-capitalize font-weight-bold">
                    {name} <strong>{title}</strong>
                </h1>
            </div>
        </TitleWrapper>
    )
}

const TitleWrapper = styled.div`
width: 100%;
 h1 {
     font-size: 3em;
     color: var(--mainDark);
     @media (max-width: 768px) {
        font-size: 1.5em;
        color: var(--mainDark);
    }
 }
`