const menu = document.getElementById('menu');
const audio = new Audio();
const lyricDisplay = document.getElementById('currentLyric');

// 1. INSERT Tuşu ile Menü Aç/Kapat
window.addEventListener('keydown', (e) => {
  if (e.key === 'Insert') {
    menu.classList.toggle('hidden');
  }
});

// 2. Şarkı Sözü Zamanlama Mantığı (Örnek Veri)
const lyrics = [
  { time: 5.5, text: "Bu bir şarkı sözüdür" },
  { time: 10.2, text: "İkinci satıra geçtik" }
];

// 3. Şarkı Çalarken Sözleri Güncelleme
audio.addEventListener('timeupdate', () => {
  const currentTime = audio.currentTime;
  
  // O anki saniyeye uygun sözü bul
  const activeLyric = lyrics.find((l, index) => {
    return currentTime >= l.time && (!lyrics[index + 1] || currentTime < lyrics[index + 1].time);
  });

  if (activeLyric) {
    lyricDisplay.innerText = activeLyric.text;
  }
});