import React, { useState, useEffect, useRef } from "react";

const products = [
  {
    name: "Rebglar DSR",
    code: "RG-001",
    pack: "10x10",
    image: "/rebglar.jpg",
    division: "Gastro & Acid Peptic Disorders",
  },
  {
    name: "ANGULAR - SP",
    code: "SP-002",
    pack: "10x10",
    image: "/angularsp.jpg",
    division: "Ortho & Pain Management",
  },
  {
    name: "MONTGLAR-LC",
    code: "MT-003",
    pack: "10x10",
    image: "/montglar.jpg",
    division: "Respiratory & Allergy",
  },
  {
    name: "Shalgrow",
    code: "SG-004",
    pack: "10x10",
    image: "/shalgrow.jpg",
    division: "Nutrition & Support",
  },
  {
    name: "AXONGUARD-PLUS",
    code: "AP-005",
    pack: "10x10",
    image: "/axonguard.jpg",
    division: "Neuro & Pain Modulation",
  },
];

const divisions = [
  {
    title: "Ortho & Pain Management",
    description:
      "High quality combinations for inflammation and pain relief.",
  },
  {
    title: "Gastro & Acid Peptic Disorders",
    description:
      "Advanced medicines for acidity and gastric disorders.",
  },
  {
    title: "Respiratory & Allergy",
    description:
      "Reliable allergy and respiratory care products.",
  },
  {
    title: "Nutrition & Wellness",
    description:
      "Supportive medicines for overall health.",
  },
];

const trustPoints = [
  "WHO-GMP manufacturing support",
  "Doctor trusted brands",
  "Quality formulations",
  "Reliable supply",
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const productsMenuRef = useRef(null);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (!productsMenuOpen) return;
    const handler = (e) => {
      if (
        productsMenuRef.current &&
        !productsMenuRef.current.contains(e.target)
      ) {
        setProductsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [productsMenuOpen]);

  return (
    <div className="min-h-screen bg-[#f5fbff]">

      {/* HEADER */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

          <div className="flex items-center gap-3">

            <img
              src="/logo.png"
              alt="Angular Pharma"
              className="h-16 w-auto object-contain"
            />

            <div>
              <h1 className="text-xl font-bold text-sky-800">
                Angular Pharmaceuticals
              </h1>

              <p className="text-xs text-gray-500">
                Hyderabad, Telangana
              </p>
            </div>

          </div>

          <nav className="hidden md:flex gap-6 text-sm">

            <a href="#about" className="hover:text-sky-700">
              About
            </a>

            <a href="#products" className="hover:text-sky-700">
              Products
            </a>

            <a href="#contact" className="hover:text-sky-700">
              Contact
            </a>

          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-sky-900 to-sky-600 text-white py-20">

        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-4xl font-bold">
            Trusted Pharmaceutical Company
          </h2>

          <p className="mt-3 text-lg">
            Quality medicines you can trust
          </p>

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="py-14 bg-white">

        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-2xl font-bold text-sky-900">
            About Angular Pharma
          </h2>

          <p className="mt-4 text-gray-600">
            Angular Pharmaceuticals provides trusted medicines for doctors and patients.
            Focused on Ortho, Gastro, Respiratory and Neuro segments.
          </p>

        </div>

      </section>

      {/* DIVISIONS */}
      <section className="py-12 bg-[#f5fbff]">

        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-xl font-bold text-sky-900">
            Therapeutic Divisions
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mt-6">

            {divisions.map((d, i) => (

              <div key={i} className="bg-white p-4 border rounded-lg">

                <h3 className="font-semibold text-sky-800">
                  {d.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {d.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-14 bg-white">

        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-2xl font-bold text-sky-900">
            Our Products
          </h2>

          <input
            placeholder="Search product..."
            className="border p-2 mt-4 w-full max-w-md"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            {filteredProducts.map((p, i) => (

              <div key={i} className="border rounded-lg p-4 bg-[#f9fdff]">

                <div className="h-32 bg-white flex items-center justify-center mb-3 border">

                  {p.image ? (

                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full object-contain"
                    />

                  ) : (

                    <span className="text-xs text-gray-400">
                      Image coming soon
                    </span>

                  )}

                </div>

                <h3 className="font-semibold text-sky-900">
                  {p.name}
                </h3>

                <p className="text-sm text-gray-600">
                  Code: {p.code}
                </p>

                <p className="text-sm text-gray-600">
                  Pack: {p.pack}
                </p>

                <p className="text-xs text-gray-500">
                  {p.division}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* TRUST */}
      <section className="py-14 bg-[#f5fbff]">

        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-xl font-bold text-sky-900">
            Why Choose Angular Pharma
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mt-6">

            {trustPoints.map((t, i) => (

              <div key={i} className="bg-white p-3 border rounded-lg">

                ✔ {t}

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="py-14 bg-white">

        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-2xl font-bold text-sky-900">
            Contact Us
          </h2>

          <p className="mt-3 text-gray-600">
            Email: angularpharmaceuticals@gmail.com
          </p>

          <p className="text-gray-600">
            Hyderabad, Telangana
          </p>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a1b6c] text-white py-8 mt-10">

        <div className="max-w-6xl mx-auto px-4">

          <img
            src="/logo.png"
            alt="Angular Pharma"
            className="h-20 mb-4"
          />

          <p>
            © Angular Pharmaceuticals
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;
