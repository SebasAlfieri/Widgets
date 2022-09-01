deleteAll = document.querySelector('#deleteAll')
notesGrid = document.querySelector('#notesGrid')
n1 =  document.querySelector('.n1')
n2 =  document.querySelector('.n2')
n3 =  document.querySelector('.n3')
n4 =  document.querySelector('.n4')
n5 =  document.querySelector('.n5')
n6 =  document.querySelector('.n6')
n7 =  document.querySelector('.n7')
n8 =  document.querySelector('.n8')
n9 =  document.querySelector('.n9')
n10 =  document.querySelector('.n10')

deleteAll.addEventListener('click',()=> {

  localStorage.setItem("n1", "Nota 1");
  localStorage.setItem("n2", "Nota 2");
  localStorage.setItem("n3", "Nota 3");
  localStorage.setItem("n4", "Nota 4");
  localStorage.setItem("n5", "Nota 5");
  localStorage.setItem("n6", "Nota 6");
  localStorage.setItem("n7", "Nota 7");
  localStorage.setItem("n8", "Nota 8");
  localStorage.setItem("n9", "Nota 9");
  localStorage.setItem("n10", "Nota 10");


location.reload();

})
n1.addEventListener('click', ()=>{
  prueba = n1
  crear()
})

n2.addEventListener('click', ()=>{
  prueba = n2
  crear()
})

n3.addEventListener('click', ()=>{
  prueba = n3
  crear()
})

n4.addEventListener('click', ()=>{
  prueba = n4
  crear()
})

n5.addEventListener('click', ()=>{
  prueba = n5
  crear()
})

n6.addEventListener('click', ()=>{
  prueba = n6
  crear()
})

n7.addEventListener('click', ()=>{
  prueba = n7
  crear()
})

n8.addEventListener('click', ()=>{
  prueba = n8
  crear()
})

n9.addEventListener('click', ()=>{
  prueba = n9
  crear()
})

n10.addEventListener('click', ()=>{
  prueba = n10
  crear()
})



async function crear (){
  const { value: text } = await Swal.fire({
    input: 'textarea',
    inputLabel: 'Nota',
    inputPlaceholder: 'Escriba su nota aquí...',
    inputAttributes: {
      'aria-label': 'Escriba su nota aquí'
    },
    showCancelButton: true
  })
  
  if (text) {
    prueba.innerText = text
  }
  if (prueba == n1) {
    localStorage.setItem("n1", text);
  }
  if (prueba == n2) {
    localStorage.setItem("n2", text);
  }
  if (prueba == n3) {
    localStorage.setItem("n3", text);
  }
  if (prueba == n4) {
    localStorage.setItem("n4", text);
  }
  if (prueba == n5) {
    localStorage.setItem("n5", text);
  }
  if (prueba == n6) {
    localStorage.setItem("n6", text);
  }
  if (prueba == n7) {
    localStorage.setItem("n7", text);
  }
  if (prueba == n8) {
    localStorage.setItem("n8", text);
  }
  if (prueba == n9) {
    localStorage.setItem("n9", text);
  }
  if (prueba == n10) {
    localStorage.setItem("n10", text);
  }

}




function getNotes(){
  console.log(localStorage.getItem("n1"))
  n1.innerText = localStorage.getItem("n1");
  n2.innerText = localStorage.getItem("n2");
  n3.innerText = localStorage.getItem("n3");
  n4.innerText = localStorage.getItem("n4");
  n5.innerText = localStorage.getItem("n5");
  n6.innerText = localStorage.getItem("n6");
  n7.innerText = localStorage.getItem("n7");
  n8.innerText = localStorage.getItem("n8");
  n9.innerText = localStorage.getItem("n9");
  n10.innerText = localStorage.getItem("n10");
  
}

getNotes()
