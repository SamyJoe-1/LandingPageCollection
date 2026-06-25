import Head from 'next/head';

const HERO = 'https://www.blackwhiteroasters.com/cdn/shop/files/3Z5A7353_copy.jpg?v=1685122034&width=1600';

const GALLERY = [
  { src: 'https://www.blackwhiteroasters.com/cdn/shop/files/DTR1.jpg?v=1707857052&width=1080', alt: 'Inside the downtown Raleigh cafe at the Videri Chocolate Factory, with tables of guests beneath market lights and a hanging disco ball in a warehouse-style space' },
  { src: 'https://www.blackwhiteroasters.com/cdn/shop/files/DTR2.jpg?v=1707857068&width=1080', alt: 'The outdoor courtyard of the downtown Raleigh cafe with a brightly colored geometric design painted on the ground and multicolored metal chairs' },
  { src: 'https://www.blackwhiteroasters.com/cdn/shop/files/WaFo1.jpg?v=1707857032&width=1080', alt: 'Inside the Wake Forest cafe with a layered, simple-color mountain mural on the wall and white walls lined with tables of customers' },
  { src: 'https://www.blackwhiteroasters.com/cdn/shop/files/WaFo2.jpg?v=1707858624&width=1080', alt: 'The view from inside the Wake Forest cafe through a large glass window painted with a gold ampersand, above an espresso machine and glassware' },
  { src: 'https://www.blackwhiteroasters.com/cdn/shop/files/DSCF7135_4ed16aad-aad4-4518-80af-40b6b1186d56.jpg?v=1740685785&width=1600', alt: 'Two coffee professionals cupping a table of coffees served in shallow bowls at Black & White Coffee Roasters' },
  { src: 'https://www.blackwhiteroasters.com/cdn/shop/files/3Z5A7540_copy.jpg?v=1685122113&width=1600', alt: 'Coffee being roasted in a large tray, with roasted beans in the tray and unroasted green coffee in the sight glass' },
];

const ABOUT_IMG = 'https://www.blackwhiteroasters.com/cdn/shop/files/WareRoast1.jpg?v=1707858243&width=1080';

const MENU = [
  { name: 'Elto Bare — Natural', origin: 'Bare, Sidama, Ethiopia', desc: 'One of the cleanest naturals you will ever come by, brimming with complex citrus, stone fruit and raspberry. Sweet and smooth like milk chocolate, with a long, tea-like finish of peach iced tea.', price: 'From $28' },
  { name: 'Wilton Benitez — Ultrasonic SL28', origin: 'Piendamó, Cauca, Colombia', desc: 'A mind-bending ultrasonic natural from a chemical-engineer-turned-coffee-pioneer. Funky like tepache and tropical like a mango smoothie, with a boozy amaretto sweetness reminiscent of natural wine.', price: 'From $18.25' },
  { name: 'Arturo Paz — Itacayo Gesha', origin: 'El Sauce, Santa Barbara, Honduras', desc: 'A delicate washed Gesha from the unsung hero of the Paz family. Floral and tropical like gardenia and mango, sipping like oolong tea served alongside a crisp vanilla cookie.', price: 'From $28' },
  { name: 'Bombe — Honey', origin: 'Bensa, Sidama, Ethiopia', desc: 'A stunning honey-processed lot from Cup of Excellence winners Alo Coffee. Quite floral, like white flowers, with yellow fruit notes of mango and nectarine and an oolong-and-lemon-zest finish.', price: 'From $28' },
  { name: 'Boutet — Natural Gesha', origin: 'Boquete, Panama', desc: 'A storied natural Gesha grown at La Victoria Estate and processed by the Lamastus family at neighboring Elida. Floral and citrusy like bergamot, sipping like black tea packed with peaches and plums.', price: 'From $18.25' },
  { name: 'Benjamin Paz — La Salsa SL28', origin: 'El Cedral, Santa Barbara, Honduras', desc: 'A delicate, beautiful washed coffee from a multiple-time Honduras Cup of Excellence winner. White flowers and sticky-sweet panela sugar, with vibrant grapefruit acidity and a rare note of black currant.', price: 'From $18.25' },
];

