import Head from 'next/head';

const HERO = 'https://www.seycoffee.com/cdn/shop/files/mainhero_5760x.jpg?v=1613535022';

const GALLERY = [
  { src: 'https://www.seycoffee.com/cdn/shop/files/cafe2_5760x.jpg?v=1613535026', alt: 'Inside the bright, airy SEY cafe on Grattan Street in Brooklyn, with light pouring through the windows' },
  { src: 'https://www.seycoffee.com/cdn/shop/files/cafephoto2_5760x.jpg?v=1613535026', alt: 'A cup of coffee served on handmade ceramic on a table at the SEY cafe' },
  { src: 'https://www.seycoffee.com/cdn/shop/files/elida_5760x.jpg?v=1613535023', alt: 'A cupping table photographed from above, with rows of bowls of coffee being evaluated' },
  { src: 'https://www.seycoffee.com/cdn/shop/files/facade_1868x.jpg?v=1613535024', alt: 'The exterior facade of the SEY roastery and cafe in Bushwick, Brooklyn' },
  { src: 'https://www.seycoffee.com/cdn/shop/files/about-1_5760x_8ab0e22a-51d1-4fc2-becc-f24c467168a1_5760x.webp?v=1700688285', alt: 'SEY green coffee sourcing and quality work with producing partners at origin' },
  { src: 'https://www.seycoffee.com/cdn/shop/files/about-2_5760x_d577718d-cb89-45ce-89ae-60f0187fae9b_5760x.webp?v=1700688285', alt: 'Carefully developed roasting at the SEY micro roastery in Brooklyn' },
];

const ABOUT_IMG = 'https://www.seycoffee.com/cdn/shop/files/cafephoto2_5760x.jpg?v=1613535026';

const MENU = [
  { name: '2026 Gilber Huayllas; Llaqta Pata', origin: 'Amaybamba Valley, Peru · SL9* · Washed', desc: 'Our first year working with Gilber Huayllas and his small SL9* garden at extremely high altitudes in the Amaybamba valley. In the cup we find violet, candied orange, and lemon.', price: '$30.00 / 250g' },
  { name: '2026 Halo Hartume', origin: 'Gedeb, Yirgacheffe, Ethiopia · Landrace · Washed', desc: 'A constant site for us each year. This selection stays on the bright, crisp, and clean side of the profiles we see from Gedeb. In the cup we find nectarine, tart plum, and lemongrass.', price: '$25.00 / 250g' },
  { name: '2026 Alo; Bombe', origin: 'Bombe, Sidama, Ethiopia · Landrace · Washed', desc: 'Grown at extreme elevations nestled in the valleys of the Sidama mountains, this location consistently produces some of the highest-scoring coffees of the year. In the cup we find watermelon, white florals, and raspberry.', price: '$27.00 / 250g' },
  { name: '2026 Luis & Mildred Montoya; La Arboleda', origin: 'Urrao, Antioquia, Colombia · Chiroso · Washed', desc: 'Our first year working with La Arboleda, produced by Luis and his daughter Mildred — a continuation of our exploration of Urrao. In the cup we find mulberry, peach, and lemon.', price: '$25.50 / 250g' },
  { name: '2026 Georgina Puma; Monte Verde', origin: 'Santa Ana, Cusco, Peru · Gesha · Washed', desc: 'Our first year working with Georgina and her extremely small garden of Gesha, tucked away in the mountains of Santa Ana in Cusco. In the cup we find apple blossom, mandarin, and blueberry.', price: '$31.00 / 250g' },
  { name: '2026 Chorso Bule', origin: 'Gedeb, Ethiopia · Landrace · Washed', desc: 'Our first year working with the Chorso Bule site, which rests at some of the highest elevations in all of Gedeb. In the cup we find peach tea, melon, and jasmine.', price: '$27.50 / 250g' },
];

