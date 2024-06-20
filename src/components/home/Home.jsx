import Form from '../form/Form'
import s from './Home.module.css'
import Cards from '../cards/Cards'
import Loading from '../loading/Loading'
import { useSelector } from 'react-redux'
import MenuResponsive from '../menuResponsive/MenuResponsive'
import Footer from '../footer/Footer'

export default function Home({onClose,navHom}) {
<<<<<<< HEAD
  const { pokemons,homeNav,allPokemons } = useSelector(s=>s.global)
=======
  const { pokemons,homeNav,allPokemons } = useSelector(s=>s)
>>>>>>> f57d034bca69e3bd1c23cdeab4764a1d99b04e0f
  return (
    <div className={s.all}>
      {!allPokemons.length?<div><Loading /><span className={s.span_1}>Aún no hay Pokemons!</span></div>:<>
        {!homeNav?null:<Form navHome={navHom}/>}
        {homeNav?null:<Cards pokemons={pokemons} onClose={onClose} navHome={navHom}/>}
      </>}
      <Footer />
      <MenuResponsive
        navHome={navHom}
      />
    </div>
  )
}