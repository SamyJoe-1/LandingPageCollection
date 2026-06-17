import Head from 'next/head';

const HERO = 'https://www.devocion.com/cdn/shop/files/DSCF9982_2_e337892f-107d-4a51-9bec-4d86cbd7843f.jpg?v=1772906295&width=1800';

const GALLERY = [
  { src: 'https://www.devocion.com/cdn/shop/files/DSCF9566.jpg?v=1771773542&width=1400', alt: 'Inside a Devoción New York coffee shop' },
  { src: 'https://www.devocion.com/cdn/shop/files/devocion_livingston010_2.jpg?v=1771382501&width=1400', alt: 'Downtown Brooklyn café with 18-foot windows and indoor tropical garden' },
  { src: 'https://www.devocion.com/cdn/shop/files/Devocion_Dumbo_0722_LizClayman_025_2.jpg?v=1771345671&width=1400', alt: 'The Dumbo coffee shop in Brooklyn' },
  { src: 'https://www.devocion.com/cdn/shop/files/Devocion_NoMad_0425_LizClayman_229_1.jpg?v=1771346113&width=1400', alt: 'The NoMad café in Manhattan' },
  { src: 'https://www.devocion.com/cdn/shop/files/Devocion_0523_LizClayman_501_1.jpg?v=1771344086&width=1400', alt: 'The Midtown Manhattan coffee shop' },
  { src: 'https://www.devocion.com/cdn/shop/files/Williamsburg_Devocion_LizClayman_035.jpg?v=1771379084&width=1400', alt: 'The pour over bar at the Williamsburg flagship roastery' },
];

const ABOUT_IMG = 'https://www.devocion.com/cdn/shop/files/IMG_1885.jpg?v=1771392892&width=1200';

const MENU = [
  { name: 'TORO', desc: 'Cocoa, vanilla, cherry, and almond. A rounded, comforting house blend and an everyday bestseller.', price: '$25.25' },
  { name: 'HONEY', desc: 'Honey, orange blossom, caramel, and a hint of eucalyptus — bright, sweet, and aromatic.', price: '$25.25' },
  { name: 'WILD FOREST', desc: 'Wild berries, cherry, agraz (Andean blueberry), cocoa butter, and caramel. Juicy and complex.', price: '$25.25' },
  { name: 'EL SOL', desc: 'Peach, caramel, and cinnamon — a warm, balanced cup for any time of day.', price: '$25.25' },
  { name: 'CITRUS', desc: 'Orange blossom, mandarin peel, lemongrass, and lemon. Vivid, fragrant, and refreshing.', price: '$25.25' },
  { name: 'SOMBRA', desc: "Baker's chocolate, caramelized sugar, and cinnamon — a deep, full-bodied dark roast.", price: '$25.25' },
  { name: 'DECAF', desc: 'Naturally decaffeinated with the sugarcane EA process, keeping all the flavor and none of the caffeine.', price: '$25.25' },
  { name: 'MITI MITI — HALF CAFF', desc: 'Molasses, cocoa butter, vanilla, and flowers. Half the caffeine, all of the character.', price: '$25.25' },
];

