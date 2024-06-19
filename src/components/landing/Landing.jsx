import style from './Landing.module.css';
import pokeRandom from '../../assets/pokeRandom';
import { Link } from 'react-router-dom';

export default function Landing() {
  let index = Math.floor(Math.random() * 69);
  return (
    <div className={style.container}>
      <div className={style.container_inside}>
        <div className={style.menu}>
          <div className={style.border_bottom}></div>
        </div>
        <div className={style.text_area}>
          <p className={style.text}>Create, Discover &<br></br> Collect your</p>
          <span className={style.text_span}>Fantastic Pokemons!!</span>
          <Link to='/home' className={style.Link}>
            <button className={style.button_home}>Home</button>
          </Link>
        </div>
        <div className={style.container_inside_2} onClick={()=>window.location.reload()}>
          <div className={style.shadow}></div>
          <img src={pokeRandom.img[index]} alt='random-img' className={style.imgR} />
        </div>
      </div>
    </div>
  )
}
