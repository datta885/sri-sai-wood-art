export default function SriSaiWoodArtWebsite() {
  const services = [
    'Custom Name Boards',
    'movie sets',
    'Wedding Decorations',
    'Concert & Stage Designs',
    'CNC Cutting & Engraving',
    'Acrylic Letters',
    'Wood Wall Decor',
    'Corporate Signage',
  ]; 

  const highlights = [
    '10,000+ Completed Projects',
    '3 Advanced CNC Machines',
    '1 Double-Spindle CNC Machine',
    '2 Single-Spindle CNC Machines',
    'Precision Cutting & Engraving',
    'Bulk Order Capability', 
  ]; 

  const gallery = [
    'LED Name Boards',
    'Wedding Backdrops',
    'Decorative Wall Panels',
    'Acrylic Signage',
    'Stage Designs',
    'Custom Gifts',
  ]; 

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-green-700">Sri Sai Wood Art</h1>
            <p className="text-sm text-slate-500">Precision in Every Cut</p>
          </div>
          <a
            href="https://wa.me/919985589355"
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-2xl shadow-lg font-semibold"
          >
            WhatsApp Us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              10,000+ Projects Completed
            </p>
            <h2 className="text-5xl font-extrabold leading-tight mb-6">
              Premium CNC Cutting, Wood Art & Custom Designs
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-8">
              We specialize in custom name boards, wedding decorations, acrylic signage,
              concert stage designs, and precision CNC fabrication.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919985589355"
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl shadow-xl font-semibold"
              >
                Get a Quote
              </a>
              <a
                href="#contact"
                className="border border-slate-300 px-6 py-3 rounded-2xl font-semibold"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {gallery.map((item) => (
              <div
                key={item}
                className="aspect-square rounded-3xl bg-slate-100 border border-slate-200 flex items-center justify-center p-4 text-center font-semibold text-slate-600 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6">About Sri Sai Wood Art</h3>
            <p className="text-slate-600 leading-8">
              Sri Sai Wood Art is a leading CNC and custom fabrication company based in
              Hyderabad. We create premium wood, acrylic, and decorative designs for homes,
              events, and businesses. Our advanced manufacturing setup enables both custom
              one-off pieces and large-scale production.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="p-5 rounded-2xl bg-green-50 border border-green-100 font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service}
                className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 font-semibold"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-[2rem] p-10 shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Advanced CNC Technology</h3>
          <p className="text-green-50 leading-8 max-w-4xl">
            Our workshop operates three industrial CNC machines, including one
            double-spindle CNC router for high-speed bulk production and two
            single-spindle machines for precision custom work.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-3 text-slate-300 leading-8">
              <p><strong>Phone:</strong> 9985589355</p>
              <p><strong>Email:</strong> srisaiwoodart@gmail.com</p>
              <p>
                <strong>Address:</strong> 6-10-4/A, Raju Colony, Balanagar,
                Hyderabad - 500042
              </p>
              <p><strong>Hours:</strong> Monday to Saturday, 9:00 AM - 10:00 PM</p>
              <p><strong>Sunday:</strong> Closed</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h4 className="text-2xl font-bold mb-4">Get a Free Quote</h4>
            <p className="text-slate-300 mb-6">
              Send your design idea, dimensions, and material requirements.
            </p>
            <a
              href="https://wa.me/919985589355"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 text-center py-6 text-sm">
        © {new Date().getFullYear()} Sri Sai Wood Art. All rights reserved.
      </footer>
    </div>
  );
}
