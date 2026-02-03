import { useLanguage } from '@/app/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';

export function FAQSection() {
  const { t } = useLanguage();

  const faqs = [
    { question: t.faq.question1, answer: t.faq.answer1 },
    { question: t.faq.question2, answer: t.faq.answer2 },
    { question: t.faq.question3, answer: t.faq.answer3 },
    { question: t.faq.question4, answer: t.faq.answer4 },
  ];

  return (
    <section
      id="faq"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            {t.faq.title}
          </h2>
        </div>

        {/* ACCORDION */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200 last:border-0"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-6">
                  <span className="font-semibold sm:font-bold text-base sm:text-lg text-gray-900 pr-3 sm:pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>

                <AccordionContent className="text-sm sm:text-base text-gray-600 leading-relaxed pb-4 sm:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}
