import React from "react";

const products = [
  {
    name: "Rebglar DSR",
    code: "RG-001",
    pack: "10x10",
    image: "/rebglar.jpg",
  },
  {
    name: "ANGULAR - SP",
    code: "SP-002",
    pack: "10x10",
    image: "/angularsp.jpg",
  },
  {
    name: "MONTGLAR-LC",
    code: "MT-003",
    pack: "10x10",
    image: "/montglar.jpg",
  },
  { name: "Shalgrow", code: "SG-004", pack: "10x10" },
  { name: "CardioPlus", code: "CP-005", pack: "10x10" },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-sky-700 text-white flex items-center justify-center text-sm font-bold">
              A
            </div>
            <div>
              <h1 className="text-xl font-bold text-sky-800">
                Angular Pharmaceuticals
              </h1>
              <p className="text-xs text-gray-500">
                Quality medicines for every family
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-4 text-sm text-gray-600">
            <a href="#products" className="hover:text-sky-700">
              Products
            </a>
            <a href="#verify" className="hover:text-sky-700">
              Verify Product
            </a>
            <a href="#contact" className="hover:text-sky-700">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main layout */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 grid gap-8 md:grid-cols-4">
        {/* Left: hero + products */}
        <section className="md:col-span-3 space-y-6">
          {/* Hero card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-sky-900">
                Trusted healthcare partner for your practice
              </h2>
              <p className="mt-2 text-sm text-gray-600 max-w-xl">
                Angular Pharma brings clinically trusted formulations with a
                focus on quality, efficacy and patient care.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="#products"
                  className="px-4 py-2 rounded-full bg-sky-700 text-white text-sm font-medium hover:bg-sky-800"
                >
                  View Products
                </a>
                <a
                  href="#verify"
                  className="px-4 py-2 rounded-full border border-sky-700 text-sky-700 text-sm font-medium hover:bg-sky-50"
                >
                  Verify Product
                </a>
              </div>
            </div>
          </div>

          {/* Products section */}
          <div id="products" className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-gray-800">
                Key Products
              </h3>
              <input
                placeholder="Search by name or code"
                className="hidden md:block px-4 py-2 border rounded-md w-72 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
            </div>

            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p, i) => (
                <article
                  key={i}
                  className="bg-white rounded-2xl shadow-lg p-4 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:-rotate-1"
                >
                  <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden shadow-inner mb-3">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <span className="text-gray-400 text-sm">
                        Product Image
                      </span>
                    )}
                  </div>

                  <h4 className="mt-1 font-semibold text-lg">{p.name}</h4>
                  <div className="text-sm text-gray-500">
                    Code: {p.code} • Pack: {p.pack}
                  </div>

                  <div className="mt-4 flex gap-3">
                    <button className="px-3 py-2 border rounded-md text-sm">
                      Details
                    </button>
                    <button className="px-3 py-2 bg-red-600 text-white rounded-md text-sm">
                      Verify
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Right side: verify + small contact summary */}
        <aside className="space-y-4">
          {/* Verify card */}
          <div
            id="verify"
            className="bg-white rounded-2xl shadow-sm p-5 space-y-3"
          >
            <h3 className="text-sm font-semibold text-gray-800">
              Verify Product
            </h3>
            <p className="text-xs text-gray-500">
              Enter the product code printed near the QR to check authenticity.
            </p>
            <input
              placeholder="Enter product code (e.g. RG-001)"
              className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
            <button className="w-full mt-2 px-3 py-2 rounded-md bg-sky-700 text-white text-sm font-medium hover:bg-sky-800">
              Verify Now
            </button>
          </div>

          {/* Contact summary card */}
          <div
            id="contact-summary"
            className="bg-white rounded-2xl shadow-sm p-5 space-y-3"
          >
            <h3 className="text-sm font-semibold text-gray-800">
              Contact & Distribution
            </h3>
            <p className="text-xs text-gray-500">
              For hospital supply, distribution or business enquiries, please
              reach out via email or contact form below.
            </p>
            <div className="text-xs text-gray-600 space-y-1">
              <p>
                <span className="font-medium">Email:</span>{" "}
              angularpharmaceuticals@gmail.com

              </p>
              <p>
                <span className="font-medium">Location:</span> Telangana, India
              </p>
            </div>
          </div>
        </aside>
      </main>

      {/* Full Contact Section (like Orven) */}
      <section id="contact" className="bg-white border-t py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          {/* Left side text */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-sky-900">Get in Touch</h2>
            <p className="text-sm text-gray-600 leading-6">
              We work closely with hospitals, pharmacies, distributors and
              medical institutions to ensure timely access to essential
              formulations. Share your requirement and our team will connect
              with you shortly.
            </p>

            <div className="text-sm text-gray-700 space-y-2">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                angularpharma@gmail.com
              </p>
              <p>
                <span className="font-semibold">Location:</span> Telangana,
                India
              </p>
            </div>

            <p className="text-xs text-gray-500">
              Kindly mention your speciality / area (Ortho, Gastro, Respiratory,
              etc.) and location so that we can route your enquiry to the right
              team member.
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
              placeholder="Subject"
            />
            <textarea
              rows="4"
              className="w-full px-3 py-2 border rounded-md text-sm resize-none"
              placeholder="Message"
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
