import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Rocket, 
  Globe, 
  Zap, 
  CheckCircle, 
  ArrowRight 
} from "lucide-react"

const LandingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100 
      } 
    }
  }

  const features = [
    {
      icon: Rocket,
      title: "Lightning Fast",
      description: "Blazing fast performance with modern tech stack"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Scalable architecture for worldwide deployment"
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Zero-configuration, ready to use out of the box"
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-16 lg:py-24 text-center"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-6 text-primary"
        >
          Build Amazing Web Applications
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          A powerful React starter template with modern UI components and seamless developer experience
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex justify-center space-x-4"
        >
          <Button size="lg" className="group">
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="bg-secondary/10 p-6 rounded-lg text-center hover:shadow-lg transition-all"
          >
            <feature.icon className="mx-auto mb-4 size-12 text-primary" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-16 text-center bg-accent/10"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to Accelerate Your Development?
        </motion.h2>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Button size="lg" className="group">
            Start Your Project
            <CheckCircle className="ml-2 group-hover:scale-110 transition-transform" />
          </Button>
          <Button variant="outline" size="lg">
            View Documentation
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default LandingPage