import React, { useState } from 'react';
import UngkapanCinta from './UngkapanCinta';
import Profil from './profil'; // Impor komponen Profil yang baru
import './App.css'; // Kita akan buat CSS ini untuk navigasi

function App() {
  // State untuk melacak halaman mana yang sedang aktif
  const [halamanAktif, setHalamanAktif] = useState('ungkapan'); // 'ungkapan' atau 'profil'

  return (
    <div className="app-container">
      {/* --- Navigasi Utama --- */}
      <nav className="app-nav">
        <button
          className={`nav-button ${halamanAktif === 'ungkapan' ? 'active' : ''}`}
          onClick={() => setHalamanAktif('ungkapan')}
        >
          💌 Ungkapan Cinta
        </button>
        <button
          className={`nav-button ${halamanAktif === 'profil' ? 'active' : ''}`}
          onClick={() => setHalamanAktif('profil')}
        >
          👤 Profil Saya
        </button>
      </nav>

      {/* --- Konten Halaman (berubah sesuai state) --- */}
      <main>
        {halamanAktif === 'ungkapan' ? <UngkapanCinta /> : <Profil />}
      </main>
    </div>
  );
}

export default App;