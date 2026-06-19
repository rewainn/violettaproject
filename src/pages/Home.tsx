import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight, Star, Heart, Compass, History, Sun, BookOpen, ChevronLeft, ChevronRight, Instagram, Award, UserRoundCheck, TrendingUp, GraduationCap, Gem } from "lucide-react";
import { useRef } from "react";
import { ContactSection } from "../components/ContactSection";

export function Home() {
  const navigate = useNavigate();
  const reviewsScrollRef = useRef<HTMLDivElement>(null);

  const scrollReviews = (direction: 'left' | 'right') => {
    if (reviewsScrollRef.current) {
      const scrollAmount = window.innerWidth > 640 ? 400 : window.innerWidth * 0.85;
      reviewsScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const openContactModal = () => {
    navigate({ hash: "#contact" });
  };

  const serviceCards = [
    {
      title: "Матрица года",
      price: "1 500 р",
      icon: <History className="w-6 h-6" />,
      description: "Личный прогноз на год по дате рождения.",
      points: [
        "Какие возможности принесёт год",
        "Где ждать трудностей",
        "На чём лучше сосредоточиться",
        "Какие уроки предстоит пройти"
      ]
    },
    {
      title: "Матрица совместимости",
      price: "2 500 р",
      icon: <Heart className="w-6 h-6" />,
      description: "Разбор энергии пары и точек взаимодействия.",
      points: [
        "Личные отношения",
        "Общая энергия пары",
        "Задачи пары",
        "Ваши финансовые аспекты",
        "Конфликтные точки",
        "Влияние на детей"
      ]
    },
    {
      title: "Базовый разбор",
      price: "2 000 р",
      icon: <Star className="w-6 h-6" />,
      description: "Ваша уникальность и способ проявить её миру.",
      points: [
        "Кармический хвост: слабые стороны и задачи прошлого, которые нужно проработать",
        "Портрет личности: как вас видят при первой встрече",
        "Таланты",
        "Профессиональные качества: сферы, где вы можете добиться успеха",
        "Подходящая ниша: бизнес, творчество или обучение",
        "Центральная энергия: код личной силы и черта, помогающая добиваться целей"
      ]
    },
    {
      title: "Стандартный разбор",
      price: "3 000 р",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Базовые энергии, отношения и предназначение.",
      points: [
        "5 базовых энергий",
        "Зона отношений",
        "Как вы проявляетесь в отношениях",
        "Что делает вас счастливыми в отношениях",
        "Ваши задачи, потребности и ошибки в отношениях",
        "Идеальный партнёр: черты характера, возможная дата рождения или место встречи",
        "Предназначение: личное, социальное, духовное"
      ]
    },
    {
      title: "Полный разбор (премиум)",
      price: "4 500 р",
      icon: <Compass className="w-6 h-6" />,
      description: "Премиум-формат с родовыми задачами и практиками.",
      points: [
        "Стандартный разбор +",
        "Карма рода: задачи по роду мамы и отца",
        "Негативные сценарии рода и модели поведения, которые вам передались",
        "Как вывести родовые сценарии в плюс",
        "Сила рода",
        "Детско-родительские отношения: чему вы учите родителей и детей",
        "Чему родители и дети должны научить вас",
        "Практики и упражнения для выведения энергии в плюс как личный бонус"
      ]
    }
  ];

  const whyChooseItems = [
    {
      title: "Экспертный подход",
      text: "Опыт и глубокие знания в области Матрицы Судьбы.",
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "Индивидуальные консультации",
      text: "Персонализированные рекомендации с учётом вашей уникальности.",
      icon: <UserRoundCheck className="h-5 w-5" />
    },
    {
      title: "Доказанные результаты",
      text: "Клиенты отмечают значительные изменения в жизни после работы со мной.",
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      title: "Поддержка и обучение",
      text: "Образовательные материалы и долгосрочное сопровождение на пути к самосовершенствованию.",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      title: "Уникальная философия",
      text: "Интеграция различных методов для комплексного развития.",
      icon: <Gem className="h-5 w-5" />
    }
  ];

  return (
    <div className="w-full relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-gold-200/20 rounded-full blur-[70px] mix-blend-multiply" />
        <div className="absolute top-[40%] -left-32 w-[420px] h-[420px] bg-pine-200/15 rounded-full blur-[70px] mix-blend-multiply" />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto max-w-7xl px-4 pt-8 pb-10 min-h-[calc(100svh+12rem)] md:min-h-[calc(100svh-5rem)] md:py-0 md:flex md:items-center relative">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col space-y-5 md:space-y-8 relative z-10 md:pr-8 lg:pr-16"
          >
            <h1 className="text-[3.15rem] leading-[0.96] pb-2 mb-2 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-pine-900 select-none mt-1 md:mt-0">
              Система <br /> самопознания <br />
              <span className="text-gold-500 italic relative inline-block">
                Матрица Судьбы
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="absolute -bottom-2 left-0 h-1 bg-gold-300 rounded-full"
                />
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl font-sans text-pine-800 leading-relaxed font-light mt-1 max-w-lg">
              Меня зовут Виолетта — я эксперт в системе самопознания Матрица Судьбы. Помогаю раскрыть твои внутренние потенциалы и найти гармонию в жизни.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="pt-2 md:pt-4 pb-1 md:pb-0"
            >
              <Link to="/calculator" className="group inline-flex items-center justify-center px-10 py-5 bg-pine-900 text-sand-50 rounded-full tracking-widest uppercase text-sm hover:bg-pine-800 transition-all duration-300 shadow-xl shadow-pine-900/20 hover:-translate-y-1 hover:shadow-2xl w-full md:w-auto">
                Рассчитать матрицу
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative hidden md:block h-[650px] w-full md:ml-6 lg:ml-10"
          >
            <div className="absolute -inset-3 md:-inset-6 rounded-[220px] border border-gold-400/20"></div>
            <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-12 md:w-16 h-12 md:h-16 border-t border-l border-gold-400/50 rounded-tl-[24px] md:rounded-tl-[28px]" />
            <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-12 md:w-16 h-12 md:h-16 border-b border-r border-gold-400/50 rounded-br-[24px] md:rounded-br-[28px]" />
            <div className="absolute top-4 right-4 md:top-8 md:right-8 w-12 md:w-20 h-12 md:h-20 rounded-full border border-gold-400/25" />
            <div className="absolute bottom-6 left-4 md:bottom-10 md:left-6 w-10 md:w-12 h-10 md:h-12 rounded-full border border-pine-900/10 bg-sand-50/60 backdrop-blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-400/20 to-transparent translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 rounded-[200px] border border-gold-400/30 backdrop-blur-xs"></div>
            <motion.img 
              src="/violetta.jpg" 
              alt="Виолетта"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&q=80&w=800";
              }}
              className="absolute inset-0 w-full h-full object-cover object-top rounded-[200px] shadow-2xl"
            />
          </motion.div>
        </div>

        <div className="md:hidden mt-28 w-full flex justify-center">
          <div className="relative w-full max-w-[360px]">
            <div className="absolute -inset-3 rounded-[200px] border border-gold-400/20" />
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-400/20 to-transparent translate-x-4 translate-y-4 rounded-[200px] border border-gold-400/30" />
            <img
              src="/violetta.jpg"
              alt="Виолетта"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&q=80&w=800";
              }}
              className="relative z-10 w-full h-auto object-contain rounded-[200px] block"
            />
          </div>
        </div>
      </section>

      {/* About Matrix Section */}
      <section id="about" className="bg-pine-900 text-sand-50 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#CDA877 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <Sparkles className="w-10 h-10 text-gold-400 mb-8 opacity-80" />
            <h2 className="text-3xl md:text-5xl font-serif mb-12 italic text-gold-400">
              Что такое Матрица Судьбы?
            </h2>
            <div className="space-y-8 text-lg font-light leading-relaxed text-sand-200">
              <p>
                Матрица Судьбы — это концепция, которая помогает людям разобраться в своих внутренних конфликтах и понять, почему их жизнь не соответствует их желаниям. Этот инструмент позволяет выявить сильные стороны личности и осознать духовные задачи, которые стоят перед человеком.
              </p>
              <div className="w-full">
                <div className="max-w-3xl mx-auto mb-6 px-4 text-center">
                  <h3 className="inline-block text-lg sm:text-xl md:text-2xl font-serif text-gold-400 leading-tight text-balance">
                    Матрица Совместимости Раскроет Вам
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 text-left items-stretch">
                  {[
                    "Личные отношения",
                    "Общая энергия пары",
                    "Задачи пары",
                    "Ваши финансовые аспекты",
                    "Конфликтные точки",
                    "Влияние на детей"
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="relative overflow-hidden rounded-[1.35rem] border border-gold-400/20 bg-sand-50/8 px-4 py-4 shadow-sm min-h-[72px] md:min-h-[78px] flex items-center"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-gold-400/10 to-transparent opacity-80 pointer-events-none" />
                      <div className="relative z-10 flex w-full items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-400/35 bg-pine-900/35 text-[11px] font-semibold leading-none tabular-nums text-gold-200">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <p className="text-sm md:text-base leading-snug md:leading-tight text-sand-100/95">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="py-8 my-10 border-y border-gold-500/20">
                <p className="text-3xl md:text-4xl font-serif text-white">
                  «Почему я не живу так, как мечтаю?»
                </p>
              </div>
              <p>
                Каждый из нас хотя бы раз задавался этим вопросом. Важно понимать, что это не Астрологический гороскоп и не научный метод, это не гадание — а глубокая система самопознания.
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
      </section>

      {/* Why Choose Section */}
      <section id="why-choose" className="relative overflow-hidden bg-[#f6f0e4] py-20 md:py-32 text-pine-900">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'radial-gradient(#CDA877 1px, transparent 1px)', backgroundSize: '28px 28px' }}></div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-14 md:mb-20 max-w-4xl text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-300/35 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">
              <Sparkles className="h-4 w-4" />
              Осознанный подход
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-pine-900 leading-tight">
              Почему стоит выбрать
              <br />
              <span className="text-5xl md:text-6xl lg:text-7xl text-gold-600 italic">
                Меня?
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pine-800/70 font-light">
              Запишитесь на консультацию и начните свой путь к пониманию и изменениям уже сегодня.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12 lg:items-stretch">
            {whyChooseItems.map((item, i) => (
              <motion.article
                key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.32, ease: "easeOut" }}
                className={[
                  "group relative overflow-hidden rounded-[1.75rem] border border-pine-900/10 bg-white p-6 md:p-7 backdrop-blur-sm transition-colors hover:border-gold-300/35 hover:bg-white/95 hover:shadow-md",
                  i === 0 ? "lg:col-span-5 lg:min-h-[250px]" : "",
                  i === 1 ? "lg:col-span-4 lg:min-h-[220px]" : "",
                  i === 2 ? "lg:col-span-3 lg:min-h-[250px]" : "",
                  i === 3 ? "lg:col-span-4 lg:min-h-[220px]" : "",
                  i === 4 ? "md:col-span-2 lg:col-span-8 lg:min-h-[220px]" : ""
                ].join(" ")}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-100/80 to-transparent opacity-80" />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-7 flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-300/35 bg-sand-50 text-gold-700">
                      {item.icon}
                    </div>
                    <span className="font-serif text-4xl text-pine-900/10 select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <h3 className={`font-serif text-pine-900 leading-tight ${i === 0 ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"}`}>
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm md:text-base leading-relaxed text-pine-800/70 font-light">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <div className="relative overflow-hidden bg-[#f6f0e4] px-4 py-8 md:py-10">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#CDA877 1px, transparent 1px)', backgroundSize: '28px 28px' }}></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-400/45 to-gold-400/25" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold-400/45 to-gold-400/25" />
          </div>
        </div>
      </div>

      {/* Services List */}
      <section id="services" className="relative overflow-hidden py-20 md:py-32 container mx-auto max-w-7xl px-4">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-200/20 rounded-full blur-[80px] pointer-events-none"></div>
        
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center justify-center rounded-full border border-gold-300/35 bg-gold-50 px-4 py-2 text-xs uppercase tracking-[0.2em] font-medium text-gold-700 shadow-sm"
          >
            Перечень разборов
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-pine-900 mb-6"
          >
            Услуги и Разборы
          </motion.h2>
          <p className="text-pine-800/70 font-light max-w-2xl leading-relaxed">
            Выберите формат, который сейчас ближе вашему запросу: от прогноза на год до глубокого премиум-разбора.
          </p>
          <div className="w-24 h-px bg-gold-500/50 mt-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-7 relative z-10">
          {serviceCards.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              className={`group relative overflow-hidden rounded-[1.75rem] border border-pine-900/10 bg-white/85 p-6 md:p-7 shadow-sm transition-colors duration-300 hover:border-gold-400/70 hover:shadow-lg ${i === 4 ? "lg:col-span-2" : ""}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-100/40 via-transparent to-pine-100/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-300/70 bg-gold-50 text-gold-700 [&_svg]:h-5 [&_svg]:w-5">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-[1.7rem] font-serif text-pine-900 leading-tight">{service.title}</h3>
                      <p className="mt-2 text-xs md:text-sm leading-snug text-pine-800/60 font-light max-w-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 rounded-full border border-gold-400/55 bg-pine-900 px-5 py-2.5 text-lg font-black tracking-wide text-sand-50 shadow-md shadow-pine-900/15">
                    {service.price}
                  </div>
                </div>

                <ul className={`mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 ${i === 4 ? "lg:grid-cols-3" : ""}`}>
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 rounded-2xl border border-pine-900/5 bg-sand-50/80 px-4 py-3 text-sm leading-snug text-pine-800">
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  <div className="flex flex-col gap-4 border-t border-pine-900/5 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs md:text-sm text-pine-800/60 font-light">
                    Формат разбора: голосовые сообщения или PDF на ваш выбор.
                  </p>
                  <motion.button
                    type="button"
                    onClick={openContactModal}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-pine-900 bg-pine-900 px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-sand-50 shadow-lg shadow-pine-900/15 transition-all hover:-translate-y-0.5 hover:border-pine-800 hover:bg-pine-800 hover:shadow-xl"
                  >
                    Записаться <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Reviews Dynamic Block */}
      <div className="relative h-6 md:h-8 overflow-hidden bg-[linear-gradient(180deg,rgba(244,239,227,0.72),rgba(244,239,227,0.98))]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/15 to-transparent" />
      </div>

      <section id="reviews" className="relative overflow-hidden bg-[#f4efe3] py-20 md:py-32">
        <div className="absolute inset-0 opacity-14" style={{ backgroundImage: 'radial-gradient(#CDA877 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute inset-x-0 top-0 h-10 bg-[linear-gradient(180deg,rgba(244,239,227,0.78),rgba(244,239,227,0))]" />
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-pine-900 mb-6 inline-flex items-center justify-center gap-4 w-full"
          >
            <span>Отзывы</span>
            <Star className="w-7 h-7 md:w-8 md:h-8 text-gold-500 translate-y-1 md:translate-y-2" />
          </motion.h2>
          <div className="w-16 h-px bg-gold-400 mx-auto mb-6"></div>
          <p className="text-pine-800/60 font-light max-w-2xl mx-auto">
            Сотни девушек уже узнали свое предназначение и изменили жизнь к лучшему благодаря разбору матрицы судьбы.
          </p>
        </div>
        
        <div className="relative z-10 w-full group/slider">
          <div 
            ref={reviewsScrollRef}
            className="flex overflow-x-auto gap-6 sm:gap-8 pb-8 px-4 sm:px-12 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {[
              { tag: "@go.aarr", text: "А @violetta_gutsan сделала мне персональный разбор матрицы судьбы 😍 Столько всего нового узнала о себе 🥰" },
              { tag: "@alen_glam", text: "Мой личный год теперь под контролем! Хочу от души поблагодарить Виолетту за потрясающий нумерологический прогноз на мой следующий период. Это не просто цифры, а настоящее руководство к действию! Я получила ответы на многие вопросы..." },
              { tag: "@masha_k", text: "Если вы, как и я любите разобраться в себе, узнать больше информации о себе... welcome к @violetta_gutsan Она профессионал своего дела. Все подробно и деликатно расскажет..." },
              { tag: "@maxi.beatz", text: "Виолетта, спасибо за разбор — было очень интересно и точно. Ты не просто рассказала про цифры, а как будто поняла, что у меня внутри..." },
              { tag: "@gulyagazlevaa", text: "Я почитала, вообще описано все что на самом деле... Я очень хотела обучать но не могу собрать себя в руки..." },
              { tag: "@olechka_romanovna", text: "Блин это так здорово, я тебя так понимаю. Главное не останавливаться на этом ты большая умничка... Обучение еще не закончилось, а уже отзывы такие" },
              { tag: "клиент", text: "Привет Виолетт прочитала наконец то спокойно с этой работой некогда было... Ну слушай очень интересно, некоторые аспекты похожи, есть пару моментов где мимо, но все же больше моментов совпадают" },
              { tag: "клиент", text: "Блиин, как же это интересно Особенно последнее, фраза жизни 'все будет хорошо' Это же мой принцип в жизни и на любую ситуацию Так и живём Очень круто, что рассказываешь + и -" },
              { tag: "клиент", text: "У меня брат очень скептически относится к таким вещам и особо в это не верит. Но прочитав этот разбор многое для себя увидел Говорит есть много совпадений" },
              { tag: "клиент", text: "Приветики Дорогая , ну это точно все обо мне реально Я слушала как будто погрузилась в свою жизнь, прям вообще интересно, спасибо большое" },
              { tag: "клиент", text: "Вы удивительная Солнечная , с вами пообщавшись очень тепло" },
              { tag: "клиент", text: "Спасибо тебе большое еще раз ! Очень все понравилось! Было комфортно и интересно! Ты большая умничка!!! Удачи и успехов тебе..." },
              { tag: "клиент", text: "В сегодняшнем разборе всё верно, то что в центре внимания мне нужно быть, так и есть, даже работа такая, соответствует)" }
            ].map((review, idx) => (
              <div 
                key={idx} 
                className="flex-none w-[85vw] sm:w-[400px] snap-center shrink-0 border border-pine-900/10 bg-white hover:border-gold-300 transition-colors rounded-[2rem] p-8 md:p-10 relative backdrop-blur-sm"
              >
                <div className="text-gold-300 text-6xl leading-[0] font-serif absolute -top-4 left-6 opacity-30">"</div>
                <div className="flex flex-col h-full space-y-6">
                  {/* Client Info at Top */}
                  <div className="flex items-center space-x-4 border-b border-pine-900/5 pb-6">
                    <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 shrink-0">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-pine-900 font-medium text-sm capitalize">
                        {review.tag === "клиент" ? "Клиент" : review.tag}
                      </div>
                    </div>
                  </div>
                  {/* Review Text Below */}
                  <p className="text-pine-800/80 italic font-light relative z-10 text-sm md:text-base leading-relaxed flex-grow">
                    {review.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slider Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-4 lg:hidden">
            <button onClick={() => scrollReviews('left')} className="w-12 h-12 rounded-full bg-white border border-pine-900/10 flex items-center justify-center text-pine-900 hover:bg-gold-50 hover:text-gold-600 transition-colors shadow-sm">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={() => scrollReviews('right')} className="w-12 h-12 rounded-full bg-white border border-pine-900/10 flex items-center justify-center text-pine-900 hover:bg-gold-50 hover:text-gold-600 transition-colors shadow-sm">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          <button onClick={() => scrollReviews('left')} className="hidden lg:flex absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 w-14 h-14 rounded-full bg-white border border-pine-900/10 items-center justify-center text-pine-900 hover:bg-gold-50 hover:text-gold-600 transition-colors shadow-lg opacity-0 group-hover/slider:opacity-100 z-20">
            <ChevronLeft className="w-8 h-8 -ml-1" />
          </button>
          <button onClick={() => scrollReviews('right')} className="hidden lg:flex absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 w-14 h-14 rounded-full bg-white border border-pine-900/10 items-center justify-center text-pine-900 hover:bg-gold-50 hover:text-gold-600 transition-colors shadow-lg opacity-0 group-hover/slider:opacity-100 z-20">
            <ChevronRight className="w-8 h-8 -mr-1" />
          </button>
        </div>
        </div>
      </section>

      <ContactSection />

    </div>
  );
}
