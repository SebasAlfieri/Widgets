scissor = document.querySelector('#scissor')
rock = document.querySelector('#rock')
papper = document.querySelector('#papper')
bscissor = document.querySelector('#bscissor')
brock = document.querySelector('#brock')
bpapper = document.querySelector('#bpapper')
mano1 = document.querySelector('#mano1')
mano2 = document.querySelector('#mano2')
x = 0
scoreWin = 0
scoreLose = 0

function toastScore() {
Toastify({
  text: "Victorias: " + scoreWin + "\n Derrotas: " + scoreLose,
  duration: 3000
  }).showToast();
}

function manoReset() {
  mano1.style.backgroundImage = "url(../img/rock.png)"
  mano2.style.backgroundImage = "url(../img/rock.png)"
  bscissor.style.display = "flex"
  brock.style.display = "flex"
  bpapper.style.display = "flex"
}

function buttonDissapear() {
  bscissor.style.display = "none"
  brock.style.display = "none"
  bpapper.style.display = "none"
}

function conteo() {
  mano1.style.backgroundImage = "url(../img/mano1.png)"
  mano2.style.backgroundImage = "url(../img/mano1.png)"

  setTimeout(() => {
    mano1.style.backgroundImage = "url(../img/scissors.png)"
    mano2.style.backgroundImage = "url(../img/scissors.png)"

  }, 500);

  setTimeout(() => {
    mano1.style.backgroundImage = "url(../img/mano3.png)"
    mano2.style.backgroundImage = "url(../img/mano3.png)"
  }, 1000);
}

function alertWin() {
  scoreWin ++
  toastScore()
  Swal.fire({
    title: 'Ganaste!',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'Seguir Jugando',
    denyButtonText: `Salir`,
  }).then((result) => {
    if (result.isConfirmed) {
      manoReset()
    } else if (result.isDenied) {
      location.href = "../index.html";
    }
  })
}

function alertLose() {
  scoreLose ++
  toastScore()
  Swal.fire({
    title: 'Perdiste :(',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'Seguir Jugando',
    denyButtonText: `Sacame de aca!!!`,
  }).then((result) => {
    if (result.isConfirmed) {
      manoReset()
    } else if (result.isDenied) {
      location.href = "../index.html";
    }
  })
}

function alertTie() {
  toastScore()
  Swal.fire({
    title: 'Empate',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'Seguir Jugando',
    denyButtonText: `Salir`,
  }).then((result) => {
    if (result.isConfirmed) {
      manoReset()
    } else if (result.isDenied) {
      location.href = "../index.html";
    }
  })
}

scissor.addEventListener('click', () => {
  var x = Math.floor(Math.random() * 3);
  buttonDissapear()
  conteo()

  setTimeout(() => {
    console.log(x)
    if (x == 1) {
      mano1.style.backgroundImage = "url(../img/scissors.png)"
      mano2.style.backgroundImage = "url(../img/scissors.png)"
      setTimeout(() => {
        alertTie()
      }, 500);
    } else if (x == 2) {
      mano1.style.backgroundImage = "url(../img/scissors.png)"
      mano2.style.backgroundImage = "url(../img/papper.png)"
      setTimeout(() => {
        alertWin()
      }, 500);
    } else if (x == 0) {
      mano1.style.backgroundImage = "url(../img/scissors.png)"
      mano2.style.backgroundImage = "url(../img/rock.png)"
      setTimeout(() => {
        alertLose()
      }, 500);
    }
  }, 1500);
})


papper.addEventListener('click', () => {
  var x = Math.floor(Math.random() * 3);
  buttonDissapear()
  conteo()
  
  setTimeout(() => {
    console.log(x)
    if (x == 1) {
      mano1.style.backgroundImage = "url(../img/papper.png)"
      mano2.style.backgroundImage = "url(../img/scissors.png)"
      setTimeout(() => {
        alertLose()
      }, 500);
    } else if (x == 2) {
      mano1.style.backgroundImage = "url(../img/papper.png)"
      mano2.style.backgroundImage = "url(../img/papper.png)"
      setTimeout(() => {
        alertTie()
      }, 500);
    } else if (x == 0) {
      mano1.style.backgroundImage = "url(../img/papper.png)"
      mano2.style.backgroundImage = "url(../img/rock.png)"
      setTimeout(() => {
        alertWin()
      }, 500);
    }
  }, 1500);
})

rock.addEventListener('click', () => {
  var x = Math.floor(Math.random() * 3);
  buttonDissapear()
  conteo()
  
  setTimeout(() => {
    console.log(x)
    if (x == 1) {
      mano1.style.backgroundImage = "url(../img/rock.png)"
      mano2.style.backgroundImage = "url(../img/scissors.png)"
      setTimeout(() => {
        alertWin()
      }, 500);
    } else if (x == 2) {
      mano1.style.backgroundImage = "url(../img/rock.png)"
      mano2.style.backgroundImage = "url(../img/papper.png)"
      setTimeout(() => {
        alertLose()
      }, 500);
    } else if (x == 0) {
      mano1.style.backgroundImage = "url(../img/rock.png)"
      mano2.style.backgroundImage = "url(../img/rock.png)"
      setTimeout(() => {
        alertTie()
      }, 500);
    }
  }, 1500);
})
