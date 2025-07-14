# DoggyStyle E-Commerce
Nuestro objetivo: Tu mascota en todas partes!

## Autor
Proyecto realizado por Jorge Mario Lasagni (DNI 10894894).

## Fecha
Mayo 2025 PreEntrega
Julio 2025 Entrega Proyecto Final

## Descripción
DoggyStyle es una tienda online dedicada a la venta de productos para mascotas, incluyendo artículos personalizados como chapitas de identificación, con código QR para aviso de escaneo. La marca ya se encuentra en el mercado y este sitio web forma parte de un proyecto para el curso de FrontEnd de TalentoTech.

## Estructura del Proyecto
- `index.html`: Página principal del sitio.
- `pages/productos.html`: Sección con cards de productos cargadas desde un JSON.
- `pages/carrito.html`: Carrito de compras con resumen, edición y botón para finalizar compra.
- `pages/reseñas.html`: Sección con reseñas de clientes.
- `pages/contacto.html`: Formulario de contacto funcional con Formspree.
- `productos.json`: Catálogo de productos cargado dinámicamente desde archivo formato JSON.
- `script.js`: Lógica principal en JavaScript que gestiona el carrito.
- `styles/styles.css`: Estilos globales aplicados con CSS externo.
- `assets/`: Carpeta para incluir imágenes, videos e íconos.

## Características
- HTML semántico con etiquetas: `header`, `nav`, `main`, `section`, `footer`.
- Navegación interna entre páginas.
- Carrito de compras funcional implementado con JavaScript.
  - Permite agregar productos, incrementar o disminuir cantidad, eliminar ítems y vaciar el carrito.
  - Guarda el estado en `localStorage`.
  - Visualización del total por producto y total general.
  - Ícono de carrito actualizado dinámicamente con cantidad total.
- Envío del pedido por correo electrónico utilizando **Formspree**:
  - Se muestra ventana de confirmación al hacer clic en “Finalizar compra”.
  - El formulario se completa automáticamente con el resumen del pedido en un campo oculto.
  - El pedido se envía y luego el carrito se vacía.
- Formulario de contacto funcional con validaciones básicas.
- Diseño responsivo utilizando Flexbox, Grid y Media Queries.
- Integración de fuentes desde Google Fonts.
- Fondo con gradientes y estilos personalizados.
- Íconos de redes sociales en el footer enlazados a WhatsApp, Instagram, Facebook y X.
- Logo clickeable que redirige siempre a la página de inicio.

## Fortalezas
- Código limpio, estructurado y semántico.
- Diseño visual ¿atractivo? con paleta de colores (violeta, azul, rosa).
- Adaptable a distintos dispositivos.
- Funcionalidad real de e-commerce en el carrito.
- Preparado para expansión con multimedia y catálogo real.

## Áreas a mejorar
- Agregar contenido real a cada sección.
- Mejorar la validación del formulario, agregar campos para identificar características de quien contacta.
- Agregar páginas con otras funcionalidades como seguimiento de pedidos o login de usuarios.

¡Gracias por visitar DoggyStyle!
