import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image
          src="/images/hero.png"
          alt="L'Équilibre Café Interior"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={`${styles.heroTitle} fade-in`}>Café.<br />Travail.<br />Vie.</h1>
          <p className={`${styles.heroSubtitle} fade-in delay-1`}>
            L'Équilibre n'est pas qu'un café. C'est un espace pensé pour votre rythme de vie. \
            Un lieu où la productivité rencontre la tranquillité, et où la journée se prolonge en musique.
          </p>
          <div className="fade-in delay-2">
            <a href="/#concept" className="btn btn-primary" style={{ marginRight: '1rem' }}>Découvrir le lieu</a>
          </div>
        </div>
      </section>

      {/* Concept Overview Section */}
      <section id="concept" className="section-padding">
        <div className="container text-center">
          <h2 className={styles.sectionTitle}>Un lieu, trois atmosphères</h2>
          <p className={styles.sectionSubtitle}>
            Nous avons conçu L'Équilibre pour répondre à tous vos besoins, du matin au soir.
          </p>

          <div className={styles.grid}>
            {/* Card 1 */}
            <div className="feature-card">
              <div className="feature-img-wrapper">
                <Image src="/images/workspace.png" alt="Workspace" width={400} height={300} className="feature-img" />
              </div>
              <div className="feature-content text-left">
                <h3>Le Workspace</h3>
                <p>Connexion fibre, bureaux ergonomiques, et café premium à volonté pour booster votre productivité.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="feature-card">
              <div className="feature-img-wrapper">
                <Image src="/images/daycare.png" alt="Garderie" width={400} height={300} className="feature-img" />
              </div>
              <div className="feature-content text-left">
                <h3>La Garderie</h3>
                <p>Confiez-nous vos petits dans notre espace sécurisé pendant que vous travaillez ou vous détendez.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="feature-card">
              <div className="feature-img-wrapper">
                <Image src="/images/dj.png" alt="DJ Lounge" width={400} height={300} className="feature-img" />
              </div>
              <div className="feature-content text-left">
                <h3>Le Lounge & DJ</h3>
                <p>À la nuit tombée, notre café se transforme. Ambiance tamisée, cocktails signature et DJ sets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Workspace */}
      <section id="workspace" className="section-padding" style={{ backgroundColor: 'var(--color-brand-white)' }}>
        <div className="container">
          <div className={styles.flexSection}>
            <div className={styles.flexImageWrapper}>
              <Image src="/images/workspace.png" alt="Workspace Detail" width={600} height={500} className={styles.flexImage} />
            </div>
            <div>
              <h2 className={styles.sectionTitle}>Votre bureau idéal</h2>
              <p>Oubliez la solitude du télétravail. Notre "Espace Pro" offre le cadre parfait pour les freelances et entrepreneurs créatifs. Des zones silencieuses pour la concentration maximale, et des espaces collaboratifs pour vos réunions informelles.</p>
              <ul style={{ listStylePosition: 'inside', marginBottom: '2rem', color: 'var(--color-text-light)' }}>
                <li>Wifi très haut débit garanti</li>
                <li>Sièges ergonomiques et grandes tables</li>
                <li>Prises et ports USB à chaque place</li>
                <li>Accès prioritaire au barista</li>
              </ul>
              <Link href="/reserver" className="btn btn-outline">Voir les tarifs Coworking</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Garderie */}
      <section id="garderie" className="section-padding">
        <div className="container">
          <div className={styles.flexSection} style={{ flexDirection: 'row-reverse' }}>
            <div className={styles.flexImageWrapper}>
              <Image src="/images/daycare.png" alt="Garderie Detail" width={600} height={500} className={styles.flexImage} />
            </div>
            <div>
              <h2 className={styles.sectionTitle}>Tranquillité d'esprit</h2>
              <p>Être parent ne devrait jamais vous empêcher d'avoir un moment pour vous ou de travailler sur vos projets. Notre garderie intégrée est pensée comme un véritable cocon d'éveil.</p>
              <p>Encadrés par des professionnels certifiés, vos enfants s'épanouissent dans un espace créatif et sécurisé pendant que vous profitez de votre café paisiblement dans la salle adjacente.</p>
              <Link href="/reserver" className="btn btn-primary" style={{ marginTop: '1rem' }}>Réserver pour la garderie</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Night / DJ */}
      <section id="night" className={`section-padding ${styles.darkSection}`}>
        <div className="container text-center">
          <h2 className={styles.sectionTitle}>Quand tombe la nuit...</h2>
          <p className={styles.sectionSubtitle}>
            Dès 18h, la lumière se tamise, les ordinateurs se ferment et la musique prend le contrôle.
          </p>
          <div style={{ position: 'relative', width: '100%', maxWidth: '900px', height: '500px', margin: '0 auto', borderRadius: '16px', overflow: 'hidden' }}>
            <Image src="/images/dj.png" alt="DJ Set at night" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ marginTop: '3rem' }}>
            <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
              Notre café se métamorphose en un bar lounge élégant. Dégustez nos cocktails au café signature en écoutant la sélection pointue de nos DJs résidents de la scène locale.
            </p>
            <Link href="/programme" className="btn btn-outline" style={{ color: 'var(--color-brand-gold)', borderColor: 'var(--color-brand-gold)' }}>Le programme de la semaine</Link>
          </div>
        </div>
      </section>

      <footer id="contact" className={styles.footer}>
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
