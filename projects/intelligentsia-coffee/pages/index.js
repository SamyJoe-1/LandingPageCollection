export default function Home() {
  const accent = '#da532c';
  const bg = '#0a0a0a';
  const text = '#f0ebe0';
  const muted = '#a89880';
  const cardBg = '#141414';
  const borderColor = '#2a2a2a';

  const images = {
    hero: 'https://www.intelligentsia.com/cdn/shop/files/OS_d_v3.png?v=1762281460',
    story: 'https://www.intelligentsia.com/cdn/shop/files/OS_m_v2.png?v=1762281336',
    analog: 'https://www.intelligentsia.com/cdn/shop/files/BC_Analog_5lb_1024x1024.png?v=1775482316',
    organic: 'https://www.intelligentsia.com/cdn/shop/files/BC_Organic_5lb_1024x1024.png?v=1775482316',
    house: 'https://www.intelligentsia.com/cdn/shop/files/House_5lb_1024x1024.png?v=1775482316',
    logo: 'https://www.intelligentsia.com/cdn/shop/t/403/assets/logo-og.png?v=110203643234035765081778163366',
  };

  const menuItems = [
    {
      name: 'Black Cat Classic Espresso',
      price: '$17.50',
      description: 'Syrupy sweet with vivid fruit acidity. Our hallmark espresso blend — balanced sweetness and complexity since 1995. Notes of chocolate and molasses from Brazil and Colombia.',
      image: images.analog,
      tag: 'Signature',
    },
    {
      name: 'Black Cat Analog Espresso',
      price: '$17.50',
      description: 'Full-bodied and well-rounded, designed to perform in milk-based espresso drinks. Consistently sweet, chocolate-driven shots with dark chocolate, toasted marshmallow, and baking spices.',
      image: images.analog,
      tag: 'Milk Drinks',
    },
    {
      name: 'Organic Black Cat Espresso',
      price: '$18.50',
      description: 'Certified Organic. Complex and sweet, with caramel, honeydew, and grape. Full-bodied mouthfeel finishing with dark chocolate and toasted almond.',
      image: images.organic,
      tag: 'Organic',
    },
    {
      name: 'House Blend',
      price: '$17.50',
      description: 'Our benchmark light roast blend showcasing the intrinsic sweetness and lively fruit flavors we love. Red apple, orange, and caramel — bright and vibrant in every cup.',
      image: images.house,
      tag: 'Best Seller',
    },
    {
      name: 'Persephone Blend',
      price: '$25.00',
      description: 'Our annual tribute to spring. Exceptional single-origin coffees from East Africa and Latin America — pomegranate, tamarind, and maraschino cherry. Fresh and radiant like the first blooms.',
      image: images.house,
      tag: 'Seasonal',
    },
  ];

  const locations = [
    { city: 'Chicago', name: 'Broadway Coffeebar', address: '3123 N Broadway, Chicago, IL 60657', hours: 'Mon–Sat 6:30am–7pm, Sun 7am–7pm' },
    { city: 'Chicago', name: 'Monadnock Coffeebar', address: '53 West Jackson Blvd, Chicago, IL 60604', hours: 'Mon–Fri 7am–6pm, Sat 8am–2pm' },
    { city: 'Chicago', name: 'Millennium Park Coffeebar', address: '53 East Randolph St, Chicago, IL 60601', hours: 'Mon–Sun 6:30am–7pm' },
    { city: 'Los Angeles', name: 'Venice Coffeebar', address: '1331 Abbot Kinney Blvd, Venice, CA 90291', hours: 'Mon–Sun 6am–7pm' },
    { city: 'Los Angeles', name: 'Silver Lake Coffeebar', address: '3922 West Sunset Blvd, Los Angeles, CA 90029', hours: 'Mon–Thu 6am–6pm, Fri–Sun 6am–7pm' },
    { city: 'Los Angeles', name: 'Hollywood Coffeebar', address: '6401 Hollywood Blvd, Los Angeles, CA 90028', hours: 'Mon–Fri 7am–2pm, Sat–Sun 7am–3:30pm' },
    { city: 'Los Angeles', name: 'Pasadena Coffeebar', address: '55 East Colorado Blvd, Pasadena, CA 91105', hours: 'Mon–Thu 7am–6pm, Fri–Sun 7am–7pm' },
    { city: 'Los Angeles', name: 'Santa Monica', address: '3010 Pico Blvd, Santa Monica, CA 90405', hours: 'Mon–Sun 5:30am–8pm' },
    { city: 'New York', name: 'High Line Hotel Coffeebar', address: '180 10th Ave at 20th St, New York, NY 10011', hours: 'Mon–Sun 7am–5pm' },
    { city: 'Boston', name: 'Watertown Coffeebar', address: '810 Mount Auburn St, Watertown, MA 02472', hours: 'Mon–Thu 7am–5pm, Fri–Sat 7am–6pm, Sun 7am–5pm' },
    { city: 'Boston', name: 'Post Office Square Coffeebar', address: '225 Franklin St, Boston, MA 02110', hours: 'Mon 7am–3pm, Tue–Thu 7am–4pm, Fri 7am–3pm' },
    { city: 'Austin', name: 'Austin Coffeebar', address: '607 W 3rd Street, Suite 0110, Austin, TX 78701', hours: 'Mon–Sun 6:30am–5pm' },
  ];

  const gallery = [
    { src: images.hero, alt: 'Intelligentsia Coffee — Our Story' },
    { src: images.story, alt: 'Intelligentsia Coffee brand lifestyle' },
    { src: images.analog, alt: 'Black Cat Analog Espresso' },
    { src: images.organic, alt: 'Organic Black Cat Espresso' },
    { src: images.house, alt: 'Intelligentsia House Blend' },
    { src: images.logo, alt: 'Intelligentsia Coffee brand' },
  ];

  const cities = ['Chicago', 'Los Angeles', 'New York', 'Boston', 'Austin'];

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: ${bg}; color: ${text}; font-family: Georgia, 'Times New Roman', serif; }
        a { color: inherit; text-decoration: none; }
        img { display: block; }

        /* NAV */
        .nav {
          position: sticky; top: 0; z-index: 100;
          background: rgba(10,10,10,0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid ${borderColor};
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 2rem; height: 64px;
        }
        .nav-logo {
          font-family: Georgia, serif; font-size: 1.1rem; letter-spacing: 0.12em;
          text-transform: uppercase; color: ${text};
        }
        .nav-links { display: flex; gap: 2rem; align-items: center; }
        .nav-links a {
          font-family: system-ui, sans-serif; font-size: 0.78rem;
          letter-spacing: 0.1em; text-transform: uppercase; color: ${muted};
          transition: color 0.2s;
        }
        .nav-links a:hover { color: ${text}; }
        .nav-cta {
          background: ${accent}; color: #fff !important;
          padding: 0.5rem 1.2rem; border-radius: 2px;
          font-family: system-ui, sans-serif; font-size: 0.75rem;
          letter-spacing: 0.1em; text-transform: uppercase;
          transition: opacity 0.2s;
        }
        .nav-cta:hover { opacity: 0.85; }

        /* HERO */
        .hero {
          position: relative; height: 100vh; min-height: 600px;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute; inset: 0;
          background-image: url('${images.hero}');
          background-size: cover; background-position: center;
          filter: brightness(0.35);
        }
        .hero-content {
          position: relative; text-align: center; padding: 2rem;
          max-width: 800px;
        }
        .hero-eyebrow {
          font-family: system-ui, sans-serif; font-size: 0.75rem;
          letter-spacing: 0.25em; text-transform: uppercase;
          color: ${accent}; margin-bottom: 1.5rem;
        }
        .hero-title {
          font-size: clamp(2.5rem, 6vw, 5rem); font-weight: 400;
          line-height: 1.1; margin-bottom: 1.5rem;
          color: ${text};
        }
        .hero-sub {
          font-family: system-ui, sans-serif; font-size: 1rem;
          color: ${muted}; max-width: 560px; margin: 0 auto 2.5rem;
          line-height: 1.7;
        }
        .hero-cta {
          display: inline-block; background: ${accent}; color: #fff;
          padding: 1rem 2.5rem; font-family: system-ui, sans-serif;
          font-size: 0.8rem; letter-spacing: 0.15em; text-transform: uppercase;
          transition: opacity 0.2s; border-radius: 2px;
        }
        .hero-cta:hover { opacity: 0.85; }

        /* SECTION COMMONS */
        section { padding: 5rem 2rem; }
        .section-label {
          font-family: system-ui, sans-serif; font-size: 0.72rem;
          letter-spacing: 0.25em; text-transform: uppercase;
          color: ${accent}; margin-bottom: 0.75rem;
        }
        .section-title {
          font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 400;
          line-height: 1.15; color: ${text};
        }
        .section-sub {
          font-family: system-ui, sans-serif; font-size: 0.95rem;
          color: ${muted}; margin-top: 1rem; line-height: 1.7;
          max-width: 520px;
        }
        .container { max-width: 1200px; margin: 0 auto; }

        /* GALLERY */
        .gallery-section { background: #0d0d0d; }
        .gallery-header { margin-bottom: 3rem; }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .gallery-item {
          overflow: hidden; border-radius: 2px;
          aspect-ratio: 4/3;
          background: ${cardBg};
        }
        .gallery-item img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .gallery-item:hover img { transform: scale(1.04); }

        /* MENU */
        .menu-header { margin-bottom: 3rem; }
        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .menu-card {
          background: ${cardBg}; border: 1px solid ${borderColor};
          border-radius: 4px; overflow: hidden;
          transition: border-color 0.2s;
        }
        .menu-card:hover { border-color: ${accent}; }
        .menu-img {
          height: 200px; overflow: hidden;
          background: #111;
          display: flex; align-items: center; justify-content: center;
        }
        .menu-img img { width: 100%; height: 100%; object-fit: contain; padding: 1.5rem; }
        .menu-body { padding: 1.5rem; }
        .menu-tag {
          font-family: system-ui, sans-serif; font-size: 0.65rem;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: ${accent}; margin-bottom: 0.5rem;
        }
        .menu-name {
          font-size: 1.1rem; margin-bottom: 0.5rem; color: ${text};
        }
        .menu-desc {
          font-family: system-ui, sans-serif; font-size: 0.85rem;
          color: ${muted}; line-height: 1.6; margin-bottom: 1rem;
        }
        .menu-price {
          font-family: system-ui, sans-serif; font-size: 0.9rem;
          color: ${text}; font-weight: 600;
        }

        /* ABOUT */
        .about-section { background: #0d0d0d; }
        .about-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 4rem; align-items: center;
        }
        .about-img-wrap { overflow: hidden; border-radius: 2px; }
        .about-img-wrap img { width: 100%; height: 480px; object-fit: cover; }
        .about-text .section-label { display: block; }
        .about-body {
          font-family: system-ui, sans-serif; font-size: 0.95rem;
          color: ${muted}; line-height: 1.8; margin-top: 1.5rem;
        }
        .about-body p + p { margin-top: 1rem; }
        .about-stats {
          display: flex; gap: 2rem; margin-top: 2.5rem;
          padding-top: 2rem; border-top: 1px solid ${borderColor};
        }
        .stat-num {
          font-size: 2rem; color: ${accent}; font-weight: 400;
        }
        .stat-label {
          font-family: system-ui, sans-serif; font-size: 0.75rem;
          letter-spacing: 0.1em; text-transform: uppercase; color: ${muted};
        }

        /* LOCATIONS */
        .loc-header { margin-bottom: 3rem; }
        .loc-cities { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem; }
        .loc-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
        }
        .loc-card {
          background: ${cardBg}; border: 1px solid ${borderColor};
          border-radius: 4px; padding: 1.5rem;
          transition: border-color 0.2s;
        }
        .loc-card:hover { border-color: ${accent}; }
        .loc-city {
          font-family: system-ui, sans-serif; font-size: 0.65rem;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: ${accent}; margin-bottom: 0.4rem;
        }
        .loc-name { font-size: 1rem; margin-bottom: 0.5rem; color: ${text}; }
        .loc-addr {
          font-family: system-ui, sans-serif; font-size: 0.82rem;
          color: ${muted}; line-height: 1.5; margin-bottom: 0.5rem;
        }
        .loc-hours {
          font-family: system-ui, sans-serif; font-size: 0.75rem;
          color: #6a6060; line-height: 1.5;
        }

        /* SOCIAL */
        .social-section {
          background: #0d0d0d; text-align: center;
          padding: 5rem 2rem;
        }
        .social-links {
          display: flex; gap: 1.5rem; justify-content: center;
          flex-wrap: wrap; margin-top: 2.5rem;
        }
        .social-link {
          border: 1px solid ${borderColor}; border-radius: 2px;
          padding: 0.75rem 1.75rem;
          font-family: system-ui, sans-serif; font-size: 0.78rem;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: ${muted}; transition: all 0.2s;
        }
        .social-link:hover {
          border-color: ${accent}; color: ${text};
          background: rgba(218,83,44,0.06);
        }

        /* FOOTER */
        footer {
          background: ${bg}; border-top: 1px solid ${borderColor};
          padding: 3rem 2rem; text-align: center;
        }
        .footer-brand {
          font-size: 1.3rem; letter-spacing: 0.12em;
          text-transform: uppercase; margin-bottom: 0.5rem;
        }
        .footer-sub {
          font-family: system-ui, sans-serif; font-size: 0.82rem;
          color: ${muted}; margin-bottom: 0.25rem;
        }
        .footer-copy {
          font-family: system-ui, sans-serif; font-size: 0.72rem;
          color: #4a4040; margin-top: 1.5rem;
        }

        /* DIVIDER */
        .divider {
          width: 48px; height: 2px;
          background: ${accent}; margin: 1.5rem 0;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .gallery-grid { grid-template-columns: repeat(2, 1fr); }
          .about-grid { grid-template-columns: 1fr; }
          .about-img-wrap { display: none; }
          .about-stats { flex-wrap: wrap; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr; }
          section { padding: 3.5rem 1.25rem; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">Intelligentsia</div>
        <div className="nav-links">
          <a href="#gallery">Gallery</a>
          <a href="#menu">Coffee</a>
          <a href="#about">Our Story</a>
          <a href="#locations">Locations</a>
          <a href="https://www.intelligentsia.com/collections/coffee" target="_blank" rel="noopener" className="nav-cta">Shop Now</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <p className="hero-eyebrow">Est. 1995 — Chicago, Illinois</p>
          <h1 className="hero-title">Illuminating Coffee</h1>
          <p className="hero-sub">
            Thoughtfully sourced, freshly roasted and proudly poured. Pioneers of the specialty coffee industry and the never-ending quest for the most extraordinary coffee in the world.
          </p>
          <a href="#menu" className="hero-cta">Explore Our Coffee</a>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="gallery-section">
        <div className="container">
          <div className="gallery-header">
            <p className="section-label">Gallery</p>
            <h2 className="section-title">A Passion for the Craft</h2>
            <div className="divider" />
          </div>
          <div className="gallery-grid">
            {gallery.map((img, i) => (
              <div key={i} className="gallery-item">
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu">
        <div className="container">
          <div className="menu-header">
            <p className="section-label">Our Coffee</p>
            <h2 className="section-title">The Black Cat Project & Beyond</h2>
            <div className="divider" />
            <p className="section-sub">
              Over 50 single-origins and blends released annually. Direct trade from more than 50 partners in 14 countries.
            </p>
          </div>
          <div className="menu-grid">
            {menuItems.map((item, i) => (
              <div key={i} className="menu-card">
                <div className="menu-img">
                  <img src={item.image} alt={item.name} loading="lazy" />
                </div>
                <div className="menu-body">
                  <p className="menu-tag">{item.tag}</p>
                  <h3 className="menu-name">{item.name}</h3>
                  <p className="menu-desc">{item.description}</p>
                  <p className="menu-price">{item.price} / 12 oz</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrap">
              <img src={images.story} alt="Intelligentsia Coffee founders story" loading="lazy" />
            </div>
            <div className="about-text">
              <span className="section-label">Our Story</span>
              <h2 className="section-title">The Story Begins in 1995</h2>
              <div className="divider" />
              <div className="about-body">
                <p>
                  Doug Zell and Emily Mange just wanted freshly roasted coffee. After moving from San Francisco to Chicago, they found that great tasting coffee in their new city was surprisingly elusive.
                </p>
                <p>
                  Instead of settling for bad coffee, they wrote the original business plan for what would become Intelligentsia Coffee. On October 9, 1995, they opened in Chicago's Lakeview neighborhood — roasting in-store with a Probat L12, building one cup at a time.
                </p>
                <p>
                  Today, Intelligentsia has a unique presence in five American cities and Seoul, South Korea. Direct trade relationships with farmers in 14 countries ensure that every bag delivers extraordinary coffee — coffee that illuminates what the plant, the soil, and the skill of dedicated people can achieve together.
                </p>
              </div>
              <div className="about-stats">
                <div>
                  <div className="stat-num">1995</div>
                  <div className="stat-label">Founded</div>
                </div>
                <div>
                  <div className="stat-num">14</div>
                  <div className="stat-label">Countries</div>
                </div>
                <div>
                  <div className="stat-num">50+</div>
                  <div className="stat-label">Trade Partners</div>
                </div>
                <div>
                  <div className="stat-num">12</div>
                  <div className="stat-label">Coffeebars</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations">
        <div className="container">
          <div className="loc-header">
            <p className="section-label">Coffeebars</p>
            <h2 className="section-title">Find Us Near You</h2>
            <div className="divider" />
            <p className="section-sub">Chicago · Los Angeles · New York · Boston · Austin · Seoul</p>
          </div>
          <div className="loc-grid">
            {locations.map((loc, i) => (
              <div key={i} className="loc-card">
                <p className="loc-city">{loc.city}</p>
                <h3 className="loc-name">{loc.name}</h3>
                <p className="loc-addr">{loc.address}</p>
                <p className="loc-hours">{loc.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="social-section">
        <div className="container">
          <p className="section-label">Follow Along</p>
          <h2 className="section-title">Stay Connected</h2>
          <div className="divider" style={{ margin: '1.5rem auto' }} />
          <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            Coffee is a daily ritual. Join our community of curious coffee lovers.
          </p>
          <div className="social-links">
            <a href="https://www.instagram.com/intelligentsiacoffee/" target="_blank" rel="noopener" className="social-link">Instagram</a>
            <a href="https://www.facebook.com/IntelligentsiaCoffee/" target="_blank" rel="noopener" className="social-link">Facebook</a>
            <a href="https://twitter.com/intelligentsia" target="_blank" rel="noopener" className="social-link">Twitter / X</a>
            <a href="https://www.youtube.com/channel/UCecATBSzE4GDVCId0fQ0vXQ" target="_blank" rel="noopener" className="social-link">YouTube</a>
            <a href="https://www.pinterest.com/intelliCoffee/" target="_blank" rel="noopener" className="social-link">Pinterest</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p className="footer-brand">Intelligentsia Coffee</p>
        <p className="footer-sub">Chicago, Illinois — Est. 1995</p>
        <p className="footer-sub">Thoughtfully sourced, freshly roasted and proudly poured.</p>
        <p className="footer-copy">© Intelligentsia Coffee 2026. All rights reserved.</p>
      </footer>
    </>
  );
}
