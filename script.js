const LETTERS = ["A", "B", "C", "D", "E", "F"];

const baseQuestions = [
  {
    id: 1,
    type: "single",
    question: "Понятие национальной безопасности согласно Стратегии национальной безопасности РФ:",
    options: [
      "Исключительно военная мощь государства, гарантирующая невмешательство извне",
      "Отсутствие военных конфликтов и полное сотрудничество со всеми странами мира",
      "Способность государства контролировать все финансовые потоки на своей территории",
      "Состояние защищенности личности, общества и государства от внутренних и внешних угроз, обеспечивающее суверенитет, территориальную целостность и устойчивое развитие"
    ],
    correctIndex: 3
  },
  {
    id: 2,
    type: "single",
    question: "Виды безопасности и сферы жизнедеятельности согласно законодательству РФ:",
    options: [
      "Космическая, воздушная и подводная безопасность; сферы: транспорт и связь",
      "Личная, семейная и корпоративная безопасность; сферы: бытовая и производственная",
      "Национальная, информационная, экономическая, экологическая; сферы: военная, внешнеполитическая, экономическая, социальная, информационная",
      "Только военная и политическая безопасность; сферы: армия и правоохранительные органы"
    ],
    correctIndex: 2
  },
  {
    id: 3,
    type: "single",
    question: "Определение информационной безопасности согласно Доктрине информационной безопасности РФ:",
    options: [
      "Отсутствие компьютерных вирусов на серверах государственных учреждений",
      "Полный запрет на использование иностранного программного обеспечения",
      "Процесс обязательного шифрования всех данных с использованием алгоритмов ГОСТ",
      "Состояние защищенности интересов личности, общества и государства от угроз в информационной сфере"
    ],
    correctIndex: 3
  },
  {
    id: 4,
    type: "single",
    question: "Место информационной безопасности в системе национальной безопасности РФ:",
    options: [
      "Не имеет значения по сравнению с военной безопасностью",
      "Рассматривается исключительно как подотрасль экономической безопасности",
      "Является системообразующим фактором, обеспечивающим защиту национальных интересов в цифровой среде",
      "Касается только защиты государственных секретов"
    ],
    correctIndex: 2
  },
  {
    id: 5,
    type: "single",
    question: "Интересы личности в информационной сфере согласно законодательству РФ:",
    options: [
      "Полный контроль государства над личной перепиской граждан",
      "Обязанность граждан самостоятельно разрабатывать средства криптографической защиты",
      "Запрет на использование социальных сетей для лиц младше 21 года",
      "Реализация прав на доступ к информации, сохранение личной тайны, защита от негативного психологического воздействия"
    ],
    correctIndex: 3
  },
  {
    id: 6,
    type: "single",
    question: "Интересы общества в информационной сфере:",
    options: [
      "Свободное распространение любых сведений без цензуры и ограничений",
      "Полное исключение человеческого фактора из процессов обработки данных",
      "Монополизация информационных ресурсов крупными корпорациями",
      "Обеспечение прав на объективную информацию, формирование «общества знаний», защита традиционных ценностей"
    ],
    correctIndex: 3
  },
  {
    id: 7,
    type: "single",
    question: "Интересы государства в информационной сфере:",
    options: [
      "Обязательное использование только иностранного оборудования в госсекторе",
      "Полная изоляция российского сегмента интернета от мирового",
      "Защита суверенитета, устойчивая работа КИИ, развитие отечественной ИТ-индустрии",
      "Передача функций управления интернетом международным организациям"
    ],
    correctIndex: 2
  },
  {
    id: 8,
    type: "single",
    question: "Угрозы информационному обеспечению государственной политики РФ:",
    options: [
      "Снижение скорости интернета в отдаленных регионах",
      "Развитие открытых исходных кодов программного обеспечения",
      "Использование ИКТ для вмешательства во внутренние дела, подрыв суверенитета, технологическое доминирование иностранных структур",
      "Увеличение количества пользователей отечественных социальных сетей"
    ],
    correctIndex: 2
  },
  {
    id: 9,
    type: "single",
    question: "Виды угроз информационной безопасности по отношению к объекту:",
    options: [
      "Внутренние (сотрудники, сбои ПО) и внешние (хакеры, разведка)",
      "Постоянные и временные",
      "Легальные и нелегальные",
      "Программные и аппаратные"
    ],
    correctIndex: 0
  },
  {
    id: 10,
    type: "single",
    question: "Внешние источники угроз информационной безопасности:",
    options: [
      "Сбои в электропитании серверного оборудования",
      "Устаревание лицензий на антивирусное ПО",
      "Техническая разведка иностранных государств, киберпреступные группы, DoS/DDoS атаки",
      "Ошибки персонала при вводе паролей"
    ],
    correctIndex: 2
  },
  {
    id: 11,
    type: "single",
    question: "Внутренние источники угроз информационной безопасности государства:",
    options: [
      "DDoS-атаки на государственные веб-сайты",
      "Атаки хакерских группировок из других стран",
      "Перехват трафика иностранными спецслужбами",
      "Разглашение данных сотрудниками, ошибки персонала, программные закладки и дефекты ПО"
    ],
    correctIndex: 3
  },
  {
    id: 12,
    type: "single",
    question: "Информационное оружие, его классификация и возможности:",
    options: [
      "Средства массовой информации, принадлежащие иностранным компаниям",
      "Любое программное обеспечение иностранного производства",
      "Только текстовые материалы, направленные на дискредитацию власти",
      "Программно-технические средства, способные разрушать физические объекты КИИ или оказывать деструктивное влияние на инф. процессы"
    ],
    correctIndex: 3
  },
  {
    id: 13,
    type: "single",
    question: "Доктрина информационной войны рассматривает цифровую среду как:",
    options: [
      "Среду для развлечений и отдыха граждан",
      "Пространство для свободного обмена мнениями без каких-либо ограничений",
      "Театр военных действий, где цель — нанесение ущерба инфраструктуре и влияние на сознание",
      "Исключительно экономическую площадку для торговли данными"
    ],
    correctIndex: 2
  },
  {
    id: 14,
    type: "single",
    question: "Методы и средства ведения информационной войны:",
    options: [
      "Рекламные кампании в социальных сетях",
      "Техническая поддержка пользователей",
      "Только открытая публикация официальных документов",
      "Социальная инженерия, атаки «под ложным флагом», уязвимости нулевого дня, распространение фейков"
    ],
    correctIndex: 3
  },
  {
    id: 15,
    type: "single",
    question: "Понятие информационного противоборства:",
    options: [
      "Соперничество государств в инф. пространстве для достижения превосходства или нанесения ущерба",
      "Конкуренция интернет-провайдеров за абонентов",
      "Борьба поисковых систем за выдачу результатов",
      "Соревнование хакеров на скорость взлома систем"
    ],
    correctIndex: 0
  },
  {
    id: 16,
    type: "single",
    question: "Причины искажения информации в информационных системах:",
    options: [
      "Автоматическое сжатие данных при передаче",
      "Преднамеренные атаки, технические сбои ТС и ПО, ошибки персонала",
      "Исключительно действия иностранных разведок",
      "Только естественное старение магнитных носителей"
    ],
    correctIndex: 1
  },
  {
    id: 17,
    type: "single",
    question: "Виды искажения информации с точки зрения ИБ:",
    options: [
      "Изменение цветовой схемы документов",
      "Смена кодировки текста",
      "Переwatermarking изображений",
      "Нарушение целостности (изменение данных), точности и полноты информации"
    ],
    correctIndex: 3
  },
  {
    id: 18,
    type: "single",
    question: "Каналы утечки информации (ТКУИ):",
    options: [
      "Только физические носители, выносимые из офиса",
      "Социальные сети сотрудников",
      "Пути неконтролируемого выхода данных: ПЭМИ, наводки в линиях связи, акустические каналы",
      "Электронная почта и мессенджеры"
    ],
    correctIndex: 2
  },
  {
    id: 19,
    type: "single",
    question: "Естественные и искусственные каналы утечки информации:",
    options: [
      "Естественные — это бумажные документы, искусственные — электронные",
      "Естественные создаются человеком, искусственные — природой",
      "Естественные — это интернет, искусственные — интранет",
      "Естественные обусловлены физикой работы оборудования, искусственные создаются с помощью закладных устройств"
    ],
    correctIndex: 3
  },
  {
    id: 20,
    type: "single",
    question: "Методы обеспечения информационной безопасности:",
    options: [
      "Правовые (законы), организационные (регламенты), технические (СЗИ), экономические (расчет рисков)",
      "Только технические методы (антивирусы и фаерволы)",
      "Исключительно правовые методы (штрафы и тюрьма)",
      "Только экономические методы (страхование рисков)"
    ],
    correctIndex: 0
  },
  {
    id: 21,
    type: "single",
    question: "Критерии и классы защищенности средств вычислительной техники:",
    options: [
      "Определяются требованиями регуляторов (ФСТЭК, ФСБ) и наличием СЗИ в госреестрах",
      "Определяются страной-производителем процессора",
      "Зависят от размера оперативной памяти",
      "Зависят только от стоимости оборудования"
    ],
    correctIndex: 0
  },
  {
    id: 22,
    type: "single",
    question: "Компьютерная система как объект информационной безопасности:",
    options: [
      "Совокупность ресурсов, ТС, ПО и помещений, требующая защиты конфиденциальности, целостности и доступности",
      "Только операционная система без учета оборудования",
      "Исключительно периферийные устройства ввода-вывода",
      "Только центральный процессор и оперативная память"
    ],
    correctIndex: 0
  },
  {
    id: 23,
    type: "single",
    question: "Информационные процессы как объект информационной безопасности:",
    options: [
      "Только процессы шифрования данных",
      "Процессы физического уничтожения носителей",
      "Исключительно процессы удаления информации",
      "Процессы поиска, сбора, хранения, обработки, предоставления и распространения информации"
    ],
    correctIndex: 3
  },
  {
    id: 24,
    type: "single",
    question: "Влияние человеческого фактора на обеспечение ИБ:",
    options: [
      "Человеческий фактор не влияет на ИБ благодаря ИИ",
      "Сотрудники являются самым надежным элементом защиты",
      "Человек — самое слабое звено (слабые пароли, фишинг); пример: инциденты из-за неиспользования 2FA",
      "Человек полностью исключен из контура безопасности"
    ],
    correctIndex: 2
  },
  {
    id: 25,
    type: "single",
    question: "Программно-аппаратные средства обеспечения ИБ:",
    options: [
      "Исключительно антивирусные сканеры",
      "Технические и программные инструменты (контроллеры, платы, спец. ПО) для защиты от утечки и НСД",
      "Только офисные приложения для работы с документами",
      "Средства для создания презентаций"
    ],
    correctIndex: 1
  },
  {
    id: 26,
    type: "single",
    question: "Классификация программно-аппаратных средств обеспечения ИБ:",
    options: [
      "Только средства для резервного копирования",
      "Только системы кондиционирования серверных",
      "Средства защиты от НСД, антивирусы, NGFW, криптосредства, СОВ и мониторинга",
      "Исключительно средства шифрования трафика"
    ],
    correctIndex: 2
  },
  {
    id: 27,
    type: "single",
    question: "Защита от несанкционированного доступа (НСД) реализуется через:",
    options: [
      "Хранение всех паролей в открытом виде",
      "Полный запрет на использование интернета",
      "Физическое уничтожение всех носителей информации",
      "Механизмы идентификации, аутентификации и разграничения полномочий"
    ],
    correctIndex: 3
  },
  {
    id: 28,
    type: "single",
    question: "Антивирусная защита предназначена для:",
    options: [
      "Ускорения работы процессора",
      "Шифрования трафика",
      "Обнаружения и нейтрализации вредоносных программ, предотвращения заражения систем",
      "Оптимизации расхода электроэнергии"
    ],
    correctIndex: 2
  },
  {
    id: 29,
    type: "single",
    question: "Межсетевые экраны (NGFW) предназначены для:",
    options: [
      "Управления электропитанием оборудования",
      "Резервного копирования данных на внешние диски",
      "Фильтрации сетевого трафика и защиты периметра сети от внешних атак",
      "Физической защиты серверов от пожара"
    ],
    correctIndex: 2
  },
  {
    id: 30,
    type: "single",
    question: "VPN-технологии обеспечивают:",
    options: [
      "Создание защищенных (зашифрованных) каналов связи поверх незащищенных сетей",
      "Физическую изоляцию компьютеров друг от друга",
      "Удаление всех вредоносных программ",
      "Резервное копирование в облако"
    ],
    correctIndex: 0
  },
  {
    id: 31,
    type: "single",
    question: "Криптографические методы защиты информации обеспечивают:",
    options: [
      "Резервное копирование на магнитные ленты",
      "Конфиденциальность данных через шифрование и подлинность через электронную подпись (63-ФЗ)",
      "Антивирусную проверку файлов",
      "Физическую охрану серверных помещений"
    ],
    correctIndex: 1
  },
  {
    id: 32,
    type: "single",
    question: "Нормативно-правовая база системы ИБ РФ включает:",
    options: [
      "Конституцию РФ, ФЗ-149, ФЗ-152, ФЗ-98, ФЗ-187 и Доктрину ИБ",
      "Только международные конвенции",
      "Исключительно внутренние приказы компаний",
      "Только Уголовный кодекс РФ"
    ],
    correctIndex: 0
  },
  {
    id: 33,
    type: "single",
    question: "Функции федеральных органов власти в сфере защиты информации:",
    options: [
      "Прогнозирование угроз, издание законов, координация, аттестация систем и лицензирование",
      "Только сбор налогов с IT-компаний",
      "Исключительно разработка игровых приложений",
      "Только обучение школьников программированию"
    ],
    correctIndex: 0
  },
  {
    id: 34,
    type: "single",
    question: "Государственная система защиты информации включает:",
    options: [
      "Только антивирусные лаборатории",
      "Только технические поддержки провайдеров",
      "Органы власти (Президент, Совбез, ФСБ, ФСТЭК), нормативную базу и службы ЗИ на предприятиях",
      "Исключительно отделы кадров"
    ],
    correctIndex: 2
  },
  {
    id: 35,
    type: "single",
    question: "Механизмы обеспечения защиты информации включают:",
    options: [
      "Только установку сложных паролей",
      "Исключительно увольнение нарушителей",
      "Правовые меры, технические СЗИ, физические преграды и организационные регламенты",
      "Только шифрование жестких дисков"
    ],
    correctIndex: 2
  },
  {
    id: 36,
    type: "single",
    question: "Актуальность угроз ИБ в современном мире обусловлена:",
    options: [
      "Снижением количества компьютеров в офисах",
      "Отказом от использования интернета",
      "Переходом на бумажный документооборот",
      "Глобальной цифровизацией, импортозависимостью ПО и переходом киберконфликтов в межгосударственное противоборство"
    ],
    correctIndex: 3
  },
  {
    id: 37,
    type: "single",
    question: "Понятие и природа уязвимостей ИБ:",
    options: [
      "Отсутствие антивируса на компьютере",
      "«Брешь» или свойство системы из-за ошибок в коде/архитектуре, позволяющее реализовать угрозу",
      "Слишком сложный пароль",
      "Наличие резервного копирования"
    ],
    correctIndex: 1
  },
  {
    id: 38,
    type: "single",
    question: "Кибербезопасность и киберпреступность в современном мире характеризуются:",
    options: [
      "Развитием модели CaaS, ростом атак на КИИ и хищением средств в крупных размерах",
      "Исключительно шалостями подростков",
      "Полным исчезновением хакерских атак",
      "Отсутствием ущерба для бизнеса"
    ],
    correctIndex: 0
  },
  {
    id: 39,
    type: "single",
    question: "Нормативно-правовое обеспечение защиты информации регулируется:",
    options: [
      "Только правилами внутреннего распорядка",
      "Законами и приказами ФСТЭК (№117, №21, №239) для ГИС, ПДн и КИИ",
      "Только международными стандартами ISO без учета РФ",
      "Исключительно рекомендациями производителей ПО"
    ],
    correctIndex: 1
  },
  {
    id: 40,
    type: "single",
    question: "История криптографии охватывает период:",
    options: [
      "Только эпоху Цезаря",
      "Только с 1990 года до наших дней",
      "Исключительно период Второй мировой войны",
      "От древних шифров до современных квантово-устойчивых алгоритмов"
    ],
    correctIndex: 3
  },
  {
    id: 41,
    type: "single",
    question: "Модель создания комплексной системы защиты информации строится:",
    options: [
      "Только на шифровании всех данных",
      "Только на покупке самого дорогого антивируса",
      "Эшелонированно (правовой, административный, физический, технический рубежи) на основе анализа угроз",
      "Исключительно на найме охраны"
    ],
    correctIndex: 2
  },
  {
    id: 42,
    type: "single",
    question: "Аудит ИБ, его роль в обеспечении ЗИ предприятия:",
    options: [
      "Исключительно тестирование скорости интернета",
      "Только проверка наличия лицензий на ПО",
      "Независимая проверка состояния ИБ; первый этап построения системы для выявления рисков",
      "Только опрос сотрудников"
    ],
    correctIndex: 2
  },
  {
    id: 43,
    type: "single",
    question: "Требования к защите персональных данных (152-ФЗ, приказ ФСТЭК №21):",
    options: [
      "Отказ от использования баз данных",
      "Публикация всех данных в открытом доступе",
      "Хранение данных только на зарубежных серверах",
      "Получение согласия, локализация данных в РФ, применение сертифицированных СЗИ"
    ],
    correctIndex: 3
  },
  {
    id: 44,
    type: "single",
    question: "Программно-аппаратные средства защиты информации включают:",
    options: [
      "Только клавиатуры",
      "Специализированные сетевые шлюзы, платы доверенной загрузки и аппаратные криптопроцессоры",
      "Исключительно мониторы",
      "Только офисные сканеры"
    ],
    correctIndex: 1
  },
  {
    id: 45,
    type: "single",
    question: "Защита объектов КИИ (187-ФЗ) включает:",
    options: [
      "Игнорирование угроз",
      "Категорирование объектов, создание систем безопасности и взаимодействие с ГосСОПКА",
      "Только физическую охрану зданий",
      "Только установку антивирусов"
    ],
    correctIndex: 1
  },
  {
    id: 46,
    type: "single",
    question: "Криптографические методы защиты информации применяются:",
    options: [
      "Исключительно в играх",
      "В системах ЭДО, банковской сфере и для защиты каналов управления КИИ",
      "Только для скрытия паролей Wi-Fi",
      "Только для шифрования личных дневников"
    ],
    correctIndex: 1
  },
  {
    id: 47,
    type: "single",
    question: "Технические каналы утечки информации (ТКУИ) представляют угрозу из-за:",
    options: [
      "Исключительно бумажного документооборота",
      "Высокой стоимости оборудования",
      "Необходимости физического контакта",
      "Возможности дистанционного перехвата данных без физического проникновения"
    ],
    correctIndex: 3
  },
  {
    id: 48,
    type: "single",
    question: "Методы и средства современной информационной войны включают:",
    options: [
      "Только печатные листовки",
      "Исключительно устные выступления",
      "Активное использование ИИ для создания дипфейков и автоматизации атак на инфраструктуру",
      "Только радиоэфир"
    ],
    correctIndex: 2
  },
  {
    id: 49,
    type: "single",
    question: "Конкурентная информационная разведка в современных условиях:",
    options: [
      "Физическое уничтожение офисов конкурентов",
      "Легальный сбор ценной информации о конкурентах; СЗИ защищает от перерастания в шпионаж",
      "Незаконный взлом серверов конкурентов",
      "Промышленный саботаж"
    ],
    correctIndex: 1
  },
  {
    id: 50,
    type: "single",
    question: "Функционирование гос. системы защиты информации в условиях кибервойны:",
    options: [
      "Полный отказ от интернета",
      "Переход на иностранное ПО",
      "Игнорирование инцидентов",
      "Переход на отечественное ПО, реагирование через НКЦКИ, защита нац. сегмента интернета"
    ],
    correctIndex: 3
  },
  {
    id: 51,
    type: "single",
    question: "Информационная безопасность государства, общества, личности – современный подход:",
    options: [
      "Полный отказ от цифровых технологий",
      "Защита только государства в ущерб обществу",
      "Защита только личности в ущерб государству",
      "Приоритет цифрового суверенитета и комплексная защита интересов всех субъектов"
    ],
    correctIndex: 3
  },
  {
    id: 52,
    type: "single",
    question: "Обеспечение защиты информации в ГИС (приказ ФСТЭК №117):",
    options: [
      "Не требует никаких мер защиты",
      "Исключительно обучения персонала",
      "Только установки бесплатного ПО",
      "Требует обязательной аттестации системы и использования сертифицированных отечественных СЗИ"
    ],
    correctIndex: 3
  },
  {
    id: 53,
    type: "single",
    question: "Кибербезопасность КИИ в современных условиях направлена на:",
    options: [
      "Защиту систем управления транспортом, энергетикой и связью от APT-атак иностранных государств",
      "Защиту только социальных сетей",
      "Исключительно защиту развлекательных сайтов",
      "Защиту только личных компьютеров граждан"
    ],
    correctIndex: 0
  },
  {
    id: 54,
    type: "single",
    question: "Анализ киберугроз на инф. ресурсы РФ в 2025 г. показывает:",
    options: [
      "Резкий рост атак на транспортный сектор и госресурсы, активизацию антироссийских хакерских групп",
      "Снижение количества атак",
      "Переход угроз исключительно в оффлайн",
      "Полное отсутствие угроз"
    ],
    correctIndex: 0
  },
  {
    id: 55,
    type: "single",
    question: "Природа уязвимостей ИБ в современных ПО включает:",
    options: [
      "Только устаревание оборудования",
      "Уязвимости цепочки поставок (Supply Chain) и недостатки в популярных библиотеках",
      "Исключительно несовместимость с Windows",
      "Только опечатки в интерфейсе"
    ],
    correctIndex: 1
  },
  {
    id: 56,
    type: "single",
    question: "Актуальность повышения уровня подготовки специалистов по ЗИ в Вузах РФ:",
    options: [
      "Обусловлена острым дефицитом кадров для обеспечения цифрового суверенитета в условиях кибервойны",
      "Достаточно школьных знаний",
      "Специалистов по ЗИ слишком много",
      "Профессия исчезает"
    ],
    correctIndex: 0
  },
  {
    id: 57,
    type: "single",
    question: "Современные требования к квалификации специалиста по ЗИ:",
    options: [
      "Знание нормативной базы, владение тех. средствами защиты, умение расследовать киберинциденты",
      "Только умение переустанавливать Windows",
      "Исключительно знание одного языка программирования",
      "Только навыки работы с офисными приложениями"
    ],
    correctIndex: 0
  },
  {
    id: 58,
    type: "single",
    question: "ФСТЭК РФ, основные функции в сфере защиты информации:",
    options: [
      "Только защита государственной тайны",
      "Исключительно сбор налогов",
      "Только лицензирование детективов",
      "Техническая защита (не гостайна), сертификация СЗИ, аттестация ГИС, ведение БДУ"
    ],
    correctIndex: 3
  },
  {
    id: 59,
    type: "single",
    question: "ФСБ РФ, основные функции в сфере защиты информации:",
    options: [
      "Исключительно охрана границ",
      "Только регулирование дорожного движения",
      "Только выдача загранпаспортов",
      "Контрразведка, криптозащита, защита гостайны, борьба с киберпреступностью, руководство ГосСОПКА"
    ],
    correctIndex: 3
  },
  {
    id: 60,
    type: "single",
    question: "Задачи Совета Безопасности РФ в ИБ:",
    options: [
      "Только управление спортом",
      "Выработка стратегии (Доктрина ИБ), координация органов власти, прогнозирование угроз",
      "Исключительно строительство дорог",
      "Только организация праздников"
    ],
    correctIndex: 1
  },
  {
    id: 61,
    type: "single",
    question: "Изменения в НПА защиты информации за 2022 г.:",
    options: [
      "Отмена всех требований по ИБ",
      "Запрет на использование компьютеров",
      "Переход на зарубежное ПО",
      "Требования по созданию обособленных служб ИБ (Постановление №1272) и ускорение импортозамещения в КИИ"
    ],
    correctIndex: 3
  },
  {
    id: 62,
    type: "single",
    question: "Криптография от возникновения до современного времени:",
    options: [
      "Полный отказ от шифрования",
      "Исключительно использование шифра Цезаря",
      "Развитие от простых замен до сложных мат. алгоритмов, включая современную электронную подпись",
      "Криптография не развивалась"
    ],
    correctIndex: 2
  },
  {
    id: 63,
    type: "single",
    question: "Создание комплексной системы защиты информации на предприятии:",
    options: [
      "Не нужна современным компаниям",
      "Возможна только в госсекторе",
      "Предотвращает потерю активов и остановку бизнес-процессов; затраты соотносятся с ущербом",
      "Требует бесконечных затрат без отдачи"
    ],
    correctIndex: 2
  },
  {
    id: 64,
    type: "single",
    question: "Практическое применение программно-аппаратных средств защиты информации:",
    options: [
      "Внедрение NGFW и SIEM позволяет автоматически обнаруживать атаки и блокировать их",
      "Средства защиты только замедляют работу",
      "Они не дают никакого результата",
      "Их применение запрещено законом"
    ],
    correctIndex: 0
  },
  {
    id: 65,
    type: "single",
    question: "Обеспечение защиты объектов КИИ в условиях кибервойны:",
    options: [
      "Игнорирование угроз",
      "Акцент на импортонезависимости и готовности к отражению атак иностранных спецслужб",
      "Использование только зарубежного ПО",
      "Полный отказ от защиты"
    ],
    correctIndex: 1
  },
  {
    id: 66,
    type: "single",
    question: "Криптографические методы защиты, область применения и НПА:",
    options: [
      "Не регулируются никакими НПА",
      "Применяются только в играх",
      "Применяются для гостайны, коммерческой тайны и ЭДО; регулируются 63-ФЗ и приказами ФСБ",
      "Запрещены к применению"
    ],
    correctIndex: 2
  },
  {
    id: 67,
    type: "single",
    question: "ТКУИ как актуальные угрозы:",
    options: [
      "ТКУИ больше не существуют",
      "Только бумажные документы",
      "Риск съема данных через излучения мониторов или микрофонный эффект офисной техники",
      "Только устные разговоры"
    ],
    correctIndex: 2
  },
  {
    id: 68,
    type: "single",
    question: "Методы и средства современной информационной войны:",
    options: [
      "Только личные встречи",
      "Только печатные газеты",
      "Исключительно устные дебаты",
      "Использование бот-сетей для массовой дезинформации и паралича банковских систем"
    ],
    correctIndex: 3
  },
  {
    id: 69,
    type: "single",
    question: "Роль защиты информации в противодействии промышленному шпионажу:",
    options: [
      "Создание режима коммерческой тайны (98-ФЗ), внедрение DLP и контроль персонала",
      "Увольнение всех сотрудников",
      "Игнорирование утечек",
      "Публикация всех секретов"
    ],
    correctIndex: 0
  },
  {
    id: 70,
    type: "single",
    question: "Социальная инженерия как угроза ИБ:",
    options: [
      "Защита от хакеров",
      "Метод получения доступа через психологическое воздействие (фишинг, звонки); частая причина инцидентов",
      "Метод шифрования данных",
      "Вид антивируса"
    ],
    correctIndex: 1
  },
  {
    id: 71,
    type: "single",
    question: "Актуальность обеспечения ИБ молодежи в социальных сетях:",
    options: [
      "Социальные сети полностью безопасны",
      "Молодежи не угрожают в интернете",
      "Молодежь не пользуется интернетом",
      "Защита от вербовки, влияния деструктивных сообществ и манипуляций через фейки"
    ],
    correctIndex: 3
  }
];

