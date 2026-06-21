import Head from 'next/head';

const HERO = 'https://www.heartroasters.com/cdn/shop/files/HEART_BURNSIDE_CAFE-48_800x.jpg?v=1636174771';

const GALLERY = [
  { src: 'https://www.heartroasters.com/cdn/shop/files/HEART_BURNSIDE_CAFE-48_800x.jpg?v=1636174771', alt: 'The bright, minimal interior of Heart Coffee Roasters Burnside cafe in Portland, Oregon' },
  { src: 'https://www.heartroasters.com/cdn/shop/files/daysi-web_e6aabaea-999f-4915-8838-2494003171cc_1000x.jpg?v=1780943287', alt: 'Daysi Munoz, one of Heart Coffee Roasters Honduran producing partners' },
  { src: 'https://www.heartroasters.com/cdn/shop/files/NAYAWIRA_HEART_KENYA_DACOSTA-12_800x.jpg?v=1613542073', alt: 'A Heart Coffee farming partner standing among coffee plants in Nyeri, Kenya' },
  { src: 'https://www.heartroasters.com/cdn/shop/files/ABANA_HEART_ETHIOPIA_DACOSTA-67_800x.jpg?v=1613542018', alt: 'A producer holding two bags of ripe coffee cherries at the Abana site in Ethiopia' },
  { src: 'https://www.heartroasters.com/cdn/shop/files/kinto-cup_800x.jpg?v=1636002121', alt: 'A ceramic Kinto cup of freshly brewed Heart coffee' },
  { src: 'https://www.heartroasters.com/cdn/shop/files/Gray_pigeon_toe_800x.jpg?v=1613541366', alt: 'A handmade Pigeon Toe ceramics cup used at Heart Coffee Roasters' },
];

const ABOUT_IMG = 'https://www.heartroasters.com/cdn/shop/files/ABANA_HEART_ETHIOPIA_DACOSTA-115_800x.jpg?v=1613542075';

const MENU = [
  { name: 'Stereo Seasonal Blend', origin: '50% Honduras Los Andes · 50% Kenya Nyeri', desc: 'Heart’s flagship seasonal blend — cherry, sweet cream and fudge. A balanced, everyday cup built to shine on drip and espresso alike.', price: 'From $15.50' },
  { name: 'Ethiopia Habtamu Fikadu', origin: 'Yirgacheffe, Ethiopia', desc: 'Honeydew, apricot and lilac. Fully washed and grown at 2,000m from the Kurume, Dega and Wolisho varieties — delicate, floral and bright.', price: 'From $20.00' },
  { name: 'Kenya Nyawira PB', origin: 'Nyeri, Kenya', desc: 'A peaberry lot from Heart’s long-standing Kenyan partners in Nyeri — the juicy, vibrant clarity Heart is known for.', price: 'From $20.00' },
  { name: 'Colombia Luz Divia Fierro', origin: 'Huila, Colombia', desc: 'A relationship-driven single origin from producer Luz Divia Fierro, sourced through years of direct partnership in Colombia.', price: 'From $22.00' },
  { name: 'Honduras Daysi Muñoz', origin: 'Honduras', desc: 'A bright, sweet single origin from producing partner Daysi Muñoz — one of the many growers Heart visits at origin each harvest.', price: 'From $20.00' },
  { name: 'Colombia Decaf San Agustín', origin: 'San Agustín, Colombia', desc: 'A naturally sweet decaf from San Agustín, processed to keep all the fruit clarity and none of the caffeine.', price: 'From $20.00' },
];

