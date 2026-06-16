import Head from 'next/head';

const HERO = 'https://georgehowellcoffee.com/cdn/shop/files/GH-Group1-NOV25-1_3aa79bfb-1ab3-4afb-9c84-6c98ac976fa7.jpg?v=1767023561&width=1800';

const GALLERY = [
  { src: 'https://georgehowellcoffee.com/cdn/shop/files/5_5302b2e4-cf91-436a-b78b-3d6aedef0d35.jpg?v=1664558157&width=1400', alt: 'The Godfrey DTX café in Downtown Crossing, Boston' },
  { src: 'https://georgehowellcoffee.com/cdn/shop/files/97-DSC01433_resized_b6e15395-54d5-44fc-84e7-67710040dc38.jpg?v=1773677278&width=1400', alt: 'Inside a George Howell Coffee café' },
  { src: 'https://georgehowellcoffee.com/cdn/shop/files/DSC01052.jpg?v=1765222984&width=1400', alt: 'George Howell Coffee at Lyrik on Newbury Street, Back Bay' },
  { src: 'https://georgehowellcoffee.com/cdn/shop/files/IMG_2731_1680x_copy.png?v=1685112664&width=1400', alt: 'The Newtonville neighborhood café' },
  { src: 'https://georgehowellcoffee.com/cdn/shop/files/38-DSC01079_resized_05970a9a-19e1-4047-8d03-25582b432f0b.jpg?v=1767023509&width=1400', alt: 'A coffee education class in session' },
  { src: 'https://georgehowellcoffee.com/cdn/shop/files/Probat-GHC_copy.jpg?v=1657818852&width=1400', alt: 'The Probat roaster at the George Howell roastery' },
];

const ABOUT_IMG = 'https://georgehowellcoffee.com/cdn/shop/files/GH-Solo-NOV25-7_bea53663-9f3d-493d-a32b-592b6f4f016d.jpg?v=1764102372&width=1200';

const MENU = [
  { name: 'Daterra Sundrop, Brazil', desc: 'Butterscotch, blueberry, and clove. A rounded, sweet daily light roast from the renowned Daterra estate.', price: '$26' },
  { name: 'El Meson Summer Harvest, Colombia', desc: 'Cherry, white honey, and rose — a delicate, floral light roast and a recent new arrival.', price: '$42' },
  { name: 'Dota, Costa Rica', desc: 'Dark chocolate, cherry, and orange. A versatile, balanced light roast from the Tarrazú highlands.', price: '$21' },
  { name: 'Montecarlos, El Salvador', desc: 'Milk chocolate, orange, and pecan — a comforting, nutty Caturra light roast.', price: '$25' },
  { name: 'Worka Chelbessa, Ethiopia', desc: 'Peach, honey, cherry, and jasmine. A fragrant, tea-like washed Ethiopian light roast.', price: '$26' },
  { name: 'Mamuto AA, Kenya', desc: 'Blackberry, plum, cherry, and violet — the deep, juicy complexity of an SL28 Kenyan AA.', price: '$45' },
  { name: 'Gesha Village Estate Lot 47, Ethiopia', desc: 'White grape, tangerine, and jasmine. A rare, exceptional Gesha from the famed Gesha Village estate.', price: '$75' },
  { name: 'Alchemy Espresso', desc: 'Dark chocolate brownie, dark caramel, raspberry jam, and nougat — our traditional Northern Italian style espresso.', price: '$20' },
  { name: 'Cold Brew Blend', desc: 'Stout beer, dark chocolate, and walnuts. Crafted for a smooth, full-bodied cold brew.', price: '$21' },
];

