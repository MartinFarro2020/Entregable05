import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  console.log(pokemons);
  return (
    
    <section className="grid px-4 gap-4 justify-center items-center grid-cols-[repeat(auto-fill,280px)] max-w-[1024px] mx-auto">
      
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url}/>
      ))}
    </section>
  );
};
export default PokemonList;
//grid-cols-[repeat(auto-fill,280px)] max-w-[898px] mx-auto

//grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))