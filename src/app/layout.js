import "./globals.css";
import Link from 'next/link';

export const metadata = {
  title: "L'Équilibre Café | Workspace, Daycare & DJ Lounge",
  description: "A modern coffee shop that balances work, play, daycare, and nightlife.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <nav className="navbar">
          <div className="container">
            <Link href="/" className="nav-logo">L'Équilibre</Link>
            <div className="nav-links">
              <a href="/#concept" className="nav-item">Le Concept</a>
              <a href="/#workspace" className="nav-item">Espace Pro</a>
              <a href="/#garderie" className="nav-item">Garderie</a>
              <Link href="/programme" className="nav-item">Café & DJ</Link>
              <Link href="/reserver" className="btn btn-primary">Réserver</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
