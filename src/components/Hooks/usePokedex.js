import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  getAllPokemons,
  getAllTypes,
  getPokemonsByType,
} from "../../services/pokemons";

//? Separación de lógica componente Pokedex.jsx
const usePokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [types, setTypes] = useState([]);
  console.log(types);

  const { name } = useSelector((store) => store.trainer); //!Es el hook que permite traer un estado global de cualquier parte de la aplicacion

  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };

  const pokemonsByName = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
  );

  useEffect(() => {
    if (!pokemonType) {
      getAllPokemons()
        .then((data) => setPokemons(data))
        .catch((err) => console.log(err));
    }
  }, [pokemonType]);

  useEffect(() => {
    if (pokemonType) {
      //Hacer la peticion de los pokemons por tipo
      getPokemonsByType(pokemonType).then((data) => setPokemons(data));
    }
  }, [pokemonType]);

  useEffect(() => {
    getAllTypes()
      .then((types) => setTypes(types))
      .catch((err) => console.log(err));
  }, []);

  return {
    name,
    pokemonName,
    setPokemonName,
    pokemonType,
    setPokemonType,
    handleChange,
    pokemonsByName,
    types
  };
};
export default usePokedex;
