import Head from 'next/head';

const HERO = 'https://www.tandemcoffee.com/cdn/shop/files/GRybus-LittleT-LR-541-2091.jpg?v=1723841592&width=1499';

const GALLERY = [
  { src: 'https://www.tandemcoffee.com/cdn/shop/files/GRybus-Tandem-LowRes--41-4687_5e86c964-92bc-4351-807a-ccdbcf03698c.jpg?v=1723841921&width=1500', alt: 'The original 1930s brick Café + Roastery on Anderson St in East Bayside, Portland, with a white tandem-bicycle sculpture out front' },
  { src: 'https://www.tandemcoffee.com/cdn/shop/files/GRybus-LittleT-LR-407-1143_6f9ba612-5c80-460f-805b-5deee1678fa5.jpg?v=1723841649&width=1499', alt: 'Baristas serving guests at the counter beneath exposed brick and timber beams at Tandem Coffee in Portland, Maine' },
  { src: 'https://www.tandemcoffee.com/cdn/shop/files/GRybus-LittleT-LR-86-3186.jpg?v=1723841667&width=1499', alt: 'Roasting green coffee on the production floor beside stacked import sacks and a geometric mural' },
  { src: 'https://www.tandemcoffee.com/cdn/shop/files/GRybus-Tandem-HighRes--1215-8863.jpg?v=1613643036&width=2000', alt: 'A tray of freshly baked, glazed cinnamon rolls from Tandem Coffee + Bakery' },
  { src: 'https://www.tandemcoffee.com/cdn/shop/files/GRybus-Tandem-LowRes--1579-2_0b20d64c-9195-40f7-a487-672bc50805b9.jpg?v=1723842025&width=1500', alt: 'A latte with leaf rosetta art on a marble counter beside a Spread Joy cup' },
  { src: 'https://www.tandemcoffee.com/cdn/shop/files/GRybus-Tandem-LowRes--1238-8946_8f55439e-4351-4e4a-9876-11dace46aab0.jpg?v=1723841520&width=1500', alt: 'A spread of pies, cookies, brownies and pastries from the West End bakery' },
];

const ABOUT_IMG = 'https://www.tandemcoffee.com/cdn/shop/files/GRybus-Tandem-LG-258-0057-revised-min_aa0a8a45-3828-404a-927a-b6eb4dd80eeb.jpg?v=1723841900&width=2400';

const MENU = [
  { name: 'Casimiro Garcia', origin: 'Pluma Oaxaca, Mexico', desc: 'Grown at El Aguacate in the mountains of Oaxaca. A sweet, comforting cup of cherry cordial, macadamia and orange bitters.', price: 'From $18' },
  { name: 'Chelbesa', origin: 'Gedeb, Ethiopia', desc: 'A bright, tea-like washed Ethiopian sourced through SNAP Coffee. We taste grapefruit, melon and delicate white tea.', price: 'From $26' },
  { name: 'Fausto Romo Honey', origin: 'Pichincha, Ecuador', desc: 'A honey-processed Sidra from an accomplished Ecuadorian producer. Creamy raspberry sorbet, dried apple and resinous pink-peppercorn florality.', price: 'From $26' },
  { name: 'Uriel Cardona', origin: 'Huila, Colombia', desc: 'A Chiroso varietal from Tres Meses de Vida. Juicy and clean, with papaya, lime and sweet panela.', price: 'From $28' },
  { name: 'Armando Hurtado', origin: 'Cajamarca, Peru', desc: 'A vibrant, perfumed Peruvian washed coffee bursting with star fruit, kiwi and orange blossom.', price: 'From $30' },
  { name: 'Faver Ninco Pink Bourbon', origin: 'Central Huila, Colombia', desc: 'Pink Bourbon from Finca Costa Rica. A crisp profile with mild dark-fruit acidity, sweet mango and coconut, and a warming, malty finish.', price: 'Seasonal' },
];

