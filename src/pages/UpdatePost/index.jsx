import { Form } from "../../components/Form";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useNavigate } from "react-router-dom";

export function UpdatePost() {
  const navigate = useNavigate();
  const { id } = useParams();

  function handleUpdatePost(data) {
    api.put(`/posts/${id}`, data);
    navigate("/");
  }

  return (
    <div>
      <Form
        title={"Editar publicação"}
        textButton={"Editar"}
        onAction={handleUpdatePost}
      />
    </div>
  );
}
