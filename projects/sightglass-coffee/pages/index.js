import Head from "next/head";

const CDN = "https://sightglasscoffee.com/cdn/shop/files";

const gallery = [
  { src: `${CDN}/20th-min.jpg?v=1757985881&width=1360`, alt: "Sightglass Coffee Mission café interior with wood panels and espresso machine" },
  { src: `${CDN}/Divisadero-min.jpg?v=1757985881&width=1360`, alt: "Baristas working the counter at Sightglass Coffee Divisadero" },
  { src: `${CDN}/Sightglass-Berkeley-Cafe-Bar.jpg?v=1778649943&width=1800`, alt: "Sightglass Coffee Berkeley café bar" },
  { src: `${CDN}/Sycamore-min.jpg?v=1757985881&width=1360`, alt: "Sightglass Coffee Hollywood window at Sycamore and Willoughby" },
  { src: `${CDN}/Coffee-Beans.jpg?v=1758850279&width=2000`, alt: "Coffee beans in grinders at Sightglass 7th Street" },
  { src: `${CDN}/Sightglass-Pastries.jpg?v=1761939748&width=1000`, alt: "Fresh pastries at Sightglass Coffee" },
];

const menu = [
  { name: "Summer Solstice", notes: "Nectarine, Blackberry, Honeysuckle", price: "$25.00", tag: "Seasonal Blend" },
  { name: "Owl's Howl", notes: "Cacao Nib, Stone Fruit, Candied Orange Peel", price: "$21.00", tag: "Organic Espresso" },
  { name: "Grizzly Peak", notes: "Pear, Cara Cara Orange, Hazelnut", price: "$22.50", tag: "Regenerative Organic" },
  { name: "Blueboon", notes: "Milk Chocolate, Mandarin, Honeysuckle", price: "$21.00", tag: "Organic Blend" },
  { name: "Crown Point", notes: "Raspberry, Chocolate, Butterscotch", price: "$21.00", tag: "Organic Espresso" },
  { name: "Banner Dark", notes: "Bittersweet Cocoa, Toffee, Graham Cracker", price: "$22.00", tag: "Organic Blend" },
  { name: "Women of Coffee: Peru", notes: "Persimmon, Cocoa Nib, Nougat", price: "$25.00", tag: "Single Origin" },
  { name: "Ethiopia, Tagel Alemayehu, Hambela", notes: "Raspberry, Honeydew, Key Lime", price: "$27.50", tag: "Single Origin" },
];

