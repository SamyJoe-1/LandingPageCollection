import Head from 'next/head';

const HERO = 'https://catandcloud.com/cdn/shop/files/EOSR1080.jpg?v=1720483116&width=3840';

const GALLERY = [
  { src: 'https://catandcloud.com/cdn/shop/files/Swift_0bd4c8e5-2395-4033-8c1f-949416291023.jpg?v=1683667575&width=1500', alt: 'The Swift St headquarters cafe of Cat & Cloud on the West Side of Santa Cruz' },
  { src: 'https://catandcloud.com/cdn/shop/files/Portola-Sept2024.jpg?v=1726178025&width=1500', alt: 'The original Cat & Cloud cafe on Portola Drive in Santa Cruz' },
  { src: 'https://catandcloud.com/cdn/shop/files/cc-aptos-1_1.jpg?v=1683667575&width=1500', alt: 'The Cat & Cloud cafe in Aptos near Nisene Marks State Park' },
  { src: 'https://catandcloud.com/cdn/shop/files/Abbott-1_2.jpg?v=1683667575&width=1500', alt: 'The Cat & Cloud cafe at Abbott Square in Downtown Santa Cruz' },
  { src: 'https://catandcloud.com/cdn/shop/files/EOSR0690.jpg?v=1722970689', alt: 'Imaginative toast plated at a Cat & Cloud cafe' },
  { src: 'https://catandcloud.com/cdn/shop/files/Pastry-case-1.jpg?v=1721322672', alt: 'The fresh pastry case at a Cat & Cloud cafe' },
];

const ABOUT_IMG = 'https://catandcloud.com/cdn/shop/files/IMG_4681.jpg?v=1750393222&width=3840';

const MENU = [
  { name: 'The Answer', origin: 'Signature Blend', desc: 'Our flagship everyday blend and the easy answer to the question of what to brew. Smooth, balanced and endlessly drinkable.', notes: 'Caramel · Berries · Chocolate', price: 'From $16.40' },
  { name: 'The Best Friends Blend', origin: 'Best Friends Club Blend', desc: 'The kind of coffee you would want to serve your best friend. $1 from every pound sold goes directly back to the producers we grow with.', notes: 'Sweet · Juicy · Complex', price: 'From $19.70' },
  { name: 'Night Shift', origin: 'Dark Roast Blend', desc: 'A richer, deeper roast built for the late hours and the dark-and-sweet crowd. Full bodied with real depth.', notes: 'Dark Chocolate · Full Bodied · Sweetness', price: 'From $16.70' },
  { name: 'Friend Zone Decaf', origin: 'Decaf Blend', desc: 'All of the flavor, none of the caffeine. A decaf with enough character to keep good company any time of day.', notes: 'Strawberry Jam · Cacao Nib · Molasses', price: 'From $17.40' },
  { name: 'Rwanda Kumbya', origin: 'Kumbya, Rwanda · Single Origin', desc: 'A bright, layered Rwandan single origin sourced through our Best Friends Club relationships.', notes: 'Blackberry · Kiwi · Wildflower Honey', price: 'From $24.20' },
  { name: 'Ethiopia Takele Mammo', origin: 'Ethiopia · Single Origin', desc: 'A delicate, fruit-forward Ethiopian coffee roasted to highlight its natural sweetness and floral lift.', notes: 'Dried Strawberry · Apricot · Rooibos', price: 'From $25.68' },
];

