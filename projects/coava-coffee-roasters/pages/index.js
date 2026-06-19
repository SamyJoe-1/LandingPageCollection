import Head from 'next/head';

const HERO = 'https://transforms.coavacoffee.com/production/uploads/locations_02-3.jpg?w=1200&h=630&q=82&auto=format&fit=crop&dm=1762451401&s=67fa1336851a8c5142d84bd890847dfb';

const GALLERY = [
  { src: 'https://transforms.coavacoffee.com/production/uploads/locations_01.jpg?w=680&h=508&auto=compress%2Cformat&fit=crop&dm=1762451684&s=9c7c5d77ba104f16893658bd9b213897', alt: 'Modern Coava cafe interior with wood paneling, industrial lighting, and a sleek coffee bar' },
  { src: 'https://transforms.coavacoffee.com/production/uploads/Coava-Coffee-Hawthorne-2.png?w=680&h=508&auto=compress%2Cformat&fit=crop&dm=1762450967&s=9511c35e92061f8ca41f958ab7d8b38d', alt: 'Spacious Coava cafe with high ceilings, exposed beams, and a long concrete bar' },
  { src: 'https://transforms.coavacoffee.com/production/uploads/location-test-2.jpg?w=680&h=508&auto=compress%2Cformat&fit=crop&dm=1762451683&s=cf9ca4693600b92041c1b3fdbb9a0019', alt: 'Airy Coava coffee shop with large windows, wood accents, and polished concrete floors' },
  { src: 'https://transforms.coavacoffee.com/production/uploads/Coava-Coffee-Hawthorne-3.png?w=680&h=508&auto=compress%2Cformat&fit=crop&dm=1762368867&s=bc0333ced20c60658a3ff35d4c269ccc', alt: 'Cozy Coava cafe interior with a modern fireplace, lounge seating, and a long communal table' },
  { src: 'https://transforms.coavacoffee.com/production/uploads/RR-Cafe-1.jpg?w=680&h=508&auto=compress%2Cformat&fit=crop&dm=1762451940&s=3ace47450efbdaa0c4a1ae35eaafc258', alt: 'Open Coava cafe with high ceilings, globe lights, and baristas working beneath tall windows' },
  { src: 'https://transforms.coavacoffee.com/production/uploads/RR-Cafe-3.jpg?w=680&h=508&auto=compress%2Cformat&fit=crop&dm=1762451943&s=189c7a719e2bc13f50ccf668f5a4d3b6', alt: 'Barista preparing drinks at the Coava counter with wood accents and a wall-mounted menu' },
];

const ABOUT_IMG = 'https://transforms.coavacoffee.com/production/uploads/ourstory_02-2.jpg?w=680&auto=compress%2Cformat&fit=crop&dm=1762451686&s=3cf6803a1acf5c894d9078245132e4e7';

const MENU = [
  { name: 'S.O. Blend', origin: 'Colombia, Brazil & Ethiopia', desc: 'Dark caramel & chocolate. A rich, dependable everyday blend built for espresso and drip alike.', price: 'From $19.00' },
  { name: 'Pacific Wonderland', origin: 'Central & South America', desc: 'Date, tiramisu, and candied pecan. A sweet, comforting Northwest-inspired house favorite.', price: 'From $19.00' },
  { name: 'Sholi Blend', origin: 'Rwanda', desc: 'Citrus, custard, and toffee. Bright and balanced with a smooth, lingering finish.', price: 'From $23.00' },
  { name: 'Familia Mancia', origin: 'Honduras', desc: 'Amaretto, cherry pie, and vanilla wafer. Layered and dessert-like from a longstanding farm partner.', price: 'From $24.00' },
  { name: 'Amilton Garcia Chimbo', origin: 'Peru', desc: 'Jasmine honeysuckle, orange blossom, and stone fruit. A floral, delicate geisha-lot showpiece.', price: 'From $29.00' },
  { name: 'Meaza', origin: 'Ethiopia', desc: 'Bergamot, black tea, and lemongrass. Fragrant and tea-like with a clean, vivid acidity.', price: 'From $23.00' },
  { name: 'Kilenso', origin: 'Ethiopia', desc: 'Key lime, lavender, and custard. Bright and aromatic with a silky, sweet body.', price: 'From $23.00' },
  { name: 'Decaf ASPROTimaná', origin: 'Colombia', desc: 'Chocolate mousse, butterscotch, and Fuji apple. All of the flavor, none of the caffeine.', price: 'From $24.00' },
];

