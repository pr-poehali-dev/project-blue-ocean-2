import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export function FeaturesSection() {
  const features = [
    {
      icon: "Flame",
      title: "Сырьё без затрат",
      description: "Углеводородные газы гидрокрекинга уже производятся на НПЗ — это готовое сырьё для синтеза нанотрубок без дополнительных закупок.",
    },
    {
      icon: "Atom",
      title: "CVD-технология",
      description: "Каталитическое химическое осаждение из газовой фазы — промышленно отработанный метод производства МУНТ с высокой чистотой и воспроизводимостью.",
    },
    {
      icon: "BarChart3",
      title: "Маржинальность х10",
      description: "Стоимость нанотрубок — от 50 до 300 USD/кг при стоимости сырья близкой к нулю. Высокая добавленная стоимость к отходам нефтепереработки.",
    },
    {
      icon: "Filter",
      title: "Адсорбенты нового поколения",
      description: "Адсорбенты на основе МУНТ превосходят активированный уголь по ёмкости в 3–5 раз. Применение: очистка воды, нефтепродуктов, воздуха.",
    },
    {
      icon: "Globe",
      title: "Растущий рынок",
      description: "Мировой рынок углеродных нанотрубок — $5,4 млрд в 2023 г., прогноз роста 18% CAGR до 2030 г. Дефицит предложения в РФ.",
    },
    {
      icon: "Leaf",
      title: "ESG и декарбонизация",
      description: "Утилизация газов вместо сжигания снижает выбросы CO₂. Проект соответствует ESG-стратегиям нефтяных компаний и требованиям регуляторов.",
    },
  ]

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32" id="features">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-balance font-display">
          Почему это работает
        </h2>
        <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
          Технология опирается на уже существующую инфраструктуру НПЗ — минимальные капитальные затраты, максимальная маржа.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors h-full">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon name={feature.icon} className="h-6 w-6 text-primary" fallback="Zap" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-display">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
