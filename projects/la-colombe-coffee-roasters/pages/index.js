import Head from "next/head";

const ACCENT = "#2b4ee0";
const ACCENT_SOFT = "#7d93f2";
const BG = "#0a0a0a";
const TEXT = "#f0ebe0";

const galleryImages = [
  { src: "https://www.lacolombe.com/cdn/shop/files/LC-FISHTOWN_1.jpg?v=1763566276&width=1600", alt: "La Colombe Fishtown cafe, Philadelphia" },
  { src: "https://www.lacolombe.com/cdn/shop/files/rittenhousecafe.png?v=1763566416&width=1600", alt: "La Colombe Rittenhouse Square cafe" },
  { src: "https://www.lacolombe.com/cdn/shop/files/Silverlake_LA_Cafe_Mural_2023_1_1.jpg?v=1763566673&width=1600", alt: "La Colombe Silver Lake cafe mural, Los Angeles" },
  { src: "https://www.lacolombe.com/cdn/shop/files/LC_BeverlyHills_Cafe_18.jpg?v=1763566665&width=1600", alt: "La Colombe Beverly Hills cafe" },
  { src: "https://www.lacolombe.com/cdn/shop/files/LC_NYC_Bowery_Cafe_Selects__21.jpg?v=1763566908&width=1600", alt: "La Colombe Bowery cafe, New York" },
  { src: "https://www.lacolombe.com/cdn/shop/files/LC_Cafes_NYC_SoHo_6.jpg?v=1763566920&width=1600", alt: "La Colombe SoHo cafe, New York" }
];

const featuredRoasts = [
  { name: "Nizza", img: "https://www.lacolombe.com/cdn/shop/files/nizzalifestyle.png?v=1763745210&width=1200", notes: "Milk Chocolate, Nuts, Brownie", roast: "Medium Roast", price: "$16", desc: "The iconic medium roast behind every espresso we make at our cafes — named for Nice, the French city famous for honey." },
  { name: "Cold Brew", img: "https://www.lacolombe.com/cdn/shop/files/cold_brew_gallery.png?v=1774638566", notes: "9 oz · 180mg caffeine", roast: "Ready to Drink", price: "$34", desc: "Bold, cold, and completely crushable. A recipe fine-tuned over three decades at our cafes." }
];

const beanLineup = [
  { name: "All Dark", roast: "Dark Roast", price: "$17", desc: "Our darkest, most deeply caramelized roast." },
  { name: "Corsica", roast: "Dark Roast", price: "$16", desc: "Rich, bold, and beloved at our cafes for decades." },
  { name: "Waymaker", roast: "Dark Roast", price: "$18", desc: "A deliciously dark roasted Colombian single-origin." },
  { name: "Colombia — Inga Red Honey", roast: "Light Roast", price: "$21", desc: "Champagne Mango, Caramel Apple, Honeycomb." },
  { name: "Triple Draft Latte", roast: "On Tap", price: "$34", desc: "Our ridiculously frothy, coffee-forward favorite." },
  { name: "Liberty Blend", roast: "Medium Roast", price: "$15", desc: "Bold, balanced, and made to be shared." }
];

const cafeMenu = [
  { group: "Crafted", items: ["Espresso", "Macchiato", "Cortado", "Flat White", "Americano", "Latte", "Mocha", "Hot Chocolate", "Chai"] },
  { group: "On Tap", items: ["Cold Brew", "Draft Latte", "Oat Draft Latte", "Half Tan", "Oat Tan"] },
  { group: "Matcha & Tea", items: ["Matcha Latte", "Vanilla Matcha Latte", "London Fog", "Golden Milk", "Earl Grey", "Jasmine Green"] },
  { group: "Seasonal Specials", items: ["S'mores Draft Latte", "Peaches & Cream"] }
];

const locations = [
  { city: "Philadelphia, PA", name: "Rittenhouse Square", address: "130 South 19th Street", hours: "6:00am - 7:00pm Daily" },
  { city: "Philadelphia, PA", name: "Fishtown (HQ)", address: "1335 Frankford Ave", hours: "6:00am - 6:00pm Daily" },
  { city: "New York, NY", name: "SoHo", address: "270 Lafayette Street", hours: "6:00am - 7:00pm" },
  { city: "New York, NY", name: "Tribeca", address: "319 Church Street", hours: "7:00am - 6:00pm Daily" },
  { city: "Chicago, IL", name: "Wicker Park", address: "1552 N. Damen Ave.", hours: "6:00am - 6:00pm" },
  { city: "Los Angeles, CA", name: "Silver Lake", address: "3900 Sunset Blvd", hours: "6:30am - 5:00pm" },
  { city: "Washington, DC", name: "Blagden Alley", address: "924 Rear N St. NW", hours: "6:30am - 6:00pm" },
  { city: "Austin, TX", name: "Lamar", address: "525 N Lamar Blvd", hours: "7:00am - 7:00pm Daily" }
];

