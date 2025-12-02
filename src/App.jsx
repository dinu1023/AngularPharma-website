import React from "react";

const products = [
  {
    name: "REBGLAR DSR",
    code: "RG-001",
    pack: "10x10",
    division: "Gastro & Acid Peptic Disorders",
    image: "/rebglar.jpg",
  },
  {
    name: "ANGULAR - SP",
    code: "SP-002",
    pack: "10x10",
    division: "Ortho & Pain Management",
    image: "/angularsp.jpg",
  },
  {
    name: "MONTGLAR-LC",
    code: "MT-003",
    pack: "10x10",
    division: "Respiratory & Allergy",
    image: "/montglar.jpg",
  },
];

function App() {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Angular Pharma" className="h-10" />
            <h1 className="text-xl font-bold text-sky-700">
              Angular Pharmaceuticals
            </h1>
          </div>

          <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
            <a href="#home" className="hover:text-sky-700">Home</a>
            <a href="#products" className="hover:text-sky-700">Products</a>
            <a href="#contact" className="hover:text-sky-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-extrabold text-sky-700">Flagship Brands</h2>
      </section>

      {/* Product Cards */}
      <section
        id="products"
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {products.map((p, i) => (
          <article
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-xl duration-300 p-5"
          >
            <img
              src={p.image}
              alt={p.name}
              className="rounded-md h-52 w-full object-cover"
            />
            <h3 className="mt-4 text-xl font-bold text-gray-700">{p.name}</h3>
            <p className="text-gray-500 text-sm mt-1">
              Code: {p.code} • Pack: {p.pack}
            </p>
            <p className="text-gray-400 text-xs mt-1">{p.division}</p>

            <div className="flex justify-between mt-4">
              <button className="bg-gray-200 px-3 py-1 rounded">Details</button>
              <button className="bg-sky-600 px-3 py-1 text-white rounded">
                Verify
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        <div>
          <h2 className="text-3xl font-bold text-sky-700 mb-4">Get in Touch</h2>
          <p className="text-gray-600 leading-7">
            We work closely with hospitals, pharmacies, distributors and medical
            institutions to ensure timely access to essential formulations.
            Share your requirement and our team will connect with you shortly.
          </p>

          <div className="mt-6 space-y-2 text-gray-800">
            <p><strong>Email:</strong> angularpharmaceuticals@gmail.com</p>
            <p><strong>Location:</strong> Pl. No 59, Boduppal, Medipally,
               Hyderabad 500076, Telangana, INDIA</p>
          </div>
        </div>

        <div className="bg-white p-6 shadow-md rounded-xl">
          <input
            placeholder="Your Name"
            className="w-full border p-3 rounded mb-3"
          />
          <input
            placeholder="Your Email"
            className="w-full border p-3 rounded mb-3"
          />
          <input placeholder="Subject" className="w-full border p-3 rounded mb-3" />
          <textarea
            placeholder="Message"
            className="w-full border p-3 rounded h-32 mb-3"
          ></textarea>

          <button className="bg-sky-700 w-full text-white py-3 rounded-lg font-bold">
            Send Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Angular Pharmaceuticals | Designed for Dinu
      </footer>
    </div>
  );
}

export default App;
