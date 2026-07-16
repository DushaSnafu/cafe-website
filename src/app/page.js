'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import styles from './page.module.css';

function Reveal({ children, className = '', delay = 0 }) {
  return <div className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

const atmospheres = [
  { title: 'Travailler', note: 'Fibre, calme, café filtre à volonté', image: '/images/workspace.png', href: '#workspace', className: styles.atmosphereLarge },
  { title: 'Respirer', note: 'Une garderie visible depuis le café', image: '/images/daycare.png', href: '#garderie', className: '' },
  { title: 'Sortir', note: 'Cocktails et DJ sets dès 18 h', image: '/images/dj.png', href: '#night', className: '' },
];

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'));
    }, { threshold: 0.08, rootMargin: '0px 0px -40px' });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className={styles.hero} data-bg="dark">
        <Image src="/images/hero.png" alt="Le comptoir et les tables de L'Équilibre Café à Paris" fill priority sizes="100vw" className={styles.heroImage} />
        <div className={styles.heroShade} />
        <div className={`container ${styles.heroContent}`}>
          <p className={`${styles.heroLabel} fade-in`}>Café hybride · Paris</p>
          <h1 className={`${styles.heroTitle} fade-in delay-1`}>Votre journée<br />a enfin trouvé<br /><span>son adresse.</span></h1>
          <div className={`${styles.heroBottom} fade-in delay-2`}>
            <p>Un café vivant qui réunit espace de travail, garderie et nuits musicales — sans vous demander de choisir.</p>
            <div className={styles.heroActions}>
              <a href="#concept" className="btn btn-glow">Explorer le lieu</a>
              <Link href="/reserver" className="btn btn-glow-outline">Réserver</Link>
            </div>
          </div>
        </div>
        <p className={styles.heroHours}>08:00 — 01:00</p>
      </section>

      <section id="concept" className={`section-padding ${styles.concept}`} data-bg="light">
        <div className="container">
          <Reveal className={styles.sectionIntro}>
            <p className={styles.sectionIndex}>Du premier café au dernier morceau</p>
            <h2>Un même lieu.<br /><span>Trois rythmes.</span></h2>
            <p>L’Équilibre évolue avec vous au fil de la journée. Venez vous concentrer, souffler en famille ou prolonger la soirée.</p>
          </Reveal>
          <div className={styles.atmosphereGrid}>
            {atmospheres.map((item, index) => (
              <Reveal key={item.title} delay={index * 90} className={item.className}>
                <a href={item.href} className={styles.atmosphereItem}>
                  <Image src={item.image} alt="" fill sizes="(max-width: 800px) 100vw, 55vw" className={styles.atmosphereImage} />
                  <div className={styles.atmosphereShade} />
                  <div className={styles.atmosphereCopy}>
                    <span>0{index + 1}</span>
                    <div><h3>{item.title}</h3><p>{item.note}</p></div>
                    <b aria-hidden="true">↗</b>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="workspace" className={`section-padding ${styles.workspace}`} data-bg="light">
        <div className="container">
          <div className={styles.splitFeature}>
            <Reveal className={styles.splitImage}>
              <Image src="/images/workspace.png" alt="Clients installés dans l'espace de travail" fill sizes="(max-width: 800px) 100vw, 50vw" />
              <span className={styles.imageNote}>Wifi fibre · appels au calme · prises partout</span>
            </Reveal>
            <Reveal className={styles.splitCopy} delay={100}>
              <p className={styles.sectionIndex}>09:12 · Mode focus</p>
              <h2>Un vrai bureau.<br />Avec un vrai bon café.</h2>
              <p>Des zones silencieuses pour avancer, de grandes tables pour échanger et un barista à quelques mètres. Tout ce qu’il faut, rien de superflu.</p>
              <ul className={styles.featureList}>
                <li><span>01</span>Fibre très haut débit</li>
                <li><span>02</span>Places ergonomiques</li>
                <li><span>03</span>Café filtre inclus</li>
              </ul>
              <Link href="/reserver" className="btn btn-primary">Voir les formules</Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="garderie" className={`section-padding ${styles.family}`} data-bg="dark">
        <div className="container">
          <Reveal className={styles.familyHeader}>
            <p className={styles.sectionIndex}>14:30 · Chacun son espace</p>
            <h2>Vous avancez.<br />Ils explorent.</h2>
            <p>Notre garderie est pensée comme une pièce du café, pas comme une annexe. Un espace lumineux, sécurisé et encadré par des professionnels.</p>
          </Reveal>
          <Reveal className={styles.familyVisual} delay={100}>
            <Image src="/images/daycare.png" alt="La garderie lumineuse attenante au café" fill sizes="100vw" />
            <div className={styles.familyBadge}>
              <span>Garderie encadrée</span>
              <strong>2 heures · 25 €</strong>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="night" className={styles.night} data-bg="dark">
        <Image src="/images/dj.png" alt="DJ set du soir à L'Équilibre Café" fill sizes="100vw" className={styles.nightImage} />
        <div className={styles.nightShade} />
        <div className={`container ${styles.nightContent}`}>
          <Reveal>
            <p className={styles.sectionIndex}>18:00 · Les écrans se ferment</p>
            <h2>Le café<br />change de tempo.</h2>
            <p>Cocktails au café, sélections vinyles et artistes de la scène locale. Une programmation courte, choisie, différente chaque semaine.</p>
            <Link href="/programme" className="btn btn-glow">Voir le programme</Link>
          </Reveal>
        </div>
      </section>

      <footer id="contact" className={styles.footer} data-bg="dark">
        <div className="container">
          <div className={styles.footerLead}><h2>On se retrouve<br />à L’Équilibre<span>.</span></h2><Link href="/reserver" className="btn btn-glow-outline">Réserver une place</Link></div>
          <div className={styles.footerGrid}>
            <div><b>Adresse</b><p>12 rue du Café<br />75000 Paris</p></div>
            <div><b>Horaires</b><p>Lun–mer · 08:00–18:00<br />Jeu–sam · 08:00–01:00</p></div>
            <div><b>Contact</b><p>contact@lequilibre-cafe.com<br />+33 1 23 45 67 89</p></div>
          </div>
          <div className={styles.footerBottom}><span>© {new Date().getFullYear()} L’Équilibre Café</span><span>Café · Travail · Garderie · Musique</span></div>
        </div>
      </footer>
    </main>
  );
}
