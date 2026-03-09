"use client";

import styles from "./page.module.css";
import Link from 'next/link';
import { useState } from 'react';

export default function Reserver() {
    const [selectedSpace, setSelectedSpace] = useState('Le Workspace');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('11:00');

    const spaces = [
        { id: 'Le Workspace', title: 'Le Workspace', desc: 'Bureau individuel', price: '15,00 €' },
        { id: 'La Garderie', title: 'La Garderie', desc: 'Session 2 heures', price: '25,00 €' },
        { id: 'Le Lounge & DJ', title: 'Le Lounge & DJ', desc: 'Table pour 2-4 pers.', price: 'Gratuit' },
    ];

    const timeSlots = [
        { time: '09:00', disabled: true },
        { time: '10:00', disabled: false },
        { time: '11:00', disabled: false },
        { time: '13:30', disabled: false },
        { time: '15:00', disabled: false },
        { time: '16:30', disabled: false },
    ];

    const getCurrentPrice = () => {
        const space = spaces.find(s => s.id === selectedSpace);
        return space ? space.price : '0,00 €';
    };

    return (
        <main className={styles.main}>
            <div className="container">
                <div className={styles.header}>
                    <Link href="/" className={styles.backLink}>← Retour à l'accueil</Link>
                    <h1 className={styles.title}>Réserver votre espace</h1>
                    <p className={styles.subtitle}>Sélectionnez l'espace, la date et l'heure pour garantir votre place.</p>
                </div>

                <div className={styles.bookingContainer}>
                    {/* Left Column: Form & Selection */}
                    <div className={styles.formSection}>
                        <form className={styles.form}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>1. Choisissez votre espace</label>
                                <div className={styles.optionsGrid}>
                                    {spaces.map((space) => (
                                        <div
                                            key={space.id}
                                            className={`${styles.optionCard} ${selectedSpace === space.id ? styles.selected : ''}`}
                                            onClick={() => setSelectedSpace(space.id)}
                                        >
                                            <h3>{space.title}</h3>
                                            <p>{space.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>2. Sélectionnez une date</label>
                                <input
                                    type="date"
                                    className={styles.input}
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>3. Choisissez un créneau</label>
                                <div className={styles.timeGrid}>
                                    {timeSlots.map((slot, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            className={`${styles.timeSlot} ${selectedTime === slot.time && !slot.disabled ? styles.selected : ''}`}
                                            disabled={slot.disabled}
                                            onClick={() => !slot.disabled && setSelectedTime(slot.time)}
                                        >
                                            {slot.time} {slot.disabled && '- Complet'}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>4. Vos informations</label>
                                <div className={styles.inputRow}>
                                    <input type="text" placeholder="Prénom" className={styles.input} />
                                    <input type="text" placeholder="Nom" className={styles.input} />
                                </div>
                                <input type="email" placeholder="Adresse e-mail" className={styles.input} style={{ marginTop: '1rem' }} />
                            </div>

                            <button type="button" className={`btn btn-primary ${styles.submitBtn}`} onClick={() => alert('Réservation confirmée ! (Ceci est une démo)')}>
                                Confirmer la réservation
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Summary */}
                    <div className={styles.summarySection}>
                        <div className={styles.summaryCard}>
                            <h3 className={styles.summaryTitle}>Résumé de votre réservation</h3>

                            <div className={styles.summaryItem}>
                                <span className={styles.summaryLabel}>Espace</span>
                                <span className={styles.summaryValue}>{selectedSpace}</span>
                            </div>

                            <div className={styles.summaryItem}>
                                <span className={styles.summaryLabel}>Date</span>
                                <span className={styles.summaryValue}>{selectedDate || "Non sélectionnée"}</span>
                            </div>

                            <div className={styles.summaryItem}>
                                <span className={styles.summaryLabel}>Heure</span>
                                <span className={styles.summaryValue}>{selectedTime || "Non sélectionnée"}</span>
                            </div>

                            <div className={styles.summaryDivider}></div>

                            <div className={styles.summaryItem}>
                                <span className={styles.summaryLabel}>Total</span>
                                <span className={styles.summaryTotal}>{getCurrentPrice()}</span>
                            </div>

                            <p className={styles.summaryNote}>
                                * Le paiement s'effectue sur place. Une boisson chaude est incluse dans le tarif Workspace.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
