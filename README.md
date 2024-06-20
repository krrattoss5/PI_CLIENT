<<<<<<< HEAD
<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
=======
# Deploy del Cliente:
<a href="http://pokedex.downn.store/">POKEDEX.DOWNN.STORE</a>
# Pokemon App
>>>>>>> f57d034bca69e3bd1c23cdeab4764a1d99b04e0f

Currently, two official plugins are available:

<<<<<<< HEAD
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
=======
=======
# Deploy del Cliente:
<a href="http://pokedex.downn.store/">POKEDEX.DOWNN.STORE</a>
# Pokemon App

- Esta app fue realizada para la etapa "Proyecto Individual" de Labs del bootcamp Henry.
- Tiempo de desarrollo: 2 semanas.
- No estaba permitdo usar librerías ni frameworks CSS (Boostrap, MaterialUI, etc) por lo cual todos los modales, funcionalidad de botones y estilos se realizaron utilizando HTML CSS Y JS puro.

>>>>>>> f57d034bca69e3bd1c23cdeab4764a1d99b04e0f
> Realizado utilizando el stack de tecnologías HTML, CSS, Javascript, React, Redux, Node.JS, Express, Sequelize y PostgreSQL.

## Landing

<p align="center">
  <img width="800" src="./readme/landing.gif" />
</p>

- Muestra un background minimalista.
- Carga dinamica de imagen tipo gif random para que cada visitante pueda ver un pokemon aleatorio.
- cuadro de texto y boton centrados con diseño intuitivo y un call to action que invita al cliente a ver los pokemons disponibles y a crear su propio pokemon.

## Home

<p align="center">
  <img width="800" src="./readme/home.gif" />
</p>

- En la parte superior se puede apreciar una barra de navegacion con selects de filtrado, un logotipo que linkea al home, una barra de busqueda y es totalmente responsive, en pantallas mas pequeñas renderiza solo el logo y la barra de busqueda y los otros elementos se renderizan en un menu hamburgueza en la parte inferior derecha para estar mas cerca del pulgar del usuario y darle la fasilidad de la navegacion intuitiva.
- En el body se muestra la lista completa de Pokemons en formato de tarjetas, cada una con su nombre, imagen e ícono representativo del tipo de Pokemon al que pertenece (agua, fuego, etc).
- Se realiza un paginando mostrando de a 12 tarjetas por página, las targetas se pueden borrar pero tienen un modal para preguntar si se esta seguro de hacerlo.
- Podemos filtrar por tipo (agua, fuego, etc.) y por categoría (originales o creados por el usuario) de Pokemon.
- Dentro de lo que estamos listando, podemos cambiar el criterio y sentido del ordenamiento (id, nombre, ataque).
- Al pie de la pantalla tenemos el paginado totamente dinamico con botones que se activan únicamente cuando son necesarios.
- El campo de búsqueda por nombre funciona reactivamente buscando en tiempo real (no se necesita presionar un botón) y devuelve la tarjeta del Pokemon buscando sólo si coincide el nombre completo (según lo solicitado para el proyecto).
- Bajo el paginado podras apreciar un footer con tres seccioner:Creditos a Henry Bootcamp, Links a los repositorios del proyecto, y links de contacto del aoutor(Linkedin y github).
- Si hacemos click sobre cualquier tarjeta nos abre la Pokedex (Detalles del Pokemon).

## Pokedex

<p align="center">
  <img width="800" src="./readme/pokedex.gif" />
</p>

- Nos muestra toda la información de ese Pokemon (id, nombre, imagen, tipo/s, y estadísticas).
- Cuando cerramos el Pokedex la pantalla anterior se encuentra en el mismo estado en el que estaba.

## Pokelab
<p align="center">
  <img width="800" src="./readme/pokelab.gif" />
</p>

- Posee un formulario controlado donde ingresamos los datos necesarios para crear un nuevo Pokemon.
- A medida que completamos los campos, el display nos advierte de errores.
- El nombre no puede ser repetido de un Pokemon ya existente (ya sea original o creado).
- Para los puntos de vida, velocidad, ataque y defensa, se implementó un sistema de asignación de 250 puntos como máximo; mostrando los puntos remanentes. En caso de superar el maximo permito, no se permite crear el Pokemon.
- Sólo se pueden seleccionar hasta 2 'tipos', a partir de entonces el resto queda deshabilitado. Podemos cambiar la selección y volver a elegir.
- El boton de `CREATE` sólo se habilita si todos los campos estan aprobados.
- Al confirmar se realiza la operación en el servidor y nos muestra en pantalla la respuesta que nos envía el mismo (éxito o error).
- Luego al cabo de unos segundos automáticamente nos devuelve al Home.
<<<<<<< HEAD
>>>>>>> f57d034bca69e3bd1c23cdeab4764a1d99b04e0f
=======
>>>>>>> f57d034bca69e3bd1c23cdeab4764a1d99b04e0f