const locations = [
  { name: "SoMa — 7th St", address: "270 7th Street, San Francisco, CA", note: "Our original home & roastery, in a 1914 warehouse." },
  { name: "Mission", address: "3014 20th Street, San Francisco, CA", note: "A neighborhood gem on a quiet Mission block." },
  { name: "Divisadero", address: "301 Divisadero Street, San Francisco, CA", note: "A neighborhood favorite in the Lower Haight." },
  { name: "Hollywood", address: "7051 West Willoughby Avenue, Los Angeles, CA", note: "Our home away from home, at Sycamore & Willoughby." },
  { name: "Berkeley", address: "2169 University Avenue, Berkeley, CA 94704", note: "Our first East Bay café, across from UC Berkeley. (415) 463-1673" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com/sightglass" },
  { label: "Facebook", href: "https://www.facebook.com/sightglasscoffee" },
  { label: "TikTok", href: "https://tiktok.com/@sightglasscoffee" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/sightglass/" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Sightglass Coffee — Small-Batch Roasting in San Francisco</title>
        <meta name="description" content="Sightglass Coffee began in 2009 in San Francisco's SoMa district. Small-batch, roasted to order in California, sourced directly from producers worldwide." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <nav className="nav">
        <a className="brand" href="#top">SIGHTGLASS</a>
        <div className="navlinks">
          <a href="#gallery">Cafés</a>
          <a href="#menu">Coffee</a>
          <a href="#about">Our Story</a>
          <a href="#locations">Visit</a>
        </div>
        <a className="shopbtn" href="https://sightglasscoffee.com/collections/coffee" target="_blank" rel="noopener noreferrer">Shop</a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">San Francisco · Est. 2009</p>
          <h1>Coffee can be both<br /><span>art and connection.</span></h1>
          <p className="sub">From bright single origins to well-balanced blends and espresso — roasted to order in small batches in California.</p>
          <a className="cta" href="#menu">Explore What's Roasting</a>
        </div>
      </header>

      <section id="gallery" className="section">
        <h2 className="section-title">Coffee Served Daily</h2>
        <p className="section-lead">Each space is rooted in its neighborhood and focused on doing coffee right.</p>
        <div className="grid">
          {gallery.map((g) => (
            <div className="tile" key={g.src}>
              <img src={g.src} alt={g.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="section dark">
        <h2 className="section-title">What's Roasting</h2>
        <p className="section-lead">Sourced directly from producers worldwide who share our commitment to sustainable farming.</p>
        <div className="menu">
          {menu.map((m) => (
            <div className="menu-row" key={m.name}>
              <div className="menu-info">
                <span className="menu-tag">{m.tag}</span>
                <h3>{m.name}</h3>
                <p>{m.notes}</p>
              </div>
              <div className="menu-price">{m.price}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section about">
        <div className="about-text">
          <h2 className="section-title left">Our Story</h2>
          <p>Sightglass began in 2009 as an aspiration to source, produce, and share distinctive, quality-focused coffees. We started with a small, rickety service-cart in San Francisco's SoMa district — a few Chemex pots and a leaky vintage 2-group espresso machine behind a roll-up garage door in a sturdy 1914-built warehouse.</p>
          <p>People came to visit, and remarkably, even came back to taste more. Two years later, the entire warehouse became our production roastery, an unconventional coffee bar, a community gathering space, and our headquarters.</p>
          <p>Our company takes its name from the "sightglass," the viewing window on our vintage PROBAT roaster that exposes the complex and delicate process of roasting coffee.</p>
          <p className="press">As featured in Bon Appétit, NYT Wirecutter, Food Network, New York Magazine, CNN Underscored &amp; Chowhound.</p>
        </div>
        <div className="about-media">
          <img src={`${CDN}/Sightglass-Our-Company-History.jpg?v=1760594738&width=1920`} alt="Sightglass Coffee roastery history" loading="lazy" />
        </div>
      </section>

      <section className="values">
        <div className="value">
          <h3>Responsible Sourcing</h3>
          <p>Sourced directly from producers who share our devotion to freshly harvested coffee and sustainable farming. We proudly offer USDA-certified organic coffee.</p>
        </div>
        <div className="value">
          <h3>Small Batch Roasting</h3>
          <p>Each cup is unique and warrants the utmost attention to detail. That's why we roast only in small batches on a vintage PROBAT.</p>
        </div>
        <div className="value">
          <h3>Sustainability &amp; Community</h3>
          <p>By collaborating with smallholder farmers, we help build sustainable, profitable practices that benefit the environment and their communities.</p>
        </div>
      </section>

      <section id="locations" className="section dark">
        <h2 className="section-title">Visit Our Cafés</h2>
        <p className="section-lead">Five neighborhood cafés across San Francisco, the East Bay, and Los Angeles.</p>
        <div className="loc-grid">
          {locations.map((l) => (
            <div className="loc" key={l.name}>
              <h3>{l.name}</h3>
              <p className="addr">{l.address}</p>
              <p className="locnote">{l.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="social">
        <h2 className="section-title">Follow Along</h2>
        <div className="social-links">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p className="foot-brand">SIGHTGLASS COFFEE</p>
        <p>San Francisco, California · Roasted locally in SF &amp; LA</p>
        <p className="foot-tag">Coffee can be both art and connection.</p>
        <p className="copyright">© Sightglass Coffee 2026</p>
      </footer>

      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          background: #0a0a0a;
          color: #f0ebe0;
          font-family: Georgia, "Times New Roman", serif;
          -webkit-font-smoothing: antialiased;
        }
        a { color: inherit; text-decoration: none; }
        .nav {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 40px;
          background: rgba(10,10,10,0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(171,140,82,0.25);
        }
        .brand {
          font-family: system-ui, -apple-system, sans-serif;
          font-weight: 700; letter-spacing: 4px; font-size: 18px; color: #f0ebe0;
        }
        .navlinks {
          display: flex; gap: 30px;
          font-family: system-ui, sans-serif; font-size: 13px;
          letter-spacing: 1px; text-transform: uppercase;
        }
        .navlinks a { color: #cabfa6; transition: color .2s; }
        .navlinks a:hover { color: #ab8c52; }
        .shopbtn {
          font-family: system-ui, sans-serif; font-size: 12px; letter-spacing: 1.5px;
          text-transform: uppercase; padding: 9px 20px;
          border: 1px solid #ab8c52; color: #ab8c52; border-radius: 2px;
          transition: all .2s;
        }
        .shopbtn:hover { background: #ab8c52; color: #0a0a0a; }
        .hero {
          position: relative; min-height: 92vh;
          display: flex; align-items: center;
          background-image: url("${CDN}/7th_Street-min.jpg?v=1757985881&width=1920");
          background-size: cover; background-position: center;
        }
        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.65) 50%, rgba(10,10,10,0.45) 100%);
        }
        .hero-content { position: relative; z-index: 2; padding: 0 40px; max-width: 760px; }
        .eyebrow {
          font-family: system-ui, sans-serif; text-transform: uppercase;
          letter-spacing: 3px; font-size: 13px; color: #ab8c52; margin-bottom: 22px;
        }
        .hero h1 { font-size: clamp(40px, 7vw, 78px); line-height: 1.05; font-weight: 400; }
        .hero h1 span { color: #ab8c52; font-style: italic; }
        .sub { margin: 26px 0 34px; font-size: clamp(16px,2vw,20px); line-height: 1.6; color: #d8d0bf; max-width: 560px; }
        .cta {
          display: inline-block; font-family: system-ui, sans-serif; font-size: 13px;
          letter-spacing: 2px; text-transform: uppercase; padding: 15px 34px;
          background: #ab8c52; color: #0a0a0a; border-radius: 2px; transition: transform .2s, background .2s;
        }
        .cta:hover { background: #c4a567; transform: translateY(-2px); }
        .section { padding: 90px 40px; max-width: 1200px; margin: 0 auto; }
        .section.dark { background: #111; max-width: none; }
        .section.dark > * { max-width: 1200px; margin-left: auto; margin-right: auto; }
        .section-title {
          font-size: clamp(28px, 4vw, 44px); text-align: center; font-weight: 400;
          letter-spacing: 1px; margin-bottom: 14px;
        }
        .section-title.left { text-align: left; }
        .section-lead { text-align: center; color: #b3a98f; font-size: 17px; margin-bottom: 48px; line-height: 1.6; }
        .grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
        }
        .tile { overflow: hidden; border-radius: 4px; aspect-ratio: 4/3; background: #1a1a1a; }
        .tile img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; display: block; }
        .tile:hover img { transform: scale(1.06); }
        .menu { max-width: 860px; margin: 0 auto; }
        .menu-row {
          display: flex; align-items: center; justify-content: space-between;
          padding: 22px 0; border-bottom: 1px solid rgba(171,140,82,0.2); gap: 20px;
        }
        .menu-tag {
          font-family: system-ui, sans-serif; font-size: 11px; letter-spacing: 1.5px;
          text-transform: uppercase; color: #ab8c52;
        }
        .menu-info h3 { font-size: 22px; font-weight: 400; margin: 5px 0 4px; }
        .menu-info p { color: #9c937c; font-style: italic; font-size: 15px; }
        .menu-price { font-size: 22px; color: #ab8c52; white-space: nowrap; }
        .about {
          display: grid; grid-template-columns: 1.1fr 1fr; gap: 56px; align-items: center;
        }
        .about-text p { line-height: 1.8; margin-bottom: 18px; color: #d2cab8; font-size: 16px; }
        .about-text .press { color: #ab8c52; font-style: italic; font-size: 15px; }
        .about-media img { width: 100%; border-radius: 4px; display: block; }
        .values {
          display: grid; grid-template-columns: repeat(3,1fr); gap: 30px;
          max-width: 1200px; margin: 0 auto; padding: 20px 40px 90px;
        }
        .value { border-top: 2px solid #ab8c52; padding-top: 20px; }
        .value h3 { font-size: 21px; font-weight: 400; margin-bottom: 12px; }
        .value p { color: #a9a088; line-height: 1.7; font-size: 15px; }
        .loc-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; }
        .loc { background: #0a0a0a; border: 1px solid rgba(171,140,82,0.25); border-radius: 4px; padding: 28px; }
        .loc h3 { font-size: 22px; font-weight: 400; color: #ab8c52; margin-bottom: 10px; }
        .loc .addr { font-size: 15px; color: #e3dccb; margin-bottom: 10px; }
        .loc .locnote { font-size: 14px; color: #968d76; line-height: 1.6; }
        .social { text-align: center; padding: 80px 40px; }
        .social-links { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-top: 30px; }
        .social-links a {
          font-family: system-ui, sans-serif; font-size: 13px; letter-spacing: 1.5px;
          text-transform: uppercase; padding: 12px 26px; border: 1px solid #ab8c52;
          color: #ab8c52; border-radius: 2px; transition: all .2s;
        }
        .social-links a:hover { background: #ab8c52; color: #0a0a0a; }
        .footer {
          text-align: center; padding: 70px 40px; background: #111;
          border-top: 1px solid rgba(171,140,82,0.25);
        }
        .foot-brand {
          font-family: system-ui, sans-serif; letter-spacing: 5px; font-weight: 700;
          font-size: 18px; margin-bottom: 14px;
        }
        .footer p { color: #9c937c; font-size: 15px; margin-bottom: 8px; }
        .foot-tag { font-style: italic; color: #ab8c52 !important; }
        .copyright { font-size: 13px !important; color: #6b6557 !important; margin-top: 14px; }
        @media (max-width: 820px) {
          .nav { padding: 14px 20px; }
          .navlinks { display: none; }
          .section { padding: 60px 20px; }
          .grid, .loc-grid, .values { grid-template-columns: 1fr; }
          .about { grid-template-columns: 1fr; gap: 30px; }
          .values { padding: 20px 20px 60px; }
          .menu-info h3 { font-size: 19px; }
        }
      `}</style>
    </>
  );
}
