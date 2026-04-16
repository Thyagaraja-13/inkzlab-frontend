import { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState<any[]>(JSON.parse(localStorage.getItem("cart") || "[]"));

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const removeItem = (index: number) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <button onClick={() => removeItem(index)}>Remove</button>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>
    </div>
  );
}