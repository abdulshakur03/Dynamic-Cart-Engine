export default function Nav() {
  return (
    <div style={styles.navContainer}>
      {/* Breadcrumb Steps */}
      <div style={styles.breadcrumbGroup}>
        <p style={styles.step}>
          <input type="radio" name="step" id="cart" style={styles.radio} defaultChecked />
          <label htmlFor="cart" style={styles.label}>Cart</label>
        </p>
        <p style={styles.separator}>&gt;</p>
        <p style={styles.step}>
          <input type="radio" name="step" id="checkout" style={styles.radio} />
          <label htmlFor="checkout" style={styles.label}>Checkout</label>
        </p>
        <p style={styles.separator}>&gt;</p>
        <p style={styles.step}>
          <input type="radio" name="step" id="payout" style={styles.radio} />
          <label htmlFor="payout" style={styles.label}>Payout</label>
        </p>
      </div>

      {/* Action Icons */}
      <div style={styles.iconsGroup}>
        <span style={styles.icon}>🔍</span>
        <span style={styles.icon}>🛍️</span>
        <span style={styles.icon}>👤</span>
      </div>
    </div>
  );
}

const styles = {
  navContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 24px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  breadcrumbGroup: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  step: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    margin: 0,
    fontSize: "14px",
    fontWeight: "500",
    color: "#374151",
  },
  radio: {
    cursor: "pointer",
    accentColor: "#2563eb",
    margin: 0,
  },
  label: {
    cursor: "pointer",
  },
  separator: {
    margin: 0,
    color: "#9ca3af",
    fontSize: "14px",
    fontWeight: "600",
  },
  iconsGroup: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  icon: {
    fontSize: "18px",
    cursor: "pointer",
    userSelect: "none",
  },
};