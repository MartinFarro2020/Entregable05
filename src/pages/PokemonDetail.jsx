import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../services/pokemons";
import StatBarList from "../components/pokemonDetail/StatBarList";
import {
  bgStylePokemonType,
  borderStyledPokemonByType,
  textStyledPokemonByType,
} from "../shared/pokemon";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);

  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonById(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="flex justify-center items-center">
      <article
        className={`pb-3 w-[min(100%,_550px)] border-[7px] rounded-2xl mt-16 ${
          borderStyledPokemonByType[pokemonData?.types[0]]
        }`}
      >
        <header
          className={`h-[80px] relativen ${
            bgStylePokemonType[pokemonData?.types[0]]
          }`}
        >
          <div className="flex justify-center h-32 absolute left-1/2 -translate-x-1/2 -mt-14">
            <img src={pokemonData?.image} alt="" />
          </div>
        </header>
        <section>
          <span className="flex justify-center text-2xl font-bold">
            #{pokemonData?.id}
          </span>
          <span
            className={`flex font-bold text-2xl justify-center ${
              textStyledPokemonByType[pokemonData?.types[0]]
            }`}
          >
            {pokemonData?.name}
          </span>
          <section className="flex flex-col gap-4 justify-center">
            <p className="flex justify-center font-semibold mt-10">Type</p>
            <article className="flex justify-center gap-4">
              <span className="flex  items-center bg-blue-400 w-24 h-6 text-white text-sm justify-center">
                {pokemonData?.types[0]}
              </span>
              <span className="flex  items-center bg-violet-800 w-24 h-6 text-white text-sm justify-center">
                {pokemonData?.types[1]}
              </span>
            </article>
          </section>

          <StatBarList stats={pokemonData?.stats} />
        </section>
      </article>
    </main>
  );
};
export default PokemonDetail;
