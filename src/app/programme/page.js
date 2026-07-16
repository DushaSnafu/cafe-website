import styles from "./page.module.css";
import Link from 'next/link';

export const metadata = {
    title: "Programme | L'Équilibre Café",
    description: "Découvrez notre programmation de la semaine : DJ Sets, soirées lounge et événements chill.",
};

const events = [
    {
        day: "Jeudi",
        date: "16 Juillet",
        title: "Afterwork Chill Vibes",
        artist: "DJ Solange",
        time: "18:00 - 23:00",
        genre: "Lo-Fi · Nu-jazz · Neo-soul",
        description: "La transition parfaite pour terminer la semaine de travail. Des sonorités Lo-Fi, Nu-Jazz et Neo-Soul pour se détendre autour d'un cocktail signature."
    },
    {
        day: "Vendredi",
        date: "17 Juillet",
        title: "House & Latte",
        artist: "Duo Groove",
        time: "20:00 - 01:00",
        genre: "Deep house · Soulful",
        description: "La température monte d'un cran. Un set Deep House élégant inspiré des nuits berlinoises, adapté à un espace lounge premium."
    },
    {
        day: "Samedi",
        date: "18 Juillet",
        title: "Vinyles Only",
        artist: "Collectif Wax",
        time: "19:00 - 01:00",
        genre: "Funk · Disco · House",
        description: "Retour aux sources avec une sélection 100% vinyles. De la Funk au Disco en passant par la House classique."
    }
];

export default function Programme() {
    return (
        <main className={styles.main}>
            <div className={styles.heroOverlay}></div>
            <div className="container relative" style={{ zIndex: 1, position: 'relative' }}>
                <div className={styles.header}>
                    <Link href="/" className={styles.backLink}>← Retour à l'accueil</Link>
                    <p className={styles.kicker}>Cette semaine à L’Équilibre</p>
                    <h1 className={styles.title}>Après 18 h,<br />on monte le son<span>.</span></h1>
                    <p className={styles.subtitle}>Dès 18h, la lumière se tamise, les ordinateurs se ferment et la musique prend le contrôle.</p>
                </div>

                <div className={styles.programList}>
                    {events.map((evt, index) => (
                        <div key={index} className={styles.eventCard}>
                            <div className={styles.eventDate}>
                                <span className={styles.day}>{evt.day}</span>
                                <span className={styles.date}>{evt.date}</span>
                                <span className={styles.time}>{evt.time}</span>
                            </div>
                            <div className={styles.eventContent}>
                                <span className={styles.genre}>{evt.genre}</span>
                                <h2 className={styles.eventTitle}>{evt.title}</h2>
                                <h3 className={styles.eventArtist}>Avec <span className={styles.artistName}>{evt.artist}</span></h3>
                                <p className={styles.eventDesc}>{evt.description}</p>
                                <Link href="/reserver" className={`btn btn-primary ${styles.bookBtn}`}>
                                    Réserver une table
                                </Link>
                            </div>
                            <span className={styles.eventIndex}>0{index + 1}</span>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
