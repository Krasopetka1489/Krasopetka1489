const https = require('https');
const fs = require('fs');
const path = require('path');

// Создаем папку для изображений, если ее нет
const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir);
}

// База данных лекарств с URL изображений упаковок
const medicines = [
  {
    "name": "Парацетамол",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Paracetamol_1000mg_pills.jpg/320px-Paracetamol_1000mg_pills.jpg"
  },
  {
    "name": "Ибупрофен",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Ibuprofen tablets.jpg/320px-Ibuprofen_tablets.jpg"
  },
  {
    "name": "Анальгин",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Metamizole_Sodium.JPG/320px-Metamizole_Sodium.JPG"
  },
  {
    "name": "Нурофен",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Ibuprofen_tablets.jpg/320px-Ibuprofen_tablets.jpg"
  },
  {
    "name": "Терафлю",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Teraflu-powder-sachet.jpg/320px-Teraflu-powder-sachet.jpg"
  },
  {
    "name": "Фервекс",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Fervex-powder-sachet.jpg/320px-Fervex-powder-sachet.jpg"
  },
  {
    "name": "Колдрекс",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Coldrex_hotrem_tablets.jpg/320px-Coldrex_hotrem_tablets.jpg"
  },
  {
    "name": "Називин",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Nazivin_S.jpg/320px-Nazivin_S.jpg"
  },
  {
    "name": "Тизин",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Tizin_allergy.jpg/320px-Tizin_allergy.jpg"
  },
  {
    "name": "Аквалор",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Aqualor_soft_spray.jpg/320px-Aqualor_soft_spray.jpg"
  },
  {
    "name": "Либексин",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Libexin_tablets.jpg/320px-Libexin_tablets.jpg"
  },
  {
    "name": "Синекод",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Sinecod_syrup.jpg/320px-Sinecod_syrup.jpg"
  },
  {
    "name": "Гербион",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Gerbion_syrup.jpg/320px-Gerbion_syrup.jpg"
  },
  {
    "name": "Фалиминт",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Falimint_lozenges.jpg/320px-Falimint_lozenges.jpg"
  },
  {
    "name": "Стрепсилс",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Strepsils_lozenges.jpg/320px-Strepsils_lozenges.jpg"
  },
  {
    "name": "Амбробене",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Ambrobene_syrup.jpg/320px-Ambrobene_syrup.jpg"
  },
  {
    "name": "Лазолван",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Lazolvan_syrup.jpg/320px-Lazolvan_syrup.jpg"
  },
  {
    "name": "Активированный уголь",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Activated_charcoal_tablets.jpg/320px-Activated_charcoal_tablets.jpg"
  },
  {
    "name": "Смекта",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Smecta_sachets.jpg/320px-Smecta_sachets.jpg"
  },
  {
    "name": "Лоперамид",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Loperamide_capsules.jpg/320px-Loperamide_capsules.jpg"
  },
  {
    "name": "Мезим",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mezim_forte_tablets.jpg/320px-Mezim_forte_tablets.jpg"
  },
  {
    "name": "Фестал",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Festal_tablets.jpg/320px-Festal_tablets.jpg"
  },
  {
    "name": "Зодак",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Zodak_drops.jpg/320px-Zodak_drops.jpg"
  },
  {
    "name": "Цетрин",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Cetrin_tablets.jpg/320px-Cetrin_tablets.jpg"
  },
  {
    "name": "Супрастин",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Suprastin_tablets.jpg/320px-Suprastin_tablets.jpg"
  },
  {
    "name": "Диазолин",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Diazolin_tablets.jpg/320px-Diazolin_tablets.jpg"
  },
  {
    "name": "Декстран",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Dextran_injection.jpg/320px-Dextran_injection.jpg"
  },
  {
    "name": "Бетасерк",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Betaserk_tablets.jpg/320px-Betaserk_tablets.jpg"
  }
];

// Функция для скачивания изображения
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(imagesDir, filename));
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Скачано: ${filename}`);
          resolve(true);
        });
      } else {
        console.log(`Ошибка загрузки ${filename}: статус ${response.statusCode}`);
        reject(new Error(`Ошибка загрузки ${filename}: статус ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(path.join(imagesDir, filename), () => {}); // Удаляем файл в случае ошибки
      console.log(`Ошибка при загрузке ${filename}: ${err.message}`);
      reject(err);
    });
  });
}

// Асинхронная функция для скачивания всех изображений
async function downloadAllImages() {
  console.log('Начинаем загрузку изображений упаковок лекарств...');
  
  for (const medicine of medicines) {
    try {
      // Создаем имя файла на основе названия лекарства
      const filename = `${medicine.name.toLowerCase().replace(/\s+/g, '_')}.jpg`;
      
      // Скачиваем изображение
      await downloadImage(medicine.image_url, filename);
      console.log(`Изображение упаковки для ${medicine.name} успешно скачано как ${filename}`);
    } catch (error) {
      console.log(`Не удалось скачать изображение упаковки для ${medicine.name}: ${error.message}`);
      
      // Если не удалось скачать изображение, создаем заглушку
      const filename = `${medicine.name.toLowerCase().replace(/\s+/g, '_')}.jpg`;
      const placeholderPath = path.join(imagesDir, filename);
      
      // Создаем простую заглушку
      const placeholder = `
        <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#e9ecef"/>
          <rect x="20" y="20" width="160" height="110" fill="#007bff" opacity="0.2" rx="10"/>
          <text x="100" y="65" font-family="Arial, sans-serif" font-size="16" fill="#007bff" text-anchor="middle" font-weight="bold">
            ${medicine.name}
          </text>
          <text x="100" y="90" font-family="Arial, sans-serif" font-size="12" fill="#6c757d" text-anchor="middle">
            Упаковка препарата
          </text>
        </svg>
      `;
      
      fs.writeFileSync(placeholderPath.replace('.jpg', '.svg'), placeholder.trim());
      console.log(`Создана заглушка для ${medicine.name}`);
    }
  }
  
  console.log('Загрузка изображений упаковок завершена!');
}

// Запускаем загрузку изображений
downloadAllImages();