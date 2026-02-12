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
  "Hotel & Leisure",
];

const projects = [
  // Ongoing Projects
  {
    title: "Bidadari C5",
    category: "Residential",
    location: "Singapore",
    client: "Housing & Development Board",
    developer: "Housing & Development Board",
    status: "Ongoing",
    badge: "Construction",
    image: "/images/Bidadari_C5.jpg",
    isOngoing: true,
  },
  {
    title: "Woodlands Integrated Healthcare Campus",
    category: "Healthcare",
    location: "Singapore",
    client: "MOH Holdings Pte Ltd",
    developer: "MOH Holdings Pte Ltd",
    status: "Ongoing",
    badge: "Post-construction",
    image: "/images/Woodlands_Integrated_Healthcare_Campus.jpg",
    isOngoing: true,
  },
  {
    title: "Nursing Home at Tampines St. 62",
    category: "Healthcare",
    location: "Singapore",
    client: "MOH Holdings Pte Ltd",
    developer: "MOH Holdings Pte Ltd",
    status: "Ongoing",
    badge: "Construction",
    image: "/images/Nursing_Home_at_Tampines_Street_62.jpeg",
    isOngoing: true,
  },
  {
    title: "Keppel & GE Towers",
    category: "Commercial",
    location: "Singapore",
    client: "Keppel Land International Ltd",
    developer: "Keppel Land International Ltd / Mansfield Developments Pte Ltd",
    status: "Ongoing",
    badge: "Construction",
    image: "/images/Keppel_GE_Towers.jpeg",
    isOngoing: true,
  },
  {
    title: "The Reef at King's Dock",
    category: "Residential",
    location: "Singapore",
    client: "Keppel Land",
    developer: "Keppel Land (Singapore) Pte Ltd",
    status: "Ongoing",
    badge: "Construction",
    image: "/images/The_Reef_at_Kings_Dock.jpeg",
    award: "BCA Green Mark Gold Plus",
    isOngoing: true,
  },
  // Completed Projects
  {
    title: "Aircraft Hangars 4 & 5",
    category: "Industrial",
    location: "Singapore",
    client: "SIA Engineering Pte Ltd",
    developer: "SIA Engineering Pte Ltd",
    status: "Completed",
    image: "/images/Aircraft_Hangars_4_5.jpeg",
  },
  {
    title: "Singapore Marina Bayfront Bridge",
    category: "Infrastructure",
    location: "Singapore",
    client: "Urban Redevelopment Authority",
    developer: "Urban Redevelopment Authority",
    status: "Completed",
    image: "/images/Singapore_Marina_Bayfront_Bridge.png",
  },
  {
    title: "Singapore Flyer",
    category: "Hotel & Leisure",
    location: "Singapore",
    client: "Singapore Flyer Pte Ltd",
    developer: "Singapore Flyer Pte Ltd",
    status: "Completed",
    image: "/images/Singapore_Flyer.jpg",
    award: "BCA Green Mark",
  },
  {
    title: "NUS COM3",
    category: "Institutional",
    location: "Singapore",
    client: "National University of Singapore",
    developer: "National University of Singapore",
    status: "Completed",
    image: "/images/NUS_COM3.jpg",
  },
  {
    title: "Singapore Datacenter at Serangoon",
    category: "Industrial",
    location: "Singapore",
    client: "NTT Facilities Inc.",
    developer: "NTT Facilities Inc.",
    status: "Completed",
    image: "/images/Singapore_Datacenter_at_Serangoon.jpg",
    award: "BCA Green Mark Platinum",
  },
  {
    title: "Funan Redevelopment",
    category: "Commercial",
    location: "Singapore",
    client: "CapitaLand",
    developer: "CapitaLand Retail Project Management Pte Ltd",
    status: "Completed",
    image: "/images/Funan_Redevelopment.png",
    award: "BCA Green Mark",
  },
  {
    title: "Nursing Home at Bukit Batok West",
    category: "Institutional",
    location: "Singapore",
    client: "Ministry of Health",
    developer: "Ministry of Health",
    status: "Completed",
    image: "/images/Nursing_Home_at_Bukit_Batok_West.jpeg",
  },
  {
    title: "Woods Square",
    category: "Commercial",
    location: "Singapore",
    client: "Woodlands Square Pte Ltd",
    developer: "Woodlands Square Pte Ltd",
    status: "Completed",
    image: "/images/Woods_Square.jpg",
    award: "BCA Green Mark Gold Plus",
  },
  {
    title: "Principal Garden",
    category: "Residential",
    location: "Singapore",
    client: "Secure Venture Development",
    developer: "Secure Venture Development",
    status: "Completed",
    image: "/images/Principal_Garden.png",
    award: "BCA Green Mark Gold Plus",
  },
  {
    title: "Orchardgateway",
    category: "Commercial",
    location: "Singapore",
    client: "UE Orchard Pte Ltd",
    developer: "UE Orchard Pte Ltd",
    status: "Completed",
    image: "/images/Orchardgateway.png",
    award: "BCA Green Mark Platinum",
  },
  {
    title: "Sky Habitat",
    category: "Residential",
    location: "Singapore",
    client: "Bishan Residential Development",
    developer: "Bishan Residential Development Pte Ltd",
    status: "Completed",
    image: "/images/Sky_Habitat.jpeg",
    award: "BCA Green Mark Gold Plus",
  },
  {
    title: "Maybank Tower",
    category: "Commercial",
    location: "Singapore",
    client: "Malayan Banking Berhad",
    developer: "Malayan Banking Berhad",
    status: "Completed",
    image: "/images/Maybank_Tower.jpeg",
    imagePosition: "top",
    award: "BCA Construction Excellence",
  },
  {
    title: "Dakota Residences",
    category: "Residential",
    location: "Singapore",
    client: "Rivershore Pte Ltd",
    developer: "Rivershore Pte Ltd",
    status: "Completed",
    image: "/images/Dakota_Residences.png",
    award: "BCA Green Mark",
  },
  {
    title: "Nursing Home at Jurong West",
    category: "Institutional",
    location: "Singapore",
    client: "Ministry of Health",
    developer: "Ministry of Health",
    status: "Completed",
    image: "/images/Nursing_Home_at_Jurong_West.jpg",
  },
  {
    title: "LTA Circle Line",
    category: "Infrastructure",
    location: "Singapore",
    client: "Land Transport Authority",
    developer: "Land Transport Authority",
    status: "Completed",
    image: "/images/LTA_Circle_Line.jpeg",
  },
  {
    title: "National Cancer Centre",
    category: "Institutional",
    location: "Singapore",
    client: "Singapore General Hospital",
    developer: "Singapore General Hospital",
    status: "Completed",
    image: "/images/National_Cancer_Centre.png",
  },
  {
    title: "Shangri-La Hotel",
    category: "Hotel & Leisure",
    location: "Singapore",
    client: "Shangri-La Hotel Ltd",
    developer: "Shangri-La Hotel Ltd",
    status: "Completed",
    image: "/images/Shangri-LaHotel.jpeg",
  },
  {
    title: "Marina Mandarin Hotel",
    category: "Hotel & Leisure",
    location: "Singapore",
    client: "Marina Mandarin Hotel",
    developer: "Marina Mandarin Hotel",
    status: "Completed",
    image: "/images/Marina_Mandarin_Hotel.jpg",
  },
  {
    title: "Reflections at Keppel Bay",
    category: "Residential",
    location: "Singapore",
    client: "Keppel Land International Ltd",
    developer: "Keppel Land International Ltd",
    status: "Completed",
    image: "/images/Reflections_at_Keppel_Bay.png",
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
      <section className="relative h-[50vh] min-h-[400px] max-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${PROJECTS_HERO})` }}
        />
        <div className="absolute inset-0 page-header-overlay" />
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
            Our Projects
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            1000+ Projects Across 8 Countries
          </p>
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
                className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 p-0 h-full flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: project.imagePosition || 'center' }}
                  />
                  {project.badge && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs px-3 py-1 rounded-full font-medium">
                      {project.badge}
                    </div>
                  )}
                  {project.award && project.badge && (
                    <div className="absolute top-12 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                      {project.award}
                    </div>
                  )}
                  {project.award && !project.badge && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                      {project.award}
                    </div>
                  )}
                </div>
                <CardContent className="p-5 flex-1 flex flex-col">
                  <h3 className="font-serif text-lg text-foreground mb-3 group-hover:text-primary transition-colors leading-tight min-h-[3.5rem] flex items-center">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2 min-h-[2.5rem] flex items-start">
                    {project.developer}
                  </p>
                  <p className="text-muted-foreground text-sm mb-2">
                    Status: {project.status}
                  </p>
                  <p className="text-muted-foreground text-sm mt-auto">
                    {project.category} • {project.location}
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

        {/* Full Profile Download Section */}
        <div className="mt-16 py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              View Our Complete Portfolio
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Download our comprehensive company profile to explore our complete project portfolio, 
              technical expertise, and detailed case studies.
            </p>
            <a
              href="/AlphaConsultingEngineersFullProfile.pdf"
              download="AlphaConsultingEngineersFullProfile.pdf"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 8l-4-2m4 2l4-2"
                />
              </svg>
              Download Full Company Profile (PDF)
            </a>
          </div>
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
