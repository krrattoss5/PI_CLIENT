import { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { createPokemon } from '../../redux/actions/globalActions'
import style from './Form.module.css'
import pokeRandom from '../../assets/pokeRandom';

export default function Form() {
  const dispatch = useDispatch()
  const {types,pokemonCreated} = useSelector(s=>s.global)//subscripcion al store
  const [popUp,setPopUp] = useState(''); //global state para comunicarme  on el cliente
  const [errors, setErrors] = useState({});//global state para manejar errores con fn validate
  const [pokemon, setPokemon] = useState({
    name:'',
    img:'',
    hp:0,
    attack:0,
    defense:0,
    speed:0,
    height:0,
    weight:0,
    type:[]
  });//estate para postear despues de ser testeado


  //muestro el resultado del formulario al usuario e informo cualquier error
  useEffect(()=>{
    if(!pokemonCreated.ok) setPopUp(pokemonCreated.message)
    if(pokemonCreated.ok) setPopUp(pokemonCreated.message)
  },[pokemonCreated])

  //manejo de errores del formulario
  function validation(pokemon){
    const errors = {}
    const regexName = /^[A-Z]+$/i
    const regexImage = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g
    //validaciones de nombre
    if(!regexName.test(pokemon.name)) errors.name = 'El nombre debe contener solo letras!'
    if(!pokemon.name.length) errors.name = 'Hay que escribir un nombre!'
    if(pokemon.name.length > 11) errors.name = 'Maxiomo 11 caracteres!'
    if(pokemon.name.length > 11) errors.name = 'Maxiomo 11 caracteres!'
    //validaciones de imagen
    if(!pokemon.img.length) errors.img = 'El pokemon debe tener una imagen!!'
    if(!regexImage.test(pokemon.img)) errors.img = 'Debe ser una imagen con formato (.png,jpg o gif)!!'
    //validaciones de hp
    if(pokemon.hp < 1) errors.hp = 'Hp debe ser mayor que 0!'
    if(pokemon.hp > 900) errors.hp = 'Hp debe ser menor a 1000!'
    //validaciones de attack
    if(pokemon.attack < 1) errors.attack = 'attack debe ser mayor que 0!'
    if(pokemon.attack > 900) errors.attack = 'attack debe ser menor a 1000!'
    //validaciones de defense
    if(pokemon.defense < 1) errors.defense = 'defense debe ser mayor que 0!'
    if(pokemon.defense > 900) errors.defense = 'defense debe ser menor a 1000!'
    //validaciones de speed
    if(pokemon.speed < 0) errors.speed = 'speed no debe ser menor que 0!'
    //validaciones de height
    if(pokemon.height < 0) errors.height = 'height no debe ser menor que 0!'
    //validaciones de weight
    if(pokemon.weight < 0) errors.weight = 'weight no debe ser menor que 0!'
    if(!pokemon.type[0]) errors.types = 'El pokemon debe tener almenos 1 tipo!'
    return errors
  }
  //funcion handler para los valores del input
  function handleSelect(e){
      setPokemon({
        ...pokemon,
        [e.target.name]:[...pokemon.type, e.target.value]
      })
      setErrors(validation({
        ...pokemon,
        [e.target.name]:[...pokemon.type, e.target.value]
      }))
  }
  function handleInput(e){
    setPokemon({
      ...pokemon,
      [e.target.name]:e.target.value
    })
    setErrors(validation({
      ...pokemon,
      [e.target.name]:e.target.value
    }))
  }
  const errorTesting = Object.keys(errors)
  //funcion handler para submitear la informacion del formulario depues de validarla
  const handleSubmit= async (e)=>{
    e.preventDefault()
    if(!errorTesting.length){
      setPokemon({
        ...pokemon,
        name:'',
        img:'',
        hp:0,
        attack:0,
        defense:0,
        speed:0,
        height:0,
        weight:0,
        type:[]
      })
      setErrors({
        ...pokemon,
        name:'',
        img:'',
        hp:0,
        attack:0,
        defense:0,
        speed:0,
        height:0,
        weight:0,
        type:''
      })
      //despacho la accion al store para actualizar mi state en el reducer y segun el hacer algo
      dispatch(createPokemon(pokemon))
      //reseteo el local state para que el mensaje desaparezca despues de 5 segundos y poder mantener al usser actualizado en futuras ejecuciones del codigo
      return setTimeout(function(){
        setPopUp('')
        window.location.reload();
      }, 5000)
    }
  }

  return (
    <>
      <div className={style.container}>
      {/*mensaje de error uso un ternario multiple que depende de mi local state para aparecer o desaparecer*/}
        {!popUp
        ?null
        :(popUp[popUp.length-1] !== "!")
        ?<span className={style.popUp}>{'⚠️ Ya hay pokemons con ese nombre o imagen! ⚠️'}</span>
        :<span className={style.popUp}>{'✅ Pokemon creado con exito!'}</span>}

        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.inputs}>
            <label id='NAME'>NAME: </label>
            <input  type='text' name='name' value={pokemon.name} onChange={handleInput} placeholder='Escribe un nombre...'/>
          </div>
          {/*manejo de errores con js*/}
            {errors.name?<p className={style.error_container}>{errors.name}</p>:null}

          <div className={style.inputs}>
            <label id='IMAGE'>IMAGE: </label>
            <input type='text' name='img' value={pokemon.img} onChange={handleInput} placeholder='Asigna una imagen...'/>
          </div>
          {/*manejo de errores con js*/}
            {errors.img?<p className={style.error_container}>{errors.img}</p>:null}

          <div className={style.inputs}>
            <label id='HP'>🩸 HP: </label>
            <input type='number' name='hp' value={pokemon.hp} onChange={handleInput} placeholder='Asignar puntos de vida...'/>
          </div>
          {/*manejo de errores con js*/}
            {errors.hp?<p className={style.error_container}>{errors.hp}</p>:null}

          <div className={style.inputs}>
            <label id='ATTACK'>⚔️ ATTACK: </label>
            <input type='number' name='attack' value={pokemon.attack} onChange={handleInput} placeholder='Asignar puntos de ataque...'/>
          </div>
          {/*manejo de errores con js*/}
            {errors.attack?<p className={style.error_container}>{errors.attack}</p>:null}

          <div className={style.inputs}>
            <label id='DEFENSE'>🛡️ DEFENSE: </label>
            <input type='number' name='defense' value={pokemon.defense} onChange={handleInput} placeholder='Asignar puntos de defensa'/>
          </div>
          {/*manejo de errores con js*/}
            {errors.defense?<p className={style.error_container}>{errors.defense}</p>:null}

          <div className={style.inputs}>
            <label id='SPEED'>⚡ SPEED: </label>
            <input type='number' name='speed' value={pokemon.speed} onChange={handleInput} placeholder='Asignar velocidad...'/>
          </div>
          {/*manejo de errores con js*/}
            {errors.speed?<p className={style.error_container}>{errors.speed}</p>:null}

          <div className={style.inputs}>
            <label id='HEIGHT'>📏 HEIGHT: </label>
            <input type='number' name='height' value={pokemon.height} onChange={handleInput} placeholder='Asignar altura...'/>
          </div>
          {/*manejo de errores con js*/}
            {errors.height?<p className={style.error_container}>{errors.height}</p>:null}

          <div className={style.inputs}>
            <label id='WEIGHT'>⚖️ WEIGHT: </label>
            <input type='number' name='weight' value={pokemon.weight} onChange={handleInput} placeholder='Asignar peso...'/>
          </div>
          {/*manejo de errores con js*/}
            {errors.weight?<p className={style.error_container}>{errors.weight}</p>:null}

          <div className={style.selection_type}>
            <div className={style.container_selection_type}>
              <label id='Type 1'>Type 1: </label>
              {pokemon.type.length > 0
              ?<span>You selected: {pokemon.type[0]}</span>
              :<select name='type' onChange={handleSelect}>
                <option type='default'>Select Type 1</option>
                {
                  types.map(t=>{
                    return <option key={t.id + t.name}>{t.name}</option>
                  })
                }
              </select>}
            </div>

            <div className={style.container_selection_type}>
              <label id='Type 2'>Type 2: </label>
              {!pokemon.type[0]||pokemon.type[1]
              ?<span>You selected: {pokemon.type[0]||'nothing!'}</span>
              :<select name='type' onChange={handleSelect}>
                <option type='default'>Select Type 2</option>
                {
                  types.map((t)=>  t.name !== pokemon.type[0]?<option key={t.name + t.id + t.name}>{t.name}</option>:null)
                }
              </select>}
            </div>
            {/*manejo de errores con js*/}
            {errors.type?<p className={style.error_container}>{errors.type}</p>:null}
          </div>

          {/* solo permito enviar post cuanco la info obligatoria esta completa */}
          {errorTesting.length||!pokemon.name.length?null:<button type='submit' className={style.create_button}>CREAR</button>}

        </form>
      </div>
      <div className={style.counter_form}>
        {pokemon.img
        ?<img src={pokemon.img} className={style.img_bar} alt={pokemon.name} style={{width:'250px',height:'250px'}}/>
        :<img src={pokeRandom.img[71]} className={style.img_bar} alt={pokemon.name} style={{width:'250px',height:'250px'}}/>}
        <div>
          <h1>{pokemon.name}</h1>
          <div className={style.container_bar}>

            <div className={style.box_span}>
              <span>🩸</span>
              <span>{pokemon.hp}</span>
            </div>
            <div className={style.menu}><div className={style.prueba} style={{ width:`${pokemon.hp > 99?100:pokemon.hp}%`}}></div></div>

            <div className={style.box_span}>
              <span>⚔️</span>
              <span>{pokemon.attack}</span>
            </div>
            <div className={style.menu}><div className={style.prueba} style={{ width:`${pokemon.attack > 99?100:pokemon.attack}%`}}></div></div>

            <div className={style.box_span}>
              <span>🛡️</span>
              <span>{pokemon.defense}</span>
            </div>
            <div className={style.menu}><div className={style.prueba} style={{ width:`${pokemon.defense > 99?100:pokemon.defense}%`}}></div></div>

            <div className={style.box_span}>
              <span>⚡</span>
              <span>{pokemon.speed}</span>
            </div>
            <div className={style.menu}><div className={style.prueba} style={{ width:`${pokemon.speed > 99?100:pokemon.speed}%`}}></div></div>

            <div className={style.box_span}>
              <span>📏</span>
              <span>{pokemon.height}</span>
            </div>
            <div className={style.menu}><div className={style.prueba} style={{ width:`${pokemon.height > 99?100:pokemon.height}%`}}></div></div>

            <div className={style.box_span}>
              <span>⚖️</span>
              <span>{pokemon.weight}</span>
            </div>
            <div className={style.menu}><div className={style.prueba} style={{ width:`${pokemon.weight > 99?100:pokemon.weight}%`}}></div></div>

          </div>
        </div>
      </div>
    </>
  )
}