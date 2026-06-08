import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const accent = "#c8102e";
  const accentSoft = "#e23b4d";
  const cream = "#f6f5f3";

  const products = [
    {
      name: "Hair Bender",
      type: "Blend · Roast 7",
      notes: "Citrus · Dark Chocolate · Raisin",
      img: "https://www.stumptowncoffee.com/cdn/shop/files/SCR_Hair_Bender_72DPI.png?v=1775167285&width=720",
    },
    {
      name: "Holler Mountain",
      type: "Blend · Roast 5",
      notes: "Citrus · Caramel · Berry Jam",
      img: "https://www.stumptowncoffee.com/cdn/shop/files/SCR_Holler_Mt_72DPI.png?v=1775167340&width=720",
    },
    {
      name: "Guatemala El Injerto Bourbon",
      type: "Single Origin · Roast 3",
      notes: "Milk Chocolate · Orange · Caramel",
      img: "https://www.stumptowncoffee.com/cdn/shop/files/Guatemala_Injerto_72DPI.png?v=1748639553&width=720",
    },
    {
      name: "Ethiopia Mordecofe",
      type: "Single Origin · Roast 5",
      notes: "Nectarine · Melon · Jasmine",
      img: "https://www.stumptowncoffee.com/cdn/shop/files/Ethiopia_Mordecofe_72DPI.png?v=1748639653&width=720",
    },
    {
      name: "Rwanda Huye Mountain",
      type: "Single Origin",
      notes: "Dried Peach · Dark Chocolate · Golden Syrup",
      img: "https://www.stumptowncoffee.com/cdn/shop/files/SCR_Rwanda_Huye_34_72DPI_1.png?v=1778173030&width=1200",
    },
  ];

  const gallery = [
    { url: "https://cdn.builder.io/api/v1/image/assets%2F9b6836fa3ba643fe8fff0164397e2c60%2F12a66943275047ccb04866a4c502d936?width=1985", caption: "Division Cafe — Portland" },
    { url: "https://cdn.builder.io/api/v1/image/assets%2F9b6836fa3ba643fe8fff0164397e2c60%2F28ac3fb3ba684fd1961212f5ff94dbbf?width=849", caption: "Pour-over bar" },
    { url: "https://cdn.builder.io/api/v1/image/assets%2F9b6836fa3ba643fe8fff0164397e2c60%2F62556ea1912c4b53979e5c00398631ba?width=500", caption: "Downtown PDX" },
    { url: "https://cdn.builder.io/api/v1/image/assets%2F9b6836fa3ba643fe8fff0164397e2c60%2F4bcb87ca9964452ab4cfb8e223c3a0d0?width=500", caption: "SW Washington" },
    { url: "https://cdn.builder.io/api/v1/image/assets%2F9b6836fa3ba643fe8fff0164397e2c60%2Fff53a4be8c1f42fb95c5ac38d87e457c?width=500", caption: "Belmont Cafe" },
    { url: "https://cdn.builder.io/api/v1/image/assets%2F9b6836fa3ba643fe8fff0164397e2c60%2F09b26b1413954c8a9d45743d066f00f6?width=500", caption: "Stumptown PDX — Airport" },
  ];

  const locations = [
    { city: "Portland", name: "Division", addr: "4525 SE Division St, Portland, OR 97206", hours: "Weekdays 6:30AM–5PM · Weekends 7AM–5PM" },
    { city: "Portland", name: "Downtown", addr: "128 SW 3rd Ave, Portland, OR 97204", hours: "Daily 7AM–5PM" },
    { city: "Portland", name: "Stumptown PDX (Airport)", addr: "7000 NE Airport Way, Portland, OR 97218", hours: "Daily 5AM–5PM" },
    { city: "New York", name: "Greenwich Village", addr: "30 W 8th Street, New York, NY 10011", hours: "Weekdays 6:30AM–7PM · Weekends 7AM–7PM" },
    { city: "New York", name: "Brooklyn", addr: "212B Pacific Street, Brooklyn, NY 11201", hours: "Weekdays 6:30AM–5PM · Weekends 7AM–5PM" },
    { city: "New York", name: "Ace Hotel New York", addr: "18 W 29th Street, New York, NY 10001", hours: "Weekdays 6AM–5PM · Weekends 6:30AM–5PM" },
    { city: "Los Angeles", name: "Pasadena", addr: "1982 Lincoln Ave, Pasadena, CA 91103", hours: "Weekdays 6:30AM–6PM · Weekends 7AM–6PM" },
    { city: "Kyoto", name: "Ace Hotel Kyoto", addr: "1F Kurumayacho 245-2, Kyoto, Japan", hours: "Daily 7AM–7PM" },
  ];

  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 450); return () => clearTimeout(t); }, []);

  return (
    <>
      <Head>
        <title>Stumptown Coffee Roasters — Craft Coffee from Portland</title>
        <meta name="description" content="Stumptown Coffee Roasters brings you fresh beans, cold brew, and good vibes. Direct Trade coffee roasted in Portland, Oregon since 1999. Cafes in Portland, New York, LA, and Kyoto." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1714" />
        <meta property="og:title" content="Stumptown Coffee Roasters" />
        <meta property="og:description" content="Fresh beans, cold brew, and good vibes. Direct Trade coffee roasted in Portland since 1999." />
        <meta property="og:image" content="https://www.stumptowncoffee.com/cdn/shop/files/stumptown-social-share.jpg?v=1616691690" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.stumptowncoffee.com/" />
      </Head>

      <main>
        {/* NAV */}
        <nav className="nav">
          <div className="nav-inner">
            <a href="#top" className="brand">STUMPTOWN<span style={{ color: accent }}>.</span></a>
            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
              <a href="#coffee" onClick={() => setMenuOpen(false)}>Coffee</a>
              <a href="#gallery" onClick={() => setMenuOpen(false)}>Cafes</a>
              <a href="#story" onClick={() => setMenuOpen(false)}>Our Story</a>
              <a href="#locations" onClick={() => setMenuOpen(false)}>Locations</a>
              <a href="https://www.stumptowncoffee.com/collections/coffee" className="nav-cta" target="_blank" rel="noopener">Shop</a>
            </div>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </nav>

        {/* HERO */}
        <header id="top" className="hero">
          <div className="hero-bg" style={{ backgroundImage: `url(https://www.stumptowncoffee.com/cdn/shop/files/Huye_Homepage_BG_2026.jpg?v=1778172997&width=2400)` }} />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="kicker">Portland, Oregon · Since 1999</p>
            <h1>Coffee is about<br /><span style={{ color: accentSoft }}>pleasure.</span></h1>
            <p className="hero-sub">Fresh beans, cold brew, and good vibes. We search the world for the best coffee, then roast it to honor every producer's craft.</p>
            <div className="hero-actions">
              <a href="https://www.stumptowncoffee.com/collections/coffee" className="btn-primary" target="_blank" rel="noopener">Shop Coffee</a>
              <a href="#story" className="btn-ghost">Our Story</a>
            </div>
          </div>
          <div className="hero-scroll">scroll ↓</div>
        </header>

        {/* MARQUEE */}
        <div className="marquee">
          <div className="marquee-track">
            {Array(2).fill(0).map((_, i) => (
              <span key={i}>Direct Trade ✦ Roasted in Portland ✦ Hair Bender ✦ Cold Brew ✦ 25+ Years ✦ Single Origin ✦&nbsp;</span>
            ))}
          </div>
        </div>

        {/* COFFEE */}
        <section id="coffee" className="section">
          <div className="section-head">
            <span className="eyebrow" style={{ color: accent }}>The Coffee</span>
            <h2>Iconic blends &amp; single origins</h2>
            <p>Every roast carries 121 collective years of roasting experience. These are the cups we're known for.</p>
          </div>
          <div className="coffee-grid">
            {products.map((p, i) => (
              <article key={i} className="coffee-card">
                <div className="coffee-img">
                  {!loaded && <div className="skeleton" />}
                  <img src={p.img} alt={p.name} loading="lazy" style={{ opacity: loaded ? 1 : 0 }} />
                </div>
                <div className="coffee-body">
                  <span className="coffee-type">{p.type}</span>
                  <h3>{p.name}</h3>
                  <p>{p.notes}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="section section-dark">
          <div className="section-head">
            <span className="eyebrow" style={{ color: accentSoft }}>Our Cafes</span>
            <h2>From Portland to Kyoto</h2>
            <p>Eight cafes across four cities. Pull up a chair, the neighborhood vibe is always on.</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((g, i) => (
              <figure key={i} className={`gallery-item g-${i}`}>
                <img src={g.url} alt={g.caption} loading="lazy" />
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* STORY */}
        <section id="story" className="story">
          <div className="story-media">
            <img src="https://cdn.builder.io/api/v1/image/assets%2F9b6836fa3ba643fe8fff0164397e2c60%2F10818b9abf704bc48e6e0a8b78fe255f?width=623" alt="Stumptown Division flagship cafe" loading="lazy" />
          </div>
          <div className="story-text">
            <span className="eyebrow" style={{ color: accent }}>Our Story</span>
            <h2>The spot that started it all</h2>
            <p>Our flagship cafe opened on Division Street in Portland in 1999, replacing an old beauty parlor named <strong>Hair Bender</strong>. Founder Duane Sorenson adopted the name for our signature espresso blend — and the original sign still hangs in our hometown roastery.</p>
            <p>In 2003 we pioneered the <strong>Direct Trade</strong> model: paying strong prices tied to quality, working with producers we know, and building partnerships that last. In 2024, over 90% of our coffee came through Direct Trade relationships of three or more years.</p>
            <div className="stats">
              <div><strong>1999</strong><span>Founded in Portland</span></div>
              <div><strong>25+</strong><span>Years of roasting</span></div>
              <div><strong>4</strong><span>Continents of producers</span></div>
            </div>
            <a href="https://www.stumptowncoffee.com/pages/our-story" className="btn-primary" target="_blank" rel="noopener">Read the full story</a>
          </div>
        </section>

        {/* LOCATIONS */}
        <section id="locations" className="section section-dark">
          <div className="section-head">
            <span className="eyebrow" style={{ color: accentSoft }}>Find Us</span>
            <h2>Visit a cafe near you</h2>
          </div>
          <div className="loc-grid">
            {locations.map((l, i) => (
              <article key={i} className="loc-card">
                <span className="loc-city">{l.city}</span>
                <h3>{l.name}</h3>
                <p className="loc-addr">{l.addr}</p>
                <p className="loc-hours">{l.hours}</p>
              </article>
            ))}
          </div>
        </section>

        {/* SOCIAL */}
        <section className="social">
          <h2>Never miss a drop</h2>
          <p>Follow along for new releases, brew tips, and good vibes.</p>
          <div className="social-links">
            <a href="https://www.instagram.com/stumptowncoffee/" target="_blank" rel="noopener">Instagram</a>
            <a href="https://www.tiktok.com/@stumptowncoffee" target="_blank" rel="noopener">TikTok</a>
            <a href="https://www.facebook.com/stumptowncoffee/" target="_blank" rel="noopener">Facebook</a>
            <a href="https://www.youtube.com/c/StumptownCoffeeRoasters" target="_blank" rel="noopener">YouTube</a>
            <a href="https://www.pinterest.com/stumptowncoffee/" target="_blank" rel="noopener">Pinterest</a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-brand">STUMPTOWN<span style={{ color: accent }}>.</span></div>
            <p>Fresh beans, cold brew, and good vibes. Roasted in Portland, Oregon.</p>
            <p className="footer-copy">© 2026 Stumptown Coffee Roasters. Fan-built showcase using publicly available brand information.</p>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #1a1714; color: ${cream}; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
        a { color: inherit; text-decoration: none; }
        h1, h2, h3 { line-height: 1.05; letter-spacing: -0.02em; }
      `}</style>

      <style jsx>{`
        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; backdrop-filter: blur(12px); background: rgba(26,23,20,0.72); border-bottom: 1px solid rgba(255,255,255,0.06); }
        .nav-inner { max-width: 1240px; margin: 0 auto; padding: 18px 24px; display: flex; align-items: center; justify-content: space-between; }
        .brand { font-weight: 800; font-size: 22px; letter-spacing: 0.02em; }
        .nav-links { display: flex; align-items: center; gap: 34px; }
        .nav-links a { font-size: 15px; opacity: 0.85; transition: opacity 0.2s; }
        .nav-links a:hover { opacity: 1; }
        .nav-cta { background: ${accent}; padding: 9px 20px; border-radius: 40px; font-weight: 600; opacity: 1 !important; }
        .hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: 0; cursor: pointer; }
        .hamburger span { width: 26px; height: 2px; background: ${cream}; display: block; }

        .hero { position: relative; height: 100vh; min-height: 620px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; overflow: hidden; }
        .hero-bg { position: absolute; inset: 0; background-size: cover; background-position: center; transform: scale(1.05); animation: zoom 18s ease-in-out infinite alternate; }
        @keyframes zoom { to { transform: scale(1.15); } }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(26,23,20,0.55) 0%, rgba(26,23,20,0.35) 40%, rgba(26,23,20,0.95) 100%); }
        .hero-content { position: relative; z-index: 2; max-width: 820px; padding: 0 24px; }
        .kicker { text-transform: uppercase; letter-spacing: 0.32em; font-size: 13px; opacity: 0.85; margin-bottom: 22px; }
        .hero h1 { font-size: clamp(48px, 9vw, 116px); font-weight: 800; }
        .hero-sub { font-size: clamp(16px, 2.2vw, 21px); opacity: 0.86; margin: 26px auto 0; max-width: 560px; line-height: 1.5; }
        .hero-actions { display: flex; gap: 16px; justify-content: center; margin-top: 38px; flex-wrap: wrap; }
        .btn-primary { background: ${accent}; color: #fff; padding: 15px 34px; border-radius: 40px; font-weight: 600; font-size: 16px; transition: transform 0.2s, background 0.2s; }
        .btn-primary:hover { background: ${accentSoft}; transform: translateY(-2px); }
        .btn-ghost { border: 1px solid rgba(255,255,255,0.4); padding: 15px 34px; border-radius: 40px; font-weight: 600; font-size: 16px; transition: background 0.2s; }
        .btn-ghost:hover { background: rgba(255,255,255,0.1); }
        .hero-scroll { position: absolute; bottom: 26px; z-index: 2; font-size: 13px; letter-spacing: 0.2em; opacity: 0.6; text-transform: uppercase; }

        .marquee { background: ${accent}; color: #fff; overflow: hidden; padding: 14px 0; white-space: nowrap; }
        .marquee-track { display: inline-block; animation: scroll 24s linear infinite; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; font-size: 15px; }
        @keyframes scroll { to { transform: translateX(-50%); } }

        .section { max-width: 1240px; margin: 0 auto; padding: 110px 24px; }
        .section-dark { background: #211d19; max-width: none; }
        .section-dark > * { max-width: 1240px; margin-left: auto; margin-right: auto; }
        .section-head { text-align: center; max-width: 620px; margin: 0 auto 64px; }
        .eyebrow { text-transform: uppercase; letter-spacing: 0.24em; font-size: 13px; font-weight: 700; }
        .section-head h2 { font-size: clamp(34px, 5vw, 56px); font-weight: 800; margin: 16px 0; }
        .section-head p { opacity: 0.72; font-size: 17px; line-height: 1.6; }

        .coffee-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 28px; }
        .coffee-card { background: #211d19; border: 1px solid rgba(255,255,255,0.06); border-radius: 18px; overflow: hidden; transition: transform 0.25s, border-color 0.25s; }
        .coffee-card:hover { transform: translateY(-6px); border-color: ${accent}; }
        .coffee-img { position: relative; aspect-ratio: 1; background: #2c2722; display: flex; align-items: center; justify-content: center; }
        .coffee-img img { width: 78%; height: 78%; object-fit: contain; transition: opacity 0.5s; }
        .skeleton { position: absolute; inset: 0; background: linear-gradient(90deg, #2c2722 25%, #38322c 50%, #2c2722 75%); background-size: 200% 100%; animation: shimmer 1.4s infinite; }
        @keyframes shimmer { to { background-position: -200% 0; } }
        .coffee-body { padding: 22px; }
        .coffee-type { font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em; color: ${accentSoft}; font-weight: 700; }
        .coffee-body h3 { font-size: 20px; margin: 8px 0 10px; font-weight: 700; }
        .coffee-body p { opacity: 0.66; font-size: 14px; line-height: 1.5; }

        .gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 220px; gap: 16px; }
        .gallery-item { position: relative; overflow: hidden; border-radius: 16px; }
        .gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
        .gallery-item:hover img { transform: scale(1.08); }
        .gallery-item figcaption { position: absolute; bottom: 0; left: 0; right: 0; padding: 30px 18px 14px; font-size: 14px; font-weight: 600; background: linear-gradient(transparent, rgba(0,0,0,0.78)); }
        .g-0 { grid-column: span 2; grid-row: span 2; }
        .g-1 { grid-column: span 2; }
        .g-5 { grid-column: span 2; }

        .story { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 64px; max-width: 1240px; margin: 0 auto; padding: 110px 24px; }
        .story-media img { width: 100%; border-radius: 20px; }
        .story-text h2 { font-size: clamp(32px, 4.4vw, 52px); font-weight: 800; margin: 14px 0 22px; }
        .story-text p { opacity: 0.78; line-height: 1.7; font-size: 17px; margin-bottom: 18px; }
        .story-text strong { color: ${cream}; }
        .stats { display: flex; gap: 36px; margin: 30px 0 32px; flex-wrap: wrap; }
        .stats div { display: flex; flex-direction: column; }
        .stats strong { font-size: 34px; color: ${accentSoft}; font-weight: 800; }
        .stats span { font-size: 13px; opacity: 0.6; margin-top: 4px; }

        .loc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; }
        .loc-card { background: #1a1714; border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 26px; transition: border-color 0.25s, transform 0.25s; }
        .loc-card:hover { border-color: ${accent}; transform: translateY(-4px); }
        .loc-city { font-size: 12px; text-transform: uppercase; letter-spacing: 0.16em; color: ${accentSoft}; font-weight: 700; }
        .loc-card h3 { font-size: 22px; margin: 10px 0 12px; font-weight: 700; }
        .loc-addr { opacity: 0.8; font-size: 14px; line-height: 1.5; }
        .loc-hours { opacity: 0.55; font-size: 13px; margin-top: 10px; }

        .social { text-align: center; padding: 100px 24px; }
        .social h2 { font-size: clamp(32px, 5vw, 54px); font-weight: 800; }
        .social p { opacity: 0.7; margin: 16px 0 32px; font-size: 17px; }
        .social-links { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
        .social-links a { border: 1px solid rgba(255,255,255,0.22); padding: 12px 26px; border-radius: 40px; font-weight: 600; font-size: 15px; transition: background 0.2s, border-color 0.2s; }
        .social-links a:hover { background: ${accent}; border-color: ${accent}; }

        .footer { background: #110f0d; padding: 64px 24px; }
        .footer-inner { max-width: 720px; margin: 0 auto; text-align: center; }
        .footer-brand { font-size: 28px; font-weight: 800; margin-bottom: 16px; }
        .footer-inner p { opacity: 0.6; line-height: 1.6; margin-bottom: 10px; }
        .footer-copy { font-size: 13px; opacity: 0.4; margin-top: 18px; }

        @media (max-width: 860px) {
          .hamburger { display: flex; }
          .nav-links { position: fixed; top: 64px; left: 0; right: 0; flex-direction: column; background: rgba(26,23,20,0.98); padding: 24px; gap: 22px; transform: translateY(-150%); transition: transform 0.3s; }
          .nav-links.open { transform: translateY(0); }
          .gallery-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 180px; }
          .g-0, .g-1, .g-5 { grid-column: span 2; grid-row: span 1; }
          .story { grid-template-columns: 1fr; gap: 36px; }
        }
        @media (max-width: 520px) {
          .gallery-grid { grid-template-columns: 1fr; }
          .g-0, .g-1, .g-5 { grid-column: span 1; }
          .stats { gap: 24px; }
        }
      `}</style>
    </>
  );
}