const LOCATIONS = [
  { name: 'Swift St', addr: '719 Swift St. Suite 56, Santa Cruz, CA 95060', note: 'West Side · HQ · Open Daily 6:30am–3pm', desc: 'Our headquarters and only full-kitchen cafe, next door to the roastery and training lab. Come for brunch and maybe a tour.' },
  { name: 'Portola', addr: '3600 Portola Drive, Santa Cruz, CA 95062', note: 'Eastside · Open Daily 6:30am–4pm', desc: 'Our OG cafe, opened in 2016. A true Santa Cruz classic.' },
  { name: 'Aptos', addr: '10 Parade St. STE A, Aptos, CA 95003', note: 'Aptos · Open Daily 6:30am–4pm', desc: 'Right next to Nisene Marks State Park with a stunning view of the ocean.' },
  { name: 'Abbott Square', addr: '725 Front St., Santa Cruz, CA 95060', note: 'Downtown · Open Daily 8am–7pm', desc: 'In the heart of Downtown Santa Cruz, surrounded by a market full of local restaurants.' },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cat &amp; Cloud Coffee &mdash; Santa Cruz, California</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Cat & Cloud Coffee — an independent specialty coffee roaster and four-cafe family in Santa Cruz, California. Founded in 2016. Inspiring connection by creating memorable experiences." />
      </Head>

      <nav className="nav">
        <a className="logo" href="#top">CAT &amp; CLOUD</a>
        <div className="links">
          <a href="#gallery">Caf&eacute;s</a>
          <a href="#menu">Coffee</a>
          <a href="#about">Our Story</a>
          <a href="#locations">Locations</a>
        </div>
        <a className="shop" href="https://catandcloud.com/collections/coffee" target="_blank" rel="noopener noreferrer">Shop</a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow">Santa Cruz, California &middot; Roaster &amp; Caf&eacute; &middot; Since 2016</p>
          <h1>Inspire connection,<br />one cup at a time.</h1>
          <p className="sub">Cat &amp; Cloud is an independent specialty coffee company and a family of four cafes across Santa Cruz County &mdash; roasted daily, built on hospitality, and made to leave you better than we found you.</p>
          <a className="cta" href="#menu">Explore Our Coffee</a>
        </div>
      </header>

      <section id="gallery" className="section">
        <h2>Four Caf&eacute;s, One Roastery</h2>
        <p className="lead">From the Swift St roastery on the West Side to Portola, Aptos and Abbott Square &mdash; wherever your day takes you, your favorite coffee is never too far away.</p>
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
        <p className="lead">Signature blends and rotating single origins, roasted daily in Santa Cruz and sourced through real relationships with the producers we grow with.</p>
        <div className="menu">
          {MENU.map((m) => (
            <div className="m-item" key={m.name}>
              <div className="m-head">
                <h3>{m.name}</h3>
                <span className="price">{m.price}</span>
              </div>
              <p className="m-origin">{m.origin}</p>
              <p className="m-notes">{m.notes}</p>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section about">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>Cat &amp; Cloud was created by three friends &mdash; Jared Truby, Chris Baca and Charles Jack &mdash; who believe that experiences and connection shape our lives. Every interaction, no matter how small, is an opportunity to leave someone better than we found them.</p>
          <p>We opened our first cafe in 2016 at 3600 Portola in Santa Cruz with eight team members and big dreams. Today we have grown into four cafes, a stand-alone roastery, and wholesale partners around the world &mdash; all sharing a passion for creating amazing experiences.</p>
          <p>Through our Best Friends Club, $1 from every pound of coffee we sell goes directly back into the lives of the producers we work with &mdash; a commitment to growing alongside the people who make our coffee possible.</p>
        </div>
        <div className="about-img">
          <img src={ABOUT_IMG} alt="The Cat & Cloud team and community in Santa Cruz" loading="lazy" />
        </div>
      </section>

      <section id="locations" className="section alt">
        <h2>Locations</h2>
        <p className="lead">Four cafes across Santa Cruz County, open every day.</p>
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
        <h2>Follow Cat &amp; Cloud</h2>
        <div className="social-links">
          <a href="https://www.instagram.com/catcloudcoffee/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.youtube.com/channel/UCkUiMEQASwOU25FWB-J85kQ" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://catandcloud.com" target="_blank" rel="noopener noreferrer">catandcloud.com</a>
        </div>
      </section>

      <footer className="footer">
        <p className="f-logo">CAT &amp; CLOUD COFFEE</p>
        <p>Santa Cruz, California &middot; Roaster &amp; caf&eacute; &middot; Inspiring connection since 2016</p>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #120d0a;
          color: #f5ede6;
          font-family: Georgia, 'Times New Roman', serif;
          line-height: 1.6;
        }
        a { color: inherit; text-decoration: none; }
        .nav {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 32px;
          background: rgba(18,13,10,0.9);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(216,106,54,0.32);
        }
        .logo { font-weight: bold; letter-spacing: 2px; font-size: 22px; color: #e07a3e; font-family: -apple-system, system-ui, sans-serif; }
        .links { display: flex; gap: 28px; font-family: -apple-system, system-ui, sans-serif; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; }
        .links a:hover { color: #e07a3e; }
        .shop {
          font-family: -apple-system, system-ui, sans-serif; font-size: 13px;
          text-transform: uppercase; letter-spacing: 1px;
          border: 1px solid #e07a3e; color: #e07a3e;
          padding: 8px 18px; border-radius: 2px; transition: .2s;
        }
        .shop:hover { background: #e07a3e; color: #1a0f08; }
        .hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 0 24px;
          background: url('${HERO}') center/cover no-repeat fixed;
        }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(15,9,5,0.5), rgba(15,9,5,0.92)); }
        .hero-inner { position: relative; max-width: 820px; }
        .eyebrow { font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 4px; font-size: 13px; color: #e07a3e; margin-bottom: 18px; }
        .hero h1 { font-size: 58px; line-height: 1.05; margin-bottom: 22px; }
        .hero .sub { font-size: 19px; color: #ecdccf; max-width: 660px; margin: 0 auto 32px; }
        .cta {
          display: inline-block; background: #e07a3e; color: #1a0f08;
          font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase;
          letter-spacing: 1.5px; font-size: 14px; padding: 15px 38px; border-radius: 2px; transition: .2s; font-weight: 600;
        }
        .cta:hover { background: #c4622c; }
        .section { padding: 90px 32px; max-width: 1200px; margin: 0 auto; }
        .section.alt { background: #19110b; max-width: none; }
        .section.alt > * { max-width: 1200px; margin-left: auto; margin-right: auto; }
        .section h2 { font-size: 40px; text-align: center; margin-bottom: 14px; }
        .section h2::after { content: ''; display: block; width: 56px; height: 3px; background: #e07a3e; margin: 16px auto 0; }
        .lead, .section .lead { text-align: center; color: #b39b89; font-style: italic; margin-bottom: 44px; }
        .gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 44px; }
        .g-item { overflow: hidden; border-radius: 4px; aspect-ratio: 4/3; }
        .g-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; display: block; }
        .g-item:hover img { transform: scale(1.07); }
        .menu { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .m-item { border: 1px solid #2c1d12; border-left: 3px solid #e07a3e; padding: 22px 24px; border-radius: 3px; background: #16100b; }
        .m-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
        .m-item h3 { font-size: 21px; margin-bottom: 4px; letter-spacing: 0.5px; }
        .m-item .price { color: #e07a3e; font-family: -apple-system, system-ui, sans-serif; font-size: 15px; font-weight: 600; white-space: nowrap; }
        .m-origin { color: #c08a5c; font-family: -apple-system, system-ui, sans-serif; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 6px; }
        .m-notes { color: #8f7763; font-family: -apple-system, system-ui, sans-serif; font-size: 12.5px; letter-spacing: 0.5px; margin-bottom: 10px; }
        .m-item p { color: #b39b89; font-size: 16px; }
        .about { display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: center; }
        .about h2 { text-align: left; }
        .about h2::after { margin-left: 0; }
        .about-text p { margin-bottom: 16px; font-size: 18px; color: #ecdccf; }
        .about-img img { width: 100%; border-radius: 6px; display: block; }
        .locations { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin-top: 44px; }
        .l-item { background: #16100b; border: 1px solid #2c1d12; padding: 24px; border-radius: 4px; }
        .l-item h3 { color: #e07a3e; font-size: 18px; margin-bottom: 6px; font-family: -apple-system, system-ui, sans-serif; }
        .l-item .l-note { color: #c08a5c; font-size: 13px; font-style: italic; margin-bottom: 8px; }
        .l-item .l-desc { color: #8f7763; font-size: 14px; margin-top: 10px; }
        .l-item p { color: #b39b89; }
        .social { text-align: center; }
        .social-links { display: flex; justify-content: center; gap: 22px; flex-wrap: wrap; margin-top: 30px; font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; }
        .social-links a { border: 1px solid #38271a; padding: 12px 26px; border-radius: 2px; transition: .2s; }
        .social-links a:hover { border-color: #e07a3e; color: #e07a3e; }
        .footer { text-align: center; padding: 50px 24px; border-top: 1px solid #241810; background: #0d0805; }
        .f-logo { font-family: -apple-system, system-ui, sans-serif; letter-spacing: 2px; color: #e07a3e; font-weight: bold; margin-bottom: 8px; font-size: 18px; }
        .footer p { color: #97826f; font-size: 14px; }
        @media (max-width: 1000px) {
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
          .logo { font-size: 18px; }
        }
      `}</style>
    </div>
  );
}
