export default function Home() {
  const accent = "#c8a96e";
  const accentDark = "#a0803e";

  const menuItems = [
    {
      name: "Espresso",
      price: "$4.60",
      desc: "Double shot of ristretto espresso — intense, rich, and full-bodied.",
      img: "https://www.vervecoffee.com/cdn/shop/files/Sermon-12oz-Silo_1445x.png?v=1737402021",
    },
    {
      name: "Latte",
      price: "$7.30",
      desc: "A double shot of espresso with velvety steamed milk.",
      img: "https://www.vervecoffee.com/cdn/shop/files/Streetlevel-12oz-Silo_1445x.png?v=1748900359",
    },
    {
      name: "Gibraltar",
      price: "$5.90",
      desc: "Double shot of espresso with steamed milk in a perfect 1:1 ratio.",
      img: "https://www.vervecoffee.com/cdn/shop/files/Aster-12oz-Silo_1445x.png?v=1737402182",
    },
    {
      name: "Missile",
      price: "$7.00",
      desc: "Coffee concentrate, cream, and house-made syrup served over ice.",
      img: "https://www.vervecoffee.com/cdn/shop/files/Buena-Vista-12oz-Silo_1445x.png?v=1737401998",
    },
    {
      name: "Matcha Latte",
      price: "$8.30",
      desc: "Premium ceremonial matcha whisked with silky steamed milk.",
      img: "https://www.vervecoffee.com/cdn/shop/files/Vancouver-12oz-Silo_1445x.png?v=1739550645",
    },
    {
      name: "Nitro Flash Brew",
      price: "$6.50",
      desc: "Nitro-infused Flash Brew coffee on draft served cold over ice.",
      img: "https://www.vervecoffee.com/cdn/shop/files/Mega-Menu-Best-Sellers-Jan-2026_400x.png?v=1767369202",
    },
    {
      name: "Espresso Tonic",
      price: "$7.90",
      desc: "Espresso poured over sparkling tonic water and ice — bright and refreshing.",
      img: "https://www.vervecoffee.com/cdn/shop/files/Mega-Menu-Roasters-Choice-Jan-2026_400x.png?v=1767369193",
    },
    {
      name: "Avocado Toast",
      price: "$14.00",
      desc: "Chives, radish, shallots, and cultured butter on house sourdough.",
      img: "https://www.vervecoffee.com/cdn/shop/files/Mega-Menu-Blends-Jan-2026_400x.png?v=1767369199",
    },
  ];

  const galleryImages = [
    {
      url: "https://www.vervecoffee.com/cdn/shop/files/verve_cafes_web_MATEO-4_d816ae0f-62da-48ae-8987-f3d2bf03911b_800x.jpg?v=1654127779",
      caption: "Arts District, LA",
    },
    {
      url: "https://www.vervecoffee.com/cdn/shop/files/MELROSE_2__11_800x.jpg?v=1728325165",
      caption: "Melrose Avenue, LA",
    },
    {
      url: "https://www.vervecoffee.com/cdn/shop/files/patio1_800x.jpg?v=1654116155",
      caption: "West 3rd Street, LA",
    },
    {
      url: "https://www.vervecoffee.com/cdn/shop/files/verve_cafes_web_PACAVE-3_088c6a67-e0b2-4e6c-82d8-509b43707e45_800x.jpg?v=1654127613",
      caption: "Pacific Avenue, Santa Cruz",
    },
    {
      url: "https://www.vervecoffee.com/cdn/shop/files/Cafes-Seabright-6427_800x.jpg?v=1654116153",
      caption: "Seabright, Santa Cruz",
    },
    {
      url: "https://www.vervecoffee.com/cdn/shop/files/Copy_of_PaloAlto_55_800x.jpg?v=1654116157",
      caption: "University Ave, Palo Alto",
    },
  ];

  const locations = [
    {
      name: "Arts District",
      address: "500 Mateo Street, Los Angeles, CA 90013",
      hours: "Everyday: 7am – 6pm",
    },
    {
      name: "Melrose Avenue",
      address: "8925 Melrose Ave, West Hollywood, CA 90069",
      hours: "Everyday: 7am – 6pm",
    },
    {
      name: "West 3rd Street",
      address: "8051 W. 3rd St, Los Angeles, CA 90048",
      hours: "Everyday: 7am – 6pm",
    },
    {
      name: "Manhattan Beach",
      address: "451 Manhattan Beach Blvd, Suite 451B, Manhattan Beach, CA 90266",
      hours: "Everyday: 7am – 6pm",
    },
    {
      name: "Pacific Avenue",
      address: "1540 Pacific Ave, Santa Cruz, CA 95060",
      hours: "Everyday: 7am – 6pm",
    },
    {
      name: "41st Avenue",
      address: "816 41st Ave, Santa Cruz, CA 95062",
      hours: "Everyday: 7am – 6pm",
    },
    {
      name: "Seabright",
      address: "104 Bronson St, Suite 19, Santa Cruz, CA 95062",
      hours: "Everyday: 7am – 5pm",
    },
    {
      name: "1010 Fair",
      address: "1010 Fair Ave, Santa Cruz, CA 95060",
      hours: "Everyday: 7am – 6pm",
    },
    {
      name: "Market Street",
      address: "2101 Market Street, San Francisco, CA 94114",
      hours: "Mon–Fri: 6:30am–5pm · Sat–Sun: 7am–5:30pm",
    },
    {
      name: "University Ave",
      address: "162 University Ave, Palo Alto, CA 94301",
      hours: "Everyday: 7am – 6pm",
    },
  ];

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #0a0a0a;
          color: #f0ebe0;
          font-family: Georgia, 'Times New Roman', serif;
          line-height: 1.6;
        }
        a { color: inherit; text-decoration: none; }

        /* NAV */
        nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(10,10,10,0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(200,169,110,0.18);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          height: 64px;
        }
        .nav-logo {
          font-family: system-ui, sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #f0ebe0;
        }
        .nav-links {
          display: flex;
          gap: 28px;
          list-style: none;
          font-family: system-ui, sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .nav-links a:hover { color: ${accent}; }
        .nav-cta {
          font-family: system-ui, sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: ${accent};
          color: #0a0a0a;
          padding: 10px 22px;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }
        .nav-cta:hover { background: ${accentDark}; }

        /* HERO */
        .hero {
          position: relative;
          height: 100vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://www.vervecoffee.com/cdn/shop/files/Hero-Desktop-June-Coffee-2026.png?v=1780670725&width=1800');
          background-size: cover;
          background-position: center;
          filter: brightness(0.38);
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 780px;
          padding: 0 24px;
        }
        .hero-eyebrow {
          font-family: system-ui, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${accent};
          margin-bottom: 18px;
        }
        .hero h1 {
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          font-weight: 400;
          line-height: 1.05;
          color: #f0ebe0;
          margin-bottom: 24px;
        }
        .hero p {
          font-size: 1.15rem;
          color: rgba(240,235,224,0.78);
          margin-bottom: 40px;
          max-width: 560px;
          margin-left: auto;
          margin-right: auto;
        }
        .btn-primary {
          display: inline-block;
          font-family: system-ui, sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          background: ${accent};
          color: #0a0a0a;
          padding: 16px 40px;
          transition: background 0.2s;
        }
        .btn-primary:hover { background: ${accentDark}; }
        .btn-outline {
          display: inline-block;
          font-family: system-ui, sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          border: 1px solid ${accent};
          color: ${accent};
          padding: 16px 40px;
          margin-left: 16px;
          transition: all 0.2s;
        }
        .btn-outline:hover { background: ${accent}; color: #0a0a0a; }

        /* SECTION COMMON */
        section { padding: 96px 32px; }
        .section-label {
          font-family: system-ui, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${accent};
          margin-bottom: 14px;
        }
        .section-title {
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 400;
          color: #f0ebe0;
          margin-bottom: 48px;
        }
        .divider {
          width: 48px;
          height: 2px;
          background: ${accent};
          margin: 0 auto 20px;
        }

        /* GALLERY */
        #gallery { background: #111; }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .gallery-item {
          position: relative;
          overflow: hidden;
          aspect-ratio: 4/3;
        }
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .gallery-item:hover img { transform: scale(1.05); }
        .gallery-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 12px 16px;
          background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%);
          font-family: system-ui, sans-serif;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #f0ebe0;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .gallery-item:hover .gallery-caption { opacity: 1; }

        /* MENU */
        #menu { background: #0a0a0a; }
        .menu-container { max-width: 1200px; margin: 0 auto; text-align: center; }
        .menu-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 48px;
          text-align: left;
        }
        .menu-card {
          background: #141414;
          border: 1px solid rgba(200,169,110,0.12);
          overflow: hidden;
          transition: border-color 0.25s;
        }
        .menu-card:hover { border-color: ${accent}; }
        .menu-card-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          background: #1a1a1a;
        }
        .menu-card-body { padding: 18px; }
        .menu-card-name {
          font-size: 1rem;
          font-weight: 400;
          color: #f0ebe0;
          margin-bottom: 6px;
        }
        .menu-card-price {
          font-family: system-ui, sans-serif;
          font-size: 12px;
          color: ${accent};
          font-weight: 700;
          letter-spacing: 0.06em;
          margin-bottom: 8px;
        }
        .menu-card-desc {
          font-size: 0.82rem;
          color: rgba(240,235,224,0.56);
          line-height: 1.5;
        }

        /* ABOUT */
        #about {
          background: #111;
          display: flex;
          align-items: stretch;
        }
        .about-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          width: 100%;
        }
        .about-img {
          width: 100%;
          height: 520px;
          object-fit: cover;
        }
        .about-text {}
        .about-text h2 { font-size: clamp(1.6rem, 3.5vw, 2.6rem); font-weight: 400; margin-bottom: 24px; }
        .about-text p { font-size: 1rem; color: rgba(240,235,224,0.72); line-height: 1.8; margin-bottom: 18px; }
        .about-badge {
          display: inline-block;
          border: 1px solid ${accent};
          color: ${accent};
          font-family: system-ui, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 8px 18px;
          margin-top: 12px;
        }

        /* LOCATIONS */
        #locations { background: #0a0a0a; }
        .locations-container { max-width: 1200px; margin: 0 auto; text-align: center; }
        .locations-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          margin-top: 48px;
          text-align: left;
        }
        .location-card {
          background: #141414;
          border: 1px solid rgba(200,169,110,0.1);
          padding: 24px 20px;
          transition: border-color 0.25s;
        }
        .location-card:hover { border-color: ${accent}; }
        .location-name {
          font-family: system-ui, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: ${accent};
          margin-bottom: 10px;
        }
        .location-address {
          font-size: 0.82rem;
          color: rgba(240,235,224,0.65);
          line-height: 1.55;
          margin-bottom: 10px;
        }
        .location-hours {
          font-family: system-ui, sans-serif;
          font-size: 11px;
          color: rgba(240,235,224,0.45);
        }

        /* SOCIAL */
        #social { background: #111; text-align: center; }
        .social-inner { max-width: 640px; margin: 0 auto; }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 36px;
          flex-wrap: wrap;
        }
        .social-link {
          display: inline-block;
          font-family: system-ui, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          border: 1px solid rgba(200,169,110,0.35);
          color: rgba(240,235,224,0.75);
          padding: 12px 28px;
          transition: all 0.2s;
        }
        .social-link:hover {
          border-color: ${accent};
          color: ${accent};
        }

        /* FOOTER */
        footer {
          background: #060606;
          border-top: 1px solid rgba(200,169,110,0.12);
          padding: 48px 32px;
          text-align: center;
        }
        .footer-brand {
          font-size: 1.1rem;
          font-weight: 400;
          color: #f0ebe0;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .footer-sub {
          font-family: system-ui, sans-serif;
          font-size: 11px;
          color: rgba(240,235,224,0.35);
          letter-spacing: 0.1em;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .menu-grid { grid-template-columns: repeat(2, 1fr); }
          .locations-grid { grid-template-columns: repeat(3, 1fr); }
          .about-inner { grid-template-columns: 1fr; gap: 40px; }
          .about-img { height: 320px; }
        }
        @media (max-width: 768px) {
          nav { padding: 0 18px; }
          .nav-links { display: none; }
          section { padding: 64px 18px; }
          .gallery-grid { grid-template-columns: repeat(2, 1fr); }
          .menu-grid { grid-template-columns: 1fr; }
          .locations-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr; }
          .locations-grid { grid-template-columns: 1fr; }
          .btn-outline { margin-left: 0; margin-top: 12px; display: block; text-align: center; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <span className="nav-logo">Verve Coffee</span>
        <ul className="nav-links">
          <li><a href="#gallery">Cafes</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">Story</a></li>
          <li><a href="#locations">Locations</a></li>
        </ul>
        <a href="https://vervecoffeeroasters.toast.site" target="_blank" rel="noopener noreferrer">
          <button className="nav-cta">Order Ahead</button>
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <p className="hero-eyebrow">Roaster of the Year 2024 · Santa Cruz, CA · Est. 2007</p>
          <h1>Hand-Roasted.<br />Deeply Felt.</h1>
          <p>
            Craft coffees with unique tasting profiles, roasted fresh daily along the California coast.
            6,000+ five-star reviews. 10 cafes. One obsession.
          </p>
          <a href="https://www.vervecoffee.com/collections/all-coffee" target="_blank" rel="noopener noreferrer">
            <span className="btn-primary">Shop Coffee</span>
          </a>
          <a href="#menu">
            <span className="btn-outline">View Menu</span>
          </a>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p className="section-label">Our Cafes</p>
          <div className="divider" />
          <h2 className="section-title">Where Coffee Becomes Culture</h2>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <div className="gallery-item" key={i}>
              <img src={img.url} alt={img.caption} loading="lazy" />
              <div className="gallery-caption">{img.caption}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section id="menu">
        <div className="menu-container">
          <p className="section-label">Café Menu</p>
          <div className="divider" />
          <h2 className="section-title">Crafted With Intention</h2>
          <div className="menu-grid">
            {menuItems.map((item, i) => (
              <div className="menu-card" key={i}>
                <img
                  className="menu-card-img"
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                />
                <div className="menu-card-body">
                  <div className="menu-card-price">{item.price}</div>
                  <p className="menu-card-name">{item.name}</p>
                  <p className="menu-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "48px" }}>
            <a href="https://vervecoffeeroasters.toast.site" target="_blank" rel="noopener noreferrer">
              <span className="btn-primary">Full Menu & Order Ahead</span>
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="about-inner">
          <img
            className="about-img"
            src="https://www.vervecoffee.com/cdn/shop/files/We_Are_Verve_m_1500x.png?v=1697128414"
            alt="We Are Verve"
          />
          <div className="about-text">
            <p className="section-label">Our Story</p>
            <div className="divider" style={{ margin: "0 0 20px 0" }} />
            <h2>Union of Surf, Music &amp; Zest</h2>
            <p>
              Verve Coffee Roasters was established in 2007 when Ryan O'Donovan and Colby Barr
              started a small local venture along the rugged California coast. Our roots are
              planted in Santa Cruz, where we remain independently owned and still roast
              coffee by hand.
            </p>
            <p>
              We are committed to innovation and equitable direct trade that plays an active
              role in every step of the supply chain, investing in individual producers across
              the globe. We recognize that a producer's dedication and years of knowledge are
              fundamental to the caliber and character of the coffees we're obsessed with.
            </p>
            <p>
              The Farmlevel Initiative is our commitment to ethics and excellence — direct
              trade partnerships with producers, paying premiums for quality, and investing
              in coffee communities and their environments.
            </p>
            <span className="about-badge">🏆 Roast Magazine Roaster of the Year 2024</span>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations">
        <div className="locations-container">
          <p className="section-label">Find Us</p>
          <div className="divider" />
          <h2 className="section-title">10 Cafes Across California</h2>
          <div className="locations-grid">
            {locations.map((loc, i) => (
              <div className="location-card" key={i}>
                <div className="location-name">{loc.name}</div>
                <div className="location-address">{loc.address}</div>
                <div className="location-hours">{loc.hours}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section id="social">
        <div className="social-inner">
          <p className="section-label">Follow Along</p>
          <div className="divider" />
          <h2 className="section-title">Stay Connected</h2>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "0.95rem" }}>
            Join 209K+ followers for brew guides, new arrivals, and a peek behind the roaster.
          </p>
          <div className="social-links">
            <a className="social-link" href="https://instagram.com/vervecoffee" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a className="social-link" href="https://facebook.com/vervecoffee" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a className="social-link" href="https://youtube.com/vervecoffee" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">Verve Coffee Roasters</div>
        <div className="footer-sub" style={{ marginBottom: "6px" }}>
          Santa Cruz, California · Est. 2007
        </div>
        <div className="footer-sub">
          Hand-roasted daily, enjoy craft coffees with unique tasting &amp; roasting profiles.
        </div>
        <div className="footer-sub" style={{ marginTop: "24px" }}>
          © 2026 Verve Coffee Roasters. All rights reserved.
        </div>
      </footer>
    </>
  );
}
