import "./styles.css";

export function Form() {
  return (
    <form>
      <h2>Título</h2>
      <div className="field">
        <input placeholder="Título" />
      </div>

      <div className="field">
        <input placeholder="Descrição" />
      </div>

      <div className="field">
        <textarea placeholder="Descrição" />
      </div>

      <button>Botão</button>
    </form>
  );
}
