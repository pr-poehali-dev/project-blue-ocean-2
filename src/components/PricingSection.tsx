import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { ShinyButton } from "@/components/ui/shiny-button"

const pricingTiers = [
  {
    name: "Пилот",
    price: "CAPEX $5–8 млн",
    period: "",
    description: "Пилотная установка мощностью 10–20 т/год МУНТ на площадке НПЗ-партнёра",
    features: [
      "CVD-реактор 10–20 т/год",
      "Отработка параметров синтеза",
      "Сертификация продукта",
      "Наработка коммерческих образцов",
      "Формирование клиентской базы",
      "Срок реализации: 18–24 мес",
    ],
    cta: "Обсудить пилот",
    popular: false,
  },
  {
    name: "Полный запуск",
    price: "CAPEX $12–20 млн",
    period: "",
    description: "Промышленная установка 100 т/год МУНТ + линия производства адсорбентов",
    features: [
      "CVD-мощность 100 т/год",
      "Линия производства адсорбентов",
      "Выручка $10–30 млн/год",
      "EBITDA-маржа 55–70%",
      "Окупаемость 3–5 лет",
      "IRR 35–50%",
      "Поддержка сбыта и сертификации",
      "Технологическое сопровождение",
    ],
    cta: "Запросить бизнес-план",
    popular: true,
  },
  {
    name: "Масштабирование",
    price: "По договору",
    period: "",
    description: "Тиражирование технологии на сети НПЗ, экспортная программа, лицензирование",
    features: [
      "Мощность 500+ т/год",
      "Сеть заводов-партнёров",
      "Экспорт в страны БРИКС",
      "Лицензирование технологии",
      "СП с нефтяными компаниями",
      "Листинг на бирже",
      "Стратегическое партнёрство",
      "Государственные субсидии",
      "Персональная команда сопровождения",
    ],
    cta: "Стратегический разговор",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Этапы и инвестиции</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Три горизонта реализации — от пилотной установки до промышленного масштабирования.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`relative p-8 h-full flex flex-col ${
                  tier.popular ? "border-primary shadow-lg shadow-primary/20" : "border-border"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Рекомендуемый
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">{tier.price}</span>
                    {tier.period && <span className="text-muted-foreground ml-2">{tier.period}</span>}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <ShinyButton className="w-full justify-center">{tier.cta}</ShinyButton>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
