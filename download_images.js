const https = require('https');
const fs = require('fs');
const path = require('path');

// Создаем папку для изображений, если ее нет
const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir);
}

// База данных лекарств с URL изображений общего назначения
const medicines = [
  {
    "name": "Парацетамол",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Paracetamol.svg/1200px-Paracetamol.svg.png"
  },
  {
    "name": "Ибупрофен",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Ibuprofen.svg/1200px-Ibuprofen.svg.png"
  },
  {
    "name": "Анальгин",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Metamizole.svg/1200px-Metamizole.svg.png"
  },
  {
    "name": "Нурофен",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Ibuprofen.svg/1200px-Ibuprofen.svg.png"
  },
  {
    "name": "Терафлю",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Paracetamol.svg/1200px-Paracetamol.svg.png"
  },
  {
    "name": "Фервекс",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Paracetamol.svg/1200px-Paracetамол.svg.png"
  },
  {
    "name": "Колдрекс",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Paracetamol.svg/1200px-Paracetамол.svg.png"
  },
  {
    "name": "Називин",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Oxymetazoline.svg/1200px-Oxymetazoline.svg.png"
  },
  {
    "name": "Тизин",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Oxymetazoline.svg/1200px-Oxymetazoline.svg.png"
  },
  {
    "name": "Аквалор",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sodium_chloride.svg/1200px-Sodium_chloride.svg.png"
  },
  {
    "name": "Либексин",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Paracetamol.svg/1200px-Paracetамол.svg.png"
  },
  {
    "name": "Синекод",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Paracetamol.svg/1200px-Paracetамол.svg.png"
  },
  {
    "name": "Гербион",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Paracetamol.svg/1200px-Paracetамол.svg.png"
  },
  {
    "name": "Фалиминт",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Paracetamol.svg/1200px-Paracetамол.svg.png"
  },
  {
    "name": "Стрепсилс",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Paracetamol.svg/1200px-Paracetамол.svg.png"
  },
  {
    "name": "Амбробене",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Paracetamol.svg/1200px-Paracetамол.svg.png"
  },
  {
    "name": "Лазолван",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Paracetamol.svg/1200px-Paracetамол.svg.png"
  },
  {
    "name": "Активированный уголь",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Activated_carbon.jpg/1200px-Activated_carbon.jpg"
  },
  {
    "name": "Смекта",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Paracetamol.svg/1200px-Paracetамол.svg.png"
  },
  {
    "name": "Лоперамид",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Paracetамол.svg/1200px-Paracetамол.svg.png"
  },
  {
    "name": "Мезим",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Paracetамол.svg/1200px-Paracetамол.svg.png"
  },
  {
    "name": "Фестал",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Paracetамол.svg/1200px-Paracetамол.svg.png"
  },
  {
    "name": "Зодак",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Paracetамол.svg/1200px-Paracetамол.svg.png"
  },
  {
    "name": "Цетрин",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Paracetамол.svg/1200px-Paracetамол.svg.png"
  },
  {
    "name": "Супрастин",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Paracetамол.svg/1200px-Paracetамол.svg.png"
  },
  {
    "name": "Диазолин",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Paracetамол.svg/1200px-Paracetамол.svg.png"
  },
  {
    "name": "Декстран",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Paracetамол.svg/1200px-Paracetамол.svg.png"
  },
  {
    "name": "Бетасерк",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Paracetамол.svg/1200px-Paracetамол.svg.png"
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
  console.log('Начинаем загрузку изображений...');
  
  for (const medicine of medicines) {
    try {
      // Создаем имя файла на основе названия лекарства
      const filename = `${medicine.name.toLowerCase().replace(/\s+/g, '_')}.png`;
      
      // Скачиваем изображение
      await downloadImage(medicine.image_url, filename);
      console.log(`Изображение для ${medicine.name} успешно скачано как ${filename}`);
    } catch (error) {
      console.log(`Не удалось скачать изображение для ${medicine.name}: ${error.message}`);
    }
  }
  
  console.log('Загрузка изображений завершена!');
}

// Запускаем загрузку изображений
downloadAllImages();