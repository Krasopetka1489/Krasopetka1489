import os
import requests
from urllib.parse import urlparse

# Создаем папку для изображений, если ее нет
if not os.path.exists('images'):
    os.makedirs('images')

# База данных лекарств с URL изображений
medicines = [
    {
        "name": "Парацетамол",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/paracetamol.jpg"
    },
    {
        "name": "Ибупрофен",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/ibuprofen.jpg"
    },
    {
        "name": "Анальгин",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/analgin.jpg"
    },
    {
        "name": "Нурофен",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/nurofen.jpg"
    },
    {
        "name": "Терафлю",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/terafly.jpg"
    },
    {
        "name": "Фервекс",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/fervex.jpg"
    },
    {
        "name": "Колдрекс",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/coldrex.jpg"
    },
    {
        "name": "Називин",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/nazivin.jpg"
    },
    {
        "name": "Тизин",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/tizin.jpg"
    },
    {
        "name": "Аквалор",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/aqualor.jpg"
    },
    {
        "name": "Либексин",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/libexin.jpg"
    },
    {
        "name": "Синекод",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/sinecod.jpg"
    },
    {
        "name": "Гербион",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/gerbion.jpg"
    },
    {
        "name": "Фалиминт",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/falimint.jpg"
    },
    {
        "name": "Стрепсилс",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/strepsils.jpg"
    },
    {
        "name": "Амбробене",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/ambrobene.jpg"
    },
    {
        "name": "Лазолван",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/lazolvan.jpg"
    },
    {
        "name": "Активированный уголь",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/activated-charcoal.jpg"
    },
    {
        "name": "Смекта",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/smecta.jpg"
    },
    {
        "name": "Лоперамид",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/loperamide.jpg"
    },
    {
        "name": "Мезим",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/mezim.jpg"
    },
    {
        "name": "Фестал",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/festal.jpg"
    },
    {
        "name": "Зодак",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/zodak.jpg"
    },
    {
        "name": "Цетрин",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/cetrin.jpg"
    },
    {
        "name": "Супрастин",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/suprastin.jpg"
    },
    {
        "name": "Диазолин",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/diazolin.jpg"
    },
    {
        "name": "Декстран",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/dextran.jpg"
    },
    {
        "name": "Бетасерк",
        "image_url": "https://www.mos.ru/upload/content/city/emias/images/drugs/betaserk.jpg"
    }
]

# Функция для скачивания изображения
def download_image(url, filename):
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            with open(os.path.join('images', filename), 'wb') as f:
                f.write(response.content)
            print(f"Скачано: {filename}")
            return True
        else:
            print(f"Ошибка загрузки {filename}: статус {response.status_code}")
            return False
    except Exception as e:
        print(f"Ошибка при загрузке {filename}: {str(e)}")
        return False

# Скачиваем изображения для всех лекарств
for medicine in medicines:
    # Получаем имя файла из URL
    parsed_url = urlparse(medicine["image_url"])
    filename = os.path.basename(parsed_url.path)
    
    # Если имя файла пустое или не содержит расширение, создаем его
    if not filename or '.' not in filename:
        filename = f"{medicine['name'].lower().replace(' ', '_')}.jpg"
    
    # Скачиваем изображение
    if download_image(medicine["image_url"], filename):
        print(f"Изображение для {medicine['name']} успешно скачано как {filename}")
    else:
        print(f"Не удалось скачать изображение для {medicine['name']}")

print("Загрузка изображений завершена!")