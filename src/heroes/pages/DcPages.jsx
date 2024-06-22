// Importación del componente HeroList desde el archivo de componentes.
import { HeroList } from "../components/HeroList";

// Página que muestra una lista de héroes de DC Comics.
export const DcPages = () => {
  return (
    <>
      {/* Encabezado principal de la página */}
      <h1>DC Comics</h1>
      <hr />

      {/* Lista no ordenada que contiene el componente HeroList */}
      <ul>
        <HeroList publisher='DC Comics' />
      </ul>
    </>
  );
}

