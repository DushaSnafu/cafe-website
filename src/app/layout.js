import "./globals.css";
import Link from 'next/link';

import Navbar from '../components/Navbar';

export const metadata = {
  title: "L'Équilibre Café | Travail, garderie et nuits musicales à Paris",
  description: "Un café hybride à Paris : espace de travail, garderie encadrée et DJ sets dès 18 h.",
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
