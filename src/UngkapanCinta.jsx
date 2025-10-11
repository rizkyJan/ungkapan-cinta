import React, { useState } from 'react';
import './UngkapanCinta.css';

const pesanNggak = [
  "Nggak", "Yakin?", "Coba pikir lagi", "Ayolaaahhh", "Please...", "Kok kamu gitu?", "Aku sedih loh", "Jangan lari terus", "Kena deh!"
];

const UngkapanCinta = () => {
  const [sudahDiterima, setSudahDiterima] = useState(false);
  const [jumlahNggak, setJumlahNggak] = useState(0);
  const [notif, setNotif] = useState('');

  const ukuranTombolIya = 16 + jumlahNggak * 8;
  const teksTombolNggak = pesanNggak[jumlahNggak % pesanNggak.length];

  function handleIyaClick() {
    setSudahDiterima(true);
  }

  function handleNggakClick() {
    setJumlahNggak(jumlahNggak + 1);
  }

  function pindahkanTombol(e) {
    setNotif('Eits ga kena, coba lagi! 😉');
    setTimeout(() => setNotif(''), 2000);

    const tombol = e.currentTarget;
    if (tombol.style.position !== 'absolute') {
      tombol.style.position = 'absolute';
    }

    const container = tombol.closest('.container-tombol');
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const tombolRect = tombol.getBoundingClientRect();

    const maxX = containerRect.width - tombolRect.width;
    const maxY = containerRect.height - tombolRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    tombol.style.left = '0px';
    tombol.style.top = '0px';
    tombol.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }

  return (
    <div className="container-cinta">
      {notif && <div className="notif">{notif}</div>}

      {sudahDiterima ? (
        <div className="container-sukses">
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Bears kissing"
            className="gambar-gif"
          />
          <h1 className="teks-sukses">Yeay! Aku sayang kamu juga! 💕</h1>
          <p className="teks-tambahan">
            Selamat, kita pacaran mulai hari ini! 🥳
          </p>
          <p className="teks-ajakan">
            Yuk lanjut di WhatsApp untuk merayakannya...
          </p>
          <a
            href="https://wa.me/6289522952652" // <-- GANTI DENGAN NOMOR ANDA
            target="_blank"
            rel="noopener noreferrer"
            className="tombol tombol-wa"
          >
            💬 Lanjut ke WhatsApp
          </a>
        </div>
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
              onClick={handleNggakClick}
              onMouseEnter={pindahkanTombol}
              onTouchStart={pindahkanTombol}
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