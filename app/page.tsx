const PRODUCTS = [
  { id: 1, name: "Widget Pro", price: 29.99, description: "The best widget money can buy" },
  { id: 2, name: "Gadget Plus", price: 49.99, description: "Next-gen gadget for power users" },
  { id: 3, name: "Doohickey Max", price: 19.99, description: "Essential doohickey for everyday use" },
];

export default function StorePage() {
  return (
    <main style={{ maxWidth: 900, margin: "40px auto", fontFamily: "system-ui", padding: "0 20px" }}>
      <header style={{ borderBottom: "1px solid #eee", paddingBottom: 16, marginBottom: 32 }}>
        <h1>Dogfood Store</h1>
        <nav style={{ display: "flex", gap: 16 }}>
          <a href="/">Home</a>
          <a href="/cart">Cart (0)</a>
        </nav>
      </header>
      <section>
        <h2>Featured Products</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {PRODUCTS.map(p => (
            <div key={p.id} style={{ border: "1px solid #eee", borderRadius: 8, padding: 16 }}>
              <div style={{ height: 120, background: "#f5f5f5", borderRadius: 4, marginBottom: 12, display:"flex", alignItems:"center", justifyContent:"center", color:"#999" }}>
                Image
              </div>
              <h3 style={{ margin: "0 0 4px" }}>{p.name}</h3>
              <p style={{ color: "#666", fontSize: 14, margin: "0 0 12px" }}>{p.description}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: "bold", fontSize: 18 }}>${p.price}</span>
                <button style={{ padding: "6px 16px", background: "#0070f3", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer" }}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
