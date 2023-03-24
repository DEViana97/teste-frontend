import { useState } from "react";
import { Button, CommentContent, Container } from "./styles";
import { api } from "../../services/api";

function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  async function loadComments() {
    const response = await api.get(`/posts/${postId}/comments`);
    setComments(response.data);
    setShowComments(true);
  }

  function hideComments() {
    setShowComments(false);
  }

  return (
    <>
      {showComments === false && (
        <Button onClick={loadComments}>Ver comentários</Button>
      )}
      <Container isVisible={showComments}>
        {showComments && (
          <>
            <Button onClick={hideComments}>Esconder comentários</Button>
            {comments.map((comment) => (
              <CommentContent key={comment.id}>
                <h3>{comment.name}</h3>
                <span>{comment.email}</span>
                <p>{comment.body}</p>
              </CommentContent>
            ))}
          </>
        )}
      </Container>
    </>
  );
}

export default Comments;
