import React from "react";
import styled from "styled-components";

function NotFound() {
  return (
    <Container>
      <h1>
        <span role="img" aria-label="Sad face emoji">
          😔
        </span>{" "}
        Page not found
      </h1>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  place-content: center;
`;

export default NotFound;
