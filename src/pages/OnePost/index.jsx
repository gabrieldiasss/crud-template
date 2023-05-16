import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import "./styles.css";
import { api } from "../../lib/axios";

export function OnePost() {

  const [post, setPost] = useState({})

  const {id} = useParams()

  useEffect(() => {
    api.get(`/posts/${id}`)
    .then(response => setPost(response.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <article className="onePostContainer">
      <h2>{post.title}</h2>
      <p>
        {post.content}
      </p>
    </article>
  );
}
