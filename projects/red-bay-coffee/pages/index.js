import Head from 'next/head';

const HERO = 'https://i.shgcdn.com/f575f8a3-50aa-4a62-9dad-9b3ff95065b0/-/format/auto/-/preview/3000x3000/-/quality/lighter/';

const GALLERY = [
  { src: 'https://i.shgcdn.com/73260de0-c83c-46c8-8e16-669a51b2e7d5/-/format/auto/-/preview/3000x3000/-/quality/lighter/', alt: 'Red Bay Coffee roasting beautiful coffee at the Oakland Roastery' },
  { src: 'https://i.shgcdn.com/ecc9beb8-374d-478a-890f-8c2aed68873f/-/format/auto/-/preview/3000x3000/-/quality/lighter/', alt: 'A Red Bay Coffee cafe bringing beautiful coffee to the community' },
  { src: 'https://i.shgcdn.com/4aa070c9-1d00-4da8-98ce-1539149d4257/-/format/auto/-/preview/3000x3000/-/quality/lighter/', alt: 'Inside a Red Bay Coffee cafe in the Bay Area' },
  { src: 'https://i.shgcdn.com/a02978dc-9fb1-46b1-a8b7-9d590fabfb51/-/format/auto/-/preview/3000x3000/-/quality/lighter/', alt: 'Red Bay Coffee&rsquo;s B Corp commitment to farmers and sustainability' },
  { src: 'https://www.redbaycoffee.com/cdn/shop/files/coffee-2_720x.jpg?v=1651867173', alt: 'Direct trade coffee cherries from a Red Bay farm partner' },
  { src: 'https://www.redbaycoffee.com/cdn/shop/files/coffees_1728x_1a0acf80-0b97-4d1d-bbf2-e0086b7e6676_720x.jpg?v=1713096825', alt: 'A spread of freshly roasted Red Bay Coffee whole-bean bags' },
];

const ABOUT_IMG = 'https://cdn.shopify.com/s/files/1/1465/6106/files/920x1240_large.jpg?v=1521142065';

const MENU = [
  { name: 'East Fourteenth', origin: 'Single Origin · Tanzania · Dark Roast', desc: 'One of the coffees that defined Red Bay from the very beginning — a bold, comforting dark roast built for a full-bodied cup with deep sweetness and smooth balance. Sourced through Sweet Unity Farms in Tanzania.', notes: 'Blackberry, Dark Chocolate, Date', price: '$19.88' },
  { name: 'Coltrane', origin: 'Single Origin · Colombia · Medium Roast', desc: 'A tribute to John Coltrane’s artistry: rich dark chocolate meeting bright citrus, with a mellow, sugary sweetness and luxuriously smooth body. Grown by farmers cultivating in harmony with their land.', notes: 'Orange, Nectarine, Chocolate', price: '$19.88' },
  { name: 'Brazilian Cake Lady', origin: 'Single Origin · Mantiqueira de Minas, Brazil · Medium Roast', desc: 'Smooth and full-bodied with a delicate, crisp acidity. Each sip unveils juicy tropical fruit and a nutty, dessert-like finish. Mundo Novo cultivar, naturally processed, from a protected-origin region.', notes: 'Lychee, Honeydew, Nougat', price: '$19.88' },
  { name: 'Fight The Power', origin: 'Espresso Blend · Papua New Guinea + Peru · Hero Collection', desc: 'A bold, expressive espresso blend from the Red Bay Hero Collection, honoring legacy, resistance and the fight for a better tomorrow. Peru brings clean structure; Papua New Guinea adds depth and a rounded cocoa finish.', notes: 'Passionfruit, Brown Sugar, Toffee', price: '$21.07' },
  { name: 'This Is America', origin: 'Single Origin · Honduras · Dark Roast · Hero Collection', desc: 'A deep, full-bodied dark roast that speaks to legacy, resilience and pride — smoky, sweet and layered. Sourced from over 100 smallholder producers on the misty slopes of Santa Barbara Mountain.', notes: 'Plum, Almond, S’mores', price: '$20.92' },
  { name: 'Slow Burn', origin: 'Blend · Brazil + Indonesia · Dark / Espresso Roast', desc: 'A bold yet layered cup blending the earthy spice of Indonesia with the natural sweetness of Brazil. Full and velvety with low, smooth acidity — comforting and adventurous in equal measure.', notes: 'Mission Fig, Molasses, Allspice', price: '$19.88' },
];

