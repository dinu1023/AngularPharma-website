import React, { useState, useEffect } from "react";

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
    division: "Nutrition & Support",
  },
  {
    name: "AXONGUARD-PLUS",
    code: "AP-005",
    pack: "10x10",
    division: "Neuro & Pain Modulation",
  },
];

const divisions = [
  {
    title: "Ortho & Pain Management",
    description:
      "Aceclofenac, Paracetamol and supportive combinations targeted for acute and chronic pain relief.",
  },
  {
    title: "Gastro & Acid Peptic Disorders",
    description:
      "Rabeprazole-based and related formulations designed for rapid and sustained acid control.",
  },
  {
    title: "Respiratory & Allergy",
    description:
      "Montelukast, Levocetirizine and other molecules focused on respiratory and allergic conditions.",
  },
  {
    title: "Future: Nutrition & Wellness",
    description:
      "Planned portfolio to support long-term health, recovery and everyday wellness.",
  },
];

const trustPoints = [
  "WHO-GMP aligned manufacturing partners with strict quality systems.",
  "Scientifically chosen strengths and combinations for Indian clinical practice.",
  "Consistent quality of formulation and packing, batch after batch.",
  "Transparent product verification using printed code near QR and clear contact support.",
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const [searchTerm, setSearchTerm] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [verifyResult, setVerifyResult] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filteredProducts = products.filter((p) => {
    if (!searchTerm.trim()) return true;
    const key = searchTerm.toLowerCase();
    return (
      p.name.toLowerCase().includes(key) ||
      p.code.toLowerCase().includes(key) ||
      (p.division && p.division.toLowerCase().includes(key))
    );
  });

  const handleVerify = () => {
    const code = verifyCode.trim().toUpperCase();
    const found = products.find(
      (p) => p.code.toUpperCase() === code || p.name.toUpperCase() === code
    );

    if (found) {
      setVerifyResult({
        status: "success",
        message: `✔ ${found.name} (${found.code}) is verified and authentic.`,
      });
    } else {
      setVerifyResult({
        status: "error",
        message: "✖ Code not found. Please check again or contact support.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* HEADER */}
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              className="h-10 w-10 rounded-full"
              alt="Angular Pharma"
            />
            <div>
              <h1 className="font-extrabold text-sky-800 text-lg md:text-xl">
                Angular Pharmaceuticals
              </h1>
              <p className="text-[11px] text-gray-500">
                Evidence-based formulations | Hyderabad, Telangana
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            <a href="#home" className="hover:text-sky-700">Home</a>
            <a href="#about" className="hover:text-sky-700">About</a>
            <a href="#divisions" className="hover:text-sky-700">Divisions</a>
            <a href="#products" className="hover:text-sky-700">Products</a>
            <a href="#trust" className="hover:text-sky-700">Doctors Trust Us</a>
            <a href="#contact" className="hover:text-sky-700">Contact</a>
          </nav>

          <button
            className="md:hidden bg-sky-900 text-white h-9 w-9 rounded-lg"
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>
        </div>

        {mobileOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setMobileOpen(false)}
          >
            <div
              className="ml-auto w-72 bg-slate-900 text-white h-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="text-lg mb-4"
                onClick={() => setMobileOpen(false)}
              >
                ✕
              </button>
              <nav className="space-y-4 text-base font-medium">
                <a href="#home" onClick={() => setMobileOpen(false)}>Home</a>
                <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
                <a href="#divisions" onClick={() => setMobileOpen(false)}>Divisions</a>
                <a href="#products" onClick={() => setMobileOpen(false)}>Products</a>
                <a href="#trust" onClick={() => setMobileOpen(false)}>Doctors Trust Us</a>
                <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative bg-slate-900 text-white overflow-hidden border-b">
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <img src="/hero-main.png.png" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/85 via-sky-900/60 to-sky-900/20" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-24 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Trusted formulations for everyday clinical practice.
          </h2>
          <p className="max-w-xl text-slate-200">
            Focused on Ortho, Gastro and Respiratory therapies built for real clinical needs.
          </p>

          <div className="flex gap-3">
            <a href="#products" className="px-6 py-2.5 bg-white text-sky-900 rounded-full font-semibold">
              View Products
            </a>
            <a href="#contact" className="px-6 py-2.5 border border-white/60 rounded-full font-semibold">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-3 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-sky-900">Flagship Brands</h2>
              <input
                placeholder="Search products"
                className="px-3 py-2 border rounded-md text-xs hidden md:block"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProducts.length ? (
                filteredProducts.map((p) => (
                  <article
                    key={p.code}
                    className="p-4 bg-slate-50 rounded-xl border shadow hover:-translate-y-1 transition"
                  >
                    <div className="h-32 bg-white rounded-lg mb-3 flex items-center justify-center">
                      {p.image ? (
                        <img src={p.image} className="h-full object-contain" />
                      ) : (
                        <span className="text-xs text-gray-400">No Image</span>
                      )}
                    </div>
                    <h3 className="font-semibold text-sm text-sky-900">{p.name}</h3>
                    <p className="text-xs text-gray-600">Code: {p.code} • Pack: {p.pack}</p>
                    <p className="text-[11px] text-gray-500">Division: {p.division}</p>

                    <button
                      className="w-full mt-3 bg-sky-700 text-white text-xs rounded-md py-1"
                      onClick={() => {
                        setVerifyCode(p.code);
                        setVerifyResult({
                          status: "success",
                          message: `✔ ${p.name} (${p.code}) is verified and authentic.`,
                        });
                        document.getElementById("verify")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Verify
                    </button>
                  </article>
                ))
              ) : (
                <p className="text-xs col-span-full text-gray-500">
                  No matches for "{searchTerm}".
                </p>
              )}
            </div>
          </div>

          <div id="verify" className="space-y-3 bg-slate-50 p-4 border rounded-xl shadow">
            <h3 className="text-sm font-bold text-sky-900">Verify Product</h3>
            <input
              placeholder="Enter code (e.g. RG-001)"
              className="w-full px-3 py-2 border rounded-md text-sm"
              value={verifyCode}
              onChange={(e) => setVerifyCode(e.target.value)}
            />
            <button
              className="w-full bg-sky-700 text-white py-2 rounded-md text-sm"
              onClick={handleVerify}
            >
              Verify Now
            </button>
            {verifyResult && (
              <p
                className={`text-xs ${
                  verifyResult.status === "success" ? "text-emerald-600" : "text-red-600"
                }`}
              >
                {verifyResult.message}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Angular Pharmaceuticals • Designed for Dinu
      </footer>
    </div>
  );
}

export default App;
