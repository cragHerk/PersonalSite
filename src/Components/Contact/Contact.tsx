import type React from "react";

// NOTE: wcześniej plik był w całości zakomentowany.
// Netlify/tsc wtedy traktuje plik jako brak modułu (TS2306: is not a module).
// Ten prosty placeholder przywraca poprawność builda.

const Contact = () => {
  return (
    <section id="contact" className="py-[100px] my-24 text-center">
      <h2 className="text-white text-4xl font-extrabold">Contact</h2>
      <p className="text-violet-300 text-xs mt-4">
        Formularz kontaktowy jest tymczasowo wyłączony (placeholder).
      </p>
    </section>
  );
};

export default Contact;
