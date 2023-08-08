import './App.css';
import axios from 'axios'
import { useEffect } from 'react';
import Nav from './components/Nav/Nav';
import Home from './components/home/Home';
import Form from './components/form/Form';
import pokeRandom from './assets/pokeRandom'
import Detail from './components/detail/Detail';
import Landing from './components/landing/Landing';
import NotFound from './components/notFound/NotFound';
import { useDispatch,useSelector } from 'react-redux';
import { Routes, Route,useLocation } from 'react-router-dom';
import { addPokemons,getPokemonByName,getTypes,remove, resetHome,homeNav } from './redux/actions/actions'


function App() {
  //const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch();
  const { pokemons } = useSelector(s=>s)

  useEffect(()=>{
    !pokemons[0] && axios.get('https://pi-api-ja4i.onrender.com/pokemons')
    .then(({data})=>{
      let filtro1 = new Set(data)
      let filtro2 = Array.from(filtro1)
      dispatch(addPokemons(filtro2))
      dispatch(resetHome())
      dispatch(getTypes())
    })
    return pokemons
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const onSearch = async (name)=>{
    try {
      await axios(`https://pi-api-ja4i.onrender.com/pokemon?name=${name}`)
        .then(({data})=>{
          dispatch(getPokemonByName(data))
        })
    } catch (error) {
      dispatch(getPokemonByName({}))
    }
  }

  const onClose = (id)=>{
    dispatch(remove(id))
    //window.location.reload();
  }

  function navHome(flag){
    dispatch(homeNav(flag))
  }
  console.log()
  return (
    <div className="App">
        {location.pathname === "/"?null:<Nav onSearch={onSearch} navHome={navHome}/>}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home onClose={onClose} navHome={navHome}/>}/>
        <Route path='/home/detail/:id' element={<Detail />}/>
        <Route path='/home/create' element={<Form />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
