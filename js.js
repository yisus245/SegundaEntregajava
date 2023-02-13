const productos = [
    { id: 1, nombre: "Camisa roja", precio: 25 },
    { id: 2, nombre: "Pantalón azul", precio: 35 },
    { id: 3, nombre: "Vestido negro", precio: 45 },
    { id: 4, nombre: "Sudadera gris", precio: 55 },
    { id: 5, nombre: "Zapatos negros", precio: 65 },
    { id: 6, nombre: "Bolsa marrón", precio: 12 },
    { id: 7, nombre: "Camiseta blanca", precio: 43 },
    { id: 8, nombre: "Jeans azules", precio: 45 },
    { id: 9, nombre: "Abrigo gris", precio: 125 },
    { id: 10, nombre: "Botas marrones", precio: 85 }
  ];
  
  const tablaProductos = document.getElementById('tablaProductos')
  const productoHead = document.getElementById('producto_head')
  
  productoHead.className = 'background-table'
  productos.forEach(function(producto) {
    let fila = document.createElement('tr')
    let celdaId = document.createElement('td')
    let celdaNombre = document.createElement('td')
    let celdaPrecio = document.createElement('td')
  
    celdaId.textContent = producto.id
    celdaNombre.textContent = producto.nombre
    celdaPrecio.textContent = producto.precio
  
    fila.append(celdaId)
    fila.append(celdaNombre)
    fila.append(celdaPrecio)
  
    tablaProductos.append(fila)
  
  })

//Declaracion de botones//
const btn = document.getElementById('btn-button')
const btneliminar = document.getElementById('btn-eliminar')
const btnbuscar = document.getElementById('btn-buscar')
const btnactulizar = document.getElementById('btn-actualizar')
// inicio del evento click
//FUNCION DE AGREGAR
  btn.addEventListener('click', (e) =>{
      e.preventDefault()
      //Declaracion de variables--DOM
      let codProducto = document.getElementById('codProducto').value
      let newProducto = document.getElementById('newProducto').value
      let newPrecio = document.getElementById('newPrecio').value
      // PUSH--Agregacion de prodcutos al Arrive
      productos.push({id: codProducto , nombre: newProducto , precio: newPrecio})
      console.log(productos);
      alert('PRODUCTO ' + newProducto + ' FUE AGREGADO EXITOSAMENTE')
      document.getElementById('codProducto').value = ''
      document.getElementById('newProducto').value = ''
      document.getElementById('newPrecio').value = ''
    //  // Inicio de la tabla de  Productos//
  productoHead.className = 'background-table'
  productos.forEach(function(producto) {
    let fila = document.createElement('tr')
    let celdaId = document.createElement('td')
    let celdaNombre = document.createElement('td')
    let celdaPrecio = document.createElement('td')
    celdaId.textContent = producto.id
    celdaNombre.textContent = producto.nombre
    celdaPrecio.textContent = producto.precio
    fila.append(celdaId)
    fila.append(celdaNombre)
    fila.append(celdaPrecio)
    tablaProductos.append(fila)
      })
    //  //Fin de la tabla de Productos//
   })
//FUNCION DE ELIMINAR
btneliminar.addEventListener('click', (e) =>{
    e.preventDefault()
    let codProducto = document.getElementById('codProducto').value
    let newProducto = document.getElementById('newProducto').value
    let newPrecio = document.getElementById('newPrecio').value
    let elimi = productos.pop({id: codProducto , nombre: newProducto , precio: newPrecio})
    console.log(elimi.nombre);
    //console.log('El elemento ' + elimi.nombre + ' fue eliminado del Arryve');
    alert('El elemento ' + elimi.nombre + ' fue eliminado del Arryve')
    document.getElementById('codProducto').value = ''
    document.getElementById('newProducto').value = ''
    document.getElementById('newPrecio').value = ''

})
//FUNCION DE BUSQUEDA
btnbuscar.addEventListener('click', (e) =>{
    e.preventDefault()
    function esCereza(fruta) {
      let newProducto = document.getElementById('newProducto').value
      return fruta.nombre === newProducto
    }
    console.log(productos.find(esCereza));
    alert('EL elemento ' + productos.find(esCereza) + ' fue econtrado en el arrive')
})

btnactulizar.addEventListener('click', (e) =>{
  e.preventDefault()
  let actua = productos.splice()

})
 //Fin del evento click//