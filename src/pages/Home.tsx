import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Inkzlab Printing</h1>

      <div className="grid">
        {products.length === 0 && <p>Loading...</p>}

        {products.map((p) => (
          <div className="card" key={p._id}>
            <img
              src={
                p.name.toLowerCase().includes("mug")
                  ? "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                  : "https://cdn-icons-png.flaticon.com/512/892/892458.png"
              }
              alt={p.name}
            />

            <h3>{p.name}</h3>
            <p>₹{p.price}</p>

           <button
  onClick={() => {
    const existing = JSON.parse(localStorage.getItem("cart") || "[]");
    existing.push(p);
    localStorage.setItem("cart", JSON.stringify(existing));
    alert("Added to cart!");
  }}
>
  Add to Cart
</button>
          </div>
        ))}
      </div>
    </div>
  );
}