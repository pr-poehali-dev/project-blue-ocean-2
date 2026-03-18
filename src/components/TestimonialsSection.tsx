import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "Производство нанотрубок из попутных газов — блестящая идея. Мы превращаем статью затрат в высокомаржинальный продукт. Экономика убедительная.",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "Андрей Сергеев",
    role: "Технический директор НПЗ",
  },
  {
    text: "CVD-технология давно используется в мире. Главная ценность — локализация производства МУНТ в России. Сейчас мы полностью зависим от импорта.",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    name: "Наталья Орлова",
    role: "Директор по закупкам, химхолдинг",
  },
  {
    text: "Адсорбенты на основе нанотрубок показали в наших тестах результат на 40% лучше активированного угля при очистке нефтесодержащих стоков.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Игорь Белов",
    role: "Главный технолог водоочистки",
  },
  {
    text: "IRR выше 35% при таком профиле рисков — очень интересно. Особенно в контексте государственной поддержки новых материалов.",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    name: "Евгений Калинин",
    role: "Управляющий партнёр, инвестфонд",
  },
  {
    text: "Проект соответствует нашей ESG-стратегии: утилизация газов вместо факельного сжигания — это реальное снижение выбросов CO₂.",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    name: "Ирина Соколова",
    role: "Директор по устойчивому развитию",
  },
  {
    text: "Мировой рынок МУНТ дефицитен. Российский производитель с конкурентной ценой получит контракты немедленно — есть запросы уже сейчас.",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    name: "Пётр Малинин",
    role: "Директор по продажам, нанохолдинг",
  },
  {
    text: "Интеграция CVD-установки в существующую инфраструктуру НПЗ технически реализуема. Мы изучили аналоги — проблем с размещением нет.",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    name: "Светлана Фёдорова",
    role: "Руководитель проектного офиса",
  },
  {
    text: "Углеродные нанотрубки — ключевой компонент для наших литий-ионных батарей нового поколения. Российский поставщик закрыл бы критическую зависимость.",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    name: "Алексей Громов",
    role: "CTO, производство накопителей энергии",
  },
  {
    text: "Проект решает сразу три задачи: монетизация отходов, импортозамещение и ESG. Такие проекты получают поддержку на уровне регуляторов.",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    name: "Татьяна Нова",
    role: "Аналитик отраслевого министерства",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export function TestimonialsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-border py-1 px-4 rounded-lg text-sm text-muted-foreground">Экспертные оценки</div>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-5 text-center">
            Что говорят эксперты отрасли
          </h2>
          <p className="text-center mt-5 text-muted-foreground">Мнения специалистов нефтепереработки, инвесторов и потенциальных покупателей продукта.</p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  )
}
