import { useState } from "react";

export default function Product() {
  const products = {
    hoodie: {
      name: "Pablo Hoodie",
      price: 189,
      img: "/bluza-pablo.png",
      desc: "Premium oversized hoodie, thick material, high quality print."
    },
    pants: {
      name: "Pablo Pants",
      price: 179,
      img: "/pantaloni-pablo.png",
      desc: "Streetwear oversized pants, maximum comfort, modern fit."
    },
    set: {
      name: "Pablo Full Set",
      price: 319,
      img: "/set-pablo.png",
      desc: "Complete hoodie + pants set, premium streetwear style."
    }
  };

  const [selected, setSelected] = useState("hoodie");

  const product = products[selected];

  return (
    <div style={styles.body}>

    <header style={styles.header}>
    PABLO MERCH
    </header>

    <div style={styles.container}>

    {/* PRODUCT SELECTOR */}
    <select
    style={styles.select}
    value={selected}
    onChange={(e) => setSelected(e.target.value)}
    >
    <option value="hoodie">Hoodie</option>
    <option value="pants">Pants</option>
    <option value="set">Full Set</option>
    </select>

    {/* IMAGE */}
    <img src={product.img} style={styles.img} />

    {/* NAME */}
    <h1 style={styles.title}>{product.name}</h1>

    {/* DESCRIPTION */}
    <p style={styles.desc}>{product.desc}</p>

    {/* PRICE */}
    <p style={styles.price}>€{product.price}</p>

    {/* BUTTON */}
    <button
    style={styles.btn}
    onClick={() => window.location.href = "/checkout"}
    >
    BUY NOW
    </button>

    </div>

    </div>
  );
}

const styles = {
  body: {
    fontFamily: "Arial",
    background: "#000",
    color: "white",
    minHeight: "100vh",
    textAlign: "center"
  },

  header: {
    padding: "30px",
    fontSize: "32px",
    fontWeight: "bold",
    letterSpacing: "3px",
    borderBottom: "1px solid #333"
  },

  container: {
    padding: "40px 20px"
  },

  select: {
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "20px",
    border: "none"
  },

  img: {
    width: "320px",
    borderRadius: "15px",
    boxShadow: "0 0 15px rgba(255,255,255,0.1)"
  },

  title: {
    marginTop: "20px"
  },

  desc: {
    color: "#bbb",
    marginTop: "10px"
  },

  price: {
    fontSize: "24px",
    marginTop: "15px"
  },

  btn: {
    marginTop: "20px",
    background: "white",
    color: "black",
    padding: "12px 25px",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    cursor: "pointer"
  }
};
