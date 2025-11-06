# 🛍️ FakeStore Catalog (fakestore-react)

Una aplicación web moderna desarrollada con **React** y **Vite** que consume la API pública **FakeStore API**.  
Simula un pequeño catálogo de tienda online, mostrando productos con su nombre, precio, imagen y categoría.  

El proyecto cuenta con una interfaz limpia, navegación fluida y una estructura de código clara y escalable.

---

## 🔗 Despliegue y Video

- **Deploy en Netlify:** https://fakestore-o3.netlify.app/
- **Video Demostrativo (YouTube):** 

---

## ✨ Características Principales

- **🏠 Página Home:**  
  Presenta un *hero* con descripción del sitio y una sección de **productos más vendidos** (los primeros 4 productos obtenidos desde la API).  

- **🛒 Página Products:**  
  Muestra todo el catálogo de productos, cada uno con su imagen, nombre, precio y categoría, dispuestos en una grilla responsiva.  

- **🔗 Navegación Fluida:**  
  Implementada con **React Router DOM**, permitiendo cambiar entre rutas sin recargar la página.  

- **🎨 Diseño Moderno y Limpio:**  
  Estilos hechos a mano con **CSS tradicional**, sin frameworks externos.  
  Incluye sombras suaves, colores neutros y animaciones al pasar el cursor sobre los productos.  

- **⚙️ Código Escalable:**  
  Estructura organizada en componentes, separación de responsabilidades y uso de hooks (`useState`, `useEffect`) para el manejo de datos.

---

## 🛠️ Tecnologías Utilizadas

- ⚛️ **React** — Librería principal para la interfaz de usuario.  
- ⚙️ **Vite** — Herramienta de bundling y servidor de desarrollo rápido.  
- 🌐 **React Router DOM** — Navegación entre rutas internas.  
- 💾 **Fetch API** — Para el consumo de datos desde [FakeStore API](https://fakestoreapi.com/).  
- 🎨 **CSS Puro** — Diseño y responsividad sin dependencias externas.

---

## 🧱 Estructura del Proyecto

```
fakestore-react/
 ├── src/
 │    ├── components/
 │    │   └── Navbar.jsx
 │    ├── pages/
 │    │   ├── Home.jsx
 │    │   └── Products.jsx
 │    ├── App.jsx
 │    ├── main.jsx
 │    └── index.css
 ├── package.json
 ├── vite.config.js
 └── README.md
```

---

## 🧩 Funcionalidades Implementadas

| Funcionalidad | Descripción | Estado |
|----------------|--------------|--------|
| 🛠️ Configuración inicial | Proyecto creado con Vite y estructura base (componentes, páginas y estilos). | ✅ |
| 🌐 Consumo de API pública | Obtiene productos desde `https://fakestoreapi.com/products`. | ✅ |
| 🏠 Ruta `/` (Home) | Hero con nombre del proyecto, descripción y productos destacados. | ✅ |
| 📜 Ruta `/products` | Muestra catálogo completo con 3 propiedades por producto. | ✅ |
| 🔗 Navegación | React Router DOM para moverse entre páginas sin recargar. | ✅ |
| 🎨 Estilos | CSS personalizado y diseño responsivo. | ✅ |

---

## 🏁 Pasos para Ejecutar Localmente

Sigue estos pasos para correr el proyecto en tu entorno local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tuusuario/fakestore-react.git
   ```

2. **Ingresar a la carpeta del proyecto:**
   ```bash
   cd fakestore-react
   ```

3. **Instalar dependencias (asegúrate de tener Node.js instalado):**
   ```bash
   npm install
   ```

4. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador:**
   ```
   http://localhost:5173/
   ```

---


## 🎥 Video Demostrativo

El video (1–2 minutos) muestra:
- Navegación entre rutas (Home y Products).  
- Carga y renderizado de productos desde la API.  
- Código fuente principal (componentes y estilos).  
- Repositorio GitHub y deploy en Vercel funcionando.  

🎬 [Ver Video en YouTube](https://youtube.com/xxxxxxxxx)

---

## 👩‍💻 Autora

**María Fernanda Moya Condori**  

