import React from "react";
import { HeaderStyle, Button, HeaderMenu, Input } from "./styles";
import Logo from "../../assets/logo.png";

export function Header() {
  const path = window.location.pathname;
  return (
    <HeaderStyle active={path}>
      <HeaderMenu>
        <img src={Logo} />
        <ul>
          <li>
            <Button
              style={{
                borderBottom: path === "/" ? "2px solid #000" : "",
              }}
              to="/"
            >
              Home
            </Button>
          </li>
          <li>
            <Button
              style={{
                borderBottom: path === "/usuarios" ? "2px solid #000" : "",
              }}
              to="/usuarios"
            >
              Usuários
            </Button>
          </li>
        </ul>
      </HeaderMenu>
      <Input type="text" placeholder="Pesquisar no blog" />
    </HeaderStyle>
  );
}
