import "./globals.css";
import Link from 'next/link';

import Navbar from '../components/Navbar';

export const metadata = {
  title: "L'Équilibre Café | Workspace, Daycare & DJ Lounge",
  description: "A modern coffee shop that balances work, play, daycare, and nightlife.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
