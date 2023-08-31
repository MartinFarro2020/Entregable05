import { useDispatch } from "react-redux";
import FooterPokeball from "../components/layout/FooterPokeball";
import { loginTrainer } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (e) => { 
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(loginTrainer(nameTrainer));//!Aqui se captura el valor del input y el name asume el nuevo valor
    navigate("/pokedex") //!Esta funcion navigate redirenciona hacia pokedex
};

  return (
    <main className="min-h-screen grid grid-rows-[1fr_auto] justify-center items-center">
      <section>
        <article className="grid gap-3">
          <div className="grid p-4">
            <img src="/images/Pokedex.png" alt="" />
          </div>
          <h2 className="flex justify-center text-red-600 font-bold text-3xl">¡Hello Trainer!</h2>
          <p className="flex justify-center text-[#302F2F] font-semibold">To start give your name</p>
          <form onSubmit={handleSubmit} className="flex justify-center drop-shadow-md">
            <input className="flex h-10 w-48 mt-3"
              autoComplete="off"
              placeholder="your name... "
              id="nameTrainer"
              type="text"
              required
            />
            <button className="flex h-10 drop-shadow-md bg-red-600 text-white justify-center items-center w-20 mt-3">Start!</button>
          </form>
        </article>
      </section>
      <FooterPokeball />
    </main>
  );
};
export default Home;
