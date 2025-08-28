// script.js

// База данных лекарств с дополнительной информацией и локальными изображениями упаковок
const medicines = [
    {
        name: "Парацетамол",
        symptoms: ["головная боль", "температура", "боль в мышцах", "боль в суставах"],
        description: "Обезболивающее и жаропонижающее средство",
        price: "от 50 ₽",
        image: "images/парацетамол.svg",
        composition: "Парацетамол 500 мг",
        form: "Таблетки",
        dosage: "Взрослым и детям старше 12 лет по 1-2 таблетки 3-4 раза в день",
        sideEffects: "Повреждение печени при передозировке",
        contraindications: ["Повреждение печени", "Почечная недостаточность", "Гиперчувствительность"],
        ageRestrictions: ["infant", "child"]
    },
    {
        name: "Ибупрофен",
        symptoms: ["головная боль", "температура", "боль в мышцах", "боль в суставах", "воспаление"],
        description: "Нестероидный противовоспалительный препарат",
        price: "от 80 ₽",
        image: "images/ибупрофен.svg",
        composition: "Ибупрофен 200 мг",
        form: "Таблетки",
        dosage: "Взрослым по 1-2 таблетки 3-4 раза в день",
        sideEffects: "Нарушение функции почек, язвы желудка",
        contraindications: ["Язвенная болезнь", "Почечная недостаточность", "Гиперчувствительность", "Беременность (3 триместр)"],
        ageRestrictions: ["infant"]
    },
    {
        name: "Анальгин",
        symptoms: ["головная боль", "температура", "боль в мышцах"],
        description: "Обезболивающее и жаропонижающее средство",
        price: "от 30 ₽",
        image: "images/анальгин.svg",
        composition: "Метамизол натрия 500 мг",
        form: "Таблетки",
        dosage: "Взрослым по 1 таблетке 2-3 раза в день",
        sideEffects: "Нарушение кроветворения",
        contraindications: ["Нарушение кроветворения", "Гиперчувствительность"],
        ageRestrictions: ["infant", "child"]
    },
    {
        name: "Нурофен",
        symptoms: ["головная боль", "температура", "боль в мышцах", "боль в суставах"],
        description: "Обезболивающее и противовоспалительное средство",
        price: "от 150 ₽",
        image: "images/нурофен.svg",
        composition: "Ибупрофен 200 мг",
        form: "Таблетки покрытые оболочкой",
        dosage: "Взрослым по 1-2 таблетки 3-4 раза в день",
        sideEffects: "Нарушение функции почек, язвы желудка",
        contraindications: ["Язвенная болезнь", "Почечная недостаточность", "Гиперчувствительность", "Беременность (3 триместр)"],
        ageRestrictions: ["infant"]
    },
    {
        name: "Терафлю",
        symptoms: ["температура", "насморк", "боль в горле", "заложенность носа", "кашель", "слабость"],
        description: "Комплексный препарат для лечения симптомов простуды и гриппа",
        price: "от 200 ₽",
        image: "images/терафлю.svg",
        composition: "Парацетамол 325 мг, фенилэфрин 5 мг, дихлорфениламин 1 мг",
        form: "Порошок для приготовления раствора для приема внутрь",
        dosage: "Взрослым по 1 пакетику 3 раза в день",
        sideEffects: "Сонливость, сухость во рту",
        contraindications: ["Гиперчувствительность", "Гипертония", "Беременность", "Лактация"],
        ageRestrictions: ["infant", "child", "teen"]
    },
    {
        name: "Фервекс",
        symptoms: ["температура", "головная боль", "слабость", "озноб"],
        description: "Порошок для приготовления раствора для приема внутрь",
        price: "от 250 ₽",
        image: "images/фервекс.svg",
        composition: "Парацетамол 325 мг, фенирамин 20 мг, аскорбиновая кислота 200 мг",
        form: "Порошок для приготовления раствора для приема внутрь",
        dosage: "Взрослым по 1 пакетику 2-3 раза в день",
        sideEffects: "Сонливость, тошнота",
        contraindications: ["Гиперчувствительность", "Беременность", "Лактация"],
        ageRestrictions: ["infant", "child", "teen"]
    },
    {
        name: "Колдрекс",
        symptoms: ["температура", "головная боль", "насморк", "заложенность носа"],
        description: "Порошок для приготовления горячего раствора",
        price: "от 180 ₽",
        image: "images/колдрекс.svg",
        composition: "Парацетамол 500 мг, фенилэфрин 10 мг, хлорфенирамин 2 мг",
        form: "Порошок для приготовления раствора для приема внутрь",
        dosage: "Взрослым по 1 пакетику 2-3 раза в день",
        sideEffects: "Сонливость, сухость во рту",
        contraindications: ["Гиперчувствительность", "Гипертония", "Беременность", "Лактация"],
        ageRestrictions: ["infant", "child", "teen"]
    },
    {
        name: "Називин",
        symptoms: ["насморк", "заложенность носа"],
        description: "Сосудосуживающее средство для местного применения в носу",
        price: "от 120 ₽",
        image: "images/називин.svg",
        composition: "Оксиметазолин 0.1%",
        form: "Капли назальные",
        dosage: "Взрослым и детям старше 6 лет по 1-2 капли в каждый носовой ход 2-3 раза в день",
        sideEffects: "Жжение в носу, чихание",
        contraindications: ["Гиперчувствительность"],
        ageRestrictions: ["infant"]
    },
    {
        name: "Тизин",
        symptoms: ["насморк", "заложенность носа"],
        description: "Сосудосуживающее средство для местного применения в носу",
        price: "от 100 ₽",
        image: "images/тизин.svg",
        composition: "Тетразолин 0.1%",
        form: "Капли назальные",
        dosage: "Взрослым и детям старше 6 лет по 1-2 капли в каждый носовой ход 2-3 раза в день",
        sideEffects: "Жжение в носу, чихание",
        contraindications: ["Гиперчувствительность"],
        ageRestrictions: ["infant"]
    },
    {
        name: "Аквалор",
        symptoms: ["насморк", "заложенность носа"],
        description: "Изотонический раствор морской воды для промывания носа",
        price: "от 200 ₽",
        image: "images/аквалор.svg",
        composition: "Морская вода",
        form: "Спрей назальный",
        dosage: "2-4 впрыскивания в каждый носовой ход 2-4 раза в день",
        sideEffects: "Редко - раздражение слизистой оболочки носа",
        contraindications: ["Гиперчувствительность"],
        ageRestrictions: []
    },
    {
        name: "Либексин",
        symptoms: ["кашель", "першение в горле"],
        description: "Противокашлевый препарат",
        price: "от 180 ₽",
        image: "images/либексин.svg",
        composition: "Преноксдиазин 5 мг",
        form: "Таблетки покрытые пленочной оболочкой",
        dosage: "Взрослым по 1 таблетке 3-4 раза в день",
        sideEffects: "Сонливость, головокружение",
        contraindications: ["Гиперчувствительность", "Беременность", "Лактация"],
        ageRestrictions: ["infant", "child"]
    },
    {
        name: "Синекод",
        symptoms: ["кашель"],
        description: "Противокашлевый препарат",
        price: "от 220 ₽",
        image: "images/синекод.svg",
        composition: "Бутамират 20 мг",
        form: "Сироп",
        dosage: "Взрослым по 10 мл 3 раза в день",
        sideEffects: "Тошнота, головокружение",
        contraindications: ["Гиперчувствительность", "Беременность (1 триместр)"],
        ageRestrictions: ["infant"]
    },
    {
        name: "Гербион",
        symptoms: ["кашель", "першение в горле"],
        description: "Противокашлевый препарат растительного происхождения",
        price: "от 300 ₽",
        image: "images/гербион.svg",
        composition: "Экстракт подорожника",
        form: "Сироп",
        dosage: "Взрослым по 10 мл 3 раза в день",
        sideEffects: "Аллергические реакции",
        contraindications: ["Гиперчувствительность"],
        ageRestrictions: ["infant"]
    },
    {
        name: "Фалиминт",
        symptoms: ["боль в горле", "першение в горле"],
        description: "Противовоспалительное средство для рассасывания",
        price: "от 150 ₽",
        image: "images/фалиминт.svg",
        composition: "Амилметакрезол 0.6 мг, 2,4-дихлорбензиловый спирт 1.2 мг",
        form: "Таблетки для рассасывания",
        dosage: "По 1 таблетке каждые 2-3 часа",
        sideEffects: "Аллергические реакции",
        contraindications: ["Гиперчувствительность"],
        ageRestrictions: ["infant", "child"]
    },
    {
        name: "Стрепсилс",
        symptoms: ["боль в горле", "першение в горле"],
        description: "Антисептическое средство для рассасывания",
        price: "от 250 ₽",
        image: "images/стрепсилс.svg",
        composition: "Амилметакрезол 0.6 мг, 2,4-дихлорбензиловый спирт 1.2 мг",
        form: "Таблетки для рассасывания",
        dosage: "По 1 таблетке каждые 2-3 часа",
        sideEffects: "Аллергические реакции",
        contraindications: ["Гиперчувствительность"],
        ageRestrictions: ["infant", "child"]
    },
    {
        name: "Амбробене",
        symptoms: ["кашель"],
        description: "Муколитический препарат",
        price: "от 180 ₽",
        image: "images/амбробене.svg",
        composition: "Амброксол 30 мг",
        form: "Таблетки с модифицированным высвобождением",
        dosage: "Взрослым по 1 таблетке 1 раз в день",
        sideEffects: "Тошнота, рвота",
        contraindications: ["Гиперчувствительность"],
        ageRestrictions: ["infant", "child"]
    },
    {
        name: "Лазолван",
        symptoms: ["кашель"],
        description: "Муколитический препарат",
        price: "от 220 ₽",
        image: "images/лазолван.svg",
        composition: "Амброксол 30 мг",
        form: "Таблетки с модифицированным высвобождением",
        dosage: "Взрослым по 1 таблетке 1 раз в день",
        sideEffects: "Тошнота, рвота",
        contraindications: ["Гиперчувствительность"],
        ageRestrictions: ["infant", "child"]
    },
    {
        name: "Активированный уголь",
        symptoms: ["тошнота", "диарея", "боль в животе"],
        description: "Энтеросорбент",
        price: "от 40 ₽",
        image: "images/активированный_уголь.svg",
        composition: "Активированный уголь 250 мг",
        form: "Таблетки",
        dosage: "Взрослым по 4-8 таблеток 3-4 раза в день",
        sideEffects: "Запор",
        contraindications: ["Язвенная болезнь", "Кровотечения из ЖКТ"],
        ageRestrictions: []
    },
    {
        name: "Смекта",
        symptoms: ["диарея", "тошнота"],
        description: "Энтеросорбент",
        price: "от 300 ₽",
        image: "images/смекта.svg",
        composition: "Диоктаэдрический смектит 3 г",
        form: "Порошок для приготовления суспензии для приема внутрь",
        dosage: "Взрослым по 1 пакетику 3 раза в день",
        sideEffects: "Запор",
        contraindications: ["Непроходимость кишечника"],
        ageRestrictions: []
    },
    {
        name: "Лоперамид",
        symptoms: ["диарея"],
        description: "Противодиарейный препарат",
        price: "от 80 ₽",
        image: "images/лоперамид.svg",
        composition: "Лоперамид 2 мг",
        form: "Капсулы",
        dosage: "Взрослым по 2 капсулы при первом приеме, затем по 1 капсуле после каждого акта дефекации",
        sideEffects: "Запор, вздутие живота",
        contraindications: ["Колит при инфекциях, вызывающих язвы", "Непроходимость кишечника"],
        ageRestrictions: ["infant", "child"]
    },
    {
        name: "Мезим",
        symptoms: ["боль в животе", "потеря аппетита"],
        description: "Ферментный препарат",
        price: "от 150 ₽",
        image: "images/мезим.svg",
        composition: "Панкреатин 100 мг",
        form: "Таблетки кишечнорастворимые",
        dosage: "Взрослым по 1-2 таблетки 3 раза в день во время еды",
        sideEffects: "Редко - аллергические реакции",
        contraindications: ["Гиперчувствительность", "Острый панкреатит"],
        ageRestrictions: []
    },
    {
        name: "Фестал",
        symptoms: ["боль в животе", "потеря аппетита"],
        description: "Ферментный препарат",
        price: "от 180 ₽",
        image: "images/фестал.svg",
        composition: "Панкреатин 100 мг, гемицеллюлаза 15 мг, бычья желчь 25 мг",
        form: "Таблетки кишечнорастворимые",
        dosage: "Взрослым по 1-2 таблетки 3 раза в день во время еды",
        sideEffects: "Редко - аллергические реакции",
        contraindications: ["Гиперчувствительность", "Острый панкреатит"],
        ageRestrictions: []
    },
    {
        name: "Зодак",
        symptoms: ["сыпь", "зуд", "покраснение кожи", "отек"],
        description: "Антигистаминный препарат",
        price: "от 250 ₽",
        image: "images/зодак.svg",
        composition: "Цетиризин 10 мг",
        form: "Таблетки покрытые пленочной оболочкой",
        dosage: "Взрослым и детям старше 12 лет по 1 таблетке 1 раз в день",
        sideEffects: "Сонливость, головокружение",
        contraindications: ["Гиперчувствительность", "Беременность", "Лактация"],
        ageRestrictions: ["infant", "child"]
    },
    {
        name: "Цетрин",
        symptoms: ["сыпь", "зуд", "покраснение кожи"],
        description: "Антигистаминный препарат",
        price: "от 200 ₽",
        image: "images/цетрин.svg",
        composition: "Цетиризин 10 мг",
        form: "Таблетки покрытые пленочной оболочкой",
        dosage: "Взрослым и детям старше 12 лет по 1 таблетке 1 раз в день",
        sideEffects: "Сонливость, головокружение",
        contraindications: ["Гиперчувствительность", "Беременность", "Лактация"],
        ageRestrictions: ["infant", "child"]
    },
    {
        name: "Супрастин",
        symptoms: ["сыпь", "зуд", "отек"],
        description: "Антигистаминный препарат",
        price: "от 70 ₽",
        image: "images/супрастин.svg",
        composition: "Хлоропирамин 25 мг",
        form: "Таблетки",
        dosage: "Взрослым по 1 таблетке 3-4 раза в день",
        sideEffects: "Сонливость, головокружение",
        contraindications: ["Гиперчувствительность", "Беременность", "Лактация"],
        ageRestrictions: ["infant", "child"]
    },
    {
        name: "Диазолин",
        symptoms: ["сыпь", "зуд"],
        description: "Антигистаминный препарат",
        price: "от 90 ₽",
        image: "images/диазолин.svg",
        composition: "Мебгидролин 100 мг",
        form: "Таблетки",
        dosage: "Взрослым по 1-2 таблетки 1-2 раза в день",
        sideEffects: "Сонливость, головокружение",
        contraindications: ["Гиперчувствительность", "Беременность", "Лактация"],
        ageRestrictions: ["infant", "child"]
    },
    {
        name: "Декстран",
        symptoms: ["головокружение"],
        description: "Улучшает микроциркуляцию крови",
        price: "от 300 ₽",
        image: "images/декстран.svg",
        composition: "Декстран 40 200 мг",
        form: "Капсулы",
        dosage: "Взрослым по 1 капсуле 2 раза в день",
        sideEffects: "Аллергические реакции",
        contraindications: ["Гиперчувствительность", "Сердечная недостаточность"],
        ageRestrictions: ["infant", "child"]
    },
    {
        name: "Бетасерк",
        symptoms: ["головокружение"],
        description: "Улучшает кровообращение в головном мозге",
        price: "от 400 ₽",
        image: "images/бетасерк.svg",
        composition: "Бетагистин 16 мг",
        form: "Таблетки покрытые пленочной оболочкой",
        dosage: "Взрослым по 1 таблетке 2 раза в день",
        sideEffects: "Головная боль, тошнота",
        contraindications: ["Гиперчувствительность", "Феохромоцитома"],
        ageRestrictions: ["infant", "child"]
    },
    // Дополнительные лекарства
    {
        name: "Дюфалак",
        symptoms: ["запор", "вздутие живота"],
        description: "Осмотическое слабительное средство",
        price: "от 250 ₽",
        image: "images/дюфалак.svg",
        composition: "Лактулоза 667 мг/мл",
        form: "Сироп",
        dosage: "Взрослым по 15-45 мл 1 раз в день",
        sideEffects: "Метеоризм, боли в животе",
        contraindications: ["Непроходимость кишечника", "гальактоземия"],
        ageRestrictions: []
    },
    {
        name: "Фортранс",
        symptoms: ["запор", "подготовка к операции"],
        description: "Слабительное для очищения кишечника",
        price: "от 300 ₽",
        image: "images/фортранс.svg",
        composition: "Макрогол 4000 5,69 г, натрия хлорид 0,677 г, натрия гидрокарбонат 0,168 г, калия хлорид 0,075 г",
        form: "Порошок для приготовления раствора для приема внутрь",
        dosage: "По 1 литру раствора за 1-2 часа до процедуры",
        sideEffects: "Тошнота, рвота, боли в животе",
        contraindications: ["Непроходимость кишечника", "перфорация кишечника"],
        ageRestrictions: []
    },
    {
        name: "Лактусан",
        symptoms: ["запор", "дисбактериоз"],
        description: "Пребиотик, нормализующий микрофлору кишечника",
        price: "от 200 ₽",
        image: "images/лактусан.svg",
        composition: "Лактулоза 667 мг/мл",
        form: "Капли для приема внутрь",
        dosage: "Взрослым по 15-30 капель 2-3 раза в день",
        sideEffects: "Метеоризм, боли в животе",
        contraindications: ["Непроходимость кишечника", "гальактоземия"],
        ageRestrictions: ["infant"]
    },
    {
        name: "Бисакодил",
        symptoms: ["запор"],
        description: "Стимулирующее слабительное средство",
        price: "от 100 ₽",
        image: "images/бисакодил.svg",
        composition: "Бисакодил 5 мг",
        form: "Таблетки кишечнорастворимые",
        dosage: "Взрослым по 1-2 таблетки перед сном",
        sideEffects: "Колики в животе, диарея",
        contraindications: ["Непроходимость кишечника", "острый аппендицит"],
        ageRestrictions: ["child"]
    },
    {
        name: "Глицерин",
        symptoms: ["запор"],
        description: "Раздражающее слабительное средство местного действия",
        price: "от 50 ₽",
        image: "images/глицерин.svg",
        composition: "Глицерол 99,5%",
        form: "Суппозитории ректальные",
        dosage: "Взрослым по 1 суппозиторию 1-2 раза в день",
        sideEffects: "Жжение в прямой кишке",
        contraindications: ["Непроходимость кишечника"],
        ageRestrictions: []
    },
    {
        name: "Мукалтин",
        symptoms: ["кашель", "першение в горле"],
        description: "Отхаркивающее средство растительного происхождения",
        price: "от 80 ₽",
        image: "images/мукалтин.svg",
        composition: "Экстракт алтея корня",
        form: "Таблетки для рассасывания",
        dosage: "Взрослым по 1-2 таблетки 3-4 раза в день",
        sideEffects: "Аллергические реакции",
        contraindications: ["Гиперчувствительность"],
        ageRestrictions: ["infant"]
    },
    {
        name: "Бронхолитин",
        symptoms: ["кашель", "одышка"],
        description: "Противокашлевый и бронхолитический препарат",
        price: "от 150 ₽",
        image: "images/бронхолитин.svg",
        composition: "Глауцин гидрохлорид 5 мг, эфедрин 12,5 мг",
        form: "Сироп",
        dosage: "Взрослым по 1 чайной ложке 3 раза в день",
        sideEffects: "Сонливость, тахикардия",
        contraindications: ["Гиперчувствительность", "гипертония", "беременность"],
        ageRestrictions: ["infant", "child"]
    },
    {
        name: "Аскорил",
        symptoms: ["кашель", "мокрота"],
        description: "Отхаркивающий и бронхолитический препарат",
        price: "от 200 ₽",
        image: "images/аскорил.svg",
        composition: "Этамзилат 50 мг, сальбутамол 1 мг, гвайфенезин 50 мг",
        form: "Сироп",
        dosage: "Взрослым по 10 мл 3 раза в день",
        sideEffects: "Тахикардия, головокружение",
        contraindications: ["Гиперчувствительность", "тахиаритмия"],
        ageRestrictions: ["infant", "child"]
    },
    {
        name: "Эреспал",
        symptoms: ["кашель", "воспаление дыхательных путей"],
        description: "Противовоспалительный препарат",
        price: "от 300 ₽",
        image: "images/эреспал.svg",
        composition: "Фенспирид 80 мг",
        form: "Таблетки покрытые пленочной оболочкой",
        dosage: "Взрослым по 1 таблетке 2 раза в день",
        sideEffects: "Головная боль, сонливость",
        contraindications: ["Гиперчувствительность"],
        ageRestrictions: ["child"]
    },
    {
        name: "Кларитромицин",
        symptoms: ["инфекции дыхательных путей", "ангины"],
        description: "Антибиотик макролидного ряда",
        price: "от 250 ₽",
        image: "images/кларитромицин.svg",
        composition: "Кларитромицин 250 мг или 500 мг",
        form: "Таблетки покрытые пленочной оболочкой",
        dosage: "Взрослым по 250-500 мг 2 раза в день",
        sideEffects: "Тошнота, диарея, нарушение вкуса",
        contraindications: ["Гиперчувствительность", "беременность", "лактация"],
        ageRestrictions: ["child"]
    },
    {
        name: "Амоксициллин",
        symptoms: ["инфекции дыхательных путей", "ангины"],
        description: "Антибиотик пенициллинового ряда",
        price: "от 150 ₽",
        image: "images/амоксициллин.svg",
        composition: "Амоксициллин 250 мг или 500 мг",
        form: "Капсулы",
        dosage: "Взрослым по 250-500 мг 3 раза в день",
        sideEffects: "Тошнота, диарея, сыпь",
        contraindications: ["Гиперчувствительность к пенициллинам"],
        ageRestrictions: ["child"]
    },
    {
        name: "Сумамед",
        symptoms: ["инфекции дыхательных путей", "ангины"],
        description: "Антибиотик макролидного ряда",
        price: "от 400 ₽",
        image: "images/сумамед.svg",
        composition: "Азитромицин 125 мг или 250 мг",
        form: "Таблетки покрытые пленочной оболочкой",
        dosage: "Взрослым по 500 мг 1 раз в день в первый день, затем по 250 мг 1 раз в день",
        sideEffects: "Тошнота, диарея, головная боль",
        contraindications: ["Гиперчувствительность", "беременность", "лактация"],
        ageRestrictions: ["child"]
    },
    {
        name: "Нурофен детский",
        symptoms: ["головная боль", "температура", "боль в мышцах"],
        description: "Обезболивающее и жаропонижающее средство",
        price: "от 200 ₽",
        image: "images/нурофен_детский.svg",
        composition: "Ибупрофен 100 мг/5 мл",
        form: "Суспензия для приема внутрь",
        dosage: "Детям от 6 месяцев до 12 лет по 5 мл 3 раза в день",
        sideEffects: "Нарушение функции почек, язвы желудка",
        contraindications: ["Язвенная болезнь", "почечная недостаточность", "гиперчувствительность"],
        ageRestrictions: ["infant"]
    },
    {
        name: "Панадол детский",
        symptoms: ["температура", "боль"],
        description: "Обезболивающее и жаропонижающее средство",
        price: "от 180 ₽",
        image: "images/панадол_детский.svg",
        composition: "Парацетамол 120 мг/5 мл",
        form: "Суспензия для приема внутрь",
        dosage: "Детям от 3 месяцев до 12 лет по 5-10 мл каждые 4-6 часов",
        sideEffects: "Повреждение печени при передозировке",
        contraindications: ["Повреждение печени", "почечная недостаточность", "гиперчувствительность"],
        ageRestrictions: ["infant"]
    },
    {
        name: "Назол бэби",
        symptoms: ["насморк", "заложенность носа"],
        description: "Сосудосуживающее средство для местного применения в носу",
        price: "от 150 ₽",
        image: "images/назол_бэби.svg",
        composition: "Ксилометазолин 0.05%",
        form: "Капли назальные",
        dosage: "Детям до 1 года по 1 капле в каждый носовой ход 2 раза в день",
        sideEffects: "Жжение в носу, чихание",
        contraindications: ["Гиперчувствительность"],
        ageRestrictions: ["infant"]
    },
    {
        name: "Отипакс",
        symptoms: ["боль в ухе", "воспаление уха"],
        description: "Противовоспалительное и обезболивающее средство местного действия",
        price: "от 200 ₽",
        image: "images/отипакс.svg",
        composition: "Феназон 5 мг, лидокаин 10 мг",
        form: "Капли ушные",
        dosage: "По 3-4 капли в ухо 2-3 раза в день",
        sideEffects: "Аллергические реакции",
        contraindications: ["Гиперчувствительность", "перфорация барабанной перепонки"],
        ageRestrictions: ["infant"]
    },
    {
        name: "Ципромед",
        symptoms: ["конъюнктивит", "кератит"],
        description: "Антибактериальный препарат для местного применения в глаза",
        price: "от 250 ₽",
        image: "images/ципромед.svg",
        composition: "Ципрофлоксацин 3 мг/мл",
        form: "Капли глазные",
        dosage: "По 1-2 капли в конъюнктивальный мешок 4-6 раз в день",
        sideEffects: "Жжение, зуд, покраснение глаз",
        contraindications: ["Гиперчувствительность"],
        ageRestrictions: ["infant"]
    },
    {
        name: "Вольтарен",
        symptoms: ["боль в мышцах", "воспаление", "травмы"],
        description: "Противовоспалительный и обезболивающий препарат местного действия",
        price: "от 300 ₽",
        image: "images/вольтарен.svg",
        composition: "Диклофенак 1%",
        form: "Гель для наружного применения",
        dosage: "Наносить тонким слоем 3-4 раза в день",
        sideEffects: "Раздражение кожи, зуд",
        contraindications: ["Гиперчувствительность", "беременность (3 триместр)"],
        ageRestrictions: ["child"]
    },
    {
        name: "Быструмгель",
        symptoms: ["боль в мышцах", "воспаление", "травмы"],
        description: "Противовоспалительный и обезболивающий препарат местного действия",
        price: "от 250 ₽",
        image: "images/быструмгель.svg",
        composition: "Кетопрофен 2,5%",
        form: "Гель для наружного применения",
        dosage: "Наносить тонким слоем 2-3 раза в день",
        sideEffects: "Раздражение кожи, зуд",
        contraindications: ["Гиперчувствительность", "беременность (3 триместр)"],
        ageRestrictions: ["child"]
    },
    {
        name: "Кетанов",
        symptoms: ["сильная головная боль", "температура", "боль в мышцах", "боль в суставах"],
        description: "Нестероидный противовоспалительный препарат",
        price: "от 200 ₽",
        image: "images/кетанов.svg",
        composition: "Кеторолак 10 мг",
        form: "Таблетки",
        dosage: "Взрослым по 1 таблетке 2-3 раза в день",
        sideEffects: "Нарушение функции почек, язвы желудка",
        contraindications: ["Язвенная болезнь", "почечная недостаточность", "гиперчувствительность", "беременность"],
        ageRestrictions: ["infant"]
    },
    {
        name: "Нимесил",
        symptoms: ["головная боль", "температура", "боль в мышцах", "воспаление"],
        description: "Нестероидный противовоспалительный препарат",
        price: "от 300 ₽",
        image: "images/нимесил.svg",
        composition: "Нимесулид 100 мг",
        form: "Порошок для приготовления суспензии для приема внутрь",
        dosage: "Взрослым по 1 пакетику 1 раз в день",
        sideEffects: "Нарушение функции печени, тошнота",
        contraindications: ["Нарушение функции печени", "гиперчувствительность", "беременность", "лактация"],
        ageRestrictions: ["infant"]
    },
    {
        name: "Ренни",
        symptoms: ["изжога", "боль в желудке"],
        description: "Антацидное средство",
        price: "от 200 ₽",
        image: "images/ренни.svg",
        composition: "Кальция карбонат 680 мг, магния карбонат 80 мг",
        form: "Таблетки жевательные",
        dosage: "По 1-2 таблетки при необходимости",
        sideEffects: "Запор, диарея",
        contraindications: ["Повышенный уровень кальция в крови"],
        ageRestrictions: ["child"]
    },
    {
        name: "Альмагель",
        symptoms: ["изжога", "боль в желудке"],
        description: "Антацидное средство",
        price: "от 150 ₽",
        image: "images/альмагель.svg",
        composition: "Алюминия гидроксид 400 мг, магния гидроксид 40 мг",
        form: "Суспензия для приема внутрь",
        dosage: "По 1-2 чайные ложки при необходимости",
        sideEffects: "Запор, диарея",
        contraindications: ["Повышенный уровень магния в крови"],
        ageRestrictions: ["child"]
    },
    {
        name: "Маалокс",
        symptoms: ["изжога", "боль в желудке"],
        description: "Антацидное средство",
        price: "от 180 ₽",
        image: "images/маалокс.svg",
        composition: "Алюминия гидроксид, магния гидроксид",
        form: "Суспензия для приема внутрь",
        dosage: "По 1-2 столовые ложки при необходимости",
        sideEffects: "Запор, диарея",
        contraindications: ["Повышенный уровень магния в крови"],
        ageRestrictions: ["child"]
    },
    {
        name: "Омепразол",
        symptoms: ["изжога", "язва желудка"],
        description: "Ингибитор протонной помпы",
        price: "от 100 ₽",
        image: "images/омепразол.svg",
        composition: "Омепразол 20 мг",
        form: "Капсулы",
        dosage: "Взрослым по 1 капсуле 1 раз в день за 30 минут до еды",
        sideEffects: "Головная боль, диарея, тошнота",
        contraindications: ["Гиперчувствительность"],
        ageRestrictions: ["child"]
    },
    {
        name: "Рабепразол",
        symptoms: ["изжога", "язва желудка"],
        description: "Ингибитор протонной помпы",
        price: "от 200 ₽",
        image: "images/рабепразол.svg",
        composition: "Рабепразол 20 мг",
        form: "Таблетки кишечнорастворимые",
        dosage: "Взрослым по 1 таблетке 1 раз в день за 30 минут до еды",
        sideEffects: "Головная боль, диарея, тошнота",
        contraindications: ["Гиперчувствительность"],
        ageRestrictions: ["child"]
    },
    {
        name: "Линекс",
        symptoms: ["диарея", "дисбактериоз"],
        description: "Пробиотик",
        price: "от 250 ₽",
        image: "images/линеks.svg",
        composition: "Лактобактерии, бифидобактерии, энтерококки",
        form: "Капсулы",
        dosage: "Взрослым по 1-2 капсулы 3 раза в день",
        sideEffects: "Аллергические реакции",
        contraindications: ["Гиперчувствительность"],
        ageRestrictions: ["infant"]
    },
    {
        name: "Бифидумбактерин",
        symptoms: ["диарея", "дисбактериоз"],
        description: "Пробиотик",
        price: "от 150 ₽",
        image: "images/бифидумбактерин.svg",
        composition: "Бифидобактерии",
        form: "Порошок для приготовления раствора для приема внутрь",
        dosage: "Взрослым по 1-2 пакетика 2-3 раза в день",
        sideEffects: "Аллергические реакции",
        contraindications: ["Гиперчувствительность"],
        ageRestrictions: ["infant"]
    },
    {
        name: "Хилак Форте",
        symptoms: ["диарея", "дисбактериоз"],
        description: "Пребиотик",
        price: "от 200 ₽",
        image: "images/хилак_фортэ.svg",
        composition: "Гидролизат лактобактерий",
        form: "Капли для приема внутрь",
        dosage: "Взрослым по 40-60 капель 3 раза в день",
        sideEffects: "Аллергические реакции",
        contraindications: ["Гиперчувствительность"],
        ageRestrictions: ["infant"]
    },
    {
        name: "Ацикловир",
        symptoms: ["герпес", "простуда"],
        description: "Противовирусный препарат",
        price: "от 150 ₽",
        image: "images/ацикловир.svg",
        composition: "Ацикловир 5%",
        form: "Мазь для наружного применения",
        dosage: "Наносить тонким слоем 5 раз в день",
        sideEffects: "Раздражение кожи",
        contraindications: ["Гиперчувствительность"],
        ageRestrictions: ["infant"]
    },
    {
        name: "Зовиракс",
        symptoms: ["герпес", "простуда"],
        description: "Противовирусный препарат",
        price: "от 300 ₽",
        image: "images/зовиракс.svg",
        composition: "Ацикловир 5%",
        form: "Мазь для наружного применения",
        dosage: "Наносить тонким слоем 5 раз в день",
        sideEffects: "Раздражение кожи",
        contraindications: ["Гиперчувствительность"],
        ageRestrictions: ["infant"]
    }
];

