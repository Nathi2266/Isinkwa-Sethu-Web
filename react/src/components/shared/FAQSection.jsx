import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'
import SectionHeader from '@/components/primitives/SectionHeader'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqs } from '@/config/site'

export default function FAQSection({ items = faqs, title = 'Questions Answered' }) {
  return (
    <SectionReveal className="section-padding-lg bg-section-muted">
      <div className="container-narrow max-w-3xl">
        <SectionHeader eyebrow="FAQ" title={title} />
        <FadeItem>
          <Accordion type="single" collapsible className="w-full space-y-2">
            {items.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="glass rounded-xl border-gold/10 px-4"
              >
                <AccordionTrigger className="text-left hover:text-icon-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-theme-muted">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeItem>
      </div>
    </SectionReveal>
  )
}
