import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
margin: 20px;
color: blue;
`;
export const Input = ({store, setStore}) => {

  const handlerInput = (e) => {
    setStore({...store, pattern: e.target.value});
  }

  return (
    <Container>
      <label htmlFor="pattern">Filter by title </label>
      <input
        id="pattern"
        value={store.pattern}
        onChange={handlerInput}
      />
    </Container>
  );
}
