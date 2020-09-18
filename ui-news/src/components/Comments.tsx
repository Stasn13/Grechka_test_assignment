import React, {Fragment, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {getMultiplyUserById} from '../Redux/actions/userById';
import {getComments} from '../Redux/actions/comments';
import {useDispatch, useSelector} from 'react-redux';
import {Post} from '../Redux/constants/postById';
import {RootState} from '../Redux/reducers';
import {User} from '../Redux/constants/userById';
import {Comment} from '../Redux/constants/comments';
import styled from "styled-components";
import {formatTextHtml} from "../utils/formatTextHtml";
import {formatDate} from "../utils/formatDate";
import Loader from "./Loader";

const CommentsWrapper = styled.div`
    padding: 20px;
    a{
        text-transform: capitalize;  
        color: #3061f3;  
        text-decoration: none
    }
`;

const Title = styled.h3`
    font-weight:300  
`;

const FirstLevelCommentWrapper = styled.div`
    margin-bottom: 30px
`;

const FirstLevelCommentBody = styled.div`
    border-radius: 6px;
    padding: 10px 15px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px;
    margin-top: 6px;
    margin-bottom: 20px;
`;

const TitleDate = styled.h5`
    color: rgba(0, 0, 0, 0.57);  
    margin: 6px 0;
    font-weight: 100;
`;

const SecondLevelCommentWrapper = styled.div`
    margin-left: 30px;
    a{
        font-size: 14px
    }
`;

const SecondLevelCommentBody = styled(FirstLevelCommentBody)`
    padding: 10px 15px;
    font-size: 14px;
    margin-bottom: 20px
`;

interface CommentsProps {
    post: Post,
    loader: boolean
}

const Comments = (props: CommentsProps) => {
    const dispatch = useDispatch();
    const {loader: pageLoader, post} = props;
    const {data: comments, loader: commentsLoader} = useSelector((state: RootState) => {
        return {...state.comments}
    });
    const {commentsUsers, loader} = useSelector((state: RootState) => {
        return {...state.userById}
    });

    useEffect(() => {
        post && dispatch(getComments(post.id));
    }, [post]);
    useEffect(() => {
        comments.length > 0 && dispatch(getMultiplyUserById(usersToFetch(comments)));
    }, [comments]);

    const usersToFetch = (commentsArr: Array<Comment>) => {
        let usersArr: Array<number> = [];
        commentsArr.forEach((comment: Comment) => {
            !usersArr.includes(comment.authorId) && usersArr.push(comment.authorId)
        });
        return usersArr;
    };
    const getCommentAuthor = (authorId: number) => {
        return commentsUsers.filter((item: User) => item.id === authorId)[0];
    }
    if ( !(commentsUsers.length === usersToFetch(comments).length || comments.length === 0) || pageLoader || commentsLoader || loader) {
        return (
            <Loader size={60}/>
        )
    }
    return (
        <CommentsWrapper>
            <Title>Check what peoples think about that:</Title>
            <div>
                {comments.filter((comment: Comment) => comment.parentId === comment.storyId)
                    .map((firstLevelComment: Comment, index: number) => {
                        return (
                            <FirstLevelCommentWrapper key={index}>
                                <Link to={`/profile/${firstLevelComment.authorId}`}>
                                    {commentsUsers.length === usersToFetch(comments).length && getCommentAuthor(firstLevelComment.authorId).firstName}
                                    {commentsUsers.length === usersToFetch(comments).length && ' ' + getCommentAuthor(firstLevelComment.authorId).lastName}
                                </Link> says:
                                <FirstLevelCommentBody key={index}>
                                    <TitleDate>
                                        {formatDate(firstLevelComment.datetime)}
                                    </TitleDate>
                                    {formatTextHtml(firstLevelComment.comment)}
                                </FirstLevelCommentBody>
                                {comments.filter((comment: Comment) => comment.parentId === firstLevelComment.id)
                                    .map((childComment: Comment, index: number) => {
                                        return (
                                            <SecondLevelCommentWrapper key={index}>
                                                <Link to={`/profile/${childComment.authorId}`}>
                                                    {commentsUsers.length === usersToFetch(comments).length  && getCommentAuthor(childComment.authorId).firstName}
                                                    {commentsUsers.length === usersToFetch(comments).length  && ' ' + getCommentAuthor(childComment.authorId).lastName}
                                                </Link> says:
                                                <SecondLevelCommentBody>
                                                    <TitleDate>
                                                        {formatDate(childComment.datetime)}
                                                    </TitleDate>
                                                    {formatTextHtml(childComment.comment)}
                                                </SecondLevelCommentBody>
                                            </SecondLevelCommentWrapper>
                                        )
                                    })}
                            </FirstLevelCommentWrapper>
                        )
                    })}
                {comments.length === 0 &&
                <TitleDate>
                    Anybody not commented this post
                </TitleDate>}
            </div>
        </CommentsWrapper>
    )
}

export default Comments;