const LOCATIONS = [
  { name: 'SEY Cafe & Roastery', addr: '18 Grattan St, Brooklyn, NY 11206', note: 'Weekdays 7–5 · Weekends 8–5', desc: 'A bright, meticulously constructed space built for those in need of a little beauty, delicious coffee, and open air in their life. Limited laptops on weekdays; no laptops on weekends.' },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>SEY Coffee &mdash; Brooklyn, New York</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="SEY is a contemporary micro roastery proudly based in Brooklyn, New York. Drink beautiful coffee — a brilliant spectrum of flavors, aromatics, and acidities from our extraordinary producing partners around the world." />
      </Head>

      <nav className="nav">
        <a className="logo" href="#top">SEY</a>
        <div className="links">
          <a href="#gallery">Cafe</a>
          <a href="#menu">Coffees</a>
          <a href="#about">About</a>
          <a href="#locations">Visit</a>
        </div>
        <a className="shop" href="https://www.seycoffee.com/collections/coffee" target="_blank" rel="noopener noreferrer">Shop</a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow">Brooklyn, New York &middot; Contemporary Micro Roastery</p>
          <h1>Drink Beautiful<br />Coffee.</h1>
          <p className="sub">Explore a brilliant spectrum of flavors, aromatics, and acidities nurtured into existence by the dedicated craftsmanship of our extraordinary producing partners around the world.</p>
          <a className="cta" href="#menu">Shop Coffees</a>
        </div>
      </header>

      <section id="gallery" className="section">
        <h2>Bright Space. Beautiful Coffee.</h2>
        <p className="lead">Named 2019&rsquo;s Best Coffee Shop in America by Food &amp; Wine &mdash; a space meticulously constructed to suit those in need of a little beauty.</p>
        <div className="gallery">
          {GALLERY.map((g) => (
            <div className="g-item" key={g.src}>
              <img src={g.src} alt={g.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="section alt">
        <h2>Our Current Collection</h2>
        <p className="lead">Seasonally sourced and delicately roasted to showcase the diversity of flavors, aromatics, and acidities the world&rsquo;s terroirs naturally produce.</p>
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
          <h2>Our Approach</h2>
          <p>SEY is a contemporary micro roastery proudly based in Brooklyn, New York. We are in pursuit of delivering the finest, most dynamic, and complex coffees we can by developing, supporting, and progressing relationships throughout the supply chain.</p>
          <p>We are intensely interested in reimagining everything we have come to know about coffee, and allow ourselves the freedom to work with whatever coffees we find inspiring, no matter how high the cost or how small the lot.</p>
          <p>We consider roasting a delicate procedure. Through continued analysis and the honing of roast profiles, we aim to deliver a crystal-clear expression of the inherent characteristics of each coffee at its absolute maximum potential. We hope you enjoy.</p>
        </div>
        <div className="about-img">
          <img src={ABOUT_IMG} alt="A cup of SEY coffee served on handmade ceramic at the Brooklyn cafe" loading="lazy" />
        </div>
      </section>

      <section id="locations" className="section alt">
        <h2>Visit Us</h2>
        <p className="lead">One space to call our own, in Bushwick, Brooklyn.</p>
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
        <h2>Follow SEY</h2>
        <div className="social-links">
          <a href="https://www.instagram.com/seycoffee/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://discord.gg/4PmnSVE9Fn" target="_blank" rel="noopener noreferrer">Discord</a>
          <a href="https://www.seycoffee.com" target="_blank" rel="noopener noreferrer">seycoffee.com</a>
        </div>
      </section>

      <footer className="footer">
        <p className="f-logo">SEY COFFEE</p>
        <p>18 Grattan St, Brooklyn, NY 11206 &middot; Drink beautiful coffee &middot; BK . NY</p>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #0b0b0b;
          color: #f3f1ec;
          font-family: Georgia, 'Times New Roman', serif;
          line-height: 1.6;
        }
        a { color: inherit; text-decoration: none; }
        .nav {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 32px;
          background: rgba(11,11,11,0.9);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(244,244,242,0.18);
        }
        .logo { font-weight: bold; letter-spacing: 4px; font-size: 24px; color: #e08a3c; font-family: -apple-system, system-ui, sans-serif; }
        .links { display: flex; gap: 28px; font-family: -apple-system, system-ui, sans-serif; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; }
        .links a:hover { color: #e08a3c; opacity: .9; }
        .shop {
          font-family: -apple-system, system-ui, sans-serif; font-size: 13px;
          text-transform: uppercase; letter-spacing: 1px;
          border: 1px solid #e08a3c; color: #e08a3c;
          padding: 8px 18px; border-radius: 2px; transition: .2s;
        }
        .shop:hover { background: #e08a3c; color: #0b0b0b; }
        .hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 0 24px;
          background: url('${HERO}') center/cover no-repeat fixed;
        }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(11,11,11,0.5), rgba(11,11,11,0.9)); }
        .hero-inner { position: relative; max-width: 820px; }
        .eyebrow { font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 4px; font-size: 13px; color: #e08a3c; margin-bottom: 18px; }
        .hero h1 { font-size: 58px; line-height: 1.05; margin-bottom: 22px; }
        .hero .sub { font-size: 19px; color: #e3e0d9; max-width: 640px; margin: 0 auto 32px; }
        .cta {
          display: inline-block; background: #e08a3c; color: #0b0b0b;
          font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase;
          letter-spacing: 1.5px; font-size: 14px; padding: 15px 38px; border-radius: 2px; transition: .2s; font-weight: 600;
        }
        .cta:hover { background: #c9762d; }
        .section { padding: 90px 32px; max-width: 1200px; margin: 0 auto; }
        .section.alt { background: #131313; max-width: none; }
        .section.alt > * { max-width: 1200px; margin-left: auto; margin-right: auto; }
        .section h2 { font-size: 40px; text-align: center; margin-bottom: 14px; }
        .section h2::after { content: ''; display: block; width: 56px; height: 3px; background: #e08a3c; margin: 16px auto 0; }
        .lead, .section .lead { text-align: center; color: #a7a59e; font-style: italic; margin-bottom: 44px; }
        .gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 44px; }
        .g-item { overflow: hidden; border-radius: 4px; aspect-ratio: 4/3; }
        .g-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; display: block; }
        .g-item:hover img { transform: scale(1.07); }
        .menu { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .m-item { border: 1px solid #262626; border-left: 3px solid #e08a3c; padding: 22px 24px; border-radius: 3px; background: #101010; }
        .m-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
        .m-item h3 { font-size: 21px; margin-bottom: 4px; letter-spacing: 0.5px; }
        .m-item .price { color: #e08a3c; font-family: -apple-system, system-ui, sans-serif; font-size: 15px; font-weight: 600; white-space: nowrap; }
        .m-origin { color: #8f8d86; font-family: -apple-system, system-ui, sans-serif; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px; }
        .m-item p { color: #a7a59e; font-size: 16px; }
        .about { display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: center; }
        .about h2 { text-align: left; }
        .about h2::after { margin-left: 0; }
        .about-text p { margin-bottom: 16px; font-size: 18px; color: #e3e0d9; }
        .about-img img { width: 100%; border-radius: 6px; display: block; }
        .locations { display: grid; grid-template-columns: repeat(1, minmax(0,520px)); justify-content: center; gap: 18px; margin-top: 44px; }
        .l-item { background: #101010; border: 1px solid #262626; padding: 24px; border-radius: 4px; text-align: center; }
        .l-item h3 { color: #e08a3c; font-size: 18px; margin-bottom: 6px; font-family: -apple-system, system-ui, sans-serif; }
        .l-item .l-note { color: #8f8d86; font-size: 13px; font-style: italic; margin-bottom: 8px; }
        .l-item .l-desc { color: #777570; font-size: 14px; margin-top: 10px; }
        .l-item p { color: #a7a59e; }
        .social { text-align: center; }
        .social-links { display: flex; justify-content: center; gap: 22px; flex-wrap: wrap; margin-top: 30px; font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; }
        .social-links a { border: 1px solid #2f2f2f; padding: 12px 26px; border-radius: 2px; transition: .2s; }
        .social-links a:hover { border-color: #e08a3c; color: #e08a3c; }
        .footer { text-align: center; padding: 50px 24px; border-top: 1px solid #1f1f1f; background: #070707; }
        .f-logo { font-family: -apple-system, system-ui, sans-serif; letter-spacing: 4px; color: #e08a3c; font-weight: bold; margin-bottom: 8px; font-size: 16px; }
        .footer p { color: #777570; font-size: 14px; }
        @media (max-width: 820px) {
          .links { display: none; }
          .hero h1 { font-size: 38px; }
          .hero { background-attachment: scroll; }
          .gallery { grid-template-columns: repeat(2, 1fr); }
          .menu { grid-template-columns: 1fr; }
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
