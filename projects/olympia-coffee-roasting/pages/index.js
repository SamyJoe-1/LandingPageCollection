import Head from 'next/head';

const HERO = 'https://www.olympiacoffee.com/cdn/shop/files/OlympiaCoffee_KaraMercer307-HDR-Edit.jpg?v=1749350540';

const GALLERY = [
  { src: 'https://www.olympiacoffee.com/cdn/shop/files/DT_03.jpg?v=1721844957', alt: 'Olympia Coffee downtown Olympia cafe and roastery on 4th Avenue with espresso bar' },
  { src: 'https://www.olympiacoffee.com/cdn/shop/files/visit_tacoma5629-www.jpg?v=1613520257', alt: 'Olympia Coffee Proctor Tacoma cafe where guests watch coffee roasting while they sip' },
  { src: 'https://www.olympiacoffee.com/cdn/shop/files/visit-west-seattle-2.jpg?v=1613520256', alt: 'Olympia Coffee West Seattle cafe on California Avenue SW' },
  { src: 'https://www.olympiacoffee.com/cdn/shop/files/US_Bank_Center_11.jpg?v=1705372669', alt: 'Olympia Coffee downtown Seattle cafe in the Cedar Hall atrium with spacious seating' },
  { src: 'https://www.olympiacoffee.com/cdn/shop/files/2M6A8745.jpg?v=1776927930', alt: 'A cool, fresh seasonal espresso drink made with Olympia Coffee' },
  { src: 'https://www.olympiacoffee.com/cdn/shop/files/2M6A8020.jpg?v=1776384954', alt: 'Big Truck espresso pulled on the bar at Olympia Coffee' },
];

const ABOUT_IMG = 'https://www.olympiacoffee.com/cdn/shop/files/Kenya19-271.jpg?v=1759180500';

const MENU = [
  { name: 'Big Truck', origin: 'Signature Espresso Blend', desc: 'Our flagship espresso — balanced, syrupy and sweet. Called "one of our favorite espresso blends" by Sprudge and a Good Food Awards Finalist.', price: 'From $19.50' },
  { name: 'Morning Sun', origin: 'House Blend', desc: 'A comforting, dependable everyday blend built for drip and the morning routine.', price: 'From $19.00' },
  { name: 'Little Buddy', origin: 'Blend', desc: 'A crowd-pleasing, approachable blend and a 2024 Good Food Awards winner.', price: 'From $22.50' },
  { name: 'Sweetheart', origin: 'Nicaragua La Roca', desc: 'A smooth, sweet single-origin offering from a longstanding Nicaraguan partner.', price: 'From $20.50' },
  { name: 'El Salvador Ariz Family', origin: 'Arusi Anaerobic Natural', desc: 'Stone fruits, rum and berries. An expressive anaerobic natural from our decade-long friends, the Ariz Family.', price: 'From $18.50' },
  { name: 'Colombia San Sebastián Reserva', origin: 'Huila, Colombia', desc: 'Stone fruit, tangerine and sugar cane. A relationship-driven reserve lot grown above 1,700 meters and washed on parabolic beds.', price: 'From $26.00' },
];

