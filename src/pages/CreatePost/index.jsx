import { Form } from "../../components/Form";
import { api } from "../../lib/axios";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export function CreatePost() {
  const navigate = useNavigate();

  function handleCreatePost(data) {
    api.post("/posts", data);
    navigate("/");
  }

  return (
    <div>
      <Form
        title={"Criar publicação"}
        textButton={"Criar"}
        onAction={handleCreatePost}
      />
    </div>
  );
}