const storage = {
  getMistakes() {
    try { return JSON.parse(localStorage.getItem("historyQuizMistakes") || "[]"); } catch { return []; }
  },
  setMistakes(value) { localStorage.setItem("historyQuizMistakes", JSON.stringify(value)); },
};

// Получаем ошибки, приводим к числам и оставляем ТОЛЬКО те, которые реально есть в текущей базе baseQuestions
const validMistakes = storage.getMistakes()
  .map(Number)
  .filter(id => baseQuestions.some(q => q.id === id));

// Сразу обновляем хранилище, чтобы почистить его от мусора старых версий
storage.setMistakes(validMistakes);

const state = {
  screen: "home",
  questions: [],
  questionIndex: 0,
  answers: {},
  mistakes: validMistakes, // Используем уже отфильтрованные рабочие ID
  mistakeMode: false,
  currentRoundIds: [],
};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function prepareQuestion(question) {
  if (question.type === "single") {
    const order = shuffle(question.options.map((_, index) => index));
    const options = order.map(index => question.options[index]);
    const correctIndex = order.indexOf(question.correctIndex);
    return { ...question, options, correctIndex };
  }

  if (question.type === "match") {
    const order = shuffle(question.options.map((_, index) => index));
    const options = order.map(index => question.options[index]);
    const correctMatches = question.correctMatches.map(originalIndex => order.indexOf(originalIndex));
    return { ...question, options, correctMatches };
  }

  return { ...question };
}

