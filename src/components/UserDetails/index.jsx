import React, { useState } from "react";
import { api } from "../../services/api";
import { Button, DetailsContent, Container } from "./styles";

export function UserDetails({ userId }) {
  const [details, setDetails] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  async function loadComments() {
    const response = await api.get(`/users/${userId}`);
    setShowDetails(true);
    setDetails(response.data);
  }

  function hideComments() {
    setShowDetails(false);
  }
  return (
    <div>
      {" "}
      {showDetails === false && (
        <Button onClick={loadComments}>Ver detalhes</Button>
      )}
      <Container isVisible={showDetails}>
        {showDetails && (
          <>
            <Button onClick={hideComments}>Esconder detalhes</Button>
            <DetailsContent>
              <h3>Endereço:</h3>
              <p>
                <span>Rua:</span> {details.address.street}
              </p>
              <p>
                <span>Suite:</span> {details.address.suite}
              </p>
              <p>
                <span>Cidade:</span> {details.address.city}
              </p>
              <p>
                <span>Cep:</span> {details.address.zipcode}
              </p>
            </DetailsContent>
            <DetailsContent>
              <h3>Contato:</h3>
              <p>
                <span>Telefone:</span> {details.phone}
              </p>
              <p>
                <span>Site:</span> <a href="#">{details.website}</a>
              </p>
            </DetailsContent>
          </>
        )}
      </Container>
    </div>
  );
}
