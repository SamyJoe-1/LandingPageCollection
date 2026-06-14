import Head from 'next/head';

const HERO = 'https://cdn.shopify.com/s/files/1/2062/4231/files/Round_House_coffee_with_a_view_2.jpg?v=1740693530';

const GALLERY = [
  { src: 'https://cdn.shopify.com/s/files/1/2062/4231/files/Fort_Mason_coffee_and_view.jpg?v=1740692962', alt: 'Coffee with a Golden Gate Bridge view at the Fort Mason cafe' },
  { src: 'https://cdn.shopify.com/s/files/1/2062/4231/files/Round_House_cyclist_and_view.jpg?v=1740693530', alt: 'A cyclist pausing for coffee at the Round House cafe' },
  { src: 'https://cdn.shopify.com/s/files/1/2062/4231/files/Larkspur_interior.jpg?v=1740696185', alt: 'Inside the Larkspur cafe in downtown Larkspur' },
  { src: 'https://cdn.shopify.com/s/files/1/2062/4231/files/Larkspur_pourover_tasting_2.jpg?v=1740692203', alt: 'A pour-over tasting at the Larkspur cafe' },
  { src: 'https://cdn.shopify.com/s/files/1/2062/4231/files/Larkspur_Dez_with_doughnut.jpg?v=1740692203', alt: 'A barista with coffee and a doughnut at Larkspur' },
  { src: 'https://cdn.shopify.com/s/files/1/2062/4231/files/Round_House_coffee_with_a_view.jpg?v=1740693530', alt: 'A cup of Equator coffee overlooking the bay' },
];

const ABOUT_IMG = 'https://cdn.shopify.com/s/files/1/2062/4231/files/Round_House_opening_with_Helen_Brooke_and_Maureen.jpg?v=1740693530';

const MENU = [
  { name: 'Espresso', desc: 'A focused shot pulled from sustainably sourced, expertly roasted beans — the foundation of every Equator drink.' },
  { name: 'Habibi Latte', desc: 'A signature house latte and cafe fan-favorite, crafted by our baristas.' },
  { name: 'Iced Strawberry Matcha Cloud', desc: 'A bright, layered seasonal specialty drink of strawberry and ceremonial matcha over ice.' },
  { name: 'Velvet Mocha Cold Brew', desc: 'Organic cold brew with a smooth, chocolatey finish — part of our ready-to-drink lineup.' },
  { name: 'Pour-Over Drip', desc: 'Single-origin coffee brewed by the cup to highlight the character of each lot we source.' },
  { name: 'Breakfast Frittata Sandwich', desc: 'Our fan-favorite all-day sandwich, served warm alongside the coffee.' },
  { name: 'Boichik Bagels', desc: '“NY Times’ Best Of” bagels from our friends at Boichik Bagels.' },
  { name: 'Avocado Toast', desc: 'A fresh cafe classic plated with locally sourced ingredients.' },
];

