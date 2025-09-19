import { Button } from "@/components/ui/button";
import { Shield, Award, Clock } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Professional pest control services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center text-white">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Professional
            <span className="block text-accent">Pest Control</span>
            Solutions
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Eliminate ants, rats, and cockroaches with our scientifically proven, 
            professional-grade pest control products. Safe, effective, and long-lasting protection for your home.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-white/80">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6" />
            <span className="font-medium">EPA Approved</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6" />
            <span className="font-medium">Professional Grade</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6" />
            <span className="font-medium">Fast Acting</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button 
            variant="secondary" 
            size="lg" 
            className="px-12 py-4 text-lg font-semibold bg-white text-primary hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Shop Solutions Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-12 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </Button>
        </div>

        {/* Results Banner */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-white/90">Elimination Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">24hr</div>
              <div className="text-white/90">Fast Results</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">6mo</div>
              <div className="text-white/90">Protection</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}