/*
# Created/Modified files during execution:
- carrito.js
*/

// Array para almacenar los productos en el carrito
let carrito = [];

// Tomamos referencias a elementos del DOM
const iconoCarrito = document.getElementById('icono-carrito');
const modalCarrito = document.getElementById('modal-carrito');
const cerrarModal = document.getElementById('cerrar-modal');
const contadorCarrito = document.getElementById('contador-carrito');
const contenidoCarrito = document.getElementById('contenido-carrito');

/**
 * Función que muestra la ventana modal del carrito
 */
function abrirCarrito() {
  modalCarrito.style.display = 'block';
  renderizarCarrito();
}

/**
 * Función que cierra la ventana modal del carrito
 */
function cerrarCarrito() {
  modalCarrito.style.display = 'none';
}

/**
 * Función que actualiza el número de productos en el icono del carrito
 */
function actualizarContadorCarrito() {
  contadorCarrito.textContent = carrito.length;
}

/**
 * Función que renderiza (dibuja) el contenido del carrito en la ventana modal
 */
function renderizarCarrito() {
  // Limpiamos el contenido previo
  contenidoCarrito.innerHTML = '';

  if (carrito.length === 0) {
    contenidoCarrito.innerHTML = '<p>El carrito está vacío.</p>';
    return;
  }

  // Creamos una lista de productos o cualquier estructura
  const lista = document.createElement('ul');

  carrito.forEach((producto, index) => {
    const li = document.createElement('li'); 
    li.textContent = `${producto.nombre} - Cantidad: ${producto.cantidad}`;
    lista.appendChild(li);
  });

  contenidoCarrito.appendChild(lista);
}

/**
 * Función para agregar un producto al carrito
 * @param {Object} producto - Objeto con nombre, precio, id, etc.
 */
function agregarAlCarrito(producto) {
  // Verificar si el producto ya existe en el carrito
  const productoExistente = carrito.find(item => item.id === producto.id);

  if (productoExistente) {
    // Si ya existe, aumentamos la cantidad
    productoExistente.cantidad += 1;
  } else {
    // Si no existe, lo agregamos con cantidad 1
    carrito.push({ ...producto, cantidad: 1 });
  }

  // Actualizamos el contador y el almacenamiento (si deseas)
  actualizarContadorCarrito();
}

// Event Listeners para abrir/cerrar modal
iconoCarrito.addEventListener('click', abrirCarrito);
cerrarModal.addEventListener('click', cerrarCarrito);

// Si quieres cerrar el modal al hacer clic fuera de él
window.addEventListener('click', function(event) {
  if (event.target === modalCarrito) {
    cerrarCarrito();
  }
});

/* 
Ejemplo de uso:
En tu HTML, para cada producto,
puedes tener un botón que llame a 'agregarAlCarrito' de esta forma:

<button onclick="agregarAlCarrito({id: 1, nombre: 'Cerveza Corona'})">
  Agregar al Carrito
</button>

... y así con cada producto, cambiando el ID, nombre, etc.
*/

/**