const LOCATIONS = [
  { name: 'Grand Ave', addr: '3206 Grand Ave., Oakland, CA 94610', note: 'Oakland · Grand Lake', desc: 'A neighborhood cafe in Grand Lake serving beautiful coffee and community daily. Open 7am–5pm.' },
  { name: 'Ferry Building', addr: '1 Ferry Building, Shop 46, San Francisco, CA 94111', note: 'San Francisco · Embarcadero', desc: 'Our cafe inside San Francisco’s iconic Ferry Building marketplace. Open 7am–6pm.' },
  { name: 'Montgomery St.', addr: '220 Montgomery St., San Francisco, CA 94104', note: 'San Francisco · Financial District', desc: 'A downtown cafe fueling the Financial District. Mon–Fri 7am–4pm, Sat 8:30am–2pm.' },
  { name: 'Alcatraz', addr: '1741 Alcatraz Ave, Berkeley, CA 94703', note: 'Berkeley', desc: 'Our Berkeley cafe on Alcatraz Ave. Wed–Mon 7:30am–4pm, Tues 7:30am–5pm.' },
  { name: 'California St.', addr: '650 California St., San Francisco, CA 94108', note: 'San Francisco · Hartford Building', desc: 'A cafe in the Hartford Building on California St. Tues–Thurs 7am–2pm.' },
  { name: 'The Roastery', addr: '3098 East 10th St., Oakland, CA 94601', note: 'Oakland · Fruitvale', desc: 'Where every Red Bay coffee is roasted, in the Fruitvale district. Selling coffee beans only.' },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Red Bay Coffee &mdash; Beautiful Coffee to the People &middot; Oakland, CA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Red Bay Coffee is an Oakland-based, Black-owned specialty coffee roaster founded in 2014 by Keba Konte. Direct-trade beans, six Bay Area cafes, and beautiful coffee to the people." />
      </Head>

      <nav className="nav">
        <a className="logo" href="#top">RED BAY</a>
        <div className="links">
          <a href="#gallery">Cafes</a>
          <a href="#menu">Coffee</a>
          <a href="#about">Our Story</a>
          <a href="#locations">Locations</a>
        </div>
        <a className="shop" href="https://www.redbaycoffee.com/collections/coffee" target="_blank" rel="noopener noreferrer">Shop</a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow">Oakland, California &middot; Black-Owned Roaster &amp; Cafe &middot; Since 2014</p>
          <h1>Beautiful coffee<br />to the people.</h1>
          <p className="sub">Red Bay Coffee is an Oakland-based, Black-owned specialty roaster founded by artist and entrepreneur Keba Konte &mdash; sourcing direct-trade beans, paying farmers fairly, and building a more inclusive coffee industry, one cup at a time.</p>
          <a className="cta" href="#menu">Explore Our Coffee</a>
        </div>
      </header>

      <section id="gallery" className="section">
        <h2>Rooted in Oakland</h2>
        <p className="lead">From our Fruitvale roastery to six cafes across Oakland, Berkeley and San Francisco &mdash; vibrant spaces built for great coffee, community and connection.</p>
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
        <p className="lead">Direct-trade, small-batch coffees roasted in Oakland &mdash; single origins and signature blends, each one made with intention.</p>
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
          <p>Red Bay Coffee was founded in 2014 by Keba Konte, a renowned local artist and food entrepreneur, in a converted garden shed in Oakland&rsquo;s Fruitvale district &mdash; a space he affectionately calls the &ldquo;Coffee Dojo.&rdquo; From those small-batch beginnings, Red Bay set out to bring the best and most beautiful coffee to the people.</p>
          <p>We roast direct-trade coffee sourced from Sweet Unity Farms in Tanzania, CENCOIC in Colombia, and smallholder cooperatives across Latin America and Africa &mdash; paying producers more than double the market price. As a certified B Corp, we source responsibly, build sustainable partnerships, and hire people too often left out of specialty coffee.</p>
          <p>We believe coffee should be a vehicle for inclusion, social and economic empowerment, entrepreneurship and environmental sustainability. A multiple-time Golden Bean medalist, Red Bay is a flagship of the fourth wave of coffee &mdash; one that puts equity, ownership and community at the center of every cup.</p>
        </div>
        <div className="about-img">
          <img src={ABOUT_IMG} alt="Red Bay Coffee founder Keba Konte and the craft of roasting beautiful coffee" loading="lazy" />
        </div>
      </section>

      <section id="locations" className="section alt">
        <h2>Locations</h2>
        <p className="lead">Six cafes serving the Bay Area &mdash; visit Red Bay in Oakland, Berkeley or San Francisco for beautiful coffee and genuine hospitality.</p>
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
        <h2>Follow Red Bay</h2>
        <div className="social-links">
          <a href="https://www.instagram.com/redbaycoffee/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/redbaycoffee/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com/redbaycoffee" target="_blank" rel="noopener noreferrer">X / Twitter</a>
          <a href="https://www.youtube.com/channel/UCQrO8Oi0prFYpypc31zp3MA" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://www.redbaycoffee.com" target="_blank" rel="noopener noreferrer">redbaycoffee.com</a>
        </div>
      </section>

      <footer className="footer">
        <p className="f-logo">RED BAY COFFEE</p>
        <p>Oakland, California &middot; Black-owned specialty roaster &middot; Beautiful coffee to the people since 2014</p>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #100b06;
          color: #f5ede0;
          font-family: Georgia, 'Times New Roman', serif;
          line-height: 1.6;
        }
        a { color: inherit; text-decoration: none; }
        .nav {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 32px;
          background: rgba(16,11,6,0.9);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(240,193,66,0.32);
        }
        .logo { font-weight: bold; letter-spacing: 3px; font-size: 24px; color: #f0c142; font-family: -apple-system, system-ui, sans-serif; }
        .links { display: flex; gap: 28px; font-family: -apple-system, system-ui, sans-serif; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; }
        .links a:hover { color: #f0c142; }
        .shop {
          font-family: -apple-system, system-ui, sans-serif; font-size: 13px;
          text-transform: uppercase; letter-spacing: 1px;
          border: 1px solid #f0c142; color: #f0c142;
          padding: 8px 18px; border-radius: 2px; transition: .2s;
        }
        .shop:hover { background: #f0c142; color: #17100a; }
        .hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 0 24px;
          background: url('${HERO}') center/cover no-repeat fixed;
        }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(14,9,5,0.55), rgba(14,9,5,0.93)); }
        .hero-inner { position: relative; max-width: 820px; }
        .eyebrow { font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 4px; font-size: 13px; color: #f0c142; margin-bottom: 18px; }
        .hero h1 { font-size: 58px; line-height: 1.05; margin-bottom: 22px; }
        .hero .sub { font-size: 19px; color: #ece1d0; max-width: 660px; margin: 0 auto 32px; }
        .cta {
          display: inline-block; background: #f0c142; color: #17100a;
          font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase;
          letter-spacing: 1.5px; font-size: 14px; padding: 15px 38px; border-radius: 2px; transition: .2s; font-weight: 600;
        }
        .cta:hover { background: #d4a72c; }
        .section { padding: 90px 32px; max-width: 1200px; margin: 0 auto; }
        .section.alt { background: #17100a; max-width: none; }
        .section.alt > * { max-width: 1200px; margin-left: auto; margin-right: auto; }
        .section h2 { font-size: 40px; text-align: center; margin-bottom: 14px; }
        .section h2::after { content: ''; display: block; width: 56px; height: 3px; background: #f0c142; margin: 16px auto 0; }
        .lead, .section .lead { text-align: center; color: #b3a390; font-style: italic; margin-bottom: 44px; }
        .gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 44px; }
        .g-item { overflow: hidden; border-radius: 4px; aspect-ratio: 4/3; }
        .g-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; display: block; }
        .g-item:hover img { transform: scale(1.07); }
        .menu { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .m-item { border: 1px solid #2c2216; border-left: 3px solid #f0c142; padding: 22px 24px; border-radius: 3px; background: #130d08; }
        .m-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
        .m-item h3 { font-size: 21px; margin-bottom: 4px; letter-spacing: 0.5px; }
        .m-item .price { color: #f0c142; font-family: -apple-system, system-ui, sans-serif; font-size: 15px; font-weight: 600; white-space: nowrap; }
        .m-origin { color: #c99a3f; font-family: -apple-system, system-ui, sans-serif; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px; }
        .m-item p { color: #b3a390; font-size: 16px; }
        .m-item .m-notes { color: #d8bd88; font-family: -apple-system, system-ui, sans-serif; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; margin-top: 10px; }
        .about { display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: center; }
        .about h2 { text-align: left; }
        .about h2::after { margin-left: 0; }
        .about-text p { margin-bottom: 16px; font-size: 18px; color: #ece1d0; }
        .about-img img { width: 100%; border-radius: 6px; display: block; }
        .locations { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 44px; }
        .l-item { background: #130d08; border: 1px solid #2c2216; padding: 24px; border-radius: 4px; }
        .l-item h3 { color: #f0c142; font-size: 18px; margin-bottom: 6px; font-family: -apple-system, system-ui, sans-serif; }
        .l-item .l-note { color: #c99a3f; font-size: 13px; font-style: italic; margin-bottom: 8px; }
        .l-item .l-desc { color: #94826d; font-size: 14px; margin-top: 10px; }
        .l-item p { color: #b3a390; }
        .social { text-align: center; }
        .social-links { display: flex; justify-content: center; gap: 22px; flex-wrap: wrap; margin-top: 30px; font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; }
        .social-links a { border: 1px solid #382b1b; padding: 12px 26px; border-radius: 2px; transition: .2s; }
        .social-links a:hover { border-color: #f0c142; color: #f0c142; }
        .footer { text-align: center; padding: 50px 24px; border-top: 1px solid #241a10; background: #0a0603; }
        .f-logo { font-family: -apple-system, system-ui, sans-serif; letter-spacing: 2px; color: #f0c142; font-weight: bold; margin-bottom: 8px; font-size: 18px; }
        .footer p { color: #90836f; font-size: 14px; }
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
