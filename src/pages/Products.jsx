import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, []);

  return (
    <div className="container">
      <h2 className="title">🛒 Catálogo de Productos</h2>
      <p className="description">
        Explora todos los productos disponibles con su precio, categoría e imagen.
      </p>

      <div className="grid">
        {products.map((p) => (
          <div key={p.id} className="card">
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p className="price">${p.price}</p>
            <p className="category">{p.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
