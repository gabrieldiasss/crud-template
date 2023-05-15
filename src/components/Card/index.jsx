import "./styles.css";
import { MdDelete } from "react-icons/md";

export function Card() {
  return (
    <article className="cardContainer">
      <header>
        <h2>Olá, esse projeto é sobre</h2>
        <MdDelete size={28} color="#ed4337" />
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
        laudantium minus rem delectus vitae facilis? Tempora, quam. Ipsum
        facilis sit tenetur architecto saepe quo. Dolores numquam nemo
        voluptates magni. Ad.
      </p>

      <div className="buttonsContainer">
        <button>Ver publicação</button>
        <button>Atualizar</button>
      </div>
    </article>
  );
}
