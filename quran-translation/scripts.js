const ayah = document.querySelector(".ayah");
const ayahTranslation = document.querySelector(".ayah-translation");
const ayahBtn = document.querySelector(".ayahBtn");

// from Al-Emrann (Surah 2)
const getAyah = async () => {
  const res = await fetch(
    `https://quranenc.com/api/v1/translation/aya/english_saheeh/2/${getRandomAyah()}`
  );
  const data = await res.json();
  console.log(data);

  ayah.innerHTML = data.result.arabic_text;
  ayahTranslation.innerHTML = data.result.translation;
};

const getRandomAyah = (surahNo) => {
  return Math.ceil(Math.random() * 200) - 1;
};
// const getAyah = async () => {
//   const res = await fetch(
//     `https://tafsir.app/get.php?src=saadi&s=2&a=3&ver=1`,
//     { mode: "no-cors" }
//   );
//   const data = await res.json();
//   console.log(data);

//   ayah.innerHTML = data;
// };

// const getRandomAyah = (surahNo) => {
//   return Math.ceil(Math.random() * 200) - 1;
// };
getAyah();
ayahBtn.addEventListener("click", getAyah);
