
objetos = document.querySelector("#objetos");
precios = document.querySelector("#precios");
cantidades = document.querySelector("#cantidades");
agregar = document.querySelector("#agregar");
list = document.querySelector(".list")
valorMostrar = document.querySelector('#valorMostrar')
totalValorSuma = 0

agregar.addEventListener('click',()=>{
  nuevo ()
})

class producto {
  constructor(nombre,precio,cantidad){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.total = this.precio * this.cantidad;
    this.info = `voy a comprar ${this.nombre}, sale $${this.precio} cada una y voy a comprar ${this.cantidad}`;
  }
  crearCaja (){
    const listCreate = `
    <div class="productos">
      <div class="pNombres">
        <p>Producto:</p>
        <p>${this.nombre}</p>
      </div>
      <div class="pPrecio">
        <p>Precio c/u:</p>
        <p>${this.precio}</p>
      </div>
      <div class="pCantidad">
        <p>Cantidad:</p>
        <p>${this.cantidad}</p>
      </div>
      <div class="pTotal">
        <p>Valor total: </p>
        <p>${this.total}</p>
      </div>
    </div>`
    list.innerHTML += listCreate
  }
  totale(){
    totalValorSuma = this.total + totalValorSuma
    valorMostrar.innerText = "$ " + totalValorSuma
  }
}

function nuevo () {
  let objeto = new producto (objetos.value,precios.value,cantidades.value)
  objeto.crearCaja()
  objeto.totale()
}

