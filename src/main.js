import './css/style.css'
import './css/game.css'
import './css/sprites.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Videojuego acomodar</h1>
  </div>

  <div id="display">
    <img id="background" src="background.webp">
    
    <div class="sprite" id="poste">
      <img src="poste-de-luz.png">
    </div>
    
    <div class="sprite" id="box-toy">
      <img src="public/box-toy.png">
    </div>
    
    <div class="toy sprite">
      <img src="public/toy-1.png">
      <img src="public/toy-2.png">
      <img src="public/toy-3.png">
      <img src="public/toy-4.png">
      <img src="public/toy-5.png">
    </div>
  </div>
`