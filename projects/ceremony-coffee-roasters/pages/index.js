import Head from 'next/head';

const HERO = 'https://ceremonycoffee.com/cdn/shop/files/featureimg.jpg?v=1715860174&width=2000';

const GALLERY = [
  { src: 'https://ceremonycoffee.com/cdn/shop/files/detailimg1.jpg?v=1715920121&width=1100', alt: 'The Ceremony Coffee cafe inside Cross Street Market in Federal Hill, Baltimore' },
  { src: 'https://ceremonycoffee.com/cdn/shop/files/imgdetail2.jpg?v=1715920877&width=1100', alt: 'The Ceremony Coffee cafe in the Mt. Vernon neighborhood of Baltimore' },
  { src: 'https://ceremonycoffee.com/cdn/shop/files/location3.jpg?v=1716027621&width=1100', alt: 'The Ceremony Coffee cafe at Harbor Point in Baltimore' },
  { src: 'https://ceremonycoffee.com/cdn/shop/files/rivaimg1.jpg?v=1716179303&width=1100', alt: 'The Ceremony Coffee cafe on Forest Drive in Riva, Annapolis' },
  { src: 'https://ceremonycoffee.com/cdn/shop/files/img6.jpg?v=1715921413&width=1100', alt: 'The Ceremony Coffee Roastery and flagship cafe on Russell Street in Annapolis' },
  { src: 'https://ceremonycoffee.com/cdn/shop/files/aboutimg5.jpg?v=1715933528&width=1100', alt: 'A Ceremony barista brewing pour-over coffee on a Modbar, seen from above' },
];

const ABOUT_IMG = 'https://ceremonycoffee.com/cdn/shop/files/aboutimgcolumn2.jpg?v=1715931955&width=1400';

const MENU = [
  { name: 'Thesis', origin: 'House Blend · Colombia + Peru · Light-Medium Roast', desc: 'Our most popular filter-brewed blend, updated seasonally with fresh-crop coffees for a classic, sugar-browning-forward cup that keeps us coming back for more.', notes: 'Chocolate Chip Cookies, Brown Sugar, Sweet', price: '$21.00' },
  { name: 'Mass Appeal', origin: 'Blend · Mexico + Colombia · Medium Roast', desc: 'Big in body and extremely sweet, Mass Appeal is a workhorse for every brew method — a rich espresso, a full-bodied filter, or cold brew, with plentiful dark chocolate and sweet almond.', notes: 'Milk Chocolate, Sugar Cookie, Creamy', price: '$21.50' },
  { name: 'Destroyer', origin: 'Espresso Blend · Colombia + Washed Ethiopia · Medium Roast', desc: 'A bright, balanced blend pairing a vibrant African coffee with a thoughtfully-sourced coffee from the Americas — a sugary core playing off vibrant citrus high notes.', notes: 'Creamsicle, Peach, Bright', price: '$21.50' },
  { name: 'Ethiopia Mustefa Abakeno', origin: 'Single Origin · Limu, Ethiopia · Light Roast', desc: 'A classic washed Ethiopian grown by Mustefa Abakeno and 36 smallholder producers at up to 2,100 MASL — clean, delicate and layered with soft tropical fruit.', notes: 'Citrus, Tropical, Black Tea', price: '$23.00' },
  { name: 'Synthesis', origin: 'Blend · Colombia · Medium Roast', desc: 'A smooth, dessert-forward Colombian blend built for easy, everyday drinking with plenty of sweetness and body.', notes: 'Dried Cherry, Caramel, Smooth', price: '$21.00' },
  { name: 'Antithesis', origin: 'Single Origin · Brazil · Medium Roast', desc: 'A rich, creamy Brazilian with deep, comforting flavors — a low-acidity cup that shines with milk or on its own.', notes: 'Dark Chocolate, Molasses, Creamy', price: '$21.00' },
];

