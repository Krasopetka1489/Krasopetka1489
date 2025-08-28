const fs = require('fs');
const path = require('path');

// Создаем папку для изображений, если ее нет
const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir);
}

// База данных лекарств с формами выпуска
const medicines = [
  { name: "Парацетамол", form: "Таблетки" },
  { name: "Ибупрофен", form: "Таблетки" },
  { name: "Анальгин", form: "Таблетки" },
  { name: "Нурофен", form: "Таблетки покрытые оболочкой" },
  { name: "Терафлю", form: "Порошок для приготовления раствора для приема внутрь" },
  { name: "Фервекс", form: "Порошок для приготовления раствора для приема внутрь" },
  { name: "Колдрекс", form: "Порошок для приготовления горячего раствора" },
  { name: "Називин", form: "Капли назальные" },
  { name: "Тизин", form: "Капли назальные" },
  { name: "Аквалор", form: "Спрей назальный" },
  { name: "Либексин", form: "Таблетки покрытые пленочной оболочкой" },
  { name: "Синекод", form: "Сироп" },
  { name: "Гербион", form: "Сироп" },
  { name: "Фалиминт", form: "Таблетки для рассасывания" },
  { name: "Стрепсилс", form: "Таблетки для рассасывания" },
  { name: "Амбробене", form: "Таблетки с модифицированным высвобождением" },
  { name: "Лазолван", form: "Таблетки с модифицированным высвобождением" },
  { name: "Активированный уголь", form: "Таблетки" },
  { name: "Смекта", form: "Порошок для приготовления суспензии для приема внутрь" },
  { name: "Лоперамид", form: "Капсулы" },
  { name: "Мезим", form: "Таблетки кишечнорастворимые" },
  { name: "Фестал", form: "Таблетки кишечнорастворимые" },
  { name: "Зодак", form: "Таблетки покрытые пленочной оболочкой" },
  { name: "Цетрин", form: "Таблетки покрытые пленочной оболочкой" },
  { name: "Супрастин", form: "Таблетки" },
  { name: "Диазолин", form: "Таблетки" },
  { name: "Декстран", form: "Капсулы" },
  { name: "Бетасерк", form: "Таблетки покрытые пленочной оболочкой" },
  // Дополнительные лекарства
  { name: "Дюфалак", form: "Сироп" },
  { name: "Фортранс", form: "Порошок для приготовления раствора для приема внутрь" },
  { name: "Лактусан", form: "Капли для приема внутрь" },
  { name: "Бисакодил", form: "Таблетки кишечнорастворимые" },
  { name: "Глицерин", form: "Суппозитории ректальные" },
  { name: "Мукалтин", form: "Таблетки для рассасывания" },
  { name: "Бронхолитин", form: "Сироп" },
  { name: "Аскорил", form: "Сироп" },
  { name: "Эреспал", form: "Таблетки покрытые пленочной оболочкой" },
  { name: "Кларитромицин", form: "Таблетки покрытые пленочной оболочкой" },
  { name: "Амоксициллин", form: "Капсулы" },
  { name: "Сумамед", form: "Таблетки покрытые пленочной оболочкой" },
  { name: "Нурофен детский", form: "Суспензия для приема внутрь" },
  { name: "Панадол детский", form: "Суспензия для приема внутрь" },
  { name: "Назол бэби", form: "Капли назальные" },
  { name: "Отипакс", form: "Капли ушные" },
  { name: "Ципромед", form: "Капли глазные" },
  { name: "Вольтарен", form: "Гель для наружного применения" },
  { name: "Быструмгель", form: "Гель для наружного применения" },
  { name: "Кетанов", form: "Таблетки" },
  { name: "Нимесил", form: "Порошок для приготовления суспензии для приема внутрь" },
  { name: "Ренни", form: "Таблетки жевательные" },
  { name: "Альмагель", form: "Суспензия для приема внутрь" },
  { name: "Маалокс", form: "Суспензия для приема внутрь" },
  { name: "Омепразол", form: "Капсулы" },
  { name: "Рабепразол", form: "Таблетки кишечнорастворимые" },
  { name: "Линекс", form: "Капсулы" },
  { name: "Бифидумбактерин", form: "Порошок для приготовления раствора для приема внутрь" },
  { name: "Хилак Форте", form: "Капли для приема внутрь" },
  { name: "Ацикловир", form: "Мазь для наружного применения" },
  { name: "Зовиракс", form: "Мазь для наружного применения" }
];

