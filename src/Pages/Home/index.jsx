import React, { useEffect, useState } from "react";

import { api } from "../../services/api";
import Comments from "../../components/Coments";
import { Container, PostContent, TitleContainer } from "./styles";
import { Header } from "../../components/Header";
import likeIcon from "../../assets/like.png";

export function Home() {
  const [showPosts, setshowPosts] = useState([]);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function handleScroll() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    async function loadPosts() {
      setLoading(true);
      const response = await api.get(`/posts?_page=${page}&_limit=10`);
      setshowPosts([...showPosts, ...response.data]);
      setLoading(false);
    }
    loadPosts();
  }, [page]);
  return (
    <>
      <Header />
      <Container>
        {showPosts.map((post) => {
          return (
            <PostContent key={post.id}>
              <TitleContainer>
                <h2>{post.title}</h2>
                <img src={likeIcon} />
              </TitleContainer>
              <p>{post.body}</p>
              <Comments postId={post.id} />
            </PostContent>
          );
        })}
        {loading && <p>Carregando...</p>}
      </Container>
    </>
  );
}
