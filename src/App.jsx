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
    image: "/angularsp.jpg",      // <-- Angular SP image
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
    <div className="bg-gray-50 min-h-screen text-gray-800 flex flex-col">
      {/* NAVBAR */}
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* LOGO – from /public/logo.png */}
            <img
              src="/logo.png"
              alt="Angular Pharma Logo"
              className="h-12 w-auto object-contain"
            />
            <div>
              <h1 className="text-lg md:text-xl font-bold text-sky-800">
                Angular Pharmaceuticals
              </h1>
              <p className="text-[11px] text-gray-500">
                Evidence-based formulations from Hyderabad, Telangana
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-5 text-sm text-gray-600">
            <a href="#home" className="hover:text-sky-700">
              Home
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
      <main className="flex-1">
        <section
          id="home"
          className="bg-gradient-to-r from-sky-700 to-blue-500 text-white"
        >
          <div className="max-w-6xl mx-auto px-4 py-10 text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">
              Trusted formulations for everyday clinical practice.
            </h2>
            <p className="text-sm md:text-base text-sky-100">
              Premium quality pharmaceutical formulations for hospitals,
              pharmacies and distributors.
            </p>
            <a href="#products">
              <button className="mt-3 px-6 py-2 rounded-full bg-white text-sky-700 text-sm font-semibold shadow">
                View Products
              </button>
            </a>
          </div>
        </section>

        {/* PRODUCTS */}
        <section
          id="products"
          className="max-w-6xl mx-auto px-4 py-10 space-y-5"
        >
          <h2 className="text-xl font-bold text-sky-900">Flagship Brands</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <article
                key={p.code}
                className="bg-white rounded-xl shadow-sm border p-4 flex flex-col"
              >
                <div className="h-40 w-full bg-slate-50 rounded-md flex items-center justify-center overflow-hidden mb-3">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-sm text-sky-900">
                  {p.name}
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  Code: {p.code} • Pack: {p.pack}
                </p>
                <p className="text-[11px] text-gray-500 mt-1">
                  {p.division}
                </p>
                <div className="mt-3 flex gap-2 text-[11px]">
                  <button className="px-3 py-1 border rounded-md">
                    Details
                  </button>
                  <button className="px-3 py-1 bg-sky-700 text-white rounded-md">
                    Verify
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="bg-white border-t py-10"
        >
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-sky-900">Get in Touch</h2>
              <p className="text-sm text-gray-600 leading-6">
                For hospital supply, distribution or business enquiries, please
                reach out via email or the contact form. Our team will connect
                with you shortly.
              </p>
              <div className="text-sm text-gray-700 space-y-1">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  angularpharmaceuticals@gmail.com
                </p>
                <p>
                  <span className="font-semibold">Location:</span>{" "}
                  Pl. No 59, Boduppal, Medipally, Hyderabad 500076, Telangana,
                  INDIA
                </p>
              </div>
            </div>

            <form className="bg-slate-50 rounded-xl shadow p-5 space-y-3">
              <input
                className="w-full px-3 py-2 border rounded text-sm"
                placeholder="Your Name"
              />
              <input
                className="w-full px-3 py-2 border rounded text-sm"
                placeholder="Your Email"
              />
              <input
                className="w-full px-3 py-2 border rounded text-sm"
                placeholder="Subject"
              />
              <textarea
                rows="4"
                className="w-full px-3 py-2 border rounded text-sm resize-none"
                placeholder="Your message"
              />
              <button className="w-full bg-sky-700 hover:bg-sky-800 text-white text-sm font-semibold py-2 rounded">
                Send Message
              </button>
              <p className="text-[11px] text-gray-400 text-center">
                (Form is for display only – email integration can be added later.)
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-3 text-xs text-gray-500 flex justify-between flex-wrap gap-2">
          <span>© {new Date().getFullYear()} Angular Pharmaceuticals.</span>
          <span>Designed for Dinu.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
