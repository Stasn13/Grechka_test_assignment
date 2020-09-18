import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from '../../Redux/actions/posts';
import {RootState} from "../../Redux/reducers";
import styled from 'styled-components';
import {Post} from '../../Redux/constants/postById';
import {formatDate} from "../../utils/formatDate";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Loader from "../../components/Loader";

const NewsFeedWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    grid-gap: 20px;
`;

const PostCard = styled.article`
    box-shadow: rgba(0, 0, 0, 0.2) 0px 9px 12px -2px;
    border-radius: 4px;
    padding: 20px 20px 35px;
    transition: all 0.3s ease 0s;
    display: flex;
    justify-content: space-between;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.2) 0px 9px 12px 8px;
        transform: scale(1.01);  
    }
`;

const Image = styled.img`
    width: 100%;
    height: 175px;
    object-fit: cover;
`;

const Heading = styled.h1`
    width: 100%;
    text-align: center;
    text-transform: uppercase;
`;

const TitleWrapper = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    a{
        color: black;
        text-transform: uppercase;
        font-weight: 700;
    }
    p{
        font-size: 12px;
        color: rgba(0, 0, 0, 0.67);
        &:hover 
    }
`;

const NewsFeed = (props: any) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [getPosts]);
    const {data: posts, loader} = useSelector((state: RootState) => {
        return {...state.posts}
    });
    const [moreCount, setMoreCounter] = useState(5);

    if (loader) {
        return (
            <Loader size={60}/>
        )
    }
    return (
        <>
            <Heading>Know what the world is going on:</Heading>
            <NewsFeedWrapper>
                {posts.filter((item: Post, index: number) => index < moreCount)
                    .map((post: Post, index: number) => {
                            return (
                                <PostCard key={index}>
                                    <div>
                                        <Image src={post.image}/>
                                    </div>
                                    <TitleWrapper>
                                        <Link to={`/news/${post.id}`}>
                                            {post.title}
                                        </Link>
                                        <p>
                                            {formatDate(post.datetime)}
                                        </p>
                                    </TitleWrapper>
                                </PostCard>
                            )
                        }
                    )}
                {moreCount < posts.length &&
                <Button variant='outlined' color='primary' onClick={() => setMoreCounter(moreCount + 6)}>
                    Show More
                </Button>}
            </NewsFeedWrapper>
        </>
    )
}

export default NewsFeed;