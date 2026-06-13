import Head from 'next/head';

const HERO = 'https://sprudge.com/wp-content/uploads/2014/09/San-Francisco-Valencia-ritual-interior.jpg';

const GALLERY = [
  { src: 'https://sprudge.com/wp-content/uploads/2014/09/San-Francisco-Valencia-ritual-brew-bar.jpg', alt: 'Ritual Valencia brew bar' },
  { src: 'https://sprudge.com/wp-content/uploads/2014/09/San-Francisco-Valencia-ritual-in-service-740x507.jpg', alt: 'Baristas in service behind the bar' },
  { src: 'https://sprudge.com/wp-content/uploads/2014/09/San-Francisco-Valencia-ritual-garde.jpg', alt: 'The cafe garden back wall' },
  { src: 'https://sprudge.com/wp-content/uploads/2014/09/San-Francisco-Valencia-ritual-succulent.jpg', alt: 'Succulents throughout the cafe' },
  { src: 'https://sprudge.com/wp-content/uploads/2014/09/San-Francisco-Valencia-ritual-interior3.jpg', alt: 'Light wood and white-wall interior' },
  { src: 'https://static.wikia.nocookie.net/coffee/images/1/1c/Ritualfront.jpg/revision/latest?cb=20140313203609', alt: 'Ritual Coffee storefront' },
];

const ROAST_IMG = 'https://static.wikia.nocookie.net/coffee/images/b/b5/Ritual1.jpg/revision/latest?cb=20140313182925';

const MENU = [
  { name: 'Espresso', desc: 'A focused shot pulled on a Synesso Hydra, built on lightly roasted, direct-trade beans.' },
  { name: 'Macchiato', desc: 'Espresso marked with a small amount of steamed milk.' },
  { name: 'Gibraltar', desc: 'Espresso and steamed milk served short in a Gibraltar glass.' },
  { name: 'Cappuccino', desc: 'Equal parts espresso, steamed milk, and a deep layer of microfoam.' },
  { name: 'Latte', desc: 'Espresso with steamed milk and a thin cap of foam.' },
  { name: 'Mocha', desc: 'Espresso, steamed milk, and chocolate.' },
  { name: 'V60 Drip Coffee', desc: 'Single-origin coffee brewed by the cup on the Japanese V60 cone for clean flavor and articulated acidity.' },
  { name: 'Cold Brew', desc: 'Slow-steeped, naturally sweet, and served over ice.' },
];

