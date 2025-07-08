const translations = {
    en: {
        book: "BOOK IN ADVANCE",
        food: "FOOD / DRINK",
        thai: "Thai",
        eng: "Eng",
        logo: "Thongeiw",
    },
    th: {
        book: "จองโต๊ะ",
        food: "อาหารและเครื่องดื่ม",
        thai: "ไทย",
        eng: "อังกฤษ",
        logo: "ตองเอี่ยว",
    },
};

const toggle = document.querySelector('input[type="checkbox"]');

const elements = {
    book: document.getElementById("book-text"),
    food: document.getElementById("food-text"),
    thai: document.getElementById("label-thai"),
    eng: document.getElementById("label-eng"),
    logo: document.getElementById("logo-text"),
};

function updateLanguage(lang) {
    elements.book.textContent = translations[lang].book;
    elements.food.textContent = translations[lang].food;
    elements.thai.textContent = translations[lang].thai;
    elements.eng.textContent = translations[lang].eng;
    elements.logo.textContent = translations[lang].logo;
}

toggle.addEventListener("change", () => {
    const lang = toggle.checked ? "en" : "th";
    updateLanguage(lang);
});

// ✅ ตั้งค่าเริ่มต้น
updateLanguage("th");
