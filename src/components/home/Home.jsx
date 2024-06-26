import Form from '../form/Form'
import s from './Home.module.css'
import Cards from '../cards/Cards'
import Loading from '../loading/Loading'
import { useSelector } from 'react-redux'
import MenuResponsive from '../menuResponsive/MenuResponsive'
import Footer from '../footer/Footer'

export default function Home({onClose,navHom}) {
  const { pokemons,homeNav,allPokemons } = useSelector(s=>s.global)
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