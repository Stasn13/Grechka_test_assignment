import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPostById} from '../../Redux/actions/postById';
import {getUserById} from "../../Redux/actions/userById";
import {Link} from 'react-router-dom';
import {RootState} from "../../Redux/reducers";
import Comments from '../../components/Comments';
import CircularProgress from '@material-ui/core/CircularProgress'
import styled from 'styled-components';
import {formatDate} from "../../utils/formatDate";
import {formatTextHtml} from "../../utils/formatTextHtml";
import Loader from "../../components/Loader";

const Heading = styled.h1`
    width: 100%;
    /*text-align: center;*/
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 10px
`;
const SubHeading = styled.h4`
    width: 100%;
    color: rgba(0, 0, 0, 0.57);
    font-weight: 200;
    margin-top: 0;
    a{
        text-transform: capitalize;  
        color: #3061f3;  
        text-decoration: none
    }
`;

const Image = styled.img`
    width: 100%;
    height: 450px;
    object-fit: cover;
    display: block;
    margin-bottom: 2em;
`;

const PostText = styled.div`
    width: 100%;
    padding-bottom: 2em;
    border-bottom: 1px solid black;
`;

const NewsOverview = (props: any) => {
    const postId = props.match.params.id;
    const {data: post, loader} = useSelector((state: RootState) => {
        return {...state.postById}
    });
    const {data: user, loader: userLoader} = useSelector((state: RootState) => {
        return {...state.userById}
    });
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPostById(postId));
    }, [postId]);
    useEffect(() => {
        typeof post.authorId === 'number' && dispatch(getUserById(post.authorId));
    }, [post]);

    if (loader && userLoader) {
        return (
            <Loader size={60}/>
        )
    }
    return (
        <>
            <Heading>
                {post.title}
            </Heading>
            <SubHeading>
                by:
                <Link to={`/profile/${user.id}`}>
                    {user.firstName} {user.lastName}
                </Link>
                , News App
                <div>{formatDate(post.datetime)}</div>
            </SubHeading>
            <Image src={post.image}/>
            <PostText>
                {formatTextHtml(post.description)}
            </PostText>
            {<Comments post={post} loader={loader && userLoader}/>}
        </>
    )
}

export default NewsOverview;