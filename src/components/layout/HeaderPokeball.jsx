import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/trainer.slice";

const HeaderPokeball = ({ children }) => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <section>
      <header>
        <div className="h-16 bg-red-600 relative">
          <div className="absolute left-0 bottom-0 w-[210px] sm:w-[300px]">
            <img src="/images/Pokedex.png" alt="" />
          </div>
        </div>
        <div className="h-14 bg-black relative">
          <button onClick={handleLogout} className="h-16 aspect-square bg-white rounded-full absolute right-0 -translate-x-1/2 -top-8 border-[8px] border-black after:block after:content-[''] after:h-8 after:aspect-square after:bg-slate-600 after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:border-[6px] after:border-black transition-colors hover:bg-red-500 cursor-pointer"></button>
        </div>
      </header>
      {children}
    </section>
  );
};
export default HeaderPokeball;
