import { useForm } from "react-hook-form";
import "./styles.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

const postSchema = yup.object({
  title: yup.string().required("Informe o campo título"),
  description: yup.string().required("O campo descrição não pode ser vázio"),
  content: yup.string().required("O campo descrição não pode ser vázio"),
});

export function Form({ title, textButton, onAction }) {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(postSchema),
  });

  async function getDataUpdate() {
    const response = await api.get(`/posts/${id}`);
    reset(response.data);
  }

  useEffect(() => {
    getDataUpdate()
  }, []);

  return (
    <form onSubmit={handleSubmit(onAction)}>
      <h2>{title}</h2>
      <div className="field">
        <input placeholder="Título" {...register("title")} />
        {errors.title?.message}
      </div>

      <div className="field">
        <input placeholder="Descrição" {...register("description")} />
        {errors.description?.message}
      </div>

      <div className="field">
        <textarea placeholder="Conteúdo" {...register("content")} />
        {errors.content?.message}
      </div>

      <button type="submit">{textButton}</button>
    </form>
  );
}
