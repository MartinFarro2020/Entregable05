import PokemonList from "../components/pokedex/PokemonList";
import usePokedex from "../components/Hooks/usePokedex";
import { useState } from "react";
import { paginateData } from "../utils/pagination";
import Pagination from "../components/pokedex/Pagination";

const pokedex = () => {
  const [currentPage, setcurrentPage] = useState(1);

  const {
    handleChange,
    name,
    pokemonName,
    pokemonType,
    pokemonsByName,
    setPokemonName,
    setPokemonType,
    types,
  } = usePokedex();

  const { itemsInCurrentPage, lastPage, pagesInCurrentBlock } = paginateData(
    pokemonsByName,
    currentPage
  );

  console.log(itemsInCurrentPage);
  return (
    <main>
      <section>
        <p>
          <span>Welcom {name}</span>
        </p>
        <form>
          <div>
            <input
              value={pokemonName}
              onChange={handleChange(setPokemonName)}
              placeholder="Search pokemon..."
              type="text"
            />
          </div>

          <select value={pokemonType} onChange={handleChange(setPokemonType)}>
            <option value="">All pokemons</option>
            {types.map((type) => (
              <option key={type.name} value={type.name} className="capitalize">
                {type.name}
              </option>
            ))}
          </select>
        </form>
      </section>

      <Pagination
        lastPage={lastPage}
        pagesInCurrentBlock={pagesInCurrentBlock}
        setcurrentPage={setcurrentPage}
        currentPage={currentPage}
      />

      <PokemonList pokemons={itemsInCurrentPage} />
    </main>
  );
};
export default pokedex;
