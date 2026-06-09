import Head from "next/head";

const ACCENT = "#1E73BE";

const NAV = [
  { label: "Gallery", href: "#gallery" },
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#about" },
  { label: "Cafes", href: "#locations" },
];

const HERO_IMG =
  "https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/2026/Cafe%20Locator/Spring%202026%20Cafe%20Hub/1920x720.jpg";

const GALLERY = [
  {
    src: "https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/cafes/Oakbrook%20Center/Blue_Bottle_Oakbrook_Center_Cafe_NCO_16x9.jpg",
    caption: "Oakbrook Center, Chicago",
  },
  {
    src: "https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/cafes/Fashion%20Show/16x9.jpg",
    caption: "Fashion Show, Las Vegas",
  },
  {
    src: "https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/2026/02%20February/Feb%20W2/HP_FEBWK2_M7_Desktop.jpg",
    caption: "Montgomery Village, Santa Rosa",
  },
  {
    src: "https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/2026/06%20June/June%20Wk1/HP_JUN_WK2_M1C_Desktop.jpg",
    caption: "A glass of hot coffee",
  },
  {
    src: "https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/2026/04%20April/April%20Wk1/HP_APRWK1_M8A_Desktop.jpg",
    caption: "Brewed in a glass mug",
  },
  {
    src: "https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/2026/05%20May/May%20W4/HP_JUN_WK1_M8A_Mobile.jpg",
    caption: "Fellow Pirch latte glasses",
  },
];

const MENU = [
  {
    name: "Golden Hour Blend",
    price: "$29",
    desc: "Plum, toffee, golden raisin. A rare medium roast of carbonic-macerated and natural processed coffees — delightful iced or hot.",
    img: "https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/2026/05%20May/May%20W4/HP_MAY_WK4_M1A_Desktop.jpg",
  },
  {
    name: "Honduras Santa Bárbara Beneficio San Vicente",
    price: "$18",
    desc: "Caramel, plum, grapefruit. A refined and articulate washed light roast from Honduras.",
    img: "https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/2026/06%20June/June%20Wk1/HP_JUN_WK2_M1C_Desktop.jpg",
  },
  {
    name: "Hayes Valley Espresso",
    price: "$22",
    desc: "Baking chocolate, orange zest, brown sugar. A dark roast best seller named for the San Francisco neighborhood of our first cafe.",
    img: "https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/2026/05%20May/May%20W3/HP_MAY_WK4_M6_Mobile.jpg",
  },
  {
    name: "Tokyo Kissa",
    price: "$25",
    desc: "Bittersweet cocoa, toasted marshmallow, vanilla. Our darkest roast, inspired by Japan's kissaten coffee houses.",
    img: "https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/2026/05%20May/May%20W3/Subscriptions_Desktop_2.jpg",
  },
  {
    name: "Three Africas",
    price: "$22",
    desc: "Golden raisin, winey blueberry, lemon zest. A bright, beloved medium roast blend.",
    img: "https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/2026/04%20April/April%20Wk1/HP_APRWK1_M8A_Desktop.jpg",
  },
  {
    name: "Craft Matcha",
    price: "$35",
    desc: "Verdant, smooth, vibrant. Cafe-quality matcha to prepare at home.",
    img: "https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/2026/06%20June/June%20Wk1/HP_JUN_WK2_M3_Mobile.jpg",
  },
];