// Функция для создания SVG-изображения упаковки лекарства
function createMedicinePackage(medicine) {
  const medicineName = medicine.name;
  const form = medicine.form;
  
  // Создаем безопасное имя файла
  const filename = `${medicineName.toLowerCase().replace(/\s+/g, '_')}.svg`;
  const filePath = path.join(imagesDir, filename);
  
  // Определяем тип упаковки на основе формы выпуска
  let packageType = "tablet"; // по умолчанию таблетки
  if (form.includes("Сироп") || form.includes("Суспензия")) {
    packageType = "syrup";
  } else if (form.includes("Капли")) {
    packageType = "drops";
  } else if (form.includes("Порошок")) {
    packageType = "powder";
  } else if (form.includes("Спрей")) {
    packageType = "spray";
  } else if (form.includes("для рассасывания") || form.includes("жевательные")) {
    packageType = "lozenge";
  } else if (form.includes("Капсулы")) {
    packageType = "capsule";
  } else if (form.includes("Мазь") || form.includes("Гель")) {
    packageType = "ointment";
  } else if (form.includes("Суппозитории")) {
    packageType = "suppository";
  }
  
  // Создаем SVG-контент в зависимости от типа упаковки
  let svgContent;
  
  switch (packageType) {
    case "syrup":
      svgContent = `
      <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg">
        <!-- Фон -->
        <rect width="100%" height="100%" fill="#f8f9fa"/>
        
        <!-- Бутылочка с сиропом -->
        <rect x="70" y="30" width="60" height="80" rx="5" fill="#007bff" opacity="0.7"/>
        <rect x="75" y="35" width="50" height="70" rx="3" fill="#e9ecef"/>
        <rect x="80" y="40" width="40" height="60" fill="#007bff" opacity="0.3"/>
        
        <!-- Этикетка -->
        <rect x="75" y="50" width="50" height="20" fill="#007bff"/>
        <text x="100" y="60" font-family="Arial, sans-serif" font-size="7" fill="white" text-anchor="middle" font-weight="bold">
          ${medicineName}
        </text>
        
        <!-- Крышка -->
        <rect x="70" y="25" width="60" height="10" rx="2" fill="#6c757d"/>
        
        <!-- Подпись -->
        <text x="100" y="130" font-family="Arial, sans-serif" font-size="8" fill="#495057" text-anchor="middle">
          ${form}
        </text>
      </svg>
      `;
      break;
      
    case "drops":
      svgContent = `
      <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg">
        <!-- Фон -->
        <rect width="100%" height="100%" fill="#f8f9fa"/>
        
        <!-- Флакон с каплями -->
        <rect x="80" y="30" width="40" height="70" rx="3" fill="#28a745" opacity="0.7"/>
        <rect x="85" y="35" width="30" height="60" rx="2" fill="#e9ecef"/>
        <rect x="90" y="40" width="20" height="50" fill="#28a745" opacity="0.3"/>
        
        <!-- Капли -->
        <circle cx="100" cy="50" r="3" fill="#28a745"/>
        <circle cx="95" cy="55" r="2" fill="#28a745"/>
        <circle cx="105" cy="55" r="2" fill="#28a745"/>
        
        <!-- Этикетка -->
        <rect x="85" y="70" width="30" height="15" fill="#28a745"/>
        <text x="100" y="78" font-family="Arial, sans-serif" font-size="6" fill="white" text-anchor="middle" font-weight="bold">
          ${medicineName}
        </text>
        
        <!-- Крышка -->
        <rect x="80" y="25" width="40" height="8" rx="2" fill="#6c757d"/>
        
        <!-- Подпись -->
        <text x="100" y="130" font-family="Arial, sans-serif" font-size="8" fill="#495057" text-anchor="middle">
          ${form}
        </text>
      </svg>
      `;
      break;
      
    case "powder":
      svgContent = `
      <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg">
        <!-- Фон -->
        <rect width="100%" height="100%" fill="#f8f9fa"/>
        
        <!-- Пакетик с порошком -->
        <rect x="60" y="40" width="80" height="50" rx="5" fill="#ffc107" opacity="0.7"/>
        <rect x="65" y="45" width="70" height="40" rx="3" fill="#e9ecef"/>
        <rect x="70" y="50" width="60" height="30" fill="#ffc107" opacity="0.3"/>
        
        <!-- Этикетка -->
        <rect x="75" y="60" width="50" height="15" fill="#ffc107"/>
        <text x="100" y="68" font-family="Arial, sans-serif" font-size="6" fill="white" text-anchor="middle" font-weight="bold">
          ${medicineName}
        </text>
        
        <!-- Подпись -->
        <text x="100" y="130" font-family="Arial, sans-serif" font-size="8" fill="#495057" text-anchor="middle">
          ${form}
        </text>
      </svg>
      `;
      break;
      
    case "spray":
      svgContent = `
      <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg">
        <!-- Фон -->
        <rect width="100%" height="100%" fill="#f8f9fa"/>
        
        <!-- Баллончик -->
        <rect x="85" y="30" width="30" height="70" rx="3" fill="#17a2b8" opacity="0.7"/>
        <rect x="90" y="35" width="20" height="60" rx="2" fill="#e9ecef"/>
        <rect x="95" y="40" width="10" height="50" fill="#17a2b8" opacity="0.3"/>
        
        <!-- Форсунка -->
        <rect x="95" y="25" width="10" height="15" rx="2" fill="#6c757d"/>
        <polygon points="100,15 95,25 105,25" fill="#6c757d"/>
        
        <!-- Этикетка -->
        <rect x="90" y="60" width="20" height="15" fill="#17a2b8"/>
        <text x="100" y="68" font-family="Arial, sans-serif" font-size="5" fill="white" text-anchor="middle" font-weight="bold">
          ${medicineName}
        </text>
        
        <!-- Подпись -->
        <text x="100" y="130" font-family="Arial, sans-serif" font-size="8" fill="#495057" text-anchor="middle">
          ${form}
        </text>
      </svg>
      `;
      break;
      
    case "lozenge":
      svgContent = `
      <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg">
        <!-- Фон -->
        <rect width="100%" height="100%" fill="#f8f9fa"/>
        
        <!-- Коробка с леденцами -->
        <rect x="70" y="40" width="60" height="40" rx="3" fill="#e83e8c" opacity="0.7"/>
        <rect x="75" y="45" width="50" height="30" rx="2" fill="#e9ecef"/>
        
        <!-- Леденцы -->
        <circle cx="90" cy="60" r="5" fill="#e83e8c"/>
        <circle cx="100" cy="60" r="5" fill="#e83e8c"/>
        <circle cx="110" cy="60" r="5" fill="#e83e8c"/>
        
        <!-- Этикетка -->
        <rect x="75" y="50" width="50" height="10" fill="#e83e8c"/>
        <text x="100" y="58" font-family="Arial, sans-serif" font-size="5" fill="white" text-anchor="middle" font-weight="bold">
          ${medicineName}
        </text>
        
        <!-- Подпись -->
        <text x="100" y="130" font-family="Arial, sans-serif" font-size="8" fill="#495057" text-anchor="middle">
          ${form}
        </text>
      </svg>
      `;
      break;
      
    case "capsule":
      svgContent = `
      <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg">
        <!-- Фон -->
        <rect width="100%" height="100%" fill="#f8f9fa"/>
        
        <!-- Блистерная упаковка -->
        <rect x="60" y="40" width="80" height="50" rx="5" fill="#20c997" opacity="0.7"/>
        <rect x="65" y="45" width="70" height="40" rx="3" fill="#e9ecef"/>
        
        <!-- Капсулы -->
        <rect x="80" y="60" width="15" height="8" rx="4" fill="#20c997"/>
        <rect x="97" y="60" width="15" height="8" rx="4" fill="#20c997"/>
        <rect x="114" y="60" width="15" height="8" rx="4" fill="#20c997"/>
        
        <!-- Этикетка -->
        <rect x="70" y="50" width="60" height="10" fill="#20c997"/>
        <text x="100" y="58" font-family="Arial, sans-serif" font-size="6" fill="white" text-anchor="middle" font-weight="bold">
          ${medicineName}
        </text>
        
        <!-- Подпись -->
        <text x="100" y="130" font-family="Arial, sans-serif" font-size="8" fill="#495057" text-anchor="middle">
          ${form}
        </text>
      </svg>
      `;
      break;
      
    case "ointment":
      svgContent = `
      <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg">
        <!-- Фон -->
        <rect width="100%" height="100%" fill="#f8f9fa"/>
        
        <!-- Туба с мазью -->
        <rect x="70" y="40" width="60" height="50" rx="5" fill="#6610f2" opacity="0.7"/>
        <rect x="75" y="45" width="50" height="40" rx="3" fill="#e9ecef"/>
        <rect x="80" y="50" width="40" height="30" fill="#6610f2" opacity="0.3"/>
        
        <!-- Трубка -->
        <rect x="90" y="30" width="20" height="15" rx="2" fill="#6c757d"/>
        
        <!-- Этикетка -->
        <rect x="75" y="60" width="50" height="15" fill="#6610f2"/>
        <text x="100" y="68" font-family="Arial, sans-serif" font-size="6" fill="white" text-anchor="middle" font-weight="bold">
          ${medicineName}
        </text>
        
        <!-- Подпись -->
        <text x="100" y="130" font-family="Arial, sans-serif" font-size="8" fill="#495057" text-anchor="middle">
          ${form}
        </text>
      </svg>
      `;
      break;
      
    case "suppository":
      svgContent = `
      <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg">
        <!-- Фон -->
        <rect width="100%" height="100%" fill="#f8f9fa"/>
        
        <!-- Упаковка с суппозиториями -->
        <rect x="70" y="40" width="60" height="50" rx="5" fill="#fd7e14" opacity="0.7"/>
        <rect x="75" y="45" width="50" height="40" rx="3" fill="#e9ecef"/>
        
        <!-- Суппозитории -->
        <ellipse cx="90" cy="65" rx="5" ry="8" fill="#fd7e14"/>
        <ellipse cx="100" cy="65" rx="5" ry="8" fill="#fd7e14"/>
        <ellipse cx="110" cy="65" rx="5" ry="8" fill="#fd7e14"/>
        
        <!-- Этикетка -->
        <rect x="75" y="50" width="50" height="10" fill="#fd7e14"/>
        <text x="100" y="58" font-family="Arial, sans-serif" font-size="6" fill="white" text-anchor="middle" font-weight="bold">
          ${medicineName}
        </text>
        
        <!-- Подпись -->
        <text x="100" y="130" font-family="Arial, sans-serif" font-size="8" fill="#495057" text-anchor="middle">
          ${form}
        </text>
      </svg>
      `;
      break;
      
    default: // tablet
      svgContent = `
      <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg">
        <!-- Фон -->
        <rect width="100%" height="100%" fill="#f8f9fa"/>
        
        <!-- Блистерная упаковка -->
        <rect x="60" y="40" width="80" height="50" rx="5" fill="#6f42c1" opacity="0.7"/>
        <rect x="65" y="45" width="70" height="40" rx="3" fill="#e9ecef"/>
        
        <!-- Таблетки -->
        <circle cx="85" cy="65" r="7" fill="#6f42c1"/>
        <circle cx="100" cy="65" r="7" fill="#6f42c1"/>
        <circle cx="115" cy="65" r="7" fill="#6f42c1"/>
        
        <!-- Этикетка -->
        <rect x="70" y="50" width="60" height="10" fill="#6f42c1"/>
        <text x="100" y="58" font-family="Arial, sans-serif" font-size="6" fill="white" text-anchor="middle" font-weight="bold">
          ${medicineName}
        </text>
        
        <!-- Подпись -->
        <text x="100" y="130" font-family="Arial, sans-serif" font-size="8" fill="#495057" text-anchor="middle">
          ${form}
        </text>
      </svg>
      `;
  }
  
  // Записываем SVG в файл
  fs.writeFileSync(filePath, svgContent.trim());
  console.log(`Создано изображение упаковки: ${filename}`);
}

// Создаем SVG-изображения упаковок для всех лекарств
console.log('Создание SVG-изображений упаковок лекарств...');
medicines.forEach(medicine => {
  createMedicinePackage(medicine);
});
console.log('Все изображения упаковок созданы успешно!');