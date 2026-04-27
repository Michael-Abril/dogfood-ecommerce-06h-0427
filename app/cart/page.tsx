export default function CartPage() {
  return (
    <main style={{ maxWidth: 600, margin: "40px auto", fontFamily: "system-ui", padding: "0 20px" }}>
      <h1>Your Cart</h1>
      <p style={{ color: "#666" }}>Your cart is empty.</p>
      <a href="/" style={{ color: "#0070f3" }}>← Continue Shopping</a>
      <div style={{ marginTop: 32, padding: 16, background: "#f9f9f9", borderRadius: 8 }}>
        <h3>Checkout (Payments Placeholder)</h3>
        <p style={{ color: "#999", fontSize: 14 }}>Payment processing integration coming soon.</p>
        <button disabled style={{ padding: "10px 24px", background: "#ccc", color: "#fff", border: "none", borderRadius: 6, cursor: "not-allowed" }}>
          Proceed to Checkout
        </button>
      </div>
    </main>
  );
}