const socials = [
  { label: "Instagram", url: "https://www.instagram.com/lacolombecoffee/" },
  { label: "Facebook", url: "https://www.facebook.com/lacolombecoffee" },
  { label: "TikTok", url: "https://www.tiktok.com/@lacolombecoffee" },
  { label: "YouTube", url: "https://www.youtube.com/c/LaColombeCoffeeRoasters" },
  { label: "X / Twitter", url: "https://twitter.com/lacolombecoffee" }
];

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>La Colombe Coffee Roasters — Roasted with love in Philly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="La Colombe Coffee Roasters — third-wave specialty coffee roasted in Philadelphia since 1994. Cafes in Philadelphia, New York, Chicago, LA, DC and Austin." />
      </Head>

      <nav className="nav">
        <a className="brand" href="#top">LA COLOMBE</a>
        <div className="nav-links">
          <a href="#gallery">Cafes</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#locations">Locations</a>
        </div>
        <a className="nav-cta" href="https://www.lacolombe.com/collections/all-products" target="_blank" rel="noreferrer">Shop</a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Established in Philadelphia &middot; 1994</p>
          <h1>We source. We roast. We brew.</h1>
          <p className="hero-sub">Coffee without compromise. Pioneers of third-wave coffee and the original Draft Latte, roasted with love in Philly.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#menu">Explore the Menu</a>
            <a className="btn btn-ghost" href="#locations">Find a Cafe</a>
          </div>
        </div>
      </header>

      <section id="gallery" className="section">
        <div className="section-head">
          <h2>Inside our cafes</h2>
          <p>Warm hospitality, great conversation, and the smell of freshly made coffee — from Fishtown to Silver Lake.</p>
        </div>
        <div className="gallery">
          {galleryImages.map((g) => (
            <div className="gallery-item" key={g.src}>
              <img src={g.src} alt={g.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="section section-alt">
        <div className="section-head">
          <h2>The Menu</h2>
          <p>Prices vary per location. Every espresso starts with Nizza.</p>
        </div>

        <div className="featured">
          {featuredRoasts.map((r) => (
            <article className="featured-card" key={r.name}>
              <div className="featured-img"><img src={r.img} alt={r.name} loading="lazy" /></div>
              <div className="featured-body">
                <div className="featured-top">
                  <h3>{r.name}</h3>
                  <span className="price">{r.price}</span>
                </div>
                <span className="tag">{r.roast}</span>
                <p className="notes">{r.notes}</p>
                <p className="desc">{r.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <h3 className="sub-title">Roast Lineup</h3>
        <div className="beans">
          {beanLineup.map((b) => (
            <div className="bean" key={b.name}>
              <div className="bean-top">
                <span className="bean-name">{b.name}</span>
                <span className="price">{b.price}</span>
              </div>
              <span className="tag">{b.roast}</span>
              <p className="desc">{b.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="sub-title">From the Cafe Bar</h3>
        <div className="cafe-menu">
          {cafeMenu.map((c) => (
            <div className="cafe-col" key={c.group}>
              <h4>{c.group}</h4>
              <ul>{c.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section about">
        <div className="about-grid">
          <div className="about-img"><img src="https://www.lacolombe.com/cdn/shop/files/3._Mugs_Over_Saucers.jpg?v=1761849166&width=1600" alt="La Colombe coffee, mugs over saucers" loading="lazy" /></div>
          <div className="about-text">
            <h2>Our story</h2>
            <p>La Colombe was founded in 1994 by Todd Carmichael and Jean-Philippe Iberti in the Rittenhouse Square neighborhood of Philadelphia. What began as a single cafe grew into one of America's defining third-wave coffee roasters.</p>
            <p>In 2016 the company reinvented cold coffee with the canned Draft Latte — a cold-pressed espresso and frothed milk latte poured straight from the can. The headquarters and roastery moved to a purpose-built home in Fishtown, Philadelphia in 2015.</p>
            <p>Through the Haiti Coffee Academy, founded in 2013, La Colombe invests in training and supply-chain support for smallholder coffee farmers. The brand was named BevNET's "Rising Star" in 2017 and was acquired by Chobani in 2023.</p>
            <div className="stats">
              <div><strong>1994</strong><span>Founded in Philadelphia</span></div>
              <div><strong>30+</strong><span>US cafes</span></div>
              <div><strong>14,000+</strong><span>Five-star reviews</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="section section-alt">
        <div className="section-head">
          <h2>Find us</h2>
          <p>Cafes across Philadelphia, New York, Chicago, Los Angeles, San Diego, Washington DC and Austin.</p>
        </div>
        <div className="locations">
          {locations.map((l) => (
            <div className="loc" key={l.name + l.city}>
              <span className="loc-city">{l.city}</span>
              <h4>{l.name}</h4>
              <p>{l.address}</p>
              <span className="loc-hours">{l.hours}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="social">
        <h2>Follow along</h2>
        <div className="social-links">
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">{s.label}</a>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">LA COLOMBE</div>
        <p>Philadelphia, Pennsylvania &middot; Coffee without compromise.</p>
        <p className="footer-small">Roasted with love in Philly. Fan tribute landing page built from publicly available brand information.</p>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: ${BG}; color: ${TEXT}; font-family: Georgia, "Times New Roman", serif; }
        a { color: inherit; text-decoration: none; }
      `}</style>

      <style jsx>{`
        .page { overflow-x: hidden; }
        .nav { position: sticky; top: 0; z-index: 50; display: flex; align-items: center; justify-content: space-between;
          padding: 16px 32px; background: rgba(10,10,10,0.82); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(240,235,224,0.08); }
        .brand { font-family: system-ui, sans-serif; font-weight: 800; letter-spacing: 3px; font-size: 18px; color: ${TEXT}; }
        .nav-links { display: flex; gap: 28px; font-family: system-ui, sans-serif; font-size: 14px; letter-spacing: 0.5px; }
        .nav-links a { color: rgba(240,235,224,0.78); transition: color .2s; }
        .nav-links a:hover { color: ${ACCENT_SOFT}; }
        .nav-cta { font-family: system-ui, sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase;
          background: ${ACCENT}; color: #fff; padding: 10px 20px; border-radius: 999px; }

        .hero { position: relative; min-height: 92vh; display: flex; align-items: center; padding: 0 32px;
          background: url("https://www.lacolombe.com/cdn/shop/files/LC_BARISTA_COUNTER_DSC5164_BLEU_SOLO_1.jpg?v=1762287322") center/cover no-repeat; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.6) 55%, rgba(10,10,10,0.3) 100%); }
        .hero-content { position: relative; max-width: 680px; }
        .eyebrow { font-family: system-ui, sans-serif; text-transform: uppercase; letter-spacing: 3px; font-size: 12px; color: ${ACCENT_SOFT}; margin-bottom: 18px; }
        .hero h1 { font-size: clamp(38px, 6vw, 72px); line-height: 1.04; margin-bottom: 22px; }
        .hero-sub { font-size: clamp(16px, 2vw, 20px); line-height: 1.6; color: rgba(240,235,224,0.85); margin-bottom: 32px; }
        .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }
        .btn { font-family: system-ui, sans-serif; font-size: 14px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; padding: 14px 28px; border-radius: 999px; transition: transform .15s, background .2s; }
        .btn:hover { transform: translateY(-2px); }
        .btn-primary { background: ${ACCENT}; color: #fff; }
        .btn-ghost { border: 1px solid rgba(240,235,224,0.4); color: ${TEXT}; }

        .section { padding: 96px 32px; max-width: 1200px; margin: 0 auto; }
        .section-alt { background: #0e0e10; max-width: none; }
        .section-alt > * { max-width: 1200px; margin-left: auto; margin-right: auto; }
        .section-head { text-align: center; margin-bottom: 56px; }
        .section-head h2 { font-size: clamp(30px, 4vw, 46px); margin-bottom: 14px; }
        .section-head p { font-family: system-ui, sans-serif; color: rgba(240,235,224,0.6); max-width: 560px; margin: 0 auto; line-height: 1.6; }

        .gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .gallery-item { overflow: hidden; border-radius: 6px; aspect-ratio: 4/3; }
        .gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; }
        .gallery-item:hover img { transform: scale(1.06); }

        .featured { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-bottom: 64px; }
        .featured-card { display: flex; background: #141417; border: 1px solid rgba(240,235,224,0.07); border-radius: 10px; overflow: hidden; }
        .featured-img { width: 42%; background: #fff; }
        .featured-img img { width: 100%; height: 100%; object-fit: cover; }
        .featured-body { padding: 24px; flex: 1; }
        .featured-top { display: flex; justify-content: space-between; align-items: baseline; }
        .featured-body h3 { font-size: 24px; }
        .price { color: ${ACCENT_SOFT}; font-family: system-ui, sans-serif; font-weight: 700; }
        .tag { display: inline-block; font-family: system-ui, sans-serif; font-size: 11px; letter-spacing: 1px; text-transform: uppercase;
          color: ${ACCENT_SOFT}; border: 1px solid rgba(125,147,242,0.4); border-radius: 999px; padding: 3px 10px; margin: 10px 0; }
        .notes { font-style: italic; color: rgba(240,235,224,0.75); margin-bottom: 8px; }
        .desc { font-family: system-ui, sans-serif; font-size: 14px; line-height: 1.6; color: rgba(240,235,224,0.6); }

        .sub-title { font-size: 26px; margin: 8px 0 24px; }
        .beans { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-bottom: 64px; }
        .bean { background: #141417; border: 1px solid rgba(240,235,224,0.07); border-radius: 10px; padding: 22px; }
        .bean-top { display: flex; justify-content: space-between; align-items: baseline; }
        .bean-name { font-size: 19px; }

        .cafe-menu { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .cafe-col h4 { font-family: system-ui, sans-serif; text-transform: uppercase; letter-spacing: 1.5px; font-size: 13px; color: ${ACCENT_SOFT};
          border-bottom: 1px solid rgba(240,235,224,0.12); padding-bottom: 10px; margin-bottom: 14px; }
        .cafe-col ul { list-style: none; }
        .cafe-col li { font-family: system-ui, sans-serif; font-size: 15px; color: rgba(240,235,224,0.78); padding: 6px 0; }

        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
        .about-img { border-radius: 10px; overflow: hidden; }
        .about-img img { width: 100%; display: block; }
        .about-text h2 { font-size: clamp(30px, 4vw, 44px); margin-bottom: 20px; }
        .about-text p { font-size: 17px; line-height: 1.7; color: rgba(240,235,224,0.82); margin-bottom: 16px; }
        .stats { display: flex; gap: 36px; margin-top: 28px; }
        .stats strong { display: block; font-size: 30px; color: ${ACCENT_SOFT}; }
        .stats span { font-family: system-ui, sans-serif; font-size: 13px; color: rgba(240,235,224,0.6); }

        .locations { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .loc { background: #141417; border: 1px solid rgba(240,235,224,0.07); border-radius: 10px; padding: 22px; }
        .loc-city { font-family: system-ui, sans-serif; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; color: ${ACCENT_SOFT}; }
        .loc h4 { font-size: 20px; margin: 8px 0; }
        .loc p { font-family: system-ui, sans-serif; font-size: 14px; color: rgba(240,235,224,0.7); }
        .loc-hours { font-family: system-ui, sans-serif; font-size: 13px; color: rgba(240,235,224,0.5); display: block; margin-top: 10px; }

        .social { text-align: center; padding: 80px 32px; background: ${ACCENT}; }
        .social h2 { font-size: 34px; margin-bottom: 24px; color: #fff; }
        .social-links { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
        .social-links a { font-family: system-ui, sans-serif; font-size: 14px; letter-spacing: 1px; text-transform: uppercase;
          border: 1px solid rgba(255,255,255,0.6); color: #fff; padding: 12px 22px; border-radius: 999px; transition: background .2s, color .2s; }
        .social-links a:hover { background: #fff; color: ${ACCENT}; }

        .footer { text-align: center; padding: 64px 32px; background: ${BG}; }
        .footer-brand { font-family: system-ui, sans-serif; font-weight: 800; letter-spacing: 4px; font-size: 22px; margin-bottom: 14px; }
        .footer p { font-family: system-ui, sans-serif; color: rgba(240,235,224,0.6); margin-bottom: 8px; }
        .footer-small { font-size: 12px; color: rgba(240,235,224,0.35); }

        @media (max-width: 900px) {
          .nav-links { display: none; }
          .gallery, .beans, .locations, .cafe-menu { grid-template-columns: repeat(2, 1fr); }
          .featured { grid-template-columns: 1fr; }
          .about-grid { grid-template-columns: 1fr; gap: 28px; }
        }
        @media (max-width: 560px) {
          .section { padding: 64px 20px; }
          .hero { padding: 0 20px; }
          .gallery, .beans, .locations, .cafe-menu { grid-template-columns: 1fr; }
          .featured-card { flex-direction: column; }
          .featured-img { width: 100%; height: 200px; }
          .stats { flex-wrap: wrap; gap: 20px; }
        }
      `}</style>
    </div>
  );
}