const LOCATIONS = [
  { city: "New York", name: "Chelsea (Original Manhattan)", address: "450 W 15th St, New York, NY 10011" },
  { city: "New York", name: "Bryant Park", address: "54 W 40th St, New York, NY 10018" },
  { city: "New York", name: "Hudson Yards", address: "20 Hudson Yards, Unit 228, New York, NY 10001" },
  { city: "Chicago", name: "Oakbrook Center", address: "100 Oakbrook Center, Oak Brook, IL 60523" },
  { city: "Las Vegas", name: "Fashion Show", address: "3200 S Las Vegas Blvd, Las Vegas, NV 89109" },
  { city: "Santa Rosa", name: "Montgomery Village", address: "2323 Magowan Dr, Santa Rosa, CA 95405" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/bluebottle" },
  { label: "Facebook", href: "https://www.facebook.com/bluebottlecoffee" },
  { label: "Twitter / X", href: "https://www.twitter.com/bluebottleroast" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCyki4e6RG84BT_xzi4oYkRw" },
];

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>Blue Bottle Coffee | Fresh Roasted Specialty Coffee</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Blue Bottle Coffee is a specialty coffee roaster founded in Oakland in 2002, with cafes in LA, SF, NYC, and Japan."
        />
      </Head>

      <nav className="nav">
        <a href="#top" className="logo">Blue Bottle Coffee</a>
        <div className="nav-links">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </div>
        <a className="shop-btn" href="https://bluebottlecoffee.com/us/eng/shop/best-sellers" target="_blank" rel="noreferrer">Shop</a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Roasted in small batches since 2002</p>
          <h1>Fresh Roasted Specialty Coffee</h1>
          <p className="hero-sub">
            A specialty coffee roaster with cafes in LA, SF, NYC, and Japan — serving beans within
            days of the roast for unmatched freshness and flavor.
          </p>
          <a className="cta" href="#menu">Explore the Coffee</a>
        </div>
      </header>

      <section id="gallery" className="section">
        <h2>From Our Cafes</h2>
        <div className="gallery">
          {GALLERY.map((g, i) => (
            <figure key={i} className="gtile">
              <img src={g.src} alt={g.caption} loading="lazy" />
              <figcaption>{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="menu" className="section">
        <h2>Featured Coffee &amp; More</h2>
        <div className="menu">
          {MENU.map((m, i) => (
            <article key={i} className="card">
              <div className="card-img" style={{ backgroundImage: `url(${m.img})` }} />
              <div className="card-body">
                <div className="card-head">
                  <h3>{m.name}</h3>
                  <span className="price">{m.price}</span>
                </div>
                <p>{m.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section about">
        <h2>Our Story</h2>
        <div className="about-grid">
          <div>
            <p>
              Blue Bottle Coffee began in the summer of 2002, when James Freeman — a freelance
              clarinetist with an obsession for the freshest possible cup — started roasting beans in
              a 186-square-foot converted potting shed in Oakland, California.
            </p>
            <p>
              On August 15th, 2002, he sold his first 12 pounds of coffee at the Oakland Farmers Market,
              with a simple, radical promise: roast in small batches and serve within 24 hours of
              roasting. A year later, Blue Bottle opened its first brick-and-mortar cafe in a converted
              garage in San Francisco's Hayes Valley.
            </p>
            <p>
              Freeman credits his years as a classical musician for the brand's identity — from the
              attention paid to negative space in the cafes to the typography on every bag. As he puts
              it, Blue Bottle is recognizable “not so much for what is there, but rather for what is not.”
            </p>
          </div>
          <ul className="values">
            <li><strong>Highly Curated</strong><span>Seasonal coffees chosen for peak flavor.</span></li>
            <li><strong>Ethically Sourced</strong><span>Relationships with growers around the world.</span></li>
            <li><strong>Roasted Fresh</strong><span>Small batches, served within days.</span></li>
            <li><strong>Inspired by Japan</strong><span>The calm and craft of the kissaten.</span></li>
          </ul>
        </div>
      </section>

      <section id="locations" className="section">
        <h2>Find a Cafe</h2>
        <div className="locations">
          {LOCATIONS.map((l, i) => (
            <div key={i} className="loc">
              <span className="loc-city">{l.city}</span>
              <h3>{l.name}</h3>
              <p>{l.address}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="social" className="section social">
        <h2>Follow Along</h2>
        <div className="social-links">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p className="footer-logo">Blue Bottle Coffee</p>
        <p>Oakland, California · Fresh roasted specialty coffee since 2002</p>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #0a0a0a;
          color: #f0ebe0;
          font-family: Georgia, "Times New Roman", serif;
          line-height: 1.6;
        }
        a { color: inherit; text-decoration: none; }
      `}</style>

      <style jsx>{`
        .nav {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 28px;
          background: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(240, 235, 224, 0.08);
        }
        .logo {
          font-size: 19px; font-weight: bold; letter-spacing: 0.5px;
          color: ${ACCENT};
        }
        .nav-links { display: flex; gap: 26px; }
        .nav-links a {
          font-family: system-ui, sans-serif; font-size: 13px;
          text-transform: uppercase; letter-spacing: 1px; opacity: 0.8;
        }
        .nav-links a:hover { opacity: 1; color: ${ACCENT}; }
        .shop-btn {
          font-family: system-ui, sans-serif; font-size: 13px; letter-spacing: 1px;
          text-transform: uppercase;
          background: ${ACCENT}; color: #fff;
          padding: 9px 20px; border-radius: 999px;
        }
        .shop-btn:hover { opacity: 0.9; }

        .hero {
          position: relative; min-height: 90vh;
          display: flex; align-items: center;
          background: url(${HERO_IMG}) center/cover no-repeat;
        }
        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.6) 55%, rgba(10,10,10,0.3) 100%);
        }
        .hero-content { position: relative; max-width: 640px; padding: 0 28px; }
        .eyebrow {
          font-family: system-ui, sans-serif; text-transform: uppercase;
          letter-spacing: 3px; font-size: 12px; color: ${ACCENT}; margin-bottom: 18px;
        }
        .hero h1 { font-size: clamp(38px, 7vw, 72px); line-height: 1.05; margin-bottom: 20px; }
        .hero-sub { font-size: 19px; opacity: 0.85; margin-bottom: 30px; }
        .cta {
          display: inline-block; font-family: system-ui, sans-serif;
          text-transform: uppercase; letter-spacing: 1.5px; font-size: 14px;
          background: ${ACCENT}; color: #fff; padding: 14px 32px; border-radius: 999px;
        }
        .cta:hover { opacity: 0.9; }

        .section { max-width: 1140px; margin: 0 auto; padding: 84px 28px; }
        .section h2 {
          font-size: clamp(28px, 4vw, 40px); margin-bottom: 40px; text-align: center;
        }
        .section h2:after {
          content: ""; display: block; width: 56px; height: 3px;
          background: ${ACCENT}; margin: 16px auto 0;
        }

        .gallery {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
        }
        .gtile { position: relative; overflow: hidden; border-radius: 8px; }
        .gtile img {
          width: 100%; height: 240px; object-fit: cover; display: block;
          transition: transform 0.5s ease;
        }
        .gtile:hover img { transform: scale(1.06); }
        .gtile figcaption {
          position: absolute; left: 0; right: 0; bottom: 0;
          font-family: system-ui, sans-serif; font-size: 13px;
          padding: 22px 14px 12px; color: #fff;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
        }

        .menu { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .card {
          background: #141414; border: 1px solid rgba(240,235,224,0.07);
          border-radius: 10px; overflow: hidden; display: flex; flex-direction: column;
        }
        .card-img { height: 180px; background-size: cover; background-position: center; }
        .card-body { padding: 20px; }
        .card-head { display: flex; justify-content: space-between; align-items: baseline; gap: 10px; }
        .card-head h3 { font-size: 19px; }
        .price { color: ${ACCENT}; font-weight: bold; white-space: nowrap; }
        .card-body p { font-size: 15px; opacity: 0.8; margin-top: 8px; }

        .about-grid {
          display: grid; grid-template-columns: 1.6fr 1fr; gap: 48px; align-items: start;
        }
        .about-grid p { font-size: 17px; opacity: 0.9; margin-bottom: 18px; }
        .values { list-style: none; display: grid; gap: 18px; }
        .values li {
          border-left: 3px solid ${ACCENT}; padding-left: 16px;
          display: flex; flex-direction: column;
        }
        .values strong { font-size: 17px; }
        .values span { font-family: system-ui, sans-serif; font-size: 14px; opacity: 0.7; }

        .locations { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .loc {
          background: #141414; border: 1px solid rgba(240,235,224,0.07);
          border-radius: 10px; padding: 24px;
        }
        .loc-city {
          font-family: system-ui, sans-serif; text-transform: uppercase;
          letter-spacing: 2px; font-size: 11px; color: ${ACCENT};
        }
        .loc h3 { font-size: 20px; margin: 8px 0 6px; }
        .loc p { font-family: system-ui, sans-serif; font-size: 14px; opacity: 0.75; }

        .social { text-align: center; }
        .social-links { display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; }
        .social-links a {
          font-family: system-ui, sans-serif; text-transform: uppercase; letter-spacing: 1.5px;
          font-size: 13px; border: 1px solid ${ACCENT}; color: ${ACCENT};
          padding: 12px 26px; border-radius: 999px;
        }
        .social-links a:hover { background: ${ACCENT}; color: #fff; }

        .footer {
          text-align: center; padding: 50px 28px;
          border-top: 1px solid rgba(240,235,224,0.08);
        }
        .footer-logo { font-size: 22px; color: ${ACCENT}; margin-bottom: 8px; }
        .footer p { font-family: system-ui, sans-serif; font-size: 14px; opacity: 0.7; }

        @media (max-width: 860px) {
          .nav-links { display: none; }
          .gallery, .menu, .locations { grid-template-columns: 1fr 1fr; }
          .about-grid { grid-template-columns: 1fr; gap: 32px; }
        }
        @media (max-width: 560px) {
          .gallery, .menu, .locations { grid-template-columns: 1fr; }
          .section { padding: 56px 20px; }
        }
      `}</style>
    </div>
  );
}
