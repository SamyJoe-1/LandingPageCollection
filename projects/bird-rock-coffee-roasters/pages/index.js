import Head from 'next/head';

const HERO = 'https://www.birdrockcoffee.com/cdn/shop/files/waterfront-54.webp?v=1773430504&width=2000';

const GALLERY = [
  { src: 'https://www.birdrockcoffee.com/cdn/shop/files/Pourovers.webp?v=1773430623&width=1100', alt: 'Bird Rock Coffee Roasters pour-over bar featuring top seasonal single origins' },
  { src: 'https://www.birdrockcoffee.com/cdn/shop/files/IMG_0098.webp?v=1773758266&width=1100', alt: 'The Bird Rock Coffee Roasters cafe in Little Italy, San Diego' },
  { src: 'https://www.birdrockcoffee.com/cdn/shop/files/IMG_8543.jpg?v=1773685096&width=1100', alt: 'El Chaferote Pink Bourbon, a washed single-origin from Colombia' },
  { src: 'https://www.birdrockcoffee.com/cdn/shop/files/El_Socorro_5.jpg?v=1776354779&width=1100', alt: 'El Socorro Maracaturra, a washed single-origin from Guatemala' },
  { src: 'https://www.birdrockcoffee.com/cdn/shop/files/IMG_6680.webp?v=1773758419&width=1100', alt: 'Midnight Surf, a fully washed Colombian signature blend' },
  { src: 'https://www.birdrockcoffee.com/cdn/shop/files/IMG_9275.webp?v=1773758000&width=1100', alt: 'The Optimist, a natural and washed signature blend' },
];

const ABOUT_IMG = 'https://www.birdrockcoffee.com/cdn/shop/files/IMG_4123.webp?v=1773758044&width=1400';

const MENU = [
  { name: 'El Chaferote', origin: 'Single Origin · Colombia · Washed · Pink Bourbon', desc: 'A vibrant, delicate Colombian washed Pink Bourbon that opens up with floral sweetness and a soft, juicy finish — one of our most sought-after seasonal lots.', notes: 'Chamomile, Mango, Spiced Cider', price: '$32.00' },
  { name: 'El Socorro', origin: 'Single Origin · Guatemala · Washed · Maracaturra', desc: 'Grown at El Socorro estate, this washed Maracaturra is layered and dessert-like, balancing orchard fruit with a rich, toasty sweetness.', notes: 'Spiced Apple, Clementine, S’more', price: '$23.00' },
  { name: 'Peñaherrera', origin: 'Single Origin · Ecuador · Washed · Bourbon / Caturra / Typica', desc: 'A deep, characterful Ecuadorian washed lot with a syrupy body and playful dark-fruit sweetness that lingers cup after cup.', notes: 'Cola, Roasted Marshmallow, Purple Grape', price: '$26.00' },
  { name: 'Munkaze', origin: 'Single Origin · Burundi · Washed · Red Bourbon', desc: 'A clean, comforting washed Burundi from Red Bourbon trees — gently spiced and full of brown-sugar sweetness with a dried-fruit core.', notes: 'Baking Spices, Golden Raisin, Brown Sugar', price: '$24.00' },
  { name: 'Bird Rock', origin: 'Signature Blend · Washed · Various Origins', desc: 'Our namesake blend and everyday workhorse — balanced and sweet with a rounded body that shines as filter, espresso, or cold brew.', notes: 'Black Pepper, Red Apple, Fudge', price: '$20.00' },
  { name: 'Monkey Bite', origin: 'Espresso Blend · Natural + Washed · Various Origins', desc: 'Our classic espresso blend, built for milk drinks and pulling shots — sweet, syrupy, and endlessly comforting with a candy-like finish.', notes: 'Brown Sugar, Dried Apricot, Butterscotch', price: '$20.00' },
];

