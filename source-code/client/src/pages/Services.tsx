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
  ArrowRight
} from "lucide-react";

const SERVICES_HERO = "https://private-us-east-1.manuscdn.com/sessionFile/iS0tuWCbowu9uVIvmwHdVa/sandbox/EcQqyD3FNxc2bvVO0zsKSi-img-3_1770087769000_na1fn_c2VydmljZXMtYmx1ZXByaW50LWJn.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaVMwdHVXQ2Jvd3U5dVZJdm13SGRWYS9zYW5kYm94L0VjUXF5RDNGTnhjMmJ2Vk8wenNLU2ktaW1nLTNfMTc3MDA4Nzc2OTAwMF9uYTFmbl9jMlZ5ZG1salpYTXRZbXgxWlhCeWFXNTBMV0puLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=acT1lxyYiCWTxOWTiKViWZCOnD0ZPOR1Rf4kCgddTD4R2ReDwBLH5EUTuqHrchrgwwANe~AifY30Q8E8oN51C2B5QtpzO4r6S0bpBztSrt3e5ycpzittZfBNrNwcW4iTF1R03qaPHLO2N-xVL7~JDiiAWQNutOTTu2L0yVxyu0Ln4xpN8DIk7yt72COQzcQEMSFrPLT9y0fNmIkDgQ0CtsvGEkHDZbdk18efyo94Ok2cM-DTs6Xsm9B7mZxTjqvgh5G0-CBDMZVbr-ivofB1a4rgQmCRvyYRDmeb3ey7avV3PEAJBhk9lOv5cefUPTrarc91ca8DsKnvLSOgHZEwWw__";

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
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
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

const scopeOfServices = [
  "Technical advisory services",
  "Economic and engineering feasibility studies",
  "Value engineering",
  "Planning and scheme design",
  "Concept/Schematic, design development & drafting",
  "Tender evaluation",
  "Contract documentation",
  "Contract administration & construction supervision",
  "Project and construction management",
  "Cost estimating, appraisal & control",
  "Inspection & testing",
  "Quality assurance",
  "Engineering audit on design & installation",
  "Energy audit",
  "Energy conservation and management",
  "Facility management",
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative">
        {/* Desktop: Use the image as an actual img element to preserve aspect ratio */}
        <div className="hidden lg:block relative">
          <img 
            src={SERVICES_HERO} 
            alt="Services Background" 
            className="w-full h-auto block"
          />
          {/* Content overlay positioned absolutely on top of image */}
          <div className="absolute inset-0 bg-slate-900/70" />
          <div className="absolute inset-0 flex items-center">
            <div className="container text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
                Our Services
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Comprehensive MEP Engineering Solutions
              </p>
            </div>
          </div>
        </div>
        
        {/* Mobile/Tablet: Use background cover for taller section */}
        <div 
          className="lg:hidden relative min-h-[350px] sm:min-h-[400px] bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: `url(${SERVICES_HERO})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-slate-900/70" />
          <div className="absolute inset-0 flex items-center py-16">
            <div className="container text-center">
              <h1 className="text-3xl sm:text-4xl font-serif text-white mb-4">
                Our Services
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
                Comprehensive MEP Engineering Solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scope of Services */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {scopeOfServices.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-muted rounded-lg hover:bg-primary/5 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-sm text-foreground">{service}</span>
              </div>
            ))}
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
                  <div className={`hidden lg:block ${index % 2 === 1 ? 'order-first' : ''}`}>
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
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
