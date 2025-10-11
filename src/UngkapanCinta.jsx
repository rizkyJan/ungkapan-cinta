import React, { useState } from "react";
import "./UngkapanCinta.css";

const pesanNggak = [
  "Nggak",
  "Yakin?",
  "Coba pikir lagi",
  "Ayolaaahhh",
  "Please...",
  "Kok kamu gitu?",
  "Aku sedih loh",
  "Jangan lari terus",
  "Kena deh!",
];

const UngkapanCinta = () => {
  const [sudahDiterima, setSudahDiterima] = useState(false);
  const [jumlahNggak, setJumlahNggak] = useState(0);
  const [notif, setNotif] = useState("");

  const ukuranTombolIya = 16 + jumlahNggak * 8;
  const teksTombolNggak = pesanNggak[jumlahNggak % pesanNggak.length];

  function handleIyaClick() {
    setSudahDiterima(true);
  }

  // Fungsi ini HANYA untuk mengubah teks jika tombol berhasil diklik
  function handleNggakClick() {
    setJumlahNggak(jumlahNggak + 1);
  }

  // FUNGSI UTAMA untuk memindahkan tombol
  function pindahkanTombol(e) {
    // Tampilkan notifikasi
    setNotif("Eits ga kena, coba lagi! 😉");

    // Hilangkan notifikasi setelah 2 detik
    setTimeout(() => {
      setNotif("");
    }, 2000);

    const tombol = e.currentTarget;
    const container = tombol.closest(".container-cinta"); // Cari container terdekat

    if (!container) return; // Pengaman jika container tidak ditemukan

    const containerRect = container.getBoundingClientRect();
    const tombolRect = tombol.getBoundingClientRect();

    let newTop = Math.random() * (containerRect.height - tombolRect.height);
    let newLeft = Math.random() * (containerRect.width - tombolRect.width);

    tombol.style.position = "absolute";
    tombol.style.top = `${newTop}px`;
    tombol.style.left = `${newLeft}px`;
  }

  return (
    <div className="container-cinta">
      {notif && <div className="notif">{notif}</div>}

      {sudahDiterima ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Bears kissing"
            className="gambar-gif"
          />
          <h1 className="teks-sukses">Yeay! Aku sayang kamu juga! 💕</h1>
        </>
      ) : (
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
              onClick={handleNggakClick} // Untuk mengubah teks jika berhasil diklik
              onMouseEnter={pindahkanTombol} // Event untuk MOUSE di DESKTOP
              onTouchStart={pindahkanTombol} // Event untuk SENTUHAN di MOBILE
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
