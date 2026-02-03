import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Settings, 
  Zap, 
  Leaf, 
  Shield, 
  ArrowRight,
  Building2,
  Award,
  Users,
  Globe
} from "lucide-react";

const HERO_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663036241636/bkdvcfLndUfIzmUo.png";

const TEAM_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/iS0tuWCbowu9uVIvmwHdVa/sandbox/EcQqyD3FNxc2bvVO0zsKSi-img-4_1770087771000_na1fn_ZW5naW5lZXJpbmctdGVhbS1tZWV0aW5n.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaVMwdHVXQ2Jvd3U5dVZJdm13SGRWYS9zYW5kYm94L0VjUXF5RDNGTnhjMmJ2Vk8wenNLU2ktaW1nLTRfMTc3MDA4Nzc3MTAwMF9uYTFmbl9aVzVuYVc1bFpYSnBibWN0ZEdWaGJTMXRaV1YwYVc1bi5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=J7pqvfd~UbSAYZ9D8dhSF3WNaxzWPSXdlEch-VticoJR~CLDMAYTcvNk-5a5rW4Ud6RPwPlqKlaOSnCmCa9tlFOSR61dJX17uzzYmDmb3tMbQuvQIkC97Z-JQRcRv~PxH4FbCbgfjKb~4sxFTIZccXOBvcwObAFkhaWi9lN7uAE73kmGV6JxK1t2b0BqTdjZJYAuMBEMvJKhT8f5WiTyAqy~Nz4qEfI4Qyw0GidkzLzDwwNCnK2GCoDzTB7rxgvoGwwl2VXXyTzAKkcmpXV2vNYNaHauZ1eECkarsQHFNumFz47Il4QF3Y6YEQzZtaVMtW6ASQrCU7812Fv-L8t55Q__";

const services = [
  {
    icon: Settings,
    title: "Mechanical Engineering",
    description: "HVAC systems, ventilation, plumbing, and boiler services designed for optimal performance and efficiency.",
  },
  {
    icon: Zap,
    title: "Electrical Solutions",
    description: "Power distribution, lighting design, UPS systems, and cable management for reliable electrical infrastructure.",
  },
  {
    icon: Leaf,
    title: "Sustainable Design",
    description: "Green building solutions, energy audits, and environmental management for eco-friendly developments.",
  },
  {
    icon: Shield,
    title: "Fire Protection",
    description: "Comprehensive fire safety systems including sprinklers, alarms, detection, and suppression solutions.",
  },
];

const stats = [
  { icon: Building2, value: "1000+", label: "Projects Completed" },
  { icon: Award, value: "30+", label: "Years of Excellence" },
  { icon: Users, value: "37", label: "Expert Engineers" },
  { icon: Globe, value: "8", label: "Countries Served" },
];

const featuredProjects = [
  {
    title: "Funan Redevelopment",
    category: "Commercial",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
  },
  {
    title: "SGH H9A Outram Medical Campus",
    category: "Healthcare",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&h=400&fit=crop",
  },
  {
    title: "Keppel & GE Towers",
    category: "Commercial",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-20" />
      
      {/* Hero Section - Image is 1904x560px, shows complete image */}
      <section className="relative">
        {/* Desktop: Use the image as an actual img element to preserve aspect ratio */}
        <div className="hidden lg:block relative">
          <img 
            src={HERO_IMAGE} 
            alt="Singapore Skyline" 
            className="w-full h-auto block"
          />
          {/* Content overlay positioned absolutely on top of image */}
          <div className="absolute inset-0 flex items-center">
            <div className="container">
              <div className="max-w-lg">
                <h1 className="text-3xl xl:text-4xl font-serif text-white leading-tight mb-4">
                  Engineering Excellence for Tomorrow's Skyline
                </h1>
                <p className="text-base xl:text-lg text-slate-200 mb-6 leading-relaxed">
                  Leading mechanical and electrical consultancy since 1995. 
                  Delivering innovative solutions across commercial, residential, 
                  healthcare, and industrial sectors.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/projects">
                    <Button size="default" className="bg-primary hover:bg-primary/90 text-white font-medium text-sm">
                      View Projects
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button size="default" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent text-sm">
                      Our Services
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile/Tablet: Use background cover for taller section */}
        <div 
          className="lg:hidden relative min-h-[350px] sm:min-h-[400px] bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 flex items-center py-16">
            <div className="container">
              <div className="max-w-xl">
                <h1 className="text-2xl sm:text-3xl font-serif text-white leading-tight mb-4">
                  Engineering Excellence for Tomorrow's Skyline
                </h1>
                <p className="text-sm sm:text-base text-slate-200 mb-6 leading-relaxed">
                  Leading mechanical and electrical consultancy since 1995. 
                  Delivering innovative solutions across commercial, residential, 
                  healthcare, and industrial sectors.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/projects">
                    <Button size="default" className="bg-primary hover:bg-primary/90 text-white font-medium text-sm">
                      View Projects
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button size="default" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent text-sm">
                      Our Services
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Our Expertise
            </h2>
            <p className="text-muted-foreground">
              Comprehensive MEP engineering solutions tailored to meet the unique 
              requirements of each project, from concept to completion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border-border">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                Recent Projects
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Explore our portfolio of landmark developments across Singapore and the region.
              </p>
            </div>
            <Link href="/projects" className="mt-4 md:mt-0">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Link key={index} href="/projects">
                <Card className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.category} • {project.location}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-serif text-white mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                The Practice
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Alpha Consulting Engineers Pte Ltd was established in January 1995 
                in conjunction with Alpha Engineering Consultant to assist in undertaking 
                a whole spectrum of mechanical and electrical engineering consultancy 
                services pertaining to building construction and other industries in 
                Singapore and the region.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Together with Alpha Engineering Consultant, we have completed numerous 
                projects ranging from condominiums, teaching institutions, hospitals, 
                hotels, office buildings, shopping malls to aircraft hangars and wafer 
                fabrication plants across Singapore, Indonesia, Myanmar, Vietnam, 
                Thailand, and China.
              </p>
              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={TEAM_IMAGE}
                  alt="Alpha Consulting Engineers Team"
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-lg hidden md:block">
                  <div className="text-3xl font-serif mb-1">30+</div>
                  <div className="text-sm opacity-90">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Let's discuss how our engineering expertise can bring your vision to life. 
              Contact us for a consultation.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
