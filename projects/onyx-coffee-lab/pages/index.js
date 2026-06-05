import Head from 'next/head';

const menu = [
  { name: "Latte", img: "https://retail.onyxcontent.com/media/pages/pages/51409846370/0d7da51634-1661894980/latte.png", desc: "Whole milk + coffee concentrate" },
  { name: "Matcha", img: "https://retail.onyxcontent.com/media/pages/pages/51409846370/47a97067b4-1661894985/matcha.png", desc: "Matcha concentrate, whole milk, vanilla" },
  { name: "Onyx Delight", img: "https://retail.onyxcontent.com/media/pages/pages/51409846370/6b536d3d71-1661894987/onyx-delight.png", desc: "Coffee, honey, cinnamon, vanilla" },
  { name: "Croissant", img: "https://retail.onyxcontent.com/media/pages/pages/51409846370/9e74cb6dbb-1661894990/onyxcroissant.png", desc: "Butter, flour, baked fresh daily" },
  { name: "Breakfast Sandwich", img: "https://retail.onyxcontent.com/media/pages/pages/51409846370/467c71975d-1661894989/onyxbreakfastsammy.png", desc: "Bacon, cheddar, egg, frisée" },
  { name: "Brownie", img: "https://retail.onyxcontent.com/media/pages/pages/51409846370/a1ddc72fd0-1661894963/brownie.png", desc: "Dark chocolate, butter, brown sugar" },
];

