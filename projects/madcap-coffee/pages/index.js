import Head from 'next/head';

const HERO = 'https://www.madcapcoffee.com/cdn/shop/files/Fulton_spring_9f4dcf5e-5ba9-4757-bacc-af84949840ec.jpg?v=1716574808';

const GALLERY = [
  { src: 'https://www.madcapcoffee.com/cdn/shop/files/Homepage_Header_Fulton_1600x.jpg?v=1714059340', alt: 'The Fulton Street roastery and cafe in Grand Rapids, a renovated 1930s industrial building with open garage doors' },
  { src: 'https://www.madcapcoffee.com/cdn/shop/files/Madcap-Locations-Monroe-Banner_1600x.jpg?v=1715267227', alt: 'The Monroe Center cafe exterior in downtown Grand Rapids, the original Madcap location' },
  { src: 'https://www.madcapcoffee.com/cdn/shop/files/Madcap_Detroit_1600x.png?v=1712776665', alt: "Madcap's Parker's Alley cafe in downtown Detroit, next to the Shinola Hotel" },
  { src: 'https://www.madcapcoffee.com/cdn/shop/files/DSC_0430-5_1600x.jpg?v=1781204766', alt: 'The new 9 Mile cafe in Ferndale, with a peninsula-style bar in limestone, timber, and black patina steel' },
  { src: 'https://www.madcapcoffee.com/cdn/shop/files/Bolt_8oz_PDP-Black_3ab2aaff-eb62-4f60-abda-d05e7224fd4f_600x.jpg?v=1778106423', alt: 'A bag of Madcap Bolt house blend coffee with the signature lightning bolt' },
  { src: 'https://www.madcapcoffee.com/cdn/shop/files/DayDream_8oz_PDP_155e3cfd-8eab-4cdc-be49-947cb45ce9b3_600x.jpg?v=1778107006', alt: 'A bag of Madcap Day Dream Africa blend coffee' },
];

const ABOUT_IMG = 'https://www.madcapcoffee.com/cdn/shop/files/IMG_4227_1600x.jpg?v=1775172227';

const MENU = [
  { name: 'Bolt', origin: 'House Blend / Central & South America', desc: 'Our dependable house blend, named for our signature lightning bolt. An approachable blend with low acidity and caramelized-sugar sweetness — delicious on drip, pour over, or as espresso.', notes: 'Deep · Syrupy · Chocolate', price: 'From $11' },
  { name: 'Eureka', origin: 'House Espresso Blend', desc: 'Our essential cafe espresso, built to deliver with steamed milk or stand on its own. Full-bodied, syrupy Central and South American coffee blended with bright, fruity East African acidity.', notes: 'Black Cherry · Chocolate · Orange Zest', price: 'From $11' },
  { name: 'Day Dream', origin: 'Africa Blend', desc: 'Your entry point to the world of tea-like African coffees. Fruit-forward yet approachable, with delicate florality and soft notes of citrus and stone fruit from this full-bodied cup.', notes: 'Floral · Stone Fruit · Citrus', price: 'From $13' },
  { name: 'Single Origin Subscription', origin: 'Rotating Single Origins', desc: 'Named Best Subscription for Unique Roasts by Food & Wine in 2023 and 2024. A rotating selection of single origins that highlight the nuance of seasonality and place, delivered on your schedule.', notes: 'Seasonal · Traceable · Direct', price: 'From $22' },
  { name: 'Blends Subscription', origin: 'Evolving House Blends', desc: 'Balance and familiarity, delivered with ease. From always-on favorites to seasonal releases, our blends are developed in-house to bring exceptional coffee into your daily rhythm.', notes: 'Balanced · Always-On', price: 'From $19' },
  { name: 'Cascara', origin: 'Coffee Cherry', desc: 'Made from the dried fruit that surrounds the coffee seed and brewed gently like a tea — a delicate, fruit-forward cup that is a different way to taste the coffee plant.', notes: 'Delicate · Fruit-Forward', price: '$15' },
];