const LOCATIONS = [
  { name: 'Downtown Cafe', addr: '327 W Davie St, Raleigh, NC', note: 'Mon–Fri 8AM–6PM · Sat 9AM–6PM · Sun 9AM–3PM', desc: 'Our second location, tucked inside the Videri Chocolate Factory in downtown Raleigh — great coffee and great chocolate under one roof, with free parking that is hard to come by downtown.' },
  { name: 'Wake Forest Cafe', addr: '314 S Brooks St, Wake Forest, NC', note: 'Mon–Sat 7AM–6PM · Sun 9AM–3PM', desc: 'Our very first cafe and previous roasting space, where it all began — a bright room with a layered mountain mural and a gold ampersand on the window.' },
  { name: 'Roastery & Warehouse', addr: 'Raleigh, North Carolina', note: 'Closed to the public', desc: 'Where we roast every Monday, Tuesday, Thursday and Friday, beneath a graffiti mural shaped like coffee leaves. Events held here are by invitation only.' },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Black &amp; White Coffee Roasters &mdash; Raleigh, North Carolina</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Black &amp; White Coffee Roasters &mdash; a specialty coffee roaster and cafe in Raleigh, North Carolina. Founded in 2017 by US Barista Champions Kyle Ramage and Lem Butler. If It Tastes Good, It Is Good." />
      </Head>

      <nav className="nav">
        <a className="logo" href="#top">B&amp;W</a>
        <div className="links">
          <a href="#gallery">Caf&eacute;s</a>
          <a href="#menu">Coffee</a>
          <a href="#about">Our Story</a>
          <a href="#locations">Locations</a>
        </div>
        <a className="shop" href="https://www.blackwhiteroasters.com/collections/all-coffee" target="_blank" rel="noopener noreferrer">Shop</a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow">Raleigh, North Carolina &middot; Specialty Roaster &amp; Caf&eacute; &middot; Since 2017</p>
          <h1>If It Tastes Good,<br />It Is Good.</h1>
          <p className="sub">Black &amp; White is unapologetically committed to connecting people to the most interesting and captivating coffees we can find &mdash; born from two US Barista Champions and roasted in Raleigh.</p>
          <a className="cta" href="#menu">Explore Our Coffee</a>
        </div>
      </header>

      <section id="gallery" className="section">
        <h2>Exceptional Coffee, Curious People</h2>
        <p className="lead">From a disco-lit cafe at the Videri Chocolate Factory to our first home in Wake Forest &mdash; this is Black &amp; White across North Carolina.</p>
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
        <p className="lead">A rotating list of rare, remarkable single origins &mdash; pushing the envelope of what specialty coffee should be and how it should taste.</p>
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
          <p>Black &amp; White Coffee Roasters is the brainchild of two US Barista Champions. Founded in 2017, Kyle Ramage and Lem Butler were inspired by the coffee they experienced at the competitive level and wanted to make those coffees as widely available as possible.</p>
          <p>At B&amp;W, we strive to be more than just a quality coffee roaster &mdash; we hope to challenge ourselves and our customers to push the envelope of what specialty coffee should be and how it should taste.</p>
          <p>We are guided by three core values: Service, Community and Excellence. We carry an attitude of hospitality into every interaction, we honor the community that makes this journey possible, and we relentlessly fine-tune the execution of our craft.</p>
        </div>
        <div className="about-img">
          <img src={ABOUT_IMG} alt="The Black & White roasting facility in Raleigh, with a brightly colored mural shaped like coffee leaves and coffee roasting machines on the floor" loading="lazy" />
        </div>
      </section>

      <section id="locations" className="section alt">
        <h2>Locations</h2>
        <p className="lead">Two cafes across the Triangle, plus the Raleigh roastery where every bean is roasted.</p>
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
        <h2>Follow Black &amp; White</h2>
        <div className="social-links">
          <a href="https://www.instagram.com/blackwhiteroasters/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.youtube.com/c/BlackWhiteCoffeeRoasters" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://www.blackwhiteroasters.com" target="_blank" rel="noopener noreferrer">blackwhiteroasters.com</a>
        </div>
      </section>

      <footer className="footer">
        <p className="f-logo">BLACK &amp; WHITE COFFEE ROASTERS</p>
        <p>Raleigh, North Carolina &middot; Specialty roaster &amp; caf&eacute; &middot; If it tastes good, it is good.</p>
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
        .logo { font-weight: bold; letter-spacing: 1px; font-size: 24px; color: #ffffff; font-family: -apple-system, system-ui, sans-serif; }
        .links { display: flex; gap: 28px; font-family: -apple-system, system-ui, sans-serif; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; }
        .links a:hover { color: #ffffff; opacity: .7; }
        .shop {
          font-family: -apple-system, system-ui, sans-serif; font-size: 13px;
          text-transform: uppercase; letter-spacing: 1px;
          border: 1px solid #f4f4f2; color: #f4f4f2;
          padding: 8px 18px; border-radius: 2px; transition: .2s;
        }
        .shop:hover { background: #f4f4f2; color: #0b0b0b; }
        .hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 0 24px;
          background: url('${HERO}') center/cover no-repeat fixed;
        }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(11,11,11,0.55), rgba(11,11,11,0.9)); }
        .hero-inner { position: relative; max-width: 820px; }
        .eyebrow { font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 4px; font-size: 13px; color: #ffffff; margin-bottom: 18px; }
        .hero h1 { font-size: 58px; line-height: 1.05; margin-bottom: 22px; }
        .hero .sub { font-size: 19px; color: #e3e0d9; max-width: 640px; margin: 0 auto 32px; }
        .cta {
          display: inline-block; background: #f4f4f2; color: #0b0b0b;
          font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase;
          letter-spacing: 1.5px; font-size: 14px; padding: 15px 38px; border-radius: 2px; transition: .2s; font-weight: 600;
        }
        .cta:hover { background: #cfcfca; }
        .section { padding: 90px 32px; max-width: 1200px; margin: 0 auto; }
        .section.alt { background: #131313; max-width: none; }
        .section.alt > * { max-width: 1200px; margin-left: auto; margin-right: auto; }
        .section h2 { font-size: 40px; text-align: center; margin-bottom: 14px; }
        .section h2::after { content: ''; display: block; width: 56px; height: 3px; background: #f4f4f2; margin: 16px auto 0; }
        .lead, .section .lead { text-align: center; color: #a7a59e; font-style: italic; margin-bottom: 44px; }
        .gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 44px; }
        .g-item { overflow: hidden; border-radius: 4px; aspect-ratio: 4/3; }
        .g-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; display: block; }
        .g-item:hover img { transform: scale(1.07); }
        .menu { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .m-item { border: 1px solid #262626; border-left: 3px solid #f4f4f2; padding: 22px 24px; border-radius: 3px; background: #101010; }
        .m-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
        .m-item h3 { font-size: 21px; margin-bottom: 4px; letter-spacing: 0.5px; }
        .m-item .price { color: #ffffff; font-family: -apple-system, system-ui, sans-serif; font-size: 15px; font-weight: 600; white-space: nowrap; }
        .m-origin { color: #8f8d86; font-family: -apple-system, system-ui, sans-serif; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px; }
        .m-item p { color: #a7a59e; font-size: 16px; }
        .about { display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: center; }
        .about h2 { text-align: left; }
        .about h2::after { margin-left: 0; }
        .about-text p { margin-bottom: 16px; font-size: 18px; color: #e3e0d9; }
        .about-img img { width: 100%; border-radius: 6px; display: block; }
        .locations { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 44px; }
        .l-item { background: #101010; border: 1px solid #262626; padding: 24px; border-radius: 4px; }
        .l-item h3 { color: #ffffff; font-size: 18px; margin-bottom: 6px; font-family: -apple-system, system-ui, sans-serif; }
        .l-item .l-note { color: #8f8d86; font-size: 13px; font-style: italic; margin-bottom: 8px; }
        .l-item .l-desc { color: #777570; font-size: 14px; margin-top: 10px; }
        .l-item p { color: #a7a59e; }
        .social { text-align: center; }
        .social-links { display: flex; justify-content: center; gap: 22px; flex-wrap: wrap; margin-top: 30px; font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; }
        .social-links a { border: 1px solid #2f2f2f; padding: 12px 26px; border-radius: 2px; transition: .2s; }
        .social-links a:hover { border-color: #f4f4f2; color: #ffffff; }
        .footer { text-align: center; padding: 50px 24px; border-top: 1px solid #1f1f1f; background: #070707; }
        .f-logo { font-family: -apple-system, system-ui, sans-serif; letter-spacing: 2px; color: #ffffff; font-weight: bold; margin-bottom: 8px; font-size: 16px; }
        .footer p { color: #777570; font-size: 14px; }
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