// Функция для подбора лекарств по симптомам с учетом фильтров
function findMedicines(selectedSymptoms, filters) {
    const recommended = [];
    
    medicines.forEach(medicine => {
        // Проверяем, есть ли совпадения по симптомам
        const matchCount = medicine.symptoms.filter(symptom => 
            selectedSymptoms.includes(symptom)
        ).length;
        
        // Если есть хотя бы одно совпадение, проверяем дополнительные условия
        if (matchCount > 0) {
            // Проверка на возрастные ограничения
            if (medicine.ageRestrictions.includes(filters.age)) {
                return; // Пропускаем это лекарство
            }
            
            // Проверка на противопоказания
            let hasContraindication = false;
            if (filters.pregnancy && medicine.contraindications.includes("Беременность")) {
                hasContraindication = true;
            }
            if (filters.lactation && medicine.contraindications.includes("Лактация")) {
                hasContraindication = true;
            }
            if (filters.hypertension && medicine.contraindications.includes("Гипертония")) {
                hasContraindication = true;
            }
            if (filters.diabetes && medicine.contraindications.includes("Диабет")) {
                hasContraindication = true;
            }
            
            if (hasContraindication) {
                return; // Пропускаем это лекарство
            }
            
            // Рассчитываем релевантность (процент совпадения)
            const relevance = (matchCount / medicine.symptoms.length) * 100;
            recommended.push({
                ...medicine,
                relevance: relevance,
                matchedSymptoms: matchCount
            });
        }
    });
    
    // Сортируем по релевантности (от большего к меньшему)
    recommended.sort((a, b) => b.relevance - a.relevance);
    
    // Берем только первые 6 самых подходящих
    return recommended.slice(0, 6);
}

