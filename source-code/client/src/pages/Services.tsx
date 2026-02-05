import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Settings, 
  Zap, 
  Flame, 
  Shield,
  Truck,
  Radio,
  Cpu,
  Leaf,
  ArrowRight,
  Lightbulb,
  PenTool,
  Hammer,
  Wrench,
  ChevronRight
} from "lucide-react";

const SERVICES_HERO = "/ServicesBanner1.png";

const serviceCategories = [
  {
    icon: Settings,
    title: "Mechanical Services",
    color: "bg-blue-500",
    services: [
      "Air conditioning systems",
      "Mechanical ventilation systems",
      "Hot and cold water systems",
      "Soil and waste water plumbing systems",
      "Town gas piping system",
      "Compressed air system",
      "Boiler, steam and condensate services",
      "Swimming pool filtration plants",
    ],
    image: "/Mechanical_Services.png",
  },
  {
    icon: Zap,
    title: "Electrical Services",
    color: "bg-yellow-500",
    services: [
      "Power generation, base load and standby power",
      "Distribution sub-stations",
      "Power distribution systems",
      "Lighting design, normal & emergency",
      "Uninterruptible power supplies",
      "Cable management systems",
      "Lightning protection system",
    ],
    image: "/Electrical2.png",
  },
  {
    icon: Flame,
    title: "Fire Protection Services",
    color: "bg-red-500",
    services: [
      "Automatic fire sprinkler system",
      "Fire hydrant system",
      "Fire hose reel system",
      "Wet & dry riser systems",
      "Gaseous extinguishing systems",
      "Fire detection & alarm systems",
      "Portable fire extinguishers",
    ],
    image: "/FireSafety2.png",
  },
  {
    icon: Truck,
    title: "Transportation Services",
    color: "bg-purple-500",
    services: [
      "Lifts",
      "Dumbwaiters",
      "Escalators",
      "Travellators",
      "Automated document conveyance systems",
      "Cranes and hoists",
    ],
    image: "/Travellator.png",
  },
  {
    icon: Cpu,
    title: "Specialty Services",
    color: "bg-cyan-500",
    services: [
      "Computer Rooms and Data Centres",
      "Clean rooms",
      "Bio-hazard laboratories",
      "Operating theatres, isolation rooms",
      "Freezer and Cold Room refrigeration plants",
      "District cooling system",
      "Sewage pumping stations and treatment",
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
  },
  {
    icon: Radio,
    title: "Communication & Surveillance",
    color: "bg-indigo-500",
    services: [
      "Voice communication systems",
      "Audio-visual systems",
      "PABX telephone system",
      "MATV system",
      "Building automation systems",
      "Security monitoring/alarm and access control",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
  },
];

const projectPhases = [
  {
    phase: "Planning",
    icon: Lightbulb,
    color: "bg-blue-500",
    borderColor: "border-blue-500",
    bgLight: "bg-blue-50",
    services: [
      "Technical advisory services",
      "Economic and engineering feasibility studies",
      "Value engineering",
      "Planning and scheme design",
    ]
  },
  {
    phase: "Design",
    icon: PenTool,
    color: "bg-purple-500",
    borderColor: "border-purple-500",
    bgLight: "bg-purple-50",
    services: [
      "Concept/Schematic, design development & drafting",
      "Contract documentation",
      "Cost estimating, appraisal & control",
      "Engineering audit on design & installation",
    ]
  },
  {
    phase: "Construction",
    icon: Hammer,
    color: "bg-orange-500",
    borderColor: "border-orange-500",
    bgLight: "bg-orange-50",
    services: [
      "Tender evaluation",
      "Contract administration & construction supervision",
      "Project and construction management",
      "Inspection & testing",
      "Quality assurance",
    ]
  },
  {
    phase: "Operations",
    icon: Wrench,
    color: "bg-green-500",
    borderColor: "border-green-500",
    bgLight: "bg-green-50",
    services: [
      "Facility management",
      "Energy audit",
      "Energy conservation and management",
    ]
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] max-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${SERVICES_HERO})` }}
        />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive MEP Engineering Solutions
          </p>
        </div>
      </section>

      {/* Scope of Services - Timeline */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              Scope of Services
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We provide end-to-end engineering consultancy services, from initial 
              concept through to project completion and facility management.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Connection Line - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-orange-500 to-green-500 z-0" style={{ top: '3rem' }} />
            
            {/* Phase Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {projectPhases.map((phase, index) => (
                <div key={index} className="group relative">
                  {/* Phase Header */}
                  <div className={`${phase.bgLight} rounded-t-xl p-6 border-t-4 ${phase.borderColor} transition-all duration-300 group-hover:shadow-lg`}>
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className={`w-16 h-16 ${phase.color} rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-lg`}>
                        <phase.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-serif text-foreground mb-1">
                        {phase.phase}
                      </h3>
                      <div className="text-xs text-muted-foreground font-medium">
                        PHASE {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Services List */}
                  <div className="bg-white border border-t-0 rounded-b-xl p-6 transition-all duration-300 group-hover:shadow-lg min-h-[320px] flex flex-col">
                    <ul className="space-y-3 flex-1">
                      {phase.services.map((service, sIndex) => (
                        <li key={sIndex} className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          <ChevronRight className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Our comprehensive approach ensures seamless project delivery from start to finish
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Field of Specialization
            </h2>
            <p className="text-muted-foreground">
              Our expertise spans across all major disciplines of mechanical and 
              electrical engineering for building services.
            </p>
          </div>

          <div className="space-y-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg">
                <div className={`grid lg:grid-cols-3 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:col-span-2 p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center`}>
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-serif text-foreground">{category.title}</h3>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {category.services.map((service, sIndex) => (
                        <li key={sIndex} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`hidden lg:block p-6 ${index % 2 === 1 ? 'order-first' : ''}`}>
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover rounded-xl"
                      style={{ 
                        objectPosition: category.title === 'Electrical Services' 
                          ? '25% 50%'  // Electrical: show person
                          : category.title === 'Transportation Services'
                          ? '50% 50%'  // Transportation: center to show travellator
                          : '0% 50%'   // Mechanical, Fire Protection, and others: far left
                      }}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Design Section */}
      <section className="section-padding bg-primary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Leaf className="h-8 w-8 text-white" />
                <h2 className="text-3xl md:text-4xl font-serif text-white">
                  Sustainable Design
                </h2>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed">
                We are committed to sustainable engineering practices that minimize 
                environmental impact while maximizing efficiency. Our green building 
                solutions have earned numerous BCA Green Mark certifications.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Solar energy utilisation",
                  "Energy/Water recovery and management",
                  "Indoor Air Quality control system",
                  "Air pollution control systems",
                  "Water filtration and treatment",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/90">
                    <Shield className="h-5 w-5 text-white shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <div className="text-4xl font-serif text-white mb-2">15+</div>
                <div className="text-white/80 text-sm">Green Mark Platinum Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <div className="text-4xl font-serif text-white mb-2">20+</div>
                <div className="text-white/80 text-sm">Green Mark Gold Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center col-span-2">
                <div className="text-4xl font-serif text-white mb-2">ISO 14001:2015</div>
                <div className="text-white/80 text-sm">Environmental Management Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              Need Engineering Consultation?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let us help you find the right engineering solutions for your project.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