const LOCATIONS = [
  { name: 'Valencia Cafe (Flagship)', addr: '1026 Valencia St, San Francisco, CA 94110' },
  { name: 'Hayes Valley at Proxy', addr: '432b Octavia St, San Francisco, CA 94102' },
  { name: 'Bayview at Flora Grubb Gardens', addr: '1634 Jerrold Ave, San Francisco, CA 94124' },
  { name: 'Napa at Oxbow Public Market', addr: '610 First St, Napa, CA 94559' },
  { name: 'SFO Harvey Milk Terminal 1', addr: 'San Francisco International Airport, CA' },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ritual Coffee Roasters — San Francisco</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ritual Coffee Roasters — single-origin, direct-trade coffee roasted light in San Francisco since 2005." />
      </Head>

      <nav className="nav">
        <a className="logo" href="#top">RITUAL<span>COFFEE</span></a>
        <div className="links">
          <a href="#gallery">Gallery</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#locations">Locations</a>
        </div>
        <a className="shop" href="https://ritualcoffee.com" target="_blank" rel="noopener noreferrer">Order</a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow">San Francisco &middot; Est. 2005</p>
          <h1>Single-origin coffee,<br />roasted with intention.</h1>
          <p className="sub">Direct-trade beans from Africa and the Americas, roasted light in the Mission to let each lot speak for itself.</p>
          <a className="cta" href="#menu">Explore the Menu</a>
        </div>
      </header>

      <section id="gallery" className="section">
        <h2>Inside the Cafe</h2>
        <div className="gallery">
          {GALLERY.map((g) => (
            <div className="g-item" key={g.src}>
              <img src={g.src} alt={g.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="section alt">
        <h2>The Menu</h2>
        <p className="lead">Espresso pulled on a Synesso Hydra, drip brewed by the cup on a Japanese V60.</p>
        <div className="menu">
          {MENU.map((m) => (
            <div className="m-item" key={m.name}>
              <h3>{m.name}</h3>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section about">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>Founded in 2005 by Eileen Hassi Rinaldi, Ritual Coffee Roasters opened on Valencia Street in the Mission with a then-radical idea: 1,800 square feet devoted to just coffee. It helped define San Francisco&rsquo;s third wave alongside peers like Blue Bottle and Four Barrel.</p>
          <p>Ritual began sourcing directly from coffee farmers in 2006. Today the company reports that more than 95% of the coffee it roasts comes directly from its producer partners, with buyers visiting each farm at least once a season.</p>
          <p>The roasting philosophy leans Scandinavian &mdash; lighter than is common in the US &mdash; to highlight the intrinsic flavor of exceptionally high-quality green coffee.</p>
        </div>
        <div className="about-img">
          <img src={ROAST_IMG} alt="Ritual coffee roasting" loading="lazy" />
        </div>
      </section>

      <section id="locations" className="section alt">
        <h2>Locations</h2>
        <div className="locations">
          {LOCATIONS.map((l) => (
            <div className="l-item" key={l.name}>
              <h3>{l.name}</h3>
              <p>{l.addr}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section social">
        <h2>Follow Ritual</h2>
        <div className="social-links">
          <a href="https://www.instagram.com/ritualcoffee/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/ritualroasters/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://ritualcoffee.com" target="_blank" rel="noopener noreferrer">ritualcoffee.com</a>
        </div>
      </section>

      <footer className="footer">
        <p className="f-logo">RITUAL COFFEE ROASTERS</p>
        <p>San Francisco, California &middot; Roasted with intention since 2005</p>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #0a0a0a;
          color: #f0ebe0;
          font-family: Georgia, 'Times New Roman', serif;
          line-height: 1.6;
        }
        a { color: inherit; text-decoration: none; }
        .nav {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 32px;
          background: rgba(10,10,10,0.88);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(228,0,43,0.25);
        }
        .logo { font-weight: bold; letter-spacing: 2px; font-size: 20px; color: #E4002B; font-family: -apple-system, system-ui, sans-serif; }
        .logo span { color: #f0ebe0; margin-left: 6px; font-weight: 400; }
        .links { display: flex; gap: 28px; font-family: -apple-system, system-ui, sans-serif; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; }
        .links a:hover { color: #E4002B; }
        .shop {
          font-family: -apple-system, system-ui, sans-serif; font-size: 13px;
          text-transform: uppercase; letter-spacing: 1px;
          border: 1px solid #E4002B; color: #E4002B;
          padding: 8px 18px; border-radius: 2px; transition: .2s;
        }
        .shop:hover { background: #E4002B; color: #fff; }
        .hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 0 24px;
          background: url('${HERO}') center/cover no-repeat fixed;
        }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(10,10,10,0.55), rgba(10,10,10,0.8)); }
        .hero-inner { position: relative; max-width: 800px; }
        .eyebrow { font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 4px; font-size: 13px; color: #E4002B; margin-bottom: 18px; }
        .hero h1 { font-size: 58px; line-height: 1.05; margin-bottom: 22px; }
        .hero .sub { font-size: 19px; color: #cfc9bd; max-width: 600px; margin: 0 auto 32px; }
        .cta {
          display: inline-block; background: #E4002B; color: #fff;
          font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase;
          letter-spacing: 1.5px; font-size: 14px; padding: 15px 38px; border-radius: 2px; transition: .2s;
        }
        .cta:hover { background: #b80023; }
        .section { padding: 90px 32px; max-width: 1200px; margin: 0 auto; }
        .section.alt { background: #111; max-width: none; }
        .section.alt > * { max-width: 1200px; margin-left: auto; margin-right: auto; }
        .section h2 { font-size: 40px; text-align: center; margin-bottom: 14px; }
        .section h2::after { content: ''; display: block; width: 56px; height: 3px; background: #E4002B; margin: 16px auto 0; }
        .lead, .section .lead { text-align: center; color: #b6b0a4; font-style: italic; margin-bottom: 44px; }
        .gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 44px; }
        .g-item { overflow: hidden; border-radius: 4px; aspect-ratio: 4/3; }
        .g-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; display: block; }
        .g-item:hover img { transform: scale(1.07); }
        .menu { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .m-item { border: 1px solid #2a2a2a; border-left: 3px solid #E4002B; padding: 22px 24px; border-radius: 3px; background: #0d0d0d; }
        .m-item h3 { font-size: 22px; margin-bottom: 6px; }
        .m-item p { color: #b6b0a4; font-size: 16px; }
        .about { display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: center; }
        .about h2 { text-align: left; }
        .about h2::after { margin-left: 0; }
        .about-text p { margin-bottom: 16px; font-size: 18px; color: #d8d2c6; }
        .about-img img { width: 100%; border-radius: 6px; display: block; }
        .locations { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 44px; }
        .l-item { background: #0d0d0d; border: 1px solid #2a2a2a; padding: 24px; border-radius: 4px; }
        .l-item h3 { color: #E4002B; font-size: 19px; margin-bottom: 8px; font-family: -apple-system, system-ui, sans-serif; }
        .l-item p { color: #b6b0a4; }
        .social { text-align: center; }
        .social-links { display: flex; justify-content: center; gap: 22px; flex-wrap: wrap; margin-top: 30px; font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; }
        .social-links a { border: 1px solid #333; padding: 12px 26px; border-radius: 2px; transition: .2s; }
        .social-links a:hover { border-color: #E4002B; color: #E4002B; }
        .footer { text-align: center; padding: 50px 24px; border-top: 1px solid #1c1c1c; background: #080808; }
        .f-logo { font-family: -apple-system, system-ui, sans-serif; letter-spacing: 3px; color: #E4002B; font-weight: bold; margin-bottom: 8px; }
        .footer p { color: #8a8579; font-size: 14px; }
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
        }
      `}</style>
    </div>
  );
}