const LOCATIONS = [
  { name: 'Coava Flagship', addr: '1300 SE Grand Ave, Portland, OR 97214', note: 'Opened 2010 · Daily 7am–6pm', desc: 'The very first Coava cafe in Portland — craft and hospitality in their purest form.' },
  { name: 'Coava Espresso Bar', addr: '2631 SE Hawthorne Blvd, Portland, OR 97214', note: 'Weekdays 6am–6pm · Weekends 7am–6pm', desc: 'A beloved neighborhood espresso bar with a cozy couch and a warm fireplace.' },
  { name: 'Cafe & Roastery', addr: '1015 SE Main St, Portland, OR 97214', note: 'Wed–Sun 8am–3pm', desc: 'The Public Brew Bar inside the roastery — a front-row seat to where the magic happens.' },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coava Coffee Roasters — Specialty Coffee Roasted to Order in Portland</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Coava Coffee Roasters — Portland, Oregon specialty coffee roasted fresh to order. Founded in a North Portland garage in 2008, focused on quality, complexity, and balance in the cup." />
      </Head>

      <nav className="nav">
        <a className="logo" href="#top">COAVA</a>
        <div className="links">
          <a href="#gallery">Cafés</a>
          <a href="#menu">Coffee</a>
          <a href="#about">Our Story</a>
          <a href="#locations">Locations</a>
        </div>
        <a className="shop" href="https://shop.coavacoffee.com/collections/coffee" target="_blank" rel="noopener noreferrer">Shop</a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow">Portland, Oregon &middot; Roasted to Order &middot; Since 2008</p>
          <h1>Specialty coffee,<br />roasted to order.</h1>
          <p className="sub">Quality, complexity, and balance in the cup. Long-term partnerships with exceptional producers and some of the highest-scoring coffees in the world &mdash; roasted fresh and shipped to your door.</p>
          <a className="cta" href="#menu">Explore Our Coffee</a>
        </div>
      </header>

      <section id="gallery" className="section">
        <h2>Our Cafés</h2>
        <p className="lead">Three Portland cafes, from the SE Grand Ave flagship to the Public Brew Bar inside the roastery.</p>
        <div className="gallery">
          {GALLERY.map((g) => (
            <div className="g-item" key={g.src}>
              <img src={g.src} alt={g.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="section alt">
        <h2>Single Origin & Blends</h2>
        <p className="lead">Meticulously roasted, fresh to order. Our single-origin menu changes seasonally for peak quality.</p>
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
          <p>Coava began in Matt Higgins&rsquo; North Portland garage in 2008. The veteran barista and roaster bootstrapped the company by repairing motorcycles, dreaming of roasting coffees that would be exciting for professional baristas and inviting to everyday drinkers alike.</p>
          <p>The name says it all &mdash; <em>coava</em> is unroasted, or &ldquo;green,&rdquo; coffee. Sourcing exceptional green coffee became the bedrock of the entire company. Matt studied agriculture and sustainable business, sought out under-sourced regions, and earned a reputation among producers as respectful, diligent, and honest.</p>
          <p>Those early partnerships endure to this day. As one of the premier roasters in the United States, Coava embodies a relentless focus on quality &mdash; found in the details, from farm visits to roast profiles to every handcrafted drink.</p>
        </div>
        <div className="about-img">
          <img src={ABOUT_IMG} alt="Coava Coffee Roasters in Portland, Oregon" loading="lazy" />
        </div>
      </section>

      <section id="locations" className="section alt">
        <h2>Locations</h2>
        <p className="lead">Open across Portland&rsquo;s east side.</p>
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
        <h2>Follow Coava</h2>
        <div className="social-links">
          <a href="https://www.instagram.com/coavacoffee" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/coavacoffee" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://x.com/coavacoffee" target="_blank" rel="noopener noreferrer">Twitter / X</a>
          <a href="https://coavacoffee.com" target="_blank" rel="noopener noreferrer">coavacoffee.com</a>
        </div>
      </section>

      <footer className="footer">
        <p className="f-logo">COAVA COFFEE ROASTERS</p>
        <p>Portland, Oregon &middot; Specialty coffee roasted fresh to order since 2008</p>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #0b0a08;
          color: #f1ece3;
          font-family: Georgia, 'Times New Roman', serif;
          line-height: 1.6;
        }
        a { color: inherit; text-decoration: none; }
        .nav {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 32px;
          background: rgba(11,10,8,0.9);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(191,161,95,0.32);
        }
        .logo { font-weight: bold; letter-spacing: 5px; font-size: 20px; color: #BFA15F; font-family: -apple-system, system-ui, sans-serif; }
        .links { display: flex; gap: 28px; font-family: -apple-system, system-ui, sans-serif; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; }
        .links a:hover { color: #BFA15F; }
        .shop {
          font-family: -apple-system, system-ui, sans-serif; font-size: 13px;
          text-transform: uppercase; letter-spacing: 1px;
          border: 1px solid #BFA15F; color: #BFA15F;
          padding: 8px 18px; border-radius: 2px; transition: .2s;
        }
        .shop:hover { background: #BFA15F; color: #0b0a08; }
        .hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 0 24px;
          background: url('${HERO}') center/cover no-repeat fixed;
        }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(11,10,8,0.5), rgba(11,10,8,0.88)); }
        .hero-inner { position: relative; max-width: 820px; }
        .eyebrow { font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 4px; font-size: 13px; color: #BFA15F; margin-bottom: 18px; }
        .hero h1 { font-size: 58px; line-height: 1.05; margin-bottom: 22px; }
        .hero .sub { font-size: 19px; color: #d8cfc0; max-width: 640px; margin: 0 auto 32px; }
        .cta {
          display: inline-block; background: #BFA15F; color: #0b0a08;
          font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase;
          letter-spacing: 1.5px; font-size: 14px; padding: 15px 38px; border-radius: 2px; transition: .2s; font-weight: 600;
        }
        .cta:hover { background: #a98c4d; }
        .section { padding: 90px 32px; max-width: 1200px; margin: 0 auto; }
        .section.alt { background: #131009; max-width: none; }
        .section.alt > * { max-width: 1200px; margin-left: auto; margin-right: auto; }
        .section h2 { font-size: 40px; text-align: center; margin-bottom: 14px; }
        .section h2::after { content: ''; display: block; width: 56px; height: 3px; background: #BFA15F; margin: 16px auto 0; }
        .lead, .section .lead { text-align: center; color: #b3a890; font-style: italic; margin-bottom: 44px; }
        .gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 44px; }
        .g-item { overflow: hidden; border-radius: 4px; aspect-ratio: 4/3; }
        .g-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; display: block; }
        .g-item:hover img { transform: scale(1.07); }
        .menu { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .m-item { border: 1px solid #2a2316; border-left: 3px solid #BFA15F; padding: 22px 24px; border-radius: 3px; background: #0e0c08; }
        .m-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
        .m-item h3 { font-size: 21px; margin-bottom: 4px; letter-spacing: 0.5px; }
        .m-item .price { color: #BFA15F; font-family: -apple-system, system-ui, sans-serif; font-size: 15px; font-weight: 600; white-space: nowrap; }
        .m-origin { color: #8f8163; font-family: -apple-system, system-ui, sans-serif; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px; }
        .m-item p { color: #b3a890; font-size: 16px; }
        .about { display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: center; }
        .about h2 { text-align: left; }
        .about h2::after { margin-left: 0; }
        .about-text p { margin-bottom: 16px; font-size: 18px; color: #d8cfc0; }
        .about-img img { width: 100%; border-radius: 6px; display: block; }
        .locations { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 44px; }
        .l-item { background: #0e0c08; border: 1px solid #2a2316; padding: 24px; border-radius: 4px; }
        .l-item h3 { color: #BFA15F; font-size: 18px; margin-bottom: 6px; font-family: -apple-system, system-ui, sans-serif; }
        .l-item .l-note { color: #8f8163; font-size: 13px; font-style: italic; margin-bottom: 8px; }
        .l-item .l-desc { color: #9a8f78; font-size: 14px; margin-top: 10px; }
        .l-item p { color: #b3a890; }
        .social { text-align: center; }
        .social-links { display: flex; justify-content: center; gap: 22px; flex-wrap: wrap; margin-top: 30px; font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; }
        .social-links a { border: 1px solid #34291a; padding: 12px 26px; border-radius: 2px; transition: .2s; }
        .social-links a:hover { border-color: #BFA15F; color: #BFA15F; }
        .footer { text-align: center; padding: 50px 24px; border-top: 1px solid #1c1710; background: #070603; }
        .f-logo { font-family: -apple-system, system-ui, sans-serif; letter-spacing: 3px; color: #BFA15F; font-weight: bold; margin-bottom: 8px; }
        .footer p { color: #897e6a; font-size: 14px; }
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
