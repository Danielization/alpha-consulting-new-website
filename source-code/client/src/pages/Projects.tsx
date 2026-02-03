import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const PROJECTS_HERO = "https://private-us-east-1.manuscdn.com/sessionFile/iS0tuWCbowu9uVIvmwHdVa/sandbox/EcQqyD3FNxc2bvVO0zsKSi-img-5_1770087767000_na1fn_Y29uc3RydWN0aW9uLXNpdGUtcHJvZ3Jlc3M.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaVMwdHVXQ2Jvd3U5dVZJdm13SGRWYS9zYW5kYm94L0VjUXF5RDNGTnhjMmJ2Vk8wenNLU2ktaW1nLTVfMTc3MDA4Nzc2NzAwMF9uYTFmbl9ZMjl1YzNSeWRXTjBhVzl1TFhOcGRHVXRjSEp2WjNKbGMzTS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=v0-l3QUyVhfka-kwLZ4lvHbRt3HZJD-LRowcii8u6Y6C5FFErINiiG1VudHYKeLWqL6yEq7AitNxWiMTeEdEiKgiWTy68vyRgb8xZaZFzx50BAlpZWh09P87kAaFkx8veGP2IaMKvDurf5aJYAW4XeeD92XR6UhHGjPbYbD7DL7PeO72YnHsgUv1OgUn6vCkU6bwkFdz1m7nc1SOVzljjLHWoyKyIj5ldTuGCwapFxDcz9NtCAhYY3mB71~6To3IEdqlX9WsO9OJEPxI4naKjvRKxnipBnSIwa3FqKflJvb6rLRKEHtFXsLowN64WdHpaebDXPJHo8G4TLJNFr2koA__";

const categories = [
  "All",
  "Commercial",
  "Residential",
  "Healthcare",
  "Industrial",
  "Infrastructure",
  "Institutional",
];

const projects = [
  {
    title: "Funan Redevelopment",
    category: "Commercial",
    location: "Singapore",
    client: "CapitaLand",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    award: "BCA Green Mark",
  },
  {
    title: "SGH H9A Outram Medical Campus",
    category: "Healthcare",
    location: "Singapore",
    client: "MOH Holdings",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&h=400&fit=crop",
  },
  {
    title: "Keppel & GE Towers",
    category: "Commercial",
    location: "Singapore",
    client: "Keppel Land",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&h=400&fit=crop",
  },
  {
    title: "Woodlands Integrated Healthcare Campus",
    category: "Healthcare",
    location: "Singapore",
    client: "MOH Holdings",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
  },
  {
    title: "The Reef at King's Dock",
    category: "Residential",
    location: "Singapore",
    client: "Keppel Land",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
    award: "BCA Green Mark Gold Plus",
  },
  {
    title: "Singapore Datacenter",
    category: "Industrial",
    location: "Singapore",
    client: "NTT Facilities",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    award: "BCA Green Mark Platinum",
  },
  {
    title: "Woods Square",
    category: "Commercial",
    location: "Singapore",
    client: "Woodlands Square Pte Ltd",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    award: "BCA Green Mark Gold Plus",
  },
  {
    title: "Principal Garden",
    category: "Residential",
    location: "Singapore",
    client: "Secure Venture Development",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
    award: "BCA Green Mark Gold Plus",
  },
  {
    title: "Singapore Marina Bayfront Bridge",
    category: "Infrastructure",
    location: "Singapore",
    client: "Urban Redevelopment Authority",
    image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?w=600&h=400&fit=crop",
  },
  {
    title: "Orchardgateway",
    category: "Commercial",
    location: "Singapore",
    client: "UE Orchard Pte Ltd",
    image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600&h=400&fit=crop",
    award: "BCA Green Mark Platinum",
  },
  {
    title: "Sky Habitat",
    category: "Residential",
    location: "Singapore",
    client: "Bishan Residential Development",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop",
    award: "BCA Green Mark Gold Plus",
  },
  {
    title: "NUS COM4",
    category: "Institutional",
    location: "Singapore",
    client: "National University of Singapore",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
  },
  {
    title: "Singapore Flyer",
    category: "Infrastructure",
    location: "Singapore",
    client: "Singapore Flyer Pte Ltd",
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=600&h=400&fit=crop",
    award: "BCA Green Mark",
  },
  {
    title: "Maybank Tower",
    category: "Commercial",
    location: "Singapore",
    client: "Malayan Banking Berhad",
    image: "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=600&h=400&fit=crop",
    award: "BCA Construction Excellence",
  },
  {
    title: "Dakota Residences",
    category: "Residential",
    location: "Singapore",
    client: "Rivershore Pte Ltd",
    image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=600&h=400&fit=crop",
    award: "BCA Green Mark",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

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
            src={PROJECTS_HERO} 
            alt="Projects Background" 
            className="w-full h-auto block"
            style={{ maxHeight: '560px', objectFit: 'cover' }}
          />
          {/* Content overlay positioned absolutely on top of image */}
          <div className="absolute inset-0 page-header-overlay" />
          <div className="absolute inset-0 flex items-center">
            <div className="container text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
                Our Projects
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                1000+ Projects Across 8 Countries
              </p>
            </div>
          </div>
        </div>
        
        {/* Mobile/Tablet: Use background cover for taller section */}
        <div 
          className="lg:hidden relative min-h-[350px] sm:min-h-[400px] bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: `url(${PROJECTS_HERO})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 page-header-overlay" />
          <div className="absolute inset-0 flex items-center py-16">
            <div className="container text-center">
              <h1 className="text-3xl sm:text-4xl font-serif text-white mb-4">
                Our Projects
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
                1000+ Projects Across 8 Countries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {project.award && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                      {project.award}
                    </div>
                  )}
                </div>
                <CardContent className="p-5">
                  <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    {project.category} • {project.location}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Client: {project.client}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Awards Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Awards & Recognition
            </h2>
            <p className="text-muted-foreground">
              Our projects have been recognized with numerous industry awards for 
              excellence in design, construction, and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { count: "15+", label: "BCA Green Mark Platinum" },
              { count: "20+", label: "BCA Green Mark Gold" },
              { count: "10+", label: "Construction Excellence Awards" },
              { count: "5+", label: "Best Buildable Design Awards" },
            ].map((award, index) => (
              <div key={index} className="text-center p-6 bg-muted rounded-lg">
                <div className="text-3xl font-serif text-primary mb-2">{award.count}</div>
                <div className="text-sm text-muted-foreground">{award.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Let's discuss how we can bring your vision to life with our 
              engineering expertise.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium">
                Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
