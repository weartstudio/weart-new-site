const { useState, useEffect, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accent": "#FF6B4A",
  "primary": "#00C2CB",
  "heroVariant": "underline",
  "showMarquee": true
}/*EDITMODE-END*/;

function useReveal(){
  useEffect(()=>{
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);}});
    }, {threshold:0.1});
    els.forEach(el=>io.observe(el));
    return ()=>io.disconnect();
  },[]);
}

function Nav(){
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#" className="logo">
          <span className="logo-mark">W</span>
          <b>weart<span style={{color:'var(--primary)'}}>.</span>studio</b>
        </a>
        <div className="nav-links">
          <a href="#services" className="has-arrow">Services</a>
          <a href="#work">Our Work</a>
          <a href="#pricing">Pricing</a>
          <a href="#insights">Journal</a>
          <a href="#about">Studio</a>
        </div>
        <div className="nav-cta">
          <a href="#" className="btn btn-ghost">Start a project</a>
        </div>
      </div>
    </nav>
  );
}

function Hero({tweaks}){
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow"><span className="dot"></span> Booking projects for Q3 · 2026</span>
          <h1 className="h1">
            Websites that <span className="underline">behave</span><br/>
            like <em>they mean it.</em>
          </h1>
          <p className="lead">A small, opinionated studio building fast, accessible sites for founders and product teams who care about the details — and the metrics.</p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">Get an instant estimate <span className="arrow">→</span></a>
            <a href="#how" className="btn btn-ghost">How we work</a>
          </div>
          <div className="hero-meta">
            <div className="meta-item"><div className="num">2017</div><div className="lbl">Established</div></div>
            <div className="meta-item"><div className="num">62+</div><div className="lbl">Sites shipped</div></div>
            <div className="meta-item"><div className="num">4.9★</div><div className="lbl">Avg. rating</div></div>
            <div className="meta-item"><div className="num">100/100</div><div className="lbl">Lighthouse target</div></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="browser browser-main">
            <div className="browser-bar">
              <span className="dot"></span><span className="dot"></span><span className="dot"></span>
              <span className="url">weart.studio/clients/northwind</span>
            </div>
            <div className="browser-body">
              <div style={{display:'flex',gap:6,marginBottom:14}}>
                <div className="mock-pill ghost">Services</div>
                <div className="mock-pill ghost">Work</div>
                <div className="mock-pill ghost">Pricing</div>
              </div>
              <div className="mock-h">Built for <em>speed,</em><br/>shipped with care.</div>
              <p className="mock-p">A studio that treats performance, accessibility, and craft as non-negotiable.</p>
              <div className="mock-row">
                <div className="mock-pill">Get a quote</div>
                <div className="mock-pill ghost">See work</div>
              </div>
              <div className="mock-stripe"></div>
              <div className="mock-stripe short"></div>
              <div className="mock-stripe shorter"></div>
            </div>
          </div>

          <ScoreCard cls="score-1" value={100} label="Performance" />
          <ScoreCard cls="score-2" value={100} label="Best Practices" />
          <ScoreCard cls="score-3" value={98} label="SEO" />
          <ScoreCard cls="score-4" value={100} label="Accessibility" />
        </div>
      </div>

      <div className="container">
        <div className="trust">
          <div className="trust-label">Trusted by teams at</div>
          <div className="trust-row">
            <span>Northwind<small>SaaS</small></span>
            <span>Lumen &amp; Co<small>Studio</small></span>
            <span>Atlas Foundry<small>Industrial</small></span>
            <span>Verdé<small>D2C</small></span>
            <span>Halcyon Audio<small>Media</small></span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScoreCard({cls, value, label}){
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(()=>{
    const el = ref.current; if(!el) return;
    const io = new IntersectionObserver(([e])=>{
      if(e.isIntersecting){
        let i = 0;
        const t = setInterval(()=>{ i+=2; if(i>=value){i=value;clearInterval(t);} setN(i); }, 18);
        io.disconnect();
      }
    },{threshold:0.4});
    io.observe(el);
    return ()=>io.disconnect();
  },[value]);
  const deg = (n/100)*360;
  return (
    <div ref={ref} className={`score ${cls}`} style={{'--p': `${deg}deg`}}>
      <div className="ring"><span>{n}</span></div>
      <div className="lbl">{label}</div>
    </div>
  );
}

function Services(){
  return (
    <section className="sec" id="services">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <div className="sec-tag">What we do</div>
            <h2 className="sec-h">High standards make<br/><em>great websites.</em></h2>
          </div>
          <p className="sec-sub">Three core practices, one quiet obsession: building websites that load fast, rank well, and feel right — for years, not weeks.</p>
        </div>

        <div className="bento reveal">
          <div className="tile tile-1">
            <div>
              <div className="tile-num">/ 01</div>
              <h3 className="tile-title">Website design &amp; <em>development.</em></h3>
              <p className="tile-desc">Bespoke marketing sites and editorial systems, built on a stack we know cold — WordPress, Astro, or Next, depending on what you actually need.</p>
            </div>
            <div className="visual"></div>
            <div className="codeblock">
              <div><span className="c-key">stack:</span> <span className="c-val">'astro+ts'</span></div>
              <div><span className="c-key">a11y:</span> <span className="c-val">'WCAG 2.2 AA'</span></div>
              <div><span className="c-key">delivery:</span> <span className="c-val">'4–8 weeks'</span></div>
            </div>
          </div>

          <div className="tile tile-2">
            <div>
              <div className="tile-num">/ 02</div>
              <h3 className="tile-title">Ongoing care &amp; tune-ups.</h3>
              <p className="tile-desc">Monthly retainers covering uptime, security, performance regression checks, and copy edits. Quiet hands keeping your site sharp.</p>
            </div>
            <div className="gauge">
              {[28,46,72,55,88,40,66,90,72,52,78,95].map((h,i)=>(<i key={i} style={{height:`${h}%`}}/>))}
            </div>
          </div>

          <div className="tile tile-3">
            <div>
              <div className="tile-num">/ 03</div>
              <h3 className="tile-title">Audits &amp; optimization.</h3>
              <p className="tile-desc">A 40-point review of an existing site — Core Web Vitals, accessibility, SEO, and the small UX things that quietly cost you customers.</p>
            </div>
            <div className="pulse">
              <div className="bar-row"><span>LCP</span><span>1.2s</span></div>
              <div className="bar"><i style={{width:'88%'}}/></div>
              <div className="bar-row"><span>CLS</span><span>0.01</span></div>
              <div className="bar"><i style={{width:'96%'}}/></div>
              <div className="bar-row"><span>INP</span><span>120ms</span></div>
              <div className="bar"><i style={{width:'92%'}}/></div>
            </div>
          </div>

          <div className="tile tile-4">
            <div>
              <div className="tile-num">/ 04</div>
              <h3 className="tile-title">Brand &amp; identity.</h3>
              <p className="tile-desc">Wordmarks, type systems, and the visual rhythm that makes everything else feel intentional.</p>
            </div>
            <div className="icon-stack">Aa</div>
          </div>

          <div className="tile tile-5">
            <div>
              <div className="tile-num">/ 05</div>
              <h3 className="tile-title">Compliance, quietly.</h3>
              <p className="tile-desc">Privacy, cookie banners, and accessibility statements that update themselves as laws change.</p>
            </div>
            <div className="ssl">
              <div className="ssl-row"><span className="check"/>WCAG 2.2 AA covered</div>
              <div className="ssl-row"><span className="check"/>GDPR &amp; CCPA flows</div>
              <div className="ssl-row"><span className="check"/>Auto-updating policies</div>
            </div>
          </div>

          <div className="tile tile-6">
            <div>
              <div className="tile-num">/ 06</div>
              <h3 className="tile-title">Conversion engineering.</h3>
              <p className="tile-desc">A/B testing, funnel work, and copywriting passes — pulling levers, not pushing pixels.</p>
              <div className="tile-link">See the playbook</div>
            </div>
            <div className="big-arrow">↗</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs(){
  return (
    <section className="sec" id="why">
      <div className="container-wide">
        <div className="why reveal">
          <div className="why-grid">
            <div>
              <div className="sec-tag">Why weart</div>
              <h2 className="sec-h">A studio with <em>opinions,</em><br/>not a vendor with a deck.</h2>
              <p style={{marginTop:24, color:'rgba(255,255,255,0.65)', fontSize:17, maxWidth:440, lineHeight:1.6}}>
                We work with a handful of clients each year. That focus is the product — it's what lets us care about the details that everyone else cuts.
              </p>
              <div style={{marginTop:32, display:'flex', gap:14, flexWrap:'wrap'}}>
                <a className="btn btn-primary" href="#contact">Start a project →</a>
                <a className="btn" style={{color:'#fff', border:'1px solid rgba(255,255,255,0.18)'}} href="#work">Browse case studies</a>
              </div>
            </div>
            <div className="why-feat">
              <div className="feat">
                <div className="feat-h"><span className="feat-num">01.</span><h4>Impeccable standards.</h4></div>
                <p>Every site ships with a 95+ Lighthouse score across the board, full keyboard navigation, and semantic markup. That's the floor — not the goal.</p>
              </div>
              <div className="feat">
                <div className="feat-h"><span className="feat-num">02.</span><h4>Core Web Vitals, guaranteed.</h4></div>
                <p>If your site doesn't pass field-data CWV thresholds within 60 days of launch, we keep working until it does. In writing.</p>
              </div>
              <div className="feat">
                <div className="feat-h"><span className="feat-num">03.</span><h4>Lifelong support.</h4></div>
                <p>The web changes underneath you. We stay on the line for as long as the site lives — patching, updating, and quietly making things better.</p>
              </div>
            </div>
          </div>

          <div className="testimonial" style={{background:'rgba(255,255,255,0.04)', borderColor:'rgba(255,255,255,0.08)', color:'#fff'}}>
            <div className="quote" style={{color:'#fff'}}>
              In fifteen years I've worked with more web designers than I can remember. <em>Nothing comes close</em> to the experience of working with this team.
            </div>
            <div className="author">
              <div className="avatar">D</div>
              <div>
                <div className="author-name" style={{color:'#fff'}}>Dávid F.</div>
                <div className="author-role" style={{color:'rgba(255,255,255,0.5)'}}>Founder, Lumen &amp; Co</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee({show}){
  if(!show) return null;
  const items = ['Performance','Accessibility','SEO','Conversion','Editorial','Care','Craft','Speed','Standards'];
  const all = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {all.map((w,i)=>(<span key={i}>{w}</span>))}
      </div>
    </div>
  );
}

function Pricing(){
  return (
    <section className="sec" id="pricing">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <div className="sec-tag">Pricing</div>
            <h2 className="sec-h">Honest numbers.<br/><em>No surprises.</em></h2>
          </div>
          <p className="sec-sub">Fixed-price engagements with a clear scope. Most clients land in our Studio tier — the right balance of polish and pace for a serious launch.</p>
        </div>
        <div className="pricing-grid reveal">
          {[
            {tier:'Refresh', price:'4.8k', desc:'A focused tune-up of an existing site — design refresh, performance pass, and a fresh content review.', feats:['Up to 6 page templates','Performance + a11y audit','Copy editing pass','2-week sprint'], cta:'Book a refresh'},
            {tier:'Studio', price:'12k', desc:'Our flagship engagement. A bespoke marketing site, end to end, with everything you need to launch with confidence.', feats:['Custom design system','Up to 14 page templates','CMS + analytics setup','60-day post-launch support','Lighthouse 95+ guarantee'], cta:'Start a Studio project', featured:true, badge:'Most picked'},
            {tier:'Atelier', price:'24k+', desc:'For complex marketing sites and product platforms. Custom integrations, multi-locale, advanced editorial tooling.', feats:['Everything in Studio','Multi-locale + i18n','Custom integrations','Headless CMS architecture','Lifelong support retainer'], cta:'Talk to the studio'}
          ].map((p,i)=>(
            <div key={i} className={`price-card ${p.featured?'featured':''}`}>
              {p.badge && <div className="pc-badge">{p.badge}</div>}
              <div className="pc-tier">{p.tier}</div>
              <div className="pc-price">€{p.price}<small>fixed</small></div>
              <div className="pc-desc">{p.desc}</div>
              <div className="pc-feats">
                {p.feats.map((f,j)=>(<div key={j} className="pc-feat">{f}</div>))}
              </div>
              <a href="#contact" className={`btn ${p.featured?'btn-accent':'btn-ghost'}`}>{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Insights(){
  const items = [
    {tag:'Strategy', read:'7 min', title:'The most important decision in your website project is one you\'ll never see.', excerpt:'Why we spend hours on choices visitors will never notice — and how getting them right makes everything else easier for years.', cls:'a', glyph:'01'},
    {tag:'Pricing', read:'9 min', title:'SEO &amp; AEO at every budget: what it costs and what actually works.', excerpt:'A practical, no-nonsense guide to what SEO actually costs in 2026 — and what to expect at each tier as a small business.', cls:'b', glyph:'02'},
    {tag:'Performance', read:'5 min', title:'Three things you can do to speed up your WordPress website today.', excerpt:'Most slow WordPress sites share the same root causes. Here are the three fixes that make the biggest difference.', cls:'c', glyph:'03'},
  ];
  return (
    <section className="sec" id="insights">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <div className="sec-tag">From the journal</div>
            <h2 className="sec-h">Resources to help<br/>you <em>grow.</em></h2>
          </div>
          <p className="sec-sub">We believe informed clients make better decisions — so we publish what we learn, in plain language, every couple of weeks.</p>
        </div>
        <div className="insights reveal">
          {items.map((it,i)=>(
            <article key={i} className="insight">
              <div className={`insight-img ${it.cls}`}>
                <div className="glyph">{it.glyph}</div>
              </div>
              <div className="insight-body">
                <div className="insight-meta">
                  <span className="tag">{it.tag}</span>
                  <span className="dot"></span>
                  <span>{it.read} read</span>
                </div>
                <h3 className="insight-title" dangerouslySetInnerHTML={{__html: it.title}}></h3>
                <p className="insight-excerpt">{it.excerpt}</p>
                <div className="insight-foot">
                  <span>May 06, 2026</span>
                  <a href="#">Read more →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ(){
  const [open, setOpen] = useState(0);
  const items = [
    {q:'How long does a typical website project take?', a:'Most Studio engagements run 6–8 weeks from kickoff to launch. Atelier projects are 10–14 weeks. We block focused time for each engagement, so timelines are firm.'},
    {q:'Do you work with existing brand systems?', a:'Yes — most of our clients come with a brand. We can work inside your system, refine it where it\'s thin, or build a fresh identity if that\'s the right call.'},
    {q:'What\'s the deal with the Lighthouse 100 guarantee?', a:'Every site we ship hits 95+ across all four Lighthouse categories on launch day. If field data slips below those thresholds in the first 60 days, we keep working at no cost until it\'s fixed.'},
    {q:'Do you offer ongoing maintenance?', a:'Yes — most clients move onto a monthly Care retainer after launch. Quiet hands keeping things sharp: updates, audits, performance, the occasional copy edit.'},
    {q:'Can I see your work before reaching out?', a:'Of course. The Work page has a half-dozen recent case studies, and we\'re happy to share more on a call if you\'d like to see something specific to your industry.'}
  ];
  return (
    <section className="sec" id="faq">
      <div className="container">
        <div className="faq-grid">
          <div className="reveal">
            <div className="sec-tag">Questions</div>
            <h2 className="sec-h">Things people<br/><em>often ask.</em></h2>
            <p style={{marginTop:24, color:'var(--muted)', fontSize:16, maxWidth:380, lineHeight:1.6}}>
              Don't see yours? Drop us a line — we usually reply within a working day.
            </p>
          </div>
          <div className="faq reveal">
            {items.map((it,i)=>(
              <div key={i} className={`faq-item ${open===i?'open':''}`} onClick={()=>setOpen(open===i?-1:i)}>
                <div className="faq-q">{it.q}<span className="pls"></span></div>
                <div className="faq-a">{it.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BigCTA(){
  return (
    <section className="sec" id="contact" style={{paddingTop:0}}>
      <div className="container">
        <div className="big-cta reveal">
          <div>
            <div className="meta">Booking Q3 · 2026 · 2 slots left</div>
            <h2 style={{marginTop:18}}>Ready to make<br/><em>something good?</em></h2>
            <p>Tell us about your project. We'll reply within a day with honest scope, timeline, and pricing — no decks, no discovery calls until we both want one.</p>
          </div>
          <div className="ctas">
            <a className="btn btn-primary" href="#" style={{padding:'18px 28px', fontSize:16}}>Get a free instant estimate →</a>
            <a className="btn" style={{color:'var(--dark)', border:'1px solid rgba(13,23,46,0.25)', background:'rgba(255,255,255,0.4)', padding:'18px 28px', fontSize:16}} href="#">Email office@weart.studio</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer(){
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <a href="#" className="logo">
              <span className="logo-mark">W</span>
              <b>weart.studio</b>
            </a>
            <p>A small, opinionated web studio building websites with impeccable standards. Based in Budapest, working worldwide.</p>
            <div className="foot-newsletter">
              <input type="email" placeholder="your@email.com"/>
              <button>Subscribe</button>
            </div>
          </div>
          <div className="foot-col">
            <h5>Services</h5>
            <ul>
              <li><a href="#">New website builds</a></li>
              <li><a href="#">Performance-first sites</a></li>
              <li><a href="#">Website refresh</a></li>
              <li><a href="#">Tune-ups &amp; care</a></li>
              <li><a href="#">Audits &amp; optimization</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Studio</h5>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Frequently asked</a></li>
              <li><a href="#">How we work</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Journal</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="#">+36 (1) 555-0142</a></li>
              <li><a href="#">office@weart.studio</a></li>
              <li>Király u. 26<br/>1061 Budapest, HU</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div>© 2017–2026 Weart Studio. All rights reserved.</div>
          <div className="links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Tweaks({tweaks, setTweak}){
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Theme">
        <TweakRadio value={tweaks.theme} options={[{value:'light',label:'Light'},{value:'dark',label:'Dark'}]} onChange={v=>setTweak('theme',v)}/>
      </TweakSection>
      <TweakSection title="Primary">
        <TweakColor value={tweaks.primary} options={['#00C2CB','#0D172E','#FF6B4A','#7B5BFF']} onChange={v=>setTweak('primary',v)}/>
      </TweakSection>
      <TweakSection title="Accent (CTAs)">
        <TweakColor value={tweaks.accent} options={['#FF6B4A','#FFC857','#7B5BFF','#0D172E']} onChange={v=>setTweak('accent',v)}/>
      </TweakSection>
      <TweakSection title="Hero treatment">
        <TweakRadio value={tweaks.heroVariant} options={[{value:'underline',label:'Underline'},{value:'italic',label:'Italic only'}]} onChange={v=>setTweak('heroVariant',v)}/>
      </TweakSection>
      <TweakSection title="Marquee strip">
        <TweakToggle value={tweaks.showMarquee} onChange={v=>setTweak('showMarquee',v)} label="Show running words"/>
      </TweakSection>
    </TweaksPanel>
  );
}

function App(){
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal();

  useEffect(()=>{
    document.body.classList.toggle('theme-dark', tweaks.theme==='dark');
    document.documentElement.style.setProperty('--primary', tweaks.primary);
    document.documentElement.style.setProperty('--accent', tweaks.accent);
    document.body.classList.toggle('hero-italic', tweaks.heroVariant==='italic');
  },[tweaks]);

  // hero variant style override
  useEffect(()=>{
    const id='hero-variant-style';
    let s = document.getElementById(id);
    if(!s){ s = document.createElement('style'); s.id=id; document.head.appendChild(s); }
    s.textContent = tweaks.heroVariant==='italic'
      ? `.h1 .underline::after{display:none!important}`
      : '';
  },[tweaks.heroVariant]);

  return (
    <React.Fragment>
      <Nav/>
      <Hero tweaks={tweaks}/>
      <Services/>
      <WhyUs/>
      <Marquee show={tweaks.showMarquee}/>
      <Pricing/>
      <Insights/>
      <FAQ/>
      <BigCTA/>
      <Footer/>
      <Tweaks tweaks={tweaks} setTweak={setTweak}/>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
