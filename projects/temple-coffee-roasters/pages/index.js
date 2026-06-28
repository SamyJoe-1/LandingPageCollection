import Head from 'next/head';

const HERO = 'https://templecoffee.com/cdn/shop/files/Temple_K_Street.jpg?crop=center&height=1988&v=1734714668&width=3800';

const GALLERY = [
  { src: 'https://templecoffee.com/cdn/shop/files/Temple-Kstreet-interior.jpg?crop=center&height=1158&v=1636039494&width=1447', alt: 'The light-filled interior of Temple Coffee on K Street in Midtown Sacramento, with communal tables and warm wood' },
  { src: 'https://templecoffee.com/cdn/shop/files/16th-st-cafe_shopify.jpg?crop=center&height=800&v=1613776806&width=1000', alt: 'Inside the 16th Street Temple Coffee cafe in Midtown Sacramento' },
  { src: 'https://templecoffee.com/cdn/shop/files/S-St-cafe_shopify_ea9869bc-d1f5-4262-a67c-0f0a43fd5fd7.jpg?crop=center&height=800&v=1613776796&width=1000', alt: 'The front entry of the S Street Temple Coffee cafe in Midtown Sacramento' },
  { src: 'https://templecoffee.com/cdn/shop/files/H-st-cafe_shopify.jpg?crop=center&height=800&v=1613776806&width=1000', alt: 'Inside the H Street Temple Coffee cafe in East Sacramento' },
  { src: 'https://templecoffee.com/cdn/shop/files/Hazel_cafe_website.jpg?crop=center&height=1520&v=1778773193&width=1900', alt: 'The modern Hazel Avenue Temple Coffee cafe in Fair Oaks, California' },
  { src: 'https://templecoffee.com/cdn/shop/files/9th-St-cafe_shopify.jpg?crop=center&height=800&v=1613776805&width=1000', alt: 'Inside the 9th Street Temple Coffee cafe in Downtown Sacramento' },
];

const ABOUT_IMG = 'https://templecoffee.com/cdn/shop/files/H74A7498.jpg?crop=center&height=2048&v=1768336152&width=1638';

const MENU = [
  { name: "Roaster's Choice Single Origin", origin: 'Coffee Club Exclusive · Natural Process', desc: 'A rotating, subscriber-only single origin chosen by our roasting team. The current release pours hibiscus, coconut cream and grape candy.', price: '$27' },
  { name: 'Single Origin Espresso', origin: 'Brazil Monte Alto · Natural Process', desc: 'A seasonal single-origin espresso roasted for the bar. Sweet and rounded, with creme brulee, dried fig and marzipan.', price: '$28' },
  { name: 'Costa Rica Vara Blanca', origin: 'Vara Blanca, Costa Rica · Natural', desc: 'A vibrant Costa Rican natural sourced through our Farm to Cup model. Cherry jam, pomelo and caramelized sugar.', price: '$28.50' },
  { name: 'Ethiopia Tigist Abyot', origin: 'Ethiopia · Washed', desc: 'A delicate, floral Ethiopian washed coffee. Layers of mango, vanilla blossom and white peach.', price: '$28' },
  { name: 'Capital Cold Brew Blend', origin: 'House Blend', desc: 'Our signature blend built for cold brew and nitro — smooth, full-bodied and endlessly drinkable through a Sacramento summer.', price: '$27' },
  { name: 'Three Pillars Blend', origin: 'Signature Blend', desc: 'Named for the three pillars of our Farm to Cup philosophy — social, economic and environmental sustainability. Balanced and approachable.', price: '$22' },
];

