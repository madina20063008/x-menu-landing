import { useLanguage } from '@/app/contexts/LanguageContext';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t.testimonials.testimonial1Name,
      restaurant: t.testimonials.testimonial1Restaurant,
      text: t.testimonials.testimonial1Text,
      image: 'https://images.unsplash.com/photo-1701878198293-d1f3641efdb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGNoZWZ8ZW58MXx8fHwxNzcwMDM3OTQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: t.testimonials.testimonial2Name,
      restaurant: t.testimonials.testimonial2Restaurant,
      text: t.testimonials.testimonial2Text,
      image: 'https://images.unsplash.com/photo-1657994790860-86e6609d2e37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjByZXN0YXVyYW50JTIwb3duZXJ8ZW58MXx8fHwxNzcwMDM3OTQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: t.testimonials.testimonial3Name,
      restaurant: t.testimonials.testimonial3Restaurant,
      text: t.testimonials.testimonial3Text,
      image: 'https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwb3duZXJ8ZW58MXx8fHwxNzcwMDM3OTQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.restaurant}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
