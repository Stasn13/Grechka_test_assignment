import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const NotFoundWrapper = styled.div`
    font-size: 116px;
    font-weight: 900;
    text-align: center;
`;

const SubTitle = styled.h3`
    font-weight: 600;
    text-align: center;
    a{
        text-transform: capitalize;  
        color: #3061f3;  
        text-decoration: none
    }
`;

const NotFound = (props: any) => {
    return (
        <>
            <NotFoundWrapper>
                404
            </NotFoundWrapper>
            <SubTitle>
                Go to <Link to='/'>home page</Link>
            </SubTitle>
        </>
    )
}

export default NotFound;