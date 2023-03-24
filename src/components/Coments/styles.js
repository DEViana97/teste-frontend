import styled from "styled-components";

export const Container = styled.section`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

export const CommentContent = styled.section`
  background: #f3f5f7;
  padding: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;

  h3 {
    color: #1a202c;
    font-size: 1.75rem;
    font-weight: 600;

    @media (max-width: 450px) {
      font-size: 1.2rem;
    }
  }

  span {
    color: #717171;
    display: inline-block;
  }
  p {
    color: #717171;
    font-size: 1.125rem;
    font-weight: 400;

    @media (max-width: 450px) {
      font-size: 1rem;
    }
  }
`;

export const Button = styled.button`
  padding: 1rem;
  background: #1c57e1;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  border: none;
  transition: opacity 0.3s;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
