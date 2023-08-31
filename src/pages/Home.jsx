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
    <main className="min-h-screen grid grid-rows-[1fr_auto]">
      <section>
        <article>
          <div>
            <img src="/images/Pokedex.png" alt="" />
          </div>
          <h2>¡Hello Trainer!</h2>
          <p>To start give your name</p>
          <form onSubmit={handleSubmit}>
            <input
              autoComplete="off"
              placeholder="your name... "
              id="nameTrainer"
              type="text"
              required
            />
            <button>Start!</button>
          </form>
        </article>
      </section>
      <FooterPokeball />
    </main>
  );
};
export default Home;
