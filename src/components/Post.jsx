import React from 'react';
import styled from 'styled-components';

const Container = styled.div`  
  margin: 10px 20px;
  padding: 10px;
  border-radius: 2px;
  box-shadow: 0 0 3px 1px rgba(0,0,0,0.2);
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  padding-bottom: 10px;
`;

const Name = styled.div`
  color: rgba(0,0,0,.5);
  font-size: 0.8rem;
`;

export const Post = ({ post, user }) => {
  return (
    <Container>
      <Title>{post.title}</Title>
      {post.body}
      <Name>{`${user.name} (user name: ${user.username})`}</Name>
    </Container>
  )
}

