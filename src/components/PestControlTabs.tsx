import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Zap, Clock } from "lucide-react";
import antControlImage from "@/assets/ant-control.jpg";
import ratControlImage from "@/assets/rat-control.jpg";
import cockroachControlImage from "@/assets/cockroach-control.jpg";

type PestType = 'ants' | 'rats' | 'cockroaches';

interface PestData {
  title: string;
  subtitle: string;
  image: string;
  features: string[];
  benefits: string[];
  cta: string;
}

const pestData: Record<PestType, PestData> = {
  ants: {
    title: "AntGuard Pro",
    subtitle: "Advanced Ant Control Solution",
    image: antControlImage,
    features: [
      "Eliminates entire colonies, not just individual ants",
      "Long-lasting barrier protection for up to 6 months", 
      "Safe for indoor and outdoor use",
      "Targets 15+ ant species including carpenter ants"
    ],
    benefits: [
      "Fast-acting formula works in 24-48 hours",
      "Prevents future infestations",
      "Non-toxic to pets when used as directed",
      "Easy application with precision applicator"
    ],
    cta: "Eliminate Ant Problems Today"
  },
  rats: {
    title: "RatShield Ultra",
    subtitle: "Professional Rodent Control System",
    image: ratControlImage,
    features: [
      "Advanced bait stations with secure locking mechanism",
      "Weather-resistant for indoor/outdoor placement",
      "Targets rats, mice, and other rodents",
      "Tamper-proof design ensures safety around children"
    ],
    benefits: [
      "Highly effective single-feed formula",
      "Reduces rodent population quickly",
      "Professional-grade solution",
      "Prevents property damage and contamination"
    ],
    cta: "Stop Rodent Damage Now"
  },
  cockroaches: {
    title: "RoachBan Elite",
    subtitle: "Complete Cockroach Elimination",
    image: cockroachControlImage,
    features: [
      "Dual-action gel targets all cockroach species",
      "Works on eggs, nymphs, and adult cockroaches",
      "Remains effective for up to 3 months",
      "Professional-strength formulation"
    ],
    benefits: [
      "Eliminates hidden infestations",
      "Prevents reproduction cycles",
      "Odorless and discreet application",
      "Proven 99.9% elimination rate"
    ],
    cta: "Destroy Cockroach Colonies"
  }
};

export default function PestControlTabs() {
  const [activeTab, setActiveTab] = useState<PestType>('ants');
  const currentPest = pestData[activeTab];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Pest Control Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your pest control solution. Each product is scientifically formulated for maximum effectiveness.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(Object.keys(pestData) as PestType[]).map((pest) => (
            <Button
              key={pest}
              variant={activeTab === pest ? "default" : "outline"}
              onClick={() => setActiveTab(pest)}
              className={`px-8 py-3 text-lg font-semibold transition-all duration-300 ${
                activeTab === pest 
                  ? "bg-primary text-primary-foreground shadow-lg" 
                  : "border-border hover:border-primary hover:text-primary"
              }`}
            >
              {pest.charAt(0).toUpperCase() + pest.slice(1)}
            </Button>
          ))}
        </div>

        {/* Product Content */}
        <Card className="overflow-hidden shadow-xl">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Product Image */}
              <div className="space-y-6">
                <img
                  src={currentPest.image}
                  alt={currentPest.title}
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
                <div className="text-center">
                  <Button variant="default" size="lg" className="px-12 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                    {currentPest.cta}
                  </Button>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    {currentPest.title}
                  </h3>
                  <p className="text-xl text-primary font-medium">
                    {currentPest.subtitle}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {currentPest.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-accent" />
                    Benefits
                  </h4>
                  <ul className="space-y-3">
                    {currentPest.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}