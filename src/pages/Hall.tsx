import { useParams, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const HALLS = {
  internal: {
    title: "Зал внутренней культурной политики",
    subtitle: "Государственные программы, законодательство и институты, формирующие культурную жизнь России",
    bg: "https://cdn.poehali.dev/projects/bfd1acd5-4d69-4d91-97b8-86bab313e347/files/0c00df22-d626-4c1e-b7c6-e4b7c10c13e6.jpg",
  },
  external: {
    title: "Зал внешней культурной политики",
    subtitle: "Международные культурные обмены, дипломатия и «мягкая сила» российского государства",
    bg: "https://cdn.poehali.dev/projects/bfd1acd5-4d69-4d91-97b8-86bab313e347/files/f8e8ed4b-9d95-4b5d-9436-82b15477f6eb.jpg",
  },
  diaspora: {
    title: "Зал диаспор",
    subtitle: "Культурная жизнь русских общин за рубежом: традиции, память и связь с Родиной",
    bg: "https://cdn.poehali.dev/projects/bfd1acd5-4d69-4d91-97b8-86bab313e347/files/a8c8bb29-06ea-4829-a935-724abe3ad1c8.jpg",
  },
}

interface Material {
  title: string
  description: string
  source: string
  url?: string
}

interface Section {
  id: string
  emoji: string
  title: string
  description: string
  materials: Material[]
}

const SECTIONS_BY_HALL: Record<string, Section[]> = {
  internal: [
    {
      id: "watch",
      emoji: "🎬",
      title: "Посмотрите!",
      description: "Видеолекции и ролики о государственных культурных программах России",
      materials: [
        {
          title: "Национальный проект «Культура»",
          description: "Лекция/вебинар на портале «Культура.РФ». Раскрывает тему цифровизации культуры, мультимедиагидов, платформы Artefact и участия музеев в проекте.",
          source: "Культура.РФ",
          url: "https://www.culture.ru",
        },
        {
          title: "Госуслуги Культура: пошаговая инструкция",
          description: "Практический ролик о цифровом доступе к культурным мероприятиям по Пушкинской карте.",
          source: "RuTube: Госуслуги Культура",
          url: "https://rutube.ru",
        },
        {
          title: "Как бесплатно ходить в музеи",
          description: "Ролик Почта Банка как оператора проекта «Пушкинская карта». Наглядное объяснение программы для молодёжи.",
          source: "RuTube: Почта Банк",
          url: "https://rutube.ru",
        },
        {
          title: "Видеолекции «Короче, гранты»",
          description: "Серия видеолекций Президентского фонда культурных инициатив для заявителей грантового конкурса.",
          source: "ВКонтакте / ПФКИ",
          url: "https://vk.com",
        },
        {
          title: "Плейлист театра Островского в Кинешме",
          description: "Видео о работе по программе «Пушкинская карта» — пример регионального информационного сопровождения.",
          source: "RuTube: театр Островского",
          url: "https://rutube.ru",
        },
      ],
    },
    {
      id: "listen",
      emoji: "🎧",
      title: "Послушайте!",
      description: "Подкасты и аудиоматериалы о культурных программах и грантах внутри страны",
      materials: [
        {
          title: "Подкаст ПФКИ: заключение договора",
          description: "Выпуск «Вы получили грант на реализацию творческого проекта: заключение договора». Пример аудиоформата методической поддержки фонда.",
          source: "Apple Podcasts: ПФКИ",
          url: "https://podcasts.apple.com",
        },
        {
          title: "«Мой Пушкин!» на Радио России Иваново",
          description: "Аудиозапись программы о «Пушкинской карте» на Радио России Иваново 89.1 FM. Пример регионального сопровождения проекта.",
          source: "RuTube: плейлист театра Островского",
          url: "https://rutube.ru",
        },
        {
          title: "Аудиоподкасты ПФКИ для заявителей",
          description: "Серия аудиоподкастов Президентского фонда культурных инициатив с методической поддержкой участников грантового конкурса.",
          source: "ПФКИ / Администрация Нижневартовска",
          url: "https://fond.culture.ru",
        },
      ],
    },
    {
      id: "read",
      emoji: "📖",
      title: "Почитайте!",
      description: "Программы, законодательные акты и аналитика по внутренней культурной политике",
      materials: [
        {
          title: "Национальный проект «Культура» — официальный раздел",
          description: "Официальный раздел Минкультуры о нацпроекте: сроки реализации 2019–2024, структура проекта, федеральные проекты «Культурная среда», «Творческие люди», «Цифровая культура», паспорта проекта.",
          source: "Минкультуры России",
          url: "https://culture.gov.ru",
        },
        {
          title: "Стратегия культурной политики Чувашской Республики до 2024 года",
          description: "Презентация по стратегии развития культурной политики. Пример региональной реализации нацпроекта.",
          source: "Региональная стратегия",
        },
        {
          title: "Тематическая подборка «Национальный проект Культура»",
          description: "Подборка на портале «Культура.РФ»: новости, публикации, связанные с нацпроектом, цифровыми проектами и культурными инициативами.",
          source: "Культура.РФ",
          url: "https://www.culture.ru",
        },
        {
          title: "Пушкинская карта — официальная страница",
          description: "Программа для граждан России от 14 до 22 лет. Позволяет посещать учреждения культуры за счёт федерального бюджета. Инструкция и пояснительные материалы.",
          source: "Культура.РФ: Пушкинская карта",
          url: "https://www.culture.ru/pushkinskaya-karta",
        },
        {
          title: "Грантовый конкурс ПФКИ — документы и материалы",
          description: "Страница конкурса: документы, методические материалы, чек-лист, положение о конкурсе.",
          source: "ПФКИ: грантовый конкурс",
          url: "https://fond.culture.ru",
        },
      ],
    },
  ],

  external: [
    {
      id: "watch",
      emoji: "🎬",
      title: "Посмотрите!",
      description: "Видеолекции и материалы о продвижении российской культуры за рубежом",
      materials: [
        {
          title: "Курс «Русский — язык образования, науки, бизнеса»",
          description: "Онлайн-курс Института Пушкина для программы «Послы русского языка в мире». Видеолекции о русском языке, культуре, литературе и преподавании РКИ.",
          source: "Институт Пушкина",
          url: "https://pushkininstitute.ru",
        },
      ],
    },
    {
      id: "listen",
      emoji: "🎧",
      title: "Послушайте!",
      description: "Аудиоматериалы о международной культурной деятельности России",
      materials: [],
    },
    {
      id: "read",
      emoji: "📖",
      title: "Почитайте!",
      description: "Документы и материалы о внешней культурной политике и продвижении русского языка",
      materials: [
        {
          title: "Russian Express — официальная страница проекта",
          description: "Проект Минкультуры России, МИД РФ и Росконцерта (2023). Включает образовательную программу и концерты российских национальных коллективов за рубежом.",
          source: "Росконцерт",
          url: "https://rosconcert.com",
        },
        {
          title: "Центры открытого образования на русском языке",
          description: "В 2024 году в 61 стране действовало 130 центров открытого образования на русском языке, где обучались более 16 тысяч учащихся.",
          source: "Минпросвещения России",
          url: "https://edu.gov.ru",
        },
        {
          title: "Программа «Послы русского языка в мире»",
          description: "Официальная страница программы Института Пушкина по подготовке и направлению волонтёров для продвижения русского языка и культуры за рубежом.",
          source: "Институт Пушкина",
          url: "https://pushkininstitute.ru",
        },
      ],
    },
  ],

  diaspora: [
    {
      id: "watch",
      emoji: "🎬",
      title: "Посмотрите!",
      description: "Видеоканалы, циклы и архивные записи о жизни русских общин за рубежом",
      materials: [
        {
          title: "Русский дом в Берлине",
          description: "Официальный видеоканал Русского дома в Берлине — анонсы событий, культурные программы, трансляции мероприятий.",
          source: "RuTube",
          url: "https://rutube.ru/channel/25185647/",
        },
        {
          title: "Russisches Haus in Berlin",
          description: "YouTube-канал Русского дома в Берлине на немецком языке. Материалы о культурных мероприятиях для русскоязычной диаспоры в Германии.",
          source: "YouTube",
          url: "https://www.youtube.com/RussischesHausinBerlin",
        },
        {
          title: "Русская Германия. История в следах",
          description: "Видеоцикл о следах русской культуры и истории в Германии: судьбы эмигрантов, памятные места, культурное наследие.",
          source: "RuTube",
          url: "https://rutube.ru/plst/103880/",
        },
        {
          title: "Радиоцикл «Русская Германия. История в следах»",
          description: "Аудио- и видеоверсия радиоцикла об истории русской эмиграции в Германии.",
          source: "YouTube",
          url: "https://www.youtube.com/watch?v=-qKfMJmtgbE",
        },
        {
          title: "Лето в Берлине. Марина Цветаева",
          description: "Документальный фильм о пребывании Марины Цветаевой в Берлине — часть цикла «Русская Германия».",
          source: "YouTube",
          url: "https://www.youtube.com/watch?v=78ep6HC-w4w",
        },
        {
          title: "Михаил Глинка. Русская Германия",
          description: "Фильм о немецких страницах биографии Михаила Глинки — часть цикла «Русская Германия».",
          source: "YouTube",
          url: "https://www.youtube.com/watch?v=2w__mB5DR_k",
        },
        {
          title: "Александр Шморель. Русская Германия",
          description: "Фильм о русском немце Александре Шмореле, одном из основателей движения «Белая роза» — часть цикла «Русская Германия».",
          source: "YouTube",
          url: "https://www.youtube.com/watch?v=cbO7ROPISqc",
        },
        {
          title: "Месяц русской культуры в Канаде",
          description: "Запись программы о месяце русской культуры в Канаде: концерты, выставки, культурные мероприятия русской диаспоры.",
          source: "YouTube",
          url: "https://www.youtube.com/watch?v=F2I7qEkEvkU",
        },
        {
          title: "Русская культура — архивные видео из мира русского зарубежья",
          description: "Видеоархив с редкими записями о культурной жизни русской эмиграции в разных странах мира.",
          source: "YouTube",
          url: "https://www.youtube.com/playlist?list=PLbvFRRl0RNZX3QQ4WipVxB7h-GUvy1iQ0",
        },
      ],
    },
    {
      id: "listen",
      emoji: "🎧",
      title: "Послушайте!",
      description: "Подкасты и аудиопрограммы о культурной жизни русских диаспор",
      materials: [
        {
          title: "Лаовайкаст с председателем Русского клуба в Шанхае",
          description: "Подкаст о жизни русскоязычного сообщества в Шанхае: интервью с председателем Русского клуба, культурные события, повседневная жизнь диаспоры.",
          source: "Facebook / Русский клуб в Шанхае",
          url: "https://www.facebook.com/russianshanghai/posts/1793806370719039/",
        },
        {
          title: "Лаовайкаст",
          description: "Подкаст о жизни русскоязычных экспатов в Китае. Охватывает темы культуры, адаптации, бизнеса и повседневной жизни в Поднебесной.",
          source: "Лаовайкаст",
          url: "https://laowaicast.ru",
        },
        {
          title: "Как устроены русские диаспоры",
          description: "Подкаст об устройстве русских диаспор в разных странах: сообщества, организации, культурная идентичность и связь с Россией.",
          source: "Apple Podcasts",
          url: "https://podcasts.apple.com/ru/podcast/id1171712709?i=1000557700414",
        },
      ],
    },
    {
      id: "read",
      emoji: "📖",
      title: "Почитайте!",
      description: "Сайты и медиаресурсы русскоязычных сообществ за рубежом",
      materials: [
        {
          title: "Русский клуб в Шанхае",
          description: "Сайт русскоязычного сообщества в Шанхае: новости, события, культурные мероприятия, информация для русских экспатов в Китае.",
          source: "russianshanghai.com",
          url: "https://www.russianshanghai.com/",
        },
        {
          title: "«Мумий Тролль» в Шанхае и конкурс от Лаовайкаста",
          description: "Материал о концерте группы «Мумий Тролль» в Шанхае как культурном событии для русской диаспоры в Китае, с конкурсом Лаовайкаста.",
          source: "Лаовайкаст",
          url: "https://laowaicast.ru/mumiytroll-2013",
        },
      ],
    },
  ],
}

const Hall = () => {
  const { hallId } = useParams<{ hallId: string }>()
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const hall = HALLS[hallId as keyof typeof HALLS]
  const sections = SECTIONS_BY_HALL[hallId as keyof typeof SECTIONS_BY_HALL] ?? []

  if (!hall) {
    navigate("/")
    return null
  }

  const openSection = sections.find((s) => s.id === activeSection)

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero */}
      <div className="relative min-h-[50vh] flex flex-col">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${hall.bg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0B0F12]" />
        </div>

        {/* Nav */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
          >
            <Icon name="ArrowLeft" size={16} />
            <span className="font-medium">Назад в музей</span>
          </button>

          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Landmark" size={18} />
            <span className="font-medium hidden md:block">Виртуальный музей</span>
          </div>
        </nav>

        {/* Title */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center pb-16 pt-8">
          <div className="mb-4 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Открытая коллекция</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 text-balance max-w-4xl">
            {hall.title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            {hall.subtitle}
          </p>
        </div>
      </div>

      {/* Sections */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section) => (
              <div
                key={section.id}
                onClick={() => section.materials.length > 0 && setActiveSection(section.id)}
                className={`rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-10 flex flex-col transition-colors group ${
                  section.materials.length > 0
                    ? "hover:bg-white/8 cursor-pointer"
                    : "opacity-50 cursor-not-allowed"
                }`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-black/30 ring-1 ring-white/20 mb-8 text-3xl">
                  {section.emoji}
                </div>

                <h2 className="text-3xl font-bold mb-4 group-hover:text-white/90 transition-colors">
                  {section.title}
                </h2>

                <p className="text-white/70 leading-relaxed mb-8 flex-1">
                  {section.description}
                </p>

                <Button
                  className="w-full bg-white text-black hover:bg-white/90 rounded-full font-medium disabled:opacity-40"
                  disabled={section.materials.length === 0}
                >
                  {section.materials.length > 0
                    ? `Открыть раздел · ${section.materials.length}`
                    : "Скоро появится"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeSection && openSection && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setActiveSection(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-[#0B0F12] ring-1 ring-white/15 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="text-4xl">{openSection.emoji}</div>
                <h2 className="text-2xl font-bold">{openSection.title}</h2>
              </div>
              <button
                onClick={() => setActiveSection(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Icon name="X" size={18} />
              </button>
            </div>

            {/* Materials */}
            <div className="space-y-4">
              {openSection.materials.map((mat, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/8 transition-colors"
                >
                  <h3 className="font-semibold text-base mb-2">{mat.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-3">{mat.description}</p>
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <span className="text-xs text-white/40 flex items-center gap-1">
                      <Icon name="BookOpen" size={12} />
                      {mat.source}
                    </span>
                    {mat.url && (
                      <a
                        href={mat.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1"
                      >
                        Перейти
                        <Icon name="ExternalLink" size={11} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer strip */}
      <footer className="relative z-10 py-10 px-6 text-center">
        <p className="text-white/40 text-sm">© 2026 Виртуальный музей культурной политики</p>
      </footer>
    </div>
  )
}

export default Hall