const LOCATIONS = [
  { name: 'Fulton Street Cafe & Roastery', addr: '1041 Fulton St E, Grand Rapids, MI 49503', note: 'Mon–Fri 7a–3p · Sat & Sun 8a–4p', desc: 'Once a 1930s neighborhood body shop, thoughtfully renovated to preserve its industrial character. Home to our roastery, training and education space, warehouse, and offices — with garage doors that open on warmer days.' },
  { name: 'Monroe Center Cafe', addr: '98 Monroe Center NW, Grand Rapids, MI 49503', note: 'Mon–Sun 8a–4p', desc: 'Opened in 2008, Monroe Center was the very first Madcap cafe and the original home of our roasting operations, which began in the basement. A gathering place in the heart of downtown Grand Rapids.' },
  { name: "Parker's Alley", addr: '1413 Farmer St, Detroit, MI 48226', note: 'Mon–Sat 7a–8p · Sun 8a–7p', desc: 'Tucked into a bustling downtown Detroit stretch right next to the Shinola Hotel, with pastries and treats from local Give Thanks Bakery and validated parking nearby.' },
  { name: '9 Mile Cafe', addr: 'Ferndale, MI', note: 'Opened 2026', desc: 'A new chapter for Madcap just outside Detroit. Designed around a peninsula-style bar for a closer view of service, in a warm material language of limestone, timber, and black patina stainless steel.' },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Madcap Coffee Company &mdash; Grand Rapids, Michigan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Madcap Coffee Company — a specialty coffee roaster and cafe founded in 2008 in Grand Rapids, Michigan. Ordinary, Elevated. Roasting and serving coffee across Grand Rapids, Detroit, and Ferndale." />
      </Head>

      <nav className="nav">
        <a className="logo" href="#top">MADCAP</a>
        <div className="links">
          <a href="#gallery">Caf&eacute;s</a>
          <a href="#menu">Coffee</a>
          <a href="#about">Our Story</a>
          <a href="#locations">Locations</a>
        </div>
        <a className="shop" href="https://www.madcapcoffee.com/collections/all-coffee" target="_blank" rel="noopener noreferrer">Shop</a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow">Grand Rapids, Michigan &middot; Specialty Roaster &amp; Caf&eacute; &middot; Since 2008</p>
          <h1>Ordinary,<br />Elevated.</h1>
          <p className="sub">Madcap exists to reveal the craftsmanship and human connection behind every cup &mdash; transforming a daily ritual into something more intentional. Roasted in Michigan, sourced through direct relationships around the globe.</p>
          <a className="cta" href="#menu">Explore Our Coffee</a>
        </div>
      </header>

      <section id="gallery" className="section">
        <h2>See, Sense &amp; Taste the Experience</h2>
        <p className="lead">From a renovated 1930s body shop on Fulton Street to a brand-new room in Ferndale &mdash; this is Madcap across Michigan.</p>
        <div className="gallery">
          {GALLERY.map((g) => (
            <div className="g-item" key={g.src}>
              <img src={g.src} alt={g.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="section alt">
        <h2>The Coffee</h2>
        <p className="lead">We sample and choose only the most select coffees for the Madcap menu &mdash; the same ones you will find in our caf&eacute;s.</p>
        <div className="menu">
          {MENU.map((m) => (
            <div className="m-item" key={m.name}>
              <div className="m-head">
                <h3>{m.name}</h3>
                <span className="price">{m.price}</span>
              </div>
              <p className="m-origin">{m.origin}</p>
              <p>{m.desc}</p>
              <p className="m-notes">{m.notes}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section about">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>Founded in 2008, Madcap Coffee Company is headquartered in Grand Rapids, Michigan, where we operate our own roastery alongside several cafes across the state.</p>
          <p>Our founder, Trevor Corlett, is an award-winning, nationally recognized barista and trainer. We have been spotlighted by national media and in competition for our coffees, roasting profiles, and innovative drink recipes.</p>
          <p>We source each coffee through traceable, direct relationships with producers around the globe. Our team samples and chooses our favorite batches for the roastery &mdash; because we believe that coffee, from seed to cup, should be a force for good.</p>
        </div>
        <div className="about-img">
          <img src={ABOUT_IMG} alt="Madcap coffee being prepared, reflecting the craftsmanship behind every cup" loading="lazy" />
        </div>
      </section>

      <section id="locations" className="section alt">
        <h2>Locations</h2>
        <p className="lead">Find Madcap throughout Michigan &mdash; in Grand Rapids, Detroit, and Ferndale.</p>
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
        <h2>Follow Madcap</h2>
        <div className="social-links">
          <a href="https://www.instagram.com/madcapcoffee/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/madcapcoffee/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.tiktok.com/@madcapcoffee" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href="https://www.youtube.com/channel/UCGyWialdOPuvoESkmnEdVkg" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://www.madcapcoffee.com" target="_blank" rel="noopener noreferrer">madcapcoffee.com</a>
        </div>
      </section>

      <footer className="footer">
        <p className="f-logo">MADCAP COFFEE COMPANY</p>
        <p>1041 Fulton St E, Grand Rapids, MI &middot; Specialty roaster &amp; caf&eacute; &middot; Ordinary, Elevated.</p>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #0c0c0c;
          color: #f4f2ec;
          font-family: Georgia, 'Times New Roman', serif;
          line-height: 1.6;
        }
        a { color: inherit; text-decoration: none; }
        .nav {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 32px;
          background: rgba(12,12,12,0.9);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(244,244,242,0.16);
        }
        .logo { font-weight: bold; letter-spacing: 3px; font-size: 22px; color: #f2c14e; font-family: -apple-system, system-ui, sans-serif; }
        .links { display: flex; gap: 28px; font-family: -apple-system, system-ui, sans-serif; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; }
        .links a:hover { color: #f2c14e; }
        .shop {
          font-family: -apple-system, system-ui, sans-serif; font-size: 13px;
          text-transform: uppercase; letter-spacing: 1px;
          border: 1px solid #f2c14e; color: #f2c14e;
          padding: 8px 18px; border-radius: 2px; transition: .2s;
        }
        .shop:hover { background: #f2c14e; color: #0c0c0c; }
        .hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 0 24px;
          background: url('${HERO}') center/cover no-repeat fixed;
        }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(12,12,12,0.5), rgba(12,12,12,0.9)); }
        .hero-inner { position: relative; max-width: 820px; }
        .eyebrow { font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 4px; font-size: 13px; color: #f2c14e; margin-bottom: 18px; }
        .hero h1 { font-size: 64px; line-height: 1.02; margin-bottom: 22px; }
        .hero .sub { font-size: 19px; color: #e4e1d9; max-width: 640px; margin: 0 auto 32px; }
        .cta {
          display: inline-block; background: #f2c14e; color: #0c0c0c;
          font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase;
          letter-spacing: 1.5px; font-size: 14px; padding: 15px 38px; border-radius: 2px; transition: .2s; font-weight: 700;
        }
        .cta:hover { background: #e0a526; }
        .section { padding: 90px 32px; max-width: 1200px; margin: 0 auto; }
        .section.alt { background: #141414; max-width: none; }
        .section.alt > * { max-width: 1200px; margin-left: auto; margin-right: auto; }
        .section h2 { font-size: 40px; text-align: center; margin-bottom: 14px; }
        .section h2::after { content: ''; display: block; width: 56px; height: 3px; background: #f2c14e; margin: 16px auto 0; }
        .lead, .section .lead { text-align: center; color: #a8a69e; font-style: italic; margin-bottom: 44px; }
        .gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 44px; }
        .g-item { overflow: hidden; border-radius: 4px; aspect-ratio: 4/3; background: #1c1c1c; }
        .g-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; display: block; }
        .g-item:hover img { transform: scale(1.07); }
        .menu { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .m-item { border: 1px solid #272727; border-left: 3px solid #f2c14e; padding: 22px 24px; border-radius: 3px; background: #101010; }
        .m-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
        .m-item h3 { font-size: 21px; margin-bottom: 4px; letter-spacing: 0.5px; }
        .m-item .price { color: #f2c14e; font-family: -apple-system, system-ui, sans-serif; font-size: 15px; font-weight: 600; white-space: nowrap; }
        .m-origin { color: #908e86; font-family: -apple-system, system-ui, sans-serif; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px; }
        .m-item p { color: #a8a69e; font-size: 16px; }
        .m-notes { color: #f2c14e !important; font-family: -apple-system, system-ui, sans-serif; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; margin-top: 10px; }
        .about { display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: center; }
        .about h2 { text-align: left; }
        .about h2::after { margin-left: 0; }
        .about-text p { margin-bottom: 16px; font-size: 18px; color: #e4e1d9; }
        .about-img img { width: 100%; border-radius: 6px; display: block; }
        .locations { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; margin-top: 44px; }
        .l-item { background: #101010; border: 1px solid #272727; padding: 24px; border-radius: 4px; }
        .l-item h3 { color: #f2c14e; font-size: 18px; margin-bottom: 6px; font-family: -apple-system, system-ui, sans-serif; }
        .l-item .l-note { color: #908e86; font-size: 13px; font-style: italic; margin-bottom: 8px; }
        .l-item .l-desc { color: #78766f; font-size: 14px; margin-top: 10px; }
        .l-item p { color: #a8a69e; }
        .social { text-align: center; }
        .social-links { display: flex; justify-content: center; gap: 22px; flex-wrap: wrap; margin-top: 30px; font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; }
        .social-links a { border: 1px solid #303030; padding: 12px 26px; border-radius: 2px; transition: .2s; }
        .social-links a:hover { border-color: #f2c14e; color: #f2c14e; }
        .footer { text-align: center; padding: 50px 24px; border-top: 1px solid #1f1f1f; background: #070707; }
        .f-logo { font-family: -apple-system, system-ui, sans-serif; letter-spacing: 3px; color: #f2c14e; font-weight: bold; margin-bottom: 8px; font-size: 16px; }
        .footer p { color: #78766f; font-size: 14px; }
        @media (max-width: 820px) {
          .links { display: none; }
          .hero h1 { font-size: 40px; }
          .hero { background-attachment: scroll; }
          .gallery { grid-template-columns: repeat(2, 1fr); }
          .menu, .locations { grid-template-columns: 1fr; }
          .about { grid-template-columns: 1fr; }
          .section { padding: 60px 20px; }
        }
        @media (max-width: 500px) {
          .gallery { grid-template-columns: 1fr; }
          .nav { padding: 14px 18px; }
          .logo { font-size: 19px; }
        }
      `}</style>
    </div>
  );
}
