import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { UserDetails } from "../../components/UserDetails";
import { api } from "../../services/api";
import { Container, UserContent } from "./styles";

export function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadUsers() {
      setLoading(true);
      const response = await api.get("/users");
      setUsers(response.data);
      setLoading(false);
    }
    loadUsers();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        {users.map((user) => {
          return (
            <UserContent key={user.id}>
              <h2>
                <span>Nome do usuário:</span> {user.name}
              </h2>
              <p>
                <span>User:</span> {user.username}
              </p>
              <p>
                <span>Email:</span> {user.email}
              </p>
              <UserDetails userId={user.id} />
            </UserContent>
          );
        })}
      </Container>
      {loading && <p>Carregando...</p>}
    </div>
  );
}
