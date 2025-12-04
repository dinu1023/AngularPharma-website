// src/App.jsx
import React, { useState } from "react";

const flagshipBrands = [
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
    name: "MONTGLAR - LC",
    code: "MT-003",
    pack: "10x10",
    division: "Respiratory & Allergy",
    image: "/montglar.jpg",
  },
  {
    name: "AXONGUARD - PLUS",
    code: "CP-005",
    pack: "10x10",
    division: "Cardio-metabolic Care",
    image: "/axonguard-plus.jpg", // add this file later if needed
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
      "Proven therapies for dyspepsia, GERD and acid peptic disorders – focused on symptom control and healing.",
  },
  {
    title: "Respiratory & Allergy",
    description:
      "Montelukast, Levocetirizine and related products supporting respiratory wellness and allergy management.",
  },
];

const hubs = [
  "Hyderabad, Telangana (Head Office)",
  "Bengaluru, Karnataka (Operational Hub)",
  "Mumbai, Maharashtra (Commercial Hub)",
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo + title */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Angular Pharmaceuticals logo"
              className="h-12 w-auto"
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-sky-900">
                Angular Pharmaceuticals
              </div>
              <div className="text-xs text-slate-600">
                Evidence-based formulations from Hyderabad, Telangana
              </div>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#home" className="hover:text-sky-700">
              Home
            </a>
            <a href="#about" className="hover:text-sky-700">
              About
            </a>
            <a href="#divisions" className="hover:text-sky-700">
              Divisions
            </a>
            <a href="#products" className="hover:text-sky-700">
              Products
            </a>
            <a href="#trust" className="hover:text-sky-700">
              Doctors Trust Us
            </a>
            <a href="#contact" className="hover:text-sky-700">
              Contact
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-300 text-slate-700"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation"
          >
            <span className="space-y-[3px] flex flex-col">
              <span className="block w-5 h-[3px] bg-slate-700" />
              <span className="block w-5 h-[3px] bg-slate-700" />
              <span className="block w-5 h-[3px] bg-slate-700" />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40">
          {/* dark bg */}
          <div
            className="absolute inset-0 bg-slate-900/60"
            onClick={closeMobile}
          ></div>

          {/* slide-out menu */}
          <div className="relative ml-auto h-full w-4/5 max-w-xs bg-sky-900 text-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-sky-700">
              <span className="text-sm font-semibold">Angular Pharmaceuticals</span>
              <button
                onClick={closeMobile}
                className="h-8 w-8 inline-flex items-center justify-center rounded-full border border-sky-400"
                aria-label="Close navigation"
              >
                ✕
              </button>
            </div>
            <nav className="mt-6 px-4 space-y-4 text-sm font-medium">
              <a href="#home" onClick={closeMobile} className="block">
                Home
              </a>
              <a href="#about" onClick={closeMobile} className="block">
                About
              </a>
              <a href="#divisions" onClick={closeMobile} className="block">
                Divisions
              </a>
              <a href="#products" onClick={closeMobile} className="block">
                Products
              </a>
              <a href="#trust" onClick={closeMobile} className="block">
                Doctors Trust Us
              </a>
              <a href="#contact" onClick={closeMobile} className="block">
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* MAIN */}
      <main className="flex-1">
        {/* HERO */}
        <section
          id="home"
          className="relative pt-24 md:pt-28 min-h-[90vh] flex items-center border-b bg-slate-900 text-white"
        >
          {/* Background image */}
          <img
            src="/hero-main.png"
            alt="Healthcare family support"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient overlay – darker on left for text */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/75 to-slate-900/20" />

          {/* Content */}
          <div className="relative max-w-6xl mx-auto px-4 py-16 space-y-6">
            <span className="inline-flex items-center px-4 py-1 rounded-full border border-sky-200/70 bg-white/10 backdrop-blur text-xs font-semibold tracking-[0.15em]">
              ANGULAR PHARMACEUTICALS
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Trusted formulations for everyday clinical practice.
            </h1>

            <p className="text-lg md:text-xl text-slate-100 max-w-2xl">
              Focused on Ortho, Gastro and Respiratory segments with reliable and
              affordable formulations designed for Indian patients and clinicians.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-sky-500 hover:bg-sky-600 text-sm font-semibold shadow-md shadow-sky-900/30"
              >
                View Products
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/70 bg-white/5 hover:bg-white/10 text-sm font-semibold"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 text-xs text-slate-100/80">
              <div>
                <div className="font-semibold">Ortho</div>
                <div>Pain & inflammation care</div>
              </div>
              <div>
                <div className="font-semibold">Gastro</div>
                <div>Acid peptic management</div>
              </div>
              <div>
                <div className="font-semibold">Respiratory</div>
                <div>Allergy & airway support</div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="border-b bg-white"
        >
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-sm font-semibold tracking-[0.18em] text-sky-700 mb-2">
                ABOUT ANGULAR PHARMACEUTICALS
              </h2>
              <p className="text-2xl font-bold text-slate-900 mb-4">
                Evidence-based brands designed for Indian clinical practice.
              </p>
              <p className="text-sm text-slate-700 mb-3">
                Angular Pharmaceuticals is an emerging pharmaceutical company based
                in Hyderabad, Telangana. We work with WHO-GMP compliant manufacturing
                partners to develop clinically relevant and affordable formulations.
              </p>
              <p className="text-sm text-slate-700 mb-3">
                Our core focus is on Ortho, Gastro and Respiratory therapy areas, with
                an expanding portfolio planned for nutrition and wellness segments.
                Each brand is designed keeping in mind the needs of Indian patients
                and clinicians.
              </p>
            </div>

            {/* Operations hubs */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Operations & Presence
                </div>
                <ul className="mt-2 space-y-1 text-sm text-slate-800">
                  {hubs.map((hub) => (
                    <li key={hub}>• {hub}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                  Core Therapy Areas
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-100">
                    Ortho
                  </span>
                  <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-100">
                    Gastro
                  </span>
                  <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-100">
                    Respiratory
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIVISIONS */}
        <section
          id="divisions"
          className="border-b bg-slate-50"
        >
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
            <h2 className="text-sm font-semibold tracking-[0.18em] text-sky-700 mb-2">
              DIVISIONS
            </h2>
            <p className="text-2xl font-bold text-slate-900 mb-8">
              Focused therapy segments aligned to clinical needs.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {divisions.map((div) => (
                <article
                  key={div.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">
                    {div.title}
                  </h3>
                  <p className="text-xs text-slate-700">{div.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FLAGSHIP BRANDS / PRODUCTS */}
        <section
          id="products"
          className="border-b bg-white"
        >
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
            <h2 className="text-sm font-semibold tracking-[0.18em] text-sky-700 mb-2">
              FLAGSHIP BRANDS
            </h2>
            <p className="text-2xl font-bold text-slate-900 mb-8">
              Clinically relevant brands with QR-enabled verification.
            </p>

            <div className="grid lg:grid-cols-[2fr_minmax(0,1fr)] gap-8 items-start">
              {/* Product cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {flagshipBrands.map((p) => (
                  <article
                    key={p.code}
                    className="rounded-2xl border border-slate-200 bg-slate-50 shadow-sm flex flex-col"
                  >
                    <div className="border-b border-slate-200 bg-white rounded-t-2xl overflow-hidden">
                      <div className="aspect-[4/3] flex items-center justify-center bg-slate-100">
                        {p.image ? (
                          <img
                            src={p.image}
                            alt={p.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <span className="text-xs text-slate-400">
                            Product Image
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="text-sm font-semibold text-slate-900">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-700">
                        Code: {p.code} • Pack: {p.pack}
                      </p>
                      <p className="mt-1 text-[11px] text-slate-500">
                        Division: {p.division}
                      </p>
                      <div className="mt-3 flex gap-2">
                        <button className="px-3 py-1.5 text-[11px] rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-600">
                          Verify
                        </button>
                        <button className="px-3 py-1.5 text-[11px] rounded-full border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50">
                          Details
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Verify Product + Contact box */}
              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">
                    Verify Product
                  </h3>
                  <p className="text-xs text-slate-700 mb-3">
                    Enter the product code printed near the QR to check
                    authenticity.
                  </p>
                  <input
                    type="text"
                    placeholder="Enter product code (e.g. RG-001)"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs mb-2 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                  <button className="w-full inline-flex items-center justify-center px-3 py-2 rounded-lg bg-sky-500 text-xs font-semibold text-white hover:bg-sky-600">
                    Verify Now
                  </button>
                </div>

                <div
                  id="contact"
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">
                    Contact & Distribution
                  </h3>
                  <p className="text-xs text-slate-700 mb-1">
                    For hospital supply, distribution or business enquiries,
                    please reach out via email or contact section.
                  </p>
                  <p className="text-xs text-slate-700 mb-1">
                    <span className="font-semibold">Email:</span>{" "}
                    angularpharmaceuticals@gmail.com
                  </p>
                  <p className="text-xs text-slate-700">
                    <span className="font-semibold">Location:</span> Pl. No 59,
                    Boduppal, Medipally, Hyderabad 500076, Telangana, INDIA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY DOCTORS TRUST US */}
        <section
          id="trust"
          className="border-b bg-slate-50"
        >
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
            <h2 className="text-sm font-semibold tracking-[0.18em] text-sky-700 mb-2">
              WHY DOCTORS TRUST US
            </h2>
            <p className="text-2xl font-bold text-slate-900 mb-6">
              Care • Commitment • Quality
            </p>
            <p className="text-sm text-slate-700 mb-3 max-w-3xl">
              WHO-GMP aligned partners with a focus on Ortho, Gastro and
              Respiratory care for everyday clinical practice, ensuring consistent
              quality and trust.
            </p>
            <ul className="mt-4 grid md:grid-cols-3 gap-4 text-xs text-slate-700">
              <li className="rounded-2xl bg-white border border-slate-200 p-4">
                <div className="font-semibold mb-1">Evidence-based brands</div>
                <div>
                  Formulations backed by scientific rationale and aligned to Indian
                  treatment practices.
                </div>
              </li>
              <li className="rounded-2xl bg-white border border-slate-200 p-4">
                <div className="font-semibold mb-1">Quality-first approach</div>
                <div>
                  WHO-GMP compliant partners, robust processes and QR-enabled
                  product verification.
                </div>
              </li>
              <li className="rounded-2xl bg-white border border-slate-200 p-4">
                <div className="font-semibold mb-1">Patient-centric design</div>
                <div>
                  Dosage strengths, packs and combinations tailored to Indian
                  patient profiles and affordability.
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-4 text-[11px] text-slate-500 flex flex-wrap gap-2 justify-between">
          <span>
            © {new Date().getFullYear()} Angular Pharmaceuticals. All rights
            reserved.
          </span>
          <span>Focused on Ortho • Gastro • Respiratory therapy segments.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