// Функция для отображения результатов
function displayResults(medicines) {
    const resultsSection = document.getElementById('results');
    const medicinesList = document.getElementById('medicinesList');
    
    // Очищаем предыдущие результаты
    medicinesList.innerHTML = '';
    
    if (medicines.length === 0) {
        medicinesList.innerHTML = '<p class="no-results">По вашим симптомам не найдено подходящих лекарств. Обратитесь к врачу.</p>';
    } else {
        medicines.forEach(medicine => {
            const medicineCard = document.createElement('div');
            medicineCard.className = 'medicine-card';
            
            // Создаем элемент изображения
            const img = document.createElement('img');
            img.src = medicine.image;
            img.alt = medicine.name;
            img.onerror = function() {
                // Если изображение не загрузилось, используем заглушку
                this.src = 'images/placeholder.jpg';
            };
            
            const imageDiv = document.createElement('div');
            imageDiv.className = 'medicine-image';
            imageDiv.appendChild(img);
            
            medicineCard.innerHTML = `
                <h3><i class="fas fa-capsules"></i> ${medicine.name}</h3>
                <p class="price">${medicine.price}</p>
                <p class="description">${medicine.description}</p>
                <p class="symptoms">Подходит для: ${medicine.matchedSymptoms} из ваших симптомов</p>
                <button class="details-btn" data-name="${medicine.name}">Подробнее</button>
            `;
            
            // Вставляем изображение в начало карточки
            medicineCard.insertBefore(imageDiv, medicineCard.firstChild);
            
            medicinesList.appendChild(medicineCard);
        });
    }
    
    // Показываем секцию с результатами
    resultsSection.style.display = 'block';
    
    // Прокручиваем к результатам
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Функция для отображения режима "Симптомы + Лекарства"
function displaySymptomsMode(medicines) {
    const symptomsList = document.getElementById('symptomsList');
    const symptomsMedicinesList = document.getElementById('symptomsMedicinesList');
    
    // Очищаем предыдущие результаты
    symptomsMedicinesList.innerHTML = '';
    
    if (medicines.length === 0) {
        symptomsMedicinesList.innerHTML = '<p class="no-results">По вашим симптомам не найдено подходящих лекарств. Обратитесь к врачу.</p>';
    } else {
        // Создаем карту симптомов и лекарств
        const symptomMap = {};
        
        medicines.forEach(medicine => {
            medicine.symptoms.forEach(symptom => {
                if (!symptomMap[symptom]) {
                    symptomMap[symptom] = [];
                }
                symptomMap[symptom].push({
                    name: medicine.name,
                    image: medicine.image
                });
            });
        });
        
        // Отображаем результаты
        for (const [symptom, meds] of Object.entries(symptomMap)) {
            const symptomCard = document.createElement('div');
            symptomCard.className = 'symptom-medicine-card';
            
            // Создаем список лекарств с изображениями
            let medsList = '<ul>';
            meds.forEach(med => {
                medsList += `
                    <li>
                        <img src="${med.image}" alt="${med.name}" class="mini-image" onerror="this.src='images/placeholder.jpg'">
                        ${med.name}
                    </li>
                `;
            });
            medsList += '</ul>';
            
            symptomCard.innerHTML = `
                <h4><i class="fas fa-stethoscope"></i> ${symptom}</h4>
                ${medsList}
            `;
            symptomsMedicinesList.appendChild(symptomCard);
        }
    }
    
    // Показываем секцию с результатами
    symptomsList.style.display = 'block';
}

// Функция для отображения подробной информации о лекарстве
function showMedicineDetails(medicineName) {
    const medicine = medicines.find(m => m.name === medicineName);
    if (!medicine) return;
    
    // Создаем элемент изображения
    const img = document.createElement('img');
    img.src = medicine.image;
    img.alt = medicine.name;
    img.onerror = function() {
        // Если изображение не загрузилось, используем заглушку
        this.src = 'images/placeholder.jpg';
    };
    
    const imageDiv = document.createElement('div');
    imageDiv.className = 'modal-image';
    imageDiv.appendChild(img);
    
    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>${medicine.name}</h2>
            <div class="modal-body">
                <div class="modal-info">
                    <p><strong>Описание:</strong> ${medicine.description}</p>
                    <p><strong>Цена:</strong> ${medicine.price}</p>
                    <p><strong>Состав:</strong> ${medicine.composition}</p>
                    <p><strong>Форма выпуска:</strong> ${medicine.form}</p>
                    <p><strong>Способ применения:</strong> ${medicine.dosage}</p>
                    <p><strong>Побочные эффекты:</strong> ${medicine.sideEffects}</p>
                    <p><strong>Противопоказания:</strong> ${medicine.contraindications.join(', ')}</p>
                </div>
            </div>
        </div>
    `;
    
    // Вставляем изображение в модальное окно
    const modalBody = modal.querySelector('.modal-body');
    modalBody.insertBefore(imageDiv, modalBody.firstChild);
    
    document.body.appendChild(modal);
    
    // Добавляем обработчики событий для закрытия модального окна
    modal.querySelector('.close').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Функция для поиска симптомов
function searchSymptoms(query) {
    const symptoms = document.querySelectorAll('.symptoms label');
    symptoms.forEach(symptom => {
        const text = symptom.textContent.toLowerCase();
        if (text.includes(query.toLowerCase())) {
            symptom.style.display = 'flex';
        } else {
            symptom.style.display = 'none';
        }
    });
}

// Функция для сброса поиска
function clearSearch() {
    document.getElementById('symptomSearch').value = '';
    const symptoms = document.querySelectorAll('.symptoms label');
    symptoms.forEach(symptom => {
        symptom.style.display = 'flex';
    });
}

// Функция для переключения темы
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const themeIcon = document.querySelector('#themeToggle i');
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

// Добавляем обработчик события для кнопки
document.getElementById('checkBtn').addEventListener('click', function() {
    // Получаем все выбранные симптомы
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const selectedSymptoms = Array.from(checkboxes).map(cb => cb.value);
    
    // Проверяем, выбраны ли симптомы
    if (selectedSymptoms.length === 0) {
        alert('Пожалуйста, выберите хотя бы один симптом.');
        return;
    }
    
    // Получаем значения фильтров
    const filters = {
        age: document.getElementById('age').value,
        pregnancy: document.getElementById('pregnancy').checked,
        lactation: document.getElementById('lactation').checked,
        hypertension: document.getElementById('hypertension').checked,
        diabetes: document.getElementById('diabetes').checked
    };
    
    // Подбираем лекарства
    const recommendedMedicines = findMedicines(selectedSymptoms, filters);
    
    // Отображаем результаты
    displayResults(recommendedMedicines);
    
    // Отображаем режим "Симптомы + Лекарства"
    displaySymptomsMode(recommendedMedicines);
});

// Добавляем обработчики событий для переключения режимов просмотра
document.getElementById('medicinesView').addEventListener('click', function() {
    document.getElementById('medicinesList').style.display = 'grid';
    document.getElementById('symptomsList').style.display = 'none';
    this.classList.add('active');
    document.getElementById('symptomsView').classList.remove('active');
});

document.getElementById('symptomsView').addEventListener('click', function() {
    document.getElementById('medicinesList').style.display = 'none';
    document.getElementById('symptomsList').style.display = 'block';
    this.classList.add('active');
    document.getElementById('medicinesView').classList.remove('active');
});

// Добавляем обработчик события для поиска
document.getElementById('symptomSearch').addEventListener('input', function() {
    searchSymptoms(this.value);
});

// Добавляем обработчик события для очистки поиска
document.getElementById('clearSearch').addEventListener('click', clearSearch);

// Добавляем обработчик события для переключения темы
document.getElementById('themeToggle').addEventListener('click', toggleTheme);

// Добавляем обработчики событий для кнопок "Подробнее"
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('details-btn')) {
        const medicineName = e.target.getAttribute('data-name');
        showMedicineDetails(medicineName);
    }
});

// Проверяем сохраненную тему при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        const themeIcon = document.querySelector('#themeToggle i');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    // Добавляем обработчики событий для вкладок
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Убираем активный класс у всех вкладок
            tabs.forEach(t => t.classList.remove('active'));
            
            // Добавляем активный класс к текущей вкладке
            this.classList.add('active');
            
            // Скрываем все содержимое вкладок
            const tabPanes = document.querySelectorAll('.tab-pane');
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Показываем содержимое текущей вкладки
            const tabId = this.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // Добавляем обработчики событий для кнопок инструментов
    const toolButtons = document.querySelectorAll('.tool-btn');
    toolButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tool = this.getAttribute('data-tool');
            openToolModal(tool);
        });
    });
    
    // Добавляем обработчик события для закрытия модального окна инструментов
    const closeModal = document.querySelector('.close-modal');
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            document.getElementById('toolModal').classList.remove('show');
        });
    }
    
    // Добавляем обработчик события для кнопок "Подробнее" в базе знаний
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const topic = this.getAttribute('data-topic');
            showTopicDetails(topic);
        });
    });
    
    // Добавляем обработчик события для кнопок справочников
    const referenceButtons = document.querySelectorAll('.reference-btn');
    referenceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const ref = this.getAttribute('data-ref');
            showReferenceDetails(ref);
        });
    });
});

// Функция для открытия модального окна инструментов
function openToolModal(tool) {
    const modal = document.getElementById('toolModal');
    const content = document.getElementById('toolContent');
    
    // Очищаем содержимое модального окна
    content.innerHTML = '';
    
    // В зависимости от инструмента создаем соответствующее содержимое
    switch(tool) {
        case 'dosage':
            content.innerHTML = `
                <h2>Калькулятор дозировок</h2>
                <div class="tool-form">
                    <div class="form-group">
                        <label for="weight">Вес ребенка (кг):</label>
                        <input type="number" id="weight" min="1" max="100" step="0.1">
                    </div>
                    <div class="form-group">
                        <label for="age">Возраст ребенка (лет):</label>
                        <input type="number" id="ageInput" min="0" max="18">
                    </div>
                    <div class="form-group">
                        <label for="medicineSelect">Выберите лекарство:</label>
                        <select id="medicineSelect">
                            <option value="nurofen">Нурофен детский</option>
                            <option value="panadol">Панадол детский</option>
                            <option value="paracetamol">Парацетамол</option>
                        </select>
                    </div>
                    <button id="calculateDosage" class="tool-btn">Рассчитать</button>
                    <div id="dosageResult" class="tool-result"></div>
                </div>
            `;
            break;
            
        case 'bmi':
            content.innerHTML = `
                <h2>Калькулятор ИМТ</h2>
                <div class="tool-form">
                    <div class="form-group">
                        <label for="height">Рост (см):</label>
                        <input type="number" id="height" min="50" max="250">
                    </div>
                    <div class="form-group">
                        <label for="weightBMI">Вес (кг):</label>
                        <input type="number" id="weightBMI" min="10" max="300">
                    </div>
                    <button id="calculateBMI" class="tool-btn">Рассчитать ИМТ</button>
                    <div id="bmiResult" class="tool-result"></div>
                </div>
            `;
            break;
            
        case 'bp':
            content.innerHTML = `
                <h2>Трекер артериального давления</h2>
                <div class="tool-form">
                    <div class="form-group">
                        <label for="systolic">Систолическое давление (верхнее):</label>
                        <input type="number" id="systolic" min="50" max="250">
                    </div>
                    <div class="form-group">
                        <label for="diastolic">Диастолическое давление (нижнее):</label>
                        <input type="number" id="diastolic" min="30" max="150">
                    </div>
                    <div class="form-group">
                        <label for="pulse">Пульс:</label>
                        <input type="number" id="pulse" min="30" max="200">
                    </div>
                    <button id="saveBP" class="tool-btn">Сохранить показания</button>
                    <div id="bpHistory" class="tool-history">
                        <h3>История измерений:</h3>
                        <ul id="bpMeasurements"></ul>
                    </div>
                </div>
            `;
            break;
            
        case 'temp':
            content.innerHTML = `
                <h2>Трекер температуры</h2>
                <div class="tool-form">
                    <div class="form-group">
                        <label for="temperature">Температура тела (°C):</label>
                        <input type="number" id="temperature" min="32" max="45" step="0.1">
                    </div>
                    <div class="form-group">
                        <label for="tempDateTime">Дата и время:</label>
                        <input type="datetime-local" id="tempDateTime">
                    </div>
                    <button id="saveTemp" class="tool-btn">Сохранить температуру</button>
                    <div id="tempHistory" class="tool-history">
                        <h3>История измерений:</h3>
                        <ul id="tempMeasurements"></ul>
                    </div>
                </div>
            `;
            break;
    }
    
    // Показываем модальное окно
    modal.classList.add('show');
    
    // Добавляем обработчики событий для новых элементов
    if (tool === 'dosage') {
        document.getElementById('calculateDosage').addEventListener('click', calculateDosage);
    } else if (tool === 'bmi') {
        document.getElementById('calculateBMI').addEventListener('click', calculateBMI);
    } else if (tool === 'bp') {
        document.getElementById('saveBP').addEventListener('click', saveBloodPressure);
    } else if (tool === 'temp') {
        document.getElementById('saveTemp').addEventListener('click', saveTemperature);
    }
}

// Функция для расчета дозировки
function calculateDosage() {
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseInt(document.getElementById('ageInput').value);
    const medicine = document.getElementById('medicineSelect').value;
    
    if (!weight || !age) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }
    
    let dosage = '';
    switch(medicine) {
        case 'nurofen':
            // Для Нурофена детского: 10 мг/кг массы тела, но не более 400 мг в сутки
            const nurofenDosage = Math.min(weight * 10, 400);
            dosage = `Рекомендуемая доза Нурофена детского: ${nurofenDosage} мг в сутки (разделить на 3-4 приема)`;
            break;
        case 'panadol':
            // Для Панадола детского: 15 мг/кг массы тела, но не более 60 мг в сутки
            const panadolDosage = Math.min(weight * 15, 60);
            dosage = `Рекомендуемая доза Панадола детского: ${panadolDosage} мг в сутки (разделить на 4-6 приемов)`;
            break;
        case 'paracetamol':
            // Для Парацетамола: 15 мг/кг массы тела, но не более 60 мг в сутки
            const paracetamolDosage = Math.min(weight * 15, 60);
            dosage = `Рекомендуемая доза Парацетамола: ${paracetamolDosage} мг в сутки (разделить на 4-6 приемов)`;
            break;
    }
    
    document.getElementById('dosageResult').innerHTML = `<p>${dosage}</p>`;
}

// Функция для расчета ИМТ
function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weightBMI').value);
    
    if (!height || !weight) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }
    
    // Преобразуем рост из см в м
    const heightInMeters = height / 100;
    
    // Рассчитываем ИМТ
    const bmi = weight / (heightInMeters * heightInMeters);
    
    // Определяем категорию
    let category = '';
    if (bmi < 18.5) {
        category = 'Недостаточный вес';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Нормальный вес';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Избыточный вес';
    } else {
        category = 'Ожирение';
    }
    
    document.getElementById('bmiResult').innerHTML = `
        <p>Ваш ИМТ: ${bmi.toFixed(1)}</p>
        <p>Категория: ${category}</p>
    `;
}

// Функция для сохранения показаний артериального давления
function saveBloodPressure() {
    const systolic = document.getElementById('systolic').value;
    const diastolic = document.getElementById('diastolic').value;
    const pulse = document.getElementById('pulse').value;
    
    if (!systolic || !diastolic || !pulse) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }
    
    // Создаем запись
    const measurement = {
        systolic: systolic,
        diastolic: diastolic,
        pulse: pulse,
        date: new Date().toLocaleString()
    };
    
    // Сохраняем в localStorage
    let measurements = JSON.parse(localStorage.getItem('bpMeasurements')) || [];
    measurements.push(measurement);
    localStorage.setItem('bpMeasurements', JSON.stringify(measurements));
    
    // Обновляем историю
    updateBPHistory();
    
    // Очищаем поля
    document.getElementById('systolic').value = '';
    document.getElementById('diastolic').value = '';
    document.getElementById('pulse').value = '';
}

// Функция для обновления истории измерений артериального давления
function updateBPHistory() {
    const measurements = JSON.parse(localStorage.getItem('bpMeasurements')) || [];
    const list = document.getElementById('bpMeasurements');
    
    // Очищаем список
    list.innerHTML = '';
    
    // Добавляем последние 5 измерений
    const recentMeasurements = measurements.slice(-5).reverse();
    recentMeasurements.forEach(measurement => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${measurement.date}</strong>: 
            ${measurement.systolic}/${measurement.diastolic} мм рт. ст., пульс ${measurement.pulse}
        `;
        list.appendChild(li);
    });
}

