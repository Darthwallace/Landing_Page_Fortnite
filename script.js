function toggleMute() {
    var music = document.getElementById('background-music');

    if (music.muted) {
      music.muted = false; 
      document.querySelector('button').textContent = 'Mutar'
    } else {
      music.muted = true; 
      document.querySelector('button').textContent = 'Desmutar'; // Atualiza o texto do botão
    }
  }

function mostrarVideo() {
    document.getElementById('video-overlay').style.display = 'block';
  }
  
  function ocultarVideo() {
    document.getElementById('video-overlay').style.display = 'none';
  }

  function aparecerVideo(){
    document.getElementById('video-overlay-asa').style.display = 'block';
  }

  function esconderVideo(){
    document.getElementById('video-overlay-asa').style.display = 'none';
  }

  function mostrarCorrente(){
    document.getElementById('video-overlay-corrente').style.display = 'block';
  }

  function esconderCorrente(){
    document.getElementById('video-overlay-corrente').style.display = 'none';
  }

  function mostrarSMG(){
    document.getElementById('video-overlay-smg').style.display = 'block';
  }
  
  function esconderSMG(){
    document.getElementById('video-overlay-smg').style.display = 'none';
  }

  function mostrarEspingarda(){
    document.getElementById('video-overlay-espingarda').style.display = 'block';
  }
  
  function esconderEspingarda(){
    document.getElementById('video-overlay-espingarda').style.display = 'none';
  }

  function mostrarRifle(){
    document.getElementById('video-overlay-rifle').style.display = 'block';
  }
  
  function esconderRifle(){
    document.getElementById('video-overlay-rifle').style.display = 'none';
  }
