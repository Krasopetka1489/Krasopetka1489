const fs = require('fs');
const path = require('path');

// Создаем папку для изображений, если ее нет
const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir);
}

// База данных лекарств
const medicines = [
  "Парацетамол",
  "Ибупрофен",
  "Анальгин",
  "Нурофен",
  "Терафлю",
  "Фервекс",
  "Колдрекс",
  "Називин",
  "Тизин",
  "Аквалор",
  "Либексин",
  "Синекод",
  "Гербион",
  "Фалиминт",
  "Стрепсилс",
  "Амбробене",
  "Лазолван",
  "Активированный уголь",
  "Смекта",
  "Лоперамид",
  "Мезим",
  "Фестал",
  "Зодак",
  "Цетрин",
  "Супрастин",
  "Диазолин",
  "Декстран",
  "Бетасерк"
];

// Функция для создания SVG-изображения с названием лекарства
function createSVGImage(medicineName) {
  // Создаем безопасное имя файла
  const filename = `${medicineName.toLowerCase().replace(/\s+/g, '_')}.svg`;
  const filePath = path.join(imagesDir, filename);
  
  // Создаем SVG-контент
  const svgContent = `
  <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#e9ecef"/>
    <circle cx="100" cy="50" r="30" fill="#007bff" opacity="0.2"/>
    <text x="100" y="45" font-family="Arial, sans-serif" font-size="16" fill="#007bff" text-anchor="middle" font-weight="bold">
      ${medicineName}
    </text>
    <text x="100" y="120" font-family="Arial, sans-serif" font-size="12" fill="#6c757d" text-anchor="middle">
      Медицинский препарат
    </text>
  </svg>
  `;
  
  // Записываем SVG в файл
  fs.writeFileSync(filePath, svgContent.trim());
  console.log(`Создано изображение: ${filename}`);
}

// Создаем SVG-изображения для всех лекарств
console.log('Создание SVG-изображений для лекарств...');
medicines.forEach(medicine => {
  createSVGImage(medicine);
});
console.log('Все изображения созданы успешно!');