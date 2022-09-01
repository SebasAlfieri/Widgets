bg = document.querySelector('#bg')
notesAnchor = document.querySelector('#notesAnchor')
buyBg = document.querySelector('.buyBg')


bg.addEventListener('click', () => {
  Swal.fire({
    title: '<strong>Quieres comprar Widget Notas?</strong>',
    icon: 'question',
    html:
      'El precio es de <b>$99.99</b>, ',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Obvio!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i> No gracias',

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Listo!', '', 'success'),
        notesAnchor.href = "./sections/notes.html"
      buyBg.style.display = "none"
      localStorage.setItem("notas", "comprado");
    }
  })
})

function compro() {
  if (localStorage.getItem("notas", "comprado")) {
    buyBg.style.display = "none";
    notesAnchor.href = "./sections/notes.html"
  }
}

compro()