'use client';

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

function ScrollReveal({ children, className = '', delay = 0 }) {
  return (
    <div
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero} data-bg="dark">
        <Image
          src="/images/hero.png"
          alt="L'Équilibre Café Interior"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={`${styles.heroTitle} fade-in`}>
            Café.<br />Travail.<br /><span className={styles.heroAccent}>Vie.</span>
          </h1>
          <p className={`${styles.heroSubtitle} fade-in delay-1`}>
            L'Équilibre n'est pas qu'un café. C'est un espace pensé pour votre
            rythme de vie. Un lieu où la productivité rencontre la tranquillité,
            et où la journée se prolonge en musique.
          </p>
          <div className={`${styles.heroCtas} fade-in delay-2`}>
            <a href="/#concept" className="btn btn-glow">Découvrir le lieu</a>
            <Link href="/reserver" className="btn btn-glow-outline">Réserver</Link>
          </div>
        </div>
        <div className={styles.heroScrollIndicator}>
          <span>Scroll</span>
          <div className={styles.scrollLine}></div>
        </div>
      </section>

      {/* Concept Overview Section */}
      <section id="concept" className="section-padding" data-bg="light">
        <div className="container text-center">
          <ScrollReveal>
            <div className="section-divider"></div>
            <h2 className={styles.sectionTitle}>Un lieu, trois atmosphères</h2>
            <p className={styles.sectionSubtitle}>
              Nous avons conçu L'Équilibre pour répondre à tous vos besoins, du matin au soir.
            </p>
          </ScrollReveal>

          <div className={styles.grid}>
            {/* Card 1 */}
            <ScrollReveal delay={0.1}>
              <div className="feature-card">
                <div className="feature-img-wrapper">
                  <Image src="/images/workspace.png" alt="Workspace" width={400} height={300} className="feature-img" />
                </div>
                <div className="feature-content">
                  <span className="feature-tag">☕ Wifi Fibre</span>
                  <h3>Le Workspace</h3>
                  <p>Connexion fibre, bureaux ergonomiques, et café premium à volonté pour booster votre productivité.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2 */}
            <ScrollReveal delay={0.2}>
              <div className="feature-card">
                <div className="feature-img-wrapper">
                  <Image src="/images/daycare.png" alt="Garderie" width={400} height={300} className="feature-img" />
                </div>
                <div className="feature-content">
                  <span className="feature-tag">🧒 Sécurisé</span>
                  <h3>La Garderie</h3>
                  <p>Confiez-nous vos petits dans notre espace sécurisé pendant que vous travaillez ou vous détendez.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3 */}
            <ScrollReveal delay={0.3}>
              <div className="feature-card">
                <div className="feature-img-wrapper">
                  <Image src="/images/dj.png" alt="DJ Lounge" width={400} height={300} className="feature-img" />
                </div>
                <div className="feature-content">
                  <span className="feature-tag">🎧 Live DJ</span>
                  <h3>Le Lounge & DJ</h3>
                  <p>À la nuit tombée, notre café se transforme. Ambiance tamisée, cocktails signature et DJ sets.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Deep Dive: Workspace */}
      <section id="workspace" className="section-padding" style={{ backgroundColor: 'var(--color-brand-white)' }} data-bg="light">
        <div className="container">
          <ScrollReveal>
            <div className={styles.flexSection}>
              <div className={styles.flexImageWrapper}>
                <Image src="/images/workspace.png" alt="Workspace Detail" width={600} height={500} className={styles.flexImage} />
              </div>
              <div>
                <div className="section-divider" style={{ margin: '0 0 1.5rem' }}></div>
                <h2 className={styles.sectionTitle}>Votre bureau idéal</h2>
                <p>Oubliez la solitude du télétravail. Notre &quot;Espace Pro&quot; offre le cadre parfait pour les freelances et entrepreneurs créatifs. Des zones silencieuses pour la concentration maximale, et des espaces collaboratifs pour vos réunions informelles.</p>
                <ul className={styles.featureList}>
                  <li>Wifi très haut débit garanti</li>
                  <li>Sièges ergonomiques et grandes tables</li>
                  <li>Prises et ports USB à chaque place</li>
                  <li>Accès prioritaire au barista</li>
                </ul>
                <Link href="/reserver" className="btn btn-outline">Voir les tarifs Coworking</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Deep Dive: Garderie */}
      <section id="garderie" className="section-padding" data-bg="light">
        <div className="container">
          <ScrollReveal>
            <div className={styles.flexSection} style={{ flexDirection: 'row-reverse' }}>
              <div className={styles.flexImageWrapper}>
                <Image src="/images/daycare.png" alt="Garderie Detail" width={600} height={500} className={styles.flexImage} />
              </div>
              <div>
                <div className="section-divider" style={{ margin: '0 0 1.5rem' }}></div>
                <h2 className={styles.sectionTitle}>Tranquillité d'esprit</h2>
                <p>Être parent ne devrait jamais vous empêcher d'avoir un moment pour vous ou de travailler sur vos projets. Notre garderie intégrée est pensée comme un véritable cocon d'éveil.</p>
                <p>Encadrés par des professionnels certifiés, vos enfants s'épanouissent dans un espace créatif et sécurisé pendant que vous profitez de votre café paisiblement dans la salle adjacente.</p>
                <Link href="/reserver" className="btn btn-primary" style={{ marginTop: '1rem' }}>Réserver pour la garderie</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Deep Dive: Night / DJ */}
      <section id="night" className={`section-padding ${styles.darkSection}`} data-bg="dark">
        <div className="container text-center">
          <ScrollReveal>
            <div className="section-divider"></div>
            <h2 className={styles.sectionTitle}>Quand tombe la nuit...</h2>
            <p className={styles.sectionSubtitle}>
              Dès 18h, la lumière se tamise, les ordinateurs se ferment et la musique prend le contrôle.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className={styles.darkImageWrapper}>
              <Image src="/images/dj.png" alt="DJ Set at night" fill style={{ objectFit: 'cover' }} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div style={{ marginTop: '3rem' }}>
              <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
                Notre café se métamorphose en un bar lounge élégant. Dégustez nos cocktails au café signature en écoutant la sélection pointue de nos DJs résidents de la scène locale.
              </p>
              <Link href="/programme" className="btn btn-glow-outline" style={{ borderColor: 'rgba(200, 149, 108, 0.6)' }}>Le programme de la semaine</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer id="contact" className={styles.footer} data-bg="dark">
        <div className="container">
          <div className={styles.footerGrid}>
            <div>
              <div className={styles.footerLogo}>L'Équilibre</div>
              <p style={{ fontSize: '0.9rem' }}>Café • Espace de travail • Garderie • DJ Lounge</p>
            </div>
            <div>
              <h4 className={styles.footerTitle}>Nous trouver</h4>
              <ul className={styles.footerList}>
                <li>12 Rue du Café, 75000 Paris</li>
                <li>contact@lequilibre-cafe.com</li>
                <li>+33 1 23 45 67 89</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.footerTitle}>Horaires</h4>
              <ul className={styles.footerList}>
                <li>Cafe/Workspace: 8h00 - 18h00</li>
                <li>Garderie: 8h30 - 17h30</li>
                <li>Lounge & DJ: 18h00 - 01h00</li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; {new Date().getFullYear()} L'Équilibre Café. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