const LOCATIONS = [
  { name: 'The Godfrey DTX', addr: '505 Washington St, Boston, MA 02111' },
  { name: 'Boston Public Market', addr: '100 Hanover St, Boston, MA 02108' },
  { name: 'Lyrik — Newbury St', addr: '400 Newbury St, Boston, MA 02115' },
  { name: 'Newtonville', addr: '311 Walnut St, Newtonville, MA 02460' },
  { name: 'Lovestruck Books & Café', addr: '44 Brattle St, Cambridge, MA 02138' },
  { name: 'The Roastery', addr: '312 School St, Acton, MA 01720' },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>George Howell Coffee — Every Cup Tells a Story</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="George Howell Coffee — a Boston-area specialty roaster celebrating terroir, single-estate coffees, and direct relationships with farmers. Roasting since 1975, founded 2004, and a co-founder of the Cup of Excellence." />
      </Head>

      <nav className="nav">
        <a className="logo" href="#top">GEORGE HOWELL<span>COFFEE</span></a>
        <div className="links">
          <a href="#gallery">Cafés</a>
          <a href="#menu">Coffees</a>
          <a href="#about">Our Story</a>
          <a href="#locations">Locations</a>
        </div>
        <a className="shop" href="https://georgehowellcoffee.com/collections/all-coffee" target="_blank" rel="noopener noreferrer">Shop</a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow">Boston, MA &middot; Roasting Since 1975</p>
          <h1>Every cup<br />tells a story.</h1>
          <p className="sub">A specialty coffee roaster devoted to terroir — sourcing the finest single-estate coffees on earth, roasting to precision, and delivering the ultimate cup from seed to cup.</p>
          <a className="cta" href="#menu">Explore Our Coffees</a>
        </div>
      </header>

      <section id="gallery" className="section">
        <h2>Our Cafés</h2>
        <p className="lead">From Downtown Crossing to Harvard Square — places to slow down and taste the difference.</p>
        <div className="gallery">
          {GALLERY.map((g) => (
            <div className="g-item" key={g.src}>
              <img src={g.src} alt={g.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="section alt">
        <h2>Our Coffees</h2>
        <p className="lead">Single-estate, lightly roasted, and treated like wine — each lot a pure expression of its region.</p>
        <div className="menu">
          {MENU.map((m) => (
            <div className="m-item" key={m.name}>
              <div className="m-head">
                <h3>{m.name}</h3>
                <span className="price">{m.price}</span>
              </div>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section about">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>George Howell&rsquo;s life in coffee began in 1974, when he opened The Coffee Connection in Cambridge&rsquo;s Harvard Square. That single café grew to 24 stores before he sold it to Starbucks in 1994 &mdash; on the conviction that great coffee, single-origin and lightly roasted, could change the way Americans drank their morning brew.</p>
          <p>After selling the company, George worked with the United Nations and the International Coffee Organization to build models of economic sustainability for coffee farmers, leading him to conceive and co-found the Cup of Excellence in 1999. In 2004 he returned to roasting and founded George Howell Coffee.</p>
          <p>Today the company sources the highest-quality single-estate coffees, paying farmers well above Fair Trade prices, freezing green coffee to preserve peak freshness, and craft-roasting daily in small batches. Above all, the mission is to share the experience of the highest-quality coffee, from seed to cup.</p>
        </div>
        <div className="about-img">
          <img src={ABOUT_IMG} alt="George Howell Coffee" loading="lazy" />
        </div>
      </section>

      <section id="locations" className="section alt">
        <h2>Locations</h2>
        <p className="lead">Six cafés and a roastery across Greater Boston.</p>
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
        <h2>Follow George Howell Coffee</h2>
        <div className="social-links">
          <a href="https://www.instagram.com/ghowellcoffee/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/GHowellCoffee/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com/ghowellcoffee" target="_blank" rel="noopener noreferrer">X / Twitter</a>
          <a href="https://www.youtube.com/c/GeorgeHowellCoffee" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://georgehowellcoffee.com" target="_blank" rel="noopener noreferrer">georgehowellcoffee.com</a>
        </div>
      </section>

      <footer className="footer">
        <p className="f-logo">GEORGE HOWELL COFFEE</p>
        <p>Boston, Massachusetts &middot; Roasting since 1975 &middot; Every cup tells a story</p>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #0a0807;
          color: #f4ece1;
          font-family: Georgia, 'Times New Roman', serif;
          line-height: 1.6;
        }
        a { color: inherit; text-decoration: none; }
        .nav {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 32px;
          background: rgba(10,8,7,0.9);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(193,59,42,0.32);
        }
        .logo { font-weight: bold; letter-spacing: 1.5px; font-size: 18px; color: #C13B2A; font-family: -apple-system, system-ui, sans-serif; }
        .logo span { color: #f4ece1; margin-left: 8px; font-weight: 400; letter-spacing: 3px; }
        .links { display: flex; gap: 28px; font-family: -apple-system, system-ui, sans-serif; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; }
        .links a:hover { color: #C13B2A; }
        .shop {
          font-family: -apple-system, system-ui, sans-serif; font-size: 13px;
          text-transform: uppercase; letter-spacing: 1px;
          border: 1px solid #C13B2A; color: #C13B2A;
          padding: 8px 18px; border-radius: 2px; transition: .2s;
        }
        .shop:hover { background: #C13B2A; color: #0a0807; }
        .hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 0 24px;
          background: url('${HERO}') center/cover no-repeat fixed;
        }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(10,8,7,0.5), rgba(10,8,7,0.85)); }
        .hero-inner { position: relative; max-width: 820px; }
        .eyebrow { font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 4px; font-size: 13px; color: #C13B2A; margin-bottom: 18px; }
        .hero h1 { font-size: 60px; line-height: 1.05; margin-bottom: 22px; }
        .hero .sub { font-size: 19px; color: #ddd2c4; max-width: 660px; margin: 0 auto 32px; }
        .cta {
          display: inline-block; background: #C13B2A; color: #fff;
          font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase;
          letter-spacing: 1.5px; font-size: 14px; padding: 15px 38px; border-radius: 2px; transition: .2s; font-weight: 600;
        }
        .cta:hover { background: #a32f20; }
        .section { padding: 90px 32px; max-width: 1200px; margin: 0 auto; }
        .section.alt { background: #120e0c; max-width: none; }
        .section.alt > * { max-width: 1200px; margin-left: auto; margin-right: auto; }
        .section h2 { font-size: 40px; text-align: center; margin-bottom: 14px; }
        .section h2::after { content: ''; display: block; width: 56px; height: 3px; background: #C13B2A; margin: 16px auto 0; }
        .lead, .section .lead { text-align: center; color: #b9ac9c; font-style: italic; margin-bottom: 44px; }
        .gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 44px; }
        .g-item { overflow: hidden; border-radius: 4px; aspect-ratio: 4/3; }
        .g-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; display: block; }
        .g-item:hover img { transform: scale(1.07); }
        .menu { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .m-item { border: 1px solid #2a211d; border-left: 3px solid #C13B2A; padding: 22px 24px; border-radius: 3px; background: #0d0a09; }
        .m-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
        .m-item h3 { font-size: 21px; margin-bottom: 6px; }
        .m-item .price { color: #C13B2A; font-family: -apple-system, system-ui, sans-serif; font-size: 16px; font-weight: 600; white-space: nowrap; }
        .m-item p { color: #b9ac9c; font-size: 16px; }
        .about { display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: center; }
        .about h2 { text-align: left; }
        .about h2::after { margin-left: 0; }
        .about-text p { margin-bottom: 16px; font-size: 18px; color: #ddd2c4; }
        .about-img img { width: 100%; border-radius: 6px; display: block; }
        .locations { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 44px; }
        .l-item { background: #0d0a09; border: 1px solid #2a211d; padding: 24px; border-radius: 4px; }
        .l-item h3 { color: #C13B2A; font-size: 18px; margin-bottom: 8px; font-family: -apple-system, system-ui, sans-serif; }
        .l-item p { color: #b9ac9c; }
        .social { text-align: center; }
        .social-links { display: flex; justify-content: center; gap: 22px; flex-wrap: wrap; margin-top: 30px; font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; }
        .social-links a { border: 1px solid #34291f; padding: 12px 26px; border-radius: 2px; transition: .2s; }
        .social-links a:hover { border-color: #C13B2A; color: #C13B2A; }
        .footer { text-align: center; padding: 50px 24px; border-top: 1px solid #1c1613; background: #070504; }
        .f-logo { font-family: -apple-system, system-ui, sans-serif; letter-spacing: 3px; color: #C13B2A; font-weight: bold; margin-bottom: 8px; }
        .footer p { color: #8a7e70; font-size: 14px; }
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
