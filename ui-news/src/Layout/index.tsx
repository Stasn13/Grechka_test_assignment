import React from 'react';
import Routes from '../pages';
import Header from './Header';
import styled from 'styled-components';

const AppWrapper = styled.div`
    font-family: Helvetica,Arial,sans-serif;
    min-height: 100vh;
    max-width: 100vw;
`;

const Main = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    padding: 25px;
    /*width: 100%;*/
`

const Layout = (props: any) => {
    return (
        <AppWrapper>
            <Header/>
            <Main>
                <Routes/>
            </Main>
        </AppWrapper>
    )
};

export default Layout;
