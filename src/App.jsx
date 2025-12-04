import React, { useState } from "react";

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
  division: "Neuro & Cardio Care",
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

  const closeMobile = () => setMobileOpen(false);
return (
 <div className="min-h-screen bg-gradient-to-b from-sky-100 via-slate-50 to-sky-200 text-slate-900 flex flex-col">
        {/* Header / Navbar */}
     <header className="bg-white/90 backdrop-blur-md border-b border-slate-200/70 sticky top-0 z-30 shadow-[0_12px_30px_rgba(15,23,42,0.15)]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <img
              src="/logo.png"
              alt="Angular Pharma logo"
              className="h-10 w-auto"
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

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-5 text-sm text-gray-600">
            <a href="#home" className="hover:text-sky-700">
              Home
            </a>
            <a href="#about" className="hover:text-sky-700">
              About
            </a>
            <a href="#divisions" className="hover:text-sky-700">
              Divisions
            </a>
          <a href="#products"
  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 text-white text-sm font-semibold shadow-[0_14px_30px_rgba(37,99,235,0.5)] hover:from-sky-700 hover:to-cyan-600 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(30,64,175,0.65)] active:translate-y-0 transition-all duration-200"
>
  View Products
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
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-200 bg-sky-900 text-white"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation"
          >
            <span className="space-y-[3px] flex flex-col">
              <span className="block w-5 h-[2px] bg-white" />
              <span className="block w-5 h-[2px] bg-white" />
              <span className="block w-5 h-[2px] bg-white" />
            </span>
          </button>
        </div>

        {/* Mobile nav overlay */}
        {mobileOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* Dark background */}
            <div
              className="absolute inset-0 bg-sky-950/70"
              onClick={closeMobile}
            />
            {/* Slide panel */}
            <div className="relative ml-auto h-full w-64 bg-sky-900 text-white shadow-xl flex flex-col">
              <div className="flex items-center justify-between px-4 py-3 border-b border-sky-800">
                <span className="text-sm font-semibold">
                  Angular Pharmaceuticals
                </span>
                <button
                  onClick={closeMobile}
                  aria-label="Close navigation"
                  className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-sky-700"
                >
                  ✕
                </button>
              </div>
              <nav className="mt-6 px-4 space-y-4 text-base font-medium">
                <a
                  href="#home"
                  onClick={closeMobile}
                  className="block hover:text-sky-200"
                >
                  Home
                </a>
                <a
                  href="#about"
                  onClick={closeMobile}
                  className="block hover:text-sky-200"
                >
                  About
                </a>
                <a
                  href="#divisions"
                  onClick={closeMobile}
                  className="block hover:text-sky-200"
                >
                  Divisions
                </a>
                <a
                  href="#products"
                  onClick={closeMobile}
                  className="block hover:text-sky-200"
                >
                  Products
                </a>
                <a
                  href="#trust"
                  onClick={closeMobile}
                  className="block hover:text-sky-200"
                >
                  Doctors Trust Us
                </a>
                <a
                  href="#contact"
                  onClick={closeMobile}
                  className="block hover:text-sky-200"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-[560px] md:min-h-[700px] flex items-center bg-slate-900 text-white"
          style={{
            backgroundImage: "url('/family-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-sky-900/70" />

          {/* Content */}
          <div className="relative max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="tracking-[0.25em] text-xs font-semibold text-sky-200 uppercase">
                Angular Pharmaceuticals
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Trusted formulations for everyday clinical practice.
              </h2>
              <p className="text-sm md:text-base text-sky-100 leading-6">
                Angular Pharmaceuticals focuses on Ortho, Gastro and Respiratory
                segments with reliable and affordable formulations designed for
                Indian patients and clinicians.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#products"
                  className="px-5 py-2 rounded-full bg-sky-500 text-white text-sm font-medium hover:bg-sky-400"
                >
                  View Products
                </a>
                <a
                  href="#verify"
                  className="px-5 py-2 rounded-full border border-sky-300 text-sky-100 text-sm font-medium hover:bg-sky-800/40"
                >
                  Verify Product
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-[11px] text-sky-100 pt-2">
                <span>Hyderabad-based • Telangana, INDIA</span>
                <span>Focused therapy: Ortho · Gastro · Respiratory</span>
              </div>
            </div>

            {/* Right side small info card */}
            <div className="hidden md:flex justify-end">
              <div className="bg-white/95 text-slate-900 rounded-3xl shadow-xl border border-sky-100 p-5 max-w-sm">
                <h3 className="text-sm font-semibold text-sky-900 mb-1">
                  Care • Commitment • Quality
                </h3>
                <p className="text-xs text-gray-600">
                  WHO-GMP aligned partners with a focus on Ortho, Gastro and
                  Respiratory care for everyday clinical practice, ensuring
                  consistent quality and trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="border-b bg-white">
          <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-3">
              <h2 className="text-xl font-bold text-sky-900">
                About Angular Pharmaceuticals
              </h2>
              <p className="text-sm text-gray-600 leading-6">
                Angular Pharmaceuticals is an emerging pharmaceutical company
                based in Hyderabad, Telangana. We work with WHO-GMP compliant
                manufacturing partners to develop clinically relevant and
                affordable formulations.
              </p>
              <p className="text-sm text-gray-600 leading-6">
                Our current focus is on Ortho, Gastro and Respiratory therapy
                areas with plans to expand into nutrition and wellness. Each
                brand is designed keeping in mind the needs of practising
                clinicians and the realities of Indian patients.
              </p>
            </div>

            {/* Small info cards – year removed */}
            <div className="space-y-3">
              <div className="bg-slate-50 rounded-xl p-3 border text-sm">
                <div className="text-xs text-gray-500">Core therapy areas</div>
                <div className="font-semibold text-sky-800">
                  Ortho • Gastro • Respiratory
                </div>
              </div>
             <div className="bg-slate-50 rounded-xl p-3 border text-sm">
  <div className="text-xs text-gray-500">Operations hub</div>
  <div className="font-semibold text-sky-800">
    Hyderabad • Bengaluru • Mumbai, INDIA
  </div>
</div>
            </div>
          </div>
        </section>

        {/* Divisions Section */}
        <section id="divisions" className="border-b bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 py-10 space-y-5">
            <h2 className="text-xl font-bold text-sky-900">
              Therapeutic Divisions
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {divisions.map((d) => (
                <div
                  key={d.title}
                  className="bg-white rounded-xl shadow-sm border p-4 space-y-1"
                >
                  <h3 className="text-sm font-semibold text-sky-800">
                    {d.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-5">
                    {d.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

               {/* Products + Verify Section */}
        <section id="products" className="border-b bg-white">
          <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
            {/* Products */}
            <div className="md:col-span-3 space-y-4">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-bold text-sky-900">
                  Flagship Brands
                </h2>
                <input
                  placeholder="Search by name or code"
                  className="hidden md:block px-3 py-2 border rounded-md w-64 text-xs focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
              </div>

              {/* 3D product cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {products.map((p, i) => (
                  <article
                    key={i}
                    className="group bg-slate-50 rounded-2xl border border-slate-200/80 shadow-sm p-4 flex flex-col h-full
                               transform transition-all duration-300
                               hover:-translate-y-2 hover:-rotate-1 hover:shadow-xl hover:border-sky-200/80 hover:bg-sky-50/80"
                  >
                    <div
                      className="h-32 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow-inner mb-3
                                 transform transition-transform duration-300 group-hover:scale-105"
                    >
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={p.name}
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <span className="text-gray-400 text-xs">
                          Product Image
                        </span>
                      )}
                    </div>

                    <h3 className="font-semibold text-sm text-sky-900">
                      {p.name}
                    </h3>
                    <div className="text-xs text-gray-600 mt-1">
                      Code: {p.code} • Pack: {p.pack}
                    </div>
                    <div className="text-[11px] text-gray-500 mt-1">
                      Division: {p.division}
                    </div>

                    <div className="mt-3 flex gap-2 text-[11px]">
                      <button className="px-3 py-1 border rounded-md bg-white/80 hover:bg-slate-50/80 transition">
                        Details
                      </button>
                      <button className="px-3 py-1 rounded-md bg-sky-700 text-white shadow-sm shadow-sky-500/40 hover:bg-sky-800 transition">
                        Verify
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Verify + Contact summary */}
            <div className="space-y-4" id="verify">
              <div className="bg-slate-50 rounded-2xl shadow-sm border p-4 space-y-2">
                <h3 className="text-sm font-semibold text-sky-900">
                  Verify Product
                </h3>
                <p className="text-xs text-gray-600">
                  Enter the product code printed near the QR to check
                  authenticity.
                </p>
                <input
                  placeholder="Enter product code (e.g. RG-001)"
                  className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
                <button className="w-full mt-2 px-3 py-2 rounded-md bg-sky-700 text-white text-sm font-medium hover:bg-sky-800">
                  Verify Now
                </button>
              </div>

              <div
                id="contact-summary"
                className="bg-slate-50 rounded-2xl shadow-sm border p-4 space-y-2"
              >
                <h3 className="text-sm font-semibold text-sky-900">
                  Contact & Distribution
                </h3>
                <p className="text-xs text-gray-600">
                  For hospital supply, distribution or business enquiries,
                  please reach out via email or contact section below.
                </p>
                <div className="text-xs text-gray-700 space-y-1">
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    angularpharmaceuticals@gmail.com
                  </p>
                  <p>
                    <span className="font-medium">Location:</span>{" "}
                    Pl. No 59, Boduppal, Medipally, Hyderabad 500076,
                    Telangana, INDIA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Doctors Trust Us */}
        <section id="trust" className="border-b bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 py-10 space-y-4">
            <h2 className="text-xl font-bold text-sky-900">
              Why doctors trust Angular Pharma
            </h2>
            <p className="text-sm text-gray-600 max-w-3xl">
              Our objective is to support clinicians with dependable brands that
              align with good clinical practice while remaining affordable for
              patients.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-2 bg-white rounded-xl border shadow-sm p-3"
                >
                  <span className="text-sky-700 text-lg mt-[2px]">✔</span>
                  <p className="text-xs leading-5">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full Contact Section */}
        <section id="contact" className="bg-white border-t py-12">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
            {/* Left side text */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-sky-900">
                Get in Touch
              </h2>
              <p className="text-sm text-gray-600 leading-6">
                We work closely with hospitals, pharmacies, distributors and
                medical institutions to ensure timely access to essential
                formulations. Share your requirement and our team will connect
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

              <p className="text-xs text-gray-500">
                Kindly mention your speciality / area (Ortho, Gastro,
                Respiratory, etc.) and location so that we can route your
                enquiry to the right team member.
              </p>
            </div>

            {/* Right side form */}
            <form className="bg-slate-50 rounded-2xl shadow p-6 space-y-4">
              <input
                className="w-full px-3 py-2 border rounded-md text-sm"
                placeholder="Your Name"
              />
              <input
                className="w-full px-3 py-2 border rounded-md text-sm"
                placeholder="Your Email"
              />
              <input
                className="w-full px-3 py-2 border rounded-md text-sm"
                placeholder="Subject (Distribution / Product enquiry / Other)"
              />
              <textarea
                rows="4"
                className="w-full px-3 py-2 border rounded-md text-sm resize-none"
                placeholder="Write your requirement or query here..."
              ></textarea>
              <button className="bg-sky-700 hover:bg-sky-800 text-white w-full py-2 rounded-md text-sm font-medium">
                Send Message
              </button>
              <p className="text-[11px] text-gray-400 text-center">
                (Form is for display only – email / WhatsApp integration can be
                added later.)
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-gray-500 flex justify-between flex-wrap gap-2">
          <span>© {new Date().getFullYear()} Angular Pharmaceuticals.</span>
          <span>Designed for Dinu.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
