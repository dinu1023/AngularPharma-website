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
  const [searchTerm, setSearchTerm] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [verifyResult, setVerifyResult] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  const closeMobile = () => setMobileOpen(false);

  // hero parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // scroll reveal for sections
  useEffect(() => {
    const elements = document.querySelectorAll(".js-animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // search filter
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
    <>
      {/* global smooth scroll + scroll reveal css */}
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes slideIn {
          from { transform: translateX(20%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .js-animate {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .js-animate.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="min-h-screen bg-[#f5fbff] text-slate-900 flex flex-col">
        {/* HEADER */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Angular Pharma logo"
                className="h-10 w-10 rounded-full border border-sky-200 object-contain bg-white"
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

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex gap-6 text-sm text-gray-600 font-medium">
              <a href="#hero" className="hover:text-sky-700 transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-sky-700 transition-colors">
                About Us
              </a>
              <a
                href="#products"
                className="hover:text-sky-700 transition-colors"
              >
                Products
              </a>
              <a
                href="#contact"
                className="hover:text-sky-700 transition-colors"
              >
                Contact Us
              </a>
            </nav>

            {/* HAMBURGER */}
            <button
              className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border border-slate-200 bg-sky-900 text-white active:scale-[0.97] transition-transform"
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

          {/* MOBILE MENU – full-screen transparent overlay like Orven */}
          {mobileOpen && (
            <div
              className="fixed inset-0 z-40 bg-[#111827]/80"
              onClick={closeMobile}
            >
              {/* content wrapper so clicking on links doesn't close unless we want */}
              <div
                className="relative h-full w-full text-white"
                style={{ animation: "slideIn 0.25s ease-out" }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* top row: logo text + close button */}
                <div className="flex items-center justify-between px-6 pt-4 pb-3 border-b border-white/10">
                  <span className="text-sm font-semibold tracking-wide">
                    Angular Pharmaceuticals
                  </span>
                  <button
                    onClick={closeMobile}
                    aria-label="Close navigation"
                    className="h-9 w-9 rounded-full border border-white/60 flex items-center justify-center text-white text-lg"
                  >
                    ✕
                  </button>
                </div>

                {/* nav links – left aligned, large, like Orven */}
                <nav className="mt-8 px-6 space-y-6 text-lg font-medium">
                  <a
                    href="#hero"
                    onClick={closeMobile}
                    className="block text-white"
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    onClick={closeMobile}
                    className="block text-white"
                  >
                    About Us
                  </a>
                  <a
                    href="#products"
                    onClick={closeMobile}
                    className="block text-white"
                  >
                    Products
                  </a>
                  <a
                    href="#contact"
                    onClick={closeMobile}
                    className="block text-white"
                  >
                    Contact Us
                  </a>
                </nav>
              </div>
            </div>
          )}
        </header>

        <main className="flex-1">
          {/* HERO – full background like Orven */}
          <section
            id="hero"
            className="relative border-b bg-slate-900 text-white overflow-hidden"
          >
            <div
              className="absolute inset-0 will-change-transform"
              style={{
                transform: `translateY(${scrollY * 0.06}px) scale(${
                  1 + scrollY * 0.00008
                })`,
                transition: "transform 0.05s linear",
              }}
            >
              <img
                src="/hero-main.png.png"
                alt="Family healthcare background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-sky-900/95 via-sky-900/80 to-sky-900/20" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 js-animate">
              <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/30 text-[11px] font-semibold tracking-[0.18em] uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Angular Pharmaceuticals
              </p>

              <div className="mt-5 max-w-xl space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                  Trusted formulations
                  <br />
                  for everyday clinical practice.
                </h2>

                <p className="text-sm md:text-base text-slate-100/90 leading-6">
                  Focused on Ortho, Gastro and Respiratory segments with
                  reliable and affordable formulations designed for Indian
                  patients and clinicians.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="#products"
                    className="px-5 py-2.5 rounded-full bg-white text-sky-900 text-sm font-semibold hover:bg-slate-100 transition-colors"
                  >
                    View Products
                  </a>
                  <a
                    href="#contact"
                    className="px-5 py-2.5 rounded-full border border-white/70 text-white text-sm font-semibold bg-transparent hover:bg-white/10 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 text-xs text-slate-100/90">
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
            </div>
          </section>

          {/* ABOUT */}
          <section
            id="about"
            className="bg-white border-b border-slate-200 py-12 md:py-16"
          >
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
              <div className="flex justify-center md:justify-start js-animate">
                <div className="rounded-[32px] bg-white border border-slate-200 overflow-hidden max-w-md w-full transition-transform duration-200 ease-out hover:-translate-y-1">
                  <img
                    src="/about-banner.jpg"
                    alt="Scientific healthcare visual"
                    className="w-full h-[260px] md:h-[320px] object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4 js-animate">
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
                  Our current portfolio is focused on Orthopaedics,
                  Gastroenterology and Respiratory care. Each brand is
                  conceptualised keeping in mind real-world prescribing patterns
                  and the needs of Indian patients, with an emphasis on
                  efficacy, safety and patient-friendly pricing.
                </p>
                <p className="text-sm md:text-base text-slate-600 leading-6">
                  Over time, we aim to build a differentiated presence in
                  nutrition and wellness segments while maintaining our
                  commitment to quality, transparency and ethical promotion.
                </p>
              </div>
            </div>
          </section>

          {/* DIVISIONS */}
          <section
            id="divisions"
            className="border-b border-slate-200 bg-[#f5fbff]"
          >
            <div className="max-w-6xl mx-auto px-4 py-10 space-y-5 js-animate">
              <h2 className="text-xl font-bold text-sky-900">
                Therapeutic Divisions
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {divisions.map((d) => (
                  <div
                    key={d.title}
                    className="bg-white rounded-xl border border-slate-200 p-4 space-y-1 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-sky-300"
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

          {/* PRODUCTS + VERIFY */}
          <section id="products" className="border-b bg-white">
            <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
              <div className="md:col-span-3 space-y-4 js-animate">
                <div className="flex items-center justify-between gap-3">
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
                        className="group relative bg-slate-50/95 rounded-2xl border border-slate-200 px-4 py-5 flex flex-col h-full overflow-hidden hover:bg-white hover:border-sky-300 transition-all duration-200 ease-out hover:-translate-y-1 cursor-pointer"
                      >
                        <div className="relative h-32 bg-white rounded-xl flex items-center justify-center overflow-hidden mb-3 border border-slate-200/80 transition-transform duration-200 ease-out group-hover:scale-[1.03]">
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
                          <button className="px-3 py-1 border rounded-md hover:bg-slate-50 transition-colors">
                            Details
                          </button>
                          <button
                            className="px-3 py-1 bg-sky-700 text-white rounded-md hover:bg-sky-800 transition-colors"
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

              <div className="space-y-4 js-animate" id="verify">
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 space-y-2">
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
                    className="w-full mt-2 px-3 py-2 rounded-md bg-sky-700 text-white text-sm font-medium hover:bg-sky-800 transition-colors"
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

                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 space-y-2">
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
            <div className="max-w-6xl mx-auto px-4 py-10 space-y-4 js-animate">
              <h2 className="text-xl font-bold text-sky-900">
                Why doctors trust Angular Pharma
              </h2>
              <p className="text-sm text-gray-600 max-w-3xl">
                Our objective is to support clinicians with dependable brands
                that align with good clinical practice while remaining
                affordable for patients.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2 bg-white rounded-xl border border-slate-200 p-3 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-sky-300"
                  >
                    <span className="text-sky-700 text-lg mt-[2px]">✔</span>
                    <p className="text-xs leading-5">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section
            id="contact"
            className="bg-white py-12 border-t border-slate-200"
          >
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
              <div className="space-y-4 js-animate">
                <h2 className="text-2xl md:text-3xl font-bold text-sky-900">
                  Contact Us
                </h2>
                <p className="text-sm text-gray-600 leading-6">
                  We work with hospitals, pharmacies, distributors and medical
                  institutions to ensure timely access to essential
                  formulations. Share your requirement and our team will connect
                  with you.
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

              <form className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-sky-300 js-animate">
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
                <button className="bg-sky-700 hover:bg-sky-800 text-white w-full py-2 rounded-md text-sm font-medium transition-colors">
                  Send Message
                </button>
                <p className="text-[11px] text-gray-400 text-center">
                  (Form is for display only – email / WhatsApp integration can
                  be added later.)
                </p>
              </form>
            </div>
          </section>
        </main>

        <footer className="bg-white border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-gray-500 flex justify-between flex-wrap gap-2">
            <span>© {new Date().getFullYear()} Angular Pharmaceuticals.</span>
            <span>Designed for Dinu.</span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