function prepareQuestions(questions) {
  return shuffle(questions.map(prepareQuestion));
}

function startFullQuiz() {
  state.screen = "quiz";
  state.mistakeMode = false;
  state.questionIndex = 0;
  state.answers = {};
  state.questions = prepareQuestions(baseQuestions);
  state.currentRoundIds = state.questions.map(q => q.id);
  render();
}

function startMistakesQuiz() {
  if (!state.mistakes.length) return;
  state.screen = "quiz";
  state.mistakeMode = true;
  state.questionIndex = 0;
  state.answers = {};
  state.questions = prepareQuestions(baseQuestions.filter(q => state.mistakes.includes(q.id)));
  state.currentRoundIds = state.questions.map(q => q.id);
  render();
}

function goHome() {
  state.screen = "home";
  state.questionIndex = 0;
  state.answers = {};
  state.questions = [];
  state.mistakeMode = false;
  render();
}

function getQuestionById(id) {
  return baseQuestions.find(q => q.id === id);
}

function isCorrect(question, answer) {
  if (question.type === "single") return answer === question.correctIndex;
  if (question.type === "match") {
    return Array.isArray(answer) && question.correctMatches.every((v, i) => answer[i] === v);
  }
  return false;
}

function renderHome() {
  return `
    <div class="container">
      <div class="card">
        <div class="title-row">
          <div>
            <h1 style="margin:0;font-size:36px;">Тест по основам информационной безопасности</h1>
            <p class="muted" style="margin:6px 0 0;">71 вопрос</p>
          </div>
        </div>

        <div class="grid grid-3" style="margin-top:18px;">
          <div class="small-card"><div class="stat-label">Всего вопросов</div><div class="stat-value">71</div></div>
          <button class="small-card clickable-card" onclick="startMistakesQuiz()" ${state.mistakes.length ? "" : "disabled"}>
            <div class="stat-label">Ошибок накоплено</div>
            <div class="stat-value">${state.mistakes.length}</div>
            <div class="muted" style="margin-top:8px;font-size:13px;">Нажми, чтобы прорешать</div>
          </button>
        </div>

        <div class="grid grid-2" style="margin-top:16px;">
          <button class="btn" onclick="startFullQuiz()">Начать тест</button>
          <button class="btn secondary" onclick="openMistakesScreen()">Открыть ошибки</button>
        </div>
      </div>
    </div>
  `;
}

