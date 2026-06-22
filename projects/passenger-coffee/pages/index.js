import Head from 'next/head';

const HERO = 'https://cdn.sanity.io/images/qdp8j8e6/production/15732734df431e0549526390b0c8754d1b056adc-2388x1592.jpg?w=2388&auto=format';

const GALLERY = [
  { src: 'https://cdn.sanity.io/images/qdp8j8e6/production/528825161d3236127852464b41a0f33f563d4d52-2667x4000.jpg?rect=0,1663,2667,1500&w=2667&h=1500&auto=format', alt: 'The corner booth at Passenger’s King St. Showroom flagship cafe in Lancaster, PA' },
  { src: 'https://cdn.sanity.io/images/qdp8j8e6/production/3d5e95549705e9e8ab680a2d6bb413d52c092337-4000x2667.jpg?rect=0,209,4000,2250&w=4000&h=2250&auto=format', alt: 'The Passenger Roastery & Coffee Bar nestled in the front of the roasting facility' },
  { src: 'https://cdn.sanity.io/images/qdp8j8e6/production/1ddcc3d37ce151739805b11bf930bf79ee52d24d-4000x2094.jpg?w=4000&auto=format', alt: 'A guided cupping and tasting experience in Passenger’s training lab' },
  { src: 'https://cdn.sanity.io/images/qdp8j8e6/production/b7ee1741b4a926b8575a7dc3fe34afbbed2b876f-3200x4000.jpg?w=3200&auto=format', alt: 'A freshly poured cappuccino sits on a shelf waiting for pickup at Passenger' },
  { src: 'https://cdn.sanity.io/images/qdp8j8e6/production/de60b04d851b2bc4a29b6c4a35f8433fc061090e-2048x1536.jpg?rect=0,86,2048,1365&w=2048&h=1365&auto=format', alt: 'The original Passenger Airstream travel trailer at the Prince St. Pop-up Park in Lancaster' },
  { src: 'https://cdn.sanity.io/images/qdp8j8e6/production/02a8653ca80bce1b6ef76a55a2f721e1765f9dad-2400x1255.png?rect=259,0,1883,1255&w=2400&h=1600&auto=format', alt: 'Divino Niño producer Adriana Gonzalez and family with Passenger’s Evan and Crystal' },
];

const ABOUT_IMG = 'https://cdn.sanity.io/images/qdp8j8e6/production/2d63a43dbce55f1b3c6cd55f63a6be8bed3754e4-3200x4000.jpg?rect=0,1594,3200,2314&w=3200&auto=format';

const MENU = [
  { name: 'Bhadra', origin: 'India', desc: 'Citrus, black tea and stone fruit. A bright, structured single origin from one of Passenger’s Foundational Partners.', price: 'From $20.25' },
  { name: 'Agaro', origin: 'Ethiopia', desc: 'Bergamot, peach and Meyer lemon — a fragrant, tea-like Ethiopian washed coffee with a delicate, perfumed character.', price: 'From $19.80' },
  { name: 'Divino Niño', origin: 'Colombia', desc: 'Cherry, marzipan and caramel from the Gonzalez family farm — a long-standing relationship lot full of sweetness.', price: 'From $22.25' },
  { name: 'Heza', origin: 'Burundi', desc: 'Raspberry, black tea and apricot. A vibrant, juicy washed coffee from the hills of Burundi.', price: 'From $21.25' },
  { name: 'Keystone Blend', origin: 'Blend', desc: 'Florals, cooked fruit and browning sugars — a rounded, comforting everyday blend built from Foundational components.', price: 'From $21.25' },
  { name: 'Stowaway Blend', origin: 'Blend', desc: 'Florals, browning sugars and cocoa. An approachable, balanced blend that shines on filter and espresso alike.', price: 'From $19.80' },
  { name: 'Montecarlos', origin: 'El Salvador', desc: 'Clementine, cocoa and toasted nuts — a sweet, dependable Salvadoran coffee with gentle citrus lift.', price: 'From $20.25' },
  { name: 'Los Sueños Decaf', origin: 'Colombia', desc: 'Cherry, black tea and caramel. A naturally sweet Colombian decaf that keeps all the fruit and none of the caffeine.', price: 'From $21.50' },
];

