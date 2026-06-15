import Head from 'next/head';

const HERO = 'https://counterculturecoffee.com/cdn/shop/files/mobile-banner.png?v=1685039159';

const GALLERY = [
  { src: 'https://counterculturecoffee.com/cdn/shop/files/Espressostep5_1.jpg?v=1715247409', alt: 'Espresso extraction into a cup on a Counter Culture brew bar' },
  { src: 'https://counterculturecoffee.com/cdn/shop/files/FPstep5_1.jpg?v=1715235129', alt: 'Pressing and pouring a French press of Counter Culture coffee' },
  { src: 'https://counterculturecoffee.com/cdn/shop/files/Espressostep1_1.jpg?v=1715247317', alt: 'Grinding fresh-roasted Counter Culture coffee for espresso' },
  { src: 'https://counterculturecoffee.com/cdn/shop/files/FPstep3_1.jpg?v=1715235082', alt: 'Adding hot water to ground coffee in a French press' },
  { src: 'https://counterculturecoffee.com/cdn/shop/files/Espressostep3_1.jpg?v=1715247357', alt: 'Tamping a level espresso bed before extraction' },
  { src: 'https://counterculturecoffee.com/cdn/shop/files/FPstep1_1.jpg?v=1715235029', alt: 'Weighing and grinding coffee medium-coarse for French press' },
];

const ABOUT_IMG = 'https://counterculturecoffee.com/cdn/shop/files/BigTrouble_Main.jpg?v=1749045429';

const MENU = [
  { name: 'Big Trouble', desc: 'Our best-selling year-round blend — caramel, nutty, and round. A medium-dark roast that adapts flawlessly to any brewing method.' },
  { name: 'Hologram', desc: 'A bright year-round blend with notes of fruity, milk chocolate, and syrupy sweetness. A medium roast and longtime customer favorite.' },
  { name: 'Apollo', desc: 'Organic year-round blend with citrus, floral, and silky character — a clean, balanced medium roast.' },
  { name: 'Forty-Six', desc: 'Organic dark roast blend — dark chocolate, sweet, and full-bodied for those who like a bolder cup.' },
  { name: 'Slow Motion – Decaf', desc: 'Organic decaf with molasses, cocoa, and a smooth finish — all the flavor, none of the caffeine.' },
  { name: 'Mountain Harvest', desc: 'Organic single-origin from Mount Elgon, Uganda — citrus, ginger, and molasses in a light roast.' },
  { name: 'La Golondrina', desc: 'Organic single-origin from Timbío, Colombia — milk chocolate, cherry, and nutty notes, light roast.' },
  { name: 'Mpemba', desc: 'Single-origin from Kayanza, Burundi — clementine, honey, and tea-like delicacy in a light roast.' },
];

