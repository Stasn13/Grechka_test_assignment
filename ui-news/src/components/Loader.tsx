import React from 'react';
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

interface LoaderProps {
    size: number
}

const LoaderWrapper = styled.div`
        position: absolute;
        top: 45%;
        left: 45%;  
`;

const Loader = (props: LoaderProps) => {
    return (
        <LoaderWrapper>
            <CircularProgress size={props.size}/>
        </LoaderWrapper>
    )
}

export default Loader;