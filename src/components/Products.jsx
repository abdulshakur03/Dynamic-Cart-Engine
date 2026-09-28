import itemData from "../../data";
import { useState } from "react";
export default function Products() {
  const [quantity, setQuantity] = useState({});

  const addQuantity = (count, qty) => {
    setQuantity((prev) => ({ ...prev, [count]: (prev[count] ?? qty) + 1 }));
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <ul>
        {itemData.map((item) => (
          <li key={item.id}>
            <img src="./" alt={item.name} />
            <button>-</button>
            <p> {quantity[item.id ?? item.quantity]}</p>
            <button onClick={() => addQuantity(item.id, item.quantity)}>
              +
            </button>
            <div className="price">${item.unitPrice}</div>
            <button>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