const LOCATIONS = [
  { name: 'Downtown Mill Valley', addr: '2 Miller Avenue, Mill Valley, CA 94941' },
  { name: 'Larkspur', addr: '240 Magnolia Avenue, Larkspur, CA 94939' },
  { name: 'Proof Lab', addr: '244 Shoreline Highway, Mill Valley, CA 94941' },
  { name: 'Sausalito', addr: '1201 Bridgeway, Sausalito, CA 94965' },
  { name: 'Round House at the Golden Gate Bridge', addr: 'Golden Gate Bridge Plaza, San Francisco, CA 94129' },
  { name: 'Fort Mason', addr: '2 Marina Blvd, Fort Mason Center Gatehouse, San Francisco, CA 94123' },
  { name: 'SOMA', addr: '222 2nd St, San Francisco, CA 94105' },
  { name: 'Lake Merritt', addr: '175 Bay Place, Oakland, CA 94610' },
  { name: 'Burlingame', addr: '312 Airport Blvd, Burlingame, CA 94010' },
  { name: 'Sonoma', addr: '201 W Napa St, Ste 5, Sonoma, CA 95476' },
  { name: 'Laguna Beach', addr: '160 South Coast Highway, Laguna Beach, CA 92651' },
  { name: 'Jordan Street Roastery', addr: '115 Jordan Street, San Rafael, CA 94901' },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Equator Coffees — Bay Area Specialty Coffee Roaster</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Equator Coffees — a Bay Area-founded, B Corp Certified specialty coffee roaster with twelve neighborhood cafes, roasting sustainably sourced coffee since 1995." />
      </Head>

      <nav className="nav">
        <a className="logo" href="#top">EQUATOR<span>COFFEES</span></a>
        <div className="links">
          <a href="#gallery">Gallery</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#locations">Cafes</a>
        </div>
        <a className="shop" href="https://www.equatorcoffees.com/collections/coffees" target="_blank" rel="noopener noreferrer">Shop</a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow">Bay Area &middot; Est. 1995 &middot; Certified B Corp</p>
          <h1>Drinking good coffee<br />leads to good things.</h1>
          <p className="sub">A Bay Area-founded specialty roaster with twelve neighborhood cafes, serving exceptional, sustainably sourced coffee since a garage in Marin.</p>
          <a className="cta" href="#menu">Explore the Menu</a>
        </div>
      </header>

      <section id="gallery" className="section">
        <h2>Inside Our Cafes</h2>
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
        <p className="lead">Sustainably sourced, expertly roasted coffee — plus an all-day menu of local bites.</p>
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
          <p>In 1995, Helen Russell and Brooke McDonnell — partners in life and business — set out to build a coffee company rooted in quality, sustainability, and social responsibility, roasting their first batches in a garage in Marin County.</p>
          <p>Equator helped pioneer the direct-trade model, became an early adopter of Fair Trade certification in 1999, and in 2011 became the first Certified B Corporation coffee roaster in California. In 2016 it became the first Certified LGBTQ-owned business to win National Small Business of the Year.</p>
          <p>Thirty years on, Equator sources from more than 50 producers and co-ops across 20 countries, runs its own award-winning Finca Sophia farm in Panama, and was named Roaster of the Year by Roast Magazine — but it has never wavered on what matters: exceptional coffee, sourced with care.</p>
        </div>
        <div className="about-img">
          <img src={ABOUT_IMG} alt="Equator founders Helen, Brooke, and first employee Maureen at the Round House opening" loading="lazy" />
        </div>
      </section>

      <section id="locations" className="section alt">
        <h2>Our Cafes</h2>
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
        <h2>Follow Equator</h2>
        <div className="social-links">
          <a href="https://www.instagram.com/equatorcoffees/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.tiktok.com/@equatorcoffees" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href="https://www.youtube.com/channel/UCqRvB21C89TG-JFBOdXM5Bg" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://www.linkedin.com/company/equator-coffees" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.equatorcoffees.com" target="_blank" rel="noopener noreferrer">equatorcoffees.com</a>
        </div>
      </section>

      <footer className="footer">
        <p className="f-logo">EQUATOR COFFEES</p>
        <p>San Rafael, California &middot; Certified B Corp &middot; Drinking good coffee leads to good things since 1995</p>
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
          border-bottom: 1px solid rgba(200,16,46,0.25);
        }
        .logo { font-weight: bold; letter-spacing: 2px; font-size: 20px; color: #C8102E; font-family: -apple-system, system-ui, sans-serif; }
        .logo span { color: #f0ebe0; margin-left: 6px; font-weight: 400; }
        .links { display: flex; gap: 28px; font-family: -apple-system, system-ui, sans-serif; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; }
        .links a:hover { color: #C8102E; }
        .shop {
          font-family: -apple-system, system-ui, sans-serif; font-size: 13px;
          text-transform: uppercase; letter-spacing: 1px;
          border: 1px solid #C8102E; color: #C8102E;
          padding: 8px 18px; border-radius: 2px; transition: .2s;
        }
        .shop:hover { background: #C8102E; color: #fff; }
        .hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 0 24px;
          background: url('${HERO}') center/cover no-repeat fixed;
        }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(10,10,10,0.55), rgba(10,10,10,0.8)); }
        .hero-inner { position: relative; max-width: 800px; }
        .eyebrow { font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 4px; font-size: 13px; color: #C8102E; margin-bottom: 18px; }
        .hero h1 { font-size: 58px; line-height: 1.05; margin-bottom: 22px; }
        .hero .sub { font-size: 19px; color: #cfc9bd; max-width: 620px; margin: 0 auto 32px; }
        .cta {
          display: inline-block; background: #C8102E; color: #fff;
          font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase;
          letter-spacing: 1.5px; font-size: 14px; padding: 15px 38px; border-radius: 2px; transition: .2s;
        }
        .cta:hover { background: #9c0c24; }
        .section { padding: 90px 32px; max-width: 1200px; margin: 0 auto; }
        .section.alt { background: #111; max-width: none; }
        .section.alt > * { max-width: 1200px; margin-left: auto; margin-right: auto; }
        .section h2 { font-size: 40px; text-align: center; margin-bottom: 14px; }
        .section h2::after { content: ''; display: block; width: 56px; height: 3px; background: #C8102E; margin: 16px auto 0; }
        .lead, .section .lead { text-align: center; color: #b6b0a4; font-style: italic; margin-bottom: 44px; }
        .gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 44px; }
        .g-item { overflow: hidden; border-radius: 4px; aspect-ratio: 4/3; }
        .g-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; display: block; }
        .g-item:hover img { transform: scale(1.07); }
        .menu { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .m-item { border: 1px solid #2a2a2a; border-left: 3px solid #C8102E; padding: 22px 24px; border-radius: 3px; background: #0d0d0d; }
        .m-item h3 { font-size: 22px; margin-bottom: 6px; }
        .m-item p { color: #b6b0a4; font-size: 16px; }
        .about { display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: center; }
        .about h2 { text-align: left; }
        .about h2::after { margin-left: 0; }
        .about-text p { margin-bottom: 16px; font-size: 18px; color: #d8d2c6; }
        .about-img img { width: 100%; border-radius: 6px; display: block; }
        .locations { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 44px; }
        .l-item { background: #0d0d0d; border: 1px solid #2a2a2a; padding: 24px; border-radius: 4px; }
        .l-item h3 { color: #C8102E; font-size: 19px; margin-bottom: 8px; font-family: -apple-system, system-ui, sans-serif; }
        .l-item p { color: #b6b0a4; }
        .social { text-align: center; }
        .social-links { display: flex; justify-content: center; gap: 22px; flex-wrap: wrap; margin-top: 30px; font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; }
        .social-links a { border: 1px solid #333; padding: 12px 26px; border-radius: 2px; transition: .2s; }
        .social-links a:hover { border-color: #C8102E; color: #C8102E; }
        .footer { text-align: center; padding: 50px 24px; border-top: 1px solid #1c1c1c; background: #080808; }
        .f-logo { font-family: -apple-system, system-ui, sans-serif; letter-spacing: 3px; color: #C8102E; font-weight: bold; margin-bottom: 8px; }
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