const LOCATIONS = [
  { name: 'Durham — Roastery & HQ', addr: '812 Mallard Ave, Durham, NC 27701' },
  { name: 'Bay Area — Roastery & Training Center', addr: '1329 64th St, Emeryville, CA 94608' },
  { name: 'Asheville', addr: '178 Westwood Place, Unit A, Asheville, NC 28806' },
  { name: 'Charleston', addr: '85½ Spring St, Charleston, SC 29403' },
  { name: 'Los Angeles', addr: '1601 Griffith Park Blvd, Los Angeles, CA 90026' },
  { name: 'Miami', addr: '7450 N Miami Ave, Miami, FL 33150' },
  { name: 'Dallas', addr: '3333 Commerce St, Dallas, TX 75226' },
  { name: 'Chicago', addr: '177 North Ada, Unit 106, Chicago, IL 60607' },
  { name: 'Boston', addr: '374 Somerville Ave, Somerville, MA 02143' },
  { name: 'New York City', addr: '376 Broome St, New York, NY 10013' },
  { name: 'Atlanta', addr: '318 Cherokee Ave SE, Unit 104, Atlanta, GA 30312' },
  { name: 'Washington, DC', addr: '1781 Florida Ave NW, Suite F, Washington, DC 20009' },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Counter Culture Coffee — Coffee You Can Trust From Seed to Cup</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Counter Culture Coffee — a Durham, NC specialty coffee roaster sourcing exceptional single-origin and blended coffee since 1995. Certified B Corp, transparently traded, with twelve regional training centers nationwide." />
      </Head>

      <nav className="nav">
        <a className="logo" href="#top">COUNTER<span>CULTURE</span></a>
        <div className="links">
          <a href="#gallery">Gallery</a>
          <a href="#menu">Coffees</a>
          <a href="#about">Our Story</a>
          <a href="#locations">Training Centers</a>
        </div>
        <a className="shop" href="https://counterculturecoffee.com/collections/coffee" target="_blank" rel="noopener noreferrer">Shop</a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow">Durham, NC &middot; Est. 1995 &middot; Certified B Corp</p>
          <h1>Coffee you can trust<br />from seed to cup.</h1>
          <p className="sub">A specialty coffee roaster sourcing exceptional single-origin and blended coffees — transparently traded, sustainably sourced, and freshly roasted since 1995.</p>
          <a className="cta" href="#menu">Explore Our Coffees</a>
        </div>
      </header>

      <section id="gallery" className="section">
        <h2>The Craft</h2>
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
        <p className="lead">Year-round blends and seasonal single-origins — sustainably sourced and expertly roasted.</p>
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
          <p>In 1995, Brett Smith and Fred Houk founded Counter Culture Coffee after meeting at the UNC Kenan-Flagler Business School. Their first sale was a single bag of coffee to Pop&rsquo;s Trattoria in Durham, North Carolina.</p>
          <p>From the start, sustainability was the business model — not charity. In 2002 the Durham facility became the first organic-certified coffee roaster in North Carolina and hosted its first Friday morning public cupping, beginning the Tasting at Ten tradition that continues today. The company formalized Direct Trade in 2008 and published its first Transparency Report in 2009, setting an industry standard for responsible sourcing.</p>
          <p>Today Counter Culture is a Certified B Corporation, employee-owned through incentivized stock options, and offers more than 100 coffees a year. Through everyday commitments to quality, sustainability, education, and transparency, the mission stays the same: there is no finish line.</p>
        </div>
        <div className="about-img">
          <img src={ABOUT_IMG} alt="A bag of Counter Culture Coffee's best-selling Big Trouble blend" loading="lazy" />
        </div>
      </section>

      <section id="locations" className="section alt">
        <h2>Training Centers</h2>
        <p className="lead">Community hubs for coffee education across the country — join us for a public cupping every Friday at ten.</p>
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
        <h2>Follow Counter Culture</h2>
        <div className="social-links">
          <a href="https://www.instagram.com/counterculturecoffee/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/counterculturecoffee/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com/counter_culture" target="_blank" rel="noopener noreferrer">X / Twitter</a>
          <a href="https://www.youtube.com/c/counterculturecoffee/featured" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://counterculturecoffee.com" target="_blank" rel="noopener noreferrer">counterculturecoffee.com</a>
        </div>
      </section>

      <footer className="footer">
        <p className="f-logo">COUNTER CULTURE COFFEE</p>
        <p>Durham, North Carolina &middot; Certified B Corp &middot; Coffee-driven since 1995</p>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #0a0a0a;
          color: #f3eee2;
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
          border-bottom: 1px solid rgba(242,183,5,0.28);
        }
        .logo { font-weight: bold; letter-spacing: 2px; font-size: 20px; color: #F2B705; font-family: -apple-system, system-ui, sans-serif; }
        .logo span { color: #f3eee2; margin-left: 6px; font-weight: 400; }
        .links { display: flex; gap: 28px; font-family: -apple-system, system-ui, sans-serif; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; }
        .links a:hover { color: #F2B705; }
        .shop {
          font-family: -apple-system, system-ui, sans-serif; font-size: 13px;
          text-transform: uppercase; letter-spacing: 1px;
          border: 1px solid #F2B705; color: #F2B705;
          padding: 8px 18px; border-radius: 2px; transition: .2s;
        }
        .shop:hover { background: #F2B705; color: #0a0a0a; }
        .hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 0 24px;
          background: url('${HERO}') center/cover no-repeat fixed;
        }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(10,10,10,0.55), rgba(10,10,10,0.82)); }
        .hero-inner { position: relative; max-width: 800px; }
        .eyebrow { font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 4px; font-size: 13px; color: #F2B705; margin-bottom: 18px; }
        .hero h1 { font-size: 58px; line-height: 1.05; margin-bottom: 22px; }
        .hero .sub { font-size: 19px; color: #d5cfc0; max-width: 640px; margin: 0 auto 32px; }
        .cta {
          display: inline-block; background: #F2B705; color: #0a0a0a;
          font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase;
          letter-spacing: 1.5px; font-size: 14px; padding: 15px 38px; border-radius: 2px; transition: .2s; font-weight: 600;
        }
        .cta:hover { background: #d29e04; }
        .section { padding: 90px 32px; max-width: 1200px; margin: 0 auto; }
        .section.alt { background: #111; max-width: none; }
        .section.alt > * { max-width: 1200px; margin-left: auto; margin-right: auto; }
        .section h2 { font-size: 40px; text-align: center; margin-bottom: 14px; }
        .section h2::after { content: ''; display: block; width: 56px; height: 3px; background: #F2B705; margin: 16px auto 0; }
        .lead, .section .lead { text-align: center; color: #b9b3a4; font-style: italic; margin-bottom: 44px; }
        .gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 44px; }
        .g-item { overflow: hidden; border-radius: 4px; aspect-ratio: 4/3; }
        .g-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; display: block; }
        .g-item:hover img { transform: scale(1.07); }
        .menu { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .m-item { border: 1px solid #2a2a2a; border-left: 3px solid #F2B705; padding: 22px 24px; border-radius: 3px; background: #0d0d0d; }
        .m-item h3 { font-size: 22px; margin-bottom: 6px; }
        .m-item p { color: #b9b3a4; font-size: 16px; }
        .about { display: grid; grid-template-columns: 1.3fr 1fr; gap: 50px; align-items: center; }
        .about h2 { text-align: left; }
        .about h2::after { margin-left: 0; }
        .about-text p { margin-bottom: 16px; font-size: 18px; color: #dad4c6; }
        .about-img img { width: 100%; border-radius: 6px; display: block; }
        .locations { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 44px; }
        .l-item { background: #0d0d0d; border: 1px solid #2a2a2a; padding: 24px; border-radius: 4px; }
        .l-item h3 { color: #F2B705; font-size: 18px; margin-bottom: 8px; font-family: -apple-system, system-ui, sans-serif; }
        .l-item p { color: #b9b3a4; }
        .social { text-align: center; }
        .social-links { display: flex; justify-content: center; gap: 22px; flex-wrap: wrap; margin-top: 30px; font-family: -apple-system, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; }
        .social-links a { border: 1px solid #333; padding: 12px 26px; border-radius: 2px; transition: .2s; }
        .social-links a:hover { border-color: #F2B705; color: #F2B705; }
        .footer { text-align: center; padding: 50px 24px; border-top: 1px solid #1c1c1c; background: #080808; }
        .f-logo { font-family: -apple-system, system-ui, sans-serif; letter-spacing: 3px; color: #F2B705; font-weight: bold; margin-bottom: 8px; }
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
