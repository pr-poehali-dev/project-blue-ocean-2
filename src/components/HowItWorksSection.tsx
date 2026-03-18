import { motion } from "framer-motion"
import { TrendingUp, Zap, Activity, CheckCircle2, ArrowUpRight, BarChart3, FlaskConical } from "lucide-react"
import { Card } from "@/components/ui/card"

export function HowItWorksSection() {
  const steps = [
    {
      icon: FlaskConical,
      title: "Синтез нанотрубок",
      description:
        "Газы гидрокрекинга (C₂H₄, C₃H₆, CH₄) подаются в CVD-реактор с металлическим катализатором (Fe/Co/Ni). При 600–900°C происходит каталитический рост многостенных нанотрубок.",
      visual: (
        <div className="h-[280px] flex items-center justify-center">
          <Card className="w-full p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <FlaskConical className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">CVD-реактор</p>
                    <p className="text-sm text-muted-foreground">Температура 750°C</p>
                  </div>
                </div>
                <p className="font-bold text-lg text-primary">МУНТ</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <span className="text-sm">Сырьё: газы гидрокрекинга</span>
                  <span className="text-sm font-medium text-green-600">~0 ₽/т</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <span className="text-sm">Выход МУНТ</span>
                  <span className="text-sm font-medium">до 80% масс.</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <span className="text-sm">Диаметр нанотрубок</span>
                  <span className="text-sm font-medium">8–15 нм</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
    {
      icon: TrendingUp,
      title: "Производство адсорбентов",
      description:
        "Нанотрубки функционализируются и формуются в гранулированные адсорбенты. Удельная поверхность — до 600 м²/г. Применение: нефтехимия, водоочистка, фармацевтика, экология.",
      visual: (
        <div className="h-[280px] flex items-center justify-center">
          <Card className="w-full p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20">
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold">Характеристики адсорбента</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-green-500">
                  <Activity className="w-3 h-3" />
                  <span>Превосходит уголь</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium">Поверхность: 400–600 м²/г</p>
                    <p className="text-xs text-muted-foreground">vs 300 м²/г у активированного угля</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium">Термостойкость: до 500°C</p>
                    <p className="text-xs text-muted-foreground">Регенерация без потери свойств</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium">Срок службы: 5+ лет</p>
                    <p className="text-xs text-muted-foreground">Многократная регенерация</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-primary/10">
                <p className="text-xs text-muted-foreground">
                  Ёмкость по H₂S: <span className="text-primary font-semibold">в 3–5 раз выше</span> аналогов
                </p>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
    {
      icon: Zap,
      title: "Экономика проекта",
      description:
        "При мощности 100 т/год МУНТ выручка составляет $10–30 млн/год. Срок окупаемости — 3–5 лет. Масштабирование возможно на любом НПЗ с гидрокрекингом.",
      visual: (
        <div className="h-[280px] flex items-center justify-center">
          <Card className="w-full p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20">
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold">Финансовые метрики</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-green-500">
                  <ArrowUpRight className="w-3 h-3" />
                  <span>Проект 2025</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Выручка (100 т/год)</span>
                    <span className="font-semibold">$10–30 млн</span>
                  </div>
                  <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                    <div className="h-full w-[80%] bg-primary rounded-full" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Маржинальность EBITDA</span>
                    <span className="font-semibold">55–70%</span>
                  </div>
                  <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                    <div className="h-full w-[65%] bg-primary rounded-full" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Окупаемость</span>
                    <span className="font-semibold">3–5 лет</span>
                  </div>
                  <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                    <div className="h-full w-[90%] bg-primary rounded-full" />
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-primary/10 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">CAPEX</p>
                  <p className="text-lg font-bold text-primary">$5–15 млн</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">IRR</p>
                  <p className="text-lg font-bold text-primary">35–50%</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Как работает технология</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            От газов гидрокрекинга — к нанотрубкам и адсорбентам за три технологических шага
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="mb-6">{step.visual}</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Шаг {index + 1}</span>
              </div>
              <h3 className="text-xl font-bold font-display mb-2">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
