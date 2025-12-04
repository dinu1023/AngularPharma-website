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
  const [searchTerm, setSearchTerm] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [verifyResult, setVerifyResult] = useState(null); // {status, message}

  const closeMobile = () => setMobileOpen(false);

  // Filter products by search term (name, code, division)
  const filteredProducts = products.filter((p) => {
    if (!searchTerm.trim()) return true;
    const t = searchTerm.toLowerCase();
    return (
      p.name.toLowerCase().includes(t) ||
      p.code.toLowerCase().includes(t) ||
      (p.division && p.division.toLowerCase().includes(t))
    );
  });

  const handleVerify = () => {
    const code = verifyCode.trim().toUpperCase();
    if (!code) {
      setVerifyResult({
        status: "error",
        message: "Please enter a product code.",
      });
      return;
    }

    const found = products.find(
      (p) => p.code.toUpperCase() === code || p.name.toUpperCase() === code
    );

    if (found) {
      setVerifyResult({
        status: "success",
        message: `✔ ${found.name} (${found.code}) appears to be a valid Angular Pharmaceuticals brand.`,
      });
    } else {
      setVerifyResult({
        status: "error",
        message:
          "✖ Code not found in our current flagship list. Please re-check the printed code or contact support.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#f5fbff] text-slate-900 flex flex-col">
      {/* HEADER – white like Orven */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Angular Pharma logo"
              className="h-10 w-10 rounded-full shadow-[0_8px_18px_rgba(59,130,246,0.6)] border border-sky-200 object-contain bg-white"
            />
            <div>
              <h1 className="text-lg md:text-xl font-extrabold text-sky-800 tracking-tight">
                Angular Pharmaceuticals
              </h1>
              <p className="text-[11px] text-gray-500">
                Evidence-based formulations • Hyderabad, Telangana
              </p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6 text-sm text-gray-600 font-medium">
            <a href="#hero" className="hover:text-sky-700">
              Home
            </a>
            <a href="#about" className="hover:text-sky-700">
              About Us
            </a>
            <a href="#divisions" className="hover:text-sky-700">
              Products / Divisions
            </a>
            <a href="#contact" className="hover:text-sky-700">
              Contact Us
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border border-slate-200 bg-sky-900 text-white shadow-[0_10px_25px_rgba(15,23,42,0.4)] active:scale-[0.97] transition-transform"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation"
          >
            <span className="flex flex-col items-center gap-[3px]">
              <span className="block w-5 h-[2px] bg-white rounded-full" />
              <span className="block w-5 h-[2px] bg-white rounded-full" />
              <span className="block w-5 h-[2px] bg-white rounded-full" />
            </span>
          </button>
        </div>

        {/* Mobile nav overlay + slide panel */}
        {mobileOpen && (
          <div
            className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm"
            onClick={closeMobile}
          >
            <div
              className="ml-auto h-full w-72 bg-white text-slate-900 shadow-[0_0_40px_rgba(0,0,0,0.7)] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
                <span className="text-sm font-semibold tracking-wide">
                  Angular Pharmaceuticals
                </span>
                <button
                  onClick={closeMobile}
                  className="h-8 w-8 rounded-full border border-slate-300 flex items-center justify-center text-lg leading-none"
                  aria-label="Close navigation"
                >
                  ✕
                </button>
              </div>
              <nav className="mt-6 px-6 space-y-5 text-base font-medium">
                <a href="#hero" onClick={closeMobile} className="block">
                  Home
                </a>
                <a href="#about" onClick={closeMobile} className="block">
                  About Us
                </a>
                <a href="#divisions" onClick={closeMobile} className="block">
                  Products / Divisions
                </a>
                <a href="#contact" onClick={closeMobile} className="block">
                  Contact Us
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* HERO – Orven-style: left text, right image card, light background */}
        <section
          id="hero"
          className="relative overflow-hidden bg-[#f0f9ff] border-b border-slate-200"
        >
          {/* curved shapes background */}
          <div className="pointer-events-none absolute -left-40 -top-40 h-72 w-72 rounded-full bg-sky-100" />
          <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-cyan-50" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-56 w-[140%] rounded-[50%] bg-white border-t border-sky-100" />

          <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
            {/* Left text */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-sky-900 leading-tight">
                Quality-driven pharmaceutical brands
                <span className="block text-slate-700 text-xl md:text-2xl mt-2 font-semibold">
                  designed for everyday clinical practice.
                </span>
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-6">
                Angular Pharmaceuticals focuses on Ortho, Gastro and Respiratory
                therapies with reliable formulations for Indian patients and
                clinicians. Our aim is to support doctors with brands they can
                prescribe with confidence.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#products"
                  className="px-5 py-2.5 rounded-full bg-sky-700 text-white text-sm font-semibold shadow-[0_16px_40px_rgba(59,130,246,0.6)] hover:bg-sky-800"
                >
                  View Products
                </a>
                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded-full border border-sky-300 text-sky-800 text-sm font-semibold bg-white hover:bg-sky-50"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Right image card like Orven – CHANGED TO FULL COVER */}
            <div className="flex justify-center md:justify-end">
              <div className="relative rounded-[32px] bg-white shadow-[0_24px_60px_rgba(148,163,184,0.55)] border border-slate-200 overflow-hidden max-w-md w-full h-[320px] md:h-[360px]">
                <img
                  src="/hero-main.png.png"
                  alt="Molecules and healthcare illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT – similar layout to Orven screenshot: left image, right text */}
        <section
          id="about"
          className="bg-white border-b border-slate-200 py-12 md:py-16"
        >
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            {/* Left image card */}
            <div className="flex justify-center md:justify-start">
              <div className="rounded-[32px] bg-white shadow-[0_22px_55px_rgba(148,163,184,0.6)] border border-slate-200 overflow-hidden max-w-md w-full">
                <img
                  src="/about-banner.jpg"
                  alt="Scientific healthcare visual"
                  className="w-full h-[260px] md:h-[320px] object-cover"
                />
              </div>
            </div>

            {/* Right text */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-sky-900">
                About Us
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-6">
                Angular Pharmaceuticals is an emerging healthcare company based
                in Hyderabad, Telangana. We partner with WHO-GMP compliant
                manufacturing units to deliver clinically relevant and
                affordable formulations.
              </p>
              <p className="text-sm md:text-base text-slate-600 leading-6">
                Our current portfolio is focused on Orthopaedics, Gastroenterology
                and Respiratory care. Each brand is conceptualised keeping in
                mind real-world prescribing patterns and the needs of Indian
                patients, with an emphasis on efficacy, safety and
                patient-friendly pricing.
              </p>
              <p className="text-sm md:text-base text-slate-600 leading-6">
                Over time, we aim to build a differentiated presence in
                nutrition and wellness segments while maintaining our commitment
                to quality, transparency and ethical promotion.
              </p>
            </div>
          </div>
        </section>

        {/* DIVISIONS */}
        <section
          id="divisions"
          className="border-b border-slate-200 bg-[#f5fbff]"
        >
          <div className="max-w-6xl mx-auto px-4 py-10 space-y-5">
            <h2 className="text-xl font-bold text-sky-900">
              Therapeutic Divisions
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {divisions.map((d) => (
                <div
                  key={d.title}
                  className="bg-white rounded-xl shadow-[0_12px_30px_rgba(148,163,184,0.35)] border border-slate-200 p-4 space-y-1"
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

        {/* PRODUCTS + VERIFY (kept similar, light theme) */}
        <section id="products" className="border-b bg-white">
          <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
            {/* Products */}
            <div className="md:col-span-3 space-y-4">
              <div className="flex items-center justify_between gap-3">
                <h2 className="text-xl font-bold text-sky-900">
                  Flagship Brands
                </h2>
                <input
                  placeholder="Search by name, code or division"
                  className="hidden md:block px-3 py-2 border rounded-md w-64 text-xs focus:outline-none focus:ring-1 focus:ring-sky-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Mobile search */}
              <div className="md:hidden mb-2">
                <input
                  placeholder="Search brands..."
                  className="w-full px-3 py-2 border rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-sky-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProducts.length === 0 ? (
                  <p className="text-xs text-gray-500 col-span-full">
                    No products match “{searchTerm}”. Try a different name or
                    code.
                  </p>
                ) : (
                  filteredProducts.map((p, i) => (
                    <article
                      key={i}
                      className="group relative bg-slate-50/95 rounded-2xl border border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.15)] px-4 py-5 flex flex-col h-full overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-3 hover:shadow-[0_28px_70px_rgba(15,23,42,0.35)] hover:bg-white"
                    >
                      <div className="pointer-events-none absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-sky-300/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative h-32 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow-inner mb-3">
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
                        <button className="px-3 py-1 border rounded-md hover:bg-slate-50">
                          Details
                        </button>
                        <button
                          className="px-3 py-1 bg-sky-700 text-white rounded-md hover:bg-sky-800"
                          onClick={() => {
                            setVerifyCode(p.code);
                            setVerifyResult({
                              status: "success",
                              message: `✔ ${p.name} (${p.code}) appears to be a valid Angular Pharmaceuticals brand.`,
                            });
                            document
                              .getElementById("verify")
                              ?.scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          Verify
                        </button>
                      </div>
                    </article>
                  ))
                )}
              </div>
            </div>

            {/* Verify + contact summary */}
            <div className="space-y-4" id="verify">
              <div className="bg-slate-50 rounded-2xl shadow-[0_16px_40px_rgba(148,163,184,0.55)] border border-slate-200 p-4 space-y-2">
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
                  value={verifyCode}
                  onChange={(e) => setVerifyCode(e.target.value)}
                />
                <button
                  className="w-full mt-2 px-3 py-2 rounded-md bg-sky-700 text-white text-sm font-medium hover:bg-sky-800"
                  onClick={handleVerify}
                >
                  Verify Now
                </button>
                {verifyResult && (
                  <p
                    className={`mt-2 text-[11px] ${
                      verifyResult.status === "success"
                        ? "text-emerald-600"
                        : "text-red-500"
                    }`}
                  >
                    {verifyResult.message}
                  </p>
                )}
              </div>

              <div className="bg-slate-50 rounded-2xl shadow-[0_12px_32px_rgba(148,163,184,0.55)] border border-slate-200 p-4 space-y-2">
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
                    <span className="font-medium">Location:</span> Pl. No 59,
                    Boduppal, Medipally, Hyderabad 500076, Telangana, INDIA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section
          id="trust"
          className="border-b border-slate-200 bg-[#f5fbff]"
        >
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
                  className="flex items-start gap-2 bg-white rounded-xl border shadow-[0_12px_36px_rgba(148,163,184,0.55)] p-3"
                >
                  <span className="text-sky-700 text-lg mt-[2px]">✔</span>
                  <p className="text-xs leading-5">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT – clean, light */}
        <section id="contact" className="bg-white py-12 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-sky-900">
                Contact Us
              </h2>
              <p className="text-sm text-gray-600 leading-6">
                We work with hospitals, pharmacies, distributors and medical
                institutions to ensure timely access to essential formulations.
                Share your requirement and our team will connect with you.
              </p>

              <div className="text-sm text-gray-700 space-y-1">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  angularpharmaceuticals@gmail.com
                </p>
                <p>
                  <span className="font-semibold">Location:</span> Pl. No 59,
                  Boduppal, Medipally, Hyderabad 500076, Telangana, INDIA
                </p>
              </div>

              <p className="text-xs text-gray-500">
                Please mention your speciality (Ortho, Gastro, Respiratory,
                etc.) and city, so we can route your enquiry to the relevant
                team member.
              </p>
            </div>

            <form className="bg-slate-50 rounded-2xl shadow-[0_16px_40px_rgba(148,163,184,0.55)] border border-slate-200 p-6 space-y-4">
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
                rows={4}
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

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-gray-500 flex justify-between flex-wrap gap-2">
          <span>© {new Date().getFullYear()} Angular Pharmaceuticals.</span>
          <span>Designed for Dinu.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
