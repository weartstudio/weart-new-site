import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import RevealWrapper from '../components/RevealWrapper';
import HeroAtmosphere from '../components/HeroAtmosphere';

export const metadata: Metadata = {
  title: 'Adatkezelési tájékoztató – Weart',
  description:
    'Hogyan kezeljük a kapcsolatfelvétel során megadott adataidat. Mit, miért és meddig tárolunk, kinek adjuk át, és milyen jogaid vannak.',
};

export default function AdatvedelemPage() {
  return (
    <>
      <Nav />

      <header className="page-head">
        <HeroAtmosphere />
        <div className="container">
          <div className="page-eyebrow">Adatkezelés</div>
          <h1 className="page-h1">Adatkezelési <span className="underline">tájékoztató.</span></h1>
          <p className="page-lead">Röviden és érthetően arról, hogy mi történik az adataiddal, ha felveszed velünk a kapcsolatot. Nem adjuk tovább, nem iratkoztatunk fel hírlevélre — csak a megkeresésed megválaszolására használjuk.</p>
        </div>
      </header>

      <section className="sec">
        <div className="container">
          <div className="legal reveal">
            <p className="legal-meta">Hatályos: 2026. június 1. · Utolsó frissítés: 2026. június 1.</p>

            <h2>1. Ki kezeli az adataidat?</h2>
            <p>
              Az adatkezelő a weART (a weart.hu üzemeltetője). Elérhetőségeink:
            </p>
            <ul>
              <li>E-mail: <a href="mailto:info@weart.hu">info@weart.hu</a></li>
              <li>Telefon: <a href="tel:+36301958114">+36 30 / 195 8114</a></li>
              <li>Cégadatok (székhely, adószám / nyilvántartási szám): <strong>[kitöltendő]</strong></li>
            </ul>

            <h2>2. Milyen adatokat kezelünk, és miért?</h2>
            <p>
              Amikor a kapcsolati vagy az ajánlatkérő űrlapot kitöltöd, az alábbi
              adatokat kezeljük, kizárólag azért, hogy a megkeresésedre válaszolni
              tudjunk, és ajánlatot adhassunk:
            </p>
            <ul>
              <li><strong>Név</strong> — hogy meg tudjunk szólítani.</li>
              <li><strong>E-mail cím</strong> — hogy válaszolni tudjunk.</li>
              <li><strong>Telefonszám</strong> (opcionális) — ha telefonos visszahívást kérsz.</li>
              <li><strong>Cégnév</strong> (opcionális) — a pontosabb ajánlathoz.</li>
              <li><strong>Az üzeneted tartalma, a téma és a tervezett keret</strong> — hogy érdemben tudjunk segíteni.</li>
            </ul>
            <p>
              Nem gyűjtünk a megkereséshez nem szükséges adatot, és nem hozunk
              automatizált döntést az adataid alapján.
            </p>

            <h2>3. Mi az adatkezelés jogalapja?</h2>
            <p>
              Az adatkezelés a hozzájárulásodon alapul (GDPR 6. cikk (1) a) pont),
              amelyet az űrlap elküldésekor a jelölőnégyzet bepipálásával adsz meg.
              A hozzájárulásodat bármikor visszavonhatod (lásd a 7. pontot) — ez nem
              érinti a visszavonás előtti adatkezelés jogszerűségét.
            </p>

            <h2>4. Meddig őrizzük az adataidat?</h2>
            <p>
              A megkeresésedet és a hozzá tartozó adatokat addig őrizzük, amíg a
              kommunikáció indokolja, legfeljebb az utolsó kapcsolatfelvételtől
              számított <strong>24 hónapig</strong>. Ha ebből szerződés jön létre,
              a számviteli és adójogi előírások szerinti ideig (jellemzően 8 évig)
              tároljuk a kötelezően megőrzendő dokumentumokat.
            </p>

            <h2>5. Kinek adjuk át — adatfeldolgozók</h2>
            <p>
              Az adataidat nem adjuk el és nem adjuk tovább marketing célból.
              A működéshez az alábbi szolgáltatókat vesszük igénybe, akik
              kizárólag a mi utasításunk szerint kezelik az adatokat:
            </p>
            <ul>
              <li><strong>Tárhelyszolgáltató</strong> — a weboldal és az űrlapadatok tárolása: <strong>[tárhelyszolgáltató neve / adatai]</strong>.</li>
              <li><strong>E-mail szolgáltató</strong> — az értesítők és a válaszüzenetek kézbesítése.</li>
            </ul>
            <p>
              Az űrlap beküldése a saját rendszerünkön keresztül történik; az
              adataidat az EU-n belül tároljuk. Ha ez bármely szolgáltató esetén
              megváltozna, ezt a tájékoztatót frissítjük.
            </p>

            <h2>6. Sütik (cookie-k)</h2>
            <p>
              Az oldal a működéséhez szükséges alapvető sütiket használ. Ha
              látogatottság-mérést vagy egyéb, nem feltétlenül szükséges sütit is
              alkalmazunk, erről külön tájékoztatást és — ahol szükséges —
              hozzájárulás-kérést jelenítünk meg.
            </p>

            <h2>7. Milyen jogaid vannak?</h2>
            <p>A vonatkozó adatvédelmi szabályozás szerint jogosult vagy:</p>
            <ul>
              <li>tájékoztatást kérni a kezelt adataidról (<strong>hozzáférés</strong>);</li>
              <li>kérni a pontatlan adatok <strong>helyesbítését</strong>;</li>
              <li>kérni az adataid <strong>törlését</strong> (elfeledtetés);</li>
              <li>kérni az adatkezelés <strong>korlátozását</strong>;</li>
              <li>élni az <strong>adathordozhatóság</strong> jogával;</li>
              <li><strong>visszavonni a hozzájárulásodat</strong> bármikor.</li>
            </ul>
            <p>
              Bármelyik kéréshez írj az <a href="mailto:info@weart.hu">info@weart.hu</a>
              címre — indokolatlan késedelem nélkül, legkésőbb a jogszabályi
              határidőn belül válaszolunk.
            </p>

            <h2>8. Panasz benyújtása</h2>
            <p>
              Ha úgy érzed, hogy az adatkezelésünk nem megfelelő, először keress
              minket bizalommal. Panaszt tehetsz a Nemzeti Adatvédelmi és
              Információszabadság Hatóságnál (NAIH) is:
            </p>
            <ul>
              <li>Web: <a href="https://naih.hu" target="_blank" rel="noopener noreferrer">naih.hu</a></li>
              <li>Cím: 1055 Budapest, Falk Miksa utca 9–11.</li>
              <li>E-mail: ugyfelszolgalat@naih.hu</li>
            </ul>

            <h2>9. A tájékoztató módosítása</h2>
            <p>
              A tájékoztatót szükség esetén frissítjük. A mindenkori aktuális
              változat ezen az oldalon érhető el, a tetején feltüntetett
              hatálybalépési dátummal.
            </p>

            <p className="legal-note">
              Kérdésed van az adatkezeléssel kapcsolatban? Írj az
              <a href="mailto:info@weart.hu"> info@weart.hu</a> címre, vagy nézd meg a <a href="/contact">kapcsolat oldalt</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <RevealWrapper />
    </>
  );
}
