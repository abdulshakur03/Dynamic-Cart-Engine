import itemData from "../../data";
import { useState } from "react";
export default function Products() {
  const [items, setItems] = useState(itemData);

  const [quantity, setQuantity] = useState({});

  const addQuantity = (id, qty) => {
    setQuantity((prev) => ({ ...prev, [id]: (prev[id] ?? qty) + 1 }));
  };

  const removeQuantity = (id, qty) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] ?? qty) - 1),
    }));
  };
  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setItems(() => []);
  };

  const grandTotal = items.reduce((sum, item) => {
    const count = quantity[item.id] ?? item.quantity;
    return sum + item.unitPrice * count;
  }, 0);
  return (
    <div style={styles.container}>
      <div style={styles.tops}>
        <div className="topsRight">
          <h2 style={styles.topper}>Cart</h2>
          <p style={styles.subTopper}>({items.length} Products)</p>
        </div>
        <div style={styles.topsRight} onClick={() => handleClearCart()}>
          ✕ Clear cart
        </div>
      </div>
      <div style={styles.label}>
        <p>Product</p>
        <p>Count</p>
        <p>Price</p>
      </div>
      <ul style={styles.list}>
        {items.map((item) => {
          const currentCount = quantity[item.id] ?? item.quantity;
          const totalPrice = item.unitPrice * currentCount;

          return (
            <li key={item.id} style={styles.itemRow}>
              {/* Image Container with Styled Image */}

              <div style={styles.imageWrapper}>
                <img src={item.image} alt={item.name} style={styles.image} />
              </div>

              {/* Product Info */}
              <div style={styles.productInfo}>
                <span style={styles.productName}>{item.name}</span>
                <span style={styles.unitPrice}>${item.unitPrice} each</span>
              </div>

              {/* Quantity Controls */}
              <div style={styles.quantityControls}>
                <button
                  style={styles.qtyBtn}
                  onClick={() => removeQuantity(item.id, item.quantity)}
                >
                  -
                </button>
                <span style={styles.countText}>{currentCount}</span>
                <button
                  style={styles.qtyBtn}
                  onClick={() => addQuantity(item.id, item.quantity)}
                >
                  +
                </button>
              </div>

              {/* Total Price */}
              <div style={styles.price}>${totalPrice.toFixed(2)}</div>

              {/* Delete Button */}
              <button
                style={styles.deleteBtn}
                onClick={() => handleDelete(item.id)}
              >
                ✕
              </button>
            </li>
          );
        })}
      </ul>
      <div style={styles.totalContainer}>
        <span>Grand Total:</span>
        <span style={styles.grandTotalText}>${grandTotal.toFixed()}</span>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "750px",
    margin: "20px auto",
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  label: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: "bolder",
  },
  tops: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topsRight: { color: "red", cursor: "pointer" },
  topper: {
    display: "inline",
    marginRight: "10px",
  },
  subTopper: {
    display: "inline",
    color: "#6b7280",
    fontSize: "14px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  itemRow: {
    display: "flex",
    alignItems: "center",
    justify: "space-between",
    padding: "12px 16px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },
  // IMAGE STYLING:
  imageWrapper: {
    width: "64px",
    height: "64px",
    borderRadius: "8px",
    backgroundColor: "#f3f4f6",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Ensures image isn't stretched or warped
    display: "block",
  },
  productInfo: {
    flex: 1,
    marginLeft: "16px",
    marginRight: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  productName: {
    fontWeight: "600",
    color: "#111827",
    fontSize: "15px",
  },
  unitPrice: {
    fontSize: "13px",
    color: "#6b7280",
  },
  quantityControls: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#f9fafb",
    padding: "4px 8px",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
  },
  qtyBtn: {
    width: "28px",
    height: "28px",
    border: "1px solid #d1d5db",
    backgroundColor: "#ffffff",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  countText: {
    width: "24px",
    textAlign: "center",
    fontWeight: "600",
    fontSize: "14px",
  },
  price: {
    fontWeight: "700",
    fontSize: "16px",
    color: "#059669",
    width: "80px",
    textAlign: "right",
    marginLeft: "16px",
  },
  deleteBtn: {
    background: "none",
    border: "none",
    color: "red",
    fontSize: "16px",
    cursor: "pointer",
    padding: "8px",
    marginLeft: "12px",
  },
  totalContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
    padding: "16px",
    backgroundColor: "#f9fafb",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
    fontSize: "18px",
    fontWeight: "600",
  },
  grandTotalText: {
    color: "#059669",
    fontSize: "20px",
    fontWeight: "700",
  },
};