const LOCATIONS = [
  { name: 'Downtown Olympia', addr: '600 4th Ave. East, Olympia, WA 98501', note: 'Mon–Fri 6:30am–6pm · Sat–Sun 7am–6pm', desc: 'The flagship cafe and roasting headquarters where every coffee is roasted to order, daily.' },
  { name: 'South Olympia', addr: '2824 Capitol Blvd SE, Olympia, WA 98501', note: '(360) 943-9211', desc: 'A neighborhood cafe in the historic Wildwood building of the South Capitol neighborhood.' },
  { name: 'Proctor — Tacoma', addr: '2601 N Proctor, Tacoma, WA 98407', note: 'Mon–Sat 6am–6pm · Sun 7am–6pm', desc: 'Sit and watch the roasting happen in the historic Proctor neighborhood at the north end of Tacoma.' },
  { name: 'West Seattle', addr: '3840 California Ave SW, Seattle, WA 98116', note: 'Mon–Fri 6am–6pm · Sat–Sun 7am–6pm', desc: 'A bright corner cafe on California Avenue SW serving the West Seattle community.' },
  { name: 'Downtown Seattle', addr: '1420 5th Ave, Suite 103, Seattle, WA 98101', note: 'Mon–Fri 6am–6pm · Sat–Sun 7am–6pm', desc: 'A full-service coffee bar with a sidewalk window and comfy seating in the Cedar Hall atrium.' },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Olympia Coffee Roasting Company — Quality Coffee, Quality-of-Life</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Olympia Coffee Roasting Company — a small, quality-focused specialty roaster from the Pacific Northwest. Founded 2005 in downtown Olympia, WA. B Corp certified, roasted to order, with seven cafes and a bakery across Olympia, Tacoma and Seattle." />
      </Head>

      <nav className="nav">
        <a className="logo" href="#top">OLYMPIA COFFEE</a>
        <div className="links">
          <a href="#gallery">Cafés</a>
          <a href="#menu">Coffee</a>
          <a href="#about">Our Story</a>
          <a href="#locations">Locations</a>
        </div>
        <a className="shop" href="https://www.olympiacoffee.com/collections/coffee" target="_blank" rel="noopener noreferrer">Shop</a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow">Olympia, Washington &middot; Roasted to Order &middot; Since 2005</p>
          <h1>Quality coffee,<br />quality-of-life.</h1>
          <p className="sub">A small, quality-focused roaster from the Pacific Northwest. We source directly from farmers, roast to order, and brew delicious coffees seasonally &mdash; rated the best coffee in Washington by Food &amp; Wine.</p>
          <a className="cta" href="#menu">Explore Our Coffee</a>
        </div>
      </header>

      <section id="gallery" className="section">
        <h2>Our Cafés</h2>
        <p className="lead">Seven cafes and Moonrise Bakery across Olympia, Tacoma and Seattle &mdash; same great coffee, roasted fresh.</p>
        <div className="gallery">
          {GALLERY.map((g) => (
            <div className="g-item" key={g.src}>
              <img src={g.src} alt={g.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="section alt">
        <h2>Single Origin &amp; Blends</h2>
        <p className="lead">Roasted to order, daily, in our downtown Olympia roastery. Our seasonal menu changes for peak quality.</p>
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
          <p>Olympia Coffee&rsquo;s humble beginnings started in 2005 in an unmarked warehouse in downtown Olympia, with a single 12-kilo Diedrich roaster and a quality-of-life mission. Our company wasn&rsquo;t born into success &mdash; it has been built that way from the ground up.</p>
          <p>We exist to improve the quality of life for our farmers, our staff, and our community through exceptional coffee and genuine service. That mission has led us to build direct trade partnerships with coffee farmers across nine countries in East Africa, South America, and Central America &mdash; relationships rooted in fairness, transparency and respect.</p>
          <p>Along the way we&rsquo;ve been named Micro Roaster of the Year by Roast Magazine, won multiple Good Food Awards, become a Certified B Corporation and Living Wage Certified, and taken first place at the United States Coffee in Good Spirits Competition. Every coffee is still made to order, daily, in our downtown Olympia roastery.</p>
        </div>
        <div className="about-img">
          <img src={ABOUT_IMG} alt="Olympia Coffee direct trade sourcing partnership" loading="lazy" />
        </div>
      </section>

      <section id="locations" className="section alt">
        <h2>Locations</h2>
        <p className="lead">From our origins in downtown Olympia to cafes across the Puget Sound region.</p>
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
        <h2>Follow Olympia Coffee</h2>
        <div className="social-links">
          <a href="https://instagram.com/olympiacoffee" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/olympiacoffee" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.tiktok.com/@olympia.coffee" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href="https://www.youtube.com/channel/UCUmuDY3LQB4mk5pw7CbV7vg" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://www.olympiacoffee.com" target="_blank" rel="noopener noreferrer">olympiacoffee.com</a>
        </div>
      </section>

      <footer className="footer">
        <p className="f-logo">OLYMPIA COFFEE ROASTING COMPANY</p>
        <p>Olympia, Washington &middot; Quality coffee, quality-of-life &middot; B Corp certified &middot; Roasted to order since 2005</p>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #0c0a09;
          color: #f3ede4;
          font-family: Georgia, 'Times New Roman', serif;
          line-height: 1.6;
        }
        a { color: inherit; text-decoration: none; }
        .nav {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 32px;
          background: rgba(12,10,9,0.9);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(201,119,47,0.32);
        }
        .logo { font-weight: bold; letter-spacing: 4px; font-size: 19px; color: #E08A3C; font-family: -apple-system, system-ui, sans-serif; }
        .links { display: flex; gap: 28px; font-family: -apple-system, system-ui, sans-serif; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; }
        .links a:hover { color: #E08A3C; }
        .shop {
          font-family: -apple-system, system-ui, sans-serif; font-size: 13px;
          text-transform: uppercase; letter-spacing: 1px;
          border: 1px solid #E08A3C; color: #E08A3C;
          padding: 8px 18px; border-radius: 2px; transition: .2s;
        }
        .shop:hover { background: #E08A3C; color: #0c0a09; }
        .hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 0 24px;
          background: url('${HERO}') center/cover no-repeat fixed;
        }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(12,10,9,0.5), rgba(12,10,9,0.9)); }
        .hero-inner { position: relative; max-width: 820px; }
        .eyebrow { font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 4px; font-size: 13px; color: #E08A3C; margin-bottom: 18px; }
        .hero h1 { font-size: 58px; line-height: 1.05; margin-bottom: 22px; }
        .hero .sub { font-size: 19px; color: #ded3c4; max-width: 640px; margin: 0 auto 32px; }
        .cta {
          display: inline-block; background: #E08A3C; color: #0c0a09;
          font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase;
          letter-spacing: 1.5px; font-size: 14px; padding: 15px 38px; border-radius: 2px; transition: .2s; font-weight: 600;
        }
        .cta:hover { background: #c4762f; }
        .section { padding: 90px 32px; max-width: 1200px; margin: 0 auto; }
        .section.alt { background: #15110d; max-width: none; }
        .section.alt > * { max-width: 1200px; margin-left: auto; margin-right: auto; }
        .section h2 { font-size: 40px; text-align: center; margin-bottom: 14px; }
        .section h2::after { content: ''; display: block; width: 56px; height: 3px; background: #E08A3C; margin: 16px auto 0; }
        .lead, .section .lead { text-align: center; color: #b8ac96; font-style: italic; margin-bottom: 44px; }
        .gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 44px; }
        .g-item { overflow: hidden; border-radius: 4px; aspect-ratio: 4/3; }
        .g-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; display: block; }
        .g-item:hover img { transform: scale(1.07); }
        .menu { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .m-item { border: 1px solid #2c2417; border-left: 3px solid #E08A3C; padding: 22px 24px; border-radius: 3px; background: #0f0c09; }
        .m-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
        .m-item h3 { font-size: 21px; margin-bottom: 4px; letter-spacing: 0.5px; }
        .m-item .price { color: #E08A3C; font-family: -apple-system, system-ui, sans-serif; font-size: 15px; font-weight: 600; white-space: nowrap; }
        .m-origin { color: #968764; font-family: -apple-system, system-ui, sans-serif; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px; }
        .m-item p { color: #b8ac96; font-size: 16px; }
        .about { display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: center; }
        .about h2 { text-align: left; }
        .about h2::after { margin-left: 0; }
        .about-text p { margin-bottom: 16px; font-size: 18px; color: #ded3c4; }
        .about-img img { width: 100%; border-radius: 6px; display: block; }
        .locations { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 44px; }
        .l-item { background: #0f0c09; border: 1px solid #2c2417; padding: 24px; border-radius: 4px; }
        .l-item h3 { color: #E08A3C; font-size: 18px; margin-bottom: 6px; font-family: -apple-system, system-ui, sans-serif; }
        .l-item .l-note { color: #968764; font-size: 13px; font-style: italic; margin-bottom: 8px; }
        .l-item .l-desc { color: #a1957c; font-size: 14px; margin-top: 10px; }
        .l-item p { color: #b8ac96; }
        .social { text-align: center; }
        .social-links { display: flex; justify-content: center; gap: 22px; flex-wrap: wrap; margin-top: 30px; font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; }
        .social-links a { border: 1px solid #382b1b; padding: 12px 26px; border-radius: 2px; transition: .2s; }
        .social-links a:hover { border-color: #E08A3C; color: #E08A3C; }
        .footer { text-align: center; padding: 50px 24px; border-top: 1px solid #1d1710; background: #080605; }
        .f-logo { font-family: -apple-system, system-ui, sans-serif; letter-spacing: 3px; color: #E08A3C; font-weight: bold; margin-bottom: 8px; }
        .footer p { color: #8d8269; font-size: 14px; }
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
          .logo { font-size: 15px; }
        }
      `}</style>
    </div>
  );
}
