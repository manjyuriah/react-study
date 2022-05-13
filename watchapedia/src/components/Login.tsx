import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

interface Props {
  linkUrl: string;
  title: string;
  year: string;
  posterPath: string;
  voteAverage: number;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  margin-inline: 10px;
`;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  :hover{
    transform: translate(1%, 1%);
    transition:all .2s ease
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const Info = styled.div`
  text-align: left;
  width: 100%;
`;

const Title = styled.h4`
  color: #292a32;
  font-size: 16px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 22px;
  margin-bottom: 3px;
  white-space: nowrap;
  max-width: 200px;
`;

const Keyword = styled.div`
  color: #292a32;
  padding-bottom: 1px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;
const Login = () => (
    <Base>
      <Info>
        <Title>로그인</Title>
          <span>
            평균
          </span>
          <span>
            &nbsp;<AiFillStar />
          </span>
          <span>
          </span>
      </Info>
    </Base>
)

export default Login;