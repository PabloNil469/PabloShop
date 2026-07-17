import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Checkout() {
  const [country, setCountry] = useState("Romania");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    postal: ""
  });

  useEffect(() => {
    emailjs.init("tnU3-BNY8EL2ab5yC");
  }, []);

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit() {
    emailjs.send(
      "service_cnf0uzt",
      "template_xobdi5i",
      {
        product: "Pablo Hoodie",
        name: form.name,
        email: form.email,
        phone: form.phone,
        city: form.city,
        address: form.address,
        postal: form.postal,
        country: country
      }
    )
    .then(() => {
      alert("Order sent successfully!");
    })
    .catch((err) => {
      console.log(err);
      alert("Failed to send order");
    });
  }

  return (
    <div style={styles.body}>

    <header style={styles.header}>
    PABLO MERCH
    </header>

    <div style={styles.container}>

    <h1>Checkout</h1>

    <div style={styles.box}>
    <img src="/bluza-pablo.png" style={styles.img} />
    <p>Pablo Hoodie</p>
    <p style={styles.price}>$299</p>
    </div>

    {/* COUNTRY */}
    <select
    style={styles.input}
    value={country}
    onChange={(e) => setCountry(e.target.value)}
    >
    <option>Romania</option>
    <option>Germany</option>
    <option>Italy</option>
    <option>France</option>
    <option>USA</option>
    </select>

    {/* FORM */}
    <input name="name" placeholder="Full Name" style={styles.input} onChange={update} />
    <input name="email" placeholder="Email (optional)" style={styles.input} onChange={update} />
    <input name="phone" placeholder="Phone number" style={styles.input} onChange={update} />
    <input name="city" placeholder="City" style={styles.input} onChange={update} />
    <input name="address" placeholder="Street address, number" style={styles.input} onChange={update} />
    <input name="postal" placeholder="Postal code" style={styles.input} onChange={update} />

    <button style={styles.btn} onClick={submit}>
    PLACE ORDER
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

  box: {
    background: "#111",
    padding: "20px",
    borderRadius: "15px",
    width: "280px",
    margin: "20px auto"
  },

  img: {
    width: "100%",
    borderRadius: "10px"
  },

  price: {
    color: "white",
    fontSize: "20px"
  },

  input: {
    display: "block",
    margin: "10px auto",
    padding: "10px",
    width: "260px",
    borderRadius: "8px",
    border: "none",
    outline: "none"
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
