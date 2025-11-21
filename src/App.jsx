import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-br from-red-600 to-orange-400 flex items-center justify-center text-white font-bold">AP</div>
            <div>
              <div className="text-lg font-semibold">Angular Pharmaceuticals</div>
              <div className="text-sm text-gray-500">Trusted healthcare products • GMP certified</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#products" className="hover:text-red-600">Products</a>
            <a href="#verify" className="hover:text-red-600">Verify</a>
            <a href="#about" className="hover:text-red-600">About</a>
            <a href="#contact" className="px-4 py-2 bg-red-600 text-white rounded-md text-sm">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight">Quality medicines for every family</h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              Angular Pharmaceuticals is committed to delivering safe, affordable and effective medicines manufactured under strict GMP standards.
              Trusted by healthcare professionals and families across the country.
            </p>

            <div className="mt-6 flex gap-4">
              <a href="#products" className="inline-flex items-center px-5 py-3 bg-red-600 text-white rounded-md shadow">View Products</a>
              <a href="#verify" className="inline-flex items-center px-5 py-3 border border-gray-200 rounded-md">Verify Product</a>
            </div>

            <div className="mt-6 flex gap-6 text-sm text-gray-500">
              <div><strong>GMP</strong> Certified</div>
              <div><strong>ISO</strong> Standards</div>
              <div><strong>24/7</strong> Customer Support</div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-32 h-32 bg-gray-100 rounded-md mx-auto mb-4 flex items-center justify-center text-gray-400">Product</div>
              <div className="text-center">
                <div className="text-lg font-semibold">Rebglar DSR</div>
                <div className="text-sm text-gray-500">10x10 • Tablet</div>
                <div className="mt-4 text-gray-700">Batch: AB1234 • Mfg: 01-2025 • Exp: 01-2027</div>
                <div className="mt-4 flex gap-2 justify-center">
                  <button className="px-4 py-2 bg-gray-100 rounded-md">View Details</button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-md">Verify</button>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-500">Trusted by pharmacists and hospitals</div>
          </div>
        </section>

        <section id="products" className="mt-12">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Our Products</h2>
              <p className="text-gray-500 text-sm">High-quality medicines across multiple therapeutic segments.</p>
            </div>

            <div className="hidden md:block">
              <input placeholder="Search by name or code" className="px-4 py-2 border rounded-md w-80" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Rebglar DSR', code: 'RG-001', pack: '10x10' },
              { name: 'Axonguard', code: 'AX-002', pack: '10x10' },
              { name: 'Montglar', code: 'MT-003', pack: '10x10' },
              { name: 'Shalgrow', code: 'SG-004', pack: '10x10' },
              { name: 'CardioPlus', code: 'CP-005', pack: '10x10' },
            ].map((p, i) => (
              <article key={i} className="bg-white rounded-lg shadow p-4">
                <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">Product Image</div>
                <h3 className="mt-3 font-semibold">{p.name}</h3>
                <div className="text-sm text-gray-500">Code: {p.code} • {p.pack}</div>

                <div className="mt-4 flex gap-3">
                  <button className="px-3 py-2 border rounded-md">Details</button>
                  <button className="px-3 py-2 bg-red-600 text-white rounded-md">Verify</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="verify" className="mt-12 bg-white p-6 rounded-lg shadow">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-48 h-48 bg-gray-100 rounded-md flex items-center justify-center">QR</div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Verify Product</h3>
              <p className="text-gray-500">Scan the QR on the blister or enter the code to check authenticity.</p>

              <div className="mt-4 flex gap-3">
                <input placeholder="Enter product code e.g. RG-001-AB12" className="px-4 py-2 border rounded-md flex-1" />
                <button className="px-4 py-2 bg-red-600 text-white rounded-md">Check</button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">About Angular Pharmaceuticals</h3>
            <p className="mt-3 text-gray-600">
              Angular Pharmaceuticals is dedicated to producing affordable and reliable medicines.
              Our facilities follow strict GMP guidelines and undergo rigorous quality checks.
            </p>

            <ul className="mt-4 list-disc pl-5 text-gray-600">
              <li>GMP certified manufacturing units</li>
              <li>Stringent quality testing</li>
              <li>Distribution across India</li>
            </ul>
          </div>

          <aside id="contact" className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="mt-3 text-sm text-gray-700">
              <div><strong>Phone:</strong> +91 98765 43210</div>
              <div><strong>Email:</strong> hello@angularpharma.in</div>
              <div className="mt-3"><strong>Address:</strong> Hyderabad, India</div>
            </div>

            <form className="mt-4 flex flex-col gap-3">
              <input placeholder="Your name" className="px-3 py-2 border rounded-md" />
              <input placeholder="Phone or email" className="px-3 py-2 border rounded-md" />
              <textarea placeholder="Message" className="px-3 py-2 border rounded-md" rows={4}></textarea>

              <button className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md">Send Message</button>
            </form>
          </aside>
        </section>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div>© {new Date().getFullYear()} Angular Pharmaceuticals. All rights reserved.</div>
          <div className="mt-2 md:mt-0">Designed for Dinu</div>
        </div>
      </footer>
    </div>
  );
}