const locations = [
  { name: "Rogers HQ", address: "101 E Walnut St, Rogers AR", note: "Roastery + training lab + bakery" },
  { name: "Bentonville", address: "100 NW 2nd Street, Bentonville AR", note: "Downtown square, vibrant + open" },
  { name: "Fayetteville", address: "2418 N Gregg Ave, Fayetteville AR", note: "Cozy local favorite" },
  { name: "Springdale", address: "100 W Emma Ave, Springdale AR", note: "3-story café + chocolate production" },
  { name: "The Momentary", address: "507 SE East Street, Bentonville AR", note: "Inside performing arts space" },
  { name: "Doyenne Cafe", address: "1700 SE 5th St, Bentonville AR", note: "Celebrating female coffee producers" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Onyx Coffee Lab — Never Settle for Good Enough</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Georgia', serif; background: #0a0a0a; color: #f0ebe0; }
        a { color: inherit; text-decoration: none; }

        nav {
          display: flex; justify-content: space-between; align-items: center;
          padding: 20px 60px; border-bottom: 1px solid #222; position: sticky; top: 0;
          background: #0a0a0a; z-index: 100;
        }
        .logo { font-size: 1.1rem; letter-spacing: 6px; font-weight: bold; color: #fff; }
        .nav-links { display: flex; gap: 32px; font-size: 0.75rem; letter-spacing: 2px; text-transform: uppercase; opacity: 0.6; }

        .hero {
          min-height: 90vh; display: flex; flex-direction: column;
          justify-content: center; align-items: center; text-align: center;
          padding: 80px 40px;
          background: url('https://cdn.shopify.com/s/files/1/1707/3261/files/website-pic-small_70c5a263-5ae0-4093-9035-0041afa7582a.jpg') center/cover no-repeat;
          position: relative;
        }
        .hero::after { content: ''; position: absolute; inset: 0; background: rgba(0,0,0,0.65); }
        .hero-content { position: relative; z-index: 1; }
        .badge { font-size: 0.7rem; letter-spacing: 5px; text-transform: uppercase; color: #c9a96e; margin-bottom: 16px; }
        .hero h1 { font-size: clamp(2.5rem, 6vw, 5.5rem); line-height: 1.1; margin-bottom: 20px; }
        .hero p { max-width: 520px; font-size: 1rem; line-height: 1.8; opacity: 0.7; margin-bottom: 36px; }
        .btn {
          display: inline-block; padding: 14px 40px; background: #c9a96e; color: #0a0a0a;
          font-size: 0.75rem; letter-spacing: 3px; text-transform: uppercase; font-weight: bold;
          transition: background 0.2s;
        }
        .btn:hover { background: #ddbf86; }

        section { padding: 90px 60px; }
        .section-label { font-size: 0.7rem; letter-spacing: 5px; text-transform: uppercase; color: #c9a96e; margin-bottom: 12px; }
        .section-title { font-size: 2.2rem; margin-bottom: 48px; }

        .menu-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; }
        .menu-card { background: #111; border: 1px solid #1f1f1f; overflow: hidden; transition: border-color 0.2s; }
        .menu-card:hover { border-color: #c9a96e; }
        .menu-card img { width: 100%; height: 220px; object-fit: cover; }
        .menu-card-body { padding: 20px; }
        .menu-card h3 { font-size: 1rem; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px; }
        .menu-card p { font-size: 0.85rem; opacity: 0.55; line-height: 1.6; }

        .about { background: #0d0d0d; }
        .about-inner { max-width: 700px; }
        .about p { font-size: 1.05rem; line-height: 1.9; opacity: 0.7; margin-bottom: 20px; }
        .award { display: inline-block; margin-top: 16px; padding: 10px 24px; border: 1px solid #c9a96e; font-size: 0.75rem; letter-spacing: 3px; text-transform: uppercase; color: #c9a96e; }

        .locations-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
        .location-card { padding: 28px; border: 1px solid #1f1f1f; transition: border-color 0.2s; }
        .location-card:hover { border-color: #c9a96e; }
        .location-card h3 { font-size: 0.9rem; letter-spacing: 3px; text-transform: uppercase; color: #c9a96e; margin-bottom: 8px; }
        .location-card .addr { font-size: 0.85rem; opacity: 0.6; margin-bottom: 8px; }
        .location-card .note { font-size: 0.8rem; opacity: 0.4; font-style: italic; }

        .social { background: #0d0d0d; text-align: center; }
        .social-links { display: flex; justify-content: center; gap: 32px; margin-top: 32px; flex-wrap: wrap; }
        .social-links a { font-size: 0.75rem; letter-spacing: 3px; text-transform: uppercase; opacity: 0.5; transition: opacity 0.2s; }
        .social-links a:hover { opacity: 1; }

        footer { text-align: center; padding: 40px; border-top: 1px solid #1a1a1a; font-size: 0.75rem; opacity: 0.3; letter-spacing: 2px; }

        @media (max-width: 768px) {
          nav { padding: 20px 24px; }
          .nav-links { display: none; }
          section { padding: 60px 24px; }
        }
      `}</style>

      <nav>
        <div className="logo">ONYX</div>
        <div className="nav-links">
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#locations">Locations</a>
          <a href="https://onyxcoffeelab.com/collections/coffee" target="_blank">Shop</a>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-content">
          <div className="badge">Est. 2012 · Rogers, Arkansas · #1 World's Best Coffee Shop 2026</div>
          <h1>Never Settle<br/>for Good Enough</h1>
          <p>Onyx Coffee Lab is a specialty roaster and café born in Arkansas, driven by an obsession with quality, transparency, and the perfect cup.</p>
          <a className="btn" href="https://onyxcoffeelab.com/collections/coffee" target="_blank">Shop Our Coffee</a>
        </div>
      </div>

      <section id="menu">
        <div className="section-label">What We Serve</div>
        <div className="section-title">Our Menu</div>
        <div className="menu-grid">
          {menu.map((item) => (
            <div className="menu-card" key={item.name}>
              <img src={item.img} alt={item.name} />
              <div className="menu-card-body">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <div className="section-label">Our Story</div>
        <div className="section-title">Who We Are</div>
        <div className="about-inner">
          <p>Founded in 2012 by Andrea and Jon Allen in Springdale, Arkansas, Onyx Coffee Lab began with one obsession: to never settle for good enough. That obsession has taken us from a small operation to one of the most recognized specialty coffee companies in the world.</p>
          <p>We roast daily from our Rogers HQ — a solar-powered facility housing our roastery, training lab, bakery, and coffee bar. Every coffee we serve comes with full sourcing transparency: where it's from, who grew it, what it costs, and why we chose it.</p>
          <div className="award">🏆 #1 — World's 100 Best Coffee Shops · Food & Wine 2026</div>
        </div>
      </section>

      <section id="locations">
        <div className="section-label">Find Us</div>
        <div className="section-title">Our Locations</div>
        <div className="locations-grid">
          {locations.map((loc) => (
            <div className="location-card" key={loc.name}>
              <h3>{loc.name}</h3>
              <div className="addr">{loc.address}</div>
              <div className="note">{loc.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="social">
        <div className="section-label">Follow Along</div>
        <div className="section-title">Stay Connected</div>
        <div className="social-links">
          <a href="https://www.instagram.com/onyxcoffeelab" target="_blank">Instagram</a>
          <a href="https://www.facebook.com/OnyxCoffeeLab" target="_blank">Facebook</a>
          <a href="https://www.tiktok.com/@onyxcoffeelab" target="_blank">TikTok</a>
          <a href="https://www.youtube.com/user/OnyxCoffeeLab" target="_blank">YouTube</a>
          <a href="https://twitter.com/OnyxCoffeeLab" target="_blank">Twitter</a>
        </div>
      </section>

      <footer>© 2026 Onyx Coffee Lab · Rogers, Arkansas · Never Settle for Good Enough</footer>
    </>
  );
}