const LOCATIONS = [
  { name: 'Williamsburg', addr: '148 Grand St, Brooklyn, NY 11249', note: 'Flagship coffee shop & training lab' },
  { name: 'Downtown Brooklyn', addr: '276 Livingston St, Brooklyn, NY 11201', note: '18-ft windows & indoor tropical garden' },
  { name: 'Dumbo', addr: '105 York St, Brooklyn, NY 11201', note: 'Coffee shop' },
  { name: 'NoMad', addr: '1134 Broadway, New York, NY 10010', note: 'Coffee shop' },
  { name: 'Flatiron', addr: '25 E 20th St, New York, NY 10003', note: 'Coffee shop' },
  { name: 'Midtown', addr: '600 Lexington Ave, New York, NY 10022', note: 'Coffee shop' },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Devoción — Farm-Fresh Colombian Specialty Coffee</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Devoción — Colombian-born, Brooklyn-roasted specialty coffee. Sourced directly from 1,000+ farm partners and delivered from origin to your cup as fast as 10 days. Founded 2006." />
      </Head>

      <nav className="nav">
        <a className="logo" href="#top">DEVOCIÓN</a>
        <div className="links">
          <a href="#gallery">Cafés</a>
          <a href="#menu">Coffee</a>
          <a href="#about">Our Difference</a>
          <a href="#locations">Locations</a>
        </div>
        <a className="shop" href="https://www.devocion.com/collections" target="_blank" rel="noopener noreferrer">Shop</a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow">Brooklyn, NY &middot; Sourced in Colombia &middot; Since 2006</p>
          <h1>From origin<br />to your cup<br />in 10 days.</h1>
          <p className="sub">Farm-fresh Colombian specialty coffee — hand-selected at origin, dry-milled in Bogotá, and roasted daily in Brooklyn for the most vibrant cup imaginable.</p>
          <a className="cta" href="#menu">Explore Our Coffee</a>
        </div>
      </header>

      <section id="gallery" className="section">
        <h2>Our Cafés</h2>
        <p className="lead">Six New York coffee shops, from the Williamsburg flagship to Midtown Manhattan.</p>
        <div className="gallery">
          {GALLERY.map((g) => (
            <div className="g-item" key={g.src}>
              <img src={g.src} alt={g.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="section alt">
        <h2>House Blends</h2>
        <p className="lead">Signature profiles available year-round, sourced from farms in active harvest for peak freshness — even before roasting.</p>
        <div className="menu">
          {MENU.map((m) => (
            <div className="m-item" key={m.name}>
              <div className="m-head">
                <h3>{m.name}</h3>
                <span className="price">{m.price}</span>
              </div>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section about">
        <div className="about-text">
          <h2>Our Difference</h2>
          <p>Colombian-born Steven Sutton launched Devoción in 2006 to produce the freshest coffee imaginable. Roasting provides only half of coffee&rsquo;s flavor &mdash; freshness of the beans does the rest. Yet most coffee sits in warehouses for months, losing flavor every day.</p>
          <p>So the Devoción team does everything short of picking the cherry, and does it faster than anyone else: hand-selecting more than 1,000 farm partners, dry-milling at our facility in Bogotá, controlling the export process, and roasting in Brooklyn.</p>
          <p>The result is true farm-fresh coffee that reaches your cup as fast as ten days after leaving origin &mdash; for the most vibrant, flavorful coffee every time. Devoción is a Certified B Corporation, caring for the origin and creating a positive impact across the value chain.</p>
        </div>
        <div className="about-img">
          <img src={ABOUT_IMG} alt="Devoción farm-fresh Colombian coffee" loading="lazy" />
        </div>
      </section>

      <section id="locations" className="section alt">
        <h2>Locations</h2>
        <p className="lead">Open daily across Brooklyn and Manhattan.</p>
        <div className="locations">
          {LOCATIONS.map((l) => (
            <div className="l-item" key={l.name}>
              <h3>{l.name}</h3>
              <p className="l-note">{l.note}</p>
              <p>{l.addr}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section social">
        <h2>Follow Devoción</h2>
        <div className="social-links">
          <a href="https://www.instagram.com/devocionusa/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/DevocionUSA" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://tiktok.com/@devocionusa" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href="https://www.devocion.com" target="_blank" rel="noopener noreferrer">devocion.com</a>
        </div>
      </section>

      <footer className="footer">
        <p className="f-logo">DEVOCIÓN</p>
        <p>Brooklyn, New York &middot; Sourced in Colombia &middot; From origin to your cup as fast as 10 days</p>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #0a0707;
          color: #f3eae2;
          font-family: Georgia, 'Times New Roman', serif;
          line-height: 1.6;
        }
        a { color: inherit; text-decoration: none; }
        .nav {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 32px;
          background: rgba(10,7,7,0.9);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(200,16,46,0.32);
        }
        .logo { font-weight: bold; letter-spacing: 3px; font-size: 20px; color: #C8102E; font-family: -apple-system, system-ui, sans-serif; }
        .links { display: flex; gap: 28px; font-family: -apple-system, system-ui, sans-serif; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; }
        .links a:hover { color: #C8102E; }
        .shop {
          font-family: -apple-system, system-ui, sans-serif; font-size: 13px;
          text-transform: uppercase; letter-spacing: 1px;
          border: 1px solid #C8102E; color: #C8102E;
          padding: 8px 18px; border-radius: 2px; transition: .2s;
        }
        .shop:hover { background: #C8102E; color: #0a0707; }
        .hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 0 24px;
          background: url('${HERO}') center/cover no-repeat fixed;
        }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(10,7,7,0.5), rgba(10,7,7,0.86)); }
        .hero-inner { position: relative; max-width: 820px; }
        .eyebrow { font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 4px; font-size: 13px; color: #C8102E; margin-bottom: 18px; }
        .hero h1 { font-size: 58px; line-height: 1.05; margin-bottom: 22px; }
        .hero .sub { font-size: 19px; color: #dccfc4; max-width: 640px; margin: 0 auto 32px; }
        .cta {
          display: inline-block; background: #C8102E; color: #fff;
          font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase;
          letter-spacing: 1.5px; font-size: 14px; padding: 15px 38px; border-radius: 2px; transition: .2s; font-weight: 600;
        }
        .cta:hover { background: #a30d25; }
        .section { padding: 90px 32px; max-width: 1200px; margin: 0 auto; }
        .section.alt { background: #130d0c; max-width: none; }
        .section.alt > * { max-width: 1200px; margin-left: auto; margin-right: auto; }
        .section h2 { font-size: 40px; text-align: center; margin-bottom: 14px; }
        .section h2::after { content: ''; display: block; width: 56px; height: 3px; background: #C8102E; margin: 16px auto 0; }
        .lead, .section .lead { text-align: center; color: #b6a99c; font-style: italic; margin-bottom: 44px; }
        .gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 44px; }
        .g-item { overflow: hidden; border-radius: 4px; aspect-ratio: 4/3; }
        .g-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; display: block; }
        .g-item:hover img { transform: scale(1.07); }
        .menu { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .m-item { border: 1px solid #2a1d1c; border-left: 3px solid #C8102E; padding: 22px 24px; border-radius: 3px; background: #0d0908; }
        .m-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
        .m-item h3 { font-size: 21px; margin-bottom: 6px; letter-spacing: 1px; }
        .m-item .price { color: #C8102E; font-family: -apple-system, system-ui, sans-serif; font-size: 16px; font-weight: 600; white-space: nowrap; }
        .m-item p { color: #b6a99c; font-size: 16px; }
        .about { display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: center; }
        .about h2 { text-align: left; }
        .about h2::after { margin-left: 0; }
        .about-text p { margin-bottom: 16px; font-size: 18px; color: #dccfc4; }
        .about-img img { width: 100%; border-radius: 6px; display: block; }
        .locations { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 44px; }
        .l-item { background: #0d0908; border: 1px solid #2a1d1c; padding: 24px; border-radius: 4px; }
        .l-item h3 { color: #C8102E; font-size: 18px; margin-bottom: 6px; font-family: -apple-system, system-ui, sans-serif; }
        .l-item .l-note { color: #8f8275; font-size: 13px; font-style: italic; margin-bottom: 8px; }
        .l-item p { color: #b6a99c; }
        .social { text-align: center; }
        .social-links { display: flex; justify-content: center; gap: 22px; flex-wrap: wrap; margin-top: 30px; font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; }
        .social-links a { border: 1px solid #34211f; padding: 12px 26px; border-radius: 2px; transition: .2s; }
        .social-links a:hover { border-color: #C8102E; color: #C8102E; }
        .footer { text-align: center; padding: 50px 24px; border-top: 1px solid #1c1413; background: #070403; }
        .f-logo { font-family: -apple-system, system-ui, sans-serif; letter-spacing: 3px; color: #C8102E; font-weight: bold; margin-bottom: 8px; }
        .footer p { color: #897e70; font-size: 14px; }
        @media (max-width: 820px) {
          .links { display: none; }
          .hero h1 { font-size: 38px; }
          .hero { background-attachment: scroll; }
          .gallery, .locations { grid-template-columns: repeat(2, 1fr); }
          .menu { grid-template-columns: 1fr; }
          .about { grid-template-columns: 1fr; }
          .section { padding: 60px 20px; }
        }
        @media (max-width: 500px) {
          .gallery, .locations { grid-template-columns: 1fr; }
          .nav { padding: 14px 18px; }
          .logo { font-size: 16px; }
        }
      `}</style>
    </div>
  );
}
