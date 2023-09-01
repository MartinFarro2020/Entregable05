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
        className={`pb-3 w-[min(100%,_400px)] border-[7px] rounded-2xl mt-16 ${
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
            className={`flex font-bold text-2xl mb-2 justify-center ${
              textStyledPokemonByType[pokemonData?.types[0]]
            }`}
          >
            {pokemonData?.name}
          </span>

          <section className="flex flex-col-2 gap-3 justify-center">
            <div className="flex flex-col justify-center items-center">
              <p className="flex text-xs">Weight</p>
              <span>{pokemonData?.weight}</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="flex text-xs">Height</p>
              <span>{pokemonData?.height}</span>
            </div>
          </section>

          <section className="flex flex-col-2 gap-2 justify-center px-4">
            <div>
              <p className="flex justify-center font-semibold mt-2 mb-3">Type</p>
              <article className="flex justify-center gap-1">
                <span className="flex  items-center bg-blue-400 w-20 h-6 text-white text-sm justify-center">
                  {pokemonData?.types[0]}
                </span>
                <span className="flex  items-center bg-violet-800 w-20 h-6 text-white text-sm justify-center">
                  {pokemonData?.types[1]}
                </span>
              </article>
            </div>

            <div>
              <p className="flex justify-center font-semibold mt-2 mb-3">Skills</p>
              <article className="flex justify-center gap-1">
                <span className="flex  items-center bg-indigo-400 w-20 h-6 text-white text-sm justify-center">
                  {pokemonData?.abilities[0].ability.name}
                </span>
                <span></span>
                <span className="flex  items-center bg-indigo-400 w-20 h-6 text-white text-sm justify-center">
                  {pokemonData?.abilities[1].ability.name}
                </span>
              </article>
            </div>
          </section>

          <StatBarList stats={pokemonData?.stats} />
        </section>
      </article>
    </main>
  );
};
export default PokemonDetail;
