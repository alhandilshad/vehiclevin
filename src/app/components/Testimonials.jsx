"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "James Oliver",
    role: "Marketing Director",
    image: "/testimonial4.jpeg",
    quote:
      "Working with this team has been an absolute game-changer for our business. Their attention to detail and creative solutions have helped us achieve remarkable results. I couldn't be happier with their services!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO, Tech Innovations",
    image: "/testimonial2.jpg",
    quote:
      "The level of professionalism and expertise they bring to the table is unmatched. They've consistently delivered beyond our expectations and have become an invaluable partner in our growth journey.",
    rating: 5,
  },
  {
    id: 3,
    name: "Keith Williams",
    role: "Creative Director",
    image: "/testimonial3.jpg",
    quote:
      "Their creative approach and dedication to excellence have transformed our brand presence. The team's ability to understand and execute our vision has been exceptional.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-100 py-20 px-4" id="testimonials">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-purple-600 font-medium mb-4">Testimonials</h2>
          <h3 className="text-4xl font-[montserratSemiBold] text-gray-900">What Our Clients Say</h3>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                    <div className="flex flex-col items-center text-center">
                      {/* Rating */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-gray-700 text-lg mb-8">"{testimonial.quote}"</blockquote>

                      {/* Author */}
                      <div className="flex flex-col items-center">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover mb-4"
                        />
                        <div className="text-center">
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-purple-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#22024E] p-3 rounded-full shadow-lg transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#22024E] p-3 rounded-full shadow-lg transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? "bg-purple-600" : "bg-purple-200"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}