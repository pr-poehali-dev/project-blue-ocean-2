import { ShinyButton } from "@/components/ui/shiny-button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(249 115 22 / 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(249 115 22 / 0.12) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Стратегия диверсификации · 2024–2030
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 font-display">
            НПЗ в сектор углеродных материалов
          </h1>

          <p className="text-lg text-muted-foreground text-balance mb-8 leading-relaxed max-w-xl">
            Производство многостенных углеродных нанотрубок (МУНТ) из газов гидрокрекинга и адсорбентов на их основе — новый высокомаржинальный продукт из отходов нефтепереработки.
          </p>

          <div className="flex flex-wrap gap-4">
            <ShinyButton className="text-base px-8">
              Запросить презентацию
              <ArrowRight className="ml-2 h-4 w-4" />
            </ShinyButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="space-y-4">
            <div className="flex flex-col items-end gap-2">
              <span className="text-sm text-muted-foreground">Проблема НПЗ</span>
              <div className="bg-card border border-border rounded-2xl px-6 py-4 max-w-md shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <p className="text-sm text-foreground">Газы гидрокрекинга сжигаются — это потери выручки и углеродный след</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <span className="text-sm text-muted-foreground">Решение</span>
              <div className="bg-primary text-primary-foreground rounded-2xl px-6 py-4 max-w-md shadow-sm">
                <p className="text-sm">Каталитический CVD-синтез → многостенные нанотрубки → адсорбенты и добавки</p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <span className="text-sm text-muted-foreground">Результат</span>
              <div className="bg-card border border-border rounded-2xl px-6 py-4 max-w-md shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <p className="text-sm text-foreground">Новый высокомаржинальный продукт из уже имеющегося сырья</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <span className="text-sm text-muted-foreground">Рынок</span>
              <div className="bg-card border border-border rounded-2xl px-6 py-4 max-w-md shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <p className="text-sm text-foreground">Мировой рынок нанотрубок растёт на 18% в год — спрос превышает предложение</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
