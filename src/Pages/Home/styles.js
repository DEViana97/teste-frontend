import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PostContent = styled.article`
  background: #fff;
  width: 60%;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 5px;

  @media (max-width: 450px) {
    width: 100%;
  }

  p {
    color: #717171;
    font-size: 1.125rem;
    font-weight: 400;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    text-transform: capitalize;

    @media (max-width: 450px) {
      font-size: 1rem;
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  h2 {
    color: #1a202c;
    text-transform: capitalize;
    font-size: 1.625rem;
    font-weight: 900;

    @media (max-width: 450px) {
      font-size: 1.2rem;
    }
  }
`;
