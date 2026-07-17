export default function Home() {
  return (
    <div style={styles.body}>

    <header style={styles.header}>
    PABLO MERCH
    </header>

    <section style={styles.hero}>
    <h1 style={styles.heroH1}>Luxury Streetwear</h1>
    <p style={styles.heroP}>
    Premium hoodies, pants and full sets by Pablo.
    </p>

    <button
    style={styles.btn}
    onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
    >
    View Products
    </button>
    </section>

    <section style={styles.products}>

    {/* HOODIE */}
    <div style={styles.card} onClick={() => window.location.href="/product?item=hoodie"}>
    <img src="/bluza-pablo.png" style={styles.img} />
    <h2>Pablo Hoodie</h2>
    <p style={styles.price}>€189</p>
    <button style={styles.btn}>Buy</button>
    </div>

    {/* PANTS */}
    <div style={styles.card} onClick={() => window.location.href="/product?item=pants"}>
    <img src="/pantaloni-pablo.png" style={styles.img} />
    <h2>Pablo Pants</h2>
    <p style={styles.price}>€179</p>
    <button style={styles.btn}>Buy</button>
    </div>

    {/* SET */}
    <div style={styles.card} onClick={() => window.location.href="/product?item=set"}>
    <img src="/set-pablo.png" style={styles.img} />
    <h2>Pablo Full Set</h2>
    <p style={styles.price}>€319</p>
    <button style={styles.btn}>Buy</button>
    </div>

    </section>

    <footer style={styles.footer}>
    © 2026 Pablo Merch - All rights reserved
    </footer>

    </div>
  );
}

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    background: "#000",
    color: "white",
    textAlign: "center"
  },

  header: {
    padding: "30px",
    fontSize: "32px",
    fontWeight: "bold",
    letterSpacing: "3px",
    borderBottom: "1px solid #333"
  },

  hero: {
    padding: "50px 20px"
  },

  heroH1: {
    fontSize: "42px",
    marginBottom: "15px"
  },

  heroP: {
    color: "#bbb",
    marginBottom: "30px"
  },

  btn: {
    background: "white",
    color: "black",
    padding: "12px 25px",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    cursor: "pointer"
  },

  products: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "40px 20px"
  },

  card: {
    background: "#111",
    borderRadius: "15px",
    padding: "20px",
    width: "280px",
    boxShadow: "0 0 15px rgba(255,255,255,0.1)",
    cursor: "pointer"
  },

  img: {
    width: "100%",
    borderRadius: "10px"
  },

  price: {
    fontSize: "22px",
    marginBottom: "15px"
  },

  footer: {
    padding: "20px",
    borderTop: "1px solid #333",
    color: "#888"
  }
};