function openMistakesScreen() {
  state.screen = "mistakes";
  render();
}

function renderMistakes() {
  const items = state.mistakes.map(id => {
    const q = getQuestionById(id);
    return `<div class="error-item"><div class="muted" style="margin-bottom:6px;">Вопрос ${q.id}</div><div>${q.question}</div></div>`;
  }).join("");

  return `
    <div class="container">
      <div class="btn-row" style="margin-bottom:14px;">
        <button class="btn outline" onclick="goHome()">На главную</button>
        <button class="btn" onclick="startMistakesQuiz()" ${state.mistakes.length ? "" : "disabled"}>Прорешать ошибки</button>
      </div>
      <div class="card">
        <h2 style="margin-top:0;">Раздел «Ошибки»</h2>
        ${state.mistakes.length ? `<div class="list">${items}</div>` : `<div class="center"><div style="font-size:40px;">✅</div><div style="font-size:22px;font-weight:700;">Пока ошибок нет</div><p class="muted">Когда ответишь неправильно, вопрос появится здесь.</p></div>`}
      </div>
    </div>
  `;
}

function renderSingleQuestion(question, answer) {
  return question.options.map((option, idx) => {
    let cls = "option-btn";
    const answered = typeof answer === "number";
    if (answered) {
      if (idx === question.correctIndex) cls += " correct";
      else if (idx === answer && answer !== question.correctIndex) cls += " wrong";
    }
    return `
      <button class="${cls}" onclick="answerSingle(${idx})" ${answered ? "disabled" : ""}>
        <div class="option-inner">
          <div class="option-letter">${LETTERS[idx] || idx + 1}</div>
          <div>${option}</div>
        </div>
      </button>
    `;
  }).join("");
}