const LOCATIONS = [
  { name: 'Café + Roastery', addr: '122 Anderson St, Portland, ME 04101', note: 'Mon–Sat 7AM–1PM · East Bayside', desc: 'Our roastery and original cafe share one small campus in a 1930s brick building. The roasting space is open and transparent — a simple menu of seasonal espresso, pour-overs, tea, pastry, retail beans and a curated rack of vinyl, designed to feel like stepping into a home.' },
  { name: 'Coffee + Bakery', addr: '742 Congress St, Portland, ME 04102', note: 'Open 7 Days 8AM–1PM · West End', desc: 'Opened in 2014 in Portland’s West End, our bakery is led by James Beard–nominated baker Briana Holt. Biscuits, pies and pastries baked fresh daily alongside Tandem coffee. Same-day online pickup available 7:45–10:15AM.' },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tandem Coffee Roasters &mdash; Portland, Maine</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tandem Coffee Roasters &mdash; a wholesale coffee roaster, cafe and bakery in Portland, Maine. Founded in 2012 by Will and Kathleen Pratt. Spread Joy." />
      </Head>

      <nav className="nav">
        <a className="logo" href="#top">Tandem</a>
        <div className="links">
          <a href="#gallery">Caf&eacute;s</a>
          <a href="#menu">Coffee</a>
          <a href="#about">Our Story</a>
          <a href="#locations">Locations</a>
        </div>
        <a className="shop" href="https://www.tandemcoffee.com/collections/coffees" target="_blank" rel="noopener noreferrer">Shop</a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow">Portland, Maine &middot; Roaster, Caf&eacute; &amp; Bakery &middot; Since 2012</p>
          <h1>Spread Joy,<br />one cup at a time.</h1>
          <p className="sub">Tandem is a wholesale roaster, cafe and bakery in Portland, Maine &mdash; a rotating list of single-origin coffees and seasonal blends, sourced at origin in partnership with small growers.</p>
          <a className="cta" href="#menu">Explore Our Coffee</a>
        </div>
      </header>

      <section id="gallery" className="section">
        <h2>Two Caf&eacute;s, One Roastery</h2>
        <p className="lead">From a brick roastery in East Bayside to a James Beard&ndash;nominated bakery in the West End &mdash; this is Tandem in Portland, Maine.</p>
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
        <p className="lead">A rotating list of single-origin coffees, roasted in Portland and sourced in partnership with small growers and specialty importers.</p>
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
          <p>In 2012, after working in coffee in Boston, Martha&rsquo;s Vineyard, San Francisco and New York, Will and Kathleen Pratt found a home for Tandem Coffee Roasters in Portland, Maine.</p>
          <p>They built a cozy cafe and roastery in a 1930s brick building near their home in the East Bayside neighborhood. In 2014, they opened a second location in the West End: Tandem Coffee + Bakery, with longtime friend and James Beard&ndash;nominated baker Briana Holt.</p>
          <p>Tandem offers a rotating list of single-origin coffees and seasonal blends. We feel passionate about sourcing at origin and working in partnership with small growers and specialty importers &mdash; and about spreading a little joy along the way.</p>
        </div>
        <div className="about-img">
          <img src={ABOUT_IMG} alt="Will and Kathleen Pratt, founders of Tandem Coffee Roasters in Portland, Maine" loading="lazy" />
        </div>
      </section>

      <section id="locations" className="section alt">
        <h2>Locations</h2>
        <p className="lead">Two cafes in Portland, Maine &mdash; open seven days between them.</p>
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
        <h2>Follow Tandem</h2>
        <div className="social-links">
          <a href="https://www.instagram.com/tandemcoffeeroasters/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.youtube.com/@tandemcoffeeroasters" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://open.spotify.com/user/tandemcoffee" target="_blank" rel="noopener noreferrer">Spotify</a>
          <a href="https://www.tandemcoffee.com" target="_blank" rel="noopener noreferrer">tandemcoffee.com</a>
        </div>
      </section>

      <footer className="footer">
        <p className="f-logo">TANDEM COFFEE ROASTERS</p>
        <p>Portland, Maine &middot; Roaster, caf&eacute; &amp; bakery &middot; Spreading joy since 2012</p>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #0e0d0c;
          color: #f4efe8;
          font-family: Georgia, 'Times New Roman', serif;
          line-height: 1.6;
        }
        a { color: inherit; text-decoration: none; }
        .nav {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 32px;
          background: rgba(14,13,12,0.9);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(239,93,58,0.32);
        }
        .logo { font-weight: bold; letter-spacing: 1px; font-size: 24px; color: #EF5D3A; font-family: Georgia, serif; font-style: italic; }
        .links { display: flex; gap: 28px; font-family: -apple-system, system-ui, sans-serif; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; }
        .links a:hover { color: #EF5D3A; }
        .shop {
          font-family: -apple-system, system-ui, sans-serif; font-size: 13px;
          text-transform: uppercase; letter-spacing: 1px;
          border: 1px solid #EF5D3A; color: #EF5D3A;
          padding: 8px 18px; border-radius: 2px; transition: .2s;
        }
        .shop:hover { background: #EF5D3A; color: #0e0d0c; }
        .hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 0 24px;
          background: url('${HERO}') center/cover no-repeat fixed;
        }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(14,13,12,0.45), rgba(14,13,12,0.9)); }
        .hero-inner { position: relative; max-width: 820px; }
        .eyebrow { font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 4px; font-size: 13px; color: #EF5D3A; margin-bottom: 18px; }
        .hero h1 { font-size: 58px; line-height: 1.05; margin-bottom: 22px; }
        .hero .sub { font-size: 19px; color: #e7ddce; max-width: 640px; margin: 0 auto 32px; }
        .cta {
          display: inline-block; background: #EF5D3A; color: #2a1108;
          font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase;
          letter-spacing: 1.5px; font-size: 14px; padding: 15px 38px; border-radius: 2px; transition: .2s; font-weight: 600;
        }
        .cta:hover { background: #d84624; }
        .section { padding: 90px 32px; max-width: 1200px; margin: 0 auto; }
        .section.alt { background: #15110f; max-width: none; }
        .section.alt > * { max-width: 1200px; margin-left: auto; margin-right: auto; }
        .section h2 { font-size: 40px; text-align: center; margin-bottom: 14px; }
        .section h2::after { content: ''; display: block; width: 56px; height: 3px; background: #EF5D3A; margin: 16px auto 0; }
        .lead, .section .lead { text-align: center; color: #b9a892; font-style: italic; margin-bottom: 44px; }
        .gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 44px; }
        .g-item { overflow: hidden; border-radius: 4px; aspect-ratio: 4/3; }
        .g-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; display: block; }
        .g-item:hover img { transform: scale(1.07); }
        .menu { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .m-item { border: 1px solid #2b2017; border-left: 3px solid #EF5D3A; padding: 22px 24px; border-radius: 3px; background: #12100d; }
        .m-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
        .m-item h3 { font-size: 21px; margin-bottom: 4px; letter-spacing: 0.5px; }
        .m-item .price { color: #EF5D3A; font-family: -apple-system, system-ui, sans-serif; font-size: 15px; font-weight: 600; white-space: nowrap; }
        .m-origin { color: #b07a52; font-family: -apple-system, system-ui, sans-serif; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px; }
        .m-item p { color: #b9a892; font-size: 16px; }
        .about { display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: center; }
        .about h2 { text-align: left; }
        .about h2::after { margin-left: 0; }
        .about-text p { margin-bottom: 16px; font-size: 18px; color: #e7ddce; }
        .about-img img { width: 100%; border-radius: 6px; display: block; }
        .locations { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; margin-top: 44px; }
        .l-item { background: #12100d; border: 1px solid #2b2017; padding: 24px; border-radius: 4px; }
        .l-item h3 { color: #EF5D3A; font-size: 18px; margin-bottom: 6px; font-family: -apple-system, system-ui, sans-serif; }
        .l-item .l-note { color: #b07a52; font-size: 13px; font-style: italic; margin-bottom: 8px; }
        .l-item .l-desc { color: #93826a; font-size: 14px; margin-top: 10px; }
        .l-item p { color: #b9a892; }
        .social { text-align: center; }
        .social-links { display: flex; justify-content: center; gap: 22px; flex-wrap: wrap; margin-top: 30px; font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; }
        .social-links a { border: 1px solid #34281c; padding: 12px 26px; border-radius: 2px; transition: .2s; }
        .social-links a:hover { border-color: #EF5D3A; color: #EF5D3A; }
        .footer { text-align: center; padding: 50px 24px; border-top: 1px solid #231a11; background: #0a0908; }
        .f-logo { font-family: Georgia, serif; font-style: italic; letter-spacing: 1px; color: #EF5D3A; font-weight: bold; margin-bottom: 8px; font-size: 18px; }
        .footer p { color: #8c7c66; font-size: 14px; }
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
