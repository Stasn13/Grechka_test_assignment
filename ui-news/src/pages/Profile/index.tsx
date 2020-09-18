import React, {useEffect} from 'react';
import {getUserById} from "../../Redux/actions/userById";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/reducers";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from 'styled-components';
import Loader from "../../components/Loader";

const Title = styled.h1`
    font-weight: 700
`;

const Profile = (props: any) => {
    const authorId = props.match.params.id;
    const dispatch = useDispatch();
    const {data: user, loader} = useSelector((state: RootState) => {
        return {...state.userById}
    });
    useEffect(() => {
        dispatch(getUserById(authorId));
    }, [authorId]);

    if (loader) {
        return (
            <Loader size={60}/>
        )
    }
    return(
        <div>
            <Title>Profile</Title>
            {user.firstName} {user.lastName}
        </div>
    )
}

export default Profile;