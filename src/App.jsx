import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Home from "./components/home/Home";
import Form from "./components/form/Form";
import Detail from "./components/detail/Detail";
import Landing from "./components/landing/Landing.jsx";
import NotFound from "./components/notFound/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  isHomeNav,
  addPokemons,
  resetHome,
  getPokemonByName,
} from "./redux/features/globalSlice";
import { getTypes, remove } from "./redux/actions/globalActions";

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { pokemons } = useSelector((s) => s.global);

  useEffect(() => {
    !pokemons[0] &&
      axios
        .get("https://pi-api-s3xh.onrender.com/pokemons")
        .then(({ data }) => {
          let filtro1 = new Set(data);
          let filtro2 = Array.from(filtro1);
          dispatch(addPokemons(filtro2));
          dispatch(resetHome());
          dispatch(getTypes());
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearch = async (name) => {
    try {
      await axios(`https://pi-api-s3xh.onrender.com/pokemon?name=${name}`).then(
        ({ data }) => {
          dispatch(getPokemonByName(data));
        }
      );
    } catch (error) {
      dispatch(getPokemonByName({}));
    }
  };

  const onClose = (id) => {
    dispatch(remove(id));
  };

  function navHom(flag) {
    dispatch(isHomeNav(flag));
  }

  return (
    <div className="App">
      {pathname === "/" ? null : <Nav onSearch={onSearch} navHome={navHom} />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/home"
          element={<Home onClose={onClose} navHom={navHom} />}
        />
        <Route path="/home/detail/:id" element={<Detail />} />
        <Route path="/home/create" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
