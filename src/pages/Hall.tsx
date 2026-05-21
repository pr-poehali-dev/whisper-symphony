import { useParams, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

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

const SECTIONS = [
  {
    id: "watch",
    emoji: "🎬",
    title: "Посмотрите!",
    icon: "Play",
    description: "Документальные фильмы, видеолекции и репортажи о современной культурной жизни России",
    items: [
      "Документальный цикл «Культура и государство»",
      "Видеолекции ведущих культурологов",
      "Репортажи о федеральных культурных событиях",
      "Интервью с деятелями культуры и искусства",
    ],
  },
  {
    id: "listen",
    emoji: "🎧",
    title: "Послушайте!",
    icon: "Headphones",
    description: "Подкасты, аудиолекции и записи дискуссий о культурных программах и проектах",
    items: [
      "Подкасты о культурной политике современной России",
      "Аудиозаписи конференций и форумов",
      "Лекции экспертов в области культуры",
      "Записи круглых столов и публичных дискуссий",
    ],
  },
  {
    id: "read",
    emoji: "📖",
    title: "Почитайте!",
    icon: "BookOpen",
    description: "Программы, исследования, законодательные акты и аналитика в сфере культуры",
    items: [
      "Государственные программы и национальные проекты",
      "Научные статьи и монографии по культурной политике",
      "Аналитические доклады и отчёты профильных ведомств",
      "Обзоры современных культурных инициатив",
    ],
  },
]

const Hall = () => {
  const { hallId } = useParams<{ hallId: string }>()
  const navigate = useNavigate()

  const hall = HALLS[hallId as keyof typeof HALLS]

  if (!hall) {
    navigate("/")
    return null
  }

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
            {SECTIONS.map((section) => (
              <div
                key={section.id}
                className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-10 flex flex-col hover:bg-white/8 transition-colors cursor-pointer group"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-black/30 ring-1 ring-white/20 mb-8 text-3xl">
                  {section.emoji}
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold mb-4 group-hover:text-white/90 transition-colors">
                  {section.title}
                </h2>

                {/* Description */}
                <p className="text-white/70 leading-relaxed mb-8">
                  {section.description}
                </p>

                {/* CTA */}
                <Button className="w-full bg-white text-black hover:bg-white/90 rounded-full font-medium">
                  Открыть раздел
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer strip */}
      <footer className="relative z-10 py-10 px-6 text-center">
        <p className="text-white/40 text-sm">© 2026 Виртуальный музей культурной политики</p>
      </footer>
    </div>
  )
}

export default Hall