function renderMatchQuestion(question, answer) {
  const answered = Array.isArray(answer) && answer.length === question.prompts.length && answer.every(v => typeof v === "number");
  const rows = question.prompts.map((prompt, promptIdx) => {
    const selected = Array.isArray(answer) ? answer[promptIdx] : undefined;
    let result = "";
    if (answered) {
      const ok = selected === question.correctMatches[promptIdx];
      result = `<div class="match-result" style="color:${ok ? "#15803d" : "#b91c1c"};">${ok ? "Правильно" : "Неправильно"}</div>`;
    }
    return `
      <div class="match-card">
        <div style="font-weight:700;margin-bottom:10px;">${prompt}</div>
        <select class="select" onchange="answerMatch(${promptIdx}, this.value)" ${answered ? "disabled" : ""}>
          <option value="">Выберите вариант</option>
          ${question.options.map((opt, optIdx) => `<option value="${optIdx}" ${selected === optIdx ? "selected" : ""}>${opt}</option>`).join("")}
        </select>
        ${result}
      </div>
    `;
  }).join("");
  return rows;
}

function renderQuiz() {
  const question = state.questions[state.questionIndex];
  const answer = state.answers[question.id];
  const progress = Math.round(((state.questionIndex + 1) / state.questions.length) * 100);
  const answered = question.type === "single"
    ? typeof answer === "number"
    : Array.isArray(answer) && answer.length === question.prompts.length && answer.every(v => typeof v === "number");

  return `
    <div class="container">
      <div class="top-row" style="margin-bottom:14px;">
        <button class="btn outline" onclick="goHome()">На главную</button>
        <div class="badge">${state.mistakeMode ? "Режим: ошибки" : "Режим: полный тест"}</div>
      </div>
      <div class="card">
        <div class="top-row">
          <div>
            <h2 style="margin:0;font-size:34px;">Вопрос ${state.questionIndex + 1}</h2>
            <div class="muted" style="margin-top:4px;">из ${state.questions.length}</div>
          </div>
          <div style="text-align:right;">
            <div class="muted" style="font-size:14px;">Прогресс</div>
            <div style="font-weight:700;">${progress}%</div>
          </div>
        </div>
        <div class="progress-wrap">
          <div class="progress-bar"><div class="progress-fill" style="width:${progress}%;"></div></div>
        </div>

        <div class="question-box" style="margin-top:18px;">
          <div style="font-size:20px;line-height:1.5;font-weight:700;">${question.question}</div>
        </div>

        <div class="grid" style="margin-top:18px;">
          ${question.type === "single" ? renderSingleQuestion(question, answer) : renderMatchQuestion(question, answer)}
        </div>

        <div class="btn-row" style="justify-content:space-between;margin-top:18px;">
          <button class="btn outline" onclick="prevQuestion()" ${state.questionIndex === 0 ? "disabled" : ""}>Назад</button>
          <button class="btn" onclick="nextQuestion()" ${answered ? "" : "disabled"}>${state.questionIndex === state.questions.length - 1 ? "Завершить" : "Дальше"}</button>
        </div>
      </div>
    </div>
  `;
}

