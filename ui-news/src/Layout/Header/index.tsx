import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';

const AppHeader = styled.header`
    background: black;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
    width: 100%;
    padding: 0px 24px;
    box-sizing: border-box;
`;

const Logo = styled.div`
    font-size: 30px;
    margin: 12px 0;
    a{
        color: #fff;
        text-decoration: none;
        text-transform: capitalize;
    }
`;

const Header = (props: any) => {
    return (
        <AppHeader>
            <Logo>
                <Link to='/'>
                    News App
                </Link>
            </Logo>
        </AppHeader>
    )
};

export default Header;
