import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Что такое многостенные углеродные нанотрубки (МУНТ)?",
    answer:
      "МУНТ — это цилиндрические наноструктуры из углерода диаметром 5–50 нм. Они обладают уникальными свойствами: прочность в 100 раз выше стали при весе в 6 раз меньше, высокая электропроводность, термостойкость до 700°C. Применяются в композитных материалах, аккумуляторах, адсорбентах, электронике.",
  },
  {
    question: "Почему газы гидрокрекинга — идеальное сырьё?",
    answer:
      "Газы гидрокрекинга (этилен, пропилен, метан) уже производятся на НПЗ как побочный продукт. Сейчас их сжигают или используют как топливо по минимальной цене. CVD-синтез нанотрубок требует именно этих углеводородов. Таким образом, НПЗ получает фактически бесплатное сырьё высокой ценности.",
  },
  {
    question: "Каков объём российского и мирового рынка МУНТ?",
    answer:
      "Мировой рынок углеродных нанотрубок составлял $5,4 млрд в 2023 году и растёт на 18% ежегодно. Российский рынок практически полностью зависит от импорта — отечественных крупнотоннажных производителей нет. Это создаёт уникальное окно возможностей для импортозамещения.",
  },
  {
    question: "Какие риски у проекта?",
    answer:
      "Основные риски: технологический (решается отработкой CVD-процесса на пилоте), рыночный (решается pre-sales соглашениями с покупателями до запуска), регуляторный (нанотрубки — не новый опасный материал, существующая нормативная база применима). Геополитический риск — скорее преимущество: санкции ограничивают импорт, открывая рынок.",
  },
  {
    question: "Как реализуется сотрудничество с НПЗ?",
    answer:
      "Возможны три модели: (1) НПЗ как технологический партнёр — предоставляет сырьё и площадку, получает долю в прибыли; (2) СП — совместное предприятие с долевым участием; (3) Лицензирование — НПЗ покупает технологию и разворачивает производство самостоятельно. Предпочтительная модель определяется в переговорах.",
  },
  {
    question: "Есть ли государственная поддержка таких проектов?",
    answer:
      "Да. Проект подпадает под несколько программ: Фонд развития промышленности (льготные займы до 500 млн руб.), программы импортозамещения Минпромторга, субсидии на НИОКР через РНФ и РФФИ, налоговые льготы для инновационных производств. Готовы сопровождать процесс получения господдержки.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto mb-12"
        >
          <div className="flex justify-center">
            <div className="border border-border py-1 px-4 rounded-lg text-sm text-muted-foreground">FAQ</div>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-5 text-center">
            Часто задаваемые вопросы
          </h2>
          <p className="text-center mt-5 text-muted-foreground">Ответы на ключевые вопросы о технологии, рынке и бизнес-модели.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-display text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
