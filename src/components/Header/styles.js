import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyle = styled.header`
  background: linear-gradient(90deg, #574ae8 0%, #3ea1db 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
  padding: 2rem;

  img {
    width: 150px;
  }

  ul {
    display: flex;
  }

  li {
    list-style: none;
    font-size: 1.2rem;
    font-weight: 600;
    transition: color 0.3s;

    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }
`;

export const Button = styled(Link)`
  text-decoration: none;
  color: #000;
  margin-right: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }
`;

export const HeaderMenu = styled.div`
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 950px) {
    width: 600px;
  }

  @media (max-width: 600px) {
    width: 400px;
  }

  @media (max-width: 450px) {
    width: 250px;
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 900px;
  padding: 1.3rem;
  color: #fff;
  font-size: 1rem;
  background-image: url(searchIcon);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  outline: none;
  border-radius: 5px;
  margin-top: 3rem;

  &::placeholder {
    color: #fff;
  }

  @media (max-width: 950px) {
    width: 100%;
  }
`;
