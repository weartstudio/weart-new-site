import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ClientLogos from '../components/ClientLogos';
import RevealWrapper from '../components/RevealWrapper';
import { getProjects, type WPProject } from '../lib/wordpress';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Munkáink – Weart',
  description: 'Válogatott referenciák — weboldalak, webshopok és egyedi fejlesztések vállalkozásoknak.',
};

const TINTS = ['light', 'cream', 'accent', 'deep', 'dark'];

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function ProjectImages({ p }: { p: WPProject }) {
  const hasTwo =
    p.image && p.imageSecondary && p.image.url !== p.imageSecondary.url;

  if (hasTwo) {
    return (
      <div className="shots">
        <div className="shot shot-back">
          <Image
            src={p.imageSecondary!.url}
            alt=""
            fill
            sizes="(max-width: 1024px) 50vw, 300px"
          />
        </div>
        <div className="shot shot-front">
          <Image
            src={p.image!.url}
            alt={p.image!.alt || p.title}
            fill
            sizes="(max-width: 1024px) 50vw, 320px"
          />
        </div>
      </div>
    );
  }

  const single = p.image ?? p.imageSecondary;
  if (!single) return null;

  return (
    <div className="shots">
      <div className="shot shot-solo">
        <Image
          src={single.url}
          alt={single.alt || p.title}
          fill
          sizes="(max-width: 1024px) 60vw, 360px"
        />
      </div>
    </div>
  );
}

function ProjectCard({ p, tint }: { p: WPProject; tint: string }) {
  const domain = p.website
    ? p.website.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
    : null;

  return (
    <article className="work">
      <div className={`work-img ${tint}`}>
        <span className="year-tag">{p.year}</span>
        <ProjectImages p={p} />
      </div>
      <div className="work-body">
        <div className="work-meta">
          {p.clientName ? (
            <>
              <span className="tag">{p.clientName}</span>
              {p.clientRole && (
                <>
                  <span className="dot"></span>
                  <span>{p.clientRole}</span>
                </>
              )}
            </>
          ) : (
            <span className="tag">{domain ?? 'Referencia'}</span>
          )}
        </div>
        <h3 className="work-title">{p.title}</h3>
        <p className="work-desc">{p.description}</p>
        <div className="work-foot">
          <span>{p.year}</span>
          {p.website ? (
            <a
              className="open"
              href={p.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Megnézem a weboldalt!
            </a>
          ) : (
            <span className="open" style={{ opacity: 0.5 }}>Hamarosan</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default async function MunkainkPage() {
  const projects = await getProjects();
  const rows = chunk(projects, 2);

  return (
    <>
      <Nav />

      <header className="page-head">
        <div className="container">
          <div className="page-eyebrow">Portfólió · Referenciák</div>
          <h1 className="page-h1">Vállalkozások weboldalai, amiket <em>tényleg</em> szeretnek a <span className="underline">megrendelőink.</span></h1>

          <div className="page-head-row">
            <p className="page-lead">Néhány kiválasztott projekt az elmúlt évekből — weboldalak, webshopok és egyedi fejlesztések. Mindegyik mögött egy konkrét igény és egy elégedett ügyfél.</p>
          </div>

          <div className="trust trust-head">
            <div className="trust-label">Akiknek már dolgoztunk</div>
            <div className="trust-marquee">
              <div className="trust-track">
                <ClientLogos />
                <ClientLogos />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="showcase">
        <div className="container">

          {rows.map((row, ri) => (
            <div className="proj-grid reveal" key={ri}>
              {row.map((p, ci) => (
                <ProjectCard
                  key={p.databaseId}
                  p={p}
                  tint={TINTS[(ri * 2 + ci) % TINTS.length]}
                />
              ))}
            </div>
          ))}

          <section className="big-cta reveal" id="cta">
            <div>
              <span className="eyebrow"><span className="dot"></span> 2026 Q3-ra még 2 hely van</span>
              <h2 style={{ marginTop: 18 }}>Tied lehet a <em>következő</em><br />referencia.</h2>
              <p>Ha érdekel, írj egy mondatot: mi a vállalkozásod, mi hiányzik a mostani oldaladból. Két munkanapon belül válaszolunk konkrét számmal.</p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: 28, display: 'inline-flex' }}>
                Kezdjük el <span className="arrow">→</span>
              </Link>
            </div>
            <div className="contact-card">
              <div className="contact-card-head">
                <div className="contact-avatar">
                  <Image src="/fanni-small.jpg" alt="Ágoston Fanni" fill sizes="56px" style={{ objectFit: 'cover' }} />
                </div>
                <div>
                  <div className="contact-name">Ágoston Fanni</div>
                  <div className="contact-role">Ügyfélkapcsolat</div>
                </div>
              </div>
              <p className="contact-blurb">Engem hívj — <b>nem értékesítő vagyok</b>, csak segítek megérteni, mi az, ami neked kell, és reális-e az időkeret.</p>
              <div className="contact-rows">
                <a className="contact-row" href="tel:+36301958114">
                  <span className="contact-row-ico">
                    <Phone size={14} />
                  </span>+36 30 / 195 8114
                </a>
                <a className="contact-row" href="mailto:info@weart.hu">
                  <span className="contact-row-ico">
                    <Mail size={14} />
                  </span>info@weart.hu
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
      <RevealWrapper />
    </>
  );
}
