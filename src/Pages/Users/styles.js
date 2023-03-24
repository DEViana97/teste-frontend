import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const UserContent = styled.div`
  background: #fff;
  width: 60%;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 5px;

  @media (max-width: 450px) {
    width: 100%;
  }

  h2 {
    color: #1a202c;
    font-weight: 900;
    font-size: 2rem;
    span {
      color: #717171;
      font-weight: 500;
    }
  }
  p {
    color: #1a202c;
    font-size: 1.1rem;
    font-weight: 600;

    span {
      color: #717171;
    }
  }
`;