function answerSingle(optionIndex) {
  const question = state.questions[state.questionIndex];
  if (state.answers[question.id] !== undefined) return;
  state.answers[question.id] = optionIndex;
  if (optionIndex !== question.correctIndex && !state.mistakes.includes(question.id)) {
    state.mistakes.push(question.id);
    storage.setMistakes(state.mistakes);
  }
  render();
}

function answerMatch(promptIndex, value) {
  const question = state.questions[state.questionIndex];
  const idx = value === "" ? undefined : Number(value);
  const current = Array.isArray(state.answers[question.id]) ? [...state.answers[question.id]] : Array(question.prompts.length).fill(undefined);
  current[promptIndex] = idx;
  state.answers[question.id] = current;

  const completed = current.every(v => typeof v === "number");
  if (completed && !isCorrect(question, current) && !state.mistakes.includes(question.id)) {
    state.mistakes.push(question.id);
    storage.setMistakes(state.mistakes);
  }
  render();
}

function prevQuestion() {
  if (state.questionIndex > 0) {
    state.questionIndex -= 1;
    render();
  }
}

function nextQuestion() {
  if (state.questionIndex < state.questions.length - 1) {
    state.questionIndex += 1;
    render();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  if (state.mistakeMode) {
    const roundIds = new Set(state.currentRoundIds);
    const stillWrong = state.currentRoundIds.filter(id => {
      const q = state.questions.find(item => item.id === id) || getQuestionById(id);
      return !isCorrect(q, state.answers[id]);
    });
    state.mistakes = state.mistakes.filter(id => !roundIds.has(id));
    for (const id of stillWrong) {
      if (!state.mistakes.includes(id)) state.mistakes.push(id);
    }
    storage.setMistakes(state.mistakes);
  }
  state.screen = "result";
  render();
}

function renderResult() {
  const total = state.questions.length;
  const correct = state.questions.filter(q => isCorrect(q, state.answers[q.id])).length;
  const wrong = total - correct;
  const percent = total ? Math.round((correct / total) * 100) : 0;
  return `
    <div class="container">
      <div class="card">
        <div class="title-row">
          <div class="icon-box">🏆</div>
          <div>
            <h1 style="margin:0;font-size:34px;">Результат</h1>
            <p class="muted" style="margin:6px 0 0;">${state.mistakeMode ? "Повтор ошибок завершён" : "Основной тест завершён"}</p>
          </div>
        </div>

        <div class="grid grid-3" style="margin-top:18px;">
          <div class="small-card"><div class="stat-label">Правильно</div><div class="stat-value">${correct}</div></div>
          <div class="small-card"><div class="stat-label">Неправильно</div><div class="stat-value">${wrong}</div></div>
          <div class="small-card"><div class="stat-label">Процент</div><div class="stat-value">${percent}%</div></div>
        </div>

        <div style="margin-top:18px;">
          <div class="top-row" style="margin-bottom:8px;"><div class="muted">Успешность</div><div>${percent}%</div></div>
          <div class="progress-bar"><div class="progress-fill" style="width:${percent}%;"></div></div>
        </div>

        <div class="grid grid-2" style="margin-top:18px;">
          <button class="btn" onclick="startFullQuiz()">Пройти весь тест заново</button>
          <button class="btn secondary" onclick="startMistakesQuiz()" ${state.mistakes.length ? "" : "disabled"}>Повторить ошибки</button>
        </div>
        <div style="margin-top:12px;"><button class="btn outline" style="width:100%;" onclick="goHome()">На главную</button></div>
      </div>
    </div>
  `;
}

function render() {
  const app = document.getElementById("app");
  if (state.screen === "home") app.innerHTML = renderHome();
  else if (state.screen === "mistakes") app.innerHTML = renderMistakes();
  else if (state.screen === "quiz") app.innerHTML = renderQuiz();
  else if (state.screen === "result") app.innerHTML = renderResult();
}

window.startFullQuiz = startFullQuiz;
window.startMistakesQuiz = startMistakesQuiz;
window.goHome = goHome;
window.openMistakesScreen = openMistakesScreen;
window.answerSingle = answerSingle;
window.answerMatch = answerMatch;
window.prevQuestion = prevQuestion;
window.nextQuestion = nextQuestion;

render();