const LOCATIONS = [
  { name: 'Burnside', addr: '2211 E Burnside St, Portland, OR', note: 'Open 7am–3pm M–F · 8am–3pm weekends · 503-206-6602', desc: 'The original cafe and roasting facility — a bright, minimal, unplugged space (no WiFi by design) where every coffee is prepared with care.' },
  { name: 'Woodstock', addr: '5181 SE Woodstock Blvd, Portland, OR', note: 'Open 7am–3pm M–F · 8am–3pm weekends · 503-208-2710', desc: 'A neighborhood cafe in SE Portland serving the full Heart lineup of espresso, filter and whole-bean coffee.' },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Heart Coffee Roasters — Portland, Oregon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Heart Coffee Roasters — a cafe, roaster and bustling destination point in Portland, Oregon. Founded in 2009 by Rebekah and Wille Yli-Luoma on the idea that a great cup should highlight the distinct fruit flavors found in coffee." />
      </Head>

      <nav className="nav">
        <a className="logo" href="#top">HEART <span className="hh">&#10084;</span></a>
        <div className="links">
          <a href="#gallery">Caf&eacute;s</a>
          <a href="#menu">Coffee</a>
          <a href="#about">Our Story</a>
          <a href="#locations">Locations</a>
        </div>
        <a className="shop" href="https://www.heartroasters.com/collections/beans" target="_blank" rel="noopener noreferrer">Shop</a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow">Portland, Oregon &middot; Roaster &amp; Caf&eacute; &middot; Since 2009</p>
          <h1>A great cup,<br />full of fruit.</h1>
          <p className="sub">Heart is a caf&eacute;, roaster &amp; bustling destination point in Portland, Oregon &mdash; built on the idea that a great cup should highlight the distinct fruit flavors found in coffee.</p>
          <a className="cta" href="#menu">Explore Our Coffee</a>
        </div>
      </header>

      <section id="gallery" className="section">
        <h2>Our Caf&eacute;s &amp; Partners</h2>
        <p className="lead">Two Portland cafes and the producers behind the coffee &mdash; relationships built across Kenya, Ethiopia, Colombia and Honduras.</p>
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
        <p className="lead">Roasted evenly for clarity and sweetness &mdash; never labeled light, medium or dark. Seasonal offerings change with the harvest.</p>
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
          <p>Heart&rsquo;s doors opened in 2009 with the idea that a great cup should highlight the distinct fruit flavors that are found in coffee. Built from the love to innovate and create an exceptional coffee experience, Heart is owned and operated by Rebekah &amp; Wille Yli-Luoma.</p>
          <p>With two retail caf&eacute;s and a roasting facility in Portland, Oregon, Heart strives to provide a positive, comfortable, supportive and safe workplace &mdash; and to foster a community space welcoming all humans. You may notice the cafes have no WiFi: it&rsquo;s an intentional choice to support a more unplugged environment for guests.</p>
          <p>Over more than a decade, Heart has built direct relationships with producers in Kenya, Ethiopia, Colombia, Honduras, Mexico, Brazil and Guatemala &mdash; visiting farming partners throughout the year and buying coffee seasonally, at its peak. Each batch is roasted evenly for clarity and sweetness, tagged with a roast date and batch number, and tested for quality.</p>
        </div>
        <div className="about-img">
          <img src={ABOUT_IMG} alt="Heart Coffee Roasters direct-relationship sourcing in Ethiopia" loading="lazy" />
        </div>
      </section>

      <section id="locations" className="section alt">
        <h2>Locations</h2>
        <p className="lead">Two cafes in Portland, Oregon &mdash; open seven days a week.</p>
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
        <h2>Follow Heart</h2>
        <div className="social-links">
          <a href="https://www.instagram.com/heartroasters/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/HeartRoasters" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com/heartroasters" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://vimeo.com/user18324122/videos" target="_blank" rel="noopener noreferrer">Vimeo</a>
          <a href="https://www.heartroasters.com" target="_blank" rel="noopener noreferrer">heartroasters.com</a>
        </div>
      </section>

      <footer className="footer">
        <p className="f-logo">HEART COFFEE ROASTERS</p>
        <p>Portland, Oregon &middot; Caf&eacute;, roaster &amp; destination point &middot; Roasting fruit-forward coffee since 2009</p>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #0a0e0f;
          color: #eef5f6;
          font-family: Georgia, 'Times New Roman', serif;
          line-height: 1.6;
        }
        a { color: inherit; text-decoration: none; }
        .nav {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 32px;
          background: rgba(10,14,15,0.9);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(41,182,198,0.32);
        }
        .logo { font-weight: bold; letter-spacing: 4px; font-size: 19px; color: #2BB6C4; font-family: -apple-system, system-ui, sans-serif; }
        .logo .hh { color: #2BB6C4; }
        .links { display: flex; gap: 28px; font-family: -apple-system, system-ui, sans-serif; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; }
        .links a:hover { color: #2BB6C4; }
        .shop {
          font-family: -apple-system, system-ui, sans-serif; font-size: 13px;
          text-transform: uppercase; letter-spacing: 1px;
          border: 1px solid #2BB6C4; color: #2BB6C4;
          padding: 8px 18px; border-radius: 2px; transition: .2s;
        }
        .shop:hover { background: #2BB6C4; color: #0a0e0f; }
        .hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 0 24px;
          background: url('${HERO}') center/cover no-repeat fixed;
        }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(10,14,15,0.55), rgba(10,14,15,0.9)); }
        .hero-inner { position: relative; max-width: 820px; }
        .eyebrow { font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 4px; font-size: 13px; color: #2BB6C4; margin-bottom: 18px; }
        .hero h1 { font-size: 58px; line-height: 1.05; margin-bottom: 22px; }
        .hero .sub { font-size: 19px; color: #cfe1e3; max-width: 640px; margin: 0 auto 32px; }
        .cta {
          display: inline-block; background: #2BB6C4; color: #06292d;
          font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase;
          letter-spacing: 1.5px; font-size: 14px; padding: 15px 38px; border-radius: 2px; transition: .2s; font-weight: 600;
        }
        .cta:hover { background: #209aa6; }
        .section { padding: 90px 32px; max-width: 1200px; margin: 0 auto; }
        .section.alt { background: #0e1416; max-width: none; }
        .section.alt > * { max-width: 1200px; margin-left: auto; margin-right: auto; }
        .section h2 { font-size: 40px; text-align: center; margin-bottom: 14px; }
        .section h2::after { content: ''; display: block; width: 56px; height: 3px; background: #2BB6C4; margin: 16px auto 0; }
        .lead, .section .lead { text-align: center; color: #9bb3b6; font-style: italic; margin-bottom: 44px; }
        .gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 44px; }
        .g-item { overflow: hidden; border-radius: 4px; aspect-ratio: 4/3; }
        .g-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; display: block; }
        .g-item:hover img { transform: scale(1.07); }
        .menu { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .m-item { border: 1px solid #1c2628; border-left: 3px solid #2BB6C4; padding: 22px 24px; border-radius: 3px; background: #0a1112; }
        .m-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
        .m-item h3 { font-size: 21px; margin-bottom: 4px; letter-spacing: 0.5px; }
        .m-item .price { color: #2BB6C4; font-family: -apple-system, system-ui, sans-serif; font-size: 15px; font-weight: 600; white-space: nowrap; }
        .m-origin { color: #6f9498; font-family: -apple-system, system-ui, sans-serif; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px; }
        .m-item p { color: #9bb3b6; font-size: 16px; }
        .about { display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: center; }
        .about h2 { text-align: left; }
        .about h2::after { margin-left: 0; }
        .about-text p { margin-bottom: 16px; font-size: 18px; color: #cfe1e3; }
        .about-img img { width: 100%; border-radius: 6px; display: block; }
        .locations { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; margin-top: 44px; }
        .l-item { background: #0a1112; border: 1px solid #1c2628; padding: 24px; border-radius: 4px; }
        .l-item h3 { color: #2BB6C4; font-size: 18px; margin-bottom: 6px; font-family: -apple-system, system-ui, sans-serif; }
        .l-item .l-note { color: #6f9498; font-size: 13px; font-style: italic; margin-bottom: 8px; }
        .l-item .l-desc { color: #7f9a9d; font-size: 14px; margin-top: 10px; }
        .l-item p { color: #9bb3b6; }
        .social { text-align: center; }
        .social-links { display: flex; justify-content: center; gap: 22px; flex-wrap: wrap; margin-top: 30px; font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; }
        .social-links a { border: 1px solid #243032; padding: 12px 26px; border-radius: 2px; transition: .2s; }
        .social-links a:hover { border-color: #2BB6C4; color: #2BB6C4; }
        .footer { text-align: center; padding: 50px 24px; border-top: 1px solid #16201f; background: #05080a; }
        .f-logo { font-family: -apple-system, system-ui, sans-serif; letter-spacing: 3px; color: #2BB6C4; font-weight: bold; margin-bottom: 8px; }
        .footer p { color: #6e8285; font-size: 14px; }
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
          .logo { font-size: 15px; }
        }
      `}</style>
    </div>
  );
}
