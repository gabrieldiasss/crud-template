import "./styles.css";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export function Card({ post, onDeletePost }) {
  const navigate = useNavigate();

  return (
    <article className="cardContainer">
      <header>
        <h2>{post.title}</h2>
        <MdDelete
          onClick={() => onDeletePost(post.id)}
          size={28}
          color="#ed4337"
        />
      </header>
      <p>{post.description}</p>

      <div className="buttonsContainer">
        <button onClick={() => navigate(`/post/${post.id}`)}>
          Ver publicação
        </button>
        <button onClick={() => navigate(`/updatePost/${post.id}`)}>
          Atualizar
        </button>
      </div>
    </article>
  );
}