// Функция для сохранения температуры
function saveTemperature() {
    const temperature = document.getElementById('temperature').value;
    const dateTime = document.getElementById('tempDateTime').value;
    
    if (!temperature) {
        alert('Пожалуйста, введите температуру.');
        return;
    }
    
    // Создаем запись
    const measurement = {
        temperature: temperature,
        date: dateTime || new Date().toLocaleString()
    };
    
    // Сохраняем в localStorage
    let measurements = JSON.parse(localStorage.getItem('tempMeasurements')) || [];
    measurements.push(measurement);
    localStorage.setItem('tempMeasurements', JSON.stringify(measurements));
    
    // Обновляем историю
    updateTempHistory();
    
    // Очищаем поля
    document.getElementById('temperature').value = '';
    document.getElementById('tempDateTime').value = '';
}

// Функция для обновления истории измерений температуры
function updateTempHistory() {
    const measurements = JSON.parse(localStorage.getItem('tempMeasurements')) || [];
    const list = document.getElementById('tempMeasurements');
    
    // Очищаем список
    list.innerHTML = '';
    
    // Добавляем последние 5 измерений
    const recentMeasurements = measurements.slice(-5).reverse();
    recentMeasurements.forEach(measurement => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${measurement.date}</strong>: 
            ${measurement.temperature} °C
        `;
        list.appendChild(li);
    });
}

// Функция для отображения деталей по теме
function showTopicDetails(topic) {
    const details = {
        'грипп': {
            title: 'Грипп',
            content: `
                <p><strong>Грипп</strong> — острое вирусное заболевание дыхательных путей, характеризующееся лихорадкой, ознобом, головной болью, миалгией, слабостью и кашлем.</p>
                <h3>Симптомы</h3>
                <ul>
                    <li>Высокая температура (38°C и выше)</li>
                    <li>Озноб</li>
                    <li>Головная боль</li>
                    <li>Мышечные боли</li>
                    <li>Слабость</li>
                    <li>Кашель</li>
                    <li>Насморк</li>
                    <li>Боль в горле</li>
                </ul>
                <h3>Лечение</h3>
                <p>Лечение гриппа в основном симптоматическое. В тяжелых случаях могут применяться противовирусные препараты (осельтамивир, занамивир).</p>
                <h3>Профилактика</h3>
                <p>Наиболее эффективная профилактика — вакцинация. Также важно соблюдать правила личной гигиены, избегать контакта с больными людьми во время эпидемий.</p>
            `
        },
        'орви': {
            title: 'ОРВИ',
            content: `
                <p><strong>ОРВИ</strong> (острые респираторные вирусные инфекции) — группа заболеваний, вызванных различными вирусами, поражающими верхние дыхательные пути.</p>
                <h3>Симптомы</h3>
                <ul>
                    <li>Насморк</li>
                    <li>Заложенность носа</li>
                    <li>Боль в горле</li>
                    <li>Кашель</li>
                    <li>Першение в горле</li>
                    <li>Слабость</li>
                    <li>Незначительное повышение температуры</li>
                </ul>
                <h3>Лечение</h3>
                <p>Лечение ОРВИ в основном симптоматическое. Важно соблюдать постельный режим, пить много жидкости, использовать жаропонижающие и противовоспалительные препараты при необходимости.</p>
                <h3>Профилактика</h3>
                <p>Профилактика включает закаливание, регулярное проветривание помещений, избегание контакта с больными людьми, укрепление иммунитета.</p>
            `
        },
        'аллергия': {
            title: 'Аллергия',
            content: `
                <p><strong>Аллергия</strong> — повышенная чувствительность организма к определенным веществам (аллергенам), проявляющаяся различными симптомами.</p>
                <h3>Симптомы</h3>
                <ul>
                    <li>Сыпь</li>
                    <li>Зуд</li>
                    <li>Покраснение кожи</li>
                    <li>Отек</li>
                    <li>Насморк</li>
                    <li>Чихание</li>
                    <li>Слезотечение</li>
                    <li>Затрудненное дыхание</li>
                </ul>
                <h3>Лечение</h3>
                <p>Лечение аллергии включает устранение контакта с аллергеном и применение антигистаминных препаратов. В тяжелых случаях могут использоваться кортикостероиды.</p>
                <h3>Профилактика</h3>
                <p>Профилактика заключается в избегании контакта с известными аллергенами, регулярной уборке помещений, использовании гипоаллергенных продуктов.</p>
            `
        },
        'гастрит': {
            title: 'Гастрит',
            content: `
                <p><strong>Гастрит</strong> — воспалительное заболевание слизистой оболочки желудка, которое может быть острым или хроническим.</p>
                <h3>Симптомы</h3>
                <ul>
                    <li>Боль в желудке</li>
                    <li>Изжога</li>
                    <li>Тошнота</li>
                    <li>Рвота</li>
                    <li>Потеря аппетита</li>
                    <li>Отрыжка</li>
                    <li>Вздутие живота</li>
                </ul>
                <h3>Лечение</h3>
                <p>Лечение гастрита зависит от его причины. Может включать антациды, ингибиторы протонной помпы, антибиотики (при бактериальной инфекции), соблюдение диеты.</p>
                <h3>Профилактика</h3>
                <p>Профилактика включает соблюдение режима питания, избегание вредных привычек, ограничение острой и грубой пищи, своевременное лечение инфекций.</p>
            `
        }
    };
    
    // Создаем модальное окно с деталями
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>${details[topic].title}</h2>
            <div class="modal-body">
                ${details[topic].content}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Добавляем обработчики событий для закрытия модального окна
    modal.querySelector('.close').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Функция для отображения деталей справочника
function showReferenceDetails(ref) {
    const details = {
        'analgesics': {
            title: 'Анальгетики',
            content: `
                <p><strong>Анальгетики</strong> — препараты, устраняющие или уменьшающие болевые ощущения.</p>
                <h3>Основные группы</h3>
                <ul>
                    <li>Нестероидные противовоспалительные препараты (НПВП): ибупрофен, диклофенак, кетопрофен</li>
                    <li>Парацетамол и его производные</li>
                    <li>Опиоидные анальгетики: морфин, фентанил (применяются по рецепту)</li>
                </ul>
                <h3>Показания к применению</h3>
                <ul>
                    <li>Головная боль</li>
                    <li>Мышечные боли</li>
                    <li>Суставные боли</li>
                    <li>Зубная боль</li>
                    <li>Менструальные боли</li>
                    <li>Послеоперационные боли</li>
                </ul>
                <h3>Побочные эффекты</h3>
                <ul>
                    <li>Нарушение функции печени (при передозировке парацетамола)</li>
                    <li>Нарушение функции почек (при длительном применении НПВП)</li>
                    <li>Язвы желудка (при длительном применении НПВП)</li>
                    <li>Зависимость (при применении опиоидов)</li>
                </ul>
                <h3>Особые указания</h3>
                <p>Анальгетики не следует применять длительное время без консультации врача. При появлении побочных эффектов необходимо обратиться к специалисту.</p>
            `
        },
        'antibiotics': {
            title: 'Антибиотики',
            content: `
                <p><strong>Антибиотики</strong> — лекарственные средства, применяемые для лечения бактериальных инфекций.</p>
                <h3>Основные группы</h3>
                <ul>
                    <li>Пенициллины: амоксициллин, ампициллин</li>
                    <li>Цефалоспорины: цефalexин, цефтриаксон</li>
                    <li>Макролиды: азитромицин, кларитромицин</li>
                    <li>Фторхинолоны: ципрофлоксацин, офлоксацин</li>
                    <li>Тетрациклины: доксициклин</li>
                </ul>
                <h3>Показания к применению</h3>
                <ul>
                    <li>Ангины</li>
                    <li>Пневмония</li>
                    <li>Цистит</li>
                    <li>Пиелонефрит</li>
                    <li>Инфицированные раны</li>
                    <li>Гнойные процессы</li>
                </ul>
                <h3>Побочные эффекты</h3>
                <ul>
                    <li>Дисбактериоз кишечника</li>
                    <li>Аллергические реакции</li>
                    <li>Повреждение печени (при некоторых антибиотиках)</li>
                    <li>Повреждение почек (при некоторых антибиотиках)</li>
                </ul>
                <h3>Особые указания</h3>
                <p>Антибиотики применяются только по рецепту врача. Самолечение антибиотиками может привести к развитию резистентности бактерий и другим серьезным последствиям.</p>
            `
        },
        'antihistamines': {
            title: 'Антигистамины',
            content: `
                <p><strong>Антигистамины</strong> — препараты, блокирующие действие гистамина и применяемые при аллергических реакциях.</p>
                <h3>Основные группы</h3>
                <ul>
                    <li>Антигистамины 1-го поколения: супрастин, диазолин</li>
                    <li>Антигистамины 2-го поколения: цетрин, зодак</li>
                    <li>Антигистамины 3-го поколения: фексофенадин</li>
                </ul>
                <h3>Показания к применению</h3>
                <ul>
                    <li>Аллергический ринит</li>
                    <li>Крапивница</li>
                    <li>Атопический дерматит</li>
                    <li>Аллергическая астма</li>
                    <li>Анафилактический шок (в комплексной терапии)</li>
                    <li>Зуд различного генеза</li>
                </ul>
                <h3>Побочные эффекты</h3>
                <ul>
                    <li>Сонливость (особенно антигистамины 1-го поколения)</li>
                    <li>Сухость во рту</li>
                    <li>Запор</li>
                    <li>Нарушение мочеиспускания</li>
                </ul>
                <h3>Особые указания</h3>
                <p>Антигистамины 1-го поколения могут вызывать сонливость, поэтому не рекомендуются водителям и людям, работающим с механизмами. Антигистамины 2-го и 3-го поколений менее вызывают сонливость.</p>
            `
        }
    };
    
    // Создаем модальное окно с деталями
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>${details[ref].title}</h2>
            <div class="modal-body">
                ${details[ref].content}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Добавляем обработчики событий для закрытия модального окна
    modal.querySelector('.close').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}// Добавляем обработчики событий для переключения вкладок
document.addEventListener('DOMContentLoaded', function() {
    // Обработчики для переключения вкладок
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Убираем активный класс у всех вкладок
            tabs.forEach(t => t.classList.remove('active'));
            
            // Добавляем активный класс к текущей вкладке
            this.classList.add('active');
            
            // Скрываем все содержимое вкладок
            const tabPanes = document.querySelectorAll('.tab-pane');
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
                pane.style.display = 'none';
            });
            
            // Показываем содержимое текущей вкладки
            const activeTabPane = document.getElementById(`${tabName}-tab`);
            if (activeTabPane) {
                activeTabPane.classList.add('active');
                activeTabPane.style.display = 'block';
            }
        });
    });
    
    // Обработчики для кнопок инструментов
    const toolButtons = document.querySelectorAll('.tool-btn');
    toolButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tool = this.getAttribute('data-tool');
            openToolModal(tool);
        });
    });
    
    // Обработчики для кнопок "Подробнее" в базе знаний
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const topic = this.getAttribute('data-topic');
            showTopicDetails(topic);
        });
    });
    
    // Обработчики для кнопок справочников
    const referenceButtons = document.querySelectorAll('.reference-btn');
    referenceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const ref = this.getAttribute('data-ref');
            showReferenceDetails(ref);
        });
    });
});

// Функция для открытия модального окна инструментов
function openToolModal(tool) {
    const modal = document.getElementById('toolModal');
    const content = document.getElementById('toolContent');
    
    // Очищаем содержимое модального окна
    content.innerHTML = '';
    
    // В зависимости от инструмента создаем соответствующее содержимое
    switch(tool) {
        case 'dosage':
            content.innerHTML = `
                <h2>Калькулятор дозировок</h2>
                <div class="tool-form">
                    <div class="form-group">
                        <label for="weight">Вес ребенка (кг):</label>
                        <input type="number" id="weight" min="1" max="100" step="0.1">
                    </div>
                    <div class="form-group">
                        <label for="ageInput">Возраст ребенка (лет):</label>
                        <input type="number" id="ageInput" min="0" max="18">
                    </div>
                    <div class="form-group">
                        <label for="medicineSelect">Выберите лекарство:</label>
                        <select id="medicineSelect">
                            <option value="nurofen">Нурофен детский</option>
                            <option value="panadol">Панадол детский</option>
                            <option value="paracetamol">Парацетамол</option>
                        </select>
                    </div>
                    <button id="calculateDosage" class="tool-btn">Рассчитать</button>
                    <div id="dosageResult" class="tool-result"></div>
                </div>
            `;
            break;
            
        case 'bmi':
            content.innerHTML = `
                <h2>Калькулятор ИМТ</h2>
                <div class="tool-form">
                    <div class="form-group">
                        <label for="height">Рост (см):</label>
                        <input type="number" id="height" min="50" max="250">
                    </div>
                    <div class="form-group">
                        <label for="weightBMI">Вес (кг):</label>
                        <input type="number" id="weightBMI" min="10" max="300">
                    </div>
                    <button id="calculateBMI" class="tool-btn">Рассчитать ИМТ</button>
                    <div id="bmiResult" class="tool-result"></div>
                </div>
            `;
            break;
            
        case 'bp':
            content.innerHTML = `
                <h2>Трекер артериального давления</h2>
                <div class="tool-form">
                    <div class="form-group">
                        <label for="systolic">Систолическое давление (верхнее):</label>
                        <input type="number" id="systolic" min="50" max="250">
                    </div>
                    <div class="form-group">
                        <label for="diastolic">Диастолическое давление (нижнее):</label>
                        <input type="number" id="diastolic" min="30" max="150">
                    </div>
                    <div class="form-group">
                        <label for="pulse">Пульс:</label>
                        <input type="number" id="pulse" min="30" max="200">
                    </div>
                    <button id="saveBP" class="tool-btn">Сохранить показания</button>
                    <div id="bpHistory" class="tool-history">
                        <h3>История измерений:</h3>
                        <ul id="bpMeasurements"></ul>
                    </div>
                </div>
            `;
            break;
            
        case 'temp':
            content.innerHTML = `
                <h2>Трекер температуры</h2>
                <div class="tool-form">
                    <div class="form-group">
                        <label for="temperature">Температура тела (°C):</label>
                        <input type="number" id="temperature" min="32" max="45" step="0.1">
                    </div>
                    <div class="form-group">
                        <label for="tempDateTime">Дата и время:</label>
                        <input type="datetime-local" id="tempDateTime">
                    </div>
                    <button id="saveTemp" class="tool-btn">Сохранить температуру</button>
                    <div id="tempHistory" class="tool-history">
                        <h3>История измерений:</h3>
                        <ul id="tempMeasurements"></ul>
                    </div>
                </div>
            `;
            break;
    }
    
    // Показываем модальное окно
    modal.style.display = 'block';
    
    // Добавляем обработчики событий для новых элементов
    if (tool === 'dosage') {
        document.getElementById('calculateDosage').addEventListener('click', calculateDosage);
    } else if (tool === 'bmi') {
        document.getElementById('calculateBMI').addEventListener('click', calculateBMI);
    } else if (tool === 'bp') {
        document.getElementById('saveBP').addEventListener('click', saveBloodPressure);
    } else if (tool === 'temp') {
        document.getElementById('saveTemp').addEventListener('click', saveTemperature);
    }
    
    // Добавляем обработчик для закрытия модального окна
    document.querySelector('.close-modal').addEventListener('click', function() {
        modal.style.display = 'none';
    });
}

// Функция для расчета дозировки
function calculateDosage() {
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseInt(document.getElementById('ageInput').value);
    const medicine = document.getElementById('medicineSelect').value;
    
    if (!weight || !age) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }
    
    let dosage = '';
    switch(medicine) {
        case 'nurofen':
            // Для Нурофена детского: 10 мг/кг массы тела, но не более 400 мг в сутки
            const nurofenDosage = Math.min(weight * 10, 400);
            dosage = `Рекомендуемая доза Нурофена детского: ${nurofenDosage} мг в сутки (разделить на 3-4 приема)`;
            break;
        case 'panadol':
            // Для Панадола детского: 15 мг/кг массы тела, но не более 60 мг в сутки
            const panadolDosage = Math.min(weight * 15, 60);
            dosage = `Рекомендуемая доза Панадола детского: ${panadolDosage} мг в сутки (разделить на 4-6 приемов)`;
            break;
        case 'paracetamol':
            // Для Парацетамола: 15 мг/кг массы тела, но не более 60 мг в сутки
            const paracetamolDosage = Math.min(weight * 15, 60);
            dosage = `Рекомендуемая доза Парацетамола: ${paracetamolDosage} мг в сутки (разделить на 4-6 приемов)`;
            break;
    }
    
    document.getElementById('dosageResult').innerHTML = `<p>${dosage}</p>`;
}

// Функция для расчета ИМТ
function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weightBMI').value);
    
    if (!height || !weight) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }
    
    // Преобразуем рост из см в м
    const heightInMeters = height / 100;
    
    // Рассчитываем ИМТ
    const bmi = weight / (heightInMeters * heightInMeters);
    
    // Определяем категорию
    let category = '';
    if (bmi < 18.5) {
        category = 'Недостаточный вес';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Нормальный вес';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Избыточный вес';
    } else {
        category = 'Ожирение';
    }
    
    document.getElementById('bmiResult').innerHTML = `
        <p>Ваш ИМТ: ${bmi.toFixed(1)}</p>
        <p>Категория: ${category}</p>
    `;
}

// Функция для сохранения показаний артериального давления
function saveBloodPressure() {
    const systolic = document.getElementById('systolic').value;
    const diastolic = document.getElementById('diastolic').value;
    const pulse = document.getElementById('pulse').value;
    
    if (!systolic || !diastolic || !pulse) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }
    
    // Создаем запись
    const measurement = {
        systolic: systolic,
        diastolic: diastolic,
        pulse: pulse,
        date: new Date().toLocaleString()
    };
    
    // Сохраняем в localStorage
    let measurements = JSON.parse(localStorage.getItem('bpMeasurements')) || [];
    measurements.push(measurement);
    localStorage.setItem('bpMeasurements', JSON.stringify(measurements));
    
    // Обновляем историю
    updateBPHistory();
    
    // Очищаем поля
    document.getElementById('systolic').value = '';
    document.getElementById('diastolic').value = '';
    document.getElementById('pulse').value = '';
}

// Функция для обновления истории измерений артериального давления
function updateBPHistory() {
    const measurements = JSON.parse(localStorage.getItem('bpMeasurements')) || [];
    const list = document.getElementById('bpMeasurements');
    
    // Очищаем список
    list.innerHTML = '';
    
    // Добавляем последние 5 измерений
    const recentMeasurements = measurements.slice(-5).reverse();
    recentMeasurements.forEach(measurement => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${measurement.date}</strong>: 
            ${measurement.systolic}/${measurement.diastolic} мм рт. ст., пульс ${measurement.pulse}
        `;
        list.appendChild(li);
    });
}

