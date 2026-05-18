import { SectionReveal, FadeItem } from '@/components/motion/SectionReveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What is Isinkwa Sethu?',
    answer:
      'Isinkwa Sethu is a digital economic movement for community ownership — uniting township members to build shared manufacturing infrastructure and long-term wealth, not dependency.',
  },
  {
    question: 'How does ownership work?',
    answer:
      'Members contribute collectively and hold a stake in community-owned assets. Profits and decisions are structured to remain within the community governance model.',
  },
  {
    question: 'Why R370?',
    answer:
      'R370 is an accessible, equal entry point — designed so many can participate at the same level, turning small consistent contributions into large-scale capital.',
  },
  {
    question: 'Is this a cooperative?',
    answer:
      'The movement is built on cooperative principles of shared ownership and collective action, with a modern digital platform to mobilize and transparently govern participation.',
  },
  {
    question: 'How will funds be managed?',
    answer:
      'Funds are managed through transparent, community-aligned structures with reporting and governance designed for accountability — details will expand as the platform scales.',
  },
  {
    question: 'How will jobs be created?',
    answer:
      'Manufacturing and distribution operations create direct employment, skills pathways, and supplier opportunities rooted in participating townships.',
  },
]

export default function FAQ() {
  return (
    <SectionReveal className="section-padding bg-black/30">
      <div className="container-narrow max-w-3xl">
        <FadeItem className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">FAQ</p>
          <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl">Questions Answered</h2>
        </FadeItem>

        <FadeItem>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeItem>
      </div>
    </SectionReveal>
  )
}
