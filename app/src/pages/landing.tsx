import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Rocket, 
  Globe, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Code,
  Database,
  Shield,
  Users,
  Star
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel"
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Toggle } from "@/components/ui/toggle"

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState<'monthly' | 'yearly'>('monthly')
  const [selectedFeature, setSelectedFeature] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 } 
    }
  }

  const features = [
    {
      icon: Code,
      title: "Modern Architecture",
      description: "Cutting-edge React setup with TypeScript and Vite",
      details: [
        "Modular component design",
        "Type-safe development",
        "Fast compilation"
      ]
    },
    {
      icon: Database,
      title: "State Management",
      description: "Efficient global state handling",
      details: [
        "Zustand integration",
        "Simplified data flow",
        "Performance optimized"
      ]
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Built-in security features",
      details: [
        "Input validation",
        "Protected routes",
        "Secure authentication"
      ]
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Lead Developer",
      quote: "This template revolutionized our development workflow!",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      role: "Startup Founder",
      quote: "Incredible speed and flexibility. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Chen",
      role: "Product Manager",
      quote: "The most comprehensive React starter I've ever used.",
      rating: 5
    }
  ]

  const pricingPlans = [
    {
      name: "Starter",
      monthlyPrice: 9,
      yearlyPrice: 99,
      features: [
        "Basic Components",
        "Community Support",
        "Standard Integrations"
      ]
    },
    {
      name: "Pro",
      monthlyPrice: 29,
      yearlyPrice: 299,
      features: [
        "Advanced Components",
        "Priority Support",
        "Custom Integrations"
      ]
    },
    {
      name: "Enterprise",
      monthlyPrice: 99,
      yearlyPrice: 999,
      features: [
        "Full Access",
        "24/7 Support",
        "Dedicated Consultant"
      ]
    }
  ]

  const faqs = [
    {
      question: "What technologies are included?",
      answer: "Our template includes React, TypeScript, Vite, Tailwind CSS, Zustand, and many more cutting-edge technologies."
    },
    {
      question: "Is this suitable for beginners?",
      answer: "Absolutely! We provide comprehensive documentation and clean, well-structured code that's easy to understand."
    },
    {
      question: "Can I use this for commercial projects?",
      answer: "Yes, our template comes with a permissive MIT license, allowing use in both personal and commercial projects."
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Previous Hero Section (from previous implementation) */}
      
      {/* Interactive Feature Showcase */}
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Explore Our Features</h2>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedFeature(index)}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selectedFeature === index 
                    ? 'bg-primary/10 border-primary border' 
                    : 'bg-secondary/5 hover:bg-secondary/10'
                }`}
              >
                <div className="flex items-center">
                  <feature.icon className="mr-4 text-primary" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                {selectedFeature === index && (
                  <motion.ul 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="pl-12 mt-4 text-muted-foreground list-disc"
                  >
                    {feature.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </motion.ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-secondary/10 p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-4">
            {features[selectedFeature].title}
          </h3>
          <p className="text-muted-foreground">
            {features[selectedFeature].description}
          </p>
        </motion.div>
      </div>

      {/* Testimonial Carousel */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>
        <Carousel>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="flex justify-center">
                <div className="max-w-xl text-center">
                  <p className="text-xl italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Pricing Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Flexible Pricing</h2>
          <div className="flex justify-center space-x-4 mb-8">
            <Toggle
              pressed={activeTab === 'monthly'}
              onPressedChange={() => setActiveTab('monthly')}
            >
              Monthly
            </Toggle>
            <Toggle
              pressed={activeTab === 'yearly'}
              onPressedChange={() => setActiveTab('yearly')}
            >
              Yearly
              <Badge variant="secondary" className="ml-2">Save 15%</Badge>
            </Toggle>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-secondary/10 p-6 rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">
                ${activeTab === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                <span className="text-sm block text-muted-foreground">
                  {activeTab === 'monthly' ? '/month' : '/year'}
                </span>
              </p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center">
                    <CheckCircle className="mr-2 text-primary" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full">Choose Plan</Button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default LandingPage