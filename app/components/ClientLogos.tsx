import Image from 'next/image';

type ClientLogo = { name: string; src: string; w: number; h: number; invert?: boolean };

export const clientLogos: ClientLogo[] = [
  { name: 'Szerszámot.eu', src: '/logos/szerszamot-1.png', w: 694, h: 86 },
  { name: 'Amberg Audio', src: '/logos/amberg.png', w: 268, h: 50 },
  { name: 'Lizingo.hu', src: '/logos/lizingo.webp', w: 273, h: 40 },
  { name: 'Papa Joe Pizza', src: '/logos/papajoe.png', w: 188, h: 58 },
  { name: 'Green Policy Center', src: '/logos/greenpolicy.png', w: 148, h: 56 },
  { name: 'GMR Electric', src: '/logos/gmr.png', w: 300, h: 105 },
  { name: 'Zombori Zenina', src: '/logos/zenina.png', w: 300, h: 114 },
  { name: 'Primor', src: '/logos/primor-1.png', w: 558, h: 71 },
  { name: 'KB Massage Therapy', src: '/logos/khb.png', w: 130, h: 102 },
  { name: 'Hymato', src: '/logos/hymato.png', w: 133, h: 138 },
  { name: 'Gina Lash Terrace', src: '/logos/ginalash.png', w: 768, h: 234 },
  { name: 'KKV Éve', src: '/logos/kkveve.png', w: 56, h: 56 },
  // Fehér / sötét-dobozos logók — invert tükrözi a világos csíkhoz, hogy olvashatók legyenek.
  { name: 'DataMagic', src: '/logos/datamagic.png', w: 192, h: 43, invert: true },
  { name: 'Szentgáli Csaba', src: '/logos/szentgali.png', w: 427, h: 47, invert: true },
  { name: 'House Hévíz', src: '/logos/hosueheviz.png', w: 200, h: 56, invert: true },
  { name: 'VCTC', src: '/logos/vctc-logo.png', w: 161, h: 62 },
  { name: 'Palantax.hu', src: '/logos/palantax.png', w: 280, h: 66, invert: true },
  { name: 'Almási Családi Méhészet', src: '/logos/almasi.png', w: 258, h: 120, invert: true },
];

export default function ClientLogos() {
  return (
    <>
      {clientLogos.map((c, i) => (
        <div className="client-logo" key={i}>
          <Image
            className={`client-logo-img${c.invert ? ' client-logo-img--invert' : ''}`}
            src={c.src}
            alt={c.name}
            width={c.w}
            height={c.h}
            sizes="160px"
          />
        </div>
      ))}
    </>
  );
}