const LOCATIONS = [
  { name: 'Flagship Cafe — King St. Showroom', addr: '7 W King St, Lancaster, PA 17603', note: 'Mon–Thu 7AM–2PM · Fri–Sun 7AM–4PM', desc: 'Stop in for a coffee to go, choose a single-origin brewed as espresso or pour-over, or settle in at our Gongfu tea bar — an invitation to slow down and experience something exceptional.' },
  { name: 'Roastery & Coffee Bar', addr: '131 N Plum St, Lancaster, PA 17602', note: 'Mon–Sun 7AM–2PM', desc: 'Our neighborhood coffee bar is nestled in the front of our roasting facility, offering a rotating menu of coffee, tea and pastries.' },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Passenger Coffee &mdash; Lancaster, Pennsylvania</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Passenger Coffee &mdash; a roaster, cafe and tea house in Lancaster, Pennsylvania. Since 2014, we seek out and thoughtfully present extraordinary coffee and tea sourced from long-term, farmer-focused partnerships." />
      </Head>

      <nav className="nav">
        <a className="logo" href="#top">Passenger</a>
        <div className="links">
          <a href="#gallery">Caf&eacute;s</a>
          <a href="#menu">Coffee</a>
          <a href="#about">Our Story</a>
          <a href="#locations">Locations</a>
        </div>
        <a className="shop" href="https://drinkpassenger.com/collections/foundational-coffee" target="_blank" rel="noopener noreferrer">Shop</a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow">Lancaster, Pennsylvania &middot; Roaster, Caf&eacute; &amp; Tea House &middot; Since 2014</p>
          <h1>Extraordinary coffee,<br />thoughtfully presented.</h1>
          <p className="sub">Passenger exists to seek out and present the world&rsquo;s finest coffee and tea &mdash; sourced from long-term, farmer-focused partnerships and roasted at peak freshness in Lancaster, PA.</p>
          <a className="cta" href="#menu">Explore Our Coffee</a>
        </div>
      </header>

      <section id="gallery" className="section">
        <h2>Our Caf&eacute;s &amp; Partners</h2>
        <p className="lead">Two Lancaster cafes, a working roastery, and the producers behind every cup &mdash; from India and Ethiopia to Colombia and Burundi.</p>
        <div className="gallery">
          {GALLERY.map((g) => (
            <div className="g-item" key={g.src}>
              <img src={g.src} alt={g.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="section alt">
        <h2>Foundational Menu</h2>
        <p className="lead">Single-origin, blend and decaf offerings from our seven Foundational Partners &mdash; kept in frozen green storage and roasted at peak freshness year-round.</p>
        <div className="menu">
          {MENU.map((m) => (
            <div className="m-item" key={m.name}>
              <div className="m-head">
                <h3>{m.name}</h3>
                <span className="price">{m.price}</span>
              </div>
              <p className="m-origin">{m.origin}</p>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section about">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>Passenger first opened for business in the spring of 2014, serving coffee out of a modified Airstream travel trailer to friends and neighbors in Lancaster, Pennsylvania.</p>
          <p>Over a decade and counting, we&rsquo;ve deepened our sourcing network, built wholesale partnerships across the country, and expanded local operations to include a roastery and two cafes in our hometown. If one value lies at the heart of everything we do, it is a particular philosophy of partnership &mdash; long-term, mutually beneficial relationships with the producers who grow our coffee and tea.</p>
          <p>Archival preservation through freezing is central to our approach: 100% of our green coffee is kept carefully frozen, allowing us to roast and serve every offering at peak freshness, all year round.</p>
        </div>
        <div className="about-img">
          <img src={ABOUT_IMG} alt="Passenger Coffee, seeking out and thoughtfully presenting the world's finest coffee and tea" loading="lazy" />
        </div>
      </section>

      <section id="locations" className="section alt">
        <h2>Locations</h2>
        <p className="lead">Two cafes in Lancaster, Pennsylvania &mdash; open seven days a week.</p>
        <div className="locations">
          {LOCATIONS.map((l) => (
            <div className="l-item" key={l.name}>
              <h3>{l.name}</h3>
              <p className="l-note">{l.note}</p>
              <p>{l.addr}</p>
              <p className="l-desc">{l.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section social">
        <h2>Follow Passenger</h2>
        <div className="social-links">
          <a href="https://instagram.com/drinkpassenger" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://facebook.com/drinkpassenger" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://drinkpassenger.com" target="_blank" rel="noopener noreferrer">drinkpassenger.com</a>
        </div>
      </section>

      <footer className="footer">
        <p className="f-logo">PASSENGER COFFEE</p>
        <p>Lancaster, Pennsylvania &middot; Roaster, caf&eacute; &amp; tea house &middot; Thoughtfully presenting extraordinary coffee since 2014</p>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #100d0a;
          color: #f3ece1;
          font-family: Georgia, 'Times New Roman', serif;
          line-height: 1.6;
        }
        a { color: inherit; text-decoration: none; }
        .nav {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 32px;
          background: rgba(16,13,10,0.9);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(200,155,92,0.32);
        }
        .logo { font-weight: bold; letter-spacing: 1px; font-size: 24px; color: #C89B5C; font-family: Georgia, serif; font-style: italic; }
        .links { display: flex; gap: 28px; font-family: -apple-system, system-ui, sans-serif; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; }
        .links a:hover { color: #C89B5C; }
        .shop {
          font-family: -apple-system, system-ui, sans-serif; font-size: 13px;
          text-transform: uppercase; letter-spacing: 1px;
          border: 1px solid #C89B5C; color: #C89B5C;
          padding: 8px 18px; border-radius: 2px; transition: .2s;
        }
        .shop:hover { background: #C89B5C; color: #100d0a; }
        .hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 0 24px;
          background: url('${HERO}') center/cover no-repeat fixed;
        }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(16,13,10,0.5), rgba(16,13,10,0.9)); }
        .hero-inner { position: relative; max-width: 820px; }
        .eyebrow { font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 4px; font-size: 13px; color: #C89B5C; margin-bottom: 18px; }
        .hero h1 { font-size: 58px; line-height: 1.05; margin-bottom: 22px; }
        .hero .sub { font-size: 19px; color: #e2d6c4; max-width: 640px; margin: 0 auto 32px; }
        .cta {
          display: inline-block; background: #C89B5C; color: #2a1d0c;
          font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase;
          letter-spacing: 1.5px; font-size: 14px; padding: 15px 38px; border-radius: 2px; transition: .2s; font-weight: 600;
        }
        .cta:hover { background: #b3853f; }
        .section { padding: 90px 32px; max-width: 1200px; margin: 0 auto; }
        .section.alt { background: #16110b; max-width: none; }
        .section.alt > * { max-width: 1200px; margin-left: auto; margin-right: auto; }
        .section h2 { font-size: 40px; text-align: center; margin-bottom: 14px; }
        .section h2::after { content: ''; display: block; width: 56px; height: 3px; background: #C89B5C; margin: 16px auto 0; }
        .lead, .section .lead { text-align: center; color: #b6a288; font-style: italic; margin-bottom: 44px; }
        .gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 44px; }
        .g-item { overflow: hidden; border-radius: 4px; aspect-ratio: 4/3; }
        .g-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; display: block; }
        .g-item:hover img { transform: scale(1.07); }
        .menu { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .m-item { border: 1px solid #2a2014; border-left: 3px solid #C89B5C; padding: 22px 24px; border-radius: 3px; background: #12100b; }
        .m-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
        .m-item h3 { font-size: 21px; margin-bottom: 4px; letter-spacing: 0.5px; }
        .m-item .price { color: #C89B5C; font-family: -apple-system, system-ui, sans-serif; font-size: 15px; font-weight: 600; white-space: nowrap; }
        .m-origin { color: #9c8156; font-family: -apple-system, system-ui, sans-serif; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px; }
        .m-item p { color: #b6a288; font-size: 16px; }
        .about { display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: center; }
        .about h2 { text-align: left; }
        .about h2::after { margin-left: 0; }
        .about-text p { margin-bottom: 16px; font-size: 18px; color: #e2d6c4; }
        .about-img img { width: 100%; border-radius: 6px; display: block; }
        .locations { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; margin-top: 44px; }
        .l-item { background: #12100b; border: 1px solid #2a2014; padding: 24px; border-radius: 4px; }
        .l-item h3 { color: #C89B5C; font-size: 18px; margin-bottom: 6px; font-family: -apple-system, system-ui, sans-serif; }
        .l-item .l-note { color: #9c8156; font-size: 13px; font-style: italic; margin-bottom: 8px; }
        .l-item .l-desc { color: #8f7a5d; font-size: 14px; margin-top: 10px; }
        .l-item p { color: #b6a288; }
        .social { text-align: center; }
        .social-links { display: flex; justify-content: center; gap: 22px; flex-wrap: wrap; margin-top: 30px; font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; }
        .social-links a { border: 1px solid #33271a; padding: 12px 26px; border-radius: 2px; transition: .2s; }
        .social-links a:hover { border-color: #C89B5C; color: #C89B5C; }
        .footer { text-align: center; padding: 50px 24px; border-top: 1px solid #221a10; background: #0b0907; }
        .f-logo { font-family: Georgia, serif; font-style: italic; letter-spacing: 1px; color: #C89B5C; font-weight: bold; margin-bottom: 8px; font-size: 18px; }
        .footer p { color: #897a64; font-size: 14px; }
        @media (max-width: 820px) {
          .links { display: none; }
          .hero h1 { font-size: 38px; }
          .hero { background-attachment: scroll; }
          .gallery { grid-template-columns: repeat(2, 1fr); }
          .menu, .locations { grid-template-columns: 1fr; }
          .about { grid-template-columns: 1fr; }
          .section { padding: 60px 20px; }
        }
        @media (max-width: 500px) {
          .gallery { grid-template-columns: 1fr; }
          .nav { padding: 14px 18px; }
          .logo { font-size: 20px; }
        }
      `}</style>
    </div>
  );
}
