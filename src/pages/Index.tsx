import { Plus, Minus, Mail } from "lucide-react"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const navigate = useNavigate()

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Как попасть в виртуальный музей?",
      answer:
        "Доступ к музею открыт бесплатно для всех пользователей. Просто выберите интересующий вас зал на главной странице — внутренняя культурная политика, внешняя культурная политика или диаспоры — и начните изучение коллекции.",
    },
    {
      question: "Что представлено в Зале внутренней культурной политики?",
      answer:
        "Зал посвящён государственным решениям, законодательству и программам, формирующим культурную жизнь внутри страны: поддержка искусства, языковая политика, сохранение наследия, финансирование учреждений культуры.",
    },
    {
      question: "Что такое Зал внешней культурной политики?",
      answer:
        "Здесь представлены международные культурные обмены, договоры, программы «мягкой силы» и дипломатические инициативы в сфере культуры. Раздел охватывает двусторонние и многосторонние соглашения.",
    },
    {
      question: "Чему посвящён Зал диаспор?",
      answer:
        "Зал диаспор исследует культурную жизнь общин, проживающих за пределами исторической родины: их традиции, адаптацию, связь с культурой страны происхождения и вклад в принимающее общество.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/bfd1acd5-4d69-4d91-97b8-86bab313e347/files/71a86e46-5d57-4700-8daf-0bb3e5b41384.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/85" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Landmark" size={20} />
            <span className="font-medium text-balance">Виртуальный музей</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["Залы", "О музее", "Коллекция", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
            >
              Войти
            </a>
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Войти в музей</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Открытый доступ · Бесплатно</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-12 text-balance">
            Россия.<br />Культура.<br />Развитие.
          </h1>

          {/* Hall Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" onClick={() => navigate("/hall/internal")} className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-base font-medium">
              Зал внутренней культурной политики
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/hall/external")}
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-base"
            >
              Зал внешней культурной политики
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/hall/diaspora")}
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-base"
            >
              Зал диаспор
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="BookOpen" size={16} />
            <span className="text-sm font-medium">Открытая коллекция для исследователей и всех желающих</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Landmark" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Три тематических зала</h3>
              <p className="text-white/80 leading-relaxed">Внутренняя политика, международные связи и диаспоры.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Archive" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Первичные источники</h3>
              <p className="text-white/80 leading-relaxed">Документы, законы, договоры и архивные материалы.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Globe" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Международный охват</h3>
              <p className="text-white/80 leading-relaxed">Материалы охватывают культурную политику разных стран.</p>
            </div>

            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Search" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Удобный поиск</h3>
              <p className="text-white/80 leading-relaxed">Находите экспонаты по теме, периоду и региону.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Halls Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Залы музея</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Каждый зал — отдельное исследовательское пространство с уникальной коллекцией материалов.
              </p>
            </div>

            {/* Hall Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div onClick={() => navigate("/hall/internal")} className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col cursor-pointer hover:bg-white/10 transition-colors">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Зал внутренней культурной политики</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Государственные программы, законодательство и решения, формирующие культурную жизнь внутри страны: поддержка искусства, языковая политика, сохранение наследия.
                  </p>
                </div>
              </div>

              <div onClick={() => navigate("/hall/external")} className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col cursor-pointer hover:bg-white/10 transition-colors">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Зал внешней культурной политики</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Международные культурные обмены, «мягкая сила», дипломатические инициативы и двусторонние соглашения в сфере культуры между государствами.
                  </p>
                </div>
              </div>

              <div onClick={() => navigate("/hall/diaspora")} className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col cursor-pointer hover:bg-white/10 transition-colors">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Зал диаспор</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Культурная жизнь общин за пределами исторической родины: традиции, адаптация, связь с культурой страны происхождения и вклад в принимающее общество.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Начать экскурсию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Title and Description */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать о виртуальном музее: как устроены залы, что в них представлено и как начать изучение коллекции.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Свяжитесь с нами</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Написать нам</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Ваш вопрос или предложение..."
                    />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                    Отправить сообщение
                  </Button>
                </form>
              </div>

              {/* Right Column - Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    По вопросам сотрудничества, предоставления материалов для коллекции, научного партнёрства — напишите нам. Мы ответим в течение рабочего дня.
                  </p>
                </div>

                {/* Profile Card */}
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                      <Icon name="Users" size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Команда музея</h4>
                      <p className="text-gray-600">Кураторы и исследователи</p>
                    </div>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Написать
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Icon name="Landmark" size={24} />
                  <span className="text-xl font-semibold">Виртуальный музей</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Открытое пространство для изучения культурной политики: документы, исследования и артефакты из трёх тематических залов.
                </p>
              </div>

              {/* Halls Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ЗАЛЫ</h3>
                <ul className="space-y-3">
                  {["Внутренняя политика", "Внешняя политика", "Диаспоры", "Все экспонаты"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">О МУЗЕЕ</h3>
                <ul className="space-y-3">
                  {["Миссия", "Команда", "Партнёры", "Научный совет"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">РЕСУРСЫ</h3>
                <ul className="space-y-3">
                  {["Справка", "Контакты", "Вопросы и ответы", "Условия использования"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Новости музея</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2026 Виртуальный музей культурной политики</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index