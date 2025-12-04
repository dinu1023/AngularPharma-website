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

  // 3D tilt
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / (innerWidth / 2); // -1 to 1
    const y = (e.clientY - innerHeight / 2) / (innerHeight / 2); // -1 to 1
    setTilt({ x, y });
  };

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

  // Helper: common 3D style for cards/blocks
  const card3DStyle = (depth = 4) => ({
    transform: `rotateX(${tilt.y * depth}deg) rotateY(${tilt.x * -depth}deg) translateZ(0)`,
    transformStyle: "preserve-3d",
    transition: "transform 0.15s ease-out",
  });

  return (
    <div
      className="min-h-screen bg-slate-950 text-slate-900 flex flex-col"
      onMouseMove={handleMouseMove}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Subtle gradient background blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-24 h-72 w-72 bg-sky-500/20 blur-3xl rounded-full" />
        <div className="absolute top-40 -right-24 h-80 w-80 bg-cyan-400/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 bg-indigo-500/15 blur-3xl rounded-full" />
      </div>

      {/* HEADER */}
      <header className="bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 sticky top-0 z-30">
        <div
          className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4"
          style={card3DStyle(2)}
        >
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-sky-400/30 blur-md" />
              <img
                src="/logo.png"
                alt="Angular Pharma logo"
                className="relative h-10 w-10 rounded-full shadow-[0_12px_30px_rgba(56,189,248,0.7)] border border-sky-300 object-contain bg-slate-950"
              />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-extrabold text-sky-100 tracking-tight">
                Angular Pharmaceuticals
              </h1>
              <p className="text-[11px] text-slate-400">
                Evidence-based formulations • Hyderabad, Telangana
              </p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-5 text-xs md:text-sm text-slate-300 font-medium">
            <a href="#home" className="hover:text-sky-300">
              Home
            </a>
            <a href="#about" className="hover:text-sky-300">
              About
            </a>
            <a href="#divisions" className="hover:text-sky-300">
              Divisions
            </a>
            <a href="#products" className="hover:text-sky-300">
              Products
            </a>
            <a href="#trust" className="hover:text-sky-300">
              Doctors Trust Us
            </a>
            <a href="#contact" className="hover:text-sky-300">
              Contact
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-xl border border-slate-700 bg-slate-900 text-slate-100 shadow-[0_10px_25px_rgba(15,23,42,0.9)] active:scale-[0.97] transition-transform"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation"
          >
            <span className="flex flex-col items-center gap-[3px]">
              <span className="block w-5 h-[2px] bg-slate-100 rounded-full" />
              <span className="block w-5 h-[2px] bg-slate-100 rounded-full" />
              <span className="block w-5 h-[2px] bg-slate-100 rounded-full" />
            </span>
          </button>
        </div>

        {/* Mobile nav overlay + slide panel */}
        {mobileOpen && (
          <div
            className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm"
            onClick={closeMobile}
          >
            <div
              className="ml-auto h-full w-72 bg-slate-950 text-slate-100 shadow-[0_0_40px_rgba(0,0,0,0.9)] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
                <span className="text-sm font-semibold tracking-wide">
                  Angular Pharma
                </span>
                <button
                  onClick={closeMobile}
                  className="h-8 w-8 rounded-full border border-slate-700 flex items-center justify-center text-lg leading-none"
                  aria-label="Close navigation"
                >
                  ✕
                </button>
              </div>
              <nav className="mt-6 px-6 space-y-5 text-base font-medium">
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
      </header>

      <main className="flex-1">
        {/* HERO */}
        <section
          id="home"
          className="relative border-b border-slate-800 bg-slate-950 text-white overflow-hidden"
        >
          {/* Background image with parallax */}
          <div
            className="absolute inset-0 will-change-transform"
            style={{
              transform: `translateY(${scrollY * 0.08}px)`,
              transition: "transform 0.1s linear",
            }}
          >
            <img
              src="/hero-main.png.png"
              alt="Family receiving healthcare support"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/40" />
          </div>

          {/* Foreground content in 3D */}
          <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/70 border border-sky-400/60 text-[11px] font-semibold tracking-[0.18em] uppercase shadow-[0_14px_45px_rgba(56,189,248,0.5)]"
              style={card3DStyle(4)}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Angular Pharmaceuticals
            </div>

            <div
              className="mt-6 max-w-xl space-y-4"
              style={card3DStyle(6)}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-sky-50">
                Trusted formulations
                <br />
                for everyday clinical practice.
              </h2>

              <p className="text-sm md:text-base text-slate-200/90 leading-6">
                Focused on Ortho, Gastro and Respiratory segments with reliable
                and affordable formulations designed for Indian patients and
                clinicians.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#products"
                  className="px-5 py-2.5 rounded-full bg-sky-400 text-slate-950 text-sm font-semibold shadow-[0_18px_55px_rgba(56,189,248,0.9)] hover:bg-sky-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  View Products
                </a>
                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded-full border border-slate-500 text-slate-50 text-sm font-semibold bg-slate-900/60 hover:bg-slate-800/80 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  Contact Us
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 text-[11px] text-slate-200/90">
                <div className="bg-slate-900/60 border border-slate-700 rounded-xl px-3 py-2" style={card3DStyle(3)}>
                  <div className="font-semibold text-sky-200">Ortho</div>
                  <div>Pain & inflammation care</div>
                </div>
                <div className="bg-slate-900/60 border border-slate-700 rounded-xl px-3 py-2" style={card3DStyle(3)}>
                  <div className="font-semibold text-sky-200">Gastro</div>
                  <div>Acid peptic management</div>
                </div>
                <div className="bg-slate-900/60 border border-slate-700 rounded-xl px-3 py-2" style={card3DStyle(3)}>
                  <div className="font-semibold text-sky-200">Respiratory</div>
                  <div>Allergy & airway support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Banner before About */}
        <section className="border-b border-slate-800 bg-transparent">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div
              className="rounded-3xl overflow-hidden shadow-[0_28px_80px_rgba(15,23,42,0.95)] border border-slate-800 bg-slate-900/80"
              style={card3DStyle(5)}
            >
              <img
                src="/about-banner.jpg"
                alt="Healthcare family support"
                className="w-full h-[260px] md:h-[320px] object-cover opacity-90"
              />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-b border-slate-800 bg-slate-950">
          <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
            <div
              className="md:col-span-2 space-y-3 bg-slate-900/70 border border-slate-800 rounded-2xl p-4 shadow-[0_24px_70px_rgba(15,23,42,0.9)]"
              style={card3DStyle(4)}
            >
              <h2 className="text-xl font-bold text-sky-100">
                About Angular Pharmaceuticals
              </h2>
              <p className="text-sm text-slate-300 leading-6">
                Angular Pharmaceuticals is an emerging pharmaceutical company
                based in Hyderabad, Telangana. We work with WHO-GMP compliant
                manufacturing partners to develop clinically relevant and
                affordable formulations.
              </p>
              <p className="text-sm text-slate-300 leading-6">
                Our current focus is on Ortho, Gastro and Respiratory therapy
                areas with plans to expand into nutrition and wellness. Each
                brand is designed keeping in mind the needs of practising
                clinicians and the realities of Indian patients.
              </p>
            </div>

            <div className="space-y-3">
              <div
                className="bg-slate-900/70 rounded-2xl p-3 border border-slate-800 text-sm shadow-[0_18px_55px_rgba(15,23,42,0.9)]"
                style={card3DStyle(3)}
              >
                <div className="text-xs text-slate-400">Operations hub</div>
                <div className="font-semibold text-sky-100">
                  Hyderabad • Bengaluru • Mumbai
                </div>
              </div>
              <div
                className="bg-slate-900/70 rounded-2xl p-3 border border-slate-800 text-sm shadow-[0_18px_55px_rgba(15,23,42,0.9)]"
                style={card3DStyle(3)}
              >
                <div className="text-xs text-slate-400">Core therapy areas</div>
                <div className="font-semibold text-sky-100">
                  Ortho • Gastro • Respiratory
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIVISIONS */}
        <section id="divisions" className="border-b border-slate-800 bg-slate-950">
          <div className="max-w-6xl mx-auto px-4 py-10 space-y-5">
            <h2 className="text-xl font-bold text-sky-100">
              Therapeutic Divisions
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {divisions.map((d) => (
                <div
                  key={d.title}
                  className="bg-slate-900/70 rounded-2xl border border-slate-800 p-4 space-y-1 shadow-[0_20px_60px_rgba(15,23,42,0.9)]"
                  style={card3DStyle(4)}
                >
                  <h3 className="text-sm font-semibold text-sky-100">
                    {d.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-5">
                    {d.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTS + VERIFY */}
        <section id="products" className="border-b border-slate-800 bg-slate-950">
          <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
            {/* Products */}
            <div className="md:col-span-3 space-y-4">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-bold text-sky-100">
                  Flagship Brands
                </h2>
                <input
                  placeholder="Search by name, code or division"
                  className="hidden md:block px-3 py-2 border border-slate-700 bg-slate-900/70 rounded-md w-64 text-xs text-slate-100 focus:outline-none focus:ring-1 focus:ring-sky-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Mobile search */}
              <div className="md:hidden mb-2">
                <input
                  placeholder="Search brands..."
                  className="w-full px-3 py-2 border border-slate-700 bg-slate-900/70 rounded-md text-xs text-slate-100 focus:outline-none focus:ring-1 focus:ring-sky-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProducts.length === 0 ? (
                  <p className="text-xs text-slate-400 col-span-full">
                    No products match “{searchTerm}”. Try a different name or
                    code.
                  </p>
                ) : (
                  filteredProducts.map((p, i) => (
                    <article
                      key={i}
                      className="group relative bg-slate-900/80 rounded-2xl border border-slate-800 shadow-[0_24px_70px_rgba(15,23,42,0.95)] px-4 py-5 flex flex-col h-full overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-3 hover:shadow-[0_30px_90px_rgba(15,23,42,1)] hover:border-sky-500/70"
                      style={card3DStyle(5)}
                    >
                      <div className="pointer-events-none absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-sky-400/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative h-32 bg-slate-950 rounded-xl flex items-center justify-center overflow-hidden shadow-inner mb-3 border border-slate-800">
                        {p.image ? (
                          <img
                            src={p.image}
                            alt={p.name}
                            className="h-full w-full object-contain"
                          />
                        ) : (
                          <span className="text-slate-500 text-xs">
                            Product Image
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-sm text-sky-100">
                        {p.name}
                      </h3>
                      <div className="text-xs text-slate-300 mt-1">
                        Code: {p.code} • Pack: {p.pack}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        Division: {p.division}
                      </div>
                      <div className="mt-3 flex gap-2 text-[11px]">
                        <button className="px-3 py-1 border border-slate-700 rounded-md bg-slate-900/60 text-slate-200 hover:border-sky-400 hover:bg-slate-900 transition">
                          Details
                        </button>
                        <button
                          className="px-3 py-1 bg-sky-500 text-slate-950 rounded-md hover:bg-sky-400 font-semibold transition"
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
              <div
                className="bg-slate-900/80 rounded-2xl shadow-[0_24px_70px_rgba(15,23,42,0.95)] border border-slate-800 p-4 space-y-2"
                style={card3DStyle(5)}
              >
                <h3 className="text-sm font-semibold text-sky-100">
                  Verify Product
                </h3>
                <p className="text-xs text-slate-300">
                  Enter the product code printed near the QR to check
                  authenticity.
                </p>
                <input
                  placeholder="Enter product code (e.g. RG-001)"
                  className="w-full px-3 py-2 border border-slate-700 bg-slate-950 rounded-md text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-sky-400"
                  value={verifyCode}
                  onChange={(e) => setVerifyCode(e.target.value)}
                />
                <button
                  className="w-full mt-2 px-3 py-2 rounded-md bg-sky-500 text-slate-950 text-sm font-medium hover:bg-sky-400"
                  onClick={handleVerify}
                >
                  Verify Now
                </button>
                {verifyResult && (
                  <p
                    className={`mt-2 text-[11px] ${
                      verifyResult.status === "success"
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}
                  >
                    {verifyResult.message}
                  </p>
                )}
              </div>

              <div
                id="contact-summary"
                className="bg-slate-900/80 rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.95)] border border-slate-800 p-4 space-y-2"
                style={card3DStyle(4)}
              >
                <h3 className="text-sm font-semibold text-sky-100">
                  Contact & Distribution
                </h3>
                <p className="text-xs text-slate-300">
                  For hospital supply, distribution or business enquiries,
                  please reach out via email or contact section below.
                </p>
                <div className="text-xs text-slate-200 space-y-1">
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
        <section id="trust" className="border-b border-slate-800 bg-slate-950">
          <div className="max-w-6xl mx-auto px-4 py-10 space-y-4">
            <h2 className="text-xl font-bold text-sky-100">
              Why doctors trust Angular Pharma
            </h2>
            <p className="text-sm text-slate-300 max-w-3xl">
              Our objective is to support clinicians with dependable brands that
              align with good clinical practice while remaining affordable for
              patients.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-200">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-2 bg-slate-900/80 rounded-2xl border border-slate-800 shadow-[0_22px_65px_rgba(15,23,42,0.95)] p-3"
                  style={card3DStyle(4)}
                >
                  <span className="text-sky-400 text-lg mt-[2px]">✔</span>
                  <p className="text-xs leading-5 text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-slate-950 border-t border-slate-800 py-12">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
            <div
              className="space-y-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-5 shadow-[0_24px_70px_rgba(15,23,42,0.95)]"
              style={card3DStyle(4)}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-sky-100">
                Get in Touch
              </h2>
              <p className="text-sm text-slate-300 leading-6">
                We work closely with hospitals, pharmacies, distributors and
                medical institutions to ensure timely access to essential
                formulations. Share your requirement and our team will connect
                with you shortly.
              </p>

              <div className="text-sm text-slate-200 space-y-1">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  angularpharmaceuticals@gmail.com
                </p>
                <p>
                  <span className="font-semibold">Location:</span> Pl. No 59,
                  Boduppal, Medipally, Hyderabad 500076, Telangana, INDIA
                </p>
              </div>

              <p className="text-xs text-slate-400">
                Kindly mention your speciality / area (Ortho, Gastro,
                Respiratory, etc.) and location so that we can route your
                enquiry to the right team member.
              </p>
            </div>

            <form
              className="bg-slate-900/80 rounded-2xl shadow-[0_26px_75px_rgba(15,23,42,0.95)] border border-slate-800 p-6 space-y-4"
              style={card3DStyle(5)}
            >
              <input
                className="w-full px-3 py-2 border border-slate-700 bg-slate-950 rounded-md text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-sky-400"
                placeholder="Your Name"
              />
              <input
                className="w-full px-3 py-2 border border-slate-700 bg-slate-950 rounded-md text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-sky-400"
                placeholder="Your Email"
              />
              <input
                className="w-full px-3 py-2 border border-slate-700 bg-slate-950 rounded-md text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-sky-400"
                placeholder="Subject (Distribution / Product enquiry / Other)"
              />
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-slate-700 bg-slate-950 rounded-md text-sm text-slate-100 resize-none focus:outline-none focus:ring-1 focus:ring-sky-400"
                placeholder="Write your requirement or query here..."
              ></textarea>
              <button className="bg-sky-500 hover:bg-sky-400 text-slate-950 w-full py-2 rounded-md text-sm font-medium shadow-[0_18px_55px_rgba(56,189,248,0.9)]">
                Send Message
              </button>
              <p className="text-[11px] text-slate-500 text-center">
                (Form is for display only – email / WhatsApp integration can be
                added later.)
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-4 text-[11px] text-slate-500 flex justify-between flex-wrap gap-2">
          <span>© {new Date().getFullYear()} Angular Pharmaceuticals.</span>
          <span>Designed for Dinu.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