const LOCATIONS = [
  { name: 'La Jolla', addr: '5627 La Jolla Blvd, La Jolla, CA 92037', note: 'The Original · Bird Rock', desc: 'Where it all began — our flagship roastery cafe in the Bird Rock neighborhood of La Jolla.' },
  { name: 'Park & Market', addr: '1100 Market Street, Suite 120, San Diego, CA 92101', note: 'Downtown · Newest Cafe', desc: 'Our newest cafe in the heart of downtown San Diego’s Park & Market.' },
  { name: 'Little Italy', addr: '2295 Kettner Blvd, San Diego, CA 92101', note: 'Little Italy', desc: 'A bustling neighborhood coffee bar in San Diego’s Little Italy.' },
  { name: 'Waterfront', addr: '1420 Kettner Blvd, San Diego, CA 92101', note: 'Little Italy · Waterfront', desc: 'A bright, modern cafe steps from the San Diego waterfront.' },
  { name: 'Liberty Station', addr: '2401 Truxtun Rd, Suite 101, San Diego, CA 92106', note: 'Point Loma', desc: 'A spacious cafe inside the historic Liberty Station arts district.' },
  { name: 'Morena Blvd', addr: '1270 Morena Blvd, San Diego, CA 92110', note: 'Bay Park', desc: 'A friendly local cafe serving the Bay Park and Morena community.' },
  { name: 'Torrey Pines', addr: '2212 Carmel Valley Rd, Del Mar, CA 92014', note: 'Del Mar', desc: 'A coastal cafe near Torrey Pines and the Del Mar bluffs.' },
  { name: 'Bressi Ranch', addr: '2656 Gateway Rd, Suite 150, Carlsbad, CA 92009', note: 'Carlsbad', desc: 'A welcoming North County cafe in Carlsbad’s Bressi Ranch.' },
  { name: 'Encinitas', addr: '947 S Coast Highway 101, Suite D101, Encinitas, CA 92024', note: 'Coast Highway 101', desc: 'A breezy cafe right on Encinitas’ iconic Coast Highway 101.' },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bird Rock Coffee Roasters &mdash; San Diego, California</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Bird Rock Coffee Roasters &mdash; an award-winning independent specialty coffee roaster and family of cafes across San Diego. Founded in the Bird Rock neighborhood of La Jolla in 2002. Roaster of the Year, Direct Trade, and coffee scored above 90." />
      </Head>

      <nav className="nav">
        <a className="logo" href="#top">BIRD ROCK</a>
        <div className="links">
          <a href="#gallery">Caf&eacute;s</a>
          <a href="#menu">Coffee</a>
          <a href="#about">Our Story</a>
          <a href="#locations">Locations</a>
        </div>
        <a className="shop" href="https://www.birdrockcoffee.com/collections/roasted-coffee" target="_blank" rel="noopener noreferrer">Shop</a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow">San Diego, California &middot; Roaster &amp; Caf&eacute; &middot; Since 2002</p>
          <h1>Empowered By<br />Great Coffee.</h1>
          <p className="sub">Bird Rock Coffee Roasters is an award-winning independent specialty roaster and a family of cafes across San Diego &mdash; roasting fresh, Direct Trade, and ethically sourced coffee daily.</p>
          <a className="cta" href="#menu">Explore Our Coffee</a>
        </div>
      </header>

      <section id="gallery" className="section">
        <h2>A Family of San Diego Caf&eacute;s</h2>
        <p className="lead">From our La Jolla roastery to Little Italy, downtown and the North County coast &mdash; welcoming spaces built around exceptional coffee.</p>
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
        <p className="lead">Fresh, award-winning, Direct Trade coffee &mdash; a rotating selection of seasonal single origins and signature blends, roasted in San Diego.</p>
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
          <p>Bird Rock Coffee Roasters opened in 2002 as a grass-roots company &mdash; founder Chuck Patton roasting small batches and selling them at San Diego farmers markets before opening the original La Jolla Boulevard shop in the Bird Rock neighborhood.</p>
          <p>Recognized as Roaster of the Year in 2012 by Roast Magazine, a 2017 Good Food Award recipient, and a consistent winner of scores above 90 from Coffee Review, Bird Rock helped put premiere coffee on the map in San Diego. In 2017 the company was purchased by Jeff Taylor, founder of PT&rsquo;s Coffee Roasting Co., carrying the Direct Trade tradition forward.</p>
          <p>Our mission is simple: serve the best possible coffee, support the farms and producers who grow it economically, socially and environmentally, and be an active participant in the enrichment of our communities.</p>
        </div>
        <div className="about-img">
          <img src={ABOUT_IMG} alt="A Bird Rock Coffee Roasters signature blend served at one of the San Diego cafes" loading="lazy" />
        </div>
      </section>

      <section id="locations" className="section alt">
        <h2>Locations</h2>
        <p className="lead">Find Bird Rock across San Diego County &mdash; from La Jolla and Little Italy to Carlsbad and Encinitas.</p>
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
        <h2>Follow Bird Rock</h2>
        <div className="social-links">
          <a href="https://instagram.com/birdrockcoffeeroasters/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://facebook.com/birdrockcoffeeroasters/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com/birdrockcoffee/" target="_blank" rel="noopener noreferrer">X / Twitter</a>
          <a href="https://www.birdrockcoffee.com" target="_blank" rel="noopener noreferrer">birdrockcoffee.com</a>
        </div>
      </section>

      <footer className="footer">
        <p className="f-logo">BIRD ROCK COFFEE ROASTERS</p>
        <p>San Diego, California &middot; Roaster &amp; caf&eacute; &middot; Empowered by great coffee since 2002</p>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #08110f;
          color: #eaf2f0;
          font-family: Georgia, 'Times New Roman', serif;
          line-height: 1.6;
        }
        a { color: inherit; text-decoration: none; }
        .nav {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 32px;
          background: rgba(8,17,15,0.9);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(59,147,196,0.32);
        }
        .logo { font-weight: bold; letter-spacing: 3px; font-size: 24px; color: #3b93c4; font-family: -apple-system, system-ui, sans-serif; }
        .links { display: flex; gap: 28px; font-family: -apple-system, system-ui, sans-serif; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; }
        .links a:hover { color: #3b93c4; }
        .shop {
          font-family: -apple-system, system-ui, sans-serif; font-size: 13px;
          text-transform: uppercase; letter-spacing: 1px;
          border: 1px solid #3b93c4; color: #3b93c4;
          padding: 8px 18px; border-radius: 2px; transition: .2s;
        }
        .shop:hover { background: #3b93c4; color: #08110f; }
        .hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 0 24px;
          background: url('${HERO}') center/cover no-repeat fixed;
        }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(6,14,13,0.5), rgba(6,14,13,0.93)); }
        .hero-inner { position: relative; max-width: 820px; }
        .eyebrow { font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 4px; font-size: 13px; color: #3b93c4; margin-bottom: 18px; }
        .hero h1 { font-size: 58px; line-height: 1.05; margin-bottom: 22px; }
        .hero .sub { font-size: 19px; color: #d3e2df; max-width: 640px; margin: 0 auto 32px; }
        .cta {
          display: inline-block; background: #3b93c4; color: #06201c;
          font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase;
          letter-spacing: 1.5px; font-size: 14px; padding: 15px 38px; border-radius: 2px; transition: .2s; font-weight: 600;
        }
        .cta:hover { background: #2f7aa5; }
        .section { padding: 90px 32px; max-width: 1200px; margin: 0 auto; }
        .section.alt { background: #0b1917; max-width: none; }
        .section.alt > * { max-width: 1200px; margin-left: auto; margin-right: auto; }
        .section h2 { font-size: 40px; text-align: center; margin-bottom: 14px; }
        .section h2::after { content: ''; display: block; width: 56px; height: 3px; background: #3b93c4; margin: 16px auto 0; }
        .lead, .section .lead { text-align: center; color: #8ba39e; font-style: italic; margin-bottom: 44px; }
        .gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 44px; }
        .g-item { overflow: hidden; border-radius: 4px; aspect-ratio: 4/3; }
        .g-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; display: block; }
        .g-item:hover img { transform: scale(1.07); }
        .menu { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .m-item { border: 1px solid #16302c; border-left: 3px solid #3b93c4; padding: 22px 24px; border-radius: 3px; background: #0a1614; }
        .m-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
        .m-item h3 { font-size: 21px; margin-bottom: 4px; letter-spacing: 0.5px; }
        .m-item .price { color: #3b93c4; font-family: -apple-system, system-ui, sans-serif; font-size: 15px; font-weight: 600; white-space: nowrap; }
        .m-origin { color: #5f9bb5; font-family: -apple-system, system-ui, sans-serif; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px; }
        .m-item p { color: #8ba39e; font-size: 16px; }
        .m-item .m-notes { color: #86c0da; font-family: -apple-system, system-ui, sans-serif; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; margin-top: 10px; }
        .about { display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: center; }
        .about h2 { text-align: left; }
        .about h2::after { margin-left: 0; }
        .about-text p { margin-bottom: 16px; font-size: 18px; color: #d3e2df; }
        .about-img img { width: 100%; border-radius: 6px; display: block; }
        .locations { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 44px; }
        .l-item { background: #0a1614; border: 1px solid #16302c; padding: 24px; border-radius: 4px; }
        .l-item h3 { color: #3b93c4; font-size: 18px; margin-bottom: 6px; font-family: -apple-system, system-ui, sans-serif; }
        .l-item .l-note { color: #5f9bb5; font-size: 13px; font-style: italic; margin-bottom: 8px; }
        .l-item .l-desc { color: #6f8580; font-size: 14px; margin-top: 10px; }
        .l-item p { color: #8ba39e; }
        .social { text-align: center; }
        .social-links { display: flex; justify-content: center; gap: 22px; flex-wrap: wrap; margin-top: 30px; font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; }
        .social-links a { border: 1px solid #1d3a35; padding: 12px 26px; border-radius: 2px; transition: .2s; }
        .social-links a:hover { border-color: #3b93c4; color: #3b93c4; }
        .footer { text-align: center; padding: 50px 24px; border-top: 1px solid #132a26; background: #050d0b; }
        .f-logo { font-family: -apple-system, system-ui, sans-serif; letter-spacing: 2px; color: #3b93c4; font-weight: bold; margin-bottom: 8px; font-size: 18px; }
        .footer p { color: #6f8580; font-size: 14px; }
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
