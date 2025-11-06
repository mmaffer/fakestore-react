import { useEffect, useState } from "react";

export default function Home() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => setFeatured(data))
      .catch((error) => console.error("Error al obtener productos destacados:", error));
  }, []);

  return (
    <div className="container">
      <section className="hero">
        <h2 className="title">🛍️ FakeStore Catalog</h2>
        <p className="description">
          Bienvenido al catálogo de FakeStore, donde encontrarás productos increíbles con precios accesibles.
        </p>
        <p className="description small">
          Explora los más vendidos a continuación o navega por todos los productos desde el menú superior.
        </p>
      </section>

      <section className="featured">
        <h3 className="subtitle">🔥 Productos más vendidos</h3>
        <div className="grid">
          {featured.map((p) => (
            <div key={p.id} className="card">
              <img src={p.image} alt={p.title} />
              <h4>{p.title}</h4>
              <p className="price">${p.price}</p>
              <p className="category">{p.category}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
