const audio0 = new Audio(
  "https://cdn.islamic.network/quran/audio/64/ar.alafasy/262.mp3"
);
const audio1 = new Audio(
  "https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/112.mp3"
);

const audio2 = new Audio(
  "https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/113.mp3"
);
const audio3 = new Audio(
  "https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/114.mp3"
);

const audios = [audio0, audio1, audio2, audio3];
const boardItems = document.querySelectorAll(".board-item");

boardItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    audios.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });

    audios[index].play();
  });
});