const LOCATIONS = [
  { name: 'K Street', addr: '2200 K Street, Sacramento, CA 95816', note: 'Midtown · Open Daily 6AM–10PM', desc: 'Our flagship Midtown cafe and a daily gathering place in the heart of Sacramento.' },
  { name: 'S Street', addr: '2829 S Street, Sacramento, CA 95816', note: 'Midtown · Open Daily 6AM–10PM', desc: 'A bright corner cafe in Midtown Sacramento serving the full Temple menu.' },
  { name: '16th Street', addr: '1615 16th Street, Sacramento, CA 95814', note: 'Midtown · Open Daily 6AM–4PM', desc: 'A cozy Midtown spot for espresso, pour-over and a quick pastry.' },
  { name: '9th Street', addr: '1010 9th Street, Sacramento, CA 95811', note: 'Downtown · Open Daily 6AM–6PM', desc: 'Our Downtown cafe, steps from the Capitol and the K Street corridor.' },
  { name: 'H Street', addr: '4201 H Street, Sacramento, CA 95819', note: 'East Sacramento · Open Daily 6AM–8PM', desc: 'A neighborhood favorite in leafy East Sacramento.' },
  { name: 'Fair Oaks Blvd', addr: '2600 Fair Oaks Blvd, Ste 101, Sacramento, CA 95864', note: 'Arden Arcade · Open Daily 6AM–10PM', desc: 'A spacious cafe serving the Arden Arcade community.' },
  { name: 'Hazel Ave', addr: '4307 Hazel Ave, Fair Oaks, CA 95628', note: 'Fair Oaks · Open Daily 6AM–10PM', desc: 'Our modern Fair Oaks cafe, designed for lingering and good vibes.' },
  { name: 'Davis', addr: '239 G Street, Davis, CA 95616', note: 'Davis · Open Daily 6AM–8PM', desc: 'A college-town cafe in the heart of downtown Davis.' },
  { name: 'Folsom', addr: '2776 E Bidwell St, Ste 500, Folsom, CA 95630', note: 'Folsom · Open Daily 6AM–8PM', desc: 'Our newest cafe, bringing Farm to Cup coffee to Folsom.' },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Temple Coffee Roasters &mdash; Sacramento, California</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Temple Coffee Roasters &mdash; an independent specialty coffee roaster and nine-cafe family in Sacramento, California. Founded in 2005. Farm to Cup, ethically sourced, crafted with care." />
      </Head>

      <nav className="nav">
        <a className="logo" href="#top">TEMPLE</a>
        <div className="links">
          <a href="#gallery">Caf&eacute;s</a>
          <a href="#menu">Coffee</a>
          <a href="#about">Our Story</a>
          <a href="#locations">Locations</a>
        </div>
        <a className="shop" href="https://templecoffee.com/collections/coffee" target="_blank" rel="noopener noreferrer">Shop</a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow">Sacramento, California &middot; Roaster &amp; Caf&eacute; &middot; Since 2005</p>
          <h1>Good vibes,<br />great coffee.</h1>
          <p className="sub">Temple Coffee Roasters is an independent specialty roaster and a family of nine cafes across the Sacramento region &mdash; ethically sourced, Farm to Cup, and crafted with care.</p>
          <a className="cta" href="#menu">Explore Our Coffee</a>
        </div>
      </header>

      <section id="gallery" className="section">
        <h2>Nine Caf&eacute;s, One Roastery</h2>
        <p className="lead">From Midtown Sacramento to Davis, Fair Oaks and Folsom &mdash; a community gathering place inspired by the temples our founder visited abroad.</p>
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
        <p className="lead">A rotating selection of single origins and signature blends, roasted in Sacramento with a custom profile for every coffee.</p>
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
          <p>It began with a simple vision. After returning home from a lengthy stay in Indonesia, Temple founder and barista Sean Kohmescher opened the first Temple Coffee house in 2005, dreaming of a community gathering place much like the temples he visited during his travels.</p>
          <p>His vision was simple: good vibes, great service, and exceptionally well-prepared coffee. More than twenty years later &mdash; nine coffee houses and a roastery later &mdash; it is still this vision that Temple strives to fulfill today.</p>
          <p>Our Farm to Cup sourcing model rests on three pillars of sustainability: social, economic and environmental. We pay well above Fair Trade prices, build lasting relationships with producers, and roast a custom profile for every coffee to reach its full potential.</p>
        </div>
        <div className="about-img">
          <img src={ABOUT_IMG} alt="A Temple Coffee roaster inspecting freshly roasted coffee beans by hand" loading="lazy" />
        </div>
      </section>

      <section id="locations" className="section alt">
        <h2>Locations</h2>
        <p className="lead">Serving Sacramento, Fair Oaks, Davis and Folsom &mdash; nine cafes, open every day.</p>
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
        <h2>Follow Temple</h2>
        <div className="social-links">
          <a href="https://www.instagram.com/templecoffee/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/templecoffee/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://templecoffee.com" target="_blank" rel="noopener noreferrer">templecoffee.com</a>
        </div>
      </section>

      <footer className="footer">
        <p className="f-logo">TEMPLE COFFEE ROASTERS</p>
        <p>Sacramento, California &middot; Roaster &amp; caf&eacute; &middot; Farm to Cup since 2005</p>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #0b0f0e;
          color: #eef4f2;
          font-family: Georgia, 'Times New Roman', serif;
          line-height: 1.6;
        }
        a { color: inherit; text-decoration: none; }
        .nav {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 32px;
          background: rgba(11,15,14,0.9);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(26,178,166,0.32);
        }
        .logo { font-weight: bold; letter-spacing: 3px; font-size: 24px; color: #1ab2a6; font-family: -apple-system, system-ui, sans-serif; }
        .links { display: flex; gap: 28px; font-family: -apple-system, system-ui, sans-serif; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; }
        .links a:hover { color: #1ab2a6; }
        .shop {
          font-family: -apple-system, system-ui, sans-serif; font-size: 13px;
          text-transform: uppercase; letter-spacing: 1px;
          border: 1px solid #1ab2a6; color: #1ab2a6;
          padding: 8px 18px; border-radius: 2px; transition: .2s;
        }
        .shop:hover { background: #1ab2a6; color: #06100e; }
        .hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 0 24px;
          background: url('${HERO}') center/cover no-repeat fixed;
        }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(7,11,10,0.5), rgba(7,11,10,0.92)); }
        .hero-inner { position: relative; max-width: 820px; }
        .eyebrow { font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 4px; font-size: 13px; color: #1ab2a6; margin-bottom: 18px; }
        .hero h1 { font-size: 58px; line-height: 1.05; margin-bottom: 22px; }
        .hero .sub { font-size: 19px; color: #d6e3df; max-width: 640px; margin: 0 auto 32px; }
        .cta {
          display: inline-block; background: #1ab2a6; color: #06100e;
          font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase;
          letter-spacing: 1.5px; font-size: 14px; padding: 15px 38px; border-radius: 2px; transition: .2s; font-weight: 600;
        }
        .cta:hover { background: #14958b; }
        .section { padding: 90px 32px; max-width: 1200px; margin: 0 auto; }
        .section.alt { background: #0f1614; max-width: none; }
        .section.alt > * { max-width: 1200px; margin-left: auto; margin-right: auto; }
        .section h2 { font-size: 40px; text-align: center; margin-bottom: 14px; }
        .section h2::after { content: ''; display: block; width: 56px; height: 3px; background: #1ab2a6; margin: 16px auto 0; }
        .lead, .section .lead { text-align: center; color: #93a8a2; font-style: italic; margin-bottom: 44px; }
        .gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 44px; }
        .g-item { overflow: hidden; border-radius: 4px; aspect-ratio: 4/3; }
        .g-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; display: block; }
        .g-item:hover img { transform: scale(1.07); }
        .menu { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .m-item { border: 1px solid #1c2b27; border-left: 3px solid #1ab2a6; padding: 22px 24px; border-radius: 3px; background: #0d1413; }
        .m-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
        .m-item h3 { font-size: 21px; margin-bottom: 4px; letter-spacing: 0.5px; }
        .m-item .price { color: #1ab2a6; font-family: -apple-system, system-ui, sans-serif; font-size: 15px; font-weight: 600; white-space: nowrap; }
        .m-origin { color: #5fa79d; font-family: -apple-system, system-ui, sans-serif; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px; }
        .m-item p { color: #93a8a2; font-size: 16px; }
        .about { display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: center; }
        .about h2 { text-align: left; }
        .about h2::after { margin-left: 0; }
        .about-text p { margin-bottom: 16px; font-size: 18px; color: #d6e3df; }
        .about-img img { width: 100%; border-radius: 6px; display: block; }
        .locations { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 44px; }
        .l-item { background: #0d1413; border: 1px solid #1c2b27; padding: 24px; border-radius: 4px; }
        .l-item h3 { color: #1ab2a6; font-size: 18px; margin-bottom: 6px; font-family: -apple-system, system-ui, sans-serif; }
        .l-item .l-note { color: #5fa79d; font-size: 13px; font-style: italic; margin-bottom: 8px; }
        .l-item .l-desc { color: #71857f; font-size: 14px; margin-top: 10px; }
        .l-item p { color: #93a8a2; }
        .social { text-align: center; }
        .social-links { display: flex; justify-content: center; gap: 22px; flex-wrap: wrap; margin-top: 30px; font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; }
        .social-links a { border: 1px solid #243531; padding: 12px 26px; border-radius: 2px; transition: .2s; }
        .social-links a:hover { border-color: #1ab2a6; color: #1ab2a6; }
        .footer { text-align: center; padding: 50px 24px; border-top: 1px solid #16201d; background: #070b0a; }
        .f-logo { font-family: -apple-system, system-ui, sans-serif; letter-spacing: 2px; color: #1ab2a6; font-weight: bold; margin-bottom: 8px; font-size: 18px; }
        .footer p { color: #6b7d78; font-size: 14px; }
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
