import React, { useState } from 'react';
import './UngkapanCinta.css';

// Kumpulan pesan lucu untuk tombol "Nggak"
const pesanNggak = [
  "Nggak", "Yakin?", "Coba pikir lagi", "Ayolaaahhh", "Please...", "Kok kamu gitu?", "Aku sedih loh",
];

const UngkapanCinta = () => {
  const [sudahDiterima, setSudahDiterima] = useState(false);
  const [jumlahNggak, setJumlahNggak] = useState(0);
  // State BARU untuk notifikasi
  const [notif, setNotif] = useState('');

  const ukuranTombolIya = 16 + jumlahNggak * 8;
  const teksTombolNggak = pesanNggak[jumlahNggak % pesanNggak.length];

  function handleIyaClick() {
    setSudahDiterima(true);
  }

  // Fungsi yang dijalankan saat tombol "Nggak" di-klik (jika berhasil)
  function handleNggakClick() {
    setJumlahNggak(jumlahNggak + 1);
  }

  // Fungsi BARU untuk memindahkan tombol saat kursor mendekat
  function handleMouseEnterNggak(e) {
    // Tampilkan notifikasi
    setNotif('Eits ga kena, coba klik lagi sampai kena! 😉');
    
    // Hilangkan notifikasi setelah 2 detik
    setTimeout(() => {
      setNotif('');
    }, 2000);

    const tombol = e.target;
    const container = tombol.parentElement.parentElement; // Ambil container utama

    const containerRect = container.getBoundingClientRect();
    const tombolRect = tombol.getBoundingClientRect();

    // Kalkulasi posisi acak di dalam container
    let newTop = Math.random() * (containerRect.height - tombolRect.height);
    let newLeft = Math.random() * (containerRect.width - tombolRect.width);

    // Terapkan posisi baru ke tombol
    tombol.style.position = 'absolute';
    tombol.style.top = `${newTop}px`;
    tombol.style.left = `${newLeft}px`;
  }

  return (
    <div className="container-cinta">
      {/* Elemen notifikasi BARU */}
      {notif && <div className="notif">{notif}</div>}

      {sudahDiterima ? (
        // Tampilan setelah menerima cinta
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Bears kissing"
            className="gambar-gif"
          />
          <h1 className="teks-sukses">Yeay! Aku sayang kamu juga! 💕</h1>
        </>
      ) : (
        // Tampilan awal sebelum menerima cinta
        <>
          <img
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Bear with roses"
            className="gambar-gif"
          />
          <h1 className="teks-pertanyaan">Maukah kamu jadi pacarku? 🤔</h1>
          <div className="container-tombol">
            <button
              className="tombol tombol-iya"
              style={{ fontSize: `${ukuranTombolIya}px` }}
              onClick={handleIyaClick}
            >
              Iya
            </button>
            <button
              className="tombol tombol-nggak"
              onClick={handleNggakClick}
              onMouseEnter={handleMouseEnterNggak} // Event BARU ditambahkan di sini
            >
              {teksTombolNggak}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UngkapanCinta;