// Функция для сохранения температуры
function saveTemperature() {
    const temperature = document.getElementById('temperature').value;
    const dateTime = document.getElementById('tempDateTime').value;
    
    if (!temperature) {
        alert('Пожалуйста, введите температуру.');
        return;
    }
    
    // Создаем запись
    const measurement = {
        temperature: temperature,
        date: dateTime || new Date().toLocaleString()
    };
    
    // Сохраняем в localStorage
    let measurements = JSON.parse(localStorage.getItem('tempMeasurements')) || [];
    measurements.push(measurement);
    localStorage.setItem('tempMeasurements', JSON.stringify(measurements));
    
    // Обновляем историю
    updateTempHistory();
    
    // Очищаем поля
    document.getElementById('temperature').value = '';
    document.getElementById('tempDateTime').value = '';
}

// Функция для обновления истории измерений температуры
function updateTempHistory() {
    const measurements = JSON.parse(localStorage.getItem('tempMeasurements')) || [];
    const list = document.getElementById('tempMeasurements');
    
    // Очищаем список
    list.innerHTML = '';
    
    // Добавляем последние 5 измерений
    const recentMeasurements = measurements.slice(-5).reverse();
    recentMeasurements.forEach(measurement => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${measurement.date}</strong>: 
            ${measurement.temperature} °C
        `;
        list.appendChild(li);
    });
}

// Функция для отображения деталей по теме
function showTopicDetails(topic) {
    const details = {
        'грипп': {
            title: 'Грипп',
            content: `
                <p><strong>Грипп</strong> — острое вирусное заболевание дыхательных путей, характеризующееся лихорадкой, ознобом, головной болью, миалгией, слабостью и кашлем.</p>
                <h3>Симптомы</h3>
                <ul>
                    <li>Высокая температура (38°C и выше)</li>
                    <li>Озноб</li>
                    <li>Головная боль</li>
                    <li>Мышечные боли</li>
                    <li>Слабость</li>
                    <li>Кашель</li>
                    <li>Насморк</li>
                    <li>Боль в горле</li>
                </ul>
                <h3>Лечение</h3>
                <p>Лечение гриппа в основном симптоматическое. В тяжелых случаях могут применяться противовирусные препараты (осельтамивир, занамивир).</p>
                <h3>Профилактика</h3>
                <p>Наиболее эффективная профилактика — вакцинация. Также важно соблюдать правила личной гигиены, избегать контакта с больными людьми во время эпидемий.</p>
            `
        },
        'орви': {
            title: 'ОРВИ',
            content: `
                <p><strong>ОРВИ</strong> (острые респираторные вирусные инфекции) — группа заболеваний, вызванных различными вирусами, поражающими верхние дыхательные пути.</p>
                <h3>Симптомы</h3>
                <ul>
                    <li>Насморк</li>
                    <li>Заложенность носа</li>
                    <li>Боль в горле</li>
                    <li>Кашель</li>
                    <li>Першение в горле</li>
                    <li>Слабость</li>
                    <li>Незначительное повышение температуры</li>
                </ul>
                <h3>Лечение</h3>
                <p>Лечение ОРВИ в основном симптоматическое. Важно соблюдать постельный режим, пить много жидкости, использовать жаропонижающие и противовоспалительные препараты при необходимости.</p>
                <h3>Профилактика</h3>
                <p>Профилактика включает закаливание, регулярное проветривание помещений, избегание контакта с больными людьми, укрепление иммунитета.</p>
            `
        },
        'аллергия': {
            title: 'Аллергия',
            content: `
                <p><strong>Аллергия</strong> — повышенная чувствительность организма к определенным веществам (аллергенам), проявляющаяся различными симптомами.</p>
                <h3>Симптомы</h3>
                <ul>
                    <li>Сыпь</li>
                    <li>Зуд</li>
                    <li>Покраснение кожи</li>
                    <li>Отек</li>
                    <li>Насморк</li>
                    <li>Чихание</li>
                    <li>Слезотечение</li>
                    <li>Затрудненное дыхание</li>
                </ul>
                <h3>Лечение</h3>
                <p>Лечение аллергии включает устранение контакта с аллергеном и применение антигистаминных препаратов. В тяжелых случаях могут использоваться кортикостероиды.</p>
                <h3>Профилактика</h3>
                <p>Профилактика заключается в избегании контакта с известными аллергенами, регулярной уборке помещений, использовании гипоаллергенных продуктов.</p>
            `
        },
        'гастрит': {
            title: 'Гастрит',
            content: `
                <p><strong>Гастрит</strong> — воспалительное заболевание слизистой оболочки желудка, которое может быть острым или хроническим.</p>
                <h3>Симптомы</h3>
                <ul>
                    <li>Боль в желудке</li>
                    <li>Изжога</li>
                    <li>Тошнота</li>
                    <li>Рвота</li>
                    <li>Потеря аппетита</li>
                    <li>Отрыжка</li>
                    <li>Вздутие живота</li>
                </ul>
                <h3>Лечение</h3>
                <p>Лечение гастрита зависит от его причины. Может включать антациды, ингибиторы протонной помпы, антибиотики (при бактериальной инфекции), соблюдение диеты.</p>
                <h3>Профилактика</h3>
                <p>Профилактика включает соблюдение режима питания, избегание вредных привычек, ограничение острой и грубой пищи, своевременное лечение инфекций.</p>
            `
        }
    };
    
    // Создаем модальное окно с деталями
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>${details[topic].title}</h2>
            <div class="modal-body">
                ${details[topic].content}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Добавляем обработчики событий для закрытия модального окна
    modal.querySelector('.close').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Функция для отображения деталей справочника
function showReferenceDetails(ref) {
    const details = {
        'analgesics': {
            title: 'Анальгетики',
            content: `
                <p><strong>Анальгетики</strong> — препараты, устраняющие или уменьшающие болевые ощущения.</p>
                <h3>Основные группы</h3>
                <ul>
                    <li>Нестероидные противовоспалительные препараты (НПВП): ибупрофен, диклофенак, кетопрофен</li>
                    <li>Парацетамол и его производные</li>
                    <li>Опиоидные анальгетики: морфин, фентанил (применяются по рецепту)</li>
                </ul>
                <h3>Показания к применению</h3>
                <ul>
                    <li>Головная боль</li>
                    <li>Мышечные боли</li>
                    <li>Суставные боли</li>
                    <li>Зубная боль</li>
                    <li>Менструальные боли</li>
                    <li>Послеоперационные боли</li>
                </ul>
                <h3>Побочные эффекты</h3>
                <ul>
                    <li>Нарушение функции печени (при передозировке парацетамола)</li>
                    <li>Нарушение функции почек (при длительном применении НПВП)</li>
                    <li>Язвы желудка (при длительном применении НПВП)</li>
                    <li>Зависимость (при применении опиоидов)</li>
                </ul>
                <h3>Особые указания</h3>
                <p>Анальгетики не следует применять длительное время без консультации врача. При появлении побочных эффектов необходимо обратиться к специалисту.</p>
            `
        },
        'antibiotics': {
            title: 'Антибиотики',
            content: `
                <p><strong>Антибиотики</strong> — лекарственные средства, применяемые для лечения бактериальных инфекций.</p>
                <h3>Основные группы</h3>
                <ul>
                    <li>Пенициллины: амоксициллин, ампициллин</li>
                    <li>Цефалоспорины: цефalexин, цефтриаксон</li>
                    <li>Макролиды: азитромицин, кларитромицин</li>
                    <li>Фторхинолоны: ципрофлоксацин, офлоксацин</li>
                    <li>Тетрациклины: доксициклин</li>
                </ul>
                <h3>Показания к применению</h3>
                <ul>
                    <li>Ангины</li>
                    <li>Пневмония</li>
                    <li>Цистит</li>
                    <li>Пиелонефрит</li>
                    <li>Инфицированные раны</li>
                    <li>Гнойные процессы</li>
                </ul>
                <h3>Побочные эффекты</h3>
                <ul>
                    <li>Дисбактериоз кишечника</li>
                    <li>Аллергические реакции</li>
                    <li>Повреждение печени (при некоторых антибиотиках)</li>
                    <li>Повреждение почек (при некоторых антибиотиках)</li>
                </ul>
                <h3>Особые указания</h3>
                <p>Антибиотики применяются только по рецепту врача. Самолечение антибиотиками может привести к развитию резистентности бактерий и другим серьезным последствиям.</p>
            `
        },
        'antihistamines': {
            title: 'Антигистамины',
            content: `
                <p><strong>Антигистамины</strong> — препараты, блокирующие действие гистамина и применяемые при аллергических реакциях.</p>
                <h3>Основные группы</h3>
                <ul>
                    <li>Антигистамины 1-го поколения: супрастин, диазолин</li>
                    <li>Антигистамины 2-го поколения: цетрин, зодак</li>
                    <li>Антигистамины 3-го поколения: фексофенадин</li>
                </ul>
                <h3>Показания к применению</h3>
                <ul>
                    <li>Аллергический ринит</li>
                    <li>Крапивница</li>
                    <li>Атопический дерматит</li>
                    <li>Аллергическая астма</li>
                    <li>Анафилактический шок (в комплексной терапии)</li>
                    <li>Зуд различного генеза</li>
                </ul>
                <h3>Побочные эффекты</h3>
                <ul>
                    <li>Сонливость (особенно антигистамины 1-го поколения)</li>
                    <li>Сухость во рту</li>
                    <li>Запор</li>
                    <li>Нарушение мочеиспускания</li>
                </ul>
                <h3>Особые указания</h3>
                <p>Антигистамины 1-го поколения могут вызывать сонливость, поэтому не рекомендуются водителям и людям, работающим с механизмами. Антигистамины 2-го и 3-го поколений менее вызывают сонливость.</p>
            `
        }
    };
    
    // Создаем модальное окно с деталями
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>${details[ref].title}</h2>
            <div class="modal-body">
                ${details[ref].content}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Добавляем обработчики событий для закрытия модального окна
    modal.querySelector('.close').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}