const LOCATIONS = [
  { name: 'The Roastery', addr: '90 Russell St., Suite 500, Annapolis, MD 21401', note: 'Annapolis · Roastery & Flagship Café', desc: 'Our production roastery and flagship cafe, where every Ceremony coffee is roasted and dialed in.' },
  { name: 'Riva', addr: '2329 Forest Drive, Annapolis, MD 21401', note: 'Annapolis', desc: 'A bright, welcoming neighborhood cafe on Forest Drive serving the full Ceremony menu.' },
  { name: 'Bethesda Crescent', addr: '7475 Wisconsin Avenue, Bethesda, MD 20814', note: 'Bethesda', desc: 'A busy, design-forward cafe in the heart of downtown Bethesda.' },
  { name: 'Cross Street Market', addr: '1065 S. Charles St., Baltimore, MD 21230', note: 'Baltimore · Federal Hill', desc: 'A lively counter inside the historic Cross Street Market in Federal Hill.' },
  { name: 'Mt. Vernon', addr: '520 Park Avenue, Baltimore, MD 21201', note: 'Baltimore · Mt. Vernon', desc: 'A refined cafe in Baltimore’s cultural Mt. Vernon neighborhood.' },
  { name: 'Harbor Point', addr: '1312 Point St., Baltimore, MD 21231', note: 'Baltimore · Harbor Point', desc: 'A modern waterfront cafe serving the Harbor Point community.' },
  { name: 'Baltimore Workshop', addr: '520 Park Avenue, Baltimore, MD 21201', note: 'Baltimore · Education & Events', desc: 'Our education space for workshops, trainings and coffee events in Mt. Vernon.' },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ceremony Coffee Roasters &mdash; Annapolis, Maryland</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ceremony Coffee Roasters &mdash; an independent specialty coffee roaster and family of cafes across Maryland. Founded in Annapolis in 2002. We believe coffee should be something special: 85+ point coffees, sourced smarter and roasted better." />
      </Head>

      <nav className="nav">
        <a className="logo" href="#top">CEREMONY</a>
        <div className="links">
          <a href="#gallery">Caf&eacute;s</a>
          <a href="#menu">Coffee</a>
          <a href="#about">Our Story</a>
          <a href="#locations">Locations</a>
        </div>
        <a className="shop" href="https://ceremonycoffee.com/collections/coffee" target="_blank" rel="noopener noreferrer">Shop</a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow">Annapolis, Maryland &middot; Roaster &amp; Caf&eacute; &middot; Since 2002</p>
          <h1>Coffee should be<br />something special.</h1>
          <p className="sub">Ceremony Coffee Roasters is an independent specialty roaster and a family of cafes across Maryland &mdash; sourcing smarter, roasting better, and delighting more people, one cup at a time.</p>
          <a className="cta" href="#menu">Explore Our Coffee</a>
        </div>
      </header>

      <section id="gallery" className="section">
        <h2>Seven Caf&eacute;s, One Roastery</h2>
        <p className="lead">From our Annapolis roastery to Bethesda and across Baltimore &mdash; thoughtfully designed spaces built for great coffee, food and connection.</p>
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
        <p className="lead">Super-fresh, super-clean, 85+ point coffees &mdash; a rotating selection of single origins and signature blends, roasted in Annapolis.</p>
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
          <p>Ceremony was born in Annapolis in 2002 out of a passion for sharing amazing coffee &mdash; a passion that continues to drive us today. We&rsquo;ve always believed coffee should be something special, and that simple thought moves us every day to source smarter, roast better, and delight more people again and again.</p>
          <p>With producers and importing partners all over the world, we source super-fresh, super-clean, 85+ point coffees with loads of sweetness and character. Then our roasting team gets to work developing roast profiles and blend ratios that highlight the best of every coffee.</p>
          <p>Our relationships are the soul of our work. Whether you&rsquo;re a farm we love, our newest barista, or a guest at the bar, we want to leave you happier than we found you &mdash; because how coffee brings people together is what makes it endlessly special.</p>
        </div>
        <div className="about-img">
          <img src={ABOUT_IMG} alt="Ceremony Coffee&rsquo;s roasting machines in action at the Annapolis roastery" loading="lazy" />
        </div>
      </section>

      <section id="locations" className="section alt">
        <h2>Locations</h2>
        <p className="lead">Serving Annapolis, Bethesda and Baltimore &mdash; visit a Ceremony cafe near you for great coffee, food and workshops.</p>
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
        <h2>Follow Ceremony</h2>
        <div className="social-links">
          <a href="https://www.instagram.com/ceremonycoffee/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/CeremonyCoffee/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com/ceremonycoffee" target="_blank" rel="noopener noreferrer">X / Twitter</a>
          <a href="https://ceremonycoffee.com" target="_blank" rel="noopener noreferrer">ceremonycoffee.com</a>
        </div>
      </section>

      <footer className="footer">
        <p className="f-logo">CEREMONY COFFEE ROASTERS</p>
        <p>Annapolis, Maryland &middot; Roaster &amp; caf&eacute; &middot; Coffee should be something special since 2002</p>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #0c0a08;
          color: #f2ece3;
          font-family: Georgia, 'Times New Roman', serif;
          line-height: 1.6;
        }
        a { color: inherit; text-decoration: none; }
        .nav {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 32px;
          background: rgba(12,10,8,0.9);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(201,154,63,0.32);
        }
        .logo { font-weight: bold; letter-spacing: 3px; font-size: 24px; color: #c99a3f; font-family: -apple-system, system-ui, sans-serif; }
        .links { display: flex; gap: 28px; font-family: -apple-system, system-ui, sans-serif; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; }
        .links a:hover { color: #c99a3f; }
        .shop {
          font-family: -apple-system, system-ui, sans-serif; font-size: 13px;
          text-transform: uppercase; letter-spacing: 1px;
          border: 1px solid #c99a3f; color: #c99a3f;
          padding: 8px 18px; border-radius: 2px; transition: .2s;
        }
        .shop:hover { background: #c99a3f; color: #14100a; }
        .hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 0 24px;
          background: url('${HERO}') center/cover no-repeat fixed;
        }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(10,8,6,0.5), rgba(10,8,6,0.92)); }
        .hero-inner { position: relative; max-width: 820px; }
        .eyebrow { font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 4px; font-size: 13px; color: #c99a3f; margin-bottom: 18px; }
        .hero h1 { font-size: 58px; line-height: 1.05; margin-bottom: 22px; }
        .hero .sub { font-size: 19px; color: #e2d9cc; max-width: 640px; margin: 0 auto 32px; }
        .cta {
          display: inline-block; background: #c99a3f; color: #14100a;
          font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase;
          letter-spacing: 1.5px; font-size: 14px; padding: 15px 38px; border-radius: 2px; transition: .2s; font-weight: 600;
        }
        .cta:hover { background: #b3872f; }
        .section { padding: 90px 32px; max-width: 1200px; margin: 0 auto; }
        .section.alt { background: #13100b; max-width: none; }
        .section.alt > * { max-width: 1200px; margin-left: auto; margin-right: auto; }
        .section h2 { font-size: 40px; text-align: center; margin-bottom: 14px; }
        .section h2::after { content: ''; display: block; width: 56px; height: 3px; background: #c99a3f; margin: 16px auto 0; }
        .lead, .section .lead { text-align: center; color: #a8998a; font-style: italic; margin-bottom: 44px; }
        .gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 44px; }
        .g-item { overflow: hidden; border-radius: 4px; aspect-ratio: 4/3; }
        .g-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; display: block; }
        .g-item:hover img { transform: scale(1.07); }
        .menu { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .m-item { border: 1px solid #2a2118; border-left: 3px solid #c99a3f; padding: 22px 24px; border-radius: 3px; background: #100d09; }
        .m-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
        .m-item h3 { font-size: 21px; margin-bottom: 4px; letter-spacing: 0.5px; }
        .m-item .price { color: #c99a3f; font-family: -apple-system, system-ui, sans-serif; font-size: 15px; font-weight: 600; white-space: nowrap; }
        .m-origin { color: #b08a4a; font-family: -apple-system, system-ui, sans-serif; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px; }
        .m-item p { color: #a8998a; font-size: 16px; }
        .m-item .m-notes { color: #cbb48a; font-family: -apple-system, system-ui, sans-serif; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; margin-top: 10px; }
        .about { display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: center; }
        .about h2 { text-align: left; }
        .about h2::after { margin-left: 0; }
        .about-text p { margin-bottom: 16px; font-size: 18px; color: #e2d9cc; }
        .about-img img { width: 100%; border-radius: 6px; display: block; }
        .locations { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 44px; }
        .l-item { background: #100d09; border: 1px solid #2a2118; padding: 24px; border-radius: 4px; }
        .l-item h3 { color: #c99a3f; font-size: 18px; margin-bottom: 6px; font-family: -apple-system, system-ui, sans-serif; }
        .l-item .l-note { color: #b08a4a; font-size: 13px; font-style: italic; margin-bottom: 8px; }
        .l-item .l-desc { color: #8a7d6d; font-size: 14px; margin-top: 10px; }
        .l-item p { color: #a8998a; }
        .social { text-align: center; }
        .social-links { display: flex; justify-content: center; gap: 22px; flex-wrap: wrap; margin-top: 30px; font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; }
        .social-links a { border: 1px solid #33281c; padding: 12px 26px; border-radius: 2px; transition: .2s; }
        .social-links a:hover { border-color: #c99a3f; color: #c99a3f; }
        .footer { text-align: center; padding: 50px 24px; border-top: 1px solid #221b12; background: #080604; }
        .f-logo { font-family: -apple-system, system-ui, sans-serif; letter-spacing: 2px; color: #c99a3f; font-weight: bold; margin-bottom: 8px; font-size: 18px; }
        .footer p { color: #857a6b; font-size: 14px; }
        @media (max-width: 900px) {
          .locations { grid-template-columns: repeat(2, 1fr); }
        }
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
