import React from 'react';
import './Profil.css'; // Kita akan buat file CSS ini nanti

// Ganti URL gambar di bawah ini dengan URL gambar Anda sendiri.
// Anda bisa mengunggah gambar ke imgbb.com atau sejenisnya untuk mendapatkan URL.
const FOTO_PROFIL = 'https://i.ibb.co/6PzQyq8/placeholder-profile.jpg';
const FOTO_GALERI = [
  'https://picsum.photos/id/10/300/300',
  'https://picsum.photos/id/20/300/300',
  'https://picsum.photos/id/30/300/300',
  'https://picsum.photos/id/40/300/300',
  'https://picsum.photos/id/50/300/300',
  'https://picsum.photos/id/60/300/300',
];

const Profil = () => {
  return (
    <div className="profil-card">
      {/* --- Bagian Header Profil --- */}
      <header className="profil-header">
        <img src={FOTO_PROFIL} alt="Foto Profil Rizky Januar Afrizal" className="profil-gambar" />
        <div className="profil-info">
          <h1 className="profil-nama">Rizky Januar Afrizal</h1>
          <a href="https://www.instagram.com/rzkyja" target="_blank" rel="noopener noreferrer" className="profil-ig">
            @rzkyja
          </a>
          <p className="profil-alamat">📍 Janti</p>
        </div>
      </header>

      {/* --- Bagian Menu --- */}
      <nav className="profil-menu">
        <button className="menu-item active">Postingan</button>
        <button className="menu-item">Reels</button>
        <button className="menu-item">Ditandai</button>
      </nav>

      {/* --- Bagian Galeri Foto --- */}
      <main className="galeri-container">
        {FOTO_GALERI.map((foto, index) => (
          <div className="galeri-item" key={index}>
            <img src={foto} alt={`Galeri foto ${index + 1}`} />
          </div>
        ))}
      </main>
    </div>
  );
};

export default Profil;