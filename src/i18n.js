import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  th: {
    translation: {
      App: "แอป",
      Language: "ภาษา",
      Paris: "ปารีส",
      "Paris is the capital and largest city of France, located in the north-central part of the country. Paris is known for its rich history, cultural heritage, art, architecture, and is often referred to as the `City of Light.`":
        "ปารีสเป็นเมืองหลวงและเมืองที่ใหญ่ที่สุดของประเทศฝรั่งเศส ตั้งอยู่ทางตอนเหนือ-กลางของประเทศ ปารีสมีชื่อเสียงในด้านประวัติศาสตร์อันยาวนาน มรดกทางวัฒนธรรม ศิลปะ สถาปัตยกรรม และมักเรียกกันว่า `เมืองแห่งแสงสว่าง`",
      "Learn More": "ดูรายละเอียด",
      Share: "แชร์",
    },
  },
  en: {
    translation: {
      App: "App",
      Language: "Language",
      Paris: "Paris",
      "Paris is the capital and largest city of France, located in the north-central part of the country. Paris is known for its rich history, cultural heritage, art, architecture, and is often referred to as the `City of Light.`":
        "Paris is the capital and largest city of France, located in the north-central part of the country. Paris is known for its rich history, cultural heritage, art, architecture, and is often referred to as the `City of Light.`",

      "Learn More": "LEARN More",
      Share: "Share",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
