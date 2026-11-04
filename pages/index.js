import Head from "next/head";

const phone = "tel:+18058637747";
const email = "earlbrothersmasonry@gmail.com";
const instagram = "https://www.instagram.com/earlbrothersmasonry";

const services = [
  ["01", "Brick & stonework", "Brick, stone veneer, chimneys and architectural details that suit the character of your property."],
  ["02", "Block & retaining walls", "Block walls, retaining walls and masonry stairs for outdoor spaces with changes in grade."],
  ["03", "Outdoor masonry", "Brick paving, stone fire pits, outdoor fireplaces and built-in barbecues."]
];

const projects = [
  [9, "Outdoor fireplace", "Stucco fireplace with a chimney and raised hearth"],
  [5, "Retaining walls & stairs", "Curved block retaining walls alongside masonry stairs"],
  [4, "Stone veneer exterior", "Stone veneer wrapping the lower story of a home"],
  [2, "Stone chimney", "Stacked stone chimney against a blue-gray house"],
  [3, "Stone facade detail", "Stone veneer around a window beneath a gable"],
  [6, "Block retaining wall", "Stepped block retaining wall along a sloping yard"],
  [7, "Block construction", "Block walls under construction beneath wood framing"],
  [8, "Brick paving", "Red brick paving laid across an outdoor area"],
  [10, "Retaining wall build", "Long retaining wall under construction around a raised yard"],
  [11, "Garage stonework", "Stone trim framing a wood garage door"],
  [12, "Garage exterior", "Wide view of the garage and stone-trimmed entry"]
];

function Project({ project }) {
  const [number, title, alt] = project;
  return <figure className="project">
    <img src={`/img/bg${number}.jpg`} alt={alt} loading="lazy" decoding="async" />
    <figcaption>{title}</figcaption>
  </figure>;
}

export default function Home() {
  return <>
    <Head>
      <title>Earl Brothers Masonry | Santa Maria & Central Coast</title>
      <meta name="description" content="Santa Maria masonry contractors serving California's Central Coast. Explore our brick, block and stone projects and contact Earl Brothers Masonry for an estimate." />
      <meta property="og:title" content="Earl Brothers Masonry | Santa Maria & Central Coast" />
      <meta property="og:description" content="Brick, block and stone masonry by a Santa Maria crew with 20 years of experience." />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/mark.svg" type="image/svg+xml" />
    </Head>
    <a className="skip" href="#main">Skip to content</a>
    <header className="header">
      <div className="wrap header-inner">
        <a className="brand" href="/" aria-label="Earl Brothers Masonry home">
          <img className="mark" src="/mark.svg" width="44" height="44" alt="" />
          <span>EARL BROTHERS<small>MASONRY</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a><a href="#work">Projects</a><a href="#about">About</a>
        </nav>
        <a className="button header-cta" href="#estimate">Get an estimate <span aria-hidden="true">↗</span></a>
      </div>
    </header>
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Santa Maria · California Central Coast</p>
            <h1 id="hero-title">Brick, block<br />&amp; stonework.</h1>
            <p>From retaining walls to outdoor fireplaces, we build masonry that fits your property and how you use it.</p>
            <div className="actions">
              <a className="button" href="#estimate">Request an estimate <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#work">See our work <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </div>
      </section>
      <div className="proof"><div className="wrap proof-inner">
        <span><strong>20 years</strong> of masonry experience</span>
        <span><strong>Santa Maria</strong> locally founded</span>
        <span><strong>Central Coast</strong> service area</span>
      </div></div>
      <section className="wrap section" id="services">
        <p className="eyebrow">01 / Services</p>
        <h2>What we build</h2>
        <div className="grid">
          {services.map(([number, title, description]) => <article className="service" key={number}>
            <span className="service-number">{number}</span><h3>{title}</h3><p>{description}</p>
          </article>)}
        </div>
      </section>
      <section className="work section" id="work"><div className="wrap">
        <p className="eyebrow">02 / Project gallery</p>
        <h2>See the work up close</h2>
        <p className="intro">Explore completed details and in-progress builds from our crew.</p>
        <div className="grid">{projects.slice(0, 3).map(project => <Project key={project[0]} project={project} />)}</div>
        <details><summary>View 8 more project photos</summary>
          <div className="grid gallery-more">{projects.slice(3).map(project => <Project key={project[0]} project={project} />)}</div>
        </details>
      </div></section>
      <section className="wrap section about" id="about">
        <div><p className="eyebrow">03 / About the crew</p><h2>Rooted in Santa Maria</h2></div>
        <div className="about-copy">
          <p>Earl Brothers Masonry was founded by three Santa Maria locals with 20 years of masonry experience. We work with brick, block and stone across California’s Central Coast.</p>
          <p>Tell us what you’re planning and where the work will take place. We’ll talk through the scope, materials and next steps for your estimate.</p>
          <a className="text-link" href={instagram}>Find us on Instagram <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <section className="estimate section" id="estimate"><div className="wrap about">
        <div><p className="eyebrow">04 / Estimates</p><h2>Tell us about your project.</h2><p className="intro">Include your project location, what you’d like built and any photos or approximate dimensions you have. Ask us about a free brickwork estimate.</p></div>
        <div className="contact">
          <a className="button" href={`mailto:${email}?subject=Masonry%20estimate%20request&body=Project%20location%3A%0AWhat%20I%E2%80%99d%20like%20built%3A%0AApproximate%20dimensions%3A%0APreferred%20timeline%3A%0ABest%20number%20to%20reach%20me%3A%0A`}>Email for an estimate <span aria-hidden="true">↗</span></a>
          <a className="text-link" href={phone}>Call (805) 863-7747</a>
          <a className="email" href={`mailto:${email}`}>{email}</a>
        </div>
      </div></section>
    </main>
    <footer><div className="wrap footer-inner"><strong>Earl Brothers Masonry</strong><span>Santa Maria, California</span><a href={instagram}>Instagram ↗</a></div></footer>
  </>;
}
